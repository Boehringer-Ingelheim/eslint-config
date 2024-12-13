const isCI = require('is-ci');
const tseslint = require('typescript-eslint');

module.exports = tseslint.config(
  isCI
    ? {}
    : {
        rules: {
          // Only activate in CI, as suggested here: https://typescript-eslint.io/linting/troubleshooting/performance-troubleshooting#eslint-plugin-import
          'import/no-cycle': 'off',
          'import/no-deprecated': 'off',
          'import/no-named-as-default': 'off',
          'import/no-unused-modules': 'off',
        },
      },
);
