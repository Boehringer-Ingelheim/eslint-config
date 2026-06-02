import { describe, expect, it } from 'vitest';
import { lintFile } from '../__tests__/helpers.js';
import strict from './strict.js';

const messagesFor = (messages: { line?: number; ruleId: null | string }[], ruleId: string) =>
  messages.filter((m) => m.ruleId === ruleId);

/**
 * Behavioral tests for `strict` only cover the rules whose options we
 * reconfigured. `consistent-type-imports` and `no-import-type-side-effects`
 * are stock enables, fully covered by the resolved-rule snapshot in
 * `strict.test.ts`.
 *
 * This test also doubles as the type-checked-rule smoke for the strict path.
 */
describe('configs/strict — behavioral (reconfigured rules)', () => {
  it('`restrict-template-expressions` honours `allowNumber: true`', async () => {
    const messages = await lintFile({
      code:
        `const n: number = 42;\n` +
        `const o: object = {};\n` +
        `export const allowed = \`value=\${n}\`;\n` +
        `export const blocked = \`value=\${o}\`;\n`,
      config: strict,
    });
    const reports = messagesFor(messages, '@typescript-eslint/restrict-template-expressions');
    // The number interpolation is allowed; the object interpolation must still report.
    expect(reports).toHaveLength(1);
    expect(reports[0]?.line).toBe(4);
  });
});
