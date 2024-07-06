import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 配置跨域
  server: {
    proxy: {
      '/adminapi': {
        target: 'http://localhost:3000',
        // 是否允许跨域
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/users/, '')
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        // additionalData: '@import "@/style/variables.scss";'
      }
    }
  }
})
