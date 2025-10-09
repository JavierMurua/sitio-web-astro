import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";

// ===============================
// ⚙️ Configuración principal del sitio
// ===============================
export default defineConfig({
  site: "https://estudiozalazarparedes.com", // ✅ dominio real (importante para SEO y sitemap)
  base: "/", // ✅ mantiene las rutas en la raíz del dominio
  output: "static", // ✅ ideal para Cloudflare Pages / hosting estático

  // ===============================
  // 🧩 Integraciones recomendadas
  // ===============================
  integrations: [
    sitemap(), // genera sitemap.xml automáticamente
    compress({
      html: true,
      css: true,
      js: true,
      img: false, // Cloudflare ya optimiza imágenes
    }),
  ],

  // ===============================
  // ⚙️ Configuración del servidor local
  // ===============================
  server: {
    host: true,
  },

  // ===============================
  // 🧠 Alias para imports absolutos
  // ===============================
  vite: {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  },
});
