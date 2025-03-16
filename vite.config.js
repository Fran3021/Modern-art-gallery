import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/Modern-art-gallery/',  // Ruta base para GitHub Pages
  build: {
    rollupOptions: {
      input: {
        // Aqui incluimos todas las paginas que queramos procesar
        main: path.resolve(__dirname, 'index.html'),
        location: path.resolve(__dirname, 'location.html'),
        // aqui metemos todas las que queramos
      }
    }
  }
});

