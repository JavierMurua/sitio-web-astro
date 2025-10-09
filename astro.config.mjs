import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

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
