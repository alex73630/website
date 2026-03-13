# Tech Stack

This document summarizes the technology choices behind the website.

For agent-facing architecture rules and file placement conventions, see [docs/agents/architecture.md](agents/architecture.md).

## Stack

- Framework: Astro 6 with React 19 integration
- Styling: Tailwind CSS v4 via `@tailwindcss/vite`
- Build output: static site generated in Node.js
- Runtime: static assets served by Nginx

## Project Areas

- Routes live in `src/pages/`
- Shared page shells live in `src/layouts/`
- Global styles live in `src/styles/global.css`
- Public static assets live in `public/`
