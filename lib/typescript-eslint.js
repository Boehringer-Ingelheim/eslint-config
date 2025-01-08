/**
 * List of files that should not be type checked by TypeScript.
 * Ref: https://typescript-eslint.io/troubleshooting/typed-linting/#i-get-errors-telling-me-eslint-was-configured-to-run--however-that-tsconfig-does-not--none-of-those-tsconfigs-include-this-file
 */
const DISABLE_TYPE_CHECKING_FILES = ['eslint.config.{js,cjs,mjs}'];

module.exports = {
  DISABLE_TYPE_CHECKING_FILES,
};
