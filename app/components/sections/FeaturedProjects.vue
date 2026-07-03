<template>
  <section class="py-32 bg-surface px-6 md:px-16 border-y border-outline-variant" id="projects">
    <div class="max-w-7xl mx-auto">

      <!-- header -->
      <div class="flex justify-between items-end mb-16 projects-header">
        <div>
          <span class="font-label-mono text-secondary uppercase mb-2 block">
            Curated Works
          </span>
          <h2 class="font-headline-md text-primary text-5xl">
            精選作品
          </h2>
        </div>

        <div class="hidden md:block">
          <p class="max-w-xs text-secondary">
            一系列展現技術深度與解決問題能力的開發專案。
          </p>
        </div>
      </div>

      <!-- grid -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-16">

        <template v-for="(item) in projects" :key="item.slug">

          <!-- CARD -->
          <div :class="[colMap[item.layout.col]]" class="group project-card relative">
            <div
              class="absolute inset-0 z-10 cursor-pointer"
              @click="handleNavigate(item)"
            ></div>
            <!-- IMAGE -->
            <div
              :class="[
                aspectMap[item.layout.aspect],
                orderMap[item.layout.order.img]
              ]"
              class="bg-surface-container overflow-hidden"
            >
              <NuxtImg
                :src="item.cover"
                :alt="item.title"
                format="webp"
                class="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 cursor-pointer"
              />
            </div>

            <!-- CONTENT -->
            <div
              :class="orderMap[item.layout.order.content]"
              class="p-8 flex flex-col"
            >

              <!-- TAG -->
              <div class="flex gap-2 mb-4 flex-wrap">
                <span
                  v-for="(tag, i) in item.tags"
                  :key="i"
                  class="px-3 py-1 text-primary border border-outline-variant font-label-mono text-[10px] uppercase"
                >
                  {{ tag }}
                </span>
              </div>

              <!-- TITLE -->
              <h3 class="text-2xl font-headline-md mb-2 text-primary group-hover:translate-x-1 transition-transform">
                {{ item.card.title }}
              </h3>

              <!-- DESC -->
              <p class="text-secondary mb-6 max-w-lg">
                {{ item.card.description }}
              </p>
              <!-- LINKS -->
              <div class="flex gap-4">
                <a v-if="item.demo" :href="item.demo" class="text-primary flex items-center gap-1 hover:underline relative z-20">
                  DEMO
                  <span class="material-symbols-outlined text-sm">north_east</span>
                </a>
                <a v-if="item.demo" :href="item.github" class="text-primary flex items-center gap-1 hover:underline relative z-20">
                  GITHUB
                  <span class="material-symbols-outlined text-sm">code</span>
                </a>
              </div>
            </div>
          </div>

        </template>
      </div>

    </div>
  </section>
</template>

<script setup>
const { revealProjects } = useProjects()

const { projects } = defineProps({
  projects: Array
})

const { navigate } = usePageNavigation()

const handleNavigate = async (item) => {
  await navigate(`/projects/${item.slug}`, item.title)
}

const orderMap = {
  1: 'order-1',
  2: 'order-2',
  3: 'order-3',
  4: 'order-4',
  5: 'order-5',
  6: 'order-6',
}
const colMap = {
  1: 'md:col-span-1',
  2: 'md:col-span-2',
  3: 'md:col-span-3',
  4: 'md:col-span-4',
  5: 'md:col-span-5',
  6: 'md:col-span-6',
  7: 'md:col-span-7',
  8: 'md:col-span-8',
  9: 'md:col-span-9',
  10: 'md:col-span-10',
  11: 'md:col-span-11',
  12: 'md:col-span-12',
}

const aspectMap = {
  video: 'aspect-video',
  square: 'aspect-square'
}

onMounted(() => {
  revealProjects()
})
</script>
