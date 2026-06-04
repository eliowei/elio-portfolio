<template>
  <section class="mb-32" id="tech-stack">
    <div class="mb-12">
      <h2 class="text-[13px] uppercase tracking-widest text-secondary border-l-2 border-primary pl-4">Tech Stack</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">

      <div v-for="(data, index) in techStack" :key="index" class="p-8 bg-surface border border-outline-variant group hover:border-primary transition-colors">
        <span class="material-symbols-outlined text-4xl mb-6"> {{ icon[index] }}</span>
        <h3 class="text-[13px] font-bold mb-4">{{ index }}</h3>
        <p class="text-xs text-secondary">{{ data.join(' , ') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface TechSack {
  frontend: string[],
  backend: string[],
  database: string[]
}

const icon = {
  frontend: 'terminal',
  backend: 'terminal',
  database: 'database',
  cloud_upload: 'cloud_upload'
}

defineProps<{
  techStack: TechSack;
}>()

</script>