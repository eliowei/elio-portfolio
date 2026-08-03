<template>
  <section class="mb-section max-w-4xl mx-auto transition-all duration-700 opacity-100 translate-y-0">
  <h2 class="text-4xl mb-12">{{ faq.title }}</h2>
  <div class="space-y-4">
      <details v-for="(item, index) in faq.items" :key="index" class="group bg-surface-container-low border border-outline-variant p-6 rounded transition-all open:bg-surface">
        <summary class="text-primary flex justify-between items-center cursor-pointer list-none font-label-mono font-bold text-caption">{{ item.question }}
          <UIcon name="material-symbols:keyboard-arrow-down" class="size-6 text-primary group-open:rotate-180 transition-transform"/>
        </summary>
        <div class="mt-4 text-sm text-secondary leading-relaxed pt-4 border-t border-outline-variant">{{ item.answer }}</div>
      </details>
    </div>
  </section>
</template>

<script setup>

defineProps({
  faq: Object
})
</script>