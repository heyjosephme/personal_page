# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This project uses **pnpm** as the package manager (Node 26, pinned via `mise.toml`). All commands should be run with `pnpm`:

- `pnpm install` - Install dependencies
- `pnpm dev` - Start development server at `localhost:4321`
- `pnpm build` - Build production site to `./dist/`
- `pnpm preview` - Build, then preview the production build locally (`astro preview` via the Cloudflare adapter)
- `pnpm deploy` - Build and deploy to Cloudflare Workers (`wrangler deploy`)
- `pnpm cf-typegen` - Generate Cloudflare Workers types (`wrangler types`)
- `pnpm lint` / `pnpm format` - Lint / format with Biome (`pnpm lint:ci` for CI)

> `dev`, `build`, and `preview` first run `scripts/generate-version.js`, which stamps the current git commit into a version file used by the site footer / changelog.

## Architecture Overview

This is an **Astro-based portfolio/blog site** deployed to **Cloudflare Workers** (static assets + SSR).

### Tech Stack
- **Astro 7** with React integration (`@astrojs/react`)
- **React 19** with JSX runtime
- **TailwindCSS 4** for styling (Vite plugin)
- **shadcn/ui** components (New York style)
- **TypeScript** with strict configuration
- **Biome** for linting and formatting
- **Cloudflare Workers** (static assets) for deployment via `@astrojs/cloudflare`
- **Content collections** for blog, pages, and books

### Key Architecture Patterns

1. **Hybrid Rendering**: Astro pages (`.astro`) for static content, React components (`.tsx`) for interactive UI
   - Main landing page: `src/pages/index.astro` imports `src/LandingPage.tsx`
   - React islands hydrate via `client:*` directives

2. **Content Management**:
   - Collections defined in `src/content.config.ts` with Zod schemas + glob loaders
   - `blog` (`src/content/blog/`), `pages` (`src/content/pages/`), `books` (`src/content/books/`)
   - Note: the `blog` collection currently has no entries, so an empty-collection warning at build/dev is expected until a post is added (or the blog feature is retired)

3. **Component Structure**:
   - `src/components/` - React components for interactive features
   - `src/components/ui/` - shadcn/ui components
   - `src/layouts/` - Astro layout templates

4. **Styling System**:
   - TailwindCSS 4 with Vite plugin integration
   - CSS variables for theming (`src/styles/global.css`)
   - shadcn/ui component system with "new-york" style

5. **Path Aliases**:
   - `@/*` maps to `src/*` (configured in `tsconfig.json` and `components.json`)

### Important Configuration Details

- **Cloudflare Workers**: Uses the `@astrojs/cloudflare` adapter (v14+) with `output: "server"`, deployed as a Worker with static assets. See `wrangler.jsonc` (`main: "@astrojs/cloudflare/entrypoints/server"`, assets served from `dist/client`).
- **workerd dev SSR**: As of adapter v14, `astro dev` runs SSR inside Cloudflare's `workerd` runtime (not Node), so local dev mirrors production. `astro dev` also runs as a managed daemon — use `astro dev stop | status | logs`.
- **React island cold-start (important gotcha)**: In the `workerd` dev SSR environment, Vite's dependency optimizer can split React across separate optimize passes and reload the worker mid-render, producing a first-request "Invalid hook call" / `Cannot read properties of null (reading 'useState')` error and a blank page that only resolves on refresh. To prevent this, `astro.config.mjs` pre-bundles React **and every React-island dependency** via `vite.optimizeDeps.include`. **When you add a new React island library, add it to that list**, otherwise the cold-start blank page can return.
- **Images**: `imageService: "compile"` is set on the adapter to keep compile-time image optimization (pre-v14 behavior), so `astro:assets` works without a Cloudflare Images (`IMAGES`) binding.
- **Site URL**: `https://heyjoseph.me` (configured in `astro.config.mjs`).

### Development Workflow

1. **Local Development**: `pnpm dev` for hot reloading (dev SSR runs in workerd)
2. **Content Creation**: Add Markdown to the relevant collection under `src/content/`, following its schema in `src/content.config.ts`
3. **Component Development**: Follow existing patterns in `src/components/`; register any new React-island dependency in `optimizeDeps.include` (see above)
4. **Testing Build**: `pnpm preview` to test the production build locally
5. **Deployment**: `pnpm deploy` builds and deploys to Cloudflare Workers

### File Structure Highlights
```
src/
├── components/        # React components (+ ui/ for shadcn)
├── content/           # Content collections (blog, pages, books)
├── content.config.ts  # Collection schemas (Zod + glob loaders)
├── data/              # Shared data (projects, etc.)
├── layouts/           # Astro layout templates
├── pages/             # Astro pages (routes)
├── config/            # Site configuration
├── styles/            # Global styles
└── LandingPage.tsx    # Main landing page (React)
```
