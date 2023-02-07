/**
 * Workaround to allow ESLint to resolve plugins that were installed
 * by an external config, see https://github.com/eslint/eslint/issues/3458.
 */
require("@rushstack/eslint-patch/modern-module-resolution");

/** @type {import('eslint').ESLint.ConfigData}  */
module.exports = {
  extends: ["plugin:playwright/playwright-test"],
  rules: {
    // eslint-plugin-playwright: https://github.com/playwright-community/eslint-plugin-playwright
    "playwright/prefer-to-be": "error",
    "playwright/prefer-to-have-length": "error",
    "playwright/require-top-level-describe": "error",
  },
};
