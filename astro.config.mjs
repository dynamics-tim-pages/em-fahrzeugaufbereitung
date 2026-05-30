import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://dynamics-tim-pages.github.io',
  base: '/em-fahrzeugaufbereitung',
  vite: {
    plugins: [tailwindcss()],
  },
});
