type Config = import('eslint').Linter.Config;
type Configs =
  | 'base'
  | 'experimentalNamingConvention'
  | 'local'
  | 'nextjs'
  | 'playwright'
  | 'prettierDisable'
  | 'react'
  | 'strict';

declare module '@boehringer-ingelheim/eslint-config' {
  const configs: Record<Configs, Config>;
  const defineConfig: typeof import('eslint/config').defineConfig;
  /**
   * Reads an ignore file (e.g. `.gitignore`) and returns an object with the ignore patterns.
   *
   * @param {string} [ignoreFilePath='.gitignore'] - The path to the ignore file. Defaults to `.gitignore`.
   * @throws {TypeError} If the provided path is not a string.
   * @throws {Error} If the provided path is an empty string.
   * @returns {Config} The result of including the ignore file at the resolved absolute path.
   */
  const includeIgnoreFile: (ignoreFilePath?: string) => Config;

  export { configs, defineConfig, includeIgnoreFile };
}
