import i18n from "i18next"
import type { ReactNode } from "react"

import { normalizeLocale } from "../i18n/config"
import { GitHub } from "./common/icons"

const ContentSectionArrowIcon = (
	<svg
		aria-hidden="true"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		strokeWidth={2}
		className="h-5 w-5"
	>
		<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
	</svg>
)

export function ContentSection({ children }: { children?: ReactNode }) {
	const locale = normalizeLocale(i18n.resolvedLanguage ?? i18n.language)
	const t = i18n.getFixedT(locale, "common")

	return (
		<section
			id="contenus"
			className="relative mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 pb-20 lg:flex-row lg:gap-16 lg:pb-32"
		>
			{/* Visual / Twitch Card */}
			<div className="flex w-full lg:w-1/2">
				<a
					href="https://twitch.tv/alex73630"
					target="_blank"
					rel="noopener noreferrer"
					className="group hover:border-otter-pink-200/30 focus-visible:ring-otter-pink-200 relative aspect-video w-full overflow-hidden rounded-[20px] border border-slate-800 bg-slate-900 transition-all duration-300 hover:ring-2 focus-visible:outline-none"
				>
					{/* Background pattern placeholder */}
					<div className="absolute inset-0 bg-linear-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 opacity-40 transition-opacity group-hover:opacity-60"></div>
					{children}

					<div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/90 via-black/40 to-transparent p-6 lg:p-8">
						<div className="flex flex-col gap-2">
							<div className="flex items-center gap-3">
								<div className="h-3 w-3 animate-pulse rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.7)]"></div>
								<h3 className="text-xl font-bold text-white lg:text-2xl">
									{t("contentSection.liveTitle")}
								</h3>
							</div>
							<p className="max-w-[90%] text-sm font-normal text-slate-300 lg:text-base">
								{t("contentSection.liveDescription")}
							</p>
						</div>
					</div>
				</a>
			</div>

			{/* Texts & Github Link */}
			<div className="flex w-full flex-col justify-center lg:w-1/2">
				<h2 className="mb-6 text-3xl leading-tight font-bold text-white lg:text-[40px]">
					{t("contentSection.titleLead")}
					<br className="hidden lg:block" /> {t("contentSection.titleTail")}
				</h2>
				<p className="mb-8 text-base leading-relaxed font-normal text-slate-400 lg:text-lg">
					{t("contentSection.description")}
				</p>

				<a
					href="https://github.com/alex73630"
					target="_blank"
					rel="noopener noreferrer"
					className="bg-otter-pink-200/5 border-otter-pink-200/10 group hover:bg-otter-pink-200/10 hover:border-otter-pink-200/30 focus-visible:ring-otter-pink-200 flex flex-row items-center justify-between rounded-2xl border p-6 transition-all duration-300 focus-visible:ring-2 focus-visible:outline-none"
				>
					<div className="flex flex-row items-center gap-4">
						<div className="group-hover:text-otter-pink-200 flex h-10 w-10 items-center justify-center text-slate-300 transition-colors">
							<GitHub currentColor className="h-6 w-6" />
						</div>
						<div className="flex flex-col">
							<span className="text-base font-bold text-slate-100 transition-colors group-hover:text-white">
								{t("contentSection.githubLabel")}
							</span>
							<span className="text-sm font-normal text-slate-400 transition-colors group-hover:text-slate-300">
								{t("contentSection.githubHandle")}
							</span>
						</div>
					</div>
					<div className="group-hover:text-otter-pink-200 text-slate-400 transition-transform group-hover:translate-x-1">
						{ContentSectionArrowIcon}
					</div>
				</a>
			</div>
		</section>
	)
}
