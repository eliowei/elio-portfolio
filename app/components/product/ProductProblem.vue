<template>
<section class="mb-section transition-all duration-700 opacity-100 translate-y-0" id="problem">
  <div class="mb-16">
    <h2 class="text-4xl mb-4 text-primary">{{ problem.title }}</h2>
    <p class="font-body-md text-secondary">{{ problem.description }}</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-gutter text-primary">
      <template v-for="(item, index) in problem.items" :key="index">
        <div class="p-8 bg-surface-container-low border border-outline-variant text-center space-y-6 problem-card">
          <div class="w-16 h-16 mx-auto rounded-full bg-surface flex items-center justify-center">
            <UIcon :name="problem_icon_list[index]" class="size-6 text-3xl"/>
          </div>
          <h3 class="font-label-mono font-bold uppercase text-caption">{{ item.title }}</h3>
          <p class="font-body-md text-secondary text-sm">{{ item.description }}</p>
        </div>
      </template>
  </div>
</section>

</template>

<script setup>
const { reveal } = useReveal()

defineProps({
  problem: Object
})

const problem_icon_list = ['material-symbols:chat-error-outline', 'material-symbols:pets', 'material-symbols:campaign-outline' , 'material-symbols:person-search-outline']

onMounted(() => {
  reveal({ selector:'.problem-card', trigger:'#problem', y: 40, stagger: 0.15 })
})
</script>