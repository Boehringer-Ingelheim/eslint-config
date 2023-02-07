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
  extends: ["../base/index.js", "plugin:jsx-a11y/recommended", "plugin:react/recommended", "plugin:react/jsx-runtime"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["jsx-a11y", "react", "react-hooks"],
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

    // eslint-plugin-import: https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules
    "import/order": [
      "error",
      {
        alphabetize: {
          caseInsensitive: true,
          order: "asc",
          orderImportKind: "asc",
        },
        pathGroups: [
          {
            group: "external",
            pattern: "react",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
      },
    ],

    // eslint-plugin-react: https://github.com/jsx-eslint/eslint-plugin-react/tree/master/lib/rules
    "react/jsx-pascal-case": "error",
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: true,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: true,
        shorthandFirst: false,
        shorthandLast: false,
      },
    ],
    "react/sort-default-props": "error",

    // eslint-plugin-react-hooks: https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/README.md
    "react-hooks/exhaustive-deps": "error",
    "react-hooks/rules-of-hooks": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
