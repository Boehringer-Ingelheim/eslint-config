/** @type {import('eslint').ESLint.ConfigData}  */
module.exports = {
  env: {
    es2022: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:perfectionist/recommended-natural"],
  rules: {
    "perfectionist/sort-objects": [
      "error",
      {
        "partition-by-comment": true,
      },
    ],
    "sort-keys": "off", // disabled due to conflict with eslint-plugin-perfectionist
  },
};
