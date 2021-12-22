import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 设置别名指向
    }
  },
  base: './', //设置打包路径
  server: {
    port: 4000,
    open: true,
    cors: true
    // proxy:{

    // }
  }
})
