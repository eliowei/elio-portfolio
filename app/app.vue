<template>
  <ClientOnly>
    <PageOverlay />
    <Transition name="cookie">
      <CookieBanner v-if="show" @accept="onAccept"  @reject="onReject" />
    </Transition>
  </ClientOnly>

  <NuxtLoadingIndicator color="#9e432c" :height="3" />
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup>
const config = useRuntimeConfig()
useHead({
  link: [{ rel: 'preload', as: 'image', href: '/images/sketchbook/page-tear-edge.webp', media: '(prefers-reduced-motion: no-preference)' }],
})
const { accept, reject, getConsent, loadGTM } = useConsent()
const show = ref(false)
const ENABLE_COOKIE_BANNER = true

useSeoMeta({
  ogType: 'website',
  ogSiteName: 'Elio Wei',
  ogImage: `${config.public.siteUrl}/images/og-image-v2.jpg`,

  twitterCard: 'summary_large_image',
  twitterImage: `${config.public.siteUrl}/images/og-image-v2.jpg`
})

const onAccept = () => {
  accept()
  show.value = false
}

const onReject = () => {
  reject()
  show.value = false
}

const initializeAnalytics = () => {
  if (!ENABLE_COOKIE_BANNER) {
    loadGTM()
    return
  }

  const consent = getConsent()

  show.value = consent === null

  if (consent?.analytics) {
    loadGTM()
  }
}

onMounted(() => {
  const run = () => initializeAnalytics()

  if ('requestIdleCallback' in window) {
    requestIdleCallback(run, {
      timeout: 3000
    })
  } else {
    setTimeout(run, 1000)
  }
})
</script>