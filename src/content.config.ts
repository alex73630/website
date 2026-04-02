import { glob } from "astro/loaders"
import { z } from "astro/zod"
import { defineCollection } from "astro:content"

const legal = defineCollection({
	loader: glob({
		pattern: "**/*.{md,mdx}",
		base: "./src/content/legal"
	}),
	schema: z.object({
		locale: z.enum(["fr", "en"]),
		title: z.string(),
		description: z.string(),
		updatedAt: z.coerce.date(),
		noindex: z.boolean().default(true)
	})
})

export const collections = { legal }
