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
						text: "Following Documentation",
						link: "/getting-started/following-documentation",
					},
				],
			},
			{
				text: "Basics",
				items: [
					{ text: "Numbers", link: "/basics/numbers" },
					{ text: "Strings", link: "/basics/strings" },
					{ text: "Types", link: "/basics/types" },
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
});
