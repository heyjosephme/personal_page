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

export const collections = {
  blog: blogCollection,
  pages: pagesCollection,
};
