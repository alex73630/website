export function Header() {
	return (
		<header className="border-otter-pink-200/10 sticky top-0 z-50 w-full border-b bg-[#0b1120]/80 backdrop-blur-md">
			<div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
				<div className="flex items-center gap-3">
					<div className="bg-otter-pink-200/20 flex items-center justify-center rounded-2xl p-2">
						<img src="/favicon.svg" alt="Logo" className="h-5 w-5" />
					</div>
					<div className="hidden text-xl leading-tight font-bold tracking-tight text-white sm:block">
						Alexandre Sanchez
					</div>
				</div>

				{/* Desktop Nav */}
				<nav className="hidden items-center gap-10 md:flex">
					<a
						href="#expertise"
						className="hover:text-otter-pink-200 focus-visible:ring-otter-pink-200 rounded text-sm font-medium text-slate-100 transition-colors focus-visible:ring-2 focus-visible:outline-none"
					>
						Expertise
					</a>
					<a
						href="#experience"
						className="hover:text-otter-pink-200 focus-visible:ring-otter-pink-200 rounded text-sm font-medium text-slate-100 transition-colors focus-visible:ring-2 focus-visible:outline-none"
					>
						Expérience
					</a>
					<a
						href="#contenus"
						className="hover:text-otter-pink-200 focus-visible:ring-otter-pink-200 rounded text-sm font-medium text-slate-100 transition-colors focus-visible:ring-2 focus-visible:outline-none"
					>
						Contenus
					</a>
					<a
						href="#contact"
						className="hover:text-otter-pink-200 focus-visible:ring-otter-pink-200 rounded text-sm font-medium text-slate-100 transition-colors focus-visible:ring-2 focus-visible:outline-none"
					>
						Contact
					</a>
				</nav>

				<a
					href="#contact"
					className="bg-otter-pink-200 hover:bg-otter-pink-300 focus-visible:ring-otter-pink-200 rounded-2xl px-6 py-2.5 text-center text-sm font-bold text-[#0b1120] shadow-[0_10px_15px_-3px_rgba(249,169,213,0.2)] transition-colors focus-visible:ring-2 focus-visible:outline-none"
				>
					Discutons de votre projet
				</a>
			</div>
		</header>
	)
}
