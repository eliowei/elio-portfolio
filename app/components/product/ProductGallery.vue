<template>
<section class="mb-section transition-all duration-700 opacity-100" id="gallery">
<div class="mb-16">
<h2 class="text-4xl mb-2 text-primary">畫面展示</h2>
<p class="font-body-md text-secondary">以下皆為實際後台操作畫面</p>
</div>
<div class="grid grid-cols-2 md:grid-cols-4 gap-gutter">
    <template  v-for="(item, index) in gallery" :key="index">
      <div class="flex flex-col gallery-item group">
        <div class="aspect-video bg-surface-container-low border border-outline-variant rounded overflow-hidden p-2 mb-2">
        <NuxtImg
          :src="item.image" 
          :alt="`圖片-${item.title}`"
          format="webp"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
          :data-alt="`圖片-${index}`" 
          @click="openLightbox(index)"
        />
        </div>
        <p class="text-center font-label-mono text-[10px] font-bold uppercase tracking-widest text-primary group-hover:translate-y-0.5 transition-transform duration-500">{{ item.title }}</p>
      </div>
    </template>
</div>

  <!-- LIGHTBOX unchanged -->
  <div v-if="isLightbox" class="fixed inset-0 z-50 flex items-center justify-center bg-black/85">
    <button class="absolute top-4 right-5 text-white cursor-pointer" @click="closeLightbox">✕</button>

    <NuxtImg
      :src="currentImage"
      :alt="`圖片-${currentImageIndex}`"
      format="webp"
      class="max-h-[85vh] max-w-[90vw] object-contain"
    />
      <div
        class="
          absolute
          bottom-16
          left-1/2
          -translate-x-1/2
          flex
          gap-4

          md:top-1/2
          md:left-0
          md:right-0
          md:bottom-auto
          md:-translate-y-1/2
          md:translate-x-0
          md:px-8
          md:justify-between
        "
      >
        <button
          class="
            bg-black/50
            w-10 h-10
            rounded-full
            text-white
            text-3xl
            cursor-pointer
          "
          @click="prevImage"
        >
          ‹
        </button>

        <button
          class="
            bg-black/50
            w-10 h-10
            rounded-full
            text-white
            text-3xl
            cursor-pointer
          "
          @click="nextImage"
        >
          ›
        </button>
      </div>
    <div class="absolute bottom-5 text-gray-300 bg-black/50 rounded-2xl px-10 py-1 text-sm">
      {{ formatIndex(currentImageIndex) }} / {{ formatIndex(gallery.length - 1) }}
    </div>

  </div>
</section>
</template>

<script setup lang="ts">
const isLightbox = ref(false)
const currentImageIndex = ref(0)
import { formatIndex } from '~/utils/format'
const { reveal } = useReveal()

interface GalleryItem  {
  title: string
  image: string
}

const props = defineProps<{
  gallery: GalleryItem[],
}>()

const currentImage = computed(() => props.gallery[currentImageIndex.value]?.image ?? '')

const openLightbox = (index: number) => {
  document.body.style.overflow = 'hidden'
  isLightbox.value = true
  currentImageIndex.value = index
}

const closeLightbox = () => {
  document.body.style.overflow = ''
  isLightbox.value = false
}

const nextImage = () => {
  currentImageIndex.value =
    (currentImageIndex.value + 1) %
    props.gallery.length
}
const prevImage = () => {
  currentImageIndex.value =
    (currentImageIndex.value - 1 + props.gallery.length) %
    props.gallery.length
}

const handleKeydown = (e: KeyboardEvent) => {
  if (!isLightbox.value) return

  if (e.key === 'ArrowRight') {
    nextImage()
  }

  if (e.key === 'ArrowLeft') {
    prevImage()
  }

  if (e.key === 'Escape') {
    closeLightbox()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)

  reveal({ selector:'.gallery-item', trigger:'#gallery', y: 40, stagger: 0.15 })
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>