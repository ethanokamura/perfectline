import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://codesantacruz.com',
  // site: 'https://paperwrld.github.io',
  // base: '/codesantacruz_v2',
  // output: 'static',
  build: {
    redirects: false,
  },
  integrations: [tailwind(), mdx(), icon()]
});