const expertises = [
	{
		title: "Backend Dev (Node/TS)",
		description:
			"Développement robuste et scalable utilisant TypeScript, NestJS ou Fastify. Focus sur la maintenabilité et les tests.",
		icon: (
			<svg
				aria-hidden="true"
				className="text-otter-pink-200 h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
				/>
			</svg>
		)
	},
	{
		title: "Architecture & DevOps",
		description:
			"Mise en place d'infrastructures cloud (AWS/GCP), déploiement continu via GitHub Actions et Dockerisation.",
		icon: (
			<svg
				aria-hidden="true"
				className="text-otter-pink-200 h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
				/>
			</svg>
		)
	},
	{
		title: "Conseil & Audit",
		description:
			"Audit de performances, revue de code, et accompagnement stratégique pour vos choix technologiques.",
		icon: (
			<svg
				className="text-otter-pink-200 h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				aria-hidden="true"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
				/>
			</svg>
		)
	}
]

export function Expertise() {
	return (
		<section id="expertise" className="border-otter-pink-200/5 relative mt-10 w-full border-t">
			<div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-20 lg:py-32">
				{/* Header */}
				<div className="flex flex-col items-center gap-4">
					<h2 className="text-center text-3xl leading-tight font-bold text-white lg:text-[40px]">
						Expertise Technique
					</h2>
					<p className="max-w-2xl text-center text-base font-normal text-slate-400 lg:text-lg">
						Des fondations solides pour vos applications web les plus exigeantes.
					</p>
				</div>

				{/* Grid */}
				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					{expertises.map((item, idx) => (
						<div
							key={idx}
							className="bg-otter-pink-200/5 border-otter-pink-200/10 group hover:bg-otter-pink-200/10 hover:border-otter-pink-200/20 relative flex h-72.5 flex-col items-start rounded-2xl border p-8 transition-all duration-300"
						>
							<div className="bg-otter-pink-200/10 mb-8 flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px]">
								{item.icon}
							</div>
							<h3 className="mb-4 text-xl font-bold text-slate-100">{item.title}</h3>
							<p className="text-base leading-relaxed font-normal text-slate-400">
								{item.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
