/** @type {import('eslint').ESLint.ConfigData}  */
module.exports = {
  env: {
    es2022: true,
    node: true,
  },
  extends: ["eslint:recommended"],
  plugins: ["sort-keys-plus"],
  rules: {
    /**
     * Required to fix sort-keys automatically, since this is not done by default.
     * See: https://github.com/forivall/eslint-plugin-sort-keys-plus
     */
    "sort-keys-plus/sort-keys": [
      "error",
      "asc",
      {
        allowLineSeparatedGroups: true,
        caseSensitive: false,
        natural: true,
      },
    ],
  },
};
