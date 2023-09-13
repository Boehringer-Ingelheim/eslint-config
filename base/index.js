/**
 * Workaround to allow ESLint to resolve plugins that were installed
 * by an external config, see https://github.com/eslint/eslint/issues/3458.
 */
require("@rushstack/eslint-patch/modern-module-resolution");

/** @type {import('eslint').ESLint.ConfigData & { parserOptions: import('eslint').ESLint.ConfigData & import('@typescript-eslint/parser').ParserOptions } }  */
module.exports = {
  env: {
    es2022: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:perfectionist/recommended-natural",
    "plugin:sonarjs/recommended",
  ],
  overrides: [
    {
      files: [
        "**/*.d.ts", // TypeScript declaration files
        "**/*.{spec,test}.*", // Usually test files
        "./*.{js,cjs,mjs,ts,cts,mts}", // Mostly configuration files on root level
      ],
      rules: {
        "import/no-unused-modules": "off",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    // find the tsconfig.json nearest each source file
    project: true,
  },
  plugins: ["@typescript-eslint", "sonarjs"],
  rules: {
    // @typescript-eslint: https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules
    "@typescript-eslint/adjacent-overload-signatures": "off", // disabled due to conflict with eslint-plugin-perfectionist
    "@typescript-eslint/no-floating-promises": ["error", { ignoreVoid: true }],
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: false,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/sort-type-constituents": "off", // disabled due to conflict with eslint-plugin-perfectionist

    // eslint: https://github.com/eslint/eslint/tree/main/lib/rules
    "arrow-body-style": ["error", "as-needed"],
    camelcase: "warn",
    curly: "error",
    "default-case": "error",
    "dot-notation": ["error", { allowPattern: "^[a-z]+(_[a-z]+)+$" }],
    eqeqeq: "error",
    "logical-assignment-operators": ["error", "never"],
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-else-return": ["error", { allowElseIf: false }],
    "no-empty-function": "error",
    "no-lonely-if": "error",
    "no-negated-condition": "error",
    "no-nested-ternary": "error",
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-unneeded-ternary": "error",
    "no-useless-concat": "error",
    "operator-assignment": ["error", "never"],
    "prefer-const": "error",
    "prefer-rest-params": "error",
    "prefer-template": "error",
    "sort-imports": "off", // disabled due to conflict with eslint-plugin-perfectionist
    "sort-keys": "off", // disabled due to conflict with eslint-plugin-perfectionist

    // eslint-plugin-import: https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules
    "import/no-cycle": "error",
    "import/no-unused-modules": [
      "error",
      {
        missingExports: true,
        src: ["."],
        unusedExports: true,
      },
    ],
    "import/order": "off", // disabled due to conflict with eslint-plugin-perfectionist
    "import/prefer-default-export": "off",

    // eslint-plugin-perfectionist: https://github.com/azat-io/eslint-plugin-perfectionist
    "perfectionist/sort-imports": [
      "error",
      {
        "newlines-between": "ignore",
      },
    ],
    "perfectionist/sort-objects": [
      "error",
      {
        "partition-by-comment": true,
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: true,
    },
  },
};
