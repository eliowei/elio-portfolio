<template>
  <PageOverlay />

  <NuxtLoadingIndicator color="var(--color-primary)" :height="3"/>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup>
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