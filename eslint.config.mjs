import eslint from '@eslint/js';
import perfectionist from 'eslint-plugin-perfectionist';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

export default defineConfig(eslint.configs.recommended, perfectionist.configs['recommended-natural'], {
  languageOptions: {
    globals: {
      ...globals.node,
    },
  },
  rules: {
    'perfectionist/sort-objects': [
      'error',
      {
        partitionByComment: true,
      },
    ],
    'sort-keys': 'off', // disabled due to conflict with eslint-plugin-perfectionist
  },
});
