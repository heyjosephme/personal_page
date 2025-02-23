import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date().optional(),
    lastUpdated: z.date().optional(),
    draft: z.boolean().optional().default(false),
    category: z.string().optional(),
    description: z.string().optional(),
    createTime: z.string().datetime().optional(),
    updateTime: z.string().datetime().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
