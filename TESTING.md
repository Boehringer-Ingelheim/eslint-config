# Testing strategy

This document explains how the regression tests for the shared ESLint config
are structured, and **when each test approach is used**. The intent is that
contributors changing rule wiring or adding new configs can follow the same
pattern without having to re-derive the trade-offs.

The test suite runs on [Vitest](https://vitest.dev) via `npm test`. Tests live
next to source files as `*.test.ts` and `*.behavior.test.ts` and are excluded
from the published `dist/` output (see `tsconfig.build.json`).

## Test approaches

The suite combines **three complementary approaches**. Each is used for a
specific question we want a regression test to answer; together they should
catch any meaningful change to the shared config.

### 1. Resolved-rule snapshots (`resolveRulesForFile` → `toMatchSnapshot()`)

This is the **primary** regression check. Helper in
[src/**tests**/helpers.ts](src/__tests__/helpers.ts) uses ESLint's
[`calculateConfigForFile`](https://eslint.org/docs/latest/integrate/nodejs-api#-eslintcalculateconfigforfilefilepath)
to compute the rules that ESLint would actually apply to a given file path,
normalizes severities to numbers, drops severity-`0` entries, and snapshots
the result.

**Used for:** capturing the *effective* configuration per file type. Any
change to a rule's severity, options, custom selectors, `customGroups`, or
`files`/`ignores` glob scoping shows up as a snapshot diff.

**Why over manual rule-by-rule assertions:** `calculateConfigForFile` runs
ESLint's real resolver, including `files`/`ignores` matching, severity
normalization, and option default-filling. It captures *everything* in the
`rules` map in one assertion, so contributors don't need to remember to
update individual `expect(rules[...])` calls when they change a rule.

**Why we drop severity-`0` entries:** the merged cascade returns hundreds of
rules from upstream presets that end up `off`. They are dominated by upstream
bookkeeping (one preset turns a rule on, the next turns it off) and churn on
plugin upgrades even when our config didn't change. Filtering them keeps the
snapshot focused on rules that actually run against user code.

> **Trade-off:** if we *intentionally* disable a rule and someone later
> deletes that disable, the snapshot won't catch it as long as something
> upstream still has it `off`. The risk is small (the moment upstream turns
> the rule on, the diff appears) but it's a real gap. Be explicit in code
> review when reviewing snapshot diffs that *add* rules.

**Coverage strategy** — one snapshot per representative file path per config:

| Config | Snapshot file paths |
|---|---|
| `base` | `src/foo.ts`, `src/foo.spec.ts` (exercises the test-file override) |
| `strict` | `src/foo.ts` |
| `react` | `src/Foo.tsx` |
| `nextjs` | `src/components/Foo.tsx`, `app/page.tsx`, `src/app/layout.tsx`, `app/api/users/route.ts`, `middleware.ts`, `proxy.ts`, `instrumentation.ts` |
| `playwright` | `src/sample.spec.ts` (composed with `base`) |
| `prettier-disable` | `src/foo.ts` (composed with `base`) |
| `experimental-naming-convention` | `src/foo.ts` (composed with `base`) |

When you add or change a `files`-scoped override, add a snapshot probe for a
file path that matches the new glob — otherwise the override has no
regression coverage even though the entry exists in the config.

### 2. Structural assertions (`flatten`, `collectPlugins`)

Helpers in [src/**tests**/helpers.ts](src/__tests__/helpers.ts).

**Used for:** the narrow set of facts that `calculateConfigForFile` does
**not** put into its `rules` map and that the snapshot therefore can't see:

- **Plugin registration.** Plugins live on the config object as
  `plugins: { '@next/next': ... }`, not in `rules`. A missing plugin would
  crash at lint time, but we'd rather catch it as an explicit unit-test
  failure than as a noisy fixture failure.
- **`linterOptions`.** Settings like `reportUnusedDisableDirectives` are part
  of the resolved config but live alongside `rules`, not inside it.

That's it. Things like `customGroups`, `naming-convention` selectors,
`no-restricted-syntax` selectors, `no-restricted-types` maps, and
`allowExportNames` lists are **rule options** — they show up in the resolved
snapshot and don't need a separate structural assertion. We deliberately
removed earlier structural tests for those to avoid duplicate coverage.

If you find yourself writing a structural assertion to check a rule option,
that's a sign the snapshot probe set is wrong — add a representative file
path to approach 1 instead.

### 3. Behavioral lint fixtures (`lintFile` → assert reported `ruleId`s)

Helper in [src/**tests**/helpers.ts](src/__tests__/helpers.ts) writes a
snippet to a temp file inside `src/__tests__/fixtures/` (so type-checked
rules can resolve a real `tsconfig.json`) and runs ESLint against it.

**Used for:** rules whose **options or selectors we customised** beyond the
upstream defaults. The behavioral test pins down the *semantics* of the
customisation: that a regex matches the right names, that an `allow` list is
honoured, that a custom AST selector triggers on the intended node, etc.

**Not used for:** rules we merely turn on with stock options. Those are
fully covered by the resolved snapshot (which proves the rule is configured)
combined with the upstream plugin's own test suite (which proves the rule
fires correctly). Adding a behavioral test for a stock rule is just
re-testing upstream.

**Decision rule:** add a behavioral test if and only if removing the custom
options/selector we wrote would *not* be caught by the resolved-rule
snapshot. In practice that means:

- Custom regex / prefix / suffix in `naming-convention` selectors
- `allow` lists, `ignoreVoid`, `allowNumber`, `allowPattern` and similar
  option carve-outs
- Custom AST selectors in `no-restricted-syntax`
- Custom type maps in `no-restricted-types`

**Examples**

- `no-floating-promises` allows `void wait()` because we set `ignoreVoid: true`
  ([base.behavior.test.ts](src/configs/base.behavior.test.ts)).
- `no-console` allows `console.warn`/`console.error` only
  ([base.behavior.test.ts](src/configs/base.behavior.test.ts)).
- `no-unused-vars` ignores `^_`-prefixed identifiers
  ([base.behavior.test.ts](src/configs/base.behavior.test.ts)).
- `dot-notation` allows snake_case property access
  ([base.behavior.test.ts](src/configs/base.behavior.test.ts)).
- `restrict-template-expressions` allows numeric interpolations
  ([strict.behavior.test.ts](src/configs/strict.behavior.test.ts)).
- `no-restricted-types` blocks `React.FC`
  ([react.behavior.test.ts](src/configs/react.behavior.test.ts)).
- `naming-convention` flags `IFoo` interface and `TFoo` type aliases
  ([experimental-naming-convention.behavior.test.ts](src/configs/experimental-naming-convention.behavior.test.ts)).

The first behavioral test in each config also doubles as an end-to-end smoke
for the type-checked-rule machinery (`parserOptions.projectService`); if the
TypeScript program plumbing breaks, those tests fail loudly.

## When to add what

When introducing a change to the shared config, ask:

1. **Did I change which rules are configured, with what severity or options,
   for a given file pattern?** → no new test code needed; the existing
   **resolved-rule snapshot** will diff. Update the snapshot during code
   review (`npx vitest run -u`).
2. **Did I add a new `files`-scoped override?** → add a representative file
   path to the snapshot probe set in that config's `*.test.ts`.
3. **Did I register a new plugin or change a `linterOptions` setting?** →
   add or extend a **structural** test (approach 2).
4. **Did I customise a rule's options, selectors, regex, or `allow` list in
   a way the snapshot diff alone won't make obvious?** → add a **behavioral**
   test that exercises the custom option with at least one positive case
   (rule fires on the intended input) and one negative case (rule is
   suppressed by the option).

## Other notes

- `local.ts` is exercised by mocking `is-ci` rather than by mutating
  `process.env.CI`, since the import binding is captured at module load
  time. See [local.test.ts](src/configs/local.test.ts).
- `includeIgnoreFile` has both unit tests (with `@eslint/compat` mocked) and
  one integration test against a fixture `.gitignore`. See
  [include-ignore-file.test.ts](src/lib/include-ignore-file.test.ts).
- The package's lint config in [eslint.config.ts](eslint.config.ts) loosens
  a small set of rules for files matching `src/**/*.test.ts` and
  `src/__tests__/**` (e.g. `sonarjs/no-alphabetical-sort`, non-null
  assertions). This keeps fixture-style test code idiomatic.
