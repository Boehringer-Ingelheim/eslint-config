/**
 * Workaround to allow ESLint to resolve plugins that were installed
 * by an external config, see https://github.com/eslint/eslint/issues/3458.
 */
require('@rushstack/eslint-patch/modern-module-resolution');

/** @type {import('eslint').ESLint.ConfigData & { parserOptions: import('eslint').ESLint.ConfigData['parserOptions'] & import('@typescript-eslint/parser').ParserOptions } }  */
module.exports = {
  extends: ['prettier'],
  rules: {
    curly: 'error',
  },
};
