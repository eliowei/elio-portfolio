<!-- Polaroid frame. Tilt is a CSS variable so phones can flatten it. -->
<template>
  <figure class="mr-photo" :style="{ '--tilt': `${tilt}deg`, '--ratio': ratio }" data-mr="photo">
    <span v-if="tape" class="tape" aria-hidden="true" />
    <img :src="maoriImg(name)" :alt="alt" loading="lazy" decoding="async">
    <figcaption v-if="caption || $slots.default"><slot>{{ caption }}</slot></figcaption>
  </figure>
</template>

<script setup lang="ts">
import { maoriImg } from '~/data/maori'

withDefaults(defineProps<{ name: string, alt: string, tilt?: number, ratio?: string, tape?: boolean, caption?: string }>(), { tilt: -2, ratio: '4 / 3', tape: false, caption: '' })
</script>

<style scoped>
.mr-photo { position: relative; margin: 0; padding: 10px 10px 14px; background: #fffdf8; box-shadow: 0 6px 16px #49362824; rotate: var(--tilt); }
img { width: 100%; aspect-ratio: var(--ratio); object-fit: cover; }
figcaption { padding-top: 8px; text-align: center; font-family: var(--mr-hand); font-size: 1.15rem; line-height: 1.5; }
.tape { position: absolute; z-index: 1; top: -14px; left: 12%; width: 92px; height: 28px; background: #d9bd92c4; rotate: -8deg; }
@media (max-width: 760px) { .mr-photo { rotate: calc(var(--tilt) * .5); } }
</style>
