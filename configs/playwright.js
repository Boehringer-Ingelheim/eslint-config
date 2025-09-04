const playwright = require('eslint-plugin-playwright');
const { defineConfig } = require('eslint/config');

module.exports = defineConfig({
  ...playwright.configs['flat/recommended'],
  rules: {
    /**
     * At the moment, `eslint-plugin-playwright` does not fully support component testing with type information.
     * https://github.com/playwright-community/eslint-plugin-playwright/issues/298
     *
     * The `mount` function is flagged as an error by the `@typescript-eslint/unbound-method` rule.
     * But it is okay to use `mount` in this context for test files.
     * https://typescript-eslint.io/rules/unbound-method/#when-not-to-use-it
     *
     * Hint: `eslint-plugin-jest` has already a customized version of this rule.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
     */
    '@typescript-eslint/unbound-method': 'off',

    // eslint-plugin-playwright: https://github.com/playwright-community/eslint-plugin-playwright
    ...playwright.configs['flat/recommended'].rules,
    'playwright/prefer-to-be': 'error',
    'playwright/prefer-to-have-length': 'error',
    'playwright/require-top-level-describe': 'error',
  },
});
