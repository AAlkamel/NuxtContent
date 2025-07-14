export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/scripts'
  ],
  css: ['~/assets/css/main.css'],
  
    content: {
    renderer: {
      anchorLinks: false,
    },
    preview: {
      api: 'https://api.nuxt.studio',
      dev: true,
    },
  },
    routeRules: {
    // Needed to activate preview on Nuxt Studio
    '/': { prerender: false },
  },
  nitro: {
    experimental: {
      websocket: true,
    },
    prerender: {
      autoSubfolderIndex: false,
      crawlLinks: true,
      // routes: ['/en', '/ar'],
    },
  },

})
