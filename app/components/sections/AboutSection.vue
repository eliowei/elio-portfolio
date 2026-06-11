<template>
  <section class="py-32 bg-surface" id="about">
    <div class="px-6 md:px-16 max-w-7xl mx-auto">
    <div class="mb-16">
      <span class="text-secondary uppercase mb-2 block">Services</span>
      <h2 class="text-primary text-5xl">提供服務</h2>
    </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        <template v-for="(item, index) in card" :key="index">
          <div class="about-card">
            <span class="font-label-mono text-secondary mb-2 block">{{ item.headline }}</span>
            <div class="text-4xl font-headline-md text-primary">{{ item.title }}</div>
            <p class="mt-4 text-secondary">{{ item.description }}</p>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
const { reveal } = useReveal()

const card = [
  {
    headline: '01',
    title: '企業形象網站',
    description: '協助企業建立品牌形象網站，提升品牌信任度與線上曝光。'
  },
  {
    headline: '02',
    title: '活動網站',
    description: '打造活動宣傳與報名網站，適用於展覽、講座與品牌活動。'
  },
  {
    headline: '03',
    title: 'Landing Page',
    description: '聚焦單一產品或服務，提升轉換率與潛在客戶詢問。'
  },
  {
    headline: '04',
    title: 'LINE Bot 解決方案',
    description: '整合 LINE 官方帳號、內容管理與自動化互動流程。'
  }
]

onMounted(() => {
  reveal({ selector: '.about-card', trigger: '#about', y: 40, stagger: 0.15 })
})
</script>