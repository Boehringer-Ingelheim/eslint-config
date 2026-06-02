import { describe, expect, it } from 'vitest';
import { resolveRulesForFile } from '../__tests__/helpers.js';
import strict from './strict.js';

/**
 * `strict` only adds rule entries on top of `base`; it has no plugins,
 * `linterOptions`, or settings of its own. The resolved-rule snapshot is
 * therefore the entirety of the structural regression check. The behavioral
 * test in `strict.behavior.test.ts` covers the one rule we reconfigured.
 */
describe('configs/strict', () => {
  it('snapshot of resolved rules for src/foo.ts', async () => {
    const resolved = await resolveRulesForFile({ config: strict, filename: 'src/foo.ts' });
    expect(resolved).toMatchSnapshot();
  });
});
