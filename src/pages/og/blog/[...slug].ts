import { getCollection } from "astro:content";
import { OGImageRoute } from "astro-og-canvas";

// Build-time OG image generation (prerendered → static PNGs in dist/client).
// canvaskit runs in Node during the build (prerenderEnvironment: "node"),
// never in the Worker runtime. The default `getSlug` appends ".png", so the
// route file must NOT include an extension (hence `[...slug].ts`).
export const prerender = true;

const posts = (await getCollection("blog")).filter(
  (post) => import.meta.env.DEV || !post.data.draft
);

export const { getStaticPaths, GET } = await OGImageRoute({
  pages: Object.fromEntries(posts.map((post) => [post.id, post.data])),
  getImageOptions: (_id, data) => ({
    title: data.title,
    description: data.description ?? "",
    bgGradient: [
      [24, 24, 27],
      [9, 9, 11],
    ],
    border: { color: [244, 63, 94], width: 12, side: "inline-start" },
    padding: 72,
    font: {
      title: {
        color: [250, 250, 250],
        weight: "Bold",
        size: 64,
        families: ["Noto Sans"],
      },
      description: {
        color: [161, 161, 170],
        weight: "Normal",
        size: 32,
        families: ["Noto Sans"],
      },
    },
    fonts: [
      "https://api.fontsource.org/v1/fonts/noto-sans/latin-700-normal.ttf",
      "https://api.fontsource.org/v1/fonts/noto-sans/latin-400-normal.ttf",
    ],
    format: "PNG",
  }),
});
