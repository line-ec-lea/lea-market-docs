import theme from '@nuxt/content-theme-docs'
import 'dotenv/config'

const accentColor = '#ff6600'

export default theme({
  docs: {
    primaryColor: accentColor,
  },

  css: ['../../../../static/css/common.css'],

  loading: { color: accentColor },

  i18n: {
    locales: () => [{
      code: 'ja',
      iso: 'ja-JP',
      file: 'ja-JP.js',
      name: '日本語'
    }],
    defaultLocale: 'ja',
    vueI18n: {
      fallbackLocale: 'ja'
    },
  },

  buildModules: ['@nuxtjs/google-analytics'],
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_DOCS
  },
})
