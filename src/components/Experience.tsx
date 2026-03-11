const experiences = [
	{ name: "Ornikar", type: "Scale-up" },
	{ name: "Juisci", type: "MedTech" },
	{ name: "NordCloud", type: "IBM Group" },
	{ name: "Leads.fr", type: "AdTech" }
]

export function Experience() {
	return (
		<section id="experience" className="relative mx-auto mb-20 w-full max-w-7xl px-6 lg:mb-32">
			<div className="bg-otter-pink-200/5 border-otter-pink-200/10 flex flex-col items-center gap-12 rounded-3xl border p-8 lg:flex-row lg:justify-between lg:gap-24 lg:p-16">
				{/* Text Block */}
				<div className="flex w-full flex-col gap-2 text-center lg:w-1/3 lg:text-left">
					<h2 className="text-otter-pink-200 mb-2 text-[48px] leading-none font-black lg:text-[64px]">
						10+ ans
					</h2>
					<span className="mb-2 text-lg font-bold tracking-wider text-white uppercase lg:text-xl">
						d'expérience
					</span>
					<p className="text-base leading-relaxed font-normal text-balance text-slate-400">
						Accompagnement de startups en phase de croissance (Series A/B/C) sur des
						problématiques critiques.
					</p>
				</div>

				{/* Logos Grid */}
				<div className="grid w-full grid-cols-2 gap-8 opacity-80 transition-opacity duration-300 hover:opacity-100 md:grid-cols-4 lg:w-2/3 lg:gap-12">
					{experiences.map((exp, idx) => (
						<div key={idx} className="flex flex-col items-center justify-center gap-1">
							<span className="text-xl font-bold text-white lg:text-2xl">
								{exp.name}
							</span>
							<span className="text-otter-pink-200/90 text-[10px] font-normal tracking-wider uppercase lg:text-xs">
								{exp.type}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
