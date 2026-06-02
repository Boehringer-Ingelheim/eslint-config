import { describe, expect, it } from 'vitest';
import { lintFile } from '../__tests__/helpers.js';
import base from './base.js';
import experimentalNamingConvention from './experimental-naming-convention.js';

const combined = [...base, ...experimentalNamingConvention];

const ruleIds = (messages: { ruleId: null | string }[]) =>
  messages.map((m) => m.ruleId).filter((id): id is string => id !== null);

describe('configs/experimental-naming-convention — behavioral', () => {
  it('reports `@typescript-eslint/naming-convention` for I-prefixed interfaces', async () => {
    const messages = await lintFile({
      code: `export interface IFoo { value: number; }\n`,
      config: combined,
    });
    expect(ruleIds(messages)).toContain('@typescript-eslint/naming-convention');
  });

  it('reports `@typescript-eslint/naming-convention` for T-prefixed type aliases', async () => {
    const messages = await lintFile({
      code: `export type TFoo = string;\n`,
      config: combined,
    });
    expect(ruleIds(messages)).toContain('@typescript-eslint/naming-convention');
  });

  it('reports for top-level array variables missing the plural-S suffix', async () => {
    const messages = await lintFile({
      code: `export const item: string[] = [];\n`,
      config: combined,
    });
    expect(ruleIds(messages)).toContain('@typescript-eslint/naming-convention');
  });

  it('does not report when conventions are followed', async () => {
    const messages = await lintFile({
      code:
        `export interface Foo { value: number; }\n` +
        `export type Bar = string;\n` +
        `export const ITEMS: readonly string[] = [];\n` +
        `export const COUNT = 5;\n`,
      config: combined,
    });
    expect(ruleIds(messages)).not.toContain('@typescript-eslint/naming-convention');
  });
});
