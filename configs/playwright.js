const playwright = require('eslint-plugin-playwright');
const tseslint = require('typescript-eslint');

module.exports = tseslint.config({
  ...playwright.configs['flat/recommended'],
  rules: {
    ...playwright.configs['flat/recommended'].rules,
    // eslint-plugin-playwright: https://github.com/playwright-community/eslint-plugin-playwright
    'playwright/prefer-to-be': 'error',
    'playwright/prefer-to-have-length': 'error',
    'playwright/require-top-level-describe': 'error',
  },
});
