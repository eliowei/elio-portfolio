<template>
<section class="mb-32 bg-surface" id="showcase">
  <div class="mb-12">
    <h2 class="text-[13px] uppercase tracking-widest text-secondary border-l-2 border-primary pl-4">Feature Showcase</h2>
  </div>
  <div class="space-y-4">
    <div v-for="(item, index) in showcase" :key="index" class="flex flex-col md:flex-row gap-8 p-8 bg-surface-container border border-outline-variant items-center feature-card">
      <div class="md:w-1/3">
        <span class="text-[13px] px-2 py-1 bg-black text-white">{{ formatIndex(index) }} / {{roleType[index]}}</span>
        <h3 class="text-4xl mt-4 font-bold text-primary">{{ item.title }}</h3>
      </div>
      <div class="md:w-2/3 min-[600px]:px-20">
        <p class="text-base text-secondary mb-2">
          {{ item.description }}
        </p>
        <div v-for="(feature, featureIndex) in item.features" :key="featureIndex" class="flex justify-start items-center gap-2">
          <span class="test-base bg-black w-1 h-1 rounded-full inline-block"></span>
          <p class="text-base text-secondary">
            {{ feature }}
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script setup lang="ts">
import { formatIndex } from '~/utils/format'
const { fadeUp } = useReveal()

interface Showcase {
  title: string
  description: string
  features: string[]
}

const roleType = ['FEATURE', 'FEATURE', 'FEATURE']

defineProps<{
  showcase: Showcase[]
}>()

onMounted(() => {
  fadeUp('.feature-card', '#showcase')
})

</script>