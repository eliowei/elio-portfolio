<!-- Before/after slider. A native range input drives it, so mouse, touch and keyboard work without extra code. -->
<template>
  <div class="mr-compare" :style="{ '--cut': `${cut}%` }">
    <div class="after"><img :src="maoriImg(image)" :alt="`${name}美容後`" loading="lazy" decoding="async"></div>
    <div class="before"><img :src="maoriImg(image)" :alt="`${name}美容前`" loading="lazy" decoding="async"></div>
    <span class="tag left" aria-hidden="true">Before</span>
    <span class="tag right" aria-hidden="true">After</span>
    <span class="handle" aria-hidden="true"><i>‹ ›</i></span>
    <input v-model.number="cut" type="range" min="0" max="100" step="5" :aria-label="`${name}美容前後比較，向右拖曳顯示更多美容前`" :aria-valuetext="`美容前顯示 ${cut}%`">
  </div>
</template>

<script setup lang="ts">
import { maoriImg } from '~/data/maori'

defineProps<{ image: string, name: string }>()
const cut = ref(50)
</script>

<style scoped>
.mr-compare { position: relative; aspect-ratio: 1; overflow: hidden; background: var(--kraft); }
.after, .before { position: absolute; inset: 0; overflow: hidden; }
.before { clip-path: inset(0 calc(100% - var(--cut)) 0 0); }
img { width: 200%; max-width: none; height: 100%; object-fit: cover; }
.after img { margin-left: -100%; }
.tag { position: absolute; bottom: 10px; padding: 0 .8rem; background: #fffaf1; font-family: var(--mr-hand); font-size: 1.1rem; pointer-events: none; }
.left { left: 10px; }
.right { right: 10px; }
.handle { position: absolute; top: 0; bottom: 0; left: var(--cut); width: 3px; margin-left: -1.5px; background: #fffaf1; pointer-events: none; }
.handle i { position: absolute; top: 50%; left: 50%; display: grid; place-items: center; width: 44px; height: 44px; translate: -50% -50%; border: 2px solid var(--coffee); border-radius: 50%; background: #fffaf1; font-style: normal; white-space: nowrap; }
input { position: absolute; inset: 0; width: 100%; height: 100%; margin: 0; opacity: 0; cursor: ew-resize; touch-action: pan-y; }
input::-webkit-slider-thumb { width: 44px; height: 44px; }
.mr-compare:has(input:focus-visible) { outline: 3px solid var(--coffee); outline-offset: 3px; }
</style>
