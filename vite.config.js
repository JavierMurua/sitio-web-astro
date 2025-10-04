// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true, // expone el servidor en la red
    port: 4321, // fuerza a usar siempre el mismo puerto
    strictPort: true, // evita que cambie de puerto si 4321 está ocupado
    hmr: {
      clientPort: 443, // para que el hot reload funcione con Ngrok (HTTPS)
    },
  },
});
