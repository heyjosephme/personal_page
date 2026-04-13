import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.date().optional(),
    lastUpdated: z.date().optional(),
    draft: z.boolean().optional().default(false),
    categories: z.array(z.string()).optional().default([]),
    tags: z.array(z.string()).optional().default([]),
    description: z.string().optional(),
  }),
});

const pagesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    lastUpdated: z.date().optional(),
    description: z.string().optional(),
  }),
});

const booksCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/books" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    status: z.enum(["reading", "completed", "want-to-read"]),
    draft: z.boolean().optional().default(false),
    rating: z.number().min(1).max(5).optional(),
    dateFinished: z.date().optional(),
    coverImage: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
  }),
});

export const collections = {
  blog: blogCollection,
  pages: pagesCollection,
  books: booksCollection,
};
