import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

import { PERFECTIONIST_SETTINGS, SORT_IMPORTS_GROUPS } from '../lib/eslint-plugin-perfectionist.js';
import base from './base.js';

export default defineConfig(
  ...base,
  jsxA11y.flatConfigs.recommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  reactRefresh.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      // @typescript-eslint: https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/no-restricted-types': [
        'error',
        {
          types: {
            'React.FC': {
              message:
                'Please use object type destructure declaration, see: https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components',
            },
            'React.FunctionalComponent': {
              message:
                'Please use object type destructure declaration, see: https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components',
            },
          },
        },
      ],

      // eslint-plugin-react: https://github.com/jsx-eslint/eslint-plugin-react/tree/master/lib/rules
      'react/jsx-pascal-case': 'error',
      'react/jsx-sort-props': 'off', // disabled due to conflict with eslint-plugin-perfectionist
      'react/sort-default-props': 'error',

      // eslint-plugin-react-hooks: https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/README.md
      'react-hooks/exhaustive-deps': 'error',
      'react-hooks/rules-of-hooks': 'error',

      // eslint-plugin-perfectionist: https://github.com/azat-io/eslint-plugin-perfectionist
      'perfectionist/sort-imports': [
        'error',
        {
          customGroups: [
            {
              elementNamePattern: ['^react$'],
              groupName: 'react',
            },
          ],
          groups: ['react', ...SORT_IMPORTS_GROUPS],
          newlinesBetween: 0, // No newlines are allowed between groups
        },
      ],
      'perfectionist/sort-jsx-props': [
        'error',
        {
          customGroups: [
            {
              elementNamePattern: '^on.+',
              groupName: 'callback',
            },
            {
              elementNamePattern: ['children', 'dangerouslySetInnerHTML', 'key', 'ref'], // Reserved props from: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/lib/rules/jsx-sort-props.js#L41-L46
              groupName: 'reservedProps',
            },
          ],
          groups: ['reservedProps', 'unknown', 'callback'],
        },
      ],

      // eslint-plugin-react-refresh: https://github.com/ArnaudBarre/eslint-plugin-react-refresh
      'react-refresh/only-export-components': 'warn',

      // Forbid enum declaration
      'no-restricted-syntax': [
        'error',
        {
          message: "Don't declare enums",
          selector: 'TSEnumDeclaration',
        },
      ],
    },
    settings: {
      perfectionist: {
        ...PERFECTIONIST_SETTINGS,
      },
      react: {
        version: 'detect',
      },
    },
  },
);
