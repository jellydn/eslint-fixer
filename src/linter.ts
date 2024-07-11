import { ESLint } from "eslint";

export async function eslintFixer(patterns: string) {
	const eslint = new ESLint({
		overrideConfigFile: require.resolve("./eslint.config.js"),
		errorOnUnmatchedPattern: false,
	});

	const results = await eslint.lintFiles(patterns.split(","));

	const formatter = await eslint.loadFormatter("stylish");
	const resultText = formatter.format(results);

	console.log(resultText);
	return resultText;
}
