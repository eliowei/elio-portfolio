<template>
<section ref="heroRef" class="mb-32 bg-surface">
  <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
    <div class="md:col-span-8">
      <span class="text-[13px] text-secondary mb-4 block hero-reveal">CASE STUDY / {{ formatIndex(order!) }}</span>
      <h1 class="text-4xl md:text-7xl text-primary mb-8 leading-none hero-reveal">{{ title }}</h1>
      <p class="text-base text-secondary mb-2 hero-reveal">{{ category }} - {{ year }}</p>
      <p class="text-lg text-secondary max-w-2xl mb-10 hero-reveal">{{ description }}</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 max-w-2xl hero-reveal">
        <div v-for="(item, index) in highlights" :key="index" class="flex items-center gap-1 text-primary">
          <UIcon name="material-symbols:check-circle-outline" class="size-6 text-primary"/>
          {{ item }}
        </div>
      </div>
    </div>
    <div class="md:col-span-4 flex flex-col justify-end gap-6 pt-12 md:pt-0">
      <div class="flex flex-wrap gap-2 hero-reveal">
        <span v-for="(tag, index) in tags" class="px-3 py-1 border border-outline-variant text-[13px] uppercase text-primary" :key="index">{{ tag }}</span>
      </div>
      <div class="flex gap-4">
        <a v-if="demo" class="flex items-center gap-2 text-[13px] text-primary hover:underline hero-reveal" :href="demo">
          <UIcon name="material-symbols:terminal" class="size-6 text-primary"/>

          LIVE_DEMO
        </a>
        <a v-if="github" class="flex items-center gap-2 text-[13px] text-primary hover:underline hero-reveal" :href="github">
          <UIcon name="material-symbols:code" class="size-6 text-primary"/>
          SOURCE_CODE
        </a>
      </div>
    </div>
  </div>
  <div class="mt-32 hero-image">
    <NuxtImg
      :src="cover"
      :alt="`${title}圖片`"
      format="webp"
      :data-alt="`${title}圖片`"
      class="w-full h-full object-cover filter"
    />
  </div>
</section>
</template>

<script setup lang="ts">
import { formatIndex } from '~/utils/format'
const heroRef = ref<HTMLElement>()
const { playProjectHero } = useHero()

defineProps({
  order: Number,
  cover: String,
  title: String,
  description: String,
  highlights: Array,
  year: Number,
  category: String,
  tags: Array,
  github: String,
  demo: String
})

onMounted(() => {
  if (!heroRef.value) return
  
  playProjectHero(heroRef.value)
})
</script>
