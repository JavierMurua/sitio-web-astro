import { defineCollection, z } from 'astro:content';

export const TAGS = ['entrevistas', 'jurisprudencia', 'noticias', 'opinion'] as const;

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string().default('Zalazar & Paredes'),
    tags: z.array(z.enum(TAGS)).optional(),
    draft: z.boolean().default(false),
    image: z.string().optional(), // portada
  }),
});

export const collections = { blog };
