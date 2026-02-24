import { defineCollection, z } from "astro:content";

const notas = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { notas };
