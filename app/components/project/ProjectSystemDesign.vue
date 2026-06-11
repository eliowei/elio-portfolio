<template>
  <section class="mb-32 bg-surface">
    <div class="mb-12">
      <h2 class="text-[13px] uppercase tracking-widest text-secondary border-l-2 border-primary pl-4">
        System Design
      </h2>
    </div>

    <div class="space-y-24">
      <div
        v-for="(data, index) in systemDesign"
        :key="index"
        class="grid grid-cols-1 md:grid-cols-12 gap-8 challenge-item"
      >
        <div class="md:col-span-4 challenge-title">
          <h3 class="text-xl font-bold mb-4 text-primary">
            {{ formatIndex(index) }} / {{ data.title }}
          </h3>

          <p class="text-[#838484]">
            {{ data.subtitle }}
          </p>
        </div>

        <div class="md:col-span-8 system-content">
          <div
            class="bg-surface p-8 border-l-4 border-primary text-primary"
          >
            <p class="font-body-md leading-relaxed">
              {{ data.description }}
            </p>
          </div>

          <div class="flex flex-wrap gap-3 mt-6">
            <span
              v-for="item in data.technologies"
              :key="item"
              class="text-xs px-3 py-1 bg-[#e1dfdf] rounded-full"
            >
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { formatIndex } from '~/utils/format'
const { revealSystemDesign } = useReveal()

interface systemDesign {
  title: string
  subtitle: string
  description: string
  technologies: string[]
}

defineProps<{
  systemDesign: systemDesign[]
}>()

onMounted(() => {
  revealSystemDesign()
})
</script>