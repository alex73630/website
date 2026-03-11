const ContentSectionGithubIcon = (
	<svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" className="h-8 w-8">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.728 0 .267.18.577.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"
		/>
	</svg>
)

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

export function ContentSection() {
	return (
		<section
			id="contenus"
			className="relative mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 pb-20 lg:flex-row lg:gap-16 lg:pb-32"
		>
			{/* Visual / Twitch Card */}
			<div className="flex w-full lg:w-1/2">
				<a
					href="https://twitch.tv"
					target="_blank"
					rel="noopener noreferrer"
					className="group hover:border-otter-pink-200/30 focus-visible:ring-otter-pink-200 relative min-h-75 w-full overflow-hidden rounded-[20px] border border-slate-800 bg-slate-900 transition-all duration-300 hover:ring-2 focus-visible:outline-none lg:min-h-100"
				>
					{/* Background pattern placeholder */}
					<div className="absolute inset-0 bg-linear-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 opacity-40 transition-opacity group-hover:opacity-60"></div>

					<div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/90 via-black/40 to-transparent p-6 lg:p-8">
						<div className="flex flex-col gap-2">
							<div className="flex items-center gap-3">
								<div className="h-3 w-3 animate-pulse rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.7)]"></div>
								<h3 className="text-xl font-bold text-white lg:text-2xl">
									On code ensemble en direct!
								</h3>
							</div>
							<p className="max-w-[90%] text-sm font-normal text-slate-300 lg:text-base">
								Retrouvez-moi sur Twitch pour des sessions de live coding.
							</p>
						</div>
					</div>
				</a>
			</div>

			{/* Texts & Github Link */}
			<div className="flex w-full flex-col justify-center lg:w-1/2">
				<h2 className="mb-6 text-3xl leading-tight font-bold text-white lg:text-[40px]">
					Suivez mes aventures
					<br className="hidden lg:block" /> techniques
				</h2>
				<p className="mb-8 text-base leading-relaxed font-normal text-slate-400 lg:text-lg">
					Je partage régulièrement mon quotidien de développeur, mes découvertes sur
					NodeJS et mes outils préférés en open-source.
				</p>

				<a
					href="https://github.com/alex73630"
					target="_blank"
					rel="noopener noreferrer"
					className="bg-otter-pink-200/5 border-otter-pink-200/10 group hover:bg-otter-pink-200/10 hover:border-otter-pink-200/30 focus-visible:ring-otter-pink-200 flex flex-row items-center justify-between rounded-2xl border p-6 transition-all duration-300 focus-visible:ring-2 focus-visible:outline-none"
				>
					<div className="flex flex-row items-center gap-4">
						<div className="group-hover:text-otter-pink-200 flex h-10 w-10 items-center justify-center text-slate-300 transition-colors">
							{ContentSectionGithubIcon}
						</div>
						<div className="flex flex-col">
							<span className="text-base font-bold text-slate-100 transition-colors group-hover:text-white">
								GitHub
							</span>
							<span className="text-sm font-normal text-slate-500 transition-colors group-hover:text-slate-400">
								@alex73630
							</span>
						</div>
					</div>
					<div className="group-hover:text-otter-pink-200 text-slate-500 transition-transform group-hover:translate-x-1">
						{ContentSectionArrowIcon}
					</div>
				</a>
			</div>
		</section>
	)
}
