import { defineCollection, z } from "astro:content";

const notas = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    author: z.string(),
    authorRole: z.string().optional(),
    authorImage: z.string().optional(),
    date: z.string(),
    category: z.string(),
    heroImage: z.string(),
    heroImageAlt: z.string().optional(),
    location: z.string().optional(),
  }),
});

export const collections = { notas };
