import fs from "fs/promises";
import path from "path";
import type { CollectionEntry } from "astro:content";

export interface BlogFrontmatter {
  title: string;
  date?: Date;
  lastUpdated?: Date;
  draft?: boolean;
  categories?: string[];
  tags?: string[];
  description?: string;
}

export interface BlogTimestamps {
  createdAt: string;
  updatedAt: string;
}

export interface EnhancedBlogPost
  extends Omit<CollectionEntry<"blog">, "data"> {
  data: BlogFrontmatter;
  timestamps: BlogTimestamps;
}

export async function getBlogTimestamps(
  post: CollectionEntry<"blog">
): Promise<BlogTimestamps> {
  const filePath = path.join(
    process.cwd(),
    "src/content/blog",
    `${post.slug}.md`
  );
  try {
    const stat = await fs.stat(filePath);
    return {
      createdAt: post.data.date
        ? post.data.date.toISOString()
        : stat.birthtime.toISOString(),
      updatedAt: post.data.lastUpdated
        ? post.data.lastUpdated.toISOString()
        : stat.mtime.toISOString(),
    };
  } catch (error) {
    console.error(`Error getting timestamps for ${post.slug}:`, error);
    return {
      createdAt: post.data.date?.toISOString() ?? new Date().toISOString(),
      updatedAt:
        post.data.lastUpdated?.toISOString() ?? new Date().toISOString(),
    };
  }
}

export async function enhanceBlogPosts(
  posts: CollectionEntry<"blog">[]
): Promise<EnhancedBlogPost[]> {
  return Promise.all(
    posts.map(async (post) => {
      const timestamps = await getBlogTimestamps(post);
      return {
        ...post,
        timestamps,
      } as EnhancedBlogPost;
    })
  );
}
