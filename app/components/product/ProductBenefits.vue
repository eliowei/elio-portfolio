<template>
<section class="mb-section transition-all duration-700 opacity-100 translate-y-0" id="benefits">
  <div class="mb-16">
    <h2 class="text-4xl mb-4 text-primary">導入後可獲得</h2>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-5 gap-gutter text-primary">
    <template v-for="(item, index) in benefits" :key="index">
      <div class="p-6 border border-outline-variant bg-surface-container-low benefits-card">
        <span class="material-symbols-outlined text-primary mb-4">{{ benefits_icon_list[index] }}</span>
        <p class="font-body-md font-bold">{{ item }}</p>
      </div>
    </template>
  </div>
</section>
</template>

<script setup>
const { reveal } = useReveal()

const benefits_icon_list = [ 'forum', 'speed', 'search_check', 'analytics', 'savings']

defineProps({
  benefits: Array
})

onMounted(() => {
  reveal({ selector:'.benefits-card', trigger:'#benefits', y: 40, stagger: 0.15 })
})
</script>