/**
 * Workaround to allow ESLint to resolve plugins that were installed
 * by an external config, see https://github.com/eslint/eslint/issues/3458.
 */
require('@rushstack/eslint-patch/modern-module-resolution');

const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin');

/** @type {import('eslint').ESLint.ConfigData}  */
module.exports = {
  extends: ['./index.js', 'plugin:@typescript-eslint/strict-type-checked'],
  rules: {
    // @typescript-eslint: https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        ...typescriptEslintPlugin.rules['restrict-template-expressions'].meta.docs.recommended.strict,
        allowNumber: true,
      },
    ],

    // eslint-plugin-import: https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
  },
};
