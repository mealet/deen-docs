import { defineConfig } from "vitepress";
import { resolve } from "node:path";
import { ILanguageRegistration } from "shiki";
import fs from "node:fs";

const deenLanguage = JSON.parse(
	fs.readFileSync(resolve(__dirname, "deen.tmLanguage.json"), "utf8"),
);

const deenLang: ILanguageRegistration = {
	id: "deen",
	aliases: ["dn", "deen"],
	scopeName: "source.deen",
	path: resolve(__dirname, "deen.tmLanguage.json"),
	...deenLanguage,
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Deen Language",
	description: "A simple language for efficient software",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Examples", link: "/getting-started/examples" },
		],

		sidebar: [
			{
				text: "Getting Started",
				items: [
					{ text: "Introduction", link: "/getting-started/introduction" },
					{ text: "Examples", link: "/getting-started/examples" },
					{ text: "Installation", link: "/getting-started/installation" },
					{
						text: "Table Of Contents",
						link: "/getting-started/table-of-contents",
					},
				],
			},
			{
				text: "Basics",
				items: [
					{ text: "Constants", link: "/basics/constants" },
					{ text: "Variables", link: "/basics/variables" },
					{ text: "Types", link: "/basics/types" },
					{ text: "Comments", link: "/basics/comments" },
					{ text: "Operations", link: "/basics/operations" },
					{ text: "Constructions", link: "/basics/constructions" },
				],
			},
			{
				text: "Advanced",
				items: [
					{ text: "Scopes", link: "/advanced/scopes" },
					{ text: "Functions", link: "/advanced/functions" },
					{ text: "Structures And Enums", link: "/advanced/structures-enums" },
					{ text: "Compiler Macros", link: "/advanced/compiler-macros" },
					{ text: "Includes", link: "/advanced/includes" },
					{ text: "Externals", link: "/advanced/externals" },
					{
						text: "Structures Implementations",
						link: "/advanced/structures-implementations",
					},
				],
			},
			{
				text: "Standard Library",
				items: [
					{ text: "@string", link: "/standard-library/string" },
					{ text: "@io", link: "/standard-library/io" },
					{ text: "@math", link: "/standard-library/math" },
					{ text: "@fs", link: "/standard-library/fs" },
					{ text: "@bytes", link: "/standard-library/bytes" },
				],
			},
		],

		socialLinks: [{ icon: "github", link: "https://github.com/mealet/deen" }],
	},
	markdown: {
		languages: [deenLang],
		theme: {
			light: "github-light",
			dark: "github-dark",
		},
	},
	head: [
		[
			"script",
			{},
			`window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };`,
		],
		["script", { defer: "", src: "/_vercel/insights/script.js" }],
	],
});
