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

.PHONY: release
release: install build
	@echo "Releasing..."
	@npm publish --access public

.PHONY: help
help:
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@echo "  install   Install dependencies"
	@echo "  compile   Compile the project"
	@echo "  check     Check the project"
	@echo "  release   Publish to npmjs"
	@echo "  help      Show this help message"
	@echo ""
	@echo "For more information, see the README.md file."
