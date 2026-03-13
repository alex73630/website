import faviconSvg from "../assets/logo.svg?no-inline"
import { Bluesky, GitHub, LinkedIn, Twitch, Twitter } from "./common/icons"
import { Twemoji } from "./common/Twemoji"

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
								<img
									src={faviconSvg}
									alt="Logo"
									className="h-5 w-5"
									loading="lazy"
								/>
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
								className="bg-otter-pink-200/10 hover:bg-otter-pink-200/20 focus-visible:ring-otter-pink-200 hover:text-otter-pink-200 flex h-10 w-10 items-center justify-center rounded-full transition-all focus-visible:ring-2 focus-visible:outline-none"
							>
								<GitHub currentColor className="h-5 w-5" />
							</a>
							<a
								href="https://linkedin.com/in/alex-otterly"
								aria-label="LinkedIn"
								rel="noopener noreferrer"
								className="bg-otter-pink-200/10 hover:bg-otter-pink-200/20 focus-visible:ring-otter-pink-200 hover:text-otter-pink-200 flex h-10 w-10 items-center justify-center rounded-full transition-all focus-visible:ring-2 focus-visible:outline-none"
							>
								<LinkedIn currentColor className="h-5 w-5" />
							</a>
							<a
								href="https://bsky.app/profile/alex73630.xyz"
								target="_blank"
								aria-label="Bluesky"
								rel="noopener noreferrer"
								className="bg-otter-pink-200/10 hover:bg-otter-pink-200/20 focus-visible:ring-otter-pink-200 hover:text-otter-pink-200 flex h-10 w-10 items-center justify-center rounded-full transition-all focus-visible:ring-2 focus-visible:outline-none"
							>
								<Bluesky currentColor className="h-5 w-5" />
							</a>
							<a
								href="https://twitch.tv/alex73630"
								target="_blank"
								aria-label="Twitch"
								rel="noopener noreferrer"
								className="bg-otter-pink-200/10 hover:bg-otter-pink-200/20 focus-visible:ring-otter-pink-200 hover:text-otter-pink-200 flex h-10 w-10 items-center justify-center rounded-full transition-all focus-visible:ring-2 focus-visible:outline-none"
							>
								<Twitch currentColor className="h-5 w-5" />
							</a>
							<a
								href="https://twitter.com/alex73630"
								target="_blank"
								aria-label="Twitter"
								rel="noopener noreferrer"
								className="bg-otter-pink-200/10 hover:bg-otter-pink-200/20 focus-visible:ring-otter-pink-200 hover:text-otter-pink-200 flex h-10 w-10 items-center justify-center rounded-full transition-all focus-visible:ring-2 focus-visible:outline-none"
							>
								<Twitter currentColor className="h-5 w-5" />
							</a>
						</div>
					</div>

					{/* Showcase */}
					<div className="flex flex-col gap-4">
						<span className="text-otter-pink-200 text-sm font-bold tracking-[1.4px] uppercase">
							Open Source
						</span>
						<a
							href="https://github.com/alex73630/website"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-otter-pink-200 flex items-center gap-2 text-slate-400 transition-colors"
						>
							<GitHub currentColor className="h-5 w-5" />
							<span className="text-sm font-medium">Code source du site</span>
						</a>
					</div>
				</div>

				{/* Bottom border & Credits */}
				<div className="border-otter-pink-200/5 flex flex-col items-center justify-between gap-4 border-t pt-8 lg:flex-row">
					<p className="m-0 text-center text-sm font-normal text-slate-400 lg:text-left">
						<Twemoji>Fait avec ❤️ & 🦦 par</Twemoji>{" "}
						<a
							href="https://otterly.space"
							className="text-otter-pink-200 hover:text-otter-pink-300 font-bold transition-colors"
						>
							Otterly Space
						</a>
					</p>
					<div className="flex flex-col items-center gap-2 lg:flex-row lg:gap-4 lg:text-right">
						<a
							href="/terms"
							className="hover:text-otter-pink-200 text-sm font-normal text-slate-400 transition-colors"
						>
							Mentions légales
						</a>
						<span className="hidden text-slate-600 lg:inline">•</span>
						<p className="m-0 text-center text-sm font-normal text-slate-400">
							© 2026 Alexandre Sanchez
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
