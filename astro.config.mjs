// @ts-check
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import { viteStaticCopy } from "vite-plugin-static-copy"

// https://astro.build/config
export default defineConfig({
	site: "https://alex73630.xyz",

	prefetch: true,
	build: {
		inlineStylesheets: "never"
	},

	integrations: [react(), sitemap()],
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
