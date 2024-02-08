import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
// https://astro.build/config
export default defineConfig({
  site: 'https://codesantacruz.com',
  // site: 'https://paperwrld.github.io',
  // base: '/codesantacruz_v2',
  // output: 'static',
  integrations: [tailwind()]
});