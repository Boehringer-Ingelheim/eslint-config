import eslint from '@eslint/js';
import perfectionistNatural from 'eslint-plugin-perfectionist/configs/recommended-natural';

/** @type {import('eslint').ESLint.ConfigData}  */
export default [
  eslint.configs.recommended,
  perfectionistNatural,
  {
    env: {
      es2022: true,
      node: true,
    },
    rules: {
      'perfectionist/sort-objects': [
        'error',
        {
          'partition-by-comment': true,
        },
      ],
      'sort-keys': 'off', // disabled due to conflict with eslint-plugin-perfectionist
    },
  },
];
