import authors from "../data/authors.json";
import { defineCollection, z } from "astro:content";

const authorNames = Object.keys(authors);

const notas = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    author: z.enum(authorNames),
    date: z.string(),
    category: z.string(),
    heroImage: z.union([image(), z.string()]).optional(),
    heroImageAlt: z.string().optional(),
    location: z.string().optional(),
    type: z.enum(["Nota Informativa", "Reseña", "Nota Interpretativa"]),
  }),
});

export const collections = { notas };
