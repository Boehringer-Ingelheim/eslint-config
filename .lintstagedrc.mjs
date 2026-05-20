export default {
  '*.json': ['prettier --write', 'git add --force'],
  '*.{js,ts}': [
    // Extend rule set of .eslintrc.js with 'no-console'
    "eslint --fix --rule 'no-console: [error, { allow: [warn, error] }]'",
    'git add --force',
  ],
};
