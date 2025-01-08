# ESLint Configuration

> ESLint statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline. - <https://eslint.org/>

This is the shared ESLint configuration used at [Boehringer Ingelheim](https://github.com/orgs/Boehringer-Ingelheim) for code styling.

[![npm version](https://img.shields.io/npm/v/@boehringer-ingelheim/eslint-config?style=for-the-badge)](https://www.npmjs.com/package/@boehringer-ingelheim/eslint-config)
[![npm downloads](https://img.shields.io/npm/dm/@boehringer-ingelheim/eslint-config?style=for-the-badge)](https://www.npmjs.com/package/@boehringer-ingelheim/eslint-config)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://github.com/boehringer-ingelheim/eslint-config/blob/master/LICENSE)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=for-the-badge)](https://github.com/boehringer-ingelheim/eslint-config/graphs/commit-activity)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-green.svg?logo=conventional-commits&style=for-the-badge)](https://conventionalcommits.org)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-494949?logo=semantic-release&style=for-the-badge)](https://github.com/semantic-release/semantic-release)

## Usage

### Install the package

```sh
npm install --save-dev @boehringer-ingelheim/eslint-config
```

### Add the configuration

Create or update the `eslint.config.mjs` (`eslint.config.cjs` is also possible if commonjs is preferred) file in your projects root directory accordingly.

```js
import boehringer from '@boehringer-ingelheim/eslint-config';

export default boehringer.config(
  boehringer.configs.strict
)
```

#### `boehringer.config(...)`

This function is a re-export for the config-helper of typescript eslint (See [docs](https://github.com/typescript-eslint/typescript-eslint/blob/a383d5022b81eaf65ce7b0946491444c6eaa28e3/docs/packages/TypeScript_ESLint.mdx#config)).

#### Extend or Override configuration

This is not recommended as the goal is to have similar code stylings in all projects, but if for some reason you need to add or change the configuration, it is possible in the following way:

```js
import boehringer from '@boehringer-ingelheim/eslint-config';

export default boehringer.config(
  boehringer.configs.strict, 
  {
    rules: {
      'no-empty-function': 'off',
    },
  }
);
```

More Information: [ESLint - Configuration Files
](https://eslint.org/docs/latest/use/configure/configuration-files#extending-configuration-files)

### Run

```sh
npx eslint .
```

## Shared Configurations

Opinionated Options that differ from the standard/recommended eslint configurations.

### Base

```js
import boehringer from '@boehringer-ingelheim/eslint-config';

export default boehringer.config(
  boehringer.configs.base
)
```

This shared ESLint configuration is set up for TypeScript projects that adhere to modern JavaScript standards. It uses the latest version of TypeScript (ES2022) and extends several plugins and recommended rules to enforce best practices and catch potential errors.

The following plugins are used in this configuration:

- [`@typescript-eslint/eslint-plugin`](https://typescript-eslint.io/rules/)
- [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import)
- [`eslint-plugin-sonarjs`](https://github.com/SonarSource/eslint-plugin-sonarjs)

Additionally, the [`eslint-plugin-perfectionist`](https://github.com/azat-io/eslint-plugin-perfectionist) is used to automatically fix sorting issues.

This configuration also sets up the TypeScript parser [`@typescript-eslint/parser`](https://typescript-eslint.io/packages/parser/) and [`eslint-import-resolver-typescript`](https://github.com/import-js/eslint-import-resolver-typescript). The TypeScript project configuration file `./tsconfig.json` is set as default value in the parser configuration. If this is not the case, this must be changed accordingly:

```js
import boehringer from '@boehringer-ingelheim/eslint-config';

export default boehringer.config(boehringer.configs.base, {
  languageOptions: {
    parserOptions: {
      projectService: {
        defaultProject: ['./tsconfig.dev.json'],
      },
    },
  },
});
```

### Local

```js
import boehringer from '@boehringer-ingelheim/eslint-config';

export default boehringer.config(
  boehringer.configs.base,
  boehringer.configs.local
);
```

This shared ESLint configuration configures or disables some rules for a better performance locally. With the help of [`is-ci`](https://www.npmjs.com/package/is-ci) those configs only apply to environments outside the CI pipelines.

### Strict

```js
import boehringer from '@boehringer-ingelheim/eslint-config';

export default boehringer.config(
  boehringer.configs.strict
);
```

This shared ESLint configuration extends the [base configuration](#base) and adds additional strict linting rules from the typescript-eslint plugin. These strict rules aim to enforce a high standard of code quality and improve code maintainability.

### React

```js
import boehringer from '@boehringer-ingelheim/eslint-config';

export default boehringer.config(
  boehringer.configs.strict,
  boehringer.configs.react
);
```

This shared ESLint configuration is specifically tailored for [React](https://reactjs.org/) projects, and extends the [base configuration](#base). It uses the browser environment, and includes recommended configurations for the following plugins:

- [`eslint-plugin-jsx-a11y`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [`eslint-plugin-react`](https://github.com/jsx-eslint/eslint-plugin-react)
- [`eslint-plugin-react-hooks`](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
- [`eslint-plugin-react-refresh`](https://github.com/ArnaudBarre/eslint-plugin-react-refresh) (with rule severity `warn`)

The configuration sets several custom rules, including [`@typescript-eslint/no-restricted-types`](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-restricted-types.mdx) and [`@typescript-eslint/consistent-type-definitions`](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-definitions.mdx), as well as rules for organizing and formatting import statements.
Additionally in restricts the usage of enums using [`no-restricted-syntax`](https://github.com/eslint/eslint/blob/main/docs/src/rules/no-restricted-syntax.md).

### Next.js

```js
import boehringer from '@boehringer-ingelheim/eslint-config';

export default boehringer.config(
  boehringer.configs.strict,
  boehringer.configs.nextjs
);
```

This shared ESLint configuration is specifically tailored for [Next.js](https://nextjs.org/) projects. It extends the [react configuration](#react) and includes the [`@next/eslint-plugin-next`](https://nextjs.org/docs/app/api-reference/config/eslint) plugin with the recommended and [`core-web-vital`](https://nextjs.org/docs/app/api-reference/config/eslint#with-core-web-vitals) rule set.

### Playwright

```js
import boehringer from '@boehringer-ingelheim/eslint-config';

export default boehringer.config(
  boehringer.configs.strict,
  boehringer.configs.playwright
);
```

This shared ESLint configuration is designed to enforce best practices and recommendations when writing tests with Playwright. It extends the [`eslint-plugin-playwright`](https://github.com/playwright-community/eslint-plugin-playwright) configuration and adds the following rules:

- [`playwright/prefer-to-be`](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-to-be.md): enforces the use of `.toBe()` instead of `.toEqual()` when testing for equality.
- [`playwright/prefer-to-have-length`](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-to-have-length.md): enforces the use of `.toHaveLength()` instead of `.toEqual(n)` when testing the length of an object.
- [`playwright/require-top-level-describe`](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/require-top-level-describe.md): requires tests to be organized into top-level `describe()` blocks.

### Prettier-disable

```js
import boehringer from '@boehringer-ingelheim/eslint-config';
import prettier from 'eslint-plugin-prettier/recommended';

export default boehringer.config(
  boehringer.configs.strict,
  // Following needs eslint-plugin-prettier to be installed as described by https://github.com/prettier/eslint-plugin-prettier
  // Should be second to last
  prettier,
  // Should be last
  boehringer.configs.prettierDisable,
);
```

This shared ESLint configuration is wrapper around [`eslint-config-disable`](https://github.com/prettier/eslint-config-prettier), which is used to turn off all rules that are unnecessary or might conflict with Prettier. This wrapper reenables a few rules that can be used with our shared configurations as we are using specific options of those rules which are compatible with Prettier (see [Special Rules](https://github.com/prettier/eslint-config-prettier#special-rules)). Following rules are reenabled:

- [`curly`](https://github.com/eslint/eslint/blob/main/docs/src/rules/curly.md) with the (default) option "all": Enforce consistent brace style for all control statements
- [`no-confusing-arrow`](https://github.com/eslint/eslint/blob/main/docs/src/rules/no-confusing-arrow.md) with allowParens `false` and onlyOneSimpleParam `true`: Disallow arrow functions where they could be confused with comparisons.

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
- [x] "[Flat](https://eslint.org/docs/latest/use/configure/configuration-files-new)" Config

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
