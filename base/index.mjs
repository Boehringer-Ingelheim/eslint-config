import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';
import perfectionistNatural from 'eslint-plugin-perfectionist/configs/recommended-natural';
import sonarjs from 'eslint-plugin-sonarjs';
import { SORT_CLASSES_GROUPS, SORT_IMPORTS_GROUPS } from '../lib/eslint-plugin-perfectionist.mjs';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...compat.extends('plugin:import/recommended'),
  ...compat.extends('plugin:import/typescript'),
  perfectionistNatural,
  sonarjs.configs.recommended,
  {
    env: {
      es2022: true,
    },
    languageOptions: {
      parserOptions: {
        // find the tsconfig.json nearest each source file
        project: true,
      },
    },
    plugins: ['@typescript-eslint', 'sonarjs'],
    linterOptions: {
      // Warn about unused eslint-disable directives
      reportUnusedDisableDirectives: true,
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
      'arrow-body-style': ['error', 'as-needed'],
      camelcase: 'warn',
      curly: 'error',
      'default-case': 'error',
      'dot-notation': ['error', { allowPattern: '^[a-z]+(_[a-z]+)+$' }],
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
      'perfectionist/sort-array-includes': ['error', { 'ignore-case': true, type: 'natural' }],
      'perfectionist/sort-astro-attributes': ['error', { 'ignore-case': true, type: 'natural' }],
      'perfectionist/sort-classes': ['error', { groups: SORT_CLASSES_GROUPS, 'ignore-case': true, type: 'natural' }],
      'perfectionist/sort-enums': ['error', { 'ignore-case': true, type: 'natural' }],
      'perfectionist/sort-exports': ['error', { 'ignore-case': true, type: 'natural' }],
      'perfectionist/sort-imports': [
        'error',
        {
          groups: SORT_IMPORTS_GROUPS,
          'ignore-case': true,
          'newlines-between': 'ignore',
          type: 'natural',
        },
      ],
      'perfectionist/sort-interfaces': ['error', { 'ignore-case': true, type: 'natural' }],
      'perfectionist/sort-intersection-types': ['error', { 'ignore-case': true, type: 'natural' }],
      'perfectionist/sort-jsx-props': ['error', { 'ignore-case': true, type: 'natural' }],
      'perfectionist/sort-maps': ['error', { 'ignore-case': true, type: 'natural' }],
      'perfectionist/sort-named-exports': ['error', { 'ignore-case': true, type: 'natural' }],
      'perfectionist/sort-named-imports': ['error', { 'ignore-alias': true, 'ignore-case': true, type: 'natural' }],
      'perfectionist/sort-object-types': ['error', { 'ignore-case': true, type: 'natural' }],
      'perfectionist/sort-objects': ['error', { 'ignore-case': true, 'partition-by-comment': true, type: 'natural' }],
      'perfectionist/sort-svelte-attributes': ['error', { 'ignore-case': true, type: 'natural' }],
      'perfectionist/sort-union-types': ['error', { 'ignore-case': true, type: 'natural' }],
      'perfectionist/sort-vue-attributes': ['error', { 'ignore-case': true, type: 'natural' }],
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
];
