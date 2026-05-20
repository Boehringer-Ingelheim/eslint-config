import path from 'node:path';
import { cwd } from 'node:process';
import { fileURLToPath } from 'node:url';
import { afterEach, describe, expect, it, vi } from 'vitest';

const compatMock = vi.hoisted(() => ({
  includeIgnoreFile: vi.fn((absolutePath: string) => ({
    ignores: [],
    name: 'mock-ignore',
    receivedPath: absolutePath,
  })),
}));

vi.mock('@eslint/compat', () => compatMock);

const FIXTURES_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../__tests__/fixtures');

describe('lib/include-ignore-file', () => {
  afterEach(() => {
    compatMock.includeIgnoreFile.mockClear();
    vi.unstubAllGlobals();
  });

  it("defaults to '.gitignore' relative to cwd", async () => {
    const { includeIgnoreFile } = await import('./include-ignore-file.js');
    includeIgnoreFile();
    expect(compatMock.includeIgnoreFile).toHaveBeenCalledOnce();
    expect(compatMock.includeIgnoreFile).toHaveBeenCalledWith(path.resolve(cwd(), '.gitignore'));
  });

  it('resolves a custom relative path against cwd', async () => {
    const { includeIgnoreFile } = await import('./include-ignore-file.js');
    includeIgnoreFile('./backend/.gitignore');
    expect(compatMock.includeIgnoreFile).toHaveBeenCalledWith(path.resolve(cwd(), './backend/.gitignore'));
  });

  it('returns whatever @eslint/compat returns', async () => {
    const { includeIgnoreFile } = await import('./include-ignore-file.js');
    const result = includeIgnoreFile();
    expect(result).toMatchObject({ name: 'mock-ignore' });
  });

  it('throws TypeError on non-string input', async () => {
    const { includeIgnoreFile } = await import('./include-ignore-file.js');
    // @ts-expect-error: validating runtime guard
    expect(() => includeIgnoreFile(42)).toThrow(TypeError);
  });

  it('throws on empty string input', async () => {
    const { includeIgnoreFile } = await import('./include-ignore-file.js');
    expect(() => includeIgnoreFile('')).toThrow('Expected a non-empty string');
  });
});

describe('lib/include-ignore-file (integration)', () => {
  it('invokes the real @eslint/compat helper against a fixture .gitignore', async () => {
    vi.doUnmock('@eslint/compat');
    vi.resetModules();
    const previous = cwd();
    try {
      process.chdir(FIXTURES_DIR);
      const { includeIgnoreFile } = await import('./include-ignore-file.js');
      const config = includeIgnoreFile();
      expect(config).toBeDefined();
      expect(config.ignores).toEqual(expect.arrayContaining([expect.any(String)]));
    } finally {
      process.chdir(previous);
    }
  });
});
