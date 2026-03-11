const LocationIcon = (
	<svg
		aria-hidden="true"
		className="h-5 w-5"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
		/>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
		/>
	</svg>
)

const FooterGithubIcon = (
	<svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.728 0 .267.18.577.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"
		/>
	</svg>
)

const FooterLinkedinIcon = (
	<svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
		/>
	</svg>
)

const FooterTwitterIcon = (
	<svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" className="h-4 w-4">
		<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
	</svg>
)

export function Footer() {
	return (
		<footer
			id="contact"
			className="border-otter-pink-200/10 mt-10 w-full border-t bg-[#0b1120]/50 pt-16 pb-12"
		>
			<div className="mx-auto flex max-w-7xl flex-col gap-12 px-6">
				{/* Top section */}
				<div className="flex flex-col items-start justify-between gap-12 lg:flex-row">
					{/* Brand & Bio */}
					<div className="flex max-w-sm flex-col gap-4">
						<div className="flex items-center gap-3">
							<div className="bg-otter-pink-200/20 flex items-center justify-center rounded-lg p-1.5">
								<div className="bg-otter-pink-200 h-4 w-4 rounded-sm"></div>
							</div>
							<span className="text-xl font-bold text-white">Alexandre Sanchez</span>
						</div>
						<p className="text-base font-normal text-slate-400">
							Architecte de solutions backend & passionné d'écosystèmes robustes.
						</p>
					</div>

					{/* Location */}
					<div className="flex flex-col gap-4">
						<span className="text-otter-pink-200 text-sm font-bold tracking-[1.4px] uppercase">
							Localisation
						</span>
						<div className="flex items-center gap-2 text-slate-400">
							{LocationIcon}
							<span>Annecy, France</span>
						</div>
					</div>

					{/* Socials */}
					<div className="flex flex-col gap-4">
						<span className="text-otter-pink-200 text-sm font-bold tracking-[1.4px] uppercase">
							Réseaux
						</span>
						<div className="flex items-center gap-4 text-slate-400">
							<a
								href="https://github.com/alex73630"
								target="_blank"
								aria-label="GitHub"
								rel="noopener noreferrer"
								className="bg-otter-pink-200/10 hover:bg-otter-pink-200/20 focus-visible:ring-otter-pink-200 flex h-10 w-10 items-center justify-center rounded-full transition-all hover:text-white focus-visible:ring-2 focus-visible:outline-none"
							>
								{FooterGithubIcon}
							</a>
							<a
								href="https://linkedin.com/in/alex-otterly"
								aria-label="LinkedIn"
								rel="noopener noreferrer"
								className="bg-otter-pink-200/10 hover:bg-otter-pink-200/20 focus-visible:ring-otter-pink-200 flex h-10 w-10 items-center justify-center rounded-full transition-all hover:text-white focus-visible:ring-2 focus-visible:outline-none"
							>
								{FooterLinkedinIcon}
							</a>
							<a
								href="https://twitter.com/alex73630"
								target="_blank"
								aria-label="Twitter"
								rel="noopener noreferrer"
								className="bg-otter-pink-200/10 hover:bg-otter-pink-200/20 focus-visible:ring-otter-pink-200 flex h-10 w-10 items-center justify-center rounded-full transition-all hover:text-white focus-visible:ring-2 focus-visible:outline-none"
							>
								{FooterTwitterIcon}
							</a>
						</div>
					</div>
				</div>

				{/* Bottom border & Credits */}
				<div className="border-otter-pink-200/5 flex flex-col items-center justify-between gap-4 border-t pt-8 lg:flex-row">
					<p className="m-0 text-center text-sm font-normal text-slate-500 lg:text-left">
						Fait avec ❤️ & 🦦 par{" "}
						<a
							href="https://otterly.space"
							className="text-otter-pink-200 hover:text-otter-pink-300 font-bold transition-colors"
						>
							Otterly Space
						</a>
					</p>
					<p className="m-0 text-center text-sm font-normal text-slate-500 lg:text-right">
						© 2026 Alexandre Sanchez. Tous droits réservés.
					</p>
				</div>
			</div>
		</footer>
	)
}
