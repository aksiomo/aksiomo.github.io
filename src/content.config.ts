import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"

const personal = defineCollection({
  loader: glob({ base: "./src/content/personal", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    date: z.date()
  }),
})

const developer = defineCollection({
  loader: glob({ base: "./src/content/developer", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    date: z.date()
  }),
})

const acgn = defineCollection({
  loader: glob({ base: "./src/content/acgn", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    date: z.date()
  }),
})

const emotionTrash = defineCollection({
  loader: glob({ base: "./src/content/emotion-trash", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    date: z.date()
  }),
})

export const collections = { personal, developer, acgn, emotionTrash }