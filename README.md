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

## Languages and translations

Astro's built-in i18n routing uses English at `/`, Japanese at `/ja/`, and
Simplified Chinese at `/zh-cn/`. Existing English URLs remain unchanged.
The language menu links to the equivalent translation when available; otherwise
it explicitly links to that language's homepage. Missing articles are not copied
into another language or advertised as translations.

- Shared UI strings: `src/i18n/ui.ts`; About and Contact copy: adjacent dictionaries.
- Shared page templates: `src/views/`; thin route files select the locale.
- Editorial pages: `src/content/pages/{ja,zh-cn}/`, with `lang` and `translationKey`.
- Blog entries: existing English files can stay where they are (`lang` defaults to
  `en`), or use `src/content/blog/en/`. Add translations under `ja/` or `zh-cn/`.

Example: `src/content/blog/ja/my-post.md`:

```yaml
---
title: "記事のタイトル"
lang: ja
translationKey: my-post
date: 2026-09-21T00:00:00Z
draft: true
description: "記事の概要。"
---
```

Use the same `translationKey` across versions, even when filenames differ. Use
single kebab-case filenames and keys; each language may have only one entry per
translation key. Keep `lang` consistent with the directory. Titles, descriptions,
body text, dates, and draft status are independent for each translation. Review
translations before publishing by setting `draft: false`.

Lists, search, tags, categories, and RSS are filtered by locale and exclude drafts
in production. Feeds are `/rss.xml`, `/ja/rss.xml`, and `/zh-cn/rss.xml`. Canonicals
point to each translation; `hreflang` links only connect available versions.
Blog translations share view counts through their translation key; comments remain
separate by pathname. Generated sharing images use Noto CJK fonts for Japanese and
Chinese; their first generation requires network access to the font sources.
Projects and Reading remain disabled by the existing feature flags; their content
has not been translated.

Run `node --test tests/i18n.test.mjs` for locale/URL/dictionary checks, then build
and verify the localized routes and sitemap. There is no automatic translation
service or browser-language redirect.
