import theme from '@nuxt/content-theme-docs'

const themeColor = '#efdca6'

export default theme({
  docs: {
    primaryColor: themeColor
  },

  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  loading: { color: themeColor },
  generate: {
    fallback: '404.html', // for Netlify
    routes: ['/'] // give the first url to start crawling
  },

  i18n: {
    locales: () => [{
      code: 'ja',
      iso: 'ja-JP',
      file: 'ja-JP.js',
      name: '日本語'
    }],
    defaultLocale: 'ja'
  },

  // build
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
      ]
    },
  }
})
