<!-- Opening of an inner page: handwritten title, short lead, one piece of art on the side. -->
<template>
  <div class="mr-head mr-wrap">
    <div>
      <h1>{{ title }}</h1>
      <svg viewBox="0 0 200 12" aria-hidden="true"><path d="M3 8C50 2 130 2 197 6" pathLength="1" data-mr="draw" /></svg>
      <p><slot name="lead" /></p>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<style scoped>
.mr-head { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 2rem; padding-bottom: 1rem; }
.mr-head > div:first-child { flex: 1 1 18rem; }
h1 { font-family: var(--mr-hand); font-size: clamp(2.4rem, 6vw, 3.6rem); letter-spacing: .08em; line-height: 1.4; }
svg { width: 200px; height: 12px; fill: none; stroke: var(--wood); stroke-width: 3; stroke-linecap: round; }
p { margin-top: .8rem; max-width: 30em; }
</style>
