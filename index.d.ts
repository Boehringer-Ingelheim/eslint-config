import { FlatConfig } from '@eslint/compat';
import { Config } from 'typescript-eslint';

type Configs =
  | 'base'
  | 'experimentalNamingConvention'
  | 'local'
  | 'nextjs'
  | 'playwright'
  | 'prettierDisable'
  | 'react'
  | 'strict';

declare module './index' {
  const config: typeof import('typescript-eslint').config;
  const configs: Record<Configs, Config>;
  /**
   * Reads an ignore file (e.g. `.gitignore`) and returns an object with the ignore patterns.
   *
   * @param {string} [ignoreFilePath='.gitignore'] - The path to the ignore file. Defaults to `.gitignore`.
   * @throws {TypeError} If the provided path is not a string.
   * @throws {Error} If the provided path is an empty string.
   * @returns {FlatConfig} The result of including the ignore file at the resolved absolute path.
   */
  const includeIgnoreFile: (ignoreFilePath = '.gitignore') => FlatConfig;

  export { config, configs, includeIgnoreFile };
}
