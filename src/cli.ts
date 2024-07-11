// Usage:
// ❯ ./bin/eslint-fixer "examples/**/*.js,examples/**/*.ts"

import { cli } from "cleye";

import pkgJson from "../package.json";
import { eslintFixer } from "./linter";

const argv = cli({
	name: "eslint-fixer",

	parameters: [
		"<patterns>", // patterns is required
	],

	flags: {},

	version: pkgJson.version,

	help: {
		examples: [
			'npx @jellydn/eslint-fixer "src/**/*.ts"',
			"",
			'npx @jellydn/eslint-fixer "apps/**/*.ts,packages/**/*.ts"',
		],
	},
});

const patterns = argv._.patterns;
if (!patterns) {
	console.error("Please provide the patterns to lint.");
	process.exit(1);
}

eslintFixer(patterns).catch((error) => {
	process.exitCode = 1;
	console.error(error);
});
