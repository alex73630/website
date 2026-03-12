import { parse } from "@twemoji/parser"
import type { ReactNode } from "react"

export function Twemoji({
	children,
	text,
	eagerLoading
}: {
	children?: string
	text?: string
	eagerLoading?: boolean
}): ReactNode {
	const content = text ?? children ?? ""
	const entities = parse(content)

	if (entities.length === 0) {
		return <>{content}</>
	}

	const result: ReactNode[] = []
	let lastIndex = 0

	entities.forEach((entity, i) => {
		// Add text before the emoji
		if (entity.indices[0] > lastIndex) {
			result.push(content.slice(lastIndex, entity.indices[0]))
		}

		// Extract the filename (e.g. "1f449.svg") from the url
		const filename = entity.url.split("/").pop()

		// Add the emoji image
		result.push(
			<img
				key={`${entity.text}-${i}`}
				draggable="false"
				className="emoji"
				alt={entity.text}
				src={`/_astro/twemoji/${filename}`}
				loading={eagerLoading ? "eager" : "lazy"}
			/>
		)

		lastIndex = entity.indices[1]
	})

	// Add any remaining text after the last emoji
	if (lastIndex < content.length) {
		result.push(content.slice(lastIndex))
	}

	return <>{result}</>
}
