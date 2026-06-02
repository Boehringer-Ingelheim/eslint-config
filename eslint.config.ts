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
          // eslint-disable-next-line camelcase -- sonarjs/no-commented-code rule adds some placeholder.*js files to the project to check if comment is code. Those files do not actually exist, so we need to limit the number of files that are checked.
          maximumDefaultProjectFileMatchCount_THIS_WILL_SLOW_DOWN_LINTING: 10,
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
