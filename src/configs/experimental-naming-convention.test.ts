import { describe, expect, it } from 'vitest';
import { resolveRulesForFile } from '../__tests__/helpers.js';
import base from './base.js';
import experimentalNamingConvention from './experimental-naming-convention.js';

/**
 * The selector list (and each entry's regex/prefix/format) is captured in
 * full by the resolved-rule snapshot. Behavioral verification that the
 * regexes actually flag `IFoo`/`TFoo` lives in
 * `experimental-naming-convention.behavior.test.ts`.
 */
describe('configs/experimental-naming-convention', () => {
  it('snapshot of resolved rules for src/foo.ts (composed with base)', async () => {
    const resolved = await resolveRulesForFile({
      config: [...base, ...experimentalNamingConvention],
      filename: 'src/foo.ts',
    });
    expect(resolved).toMatchSnapshot();
  });
});
