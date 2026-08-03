<template>
  <section class="mb-32 bg-surface" id="tech-stack">
    <div class="mb-12">
      <h2 class="text-[13px] uppercase tracking-widest text-secondary border-l-2 border-primary pl-4">Tech Stack</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div v-for="(data, index) in techStack" :key="index" class="p-8 bg-surface border border-outline-variant group hover:border-primary transition-colors tech-card">
        <UIcon :name="icon[index]" class="text-3xl mb-4 text-primary"/>
        <h3 class="text-[13px] font-bold mb-4 text-primary">{{ index }}</h3>
        <p class="text-xs text-secondary">{{ data.join(' , ') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { reveal } = useReveal()

interface TechSack {
  frontend: string[],
  backend: string[],
  database: string[],
  Deploy: string[]
}

const icon = {
  frontend: 'material-symbols:layers-outline',
  backend: 'material-symbols:terminal',
  database: 'material-symbols:database-outline',
  Deploy: 'material-symbols:cloud-outline',
  animation: 'material-symbols:animation-outline',
  content: 'material-symbols:web-asset'
}

defineProps<{
  techStack: TechSack;
}>()

onMounted(() => {
  reveal({ selector:'.tech-card', trigger:'#tech-stack', y: 40, stagger: 0.15 })
})
</script>