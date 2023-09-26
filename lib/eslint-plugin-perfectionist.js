/**
 * While the sorting of imports is done by `eslint-plugin-perfectionist/sort-imports`,
 * the order and grouping of imports is still taken from the previous configuration of `eslint-plugin-import/order`,
 * as it feels more natural.
 * The following group names are available for configuration: https://eslint-plugin-perfectionist.azat.io/rules/sort-imports#groups
 */
const SORT_IMPORTS_GROUPS = [
  ["builtin", "builtin-type"],
  ["external", "external-type"],
  ["internal", "internal-type"],
  ["parent", "parent-type", "sibling", "sibling-type", "index", "index-type"],
  ["style", "side-effect"],
  "object",
  "unknown",
];

module.exports = {
  SORT_IMPORTS_GROUPS,
};
