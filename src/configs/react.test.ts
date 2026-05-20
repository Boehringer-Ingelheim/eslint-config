import { describe, expect, it } from 'vitest';
import { collectPlugins, resolveRulesForFile } from '../__tests__/helpers.js';
import react from './react.js';

/**
 * Structural assertions are limited to plugin registration. Rule severities,
 * options (incl. `customGroups`, `no-restricted-syntax` selectors,
 * `no-restricted-types` map) are covered by the snapshot. Behavioral
 * verification of our custom selectors lives in `react.behavior.test.ts`.
 */
describe('configs/react', () => {
  const plugins = collectPlugins(react);

  it.each(['react', 'react-hooks', 'react-refresh', 'jsx-a11y'])('registers the %s plugin', (plugin) => {
    expect(plugins.has(plugin)).toBe(true);
  });

  it('snapshot of resolved rules for src/Foo.tsx', async () => {
    const resolved = await resolveRulesForFile({ config: react, filename: 'src/Foo.tsx' });
    expect(resolved).toMatchSnapshot();
  });
});
