import { PostHogProvider, usePostHog } from "@posthog/react"
import { useState, useEffect } from "react"

// Read the mode. We use process.env mapping or import.meta.env if bundled by Vite.
// Astro will replace import.meta.env dynamically.
const cookieMode = import.meta.env.PUBLIC_POSTHOG_COOKIE_MODE || "on_reject"

function BannerContent() {
	const ph = usePostHog()
	const [consentGiven, setConsentGiven] = useState<string | null>(null)

	useEffect(() => {
		let timeoutId: number | undefined
		const maxRetries = 50 // 5 seconds max

		const checkConsent = (currentRetries: number) => {
			// Fallback to window.posthog if usePostHog is still waking up
			const client = ph || (typeof window !== "undefined" ? (window as any).posthog : null)

			if (client && typeof client.get_explicit_consent_status === "function") {
				const state = client.get_explicit_consent_status() ?? "pending"
				setConsentGiven(state)
			} else if (currentRetries < maxRetries) {
				// PostHog snippet is async; if not ready, check again slightly later
				timeoutId = window.setTimeout(() => checkConsent(currentRetries + 1), 100)
			}
		}
		checkConsent(0)

		return () => {
			if (timeoutId) {
				window.clearTimeout(timeoutId)
			}
		}
	}, [ph])

	// If cookieMode is always, do not show the banner at all
	if (cookieMode === "always") {
		return null
	}

	// Hide the banner if a choice has already been made
	if (consentGiven !== "pending") {
		return null
	}

	const handleAcceptCookies = () => {
		const client = ph || (typeof window !== "undefined" ? (window as any).posthog : null)
		client?.opt_in_capturing()
		setConsentGiven("granted")
	}

	const handleDeclineCookies = () => {
		const client = ph || (typeof window !== "undefined" ? (window as any).posthog : null)
		client?.opt_out_capturing()
		setConsentGiven("denied")
	}

	return (
		<div className="border-otter-pink-200/20 fixed right-0 bottom-0 left-0 z-50 border-t bg-[#0b1120]/95 p-4 shadow-[0_-4px_20px_rgba(249,169,213,0.1)] backdrop-blur-md">
			<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
				<p className="text-sm text-slate-300">
					Nous utilisons des cookies analytiques pour comprendre comment tu interagis avec
					notre site et l'améliorer. Tu peux choisir de les accepter ou de les refuser.
				</p>
				<div className="flex shrink-0 gap-3">
					<button
						type="button"
						onClick={handleDeclineCookies}
						className="cursor-pointer rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800"
					>
						Refuser
					</button>
					<button
						type="button"
						onClick={handleAcceptCookies}
						className="bg-otter-pink-200 hover:bg-otter-pink-300 cursor-pointer rounded-lg px-4 py-2 text-sm font-medium text-[#0b1120] shadow-[0_0_10px_rgba(249,169,213,0.5)] transition-colors"
					>
						Accepter
					</button>
				</div>
			</div>
		</div>
	)
}

export function ConsentBanner() {
	const [client, setClient] = useState<any>(null)

	useEffect(() => {
		let timeoutId: number | undefined
		const maxRetries = 50 // 5 seconds max

		// Use the already initialized global window.posthog instead of uninitialized NPM instance
		const tryInit = (currentRetries: number) => {
			if (typeof window !== "undefined" && (window as any).posthog) {
				setClient((window as any).posthog)
			} else if (currentRetries < maxRetries) {
				timeoutId = window.setTimeout(() => tryInit(currentRetries + 1), 100)
			}
		}

		tryInit(0)

		return () => {
			if (timeoutId) {
				window.clearTimeout(timeoutId)
			}
		}
	}, [])

	if (!client) {
		return null
	}

	return (
		<PostHogProvider client={client}>
			<BannerContent />
		</PostHogProvider>
	)
}
