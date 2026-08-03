<template>
  <section class="mb-section transition-all duration-700 opacity-100 translate-y-0" id="showcase">
    <div class="mb-16">
      <h2 class="text-4xl mb-4 text-primary">核心功能</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter text-primary">
      <template v-for="(item, index) in showcase" : key="index">
        <div class="p-8 border border-outline-variant group hover:bg-primary hover:drop-shadow dark:hover:bg-white dark:hover:text-zinc-950 hover:text-on-primary transition-all cursor-default group">
          <UIcon :name="showcase_icon_list[index]" class="text-2xl mb-4 group-hover:scale-[1.1] transition-all"/>
          <h3 class="font-headline-md text-2xl mb-4">{{ item.title }}</h3>
          <p class="text-sm opacity-70 leading-relaxed">{{ item.description }}</p>
          <div v-for="(feature, featureIndex) in item.features" :key="featureIndex" class="flex items-center gap-2">
              <span class="test-base bg-black group-hover:bg-white w-1 h-1 rounded-full inline-block my-1.5"></span>
              <p class="text-base opacity-70 my-1.5">
                {{ feature }}
              </p>
          </div>
        </div>
      </template>
  </div>
  </section>
</template>

<script setup>
const showcase_icon_list = ['material-symbols:inventory-2-outline', 'material-symbols:integration-instructions-outline', 'material-symbols:storefront-outline', 'material-symbols:query-stats']

defineProps({
  showcase: Object
})
</script>