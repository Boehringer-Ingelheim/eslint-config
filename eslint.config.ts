import { defineConfig } from 'eslint/config';
import globals from 'globals';
import strict from './src/configs/strict.js';
import { includeIgnoreFile } from './src/main.js';

export default defineConfig(includeIgnoreFile(), strict, {
  languageOptions: {
    globals: {
      ...globals.node,
    },
    parserOptions: {
      projectService: {
        allowDefaultProject: ['*.*js', '*.*ts'],
      },
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
