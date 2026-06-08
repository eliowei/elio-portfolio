<template>
  <section class="py-32 bg-surface" id="about">
    <div class="px-6 md:px-16 max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        <template v-for="(item, index) in card" :key="index">
          <div class="about-card">
            <span class="font-label-mono text-secondary mb-2 block">{{ item.headline }}</span>
            <div class="text-4xl font-headline-md text-primary">{{ item.title }}</div>
            <p class="mt-4 text-secondary">{{ item.description }}</p>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const card = [
  {
    headline: '專業開發',
    title: '職人精神',
    description: '重視程式碼可維護性與開發體驗，在功能實作之外，也關注長期維護成本。'
  },
  {
    headline: '專案實績',
    title: '多樣化',
    description: '從企業內部系統到個人 Side Project，持續累積不同類型的開發經驗。'
  },
  {
    headline: '核心技術',
    title: '前端開發',
    description: '以 Vue 生態系為核心，持續學習 Nuxt、TypeScript 與現代前端架構。'
  },
  {
    headline: '開發廣度',
    title: '全端思維',
    description: '具備 Node.js 與 MongoDB 開發經驗，能獨立完成前後端整合專案。'
  }
]

onMounted(() => {
  gsap.from('.about-card', {
    y: 40,
    opacity: 0,
    stagger: 0.15,
    duration: 0.8,
    scrollTrigger: {
      trigger: '#about',
      start: 'top 75%'
    }
  })
})
</script>