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
    minify: false,
    outDir: 'dist/dev',
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        'number/numSanitize': resolve(__dirname, 'src/number/numSanitize.ts'),
        'number/accurateCal': resolve(__dirname, 'src/number/accurateCal.ts'),
      },
      name: 'lutils',
      fileName: (format, entryName) => {
        if (entryName === 'index') {
          return `lutils.${formatMap[format]}`
        }
        return `${entryName}.${formatMap[format]}`
      },
      formats: ['es', 'cjs'],
    },
    
  }
})