# Joseph's Portfolio

Personal portfolio and blog built with Astro 7, React 19, and TailwindCSS 4. Deployed to Cloudflare Workers with static assets.

## Tech Stack

- **Astro 7** with SSR and React integration
- **React 19** with TailwindCSS 4 and shadcn/ui
- **Cloudflare Workers** with static assets for deployment
- **Biome** for linting and formatting
- **Content collections** for blog, books, and pages

## Commands

| Command         | Action                                      |
| :-------------- | :------------------------------------------ |
| `pnpm install`  | Install dependencies                        |
| `pnpm dev`      | Start dev server at `localhost:4321`         |
| `pnpm build`    | Build production site to `./dist/`           |
| `pnpm preview`  | Preview production build locally             |
| `pnpm deploy`   | Build and deploy to Cloudflare Workers       |
| `pnpm lint`     | Lint and auto-fix with Biome                 |
| `pnpm format`   | Format with Biome                            |

## Project Structure

```
src/
├── components/        # React components
│   └── ui/           # shadcn/ui components
├── content/          # Content collections (blog, books, pages)
├── data/             # Shared data (projects)
├── layouts/          # Astro layout templates
├── lib/              # Utilities and blog helpers
├── pages/            # Astro pages (routes)
├── config/           # Site configuration
└── styles/           # Global styles
```
