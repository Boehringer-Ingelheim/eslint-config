/**
 * @filename: lint-staged.config.mjs
 * @type {import('lint-staged').Configuration}
 */
export default {
  '!*.{*js,*ts}': ['prettier --ignore-unknown --write', 'git add --force'],
  '*.{*js,*ts}': [
    // Extend rule set of .eslintrc.js with 'no-console'
    "eslint --fix --rule 'no-console: [error, { allow: [warn, error] }]'",
    'git add --force',
  ],
};
