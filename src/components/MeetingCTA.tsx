import i18n from "i18next"

import type { Locale } from "../i18n/config"
import { Twemoji } from "./common/Twemoji"

interface MeetingCTAProps {
	locale: Locale
}

export function MeetingCTA({ locale }: MeetingCTAProps) {
	const t = i18n.getFixedT(locale, "common")
	const topics = t("meeting.topics", { returnObjects: true }) as string[]
	const deliverables = t("meeting.deliverables", { returnObjects: true }) as string[]

	return (
		<section
			id="meet"
			className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 pb-20 lg:pb-32"
		>
			<div className="border-otter-pink-200/10 bg-otter-pink-200/5 relative w-full overflow-hidden rounded-3xl border px-6 py-12 sm:px-12 sm:py-16 lg:px-20 lg:py-24">
				{/* Background decorative blur */}
				<div className="bg-otter-pink-200/10 pointer-events-none absolute -top-24 -left-24 z-0 h-96 w-96 rounded-full blur-[100px]"></div>
				<div className="bg-otter-pink-200/5 pointer-events-none absolute -right-24 -bottom-24 z-0 h-96 w-96 rounded-full blur-[100px]"></div>

				<div className="relative z-10 flex flex-col items-center justify-center gap-8 text-center text-white">
					<h2 className="text-3xl leading-tight font-black tracking-tight sm:text-4xl lg:text-5xl">
						{t("meeting.title")}{" "}
						<span className="text-otter-pink-200 inline-block">
							{t("meeting.titleAccent")}
						</span>
						<span data-uwu-inline aria-hidden="true">
							{" "}
							?
						</span>
					</h2>
					<div
						data-uwu-block
						className="text-3xl leading-tight font-black tracking-tight sm:text-4xl lg:text-5xl"
						aria-hidden="true"
					>
						<Twemoji>🥺</Twemoji>
						<br />
						<Twemoji>👉👈</Twemoji>
					</div>
					<p className="max-w-2xl text-lg leading-relaxed font-normal text-slate-300">
						{t("meeting.description")}
						<br /> {t("meeting.descriptionBody")} <br />
						<br />
						<Twemoji>{t("meeting.descriptionOutcome")}</Twemoji>
					</p>

					<div className="mt-8 grid w-full max-w-4xl grid-cols-1 gap-8 text-left md:grid-cols-2">
						<div className="border-otter-pink-200/5 flex flex-col gap-4 rounded-2xl border bg-slate-900/50 p-6">
							<h3 className="text-otter-pink-200 text-lg font-bold">
								{t("meeting.topicsTitle")}
							</h3>
							<ul className="flex flex-col gap-3 text-slate-300">
								{topics.map((topic) => (
									<li key={topic} className="flex items-start gap-3">
										<span className="text-otter-pink-200 mt-1">✓</span>
										<span>{topic}</span>
									</li>
								))}
							</ul>
						</div>

						<div className="border-otter-pink-200/5 flex flex-col gap-4 rounded-2xl border bg-slate-900/50 p-6">
							<h3 className="text-otter-pink-200 text-lg font-bold">
								{t("meeting.deliverablesTitle")}
							</h3>
							<ul className="flex flex-col gap-3 text-slate-300">
								{deliverables.map((deliverable) => (
									<li key={deliverable} className="flex items-start gap-3">
										<span className="text-otter-pink-200 mt-1">✓</span>
										<span>{deliverable}</span>
									</li>
								))}
							</ul>
						</div>
					</div>

					<div className="mt-8 flex flex-col gap-4 sm:flex-row">
						<a
							href={import.meta.env.PUBLIC_MEET_LINK}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-otter-pink-200 hover:bg-otter-pink-300 focus-visible:ring-otter-pink-200 w-full rounded-3xl px-8 py-4 text-center text-lg font-bold text-[#0b1120] shadow-[0_20px_25px_-5px_rgba(249,169,213,0.25)] transition-colors focus-visible:ring-2 focus-visible:outline-none sm:w-auto"
						>
							{t("meeting.primaryCta")}
						</a>
						<a
							href="https://otterly.space/#meet"
							target="_blank"
							rel="noopener noreferrer"
							className="border-otter-pink-200/30 hover:bg-otter-pink-200/10 focus-visible:ring-otter-pink-200 w-full rounded-3xl border px-8 py-4 text-center text-lg font-bold text-white transition-colors focus-visible:ring-2 focus-visible:outline-none sm:w-auto"
						>
							{t("meeting.secondaryCta")}
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
