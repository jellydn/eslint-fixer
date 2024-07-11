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

## Resources

- [Linting with Type Information | typescript-eslint](https://typescript-eslint.io/getting-started/typed-linting)

## Show Your Support

If this project has helped you, please give it a ⭐️!
