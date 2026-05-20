import { describe, expect, it } from 'vitest';
import { lintFile } from '../__tests__/helpers.js';
import base from './base.js';

const ruleIds = (messages: { ruleId: null | string }[]) =>
  messages.map((m) => m.ruleId).filter((id): id is string => id !== null);

const messagesFor = (messages: { line?: number; ruleId: null | string }[], ruleId: string) =>
  messages.filter((m) => m.ruleId === ruleId);

/**
 * Behavioral tests in this file cover rules whose **options we reconfigured**
 * away from the upstream defaults. Stock rule enables (e.g. `eqeqeq`,
 * `prefer-template`) are intentionally not covered here — the resolved-rule
 * snapshot in `base.test.ts` already proves they are configured, and ESLint's
 * own test suite proves they fire.
 *
 * The first test (`no-floating-promises`) doubles as the end-to-end smoke for
 * `parserOptions.projectService` / type-checked rule machinery.
 */
describe('configs/base — behavioral (reconfigured rules)', () => {
  it('`no-floating-promises` honours `ignoreVoid: true`', async () => {
    const messages = await lintFile({
      code:
        `const wait = (): Promise<void> => Promise.resolve();\n` +
        `export const bare = (): void => {\n` +
        `  wait();\n` +
        `};\n` +
        `export const voided = (): void => {\n` +
        `  void wait();\n` +
        `};\n`,
      config: base,
    });
    const reports = messagesFor(messages, '@typescript-eslint/no-floating-promises');
    // Exactly one report — for `wait()`, not for `void wait()`.
    expect(reports).toHaveLength(1);
    expect(reports[0]?.line).toBe(3);
  });

  it('`no-console` allows the entries in the `allow` list', async () => {
    const messages = await lintFile({
      code:
        `export const log = (): void => {\n` +
        `  console.log('nope');\n` +
        `  console.warn('ok');\n` +
        `  console.error('ok');\n` +
        `};\n`,
      config: base,
    });
    const reports = messagesFor(messages, 'no-console');
    expect(reports).toHaveLength(1);
    expect(reports[0]?.line).toBe(2);
  });

  it('`no-unused-vars` ignores the `^_` patterns', async () => {
    const messages = await lintFile({
      code:
        `export const handler = (_event: string, used: number): number => {\n` +
        `  const _ignored = 1;\n` +
        `  try {\n` +
        `    return used;\n` +
        `  } catch (_e) {\n` +
        `    return 0;\n` +
        `  }\n` +
        `};\n`,
      config: base,
    });
    expect(ruleIds(messages)).not.toContain('@typescript-eslint/no-unused-vars');
  });

  it('`dot-notation` allows snake_case property access', async () => {
    const messages = await lintFile({
      code:
        `const obj: Record<string, number> = { snake_case: 1 };\n` +
        `export const value = obj['snake_case'];\n` +
        `export const camel = obj['camelCase'];\n`,
      config: base,
    });
    const reports = messagesFor(messages, '@typescript-eslint/dot-notation');
    // `snake_case` is allowed by the regex; `camelCase` should still report.
    expect(reports).toHaveLength(1);
    expect(reports[0]?.line).toBe(3);
  });
});
