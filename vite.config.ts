import { defineConfig } from 'vitest/config'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsConfigPaths()],
  test: {
    environmentMatchGlobs: [
      ['src/http/controllers/**', 'prisma'], // name of the folder 'vitest-environment-prisma'
    ],
  },
})
