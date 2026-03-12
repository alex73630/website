import { useState, useEffect } from "react"

// Shared global state to sync across multiple React islands
let isUwuModeGlobal = false

if (typeof window !== "undefined") {
	const params = new URLSearchParams(window.location.search)
	const uwuValue = params.get("uwu")
	const hasUwu = params.has("uwu")

	if (hasUwu && (uwuValue === "false" || uwuValue === "0" || uwuValue === "null")) {
		sessionStorage.removeItem("uwuMode")
		isUwuModeGlobal = false
	} else if (hasUwu || sessionStorage.getItem("uwuMode") === "true") {
		sessionStorage.setItem("uwuMode", "true")
		isUwuModeGlobal = true
	}
}

const listeners = new Set<() => void>()

export function useEasterEgg() {
	const [isUwuMode, setIsUwuMode] = useState<boolean>(false) // Start false to match SSR

	useEffect(() => {
		// Subscribe to runtime changes first so checkState can trigger the state update
		const callback = () => setIsUwuMode(isUwuModeGlobal)
		listeners.add(callback)

		const checkState = () => {
			const params = new URLSearchParams(window.location.search)
			const uwuValue = params.get("uwu")
			const hasUwu = params.has("uwu")

			if (hasUwu && (uwuValue === "false" || uwuValue === "0" || uwuValue === "null")) {
				sessionStorage.removeItem("uwuMode")
				setUwuMode(false)
			} else if (hasUwu || sessionStorage.getItem("uwuMode") === "true") {
				if (hasUwu) sessionStorage.setItem("uwuMode", "true")
				setUwuMode(true)
			} else {
				// Re-sync with global state on mount if neither enabled/disabled by URL
				setIsUwuMode(isUwuModeGlobal)
			}
		}

		checkState()

		// Allow checking state again when navigating using Astro's view transitions
		document.addEventListener("astro:page-load", checkState)

		return () => {
			listeners.delete(callback)
			document.removeEventListener("astro:page-load", checkState)
		}
	}, [])

	return { isUwuMode }
}

export function setUwuMode(value: boolean) {
	isUwuModeGlobal = value
	listeners.forEach((listener) => listener())
}
