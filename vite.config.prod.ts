import { resolve } from 'path'
import { defineConfig } from 'vite'

const formatMap = {
  es: 'js',
  cjs: 'cjs',
}

export default defineConfig({
  build: {
    minify: true,
    outDir: 'dist/prod',
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        'number/numSanitize': resolve(__dirname, 'src/number/numSanitize.ts'),
        'number/accurateCal': resolve(__dirname, 'src/number/accurateCal.ts'),
      },
      name: 'lutils',
      fileName: (format, entryName) => {
        if (entryName === 'index') {
          return `lutils.min.${formatMap[format]}`
        }
        return `${entryName}.min.${formatMap[format]}`
      },
      formats: ['es', 'cjs'],
    },
  }
}) 