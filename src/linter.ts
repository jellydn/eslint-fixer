import { ESLint } from "eslint";

export async function eslintFixer(patterns: string) {
	const eslint = new ESLint({
		fix: true,
		overrideConfigFile: require.resolve("./eslint.config.js"),
		errorOnUnmatchedPattern: false,
	});

	const results = await eslint.lintFiles(patterns.split(","));

	// Autofixes lint problems
	await ESLint.outputFixes(results);

	const formatter = await eslint.loadFormatter("stylish");
	const resultText = formatter.format(results);

	console.log(resultText);
	return resultText;
}
