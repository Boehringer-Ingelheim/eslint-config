const eslint = require('@eslint/js');
const importPlugin = require('eslint-plugin-import');
const perfectionist = require('eslint-plugin-perfectionist');
const sonarjs = require('eslint-plugin-sonarjs');
const tseslint = require('typescript-eslint');

const {
  SORT_CLASSES_GROUPS,
  SORT_IMPORTS_GROUPS,
  SORT_INTERSECTION_TYPES_GROUPS,
} = require('../lib/eslint-plugin-perfectionist.js');

module.exports = tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  perfectionist.configs['recommended-natural'],
  sonarjs.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        // find the tsconfig.json nearest each source file
        project: true,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
    rules: {
      // @typescript-eslint: https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules
      '@typescript-eslint/adjacent-overload-signatures': 'off', // disabled due to conflict with eslint-plugin-perfectionist
      '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true }],
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: false,
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/sort-type-constituents': 'off', // disabled due to conflict with eslint-plugin-perfectionist

      // eslint: https://github.com/eslint/eslint/tree/main/lib/rules
      '@typescript-eslint/dot-notation': ['error', { allowPattern: '^[a-z]+(_[a-z]+)+$' }],
      'arrow-body-style': ['error', 'as-needed'],
      camelcase: 'warn',
      curly: 'error',
      'default-case': 'error',
      eqeqeq: 'error',
      'logical-assignment-operators': ['error', 'never'],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-else-return': ['error', { allowElseIf: false }],
      'no-empty-function': 'error',
      'no-lonely-if': 'error',
      'no-negated-condition': 'error',
      'no-nested-ternary': 'error',
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'no-unneeded-ternary': 'error',
      'no-useless-concat': 'error',
      'operator-assignment': ['error', 'never'],
      'prefer-const': 'error',
      'prefer-rest-params': 'error',
      'prefer-template': 'error',
      'sort-imports': 'off', // disabled due to conflict with eslint-plugin-perfectionist
      'sort-keys': 'off', // disabled due to conflict with eslint-plugin-perfectionist

      // eslint-plugin-import: https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules
      'import/no-cycle': 'error',
      'import/no-unused-modules': [
        'error',
        {
          missingExports: true,
          src: ['.'],
          unusedExports: true,
        },
      ],
      'import/order': 'off', // disabled due to conflict with eslint-plugin-perfectionist
      'import/prefer-default-export': 'off',

      // Deactivated as TypeScript provides the same checks as part of standard type checking: https://typescript-eslint.io/linting/troubleshooting/performance-troubleshooting
      'import/default': 'off',
      'import/named': 'off',
      'import/namespace': 'off',
      'import/no-named-as-default-member': 'off',

      // eslint-plugin-perfectionist: https://github.com/azat-io/eslint-plugin-perfectionist
      'perfectionist/sort-classes': [
        'error',
        {
          ...perfectionist.configs['recommended-natural-legacy'].rules['perfectionist/sort-classes'][1],
          groups: SORT_CLASSES_GROUPS,
        },
      ],
      'perfectionist/sort-imports': [
        'error',
        {
          ...perfectionist.configs['recommended-natural-legacy'].rules['perfectionist/sort-imports'][1],
          groups: SORT_IMPORTS_GROUPS,
          newlinesBetween: 'ignore',
        },
      ],
      'perfectionist/sort-intersection-types': [
        'error',
        {
          ...perfectionist.configs['recommended-natural-legacy'].rules['perfectionist/sort-intersection-types'][1],
          groups: SORT_INTERSECTION_TYPES_GROUPS,
        },
      ],
      'perfectionist/sort-named-imports': [
        'error',
        {
          ...perfectionist.configs['recommended-natural-legacy'].rules['perfectionist/sort-named-imports'][1],
          ignoreAlias: true,
        },
      ],
      'perfectionist/sort-objects': [
        'error',
        {
          ...perfectionist.configs['recommended-natural-legacy'].rules['perfectionist/sort-objects'][1],
          partitionByComment: true,
        },
      ],
    },
    settings: {
      'import/resolver': {
        typescript: true,
      },
    },
  },
  {
    files: [
      '**/*.d.ts', // TypeScript declaration files
      '**/*.{spec,test}.*', // Usually test files
      './*.{js,cjs,mjs,ts,cts,mts}', // Mostly configuration files on root level
    ],
    rules: {
      'import/no-unused-modules': 'off',
    },
  },
);
