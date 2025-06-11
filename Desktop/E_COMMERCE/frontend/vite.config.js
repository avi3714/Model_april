import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    fs: { strict: false },
    port:5173
  },
  // 👇 This line is KEY to fix your route fallback
  build: {
    rollupOptions: {
      input: 'index.html',
    },
  },
})
