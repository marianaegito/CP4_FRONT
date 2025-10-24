// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),       // Plugin para suporte ao React (JSX, Fast Refresh, etc.)
    tailwindcss(), // Integração oficial do Tailwind v4 com Vite
  ],

  // (opcional) Se quiser configurar um alias para os imports
  resolve: {
    alias: {
      '@': '/src',
    },
  },

  // (opcional) Porta do servidor de desenvolvimento
  server: {
    port: 5173,
    open: true, // abre o navegador automaticamente
  },
})
