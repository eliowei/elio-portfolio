<template>
  <section
    id="implementation"
    class="mb-32 bg-surface"
  >
    <div class="mb-12">
      <h2 
        class="text-[13px] uppercase tracking-widest text-secondary border-l-2 border-primary pl-4"
      >
        Implementation Process
      </h2>
    </div>

    <div class="space-y-4">
      <div
        v-for="(item, index) in implementation"
        :key="index"
        class="implementation-card flex flex-col md:flex-row gap-8 p-8 bg-surface-container border border-outline-variant"
      >
        <div class="md:w-1/3">
          <span
            class="text-[13px] px-2 py-1 bg-black text-white"
          >
            {{ formatIndex(index) }} / {{ item.subtitle }}
          </span>

          <h3
            class="text-4xl mt-4 font-bold text-primary"
          >
            {{ item.title }}
          </h3>
        </div>

        <div
          class="md:w-2/3 flex items-center"
        >
          <p
            class="text-base text-secondary leading-relaxed"
          >
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { formatIndex } from '~/utils/format'

const { reveal } = useReveal()

interface Implementation {
  title: string
  subtitle: string
  description: string
}

defineProps<{
  implementation: Implementation[]
}>()

onMounted(() => {
  reveal({
    selector: '.implementation-card',
    trigger: '#implementation',
    y: 40,
    stagger: 0.15
  })
})
</script>