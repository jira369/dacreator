import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://dacreator.dev',
  output: 'static',
  integrations: [
    react(),
    mdx(),
    sitemap({ filter: (u) => u !== 'https://dacreator.dev/', i18n: { defaultLocale: 'de', locales: { de: 'de-DE', en: 'en-US', vi: 'vi-VN' } } }),
  ],
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ['framer-motion'],
    },
  },
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en', 'vi'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
