import { randomBytes } from 'node:crypto';
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ESLint } from 'eslint';
import type { Linter } from 'eslint';

export type AnyFlatConfig = Linter.Config | Linter.Config[];

const FIXTURES_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'fixtures');

export const fixturesDir = FIXTURES_DIR;

/**
 * Recursively flattens a flat-config tree (as produced by `defineConfig`,
 * which may contain nested arrays) into a plain `Linter.Config[]`.
 */
export const flatten = (config: unknown): Linter.Config[] => {
  if (Array.isArray(config)) {
    return config.flatMap((entry) => flatten(entry));
  }

  if (config && typeof config === 'object') {
    return [config];
  }

  return [];
};

export type RuleEntry = Linter.RuleEntry;

/**
 * Merges all `rules` objects across the flattened config (last-wins, just like
 * ESLint's resolver does for entries that share a `files` scope).
 *
 * Note: this is a coarse merge — entries with `files` patterns are still
 * included. It is appropriate for regression-style assertions about which
 * rules are configured anywhere in the config, not for simulating ESLint's
 * exact per-file resolution.
 */
export const collectRules = (config: unknown): Record<string, RuleEntry> => {
  const result: Record<string, RuleEntry> = {};

  for (const entry of flatten(config)) {
    if (entry.rules) {
      for (const [ruleId, value] of Object.entries(entry.rules)) {
        if (value !== undefined) {
          result[ruleId] = value;
        }
      }
    }
  }

  return result;
};

/**
 * Returns the set of plugin keys registered anywhere in the flattened config.
 */
export const collectPlugins = (config: unknown): Set<string> => {
  const result = new Set<string>();

  for (const entry of flatten(config)) {
    if (entry.plugins) {
      for (const key of Object.keys(entry.plugins)) {
        result.add(key);
      }
    }
  }

  return result;
};

export interface LintOptions {
  code: string;
  config: AnyFlatConfig;
  filename?: string;
}

/**
 * Lints a code snippet against the given flat-config and returns the messages.
 * Uses ESLint's programmatic API with `overrideConfigFile: true` so the
 * caller's working-directory eslint config is ignored.
 */
export const lintSource = async ({ code, config, filename }: LintOptions): Promise<Linter.LintMessage[]> => {
  const eslint = new ESLint({
    overrideConfig: flatten(config),
    overrideConfigFile: true,
  });

  const [result] = await eslint.lintText(code, filename ? { filePath: filename } : undefined);

  return result?.messages ?? [];
};

export interface LintFileOptions {
  code: string;
  config: AnyFlatConfig;
  /** File extension (without the dot). Defaults to `ts`. */
  extension?: string;
  /** Optional filename prefix to drive `files` patterns (e.g. `'page'`). */
  prefix?: string;
}

/**
 * Writes the snippet to a temporary file inside the fixtures directory
 * (so `projectService`/typechecked rules can resolve a real tsconfig)
 * and lints it. Cleans up the file afterwards.
 */
export const lintFile = async ({
  code,
  config,
  extension = 'ts',
  prefix = 'snippet',
}: LintFileOptions): Promise<Linter.LintMessage[]> => {
  mkdirSync(FIXTURES_DIR, { recursive: true });
  const filename = `${prefix}-${randomBytes(6).toString('hex')}.${extension}`;
  const filePath = path.join(FIXTURES_DIR, filename);
  writeFileSync(filePath, code, 'utf8');

  try {
    const eslint = new ESLint({
      cwd: FIXTURES_DIR,
      overrideConfig: flatten(config),
      overrideConfigFile: true,
    });
    const [result] = await eslint.lintFiles([filePath]);
    return result?.messages ?? [];
  } finally {
    rmSync(filePath, { force: true });
  }
};

export type NormalizedRule = readonly [severity: 0 | 1 | 2, ...options: unknown[]];

export interface ResolveRulesOptions {
  config: AnyFlatConfig;
  /**
   * Workspace-relative path used by ESLint to resolve `files`/`ignores`
   * overrides (e.g. `'src/foo.ts'`, `'app/page.tsx'`, `'proxy.ts'`).
   */
  filename: string;
}

/**
 * Uses ESLint's `calculateConfigForFile` to compute the *resolved* config that
 * would actually apply when linting a file at the given path. Returns the
 * `rules` map, normalized so:
 *
 * - severities are numeric (0 = off, 1 = warn, 2 = error),
 * - rules with severity `0` are dropped (so plugin-default `off` rules don't
 *   bloat snapshots),
 * - the result is sorted by rule id for stable snapshots.
 *
 * This complements `collectRules` (which merges naively, ignoring `files`
 * scoping) by providing the realistic per-file view ESLint would use.
 */
export const resolveRulesForFile = async ({
  config,
  filename,
}: ResolveRulesOptions): Promise<Record<string, NormalizedRule>> => {
  const filePath = path.resolve(FIXTURES_DIR, filename);
  mkdirSync(path.dirname(filePath), { recursive: true });
  writeFileSync(filePath, '', 'utf8');

  try {
    const eslint = new ESLint({
      cwd: FIXTURES_DIR,
      overrideConfig: flatten(config),
      overrideConfigFile: true,
    });
    const resolved = (await eslint.calculateConfigForFile(filePath)) as {
      rules?: Record<string, unknown>;
    };

    const normalized: Record<string, NormalizedRule> = {};
    for (const [ruleId, raw] of Object.entries(resolved.rules ?? {})) {
      const entry: unknown[] = Array.isArray(raw) ? (raw as unknown[]) : [raw];
      const severity = normalizeSeverity(entry[0]);
      if (severity === 0) {
        continue;
      }
      const options = entry.slice(1);
      normalized[ruleId] = [severity, ...options] as NormalizedRule;
    }

    return Object.fromEntries(
      Object.entries(normalized).sort(([a], [b]) => {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      }),
    );
  } finally {
    rmSync(filePath, { force: true });
  }
};

const normalizeSeverity = (value: unknown): 0 | 1 | 2 => {
  if (value === 'error' || value === 2) {
    return 2;
  }
  if (value === 'warn' || value === 1) {
    return 1;
  }
  return 0;
};
