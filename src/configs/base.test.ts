import { describe, expect, it } from 'vitest';
import { collectPlugins, flatten, resolveRulesForFile } from '../__tests__/helpers.js';
import base from './base.js';

/**
 * Structural assertions are limited to things that are NOT visible in the
 * per-file resolved-rule snapshots below: plugin registration and
 * `linterOptions`. Rule severities, options, and `files`-scoped overrides are
 * covered by the snapshots — see TESTING.md.
 */
describe('configs/base', () => {
  const flat = flatten(base);
  const plugins = collectPlugins(base);

  it.each(['@typescript-eslint', 'import-x', 'perfectionist', 'sonarjs'])('registers the %s plugin', (plugin) => {
    expect(plugins.has(plugin)).toBe(true);
  });

  it('reports unused disable directives via linterOptions', () => {
    expect(flat.some((entry) => entry.linterOptions?.reportUnusedDisableDirectives === 'error')).toBe(true);
  });

  it('snapshot of resolved rules for src/foo.ts', async () => {
    const rules = await resolveRulesForFile({ config: base, filename: 'src/foo.ts' });
    expect(rules).toMatchSnapshot();
  });

  it('snapshot of resolved rules for src/foo.spec.ts (test override)', async () => {
    const rules = await resolveRulesForFile({ config: base, filename: 'src/foo.spec.ts' });
    expect(rules).toMatchSnapshot();
  });
});
