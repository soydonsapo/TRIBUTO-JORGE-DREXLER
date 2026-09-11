import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/TRIBUTO-JORGE-DREXLER/' : '/',
  plugins: [react(), tailwindcss()],
})
