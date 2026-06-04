<template>
<section class="mb-32" id="challenges">
  <div class="mb-12">
    <h2 class="text-[13px] uppercase tracking-widest text-secondary border-l-2 border-primary pl-4">Engineering Challenges</h2>
  </div>
  <div class="space-y-24">
    <div v-for="(data, index) in challenges" :key="index" class="grid grid-cols-1 md:grid-cols-12 gap-8">
      <div class="md:col-span-4">
        <h3 class="text-xl font-bold mb-4">{{ index }} / {{ data.title }}</h3>
        <p class="text-[#838484] mb-4">{{ data.subtitle }}</p>
      </div>
      <div class="md:col-span-8 space-y-6">
        <div class="bg-surface p-6 border-l-4 border-primary">
        <span class="text-xs uppercase block mb-2">{{ Object.keys(data)[index + 2] }}</span>
        <p class="font-body-md">{{ data.problem}}</p>
        </div>
        <div class="flex gap-4">
          <span v-for="item in data.technologies" class="text-xs px-3 py-1 bg-[#e1dfdf] rounded-full">{{ item }}</span>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script setup lang="ts">
interface Challenges {
  title: string
  subtitle: string
  problem: string
  solution: string
  technologies: string
}

defineProps<{
  challenges: Challenges[]
}>()

</script>