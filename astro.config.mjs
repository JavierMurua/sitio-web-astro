import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sharp from 'sharp';
import ghPages from 'astro-gh-pages'; // 🚀 Agrega esta integración

export default defineConfig({
  site: "https://JavierMurua.github.io", // 🔹 Reemplaza con tu usuario y repo
  base: "sitio-web-astro", // 🔹 Nombre del repositorio
  output: "static", // 🔹 Asegura que Astro genere archivos estáticos
  integrations: [tailwind(), react(), ghPages()], // 🔹 Agrega ghPages() aquí
  assets: {
    addSharpInstructions: true,
    services: [
      {
        name: 'sharp',
        constructor: sharp,
      },
    ],
  },
});
