<template>
<section class="stagger-load mb-32">
  <div class="grid grid-cols-1 md:grid-cols-12 gap-8">    
    <div class="md:col-span-8">
      <span class="text-[13px] text-secondary mb-4 block">CASE STUDY / {{ order }}</span>
      <h1 class="text-4xl md:text-7xl text-primary mb-8 leading-none">{{ title }}</h1>
      <p class="text-lg text-secondary max-w-2xl">{{ description }}</p>
    </div>
    <div class="md:col-span-4 flex flex-col justify-end gap-6 pt-12 md:pt-0">
      <div class="flex flex-wrap gap-2">
        <span v-for="(tag, index) in tags" class="px-3 py-1 border border-outline-variant text-[13px] uppercase" :key="index">{{ tag }}</span>
      </div>
      <div class="flex gap-4">
        <a class="flex items-center gap-2 text-[13px] text-primary hover:underline" href="#">
          <span class="material-symbols-outlined">terminal</span>
          LIVE_DEMO
        </a>
        <a class="flex items-center gap-2 text-[13px] text-primary hover:underline" href="#">
          <span class="material-symbols-outlined">code</span>
          SOURCE_CODE
        </a>
      </div>
    </div>
  </div>
  <div class="mt-32">
    <img :alt="`${title}圖片`" class="w-full h-150 object-cover filter" :data-alt="`${title}圖片`" :src="cover"/>
  </div>
</section>
</template>

<script setup lang="ts">
defineProps({
  order: Number,
  cover: String,
  title: String,
  description: String,
  tags: Array,
  github: String,
  demo: String
})
</script>
