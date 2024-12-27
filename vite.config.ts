import { fileURLToPath, URL } from 'node:url'
import svgLoader from 'vite-svg-loader';

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
  ],
  server: {
    cors: false,
    proxy: {
      '/api': {
          target: 'http://127.0.0.1:5000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
