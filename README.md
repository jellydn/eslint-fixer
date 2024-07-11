<h1 align="center">Welcome to @jellydn/eslint-fixer 👋</h1>

<p>
  <a href="https://www.npmjs.com/package/@jellydn/eslint-fixer" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/eslint-fixer.svg">
  </a>
</p>

## Prerequisites

- Node.js >= 18.20.0 or later

## Motivation

We will continue to use `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin` to lint TypeScript files until this issue [☂️ Type-aware linter · Issue #3187 · biomejs/biome](https://github.com/biomejs/biome/issues/3187) is resolved.


## Enabled rules

The following rules are enabled to effectively lint TypeScript files:

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

```sh
# Install eslint-fixer
npm install -g @jellydn/eslint-fixer

# Or Run eslint-fixer
npx @jellydn/eslint-fixer "examples/**/*.ts,examples/**/*.tsx"
```

## How to use with Neovim

To use eslint-fixer with lazy.nvim and nvim-lint, you should define as a custom linter:

```lua
return {
  {
    "mfussenegger/nvim-lint",
    event = "VeryLazy",
    opts = {
      linters_by_ft = {
        -- Other linters
        typescript = { "oxlint", "eslint_fixer" },
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

## Author

👤 **Dung Huynh**

-   Website: https://productsway.com/
-   Twitter: [@jellydn](https://twitter.com/jellydn)
-   Github: [@jellydn](https://github.com/jellydn)

## Show your support

Give a ⭐️ if this project helped you!

[![kofi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/dunghd)
[![paypal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/dunghd)
[![buymeacoffee](https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/dunghd)
