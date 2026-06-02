import { describe, expect, it } from 'vitest';
import main, { configs, includeIgnoreFile } from './main.js';

const EXPECTED_CONFIG_KEYS = [
  'base',
  'experimentalNamingConvention',
  'local',
  'nextjs',
  'playwright',
  'prettierDisable',
  'react',
  'strict',
] as const;

describe('main exports', () => {
  it('exposes the expected `configs` keys', () => {
    expect(Object.keys(configs).sort()).toEqual([...EXPECTED_CONFIG_KEYS]);
  });

  it.each(EXPECTED_CONFIG_KEYS)('configs.%s is a non-empty array', (key) => {
    const config = configs[key];
    expect(Array.isArray(config)).toBe(true);
    expect(config.length).toBeGreaterThan(0);
  });

  it('re-exports `includeIgnoreFile` as a named export', () => {
    expect(typeof includeIgnoreFile).toBe('function');
  });

  it('default export bundles `configs` and `includeIgnoreFile`', () => {
    expect(main).toEqual({ configs, includeIgnoreFile });
  });
});
