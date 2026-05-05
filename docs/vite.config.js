import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/ra2581392523028/' : '/',
  build: {
    outDir: '.',
    emptyOutDir: false,
  }
}))