# Developer Workflows

This document summarizes local development tooling.

For the canonical agent-facing workflow rules, see [docs/agents/workflow.md](agents/workflow.md).

## Local Commands

- Install dependencies with `yarn install`
- Start local development with `yarn dev`
- Build with `yarn build`
- Preview with `yarn preview`

## Tooling

- Package manager: Yarn 4.x via Corepack
- Linting uses `oxlint`
- Formatting uses `oxfmt`
- Pre-commit checks run through Husky and nano-staged
- Changes to `Dockerfile` should preserve Yarn 4 cache mount behavior
