<template>
  <section class="mb-32 bg-surface" id="industries">
    <div class="mb-12">
      <h2
        class="text-[13px] uppercase tracking-widest text-secondary border-l-2 border-primary pl-4"
      >
        Industries & Services
      </h2>
    </div>

    <div class="space-y-4">
      <div
        v-for="(section, index) in sections"
        :key="index"
        class="flex flex-col md:flex-row gap-8 p-8 bg-surface-container border border-outline-variant items-center industries-card"
      >
        <div class="md:w-1/3">
          <span
            class="text-[13px] px-2 py-1 bg-black text-white"
          >
            {{ formatIndex(index) }} / {{ section.subtitle }}
          </span>

          <h3
            class="text-4xl mt-4 font-bold text-primary"
          >
            {{ section.title }}
          </h3>
        </div>

        <div class="md:w-2/3 min-[600px]:px-20">
          <div
            v-for="item in section.items"
            :key="item"
            class="flex items-center gap-2 mb-2"
          >
            <span
              class="bg-black w-1 h-1 rounded-full inline-block"
            />
            <p class="text-base text-secondary">
              {{ item }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { formatIndex } from '~/utils/format'
const { reveal } = useReveal()

interface Section {
  title: string
  subtitle: string
  items: string[]
}

defineProps<{
  sections: Section[]
}>()

onMounted(() => {
  reveal({ selector:'.industries-card', trigger:'#industries', y: 40, stagger: 0.15 })
})

</script>