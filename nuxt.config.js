import colors from 'vuetify/es5/util/colors'

export default {
  head: {
    titleTemplate: '%s - thingsIoT',
    title: 'thingsIoT',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['~/assets/scss/global.scss'],
  // ssr: true,
  plugins: [
    // { src: '~/plugins/namefile.js', ssr: false }
  ],
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/vuetify'],
  modules: ['@nuxtjs/axios'],
  env: {
    privateURL: process.env.VUE_APP_BASEURL,
  },
  axios: {
    proxy: true,
    // baseURL: `${process.env.VUE_APP_BASEURL}`,
  },
  proxy: {
    '/baseurl': {
      target: `${process.env.VUE_APP_BASEURL}`,
      pathRewrite: { '^/baseurl': '' },
    },
  },
  vuetify: {
    customVariables: ['~/assets/scss/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  build: {},
}
