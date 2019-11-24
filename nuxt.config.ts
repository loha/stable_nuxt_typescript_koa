require('dotenv').config();

const config: any = {
  /**
   * Nuxt mode
   */
  mode: 'universal',

  /**
   * Directory nuxt project
   */

  srcDir: 'client/',

  /**
   * Add env variables to front
   */
  env: {
    baseUrl: process.env.APP_URL || 'http://localhost:3000',
  },

  /**
   ** Build configuration
   */
  build: {
    additionalExtensions: ['ts', 'tsx'],
    /**
     * You can extend webpack config here
     */
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },

  /**
   * Build modules
   */
  buildModules: ['@nuxt/typescript-build'],

  /**
   * Headers of the page
   */
  head: {
    title: 'Nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'noindex' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  /**
   * Customize the progress-bar color
   */
  loading: { color: '#20c93f' },

  /**
   * Plugins to load before mounting the App
   */
  plugins: [],

  /**
   * Nuxt.js modules
   */
  modules: ['@nuxtjs/axios'],

  /**
   * Global CSS
   */
  css: [],

  /**
   * Axios module configuration
   */
  axios: {},
};

export default config;
