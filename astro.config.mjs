import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL;

export default defineConfig({
  ...(site ? { site } : {}),
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: site ? [sitemap()] : [],
});
