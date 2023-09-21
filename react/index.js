const { SORT_IMPORTS_GROUPS } = require("../lib/eslint-plugin-perfectionist");

/**
 * Workaround to allow ESLint to resolve plugins that were installed
 * by an external config, see https://github.com/eslint/eslint/issues/3458.
 */
require("@rushstack/eslint-patch/modern-module-resolution");

/** @type {import('eslint').ESLint.ConfigData & { parserOptions: import('eslint').ESLint.ConfigData & import('@typescript-eslint/parser').ParserOptions } }  */
module.exports = {
  env: {
    browser: true,
  },
  extends: [
    "../base/index.js",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:typescript-enum/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["jsx-a11y", "react", "react-hooks", "typescript-enum"],
  rules: {
    // @typescript-eslint: https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules
    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {
          "React.FC": {
            message:
              "Please use object type destructure declaration, see: https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components",
          },
          "React.FunctionalComponent": {
            message:
              "Please use object type destructure declaration, see: https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components",
          },
        },
      },
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],

    // eslint-plugin-react: https://github.com/jsx-eslint/eslint-plugin-react/tree/master/lib/rules
    "react/jsx-pascal-case": "error",
    "react/jsx-sort-props": "off", // disabled due to conflict with eslint-plugin-perfectionist
    "react/sort-default-props": "error",

    // eslint-plugin-react-hooks: https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/README.md
    "react-hooks/exhaustive-deps": "error",
    "react-hooks/rules-of-hooks": "error",

    // eslint-plugin-perfectionist: https://github.com/azat-io/eslint-plugin-perfectionist
    "perfectionist/sort-imports": [
      "error",
      {
        "custom-groups": {
          type: {
            react: ["react"],
          },
          value: {
            react: ["react"],
          },
        },
        groups: ["react", ...SORT_IMPORTS_GROUPS],
        "ignore-case": true,
        "newlines-between": "ignore",
        type: "natural",
      },
    ],
    "perfectionist/sort-jsx-props": [
      "error",
      {
        "custom-groups": {
          callback: "on*",
          reservedProps: ["children", "dangerouslySetInnerHTML", "key", "ref"], // Reserved props from: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/lib/rules/jsx-sort-props.js#L40C12-L40C12
        },
        groups: ["reservedProps", "unknown", "callback"],
        "ignore-case": true,
        type: "natural",
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
