const tseslint = require('typescript-eslint');

const { DISABLE_TYPE_CHECKING_FILES } = require('../lib/typescript-eslint.js');
const base = require('./base.js');

module.exports = tseslint.config(
  ...base,
  tseslint.configs.strictTypeChecked,
  {
    rules: {
      // @typescript-eslint: https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        {
          ...tseslint.plugin.rules['restrict-template-expressions'].meta.docs.recommended.strict[0],
          allowNumber: true,
        },
      ],

      // eslint-plugin-import: https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    },
  },
  // Needs to be the last config to disable type checking for specific files
  {
    extends: [tseslint.configs.disableTypeChecked],
    files: DISABLE_TYPE_CHECKING_FILES,
  },
);
