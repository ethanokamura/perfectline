import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import icon from "astro-icon";

export default defineConfig({
  site: 'https://perfectline.io',
  integrations: [
    tailwind(),
    mdx(),
    icon({
      iconDir: "src/icons",
    })
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: 'catppuccin-frappe',
      themes: {
        dark:'catppuccin-frappe',
        light:'catppuccin-latte',
      },
      defaultColor: "light",
      cssVariablePrefix: '--shiki-',
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
      transformers: [],
    },
  },
});