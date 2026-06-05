<template>
<section class="mb-32 bg-surface">
  <div class="mb-12">
    <h2 class="text-[13px] uppercase tracking-widest text-secondary border-l-2 border-primary pl-4">Engineering Challenges</h2>
  </div>
  <div class="space-y-24">
    <div v-for="(data, index) in challenges" :key="index" class="grid grid-cols-1 md:grid-cols-12 gap-8 challenge-item">
      <div class="md:col-span-4 challenge-title">
        <h3 class="text-xl font-bold mb-4 text-primary">{{ formatIndex(index) }} / {{ data.title }}</h3>
        <p class="text-[#838484] mb-4">{{ data.subtitle }}</p>
      </div>
      <div class="md:col-span-8 space-y-6">
        <div v-for="field in challengeFields" :key="field.key" class="bg-surface p-8 border-l-4 border-primary text-primary" :class="field.key === 'problem' ? 'problem-card' : 'solution-card'">
          <span class="text-xs uppercase block mb-2">
            {{ field.label }}
          </span>

          <p class="font-body-md">
            {{ data[field.key] }}
          </p>
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
import { formatIndex } from '~/utils/format'
const { revealChallenge } = useReveal()

const challengeFields = [
  {
    key: 'problem',
    label: 'Problem'
  },
  {
    key: 'solution',
    label: 'Solution'
  }
] as const

interface Challenges {
  title: string
  subtitle: string
  problem: string
  solution: string
  technologies: string[]
}

defineProps<{
  challenges: Challenges[]
}>()

onMounted(() => {
  revealChallenge()
})
</script>