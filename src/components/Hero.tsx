import type { ReactNode } from "react"

import { Twemoji } from "./common/Twemoji"

export function Hero({ children }: { children?: ReactNode }) {
	return (
		<section className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-16 px-6 pt-16 pb-10 lg:flex-row lg:gap-24 lg:py-32">
			{/* Content */}
			<div className="z-10 flex w-full flex-col items-center gap-8 lg:w-[55%] lg:items-start">
				{/* Availability Badge */}
				<div className="bg-otter-pink-200/10 border-otter-pink-200/20 flex w-fit max-w-full items-center gap-2 rounded-4xl border px-3 py-1.5 sm:px-4">
					<div className="relative h-2 w-2 shrink-0">
						<div className="bg-otter-pink-200 absolute inset-0 animate-ping rounded-full opacity-75 motion-reduce:animate-none"></div>
						<div className="bg-otter-pink-200 relative h-2 w-2 rounded-full"></div>
					</div>
					<span className="text-otter-pink-200 text-center text-[10px] font-bold tracking-wider uppercase sm:text-xs">
						Disponible pour de nouvelles missions
					</span>
				</div>

				{/* Headlines */}
				<h1 className="text-center text-4xl leading-tight font-black tracking-tight text-white sm:text-5xl lg:text-left lg:text-7xl">
					Expert Backend
					<br />
					<span className="text-otter-pink-200">
						NodeJS/
						<wbr />
						TypeScript
					</span>
					<br />& Fondateur
					<br />
					d'Otterly Space
				</h1>

				{/* Subtitle */}
				<p className="max-w-2xl text-center text-xl leading-relaxed font-normal text-slate-400 lg:text-left">
					<Twemoji>10+ ans d'expérience au service des startups.</Twemoji>
					<br />
					<Twemoji>
						Passionné par l'architecture logicielle, la performance et… les loutres 🦦
					</Twemoji>
				</p>

				{/* CTAs */}
				<div className="flex w-full flex-col items-center gap-4 pt-4 sm:w-auto sm:flex-row">
					<a
						href={import.meta.env.PUBLIC_MEET_LINK}
						className="bg-otter-pink-200 hover:bg-otter-pink-300 focus-visible:ring-otter-pink-200 w-full rounded-3xl px-8 py-4 text-center text-lg font-bold text-[#0b1120] shadow-[0_20px_25px_-5px_rgba(249,169,213,0.25)] transition-colors focus-visible:ring-2 focus-visible:outline-none sm:w-auto"
					>
						Discuter avec moi
					</a>
					<a
						href="https://otterly.space"
						target="_blank"
						rel="noopener noreferrer"
						className="border-otter-pink-200/30 hover:bg-otter-pink-200/10 focus-visible:ring-otter-pink-200 w-full rounded-3xl border px-8 py-4 text-center text-lg font-bold text-white transition-colors focus-visible:ring-2 focus-visible:outline-none sm:w-auto"
					>
						Découvrir Otterly Space
					</a>
				</div>
			</div>

			{/* Image / Graphic */}
			<div className="relative flex w-full max-w-md justify-center lg:w-[40%] lg:justify-end">
				<div className="bg-otter-pink-200/20 pointer-events-none absolute -right-6 -bottom-6 z-0 size-48 rounded-full blur-[50px]"></div>
				<div className="bg-otter-pink-200/10 pointer-events-none absolute -top-6 -left-6 z-0 size-48 rounded-full blur-2xl"></div>

				<div className="border-otter-pink-200/10 from-otter-pink-200/20 relative z-10 aspect-4/5 w-full overflow-hidden rounded-3xl border bg-linear-to-tr to-transparent p-px">
					<div className="group bg-otter-pink-500/15 relative flex h-full w-full items-center justify-center overflow-hidden rounded-[1.44rem]">
						{/* The actual image passed down as a child from Astro */}
						{children}
					</div>
				</div>
			</div>
		</section>
	)
}
