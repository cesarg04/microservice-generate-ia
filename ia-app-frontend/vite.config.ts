import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import alias_path from './alias.config'
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),  
    svgr({
    exportAsDefault: true,
    svgrOptions: {
      icon: true,
    },
  }),],
  resolve: {
    alias: alias_path
  },
  build: {
    target: "es2022"
  },
  esbuild: {
    target: "es2022"
  },
  optimizeDeps:{
    esbuildOptions: {
      target: "es2022",
    }
  }
})
