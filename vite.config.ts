import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        memo: true,
        icon: true
      }
    })
  ],
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src'), '@tests': path.resolve(__dirname, 'tests') }
  },
  server: {
    port: 5000,
    host: true,
    strictPort: true
  }
})
