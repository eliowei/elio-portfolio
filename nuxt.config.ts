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
        }
      ]
    }
  },
  runtimeConfig: {
    public: {
      siteUrl: 'https://elioflowra.com',
      emailServiceId: '',
      emailTemplateId: '',
      emailPublicKey: '',
      gtmId: 'GTM-NXZZT98P'
    }
  },
  site: {
    url: 'https://elioflowra.com',
    name: 'Elio Wei',
  },
  sitemap: {
    sources: [
      '/api/__sitemap__/urls'
    ]
  },
  fonts: {
    families: [
      {
        name: 'Inter',
        provider: 'google'
      }
    ]
  },
  routeRules: {
    '/**': {
      prerender: true
    }
  }
})
