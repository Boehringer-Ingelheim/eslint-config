import { SORT_IMPORTS_GROUPS } from '../lib/eslint-plugin-perfectionist';
import baseConfig from '../base';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactRecommended from 'eslint-plugin-react/configs/recommended';
import reactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import('eslint').ESLint.ConfigData }  */
export default [
  baseConfig,
  jsxA11y.flatConfigs.recommended,
  reactRecommended,
  reactJsxRuntime,
  ...compat.extends('plugin:typescript-enum/recommended'),
  {
    env: {
      browser: true,
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: ['jsx-a11y', 'react', 'react-hooks', 'react-refresh', 'typescript-enum'],
    rules: {
      // @typescript-eslint: https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules
      '@typescript-eslint/ban-types': [
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
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

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
          'custom-groups': {
            type: {
              react: ['react'],
            },
            value: {
              react: ['react'],
            },
          },
          groups: ['react', ...SORT_IMPORTS_GROUPS],
          'ignore-case': true,
          'newlines-between': 'ignore',
          type: 'natural',
        },
      ],
      'perfectionist/sort-jsx-props': [
        'error',
        {
          'custom-groups': {
            callback: 'on*',
            reservedProps: ['children', 'dangerouslySetInnerHTML', 'key', 'ref'], // Reserved props from: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/lib/rules/jsx-sort-props.js#L40C12-L40C12
          },
          groups: ['reservedProps', 'unknown', 'callback'],
          'ignore-case': true,
          type: 'natural',
        },
      ],

      // eslint-plugin-react-refresh: https://github.com/ArnaudBarre/eslint-plugin-react-refresh
      'react-refresh/only-export-components': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
