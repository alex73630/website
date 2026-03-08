# Architecture & Component Boundaries

- Prefer React 19 for UI components.
- Use Astro for routing, page and layout shells, static site generation, SEO, and optimizations that React cannot handle once statically generated.
- Keep pages in `src/pages/*.astro`.
- Keep shared page shells in `src/layouts/*.astro`.
- Import global styles from `src/styles/global.css`.
- Place statically served assets in `public/`.

For broader stack details, see [docs/TECH_STACK.md](../TECH_STACK.md).
