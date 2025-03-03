import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import icon from "astro-icon";

export default defineConfig({
  site: 'https://perfectline.io',
  integrations: [tailwind(), mdx(), icon()],
  markdown: {
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