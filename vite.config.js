import { defineConfig } from 'vite'
import Markdown from 'vite-plugin-md'
import VUE from '@vitejs/plugin-vue'

export default defineConfig({
  server: {
    open: true,
  },
  plugins: [
    Markdown(),
    VUE(),
  ],
})