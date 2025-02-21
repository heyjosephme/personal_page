import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content", // 'content' for MDX/Markdown
  schema: z.object({
    // Required frontmatter fields
    title: z.string(),
    date: z.date(),
    author: z.string(),

    // Optional fields
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
    category: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
