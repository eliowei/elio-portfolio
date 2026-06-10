<template>
  <div
    ref="overlayRef"
    class="fixed inset-0 bg-black backdrop-blur-sm z-9999"
  >
    <div
      class="absolute inset-0 flex items-center justify-center"
    >
      <div
        ref="titleRef"
        class="opacity-0"
      >
        <img
          v-if="transitionTitle === 'ELIO WEI'"
          src="/images/logo.png"
          alt="Logo"
          class="min-[600px]:w-100 w-50 invert"
        >
        <h2
          v-else
          class="text-white text-5xl font-bold tracking-widest text-center"
        >
          {{ transitionTitle }}
        </h2>
      </div>
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