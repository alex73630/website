// @ts-check
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, fontProviders } from "astro/config"
import { viteStaticCopy } from "vite-plugin-static-copy"

// https://astro.build/config
export default defineConfig({
	site: "https://alex73630.xyz",

	prefetch: true,
	build: {
		inlineStylesheets: "never"
	},

	fonts: [
		{
			name: "IBM Plex Sans Variable",
			cssVariable: "--font-ibm-plex",
			provider: fontProviders.npm(),
			options: {
				package: "@fontsource-variable/ibm-plex-sans",
				file: "wght.css"
			}
		},
		{
			name: "IBM Plex Sans Variable",
			cssVariable: "--font-ibm-plex",
			provider: fontProviders.npm(),
			options: {
				package: "@fontsource-variable/ibm-plex-sans",
				file: "wght-italic.css"
			}
		}
	],

	integrations: [
		react({
			babel: {
				plugins: ["babel-plugin-react-compiler"]
			}
		}),
		sitemap()
	],
	vite: {
		plugins: [
			tailwindcss(),
			viteStaticCopy({
				targets: [
					{
						src: "node_modules/@twemoji/svg/*.svg",
						dest: "_astro/twemoji"
					}
				]
			})
		]
	}
})
