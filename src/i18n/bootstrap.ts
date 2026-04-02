import i18n from "i18next"

const astroReactI18next = {
	defaultLocale: "fr",
	locales: ["fr", "en"],
	prefixDefaultLocale: false,
	domains: [],
	reservedRoutes: ["/api"]
}

if (!i18n.options.astroReactI18next) {
	i18n.options.astroReactI18next = astroReactI18next
}

export { astroReactI18next }
