import i18n from "i18next"

import faviconSvg from "../assets/logo.svg?no-inline"
import { getLocalizedAnchorHref, getLocalizedHref, normalizeLocale } from "../i18n/config"

interface HeaderProps {
	currentPathname: string
}

export function Header({ currentPathname }: HeaderProps) {
	const locale = normalizeLocale(i18n.resolvedLanguage ?? i18n.language)
	const t = i18n.getFixedT(locale, "common")
	const nextLocale = locale === "fr" ? "en" : "fr"
	const localeSwitchHref = getLocalizedHref(currentPathname, nextLocale)
	const homeHref = getLocalizedHref("/", locale)
	const expertiseHref = getLocalizedAnchorHref("expertise", locale)
	const experienceHref = getLocalizedAnchorHref("experience", locale)
	const contentHref = getLocalizedAnchorHref("contenus", locale)
	const contactHref = getLocalizedAnchorHref("meet", locale)

	return (
		<header className="border-otter-pink-200/10 sticky top-0 z-50 w-full border-b bg-[#0b1120]/80 backdrop-blur-md">
			<div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
				<a
					href={homeHref}
					className="hover:bg-otter-pink-200/10 flex items-center justify-center rounded-2xl p-2 pr-4 transition-colors"
				>
					<div className="flex items-center gap-3">
						<div className="bg-otter-pink-200/20 flex items-center justify-center rounded-2xl p-2">
							<img src={faviconSvg} alt={t("brand.logoAlt")} className="h-5 w-5" />
						</div>
						<div className="hidden text-xl leading-tight font-bold tracking-tight text-white sm:block">
							{t("brand.name")}
						</div>
					</div>
				</a>

				{/* Desktop Nav */}
				<nav className="hidden items-center gap-10 md:flex">
					<a
						href={expertiseHref}
						className="hover:text-otter-pink-200 focus-visible:ring-otter-pink-200 rounded text-sm font-medium text-slate-100 transition-colors focus-visible:ring-2 focus-visible:outline-none"
					>
						{t("nav.expertise")}
					</a>
					<a
						href={experienceHref}
						className="hover:text-otter-pink-200 focus-visible:ring-otter-pink-200 rounded text-sm font-medium text-slate-100 transition-colors focus-visible:ring-2 focus-visible:outline-none"
					>
						{t("nav.experience")}
					</a>
					<a
						href={contentHref}
						className="hover:text-otter-pink-200 focus-visible:ring-otter-pink-200 rounded text-sm font-medium text-slate-100 transition-colors focus-visible:ring-2 focus-visible:outline-none"
					>
						{t("nav.content")}
					</a>
					<a
						href={contactHref}
						className="hover:text-otter-pink-200 focus-visible:ring-otter-pink-200 rounded text-sm font-medium text-slate-100 transition-colors focus-visible:ring-2 focus-visible:outline-none"
					>
						{t("nav.contact")}
					</a>
				</nav>

				<div className="flex items-center gap-3">
					<a
						href={localeSwitchHref}
						aria-label={
							nextLocale === "fr"
								? t("nav.switchToFrenchLabel")
								: t("nav.switchToEnglishLabel")
						}
						className="border-otter-pink-200/20 hover:border-otter-pink-200/40 hover:bg-otter-pink-200/10 focus-visible:ring-otter-pink-200 rounded-full border px-3 py-2 text-xs font-bold tracking-[0.2em] text-slate-200 uppercase transition-colors focus-visible:ring-2 focus-visible:outline-none"
					>
						{nextLocale === "fr" ? t("nav.switchToFrench") : t("nav.switchToEnglish")}
					</a>
					<a
						href={import.meta.env.PUBLIC_MEET_LINK}
						className="bg-otter-pink-200 hover:bg-otter-pink-300 focus-visible:ring-otter-pink-200 rounded-2xl px-6 py-2.5 text-center text-sm font-bold text-[#0b1120] shadow-[0_10px_15px_-3px_rgba(249,169,213,0.2)] transition-colors focus-visible:ring-2 focus-visible:outline-none"
					>
						{t("header.cta")}
					</a>
				</div>
			</div>
		</header>
	)
}
