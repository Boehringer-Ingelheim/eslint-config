import eslint from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import perfectionist from 'eslint-plugin-perfectionist';
import sonarjs from 'eslint-plugin-sonarjs';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

import {
  PERFECTIONIST_SETTINGS,
  SORT_CLASSES_GROUPS,
  SORT_IMPORTS_GROUPS,
  SORT_INTERSECTION_TYPES_GROUPS,
} from '../lib/eslint-plugin-perfectionist.js';

export default defineConfig(
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
        projectService: true,
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
      'no-lonely-if': 'error',
      'no-negated-condition': 'error',
      'no-nested-ternary': 'error',
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'no-unneeded-ternary': 'error',
      'no-useless-concat': 'error',
      'operator-assignment': ['error', 'never'],
      'prefer-template': 'error',
      'sort-imports': 'off', // disabled due to conflict with eslint-plugin-perfectionist
      'sort-keys': 'off', // disabled due to conflict with eslint-plugin-perfectionist

      // eslint-plugin-import: https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules
      'import/no-cycle': 'error',
      /**
       * The rule is disabled for now as it is not compatible with flat-configs, without adding an artifical `.eslintrc` file.
       *
       * @see: https://github.com/import-js/eslint-plugin-import/issues/3079#issuecomment-2557191925
       * @todo Enable rule, as soon as fix is available: https://github.com/Boehringer-Ingelheim/eslint-config/blob/9f028ed43bb5db11082a2982f249ddfe7eaf5c13/configs/base.js#L77
       */
      'import/no-unused-modules': 'off',
      'import/order': 'off', // disabled due to conflict with eslint-plugin-perfectionist
      'import/prefer-default-export': 'off',

      // Deactivated as TypeScript provides the same checks as part of standard type checking: https://typescript-eslint.io/linting/troubleshooting/performance-troubleshooting
      'import/default': 'off',
      'import/named': 'off',
      'import/namespace': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-unresolved': 'off',

      // eslint-plugin-perfectionist: https://github.com/azat-io/eslint-plugin-perfectionist
      'perfectionist/sort-classes': [
        'error',
        {
          groups: SORT_CLASSES_GROUPS,
        },
      ],
      'perfectionist/sort-imports': [
        'error',
        {
          groups: SORT_IMPORTS_GROUPS,
          newlinesBetween: 0, // No newlines are allowed between groups
        },
      ],
      'perfectionist/sort-intersection-types': [
        'error',
        {
          groups: SORT_INTERSECTION_TYPES_GROUPS,
        },
      ],
      'perfectionist/sort-named-imports': [
        'error',
        {
          ignoreAlias: true,
        },
      ],
      'perfectionist/sort-objects': [
        'error',
        {
          partitionByComment: true,
        },
      ],
    },
    settings: {
      'import/resolver': {
        typescript: true,
      },
      perfectionist: {
        ...PERFECTIONIST_SETTINGS,
      },
    },
  },
  {
    files: [
      '**/*.d.ts', // TypeScript declaration files
      '**/*.{spec,test}.{js,cjs,mjs,jsx,ts,cts,mts,tsx}', // Usually test files
      './*.{js,cjs,mjs,ts,cts,mts}', // Mostly configuration files on root level
    ],
    rules: {
      'import/no-unused-modules': 'off',
    },
  },
);
