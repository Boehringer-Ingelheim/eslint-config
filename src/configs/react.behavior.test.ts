import { describe, expect, it } from 'vitest';
import { lintFile } from '../__tests__/helpers.js';
import react from './react.js';

const ruleIds = (messages: { ruleId: null | string }[]) =>
  messages.map((m) => m.ruleId).filter((id): id is string => id !== null);

describe('configs/react — behavioral', () => {
  it('reports `no-restricted-syntax` on enum declarations', async () => {
    const messages = await lintFile({
      code: `export enum Color { Red, Green, Blue }\n`,
      config: react,
      extension: 'tsx',
    });
    expect(ruleIds(messages)).toContain('no-restricted-syntax');
  });

  it('reports `@typescript-eslint/no-restricted-types` for React.FC usage', async () => {
    const messages = await lintFile({
      code: `import * as React from 'react';\nexport const Foo: React.FC = () => null;\n`,
      config: react,
      extension: 'tsx',
    });
    expect(ruleIds(messages)).toContain('@typescript-eslint/no-restricted-types');
  });
});
