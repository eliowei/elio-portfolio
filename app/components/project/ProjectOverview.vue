<template>
<section class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-32 bg-surface" id="overview">
  <div class="md:col-span-4 overview-label">
    <h2 class="text-[13px] uppercase tracking-widest text-secondary border-l-2 border-primary pl-4 mb-6 md:mb-0">Overview</h2>
  </div>
  <div class="md:col-span-8 overview-content">
    <p class="text-4xl mb-8 leading-tight text-primary">{{ overview.title }}</p>
    <p class="font-body-lg text-body-lg text-secondary mb-12">{{ overview.content}}</p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-outline-variant">
      <div v-for="(data, index) in responsibilities" :key="index" class="overview-stack">
        <h4 class="text-[13px] font-bold mb-4 text-primary">{{ index }}</h4>
          
        <ul class="text-base text-secondary space-y-2">
          <li v-for="(item, itemIndex) in data" :key="itemIndex">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</section>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

interface Overview {
  title: string;
  content: string;
}

interface Responsibilities {
  frontend: string[],
  backend: string[],
  database: string[]
}

defineProps<{
  overview: Overview;
  responsibilities: Responsibilities;
}>();

onMounted(() => {
  gsap.from('.overview-label', {
    x: -30,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: '#overview',
      start: 'top 75%',
    },
  })
  gsap.from('.overview-content', {
    y: 40,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: '#overview',
      start: 'top 75%',
    },
  })
  gsap.from('.overview-stack', {
    y: 20,
    opacity: 0,
    stagger: 0.15,
    duration: 0.5,
    scrollTrigger: {
      trigger: '#overview',
      start: 'top 70%',
    },
  })
})
</script>