# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This project uses **pnpm** as the package manager. All commands should be run with `pnpm`:

- `pnpm install` - Install dependencies
- `pnpm dev` - Start development server at `localhost:4321`
- `pnpm build` - Build production site to `./dist/`
- `pnpm preview` - Preview build locally (builds first, then serves via Wrangler Pages)
- `pnpm deploy` - Deploy to Cloudflare Pages (builds and deploys)
- `pnpm cf-typegen` - Generate Cloudflare Workers types

## Architecture Overview

This is an **Astro-based portfolio/blog site** deployed to **Cloudflare Pages** with SSR (Server-Side Rendering) enabled.

### Tech Stack
- **Astro 5** with React integration
- **React 19** with JSX runtime
- **TailwindCSS 4** for styling
- **shadcn/ui** components (New York style)
- **TypeScript** with strict configuration
- **Cloudflare Pages** for deployment
- **Content collections** for blog management

### Key Architecture Patterns

1. **Hybrid Rendering**: Astro pages (`.astro`) for static content, React components (`.tsx`) for interactive UI
   - Main landing page: `src/pages/index.astro` imports `src/LandingPage.tsx`
   - Blog pages use Astro's content collections system

2. **Content Management**:
   - Blog posts stored in `src/content/blog/` as Markdown files
   - Schema defined in `src/content/config.ts` with Zod validation
   - Categories and tags supported

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

- **Cloudflare Integration**: Uses `@astrojs/cloudflare` adapter with platform proxy enabled
- **React 19 Compatibility**: Special alias in `astro.config.mjs` uses `react-dom/server.edge` for production builds
- **Server Output**: Configured for SSR deployment (`output: "server"`)
- **Site URL**: `https://heyjoseph.me` (configured in `astro.config.mjs` and `src/config/site.ts`)

### Development Workflow

1. **Local Development**: Use `pnpm dev` for hot reloading
2. **Content Creation**: Add blog posts to `src/content/blog/` following the schema
3. **Component Development**: Follow existing patterns in `src/components/`
4. **Testing Build**: Use `pnpm preview` to test production build locally
5. **Deployment**: `pnpm deploy` builds and deploys to Cloudflare Pages

### File Structure Highlights
```
src/
├── components/        # React components
├── content/          # Blog posts and content collections
├── data/             # Shared data (projects, etc.)
├── layouts/          # Astro layout templates
├── pages/            # Astro pages (routes)
├── config/           # Site configuration
└── styles/           # Global styles
```