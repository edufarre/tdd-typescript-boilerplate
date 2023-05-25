import path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    root: path.resolve(__dirname),
    globals: true,
    mockReset: true,
    environment: 'node'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
