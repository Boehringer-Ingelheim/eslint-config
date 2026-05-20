import { describe, expect, it } from 'vitest';
import { resolveRulesForFile } from '../__tests__/helpers.js';
import base from './base.js';
import playwright from './playwright.js';

/**
 * `playwright` is purely a set of stock rule enables/disables; the resolved
 * snapshot is the structural regression check.
 */
describe('configs/playwright', () => {
  it('snapshot of resolved rules for sample.spec.ts (composed with base)', async () => {
    const resolved = await resolveRulesForFile({
      config: [...base, ...playwright],
      filename: 'src/sample.spec.ts',
    });
    expect(resolved).toMatchSnapshot();
  });
});
