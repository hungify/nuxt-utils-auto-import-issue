import { sxzz } from '@sxzz/eslint-config'

export default sxzz(
  {
    rules: {
      'no-console': 'error',
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
