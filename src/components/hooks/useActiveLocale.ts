import { useEffect, useState } from "react"

import { normalizeLocale, type Locale } from "../../i18n/config"

function getDocumentLocale(): Locale {
	return normalizeLocale(document.documentElement.lang.split("-")[0])
}

export function useActiveLocale(locale: Locale) {
	const [activeLocale, setActiveLocale] = useState<Locale>(locale)

	useEffect(() => {
		setActiveLocale(locale)
	}, [locale])

	useEffect(() => {
		const syncLocale = () => {
			setActiveLocale(getDocumentLocale())
		}

		syncLocale()
		document.addEventListener("astro:page-load", syncLocale)

		return () => {
			document.removeEventListener("astro:page-load", syncLocale)
		}
	}, [])

	return activeLocale === locale ? activeLocale : locale
}
