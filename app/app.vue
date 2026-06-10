<template>
  <ClientOnly>
    <PageOverlay />
  </ClientOnly>

  <NuxtLoadingIndicator color="var(--color-primary)" :height="3"/>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup>
useHead({
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
})

useSeoMeta({
  ogType: 'website',
  ogSiteName: 'Elio Wei',
  ogImage: 'images/og-image.png',
  twitterCard: 'images/og-image.png'
})
const { leave } = usePageTransition()
const nuxtApp = useNuxtApp()
const loading = useLoadingIndicator()

const isNavigating = useState(
  'isNavigating',
  () => false
)

const isFirstLoad = useState(
  'isFirstLoad',
  () => true
)

nuxtApp.hook('page:finish', async () => {
  if (isFirstLoad.value) {
    isFirstLoad.value = false
    return
  }

  loading.finish()

  await leave()

  isNavigating.value = false
})
</script>