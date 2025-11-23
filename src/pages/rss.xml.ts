import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { enhanceBlogPosts } from "@/lib/blog-helpers";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const allPosts = await getCollection("blog");

  // Filter out drafts in production
  const posts = import.meta.env.DEV
    ? allPosts
    : allPosts.filter((post) => !post.data.draft);

  const enhancedPosts = await enhanceBlogPosts(posts);

  // Sort by date (newest first)
  const sortedPosts = enhancedPosts.sort((a, b) => {
    return (
      new Date(b.timestamps.createdAt).getTime() -
      new Date(a.timestamps.createdAt).getTime()
    );
  });

  return rss({
    title: "Joseph's Blog",
    description:
      "Thoughts, tutorials, and insights about web development from a full-stack developer in Tokyo",
    site: context.site || "https://heyjoseph.me",
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description || "",
      pubDate: new Date(post.timestamps.createdAt),
      link: `/blog/${post.slug}/`,
      categories: post.data.categories,
    })),
    customData: `<language>en-us</language>`,
  });
}
