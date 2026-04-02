import i18n from "i18next"

import JuisciLogo from "../assets/brands/juisci.svg"
import NordcloudLogo from "../assets/brands/nordcloud.svg"
import OrnikarLogo from "../assets/brands/ornikar.svg"
import ZeliqLogo from "../assets/brands/zeliq.svg"
import { normalizeLocale } from "../i18n/config"

const experiences = [
	{ name: "Zeliq", logo: ZeliqLogo, url: "https://zeliq.com" },
	{ name: "Ornikar", logo: OrnikarLogo, url: "https://ornikar.com" },
	{ name: "Juisci", logo: JuisciLogo, url: "https://juisci.com" },
	{ name: "NordCloud", logo: NordcloudLogo, url: "https://nordcloud.com" }
]

export function Experience() {
	const locale = normalizeLocale(i18n.resolvedLanguage ?? i18n.language)
	const t = i18n.getFixedT(locale, "common")
	const translatedTypes = t("experience.items", { returnObjects: true }) as Array<{
		type: string
	}>

	return (
		<section id="experience" className="relative mx-auto mb-20 w-full max-w-7xl px-6 lg:mb-32">
			<div className="bg-otter-pink-200/5 border-otter-pink-200/10 flex flex-col items-center gap-12 rounded-3xl border p-8 lg:flex-row lg:justify-between lg:gap-24 lg:p-16">
				{/* Text Block */}
				<div className="flex w-full flex-col gap-2 text-center lg:w-1/3 lg:text-left">
					<h2 className="text-otter-pink-200 mb-2 text-[48px] leading-none font-black lg:text-[64px]">
						{t("experience.stat")}
					</h2>
					<span className="mb-2 text-lg font-bold tracking-wider text-white uppercase lg:text-xl">
						{t("experience.label")}
					</span>
					<p className="text-base leading-relaxed font-normal text-balance text-slate-400">
						{t("experience.description")}
					</p>
				</div>

				{/* Logos Grid */}
				<div className="grid w-full grid-cols-2 items-center gap-8 lg:w-2/3 lg:grid-cols-4 lg:gap-12">
					{experiences.map((exp, idx) => (
						<a
							key={idx}
							href={exp.url}
							target="_blank"
							rel="noopener noreferrer"
							className="group flex flex-col items-center justify-center gap-3 opacity-80 transition-all duration-300 hover:scale-105 hover:opacity-100"
						>
							<img
								src={exp.logo.src}
								alt={exp.name}
								className="h-8 max-w-30 object-contain lg:h-10"
							/>
							<span className="text-otter-pink-200/90 text-center text-[10px] font-normal tracking-wider uppercase lg:text-xs">
								{translatedTypes[idx]?.type}
							</span>
						</a>
					))}
				</div>
			</div>
		</section>
	)
}
