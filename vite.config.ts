// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'


console.log('11111', resolve(__dirname, 'src/plugins/index.ts'))
export default defineConfig({
  server: {
    port: 5100,
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main/index.ts'), // Could also be a dictionary or array of multiple entry points
      name: 'lutils',
      // the proper extensions will be added
      fileName: 'lutils'
    }
    // rollupOptions: {
    //   // 确保外部化处理那些你不想打包进库的依赖
    //   external: ['vue'],
    //   output: {
    //     // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
    //     globals: {
    //       vue: 'Vue',
    //     },
    //   },
    // },
  }
})

