import { ESLint } from "eslint";

export async function eslintFixer(patterns: string) {
	// 1. Create an instance.
	const eslint = new ESLint({
		fix: true,
		overrideConfigFile: require.resolve("./eslint.config.js"),
		errorOnUnmatchedPattern: false,
	});

	// 2. Lint files.
	const results = await eslint.lintFiles(patterns.split(","));

	// 3. Modify the files with the fixed code.
	await ESLint.outputFixes(results);

	// 4. Format the results.
	const formatter = await eslint.loadFormatter("stylish");
	const resultText = formatter.format(results);

	// 5. Output it.
	console.log(resultText);
}
