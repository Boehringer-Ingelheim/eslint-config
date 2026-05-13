import { defineConfig } from 'eslint/config';
import globals from 'globals';
import strict from './src/configs/strict.js';

export default defineConfig(strict, {
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
    'sonarjs/todo-tag': 'warn',
    'sort-keys': 'off', // disabled due to conflict with eslint-plugin-perfectionist
  },
});
