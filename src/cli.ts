// get the patterns from the command line arguments
// ❯ ./bin/eslint-fixer "examples/**/*.js,examples/**/*.ts"

import { eslintFixer } from "./index";

const patterns = process.argv[2];
if (!patterns) {
	console.error("Please provide the patterns to lint.");
	process.exit(1);
}

eslintFixer(patterns).catch((error) => {
	process.exitCode = 1;
	console.error(error);
});
