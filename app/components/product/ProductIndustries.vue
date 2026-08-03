<template>
<section class="mb-section grid grid-cols-12 gap-gutter transition-all duration-700 opacity-100 translate-y-0">

  <div class="col-span-10 sm:col-span-12 md:col-span-6 border-t border-primary pt-12 text-primary">
      <h2 class="text-4xl mb-8">{{ industries[0].title }}</h2>
      <div class="grid grid-cols-2 gap-4">
        <div v-for="(data, dataIndex) in industries[0].items" :key="dataIndex" class="flex items-center gap-3 p-4 bg-surface-container-low border border-outline-variant">
          <UIcon :name="industries_icon_list[dataIndex]" class="size-6 text-primary"/>
          <span class="font-body-md font-bold">{{ data }}</span>
        </div>
      </div>
  </div>

  <div class="col-span-10 sm:col-span-12  md:col-span-6 border-t border-outline-variant pt-12 text-primary">
      <h2 class="text-4xl mb-8">{{ industries[1].title }}</h2>
      <div class="space-y-4">
        <div v-for="(data, dataIndex) in industries[1].items" :key="dataIndex"  class="flex justify-between items-center border-b border-outline-variant pb-2">
          <span class="font-body-md">{{ data }}</span>
          <span class="text-[10px] font-label-mono text-secondary uppercase tracking-widest">Extension</span>
        </div>
      </div>
  </div>
</section>
</template>

<script setup>
const industries_icon_list = [ 'material-symbols:house-outline', 'material-symbols:hotel-outline', 'material-symbols:content-cut', 'material-symbols:directions-car-outline']


defineProps({
  industries: Array
})
</script>