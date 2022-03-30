import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'piniaPersist',
      fileName: (format: string) => `pinia-persist-uni.${format}.js`,
    },
  },
})
