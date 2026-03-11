export function Hero() {
	return (
		<section className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-16 px-6 py-20 lg:flex-row lg:gap-24 lg:py-32">
			{/* Content */}
			<div className="z-10 flex w-full flex-col items-center gap-8 lg:w-[55%] lg:items-start">
				{/* Availability Badge */}
				<div className="bg-otter-pink-200/10 border-otter-pink-200/20 flex items-center gap-2 rounded-full border px-4 py-1.5">
					<div className="relative h-2 w-2">
						<div className="bg-otter-pink-200 absolute inset-0 animate-ping rounded-full opacity-75 motion-reduce:animate-none"></div>
						<div className="bg-otter-pink-200 relative h-2 w-2 rounded-full"></div>
					</div>
					<span className="text-otter-pink-200 text-xs font-bold tracking-wider uppercase">
						Disponible pour de nouvelles missions
					</span>
				</div>

				{/* Headlines */}
				<h1 className="text-center text-5xl leading-tight font-black tracking-tight text-white lg:text-left lg:text-7xl">
					Expert Backend
					<br />
					<span className="text-otter-pink-200">NodeJS/TypeScript</span>
					<br />& Fondateur
					<br />
					d'Otterly Space
				</h1>

				{/* Subtitle */}
				<p className="max-w-2xl text-center text-xl leading-relaxed font-normal text-slate-400 lg:text-left">
					9 ans d'expérience au service des startups. Passionné par l'architecture
					logicielle, la performance et… les loutres. 🦦
				</p>

				{/* CTAs */}
				<div className="flex w-full flex-col items-center gap-4 pt-4 sm:w-auto sm:flex-row">
					<a
						href="#contact"
						className="bg-otter-pink-200 hover:bg-otter-pink-300 focus-visible:ring-otter-pink-200 w-full rounded-3xl px-8 py-4 text-center text-lg font-bold text-[#0b1120] shadow-[0_20px_25px_-5px_rgba(249,169,213,0.25)] transition-colors focus-visible:ring-2 focus-visible:outline-none sm:w-auto"
					>
						Réserver un appel
					</a>
					<a
						href="https://malt.fr"
						target="_blank"
						rel="noopener noreferrer"
						className="border-otter-pink-200/30 hover:bg-otter-pink-200/10 focus-visible:ring-otter-pink-200 w-full rounded-3xl border px-8 py-4 text-center text-lg font-bold text-white transition-colors focus-visible:ring-2 focus-visible:outline-none sm:w-auto"
					>
						Voir mon profil Malt
					</a>
				</div>
			</div>

			{/* Image / Graphic */}
			<div className="relative flex w-full max-w-md justify-center lg:w-[40%] lg:justify-end">
				<div className="bg-otter-pink-200/20 pointer-events-none absolute -right-6 -bottom-6 z-0 size-48 rounded-full blur-[50px]"></div>
				<div className="bg-otter-pink-200/10 pointer-events-none absolute -top-6 -left-6 z-0 size-48 rounded-full blur-2xl"></div>

				<div className="border-otter-pink-200/10 from-otter-pink-200/20 relative z-10 aspect-4/5 w-full overflow-hidden rounded-3xl border bg-linear-to-tr to-transparent p-px">
					<div className="group relative flex h-full w-full items-center justify-center overflow-hidden rounded-[1.44rem] bg-[#0b1120]">
						{/* The actual image if avaiable. In real case it should be a local asset */}
						<img
							src="/images/profile.jpg"
							alt="Alexandre Sanchez"
							width={600}
							height={800}
							className="h-full w-full object-cover opacity-60 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-80"
							onError={(e) => {
								;(e.target as HTMLImageElement).src =
									"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxZTI5M2IiLz48L3N2Zz4="
							}}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
