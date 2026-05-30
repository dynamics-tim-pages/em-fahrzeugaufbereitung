import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.em-fahrzeugaufbereitung.de',
  vite: {
    plugins: [tailwindcss()],
  },
});
