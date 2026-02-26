import type { Linter } from 'eslint';
import type tseslint from 'typescript-eslint';

type Configs =
  | 'base'
  | 'experimentalNamingConvention'
  | 'local'
  | 'nextjs'
  | 'playwright'
  | 'prettierDisable'
  | 'react'
  | 'strict';

declare const boehringerConfig: {
  config: typeof tseslint.config;
  configs: Record<Configs, Linter.Config[]>;
  /**
   * Reads an ignore file (e.g. `.gitignore`) and returns an object with the ignore patterns.
   *
   * @param {string} [ignoreFilePath='.gitignore'] - The path to the ignore file. Defaults to `.gitignore`.
   * @throws {TypeError} If the provided path is not a string.
   * @throws {Error} If the provided path is an empty string.
   * @returns {Linter.Config} The result of including the ignore file at the resolved absolute path.
   */
  includeIgnoreFile: (ignoreFilePath?: string) => Linter.Config;
};

export default boehringerConfig;
