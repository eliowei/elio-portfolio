<!-- One drawing from the 3 x 2 doodle sheet. Decorative: the text next to it carries the meaning. -->
<template>
  <span class="mr-doodle" :style="{ backgroundImage: `url(${maoriImg('doodles')})`, backgroundPosition: positions[name] }" aria-hidden="true" />
</template>

<script setup lang="ts">
import { maoriImg } from '~/data/maori'

const positions: Record<string, string> = { bath: '0 0', scissors: '50% 0', comb: '100% 0', cat: '0 100%', dog: '50% 100%', sleep: '100% 100%' }
defineProps<{ name: string }>()
</script>

<style scoped>
.mr-doodle { display: inline-block; flex: none; width: 120px; aspect-ratio: 1; background-repeat: no-repeat; background-size: 300% 200%; }
</style>
