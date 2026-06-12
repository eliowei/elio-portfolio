<template>
  <main
    class="min-h-screen flex flex-col justify-center items-center px-margin-page relative overflow-hidden bg-surface"
  >
    <div class="max-w-3xl w-full text-center flex flex-col items-center">
      <h1 class="text-7xl text-primary mb-2">
        404
      </h1>

      <h2 class="font-headline-md text-headline-md text-primary mb-6">
        頁面未找到
      </h2>

      <p class="font-body-lg text-body-lg text-secondary max-w-xl mb-8">
        您訪問的頁面似乎不存在或已遷移。
      </p>

      <div class="flex flex-col md:flex-row gap-4">
        <UButton
          label="回到首頁"
          color="primary"
          variant="solid"
          size="lg"
          @click="navigate('/')"
          class="font-bold cursor-pointer px-10 py-4"
        />
      </div>
    </div>
  </main>
</template>

<script setup>
const { navigate } = usePageNavigation()

defineProps({
  error: Object
})

useSeoMeta({
  title: '404 | Elio Wei',
  robots: 'noindex,nofollow'
})
</script>