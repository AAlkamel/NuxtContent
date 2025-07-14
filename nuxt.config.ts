export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: true,
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
    studio: {
      preview: true
    }
  },
  nitro: {
    preset: 'netlify'
  },

})
