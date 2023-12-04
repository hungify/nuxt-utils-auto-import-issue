import { sxzz, GLOB_TSX, GLOB_TSX } from '@sxzz/eslint-config'

export default sxzz(
  {
    files: [GLOB_TSX, GLOB_TSX],
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/await-thenable': 'error',
    },
  },
  {
    vue: true,
    prettier: true,
    markdown: true,
    unocss: true,
    sortKeys: true,
  },
)
