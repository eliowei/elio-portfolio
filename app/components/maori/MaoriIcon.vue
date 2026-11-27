<!-- Small set of line icons. Decorative: the button that holds one carries the label. -->
<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <template v-if="name === 'instagram'"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></template>
    <path v-else-if="name === 'facebook'" d="M14.5 21v-7.5H17l.5-3h-3V8.6c0-1 .5-1.6 1.7-1.6h1.4V4.300000000000001c-.5-.1-1.300000000000001-.2-2.1-.2-2.4 0-4 1.500000000000001-4 4.100000000000001v2.3H9v3h2.500000000000001V21" />
    <template v-else-if="name === 'line'"><path d="M12 3.5c-5.2 0-9.4 3.4-9.4 7.6 0 3.8 3.4 6.9 7.9 7.5.9.200000000000001.8.6.600000000000001 2.1 0 .3-.2 1.1 1 .6 4.700000000000001-2 9.3-5.2 9.3-10.2 0-4.2-4.2-7.6-9.4-7.6Z" /><text x="12" y="13.4" text-anchor="middle" font-size="5.6" font-weight="700" font-family="Arial, sans-serif" fill="currentColor" stroke="none">LINE</text></template>
    <path v-else d="M12 19V5m-6 6 6-6 6 6" />
  </svg>
</template>

<script setup lang="ts">
defineProps<{ name: 'instagram' | 'facebook' | 'line' | 'up' }>()
</script>
