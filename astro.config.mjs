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
      defaultColor: false,
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
      transformers: [],
    },
  },
});