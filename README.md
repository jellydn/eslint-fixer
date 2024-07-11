<h1 align="center">Welcome to eslint-fixer 👋</h1>

<p>
  <a href="https://www.npmjs.com/package/eslint-fixer" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/eslint-fixer.svg">
  </a>
</p>

## Motivation

Until this [☂️ Type-aware linter · Issue #3187 · biomejs/biome](https://github.com/biomejs/biome/issues/3187) is resolved, we continue to use `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin` to lint TypeScript files.

## Recommended Rules

Add the following recommended rules to your ESLint configuration for effective linting of TypeScript files:

```json
{
  "@typescript-eslint/await-thenable": "error",
  "@typescript-eslint/no-floating-promises": "error",
  "@typescript-eslint/no-for-in-array": "error",
  "@typescript-eslint/no-misused-promises": "error",
  "@typescript-eslint/no-redundant-type-constituents": "error",
  "@typescript-eslint/no-unnecessary-type-assertion": "error",
  "@typescript-eslint/require-await": "error"
}
```

## Usage

To use eslint-fixer, follow these steps:

```sh
# Install eslint-fixer
npm install --global @jellydn/eslint-fixer

# Run eslint-fixer
npx @jellydn/eslint-fixer
```

## GitHub Actions

To use eslint-fixer in GitHub Actions, follow these steps:

```yml
name: ESLint Fixer

on:
  push:
    branches:
      - main

jobs:
  eslint-fixer:
    name: ESLint Fixer
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npx --yes @jellydn/eslint-fixer@0.2.0 "examples/**/*.ts" # change to the latest release
  oxlint:
    name: Lint JS
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npx --yes oxlint@0.0.0 --deny-warnings # change to the latest release
``

## How to publish

```sh
make build
npm publish --access public
```

## Resources

- [Linting with Type Information | typescript-eslint](https://typescript-eslint.io/getting-started/typed-linting)

## Show Your Support

If this project has helped you, please give it a ⭐️!
