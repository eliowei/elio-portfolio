<template>
<section class="mb-32 bg-surface" id="gallery">
  <div class="mb-12">
    <h2 class="font-label-mono text-label-mono uppercase tracking-widest text-secondary border-l-2 border-primary pl-4">Project Gallery</h2>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <template  v-for="(item, index) in gallery" :key="index">
      <div class="flex flex-col gallery-item">
        <div class="aspect-square bg-surface border border-outline-variant overflow-hidden mb-2">
          <img :alt="`圖片-${item.title}`" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" :data-alt="`圖片-${index}`" :src="item.image" @click="openLightbox(index)"/>
        </div>
        <p class="font-bold text-primary">{{ item.title }}</p>
      </div>
    </template>
  </div>

  <!-- LIGHTBOX unchanged -->
  <div v-if="isLightbox" class="fixed inset-0 z-50 flex items-center justify-center bg-black/85">
    <button class="absolute top-4 right-5 text-white cursor-pointer" @click="closeLightbox">✕</button>

    <img
      :src="currentImage"
      class="max-h-[85vh] max-w-[90vw] object-contain"
    />
    <button class="bg-black/50 absolute left-30 w-10 h-10 rounded-full text-white text-3xl cursor-pointer" @click="prevImage">‹</button>
    <button class="bg-black/50 absolute right-30 w-10 h-10 rounded-full text-white text-3xl cursor-pointer" @click="nextImage">›</button>
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
const { fadeUp } = useReveal()

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

  fadeUp(
  '.gallery-item',
  '#gallery'
  )
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>