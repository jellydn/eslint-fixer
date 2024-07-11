.PHONY: cli
cli: install compile
	@echo "Use the following command to run the CLI:"
	@echo "./bin/eslint-fixer"

.PHONY: install
install:
	@echo "Installing dependencies..."
	@bun install
	@echo "Dependencies installed."

.PHONY: compile
compile:
	@echo "Compiling..."
	@bun run compile

.PHONY: build
build: install
	@echo "Building..."
	@bun run build
	@echo "Copy eslint.config.js to dist folder..."
	@cp eslint.config.js dist

.PHONY: check
check:
	@echo "Checking..."
	@bun run check

.PHONY: help
help:
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@echo "  install   Install dependencies"
	@echo "  compile   Compile the project"
	@echo "  check     Check the project"
	@echo "  cli       Build the CLI"
	@echo "  help      Show this help message"
	@echo ""
	@echo "For more information, see the README.md file."
