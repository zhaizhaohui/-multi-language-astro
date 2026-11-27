import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

const { SITE_URL } = loadEnv("production", process.cwd(), "");
const site = SITE_URL?.trim() || undefined;

export default defineConfig({
  ...(site ? { site } : {}),
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: site ? [sitemap()] : [],
});
