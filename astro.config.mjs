import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sharp from 'sharp';

export default defineConfig({
  site: "http://localhost:3000", // 🔹 Reemplaza con tu usuario y repo
  base: "/", // 🔹 Nombre del repositorio
  output: "static", // 🔹 Asegura que Astro genere archivos estáticos
  integrations: [tailwind(), react()],
  assets: {
    addSharpInstructions: true,
    services: [
      {
        name: 'sharp',
        constructor: sharp,
      },
    ],
  },
  server: {
    host: true
  },
  vite: {
    resolve: {
      alias: {
        '@': '/src', // 🔹 Aquí definimos el alias
      },
    },
  },
});
