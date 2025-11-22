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
  readingTime: number;
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

/**
 * Calculate reading time based on word count
 * Average reading speed: 200 words per minute
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
}

export async function enhanceBlogPosts(
  posts: CollectionEntry<"blog">[]
): Promise<EnhancedBlogPost[]> {
  return Promise.all(
    posts.map(async (post) => {
      const timestamps = await getBlogTimestamps(post);
      const readingTime = calculateReadingTime(post.body);
      return {
        ...post,
        timestamps,
        readingTime,
      };
    })
  );
}

export interface CategoryNode {
  name: string;
  count: number;
  children: Record<string, CategoryNode>;
}

export function buildCategoryTree(posts: any[]) {
  const categoryTree: Record<string, CategoryNode> = {};

  posts.forEach((post) => {
    if (!post.data.categories || post.data.categories.length === 0) return;

    post.data.categories.forEach((categoryPath: string) => {
      // Split by '/' or '>' or any other separator you prefer
      const categories = categoryPath.split("/").map((c) => c.trim());

      let currentLevel = categoryTree;

      categories.forEach((category, index) => {
        if (!currentLevel[category]) {
          currentLevel[category] = {
            name: category,
            count: 0,
            children: {},
          };
        }

        // Only increment count for the last category in the path
        if (index === categories.length - 1) {
          currentLevel[category].count++;
        }

        currentLevel = currentLevel[category].children;
      });
    });
  });

  return categoryTree;
}

export function getAllCategories(posts: any[]) {
  const categories: Record<string, number> = {};

  posts.forEach((post) => {
    if (!post.data.categories) return;

    post.data.categories.forEach((category: string) => {
      // Count the full category path
      categories[category] = (categories[category] || 0) + 1;
    });
  });

  return categories;
}

/**
 * Gets all unique tags from blog posts with their counts
 */
export function getAllTags(posts: any[]) {
  const tags: Record<string, number> = {};

  posts.forEach((post) => {
    if (!post.data.tags) return;

    post.data.tags.forEach((tag: string) => {
      tags[tag] = (tags[tag] || 0) + 1;
    });
  });

  return tags;
}
