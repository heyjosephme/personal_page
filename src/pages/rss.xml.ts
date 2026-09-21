import { localeFromPath, languageTags } from "@/i18n/config";
import { ui } from "@/i18n/ui";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { enhanceBlogPosts } from "@/lib/blog-helpers";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const locale = localeFromPath(context.url.pathname);
  const allPosts = await getCollection("blog", ({ data }) => data.lang === locale);

  // Filter out drafts in production
  const posts = import.meta.env.DEV
    ? allPosts
    : allPosts.filter((post) => !post.data.draft);

  const enhancedPosts = enhanceBlogPosts(posts);

  // Sort by date (newest first)
  const sortedPosts = enhancedPosts.sort((a, b) => {
    return (
      new Date(b.timestamps.createdAt).getTime() -
      new Date(a.timestamps.createdAt).getTime()
    );
  });

  return rss({
    title: `${ui[locale].blog} — Joseph`,
    description: ui[locale].blogDescription,
    site: context.site || "https://heyjoseph.me",
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description || "",
      pubDate: new Date(post.timestamps.createdAt),
      link: post.url,
      categories: post.data.categories,
    })),
    customData: `<language>${languageTags[locale]}</language>`,
  });
}
