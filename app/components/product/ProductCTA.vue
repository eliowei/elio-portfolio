<template>
  <section class="mb-section transition-all duration-700 opacity-100 translate-y-0">
    <div class="bg-zinc-950 text-on-primary border border-outline-variant p-12 md:p-24 relative overflow-hidden flex flex-col items-center text-center">
      <div class="absolute inset-0 grid-line opacity-10"></div>
      <div class="relative z-10 max-w-2xl">
        <h2 class="text-4xl mb-8 leading-tight text-on-primary">{{ cta.title }}</h2>
        <p class="font-body-md opacity-70 mb-16 text-on-primary">{{ cta.description }}</p>

        <UButton
          :label="cta.button"
          size="lg"
          variant="outline"
          :aria-label="`${cta.button}按鈕`"
          class="bg-surface text-primary px-16 py-6 hover:bg-surface/80 dark:hover:bg-white dark:hover:text-black uppercase flex items-center justify-center gap-3 mx-auto cursor-pointer hover:scale-[1.02] transition-all"
          trailing-icon="i-lucide-mail"
          @click="handleContact(cta.link)"
          />
      </div>
    </div>
  </section>
</template>

<script setup>

const { navigate } = usePageNavigation()

const handleContact = async (link) => {
  await navigate(link, '合作洽詢')
}

defineProps({
  cta: Object
})
</script>