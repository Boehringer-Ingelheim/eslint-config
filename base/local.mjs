import isCI from 'is-ci';

/** @type {import('eslint').ESLint.ConfigData}  */
export default [
  {
    rules: isCI
    ? {}
    : {
        // Only activate in CI, as suggested here: https://typescript-eslint.io/linting/troubleshooting/performance-troubleshooting#eslint-plugin-import
        'import/no-cycle': 'off',
        'import/no-deprecated': 'off',
        'import/no-named-as-default': 'off',
        'import/no-unused-modules': 'off',
      },
  }
]
