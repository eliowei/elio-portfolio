<template>
  <ClientOnly>
    <PageOverlay />
    <Transition name="cookie">
      <CookieBanner v-if="show" @accept="onAccept"  @reject="onReject" />
    </Transition>
  </ClientOnly>

  <NuxtLoadingIndicator color="var(--color-primary)" :height="3"/>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup>
const config = useRuntimeConfig()
const { accept, reject, getConsent, loadGTM } = useConsent()
const show = ref(false)
const ENABLE_COOKIE_BANNER = false

useSeoMeta({
  ogType: 'website',
  ogSiteName: 'Elio Wei',
  ogImage: `${config.public.siteUrl}/images/og-image.png`,

  twitterCard: 'summary_large_image',
  twitterImage: `${config.public.siteUrl}/images/og-image.png`
})
const { leave } = usePageTransition()
const nuxtApp = useNuxtApp()
const loading = useLoadingIndicator()

const onAccept = () => {
  accept()
  show.value = false
}

const onReject = () => {
  reject()
  show.value = false
}

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