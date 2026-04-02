# Workflow & Tooling

- Install dependencies with `yarn install`.
- Run local development with `yarn dev`.
- Build the site with `yarn build`.
- Preview with `yarn preview`.
- Lint with `yarn lint` or `yarn lint:fix`.
- Format with `yarn format` or `yarn format:check`.
- Use `oxlint` and `oxfmt` instead of ESLint and Prettier.
- Pre-commit checks run through Husky and nano-staged.
- If you change `Dockerfile`, preserve Yarn 4 cache mount behavior.

For broader workflow details, see [docs/WORKFLOW.md](../WORKFLOW.md).
