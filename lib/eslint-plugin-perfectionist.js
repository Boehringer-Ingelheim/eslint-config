// Groups from shared config: https://eslint-plugin-perfectionist.azat.io/rules/sort-imports#groups
const SORT_IMPORTS_GROUPS = [
  ["builtin", "builtin-type"],
  ["external", "external-type"],
  ["internal", "internal-type"],
  ["parent", "parent-type", "sibling", "sibling-type", "index", "index-type", "style"],
  "side-effect",
  "object",
  "unknown",
];

module.exports = {
  SORT_IMPORTS_GROUPS,
};
