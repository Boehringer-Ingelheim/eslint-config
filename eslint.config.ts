import { defineConfig } from 'eslint/config';
import globals from 'globals';
import strict from './src/configs/strict.js';
import { includeIgnoreFile } from './src/main.js';

export default defineConfig(
  includeIgnoreFile(),
  strict,
  {
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
  },
  {
    files: ['src/**/*.test.ts', 'src/__tests__/**/*.ts'],
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      'sonarjs/no-alphabetical-sort': 'off',
      'sonarjs/no-nested-functions': 'off',
    },
  },
);
