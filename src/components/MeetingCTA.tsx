import { Twemoji } from "./common/Twemoji"
import { useEasterEgg } from "./hooks/useEasterEgg"

function CtaEasterEgg() {
	const { isUwuMode } = useEasterEgg()

	if (!isUwuMode) return null

	return (
		<div
			className="text-3xl leading-tight font-black tracking-tight sm:text-4xl lg:text-5xl"
			aria-hidden="true"
		>
			<Twemoji>🥺</Twemoji>
			<br />
			<Twemoji>👉👈</Twemoji>
		</div>
	)
}

export function MeetingCTA() {
	const { isUwuMode } = useEasterEgg()
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
						Un rendez-vous{" "}
						<span className="text-otter-pink-200 inline-block">avec moi</span>
						{isUwuMode ? " ?" : ""}
					</h2>
					<CtaEasterEgg />
					<p className="max-w-2xl text-lg leading-relaxed font-normal text-slate-300">
						Un premier échange de 30 minutes en visio, offert et sans engagement.
						<br /> Que l'on collabore par la suite ou non, l'objectif est de t'apporter
						de la valeur dès aujourd'hui. <br />
						<br />
						<Twemoji>
							👉 Tu viens avec une question ou un blocage, tu repars avec un plan
							d'action activable.
						</Twemoji>
					</p>

					<div className="mt-8 grid w-full max-w-4xl grid-cols-1 gap-8 text-left md:grid-cols-2">
						<div className="border-otter-pink-200/5 flex flex-col gap-4 rounded-2xl border bg-slate-900/50 p-6">
							<h3 className="text-otter-pink-200 text-lg font-bold">
								Exemples de sujets
							</h3>
							<ul className="flex flex-col gap-3 text-slate-300">
								<li className="flex items-start gap-3">
									<span className="text-otter-pink-200 mt-1">✓</span>
									<span>Choisir la bonne stack ou plateforme.</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="text-otter-pink-200 mt-1">✓</span>
									<span>Prioriser un MVP ou débloquer un bug complexe.</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="text-otter-pink-200 mt-1">✓</span>
									<span>Structurer une architecture backend robuste.</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="text-otter-pink-200 mt-1">✓</span>
									<span>Audit de code et recommandations de performance.</span>
								</li>
							</ul>
						</div>

						<div className="border-otter-pink-200/5 flex flex-col gap-4 rounded-2xl border bg-slate-900/50 p-6">
							<h3 className="text-otter-pink-200 text-lg font-bold">
								Ce qu'on te livre
							</h3>
							<ul className="flex flex-col gap-3 text-slate-300">
								<li className="flex items-start gap-3">
									<span className="text-otter-pink-200 mt-1">✓</span>
									<span>Un compte-rendu synthétique de notre échange.</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="text-otter-pink-200 mt-1">✓</span>
									<span>Une liste d'actions priorisées.</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="text-otter-pink-200 mt-1">✓</span>
									<span>Des recommandations claires et argumentées.</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="text-otter-pink-200 mt-1">✓</span>
									<span>Des outils et ressources adaptés à ton cas.</span>
								</li>
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
							Prendre un créneau en ligne
						</a>
						<a
							href="https://otterly.space/#meet"
							target="_blank"
							rel="noopener noreferrer"
							className="border-otter-pink-200/30 hover:bg-otter-pink-200/10 focus-visible:ring-otter-pink-200 w-full rounded-3xl border px-8 py-4 text-center text-lg font-bold text-white transition-colors focus-visible:ring-2 focus-visible:outline-none sm:w-auto"
						>
							Découvrir avec mon équipe
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
