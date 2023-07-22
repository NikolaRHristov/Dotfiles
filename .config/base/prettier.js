const MODULES_DIR = "file://f/tools/.pnpm-global/5/node_modules/";

/** @type {import('prettier').Config} */
module.exports = {
	// editorConfig: true,
	arrowParens: "always",
	bracketSameLine: true,
	bracketSpacing: true,
	cursorOffset: -1,
	embeddedLanguageFormatting: "auto",
	endOfLine: "lf",
	htmlWhitespaceSensitivity: "css",
	insertPragma: false,
	jsxSingleQuote: false,
	printWidth: 80,
	proseWrap: "always",
	quoteProps: "preserve",
	requirePragma: false,
	semi: true,
	singleQuote: false,
	tabWidth: 4,
	trailingComma: "es5",
	useTabs: true,
	vueIndentScriptAndStyle: true,
	plugins: [
		// `${MODULES_DIR}@prettier/plugin-lua`,
		// `${MODULES_DIR}@prettier/plugin-php`,
		// @TODO: Check for support
		`${MODULES_DIR}@trivago/prettier-plugin-sort-imports`,
		// @TODO: Check for support
		// `${MODULES_DIR}prettier-plugin-astro`,
		// `${MODULES_DIR}prettier-plugin-java`,
		// `${MODULES_DIR}prettier-plugin-kotlin`,
		// `${MODULES_DIR}prettier-plugin-organize-attributes`,
		// `${MODULES_DIR}prettier-plugin-autocorrect`,
		// `${MODULES_DIR}prettier-plugin-pkg`,
		// `${MODULES_DIR}prettier-plugin-sh`,
		// @TODO: Check for support
		// `${MODULES_DIR}prettier-plugin-sort-imports`,
		// `${MODULES_DIR}prettier-plugin-sql`,
		// `${MODULES_DIR}prettier-plugin-svelte`,
		// @TODO: Check for support
		// `${MODULES_DIR}prettier-plugin-tailwindcss`,
		// @TODO: Check for support
		// `${MODULES_DIR}prettier-plugin-toml`,
		// `${MODULES_DIR}prettier-plugin-packagejson`,
	],
	tailwindConfig:
		"F:\\Developer\\app\\NikolaRHristov\\dot\\.config\\base\\tailwind.js",
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
		{
			files: "*.svelte",
			options: {
				parser: "svelte",
			},
		},
		{
			files: "*.lua",
			options: {
				parser: "lua",
			},
		},
		{
			files: "*.toml",
			options: {
				parser: "toml",
			},
		},
		{
			files: "package.json",
			options: {
				trailingComma: "none",
			},
		},
	],
	svelteSortOrder: "options-scripts-styles-markup",
	svelteStrictMode: true,
	svelteAllowShorthand: true,
	svelteIndentScriptAndStyle: true,
	importOrder: [
		"^@(.*)/(.*)$",
		"^@core/(.*)$",
		"^@server/(.*)$",
		"^@ui/(.*)$",
		"^[./]",
	],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	attributeGroups: ["$DEFAULT", "^data-"],
	attributeSort: "ASC",
	attributeIgnoreCase: false,
};
