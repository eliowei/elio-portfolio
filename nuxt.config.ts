// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',  
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/content', '@nuxt/fonts', '@nuxtjs/sitemap', '@nuxtjs/robots', '@nuxt/scripts', '@nuxt/image'],
  css: ['~/assets/css/main.css'],
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-Hant'
      },
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon-96x96.png',
          sizes: '96x96'
        },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg'
        },
        {
          rel: 'shortcut icon',
          href: '/favicon.ico'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
        }
      ]
    }
  },
  runtimeConfig: {
    public: {
      siteUrl: 'https://elioflowra.com',
      emailServiceId: '',
      emailTemplateId: '',
      emailPublicKey: ''
    }
  }
})
