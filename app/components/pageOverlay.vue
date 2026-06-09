<template>
  <div
    ref="overlayRef"
    class="fixed inset-0 bg-black backdrop-blur-sm z-9999 pointer-events-none"
  >
    <div
      class="absolute inset-0 flex items-center justify-center"
    >
      <h2
        ref="titleRef"
        class="text-white text-5xl font-bold tracking-widest opacity-0"
      >
        {{ transitionTitle }}
      </h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
const overlayRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)

const overlay = useState<HTMLElement | null>('overlay', () => null)
const title = useState<HTMLElement | null>('overlayTitleEl', () => null)

const transitionTitle = useState(
  'transitionTitle',
  () => ''
)

onMounted(() => {
  gsap.set(overlayRef.value, {
    yPercent: 100
  })

  gsap.set(titleRef.value, {
    opacity: 0,
    y: 20
  })

  overlay.value = overlayRef.value
  title.value = titleRef.value
})
</script>