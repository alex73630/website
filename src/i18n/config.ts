import "./bootstrap"
import {
	buildStaticPaths as astroReactI18nextBuildStaticPaths,
	getLocalizedPathname
} from "astro-react-i18next/utils"

export const locales = ["fr", "en"] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "fr"
export const prefixDefaultLocale = false

export const languageTags: Record<Locale, string> = {
	fr: "fr-FR",
	en: "en-US"
}

const siteUrl = "https://alex73630.xyz"

export function normalizeLocale(locale?: string | null): Locale {
	return locale === "en" ? "en" : defaultLocale
}

export function buildLocaleStaticPaths() {
	return astroReactI18nextBuildStaticPaths()
}

export function getLocalizedHref(pathname: string, locale: Locale): string {
	return getLocalizedPathname(pathname, locale)
}

export function getLocalizedAnchorHref(anchor: string, locale: Locale): string {
	const hash = anchor.startsWith("#") ? anchor : `#${anchor}`
	return `${getLocalizedHref("/", locale)}${hash}`
}

export function getAbsoluteLocalizedUrl(pathname: string, locale: Locale): string {
	return new URL(getLocalizedHref(pathname, locale), siteUrl).toString()
}

export function getLocaleAlternates(pathname: string): Record<Locale, string> {
	return {
		fr: getAbsoluteLocalizedUrl(pathname, "fr"),
		en: getAbsoluteLocalizedUrl(pathname, "en")
	}
}

export function formatLocaleDate(date: Date, locale: Locale): string {
	return new Intl.DateTimeFormat(languageTags[locale], {
		dateStyle: "long"
	}).format(date)
}

export function getCurrentYear(): number {
	return new Date().getFullYear()
}
