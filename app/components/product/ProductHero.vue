<template>
<section ref="heroRef" class="pt-24 mb-section grid grid-cols-12 gap-gutter items-center transition-all duration-700 opacity-100 translate-y-0">
  <div class="col-span-12 md:col-span-7">
    <span class="text-[13px] text-secondary mb-4 block hero-reveal">CASE STUDY / {{ formatIndex(order!) }}</span>
    <h1 class="font-display-lg-mobile whitespace-pre-line md:font-display-lg text-display-lg-mobile md:text-display-lg mb-8 leading-tight text-primary hero-reveal">
      {{ title }}
    </h1>
    <p class="text-xl whitespace-pre-line text-secondary mb-6 leading-relaxed hero-reveal">{{ description }}</p>
    <div class="grid grid-cols-1 gap-x-8 gap-y-3 max-w-2xl hero-reveal mb-6">
      <div v-for="(item, index) in highlights" :key="index" class="flex items-center gap-1 text-primary">
        <span class="material-symbols-outlined">check_circle</span>{{ item }}
      </div>
    </div>
    <div class="flex flex-col sm:flex-row gap-4 mb-16">
      <UButton
        label="立即預約諮詢"
        color="primary"
        size="lg"
        aria-label="立即預約諮詢按鈕"
        class="font-bold px-8 py-4 flex justify-center items-center cursor-pointer hover:scale-[1.02] transition-all"
        trailing-icon="i-lucide-arrow-right"
        @click="handleContact"
      />

      <UButton
        label="查看功能介紹"
        color="neutral"
        variant="outline"
        size="lg"
        to="#showcase"
        aria-label="查看功能介紹按鈕"
        class="font-bold px-8 py-4 flex justify-center items-center hover:scale-[1.02] transition-all"
      />
    </div>
  </div>
  <div class="col-span-12 md:col-span-5 relative mt-12 md:mt-0">
      <div class="mt-32 hero-image w-full aspect-4/3">
        <img :alt="`${title}圖片`" class="w-full h-full object-cover filter" :data-alt="`${title}圖片`" :src="cover"/>
    </div>
  </div>
</section>

</template>

<script setup lang="ts">
import { formatIndex } from '~/utils/format'
const heroRef = ref<HTMLElement>()
const { playProjectHero } = useHero()
const { navigate } = usePageNavigation()

const handleContact = async () => {
  await navigate('/contact', '合作洽詢')
}

defineProps({
  order: Number,
  cover: String,
  title: String,
  description: String,
  highlights: Array,
  year: String,
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