# Repository Guidelines

## Project Structure & Module Organization

This portfolio and blog uses Astro 7, React 19, TypeScript, and TailwindCSS 4, deployed to Cloudflare Workers.

- `src/pages/`: Astro routes and API endpoints; `src/layouts/`: shared page layouts.
- `src/components/`: interactive React components and Astro components; `ui/` contains shadcn/ui primitives.
- `src/content/`: Markdown blog posts, books, and pages. Follow the collection schemas in `src/content.config.ts`.
- `src/lib/`, `src/data/`, and `src/config/`: utilities, project data, and feature/comment configuration.
- `src/styles/`: shared CSS; `src/assets/`: imported images; `public/`: static assets.
- `scripts/`: build helpers; `dist/`: generated output.

## Build, Test, and Development Commands

Use Node 26 (`mise.toml`) and pnpm 11.9.0 (`package.json`).

- `pnpm install`: install dependencies.
- `pnpm dev`: start development at `localhost:4321`.
- `pnpm build`: generate the production site in `dist/`.
- `pnpm preview`: build and preview locally.
- `pnpm astro check`: check Astro and TypeScript diagnostics.
- `pnpm lint:ci`: run Biome checks without modifying files.
- `pnpm lint` / `pnpm format`: apply lint fixes / formatting.
- `pnpm deploy`: build and deploy to Cloudflare Workers.

Development, build, and preview commands generate `src/version.ts` from Git metadata; do not edit it manually.

## Coding Style & Naming Conventions

Use strict TypeScript and the `@/*` alias for `src/*`. Biome specifies tab indentation, double quotes, organized imports, and errors for explicit `any` and non-null assertions. Follow PascalCase for feature components (`BlogSearch.tsx`), lowercase UI primitives (`button.tsx`), and kebab-case content filenames. Use Astro for page structure and React islands for interactivity.

## Testing Guidelines

No automated test suite, test naming convention, or coverage threshold is configured. Before submitting, run `pnpm lint:ci`, `pnpm astro check`, and `pnpm build`. Preview affected routes and check mobile layouts, light/dark themes, and changed interactions. Record validation results and any failures in the PR.

## Commit & Pull Request Guidelines

Follow the history's Conventional Commit prefixes: `feat:`, `fix:`, and `chore:` with concise, descriptive subjects. Keep changes focused. PRs should explain the resulting behavior, link relevant issues, list validation performed, and include screenshots for visual changes.

## Configuration Notes

Respect section flags in `src/config/features.ts`. Add new React-island libraries to `vite.optimizeDeps.include` in `astro.config.mjs` to avoid documented cold-start rendering failures. Keep secrets out of Git; local `.env` and `.dev.vars` files are ignored.
