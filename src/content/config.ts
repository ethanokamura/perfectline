// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Define your collection(s)
const courseCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    course: z.string(),
    date: z.string().optional(),
    tags: z.array(z.string()).optional(),
    published: z.boolean(),
    lang: z.string(),
    img: z.string().optional(),
    alt: z.string().optional(),
    order: z.number().optional(),
  }),
});

const pageCollection = defineCollection({
  type: 'content',
  schema: z.object({
    layout: z.string().optional(),
    title: z.string(),
    description: z.string().optional(),
    course: z.string().optional(),
    tags: z.array(z.string()).optional(),
    published: z.boolean().optional(),
    lang: z.string().optional(),
    order: z.number().optional(),
    videoId: z.string().optional(),
  }),
});

const infoCollection = defineCollection({
  type: 'content',
  schema: z.object({
    layout: z.string().optional(),
    title: z.string(),
    description: z.string().optional(),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'trees': pageCollection,
  'graphs': pageCollection,
  'courses': courseCollection,
  'cpp-101': pageCollection,
  'linked-list': pageCollection,
  'dsa': pageCollection,
  'unity-101': pageCollection,
  'javascript-101': pageCollection,
  'git-101': pageCollection,
  'info': infoCollection
};