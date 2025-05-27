// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'


const formatMap = {
  es: 'js',
  cjs: 'cjs',
}
export default defineConfig({
  server: {
    port: 5100,
  },
  build: {
    minify: true,
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        'number/numSanitize': resolve(__dirname, 'src/number/numSanitize.ts'),
        'number/accurateCal': resolve(__dirname, 'src/number/accurateCal.ts'),
      },
      name: 'lutils',
      fileName: (format, entryName) => {
        if (entryName === 'index') {
          return 'lutils.js'
        }
        return `${entryName}.${formatMap[format]}`
      },
      formats: ['es', 'cjs'],
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

