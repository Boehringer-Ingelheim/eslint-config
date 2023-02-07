# ESLint Configuration

> ESLint statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline. - <https://eslint.org/>

This is the shared ESLint configuration used at [Boehringer Ingelheim](https://github.com/orgs/Boehringer-Ingelheim) for code styling.

[![npm version](https://img.shields.io/npm/v/@boehringer-ingelheim/eslint-config?style=for-the-badge)](https://www.npmjs.com/package/@boehringer-ingelheim/eslint-config)
[![npm downloads](https://img.shields.io/npm/dm/@boehringer-ingelheim/eslint-config?style=for-the-badge)](https://www.npmjs.com/package/@boehringer-ingelheim/eslint-config)
[![License: Apache-2.0](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://github.com/boehringer-ingelheim/eslint-config/blob/master/LICENSE)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=for-the-badge)](https://github.com/boehringer-ingelheim/eslint-config/graphs/commit-activity)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-green.svg?logo=conventional-commits&style=for-the-badge)](https://conventionalcommits.org)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-494949?logo=semantic-release&style=for-the-badge)](https://github.com/semantic-release/semantic-release)

## Usage

### Install the package

```sh
npm install --save-dev @boehringer-ingelheim/eslint-config
```

### Add the configuration

Create or update the `.eslintrc.js` file in your projects root directory accordingly.

```js
module.exports = {
  extends: ["@boehringer-ingelheim/eslint-config/base/strict"],
};
```

#### Extend or Override configuration

This is not recommended as the goal is to have similar code stylings in all projects, but if for some reason you need to add or change the configuration, it is possible in the following way:

```js
module.exports = {
  extends: ["@boehringer-ingelheim/eslint-config/base/strict"],
  rules: {
    "no-empty-function": "off",
  },
};
```

More Information: [ESLint - Configuration Files
](https://eslint.org/docs/latest/use/configure/configuration-files#extending-configuration-files)

### Run

```sh
npx eslint .
```

## Shared Configurations

Opinionated Options that differ from the standard/recommended eslint configurations.

### `@boehringer-ingelheim/eslint-config/base`

```js
module.exports = {
  extends: ["@boehringer-ingelheim/eslint-config/base"],
};
```

This shared ESLint configuration is set up for TypeScript projects that adhere to modern JavaScript standards. It uses the latest version of TypeScript (ES2022) and extends several plugins and recommended rules to enforce best practices and catch potential errors.

The following plugins are used in this configuration:

- [`@typescript-eslint/eslint-plugin`](https://typescript-eslint.io/rules/)
- [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import)
- [`eslint-plugin-sonarjs`](https://github.com/SonarSource/eslint-plugin-sonarjs)

Additionally, the [`eslint-plugin-sort-keys-plus`](https://github.com/forivall/eslint-plugin-sort-keys-plus) is used to automatically fix sorting issues.

This configuration also sets up the TypeScript parser [`@typescript-eslint/parser`](https://typescript-eslint.io/architecture/parser) and [`eslint-import-resolver-typescript`](https://github.com/import-js/eslint-import-resolver-typescript). The TypeScript project file `./tsconfig.json` is set as default value for the project option in the parser configuration. If this is not the case, this must be changed accordingly:

```js
module.exports = {
  parserOptions: {
    // Use `tsconfing.dev.json` as typescript project configuration, see: https://typescript-eslint.io/architecture/parser/#project
    project: "./tsconfig.dev.json",
  },
};
```

### `@boehringer-ingelheim/eslint-config/base/strict`

```js
module.exports = {
  extends: ["@boehringer-ingelheim/eslint-config/base/strict"],
};
```

This shared ESLint configuration extends the `@boehringer-ingelheim/eslint-config/base` configuration and adds additional strict linting rules from the `@typescript-eslint/eslint-plugin` plugin. These strict rules aim to enforce a high standard of code quality and improve code maintainability.

### `@boehringer-ingelheim/eslint-config/react`

```js
module.exports = {
  extends: ["@boehringer-ingelheim/eslint-config/base/strict", "@boehringer-ingelheim/eslint-config/react"],
};
```

This shared ESLint configuration is specifically tailored for [React](https://reactjs.org/) projects, and extends `@boehringer-ingelheim/eslint-config/base`. It uses the browser environment, and includes recommended configurations for the following plugins: jsx-a11y, react, and react-hooks.

- [`eslint-plugin-jsx-a11y`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [`eslint-plugin-react`](https://github.com/jsx-eslint/eslint-plugin-react)
- [`eslint-plugin-react-hooks`](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)

The configuration sets several custom rules, including `@typescript-eslint/ban-types` and `@typescript-eslint/consistent-type-definitions`, as well as rules for organizing and formatting import statements.

### `@boehringer-ingelheim/eslint-config/playwright`

```js
module.exports = {
  extends: ["@boehringer-ingelheim/eslint-config/base/strict", "@boehringer-ingelheim/eslint-config/playwright"],
};
```

This shared ESLint configuration is designed to enforce best practices and recommendations when writing tests with Playwright. It extends the [`eslint-plugin-playwright`](https://github.com/playwright-community/eslint-plugin-playwright) configuration and adds the following rules:

- [`playwright/prefer-to-be`](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-to-be.md): enforces the use of `.toBe()` instead of `.toEqual()` when testing for equality.
- [`playwright/prefer-to-have-length`](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-to-have-length.md): enforces the use of `.toHaveLength()` instead of `.toEqual(n)` when testing the length of an object.
- [`playwright/require-top-level-describe`](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/require-top-level-describe.md): requires tests to be organized into top-level `describe()` blocks.

## Local Development

### Install Dependencies

```sh
npm install
```

### Test

```sh
npm test
```

### Repair

This command may be useful when obscure errors or issues are encountered. It removes and recreates dependencies of your project.

```sh
npm run repair
```

### Release

Fully automated version management and package publishing via [semantic-release](https://github.com/semantic-release). It bumps the version according to conventional commits, publishes the package to npm and release a new version to GitHub.

#### Automatic Release (GitHub Action) [Recommended]

Make sure that the secrets `GITHUB_TOKEN` and `NPM_TOKEN` are available in GitHub repository.

```sh
npm run release:ci
```

#### Manual Release

Make sure that the environment variables `GITHUB_TOKEN` and `NPM_TOKEN` are set or declared in `.env` and a productive build was previously created via `npm run build`.

```sh
npm run release
```

## Roadmap

- [ ] Shared configuration: Angular
- [ ] Shared configuration: Node.js
- [ ] Test Cases
- [ ] "[Flat](https://eslint.org/docs/latest/use/configure/configuration-files-new)" Config

## Show your support

Give a ⭐️ if this project helped you!

## License

Copyright © 2023 [Boehringer Ingelheim](https://github.com/boehringer-ingelheim).<br />
This project is [MIT](https://github.com/boehringer-ingelheim/eslint-config/blob/master/LICENSE) licensed.

## Resources

- <https://eslint.org/>
- <https://typescript-eslint.io/>
- <https://react-typescript-cheatsheet.netlify.app/>
- <https://prettier.io/>
- <https://conventionalcommits.org/en/v1.0.0/>
- <https://semantic-release.gitbook.io/>
- <https://semver.org/>
