import { defineCollection, z } from "astro:content";

const notas = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    author: z.string(),
    authorRole: z.string().optional(),
    authorImage: z.union([image(), z.string()]).optional(),
    date: z.string(),
    category: z.string(),
    heroImage: z.union([image(), z.string()]),
    heroImageAlt: z.string().optional(),
    location: z.string().optional(),
    type: z.enum(["Nota Informativa", "Reseña", "Nota Interpretativa"]),
  }),
});

export const collections = { notas };
