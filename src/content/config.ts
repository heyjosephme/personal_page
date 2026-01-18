import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
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
  type: "content",
  schema: z.object({
    title: z.string(),
    lastUpdated: z.date().optional(),
    description: z.string().optional(),
  }),
});

const booksCollection = defineCollection({
  type: "content",
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
