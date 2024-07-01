/**
 * Workaround to allow ESLint to resolve plugins that were installed
 * by an external config, see https://github.com/eslint/eslint/issues/3458.
 */
require('@rushstack/eslint-patch/modern-module-resolution');

const isCI = require('is-ci');

/** @type {import('eslint').ESLint.ConfigData}  */
module.exports = {
  rules: isCI
    ? {}
    : {
        // Only activate in CI, as suggested here: https://typescript-eslint.io/linting/troubleshooting/performance-troubleshooting#eslint-plugin-import
        'import/no-cycle': 'off',
        'import/no-deprecated': 'off',
        'import/no-named-as-default': 'off',
        'import/no-unused-modules': 'off',
      },
};
