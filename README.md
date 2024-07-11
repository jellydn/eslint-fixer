<h1 align="center">Welcome to @jellydn/eslint-fixer 👋</h1>

<p>
  <a href="https://www.npmjs.com/package/@jellydn/eslint-fixer" target="_blank">
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
npx @jellydn/eslint-fixer "examples/**/*.ts"
```

## How to use with Neovim

To use eslint-fixer with lazy.nvim and nvim-lint. What you need is add below to your custom linter.

```lua
return {
  {
    "mfussenegger/nvim-lint",
    event = "VeryLazy",
    opts = {
      linters_by_ft = {
        ["*"] = { "cspell", "codespell" },
        javascript = { "oxlint" },
        typescript = { "oxlint", "eslint_fixer" },
        javascriptreact = { "oxlint" },
        typescriptreact = { "oxlint" },
      },
    },
    init = function()
      -- Register customer linter
      require("lint").linters.eslint_fixer = {
        name = "eslint_fixer",
        cmd = "eslint-fixer", -- e.g: npm install -g @jellydn/eslint-fixer
        stdin = false,
        stream = "stdout",
        ignore_exitcode = true,
        parser = function(output, bufnr)
          local trimmed_output = vim.trim(output)
          if trimmed_output == "" then
            return {}
          end
          -- Skip if Parsing error on output
          if string.match(trimmed_output, "Parsing error") then
            return {}
          end

          -- Parse output base on Eslint errorformat
          local diagnostic = require("lint.parser").from_errorformat("%f %l:%c %m", {
            error = vim.diagnostic.severity.ERROR,
          })(trimmed_output, bufnr)

          return diagnostic
        end,
      }
    end,
    config = function(_, opts)
      -- Your setup here
    end,
  },
}
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
  quality:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Biome
        uses: biomejs/setup-biome@v2
        with:
          version: latest
      - name: Run Biome
        run: biome ci .
```

## How to publish

```sh
make build
npm publish --access public
```

## Resources

- [Linting with Type Information | typescript-eslint](https://typescript-eslint.io/getting-started/typed-linting)

## Show Your Support

If this project has helped you, please give it a ⭐️!
