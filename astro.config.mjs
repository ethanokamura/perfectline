import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
// https://astro.build/config
export default defineConfig({
  // site: 'https://codesantacruz.com',
  // base: '/', // ethanokamura/
  output: 'static',
  integrations: [tailwind()]
});