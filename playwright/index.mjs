import playwright from 'eslint-plugin-playwright';

/** @type {import('eslint').ESLint.ConfigData}  */
export default [
  {
    ...playwright.configs['flat/recommended'],
    files: ['tests/**'],
  },
  {
    files: ['tests/**'],
    rules: {
      // eslint-plugin-playwright: https://github.com/playwright-community/eslint-plugin-playwright
      'playwright/prefer-to-be': 'error',
      'playwright/prefer-to-have-length': 'error',
      'playwright/require-top-level-describe': 'error',
    },
  },
];
