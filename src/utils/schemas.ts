import { z } from "astro:content"
import { formatDate } from "./index"
export const contentSchema = {
  schema: z.object({
    layout: z.string(),
    title: z.string(),
    description: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    published: z.boolean(),
    lang: z.string(),
    order: z.number(),
  }),
}