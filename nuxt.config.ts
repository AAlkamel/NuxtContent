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
  
  nitro: {
    preset: 'netlify'
  },

  content: {
    documentDriven: true,
    studio: {
      preview: {
        api: 'https://docs-api360.netlify.app',
        gitInfo: {
          name: 'NuxtContent',
          owner: 'AAlkamel',
          url: 'https://github.com/AAlkamel/NuxtContent'
        }
      }
    }
  }
})
