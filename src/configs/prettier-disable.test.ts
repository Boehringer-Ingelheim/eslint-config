import { describe, expect, it } from 'vitest';
import { resolveRulesForFile } from '../__tests__/helpers.js';
import base from './base.js';
import prettierDisable from './prettier-disable.js';

/**
 * The whole point of this config is which rules end up enabled vs. disabled
 * after composing with `eslint-config-prettier`. The resolved-rule snapshot
 * captures that exhaustively. The inline `expect(resolved['curly']?.[0]).toBe(2)`
 * is kept as an explicit regression check for the most surprising behaviour
 * (we re-enable `curly` after prettier disables it).
 */
describe('configs/prettier-disable', () => {
  it('snapshot of resolved rules for src/foo.ts (composed with base)', async () => {
    const resolved = await resolveRulesForFile({
      config: [...base, ...prettierDisable],
      filename: 'src/foo.ts',
    });
    // Regression check: `curly` must remain `error` despite eslint-config-prettier.
    expect(resolved['curly']?.[0]).toBe(2);
    expect(resolved).toMatchSnapshot();
  });
});
