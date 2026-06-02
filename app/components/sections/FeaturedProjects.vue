<template>
  <section
    class="py-32 bg-surface px-6 md:px-16 border-y border-outline-variant"
    id="projects"
  >
    <div class="max-w-7xl mx-auto">
      <div class="flex justify-between items-end mb-16 reveal">
        <div>
          <span class="font-label-mono text-secondary uppercase mb-2 block"
            >Curated Works</span
          >
          <h2 class="font-headline-md text-primary text-5xl">精選作品</h2>
        </div>
        <div class="hidden md:block">
          <p class="max-w-xs text-on-surface-variant">
            一系列展現技術深度與解決問題能力的開發專案。
          </p>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-12 gap-16">
        <!-- Project 1: Large Bento -->
        <div
          class="md:col-span-8 group relative bg-white border border-outline-variant overflow-hidden"
        >
          <div class="aspect-video bg-surface-container overflow-hidden">
            <img
              alt="Gaming Meetup Platform"
              class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzK1Qs83elE9wkldJQPCqtcGDeJTYm4wf6dHrHHVPHZDj_btdovnBXVsXB8O3wGE2kcSKz4BOzIj3Ph0_B60XAS0ncC4jzrfSm-Ay_1Dtm1wzLgFBQpu8UHYXrplK5vpVR9rnaQNPU16uhZbKySM8XQPTJB1g_qFapWDUlP6kOr9pBVAeX_G_tIERFJ9Kid9IV58Ro4UcjpxGJDQKHH5amD5rj9cV36cPHpDTJCS6xRsf2XrsPheO97eeX8ZidUft39QmVa-FTHZI"
              @click="openLightbox(projectCard, 0)"
            />
          </div>
          <div class="p-8">
            <div class="flex gap-2 mb-4">
              <span
                class="px-3 py-1 border border-outline-variant font-label-mono text-[10px] uppercase"
                >Vue</span
              >
              <span
                class="px-3 py-1 border border-outline-variant font-label-mono text-[10px] uppercase"
                >WebSocket</span
              >
              <span
                class="px-3 py-1 border border-outline-variant font-label-mono text-[10px] uppercase"
                >Vuetify</span
              >
            </div>
            <h3 class="text-2xl font-headline-md mb-2">遊戲社群揪團平台</h3>
            <p class="text-on-surface-variant mb-6 max-w-lg">
              為玩家打造的揪團平台。整合即時聊天。
            </p>
            <div class="flex gap-4">
              <a
                class="font-label-mono text-primary flex items-center gap-1 hover:underline"
                href="https://eliowei.github.io/game-together/#/"
                >DEMO
                <span class="material-symbols-outlined text-sm"
                  >north_east</span
                ></a
              >
              <a
                class="font-label-mono text-primary flex items-center gap-1 hover:underline"
                href="https://github.com/eliowei/game-together"
                >GITHUB
                <span class="material-symbols-outlined text-sm">code</span></a
              >
            </div>
          </div>
        </div>
        <!-- Project 2: Small Bento -->
        <div
          class="md:col-span-4 group bg-white border border-outline-variant flex flex-col"
          style="transition-delay: 100ms"
        >
          <div class="aspect-square bg-surface-container overflow-hidden">
            <img
              alt="Mario Web Game"
              class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGy18PRSb9iLOhQ1Jyj-4vYe_oVUsYLMvTYLi8HYYbVUZJwyzvuuBDKHbc_xSELqY-48JzVyyz6ReMg7YUKav9do_PwxrXTwg9HmJ8XQ5OeOnSvvV2hKfVQUhen_N3fiml982BTmftCFMbsZDbCOKOc0qPd93142p-aCHdbSf8c9v2c63iPcxNsrOAJuwPUlPube_1iLrCZ8vhGdhDrsWbQUs7IwL-JH4pQZGmQd90f6jXzOk3meXrHOUoVvSvu4v_lABywrIi0XY"
              @click="openLightbox(projectCard, 0)"
              />
          </div>
          <div class="p-8 flex-1 flex flex-col">
            <h3 class="text-xl font-headline-md mb-2">經典瑪利歐網頁版</h3>
            <p class="text-on-surface-variant text-sm mb-6 flex-1">
              使用純 JavaScript 與 Canvas 技術重構經典橫向捲軸遊戲，實現流暢的
              60fps 體驗。
            </p>
            <div class="flex gap-2 mb-4 flex-wrap">
              <span
                class="px-2 py-1 bg-surface-container font-label-mono text-[10px] uppercase"
                >Canvas</span
              >
              <span
                class="px-2 py-1 bg-surface-container font-label-mono text-[10px] uppercase"
                >JS API</span
              >
            </div>
            <a
              class="font-label-mono text-primary flex items-center gap-1 hover:underline"
              href="#"
              >GITHUB
              <span class="material-symbols-outlined text-sm">code</span></a
            >
          </div>
        </div>
        <!-- Project 3: Small Bento -->
        <div
          class="md:col-span-4 group bg-white border border-outline-variant flex flex-col reveal"
          style="transition-delay: 200ms"
        >
          <div class="p-8 flex-1 flex flex-col">
            <span
              class="font-label-mono text-[10px] text-secondary uppercase mb-4 block"
              >Personal Branding</span
            >
            <h3 class="text-xl font-headline-md mb-2">個人作品集網站</h3>
            <p class="text-on-surface-variant text-sm mb-6 flex-1">
              使用 Nuxt 3 與 Tailwind CSS
              打造的極簡風格網站。專注於排版美學與格線系統的呈現。
            </p>
            <div class="flex gap-2 mb-4 flex-wrap">
              <span
                class="px-2 py-1 bg-surface-container font-label-mono text-[10px] uppercase"
                >Nuxt 3</span
              >
              <span
                class="px-2 py-1 bg-surface-container font-label-mono text-[10px] uppercase"
                >Tailwind</span
              >
            </div>
            <a
              class="font-label-mono text-primary flex items-center gap-1 hover:underline"
              href="#"
              >GITHUB
              <span class="material-symbols-outlined text-sm">code</span></a
            >
          </div>
          <div class="aspect-[4/3] bg-surface-container overflow-hidden">
            <img
              alt="Portfolio"
              class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWd9mCfE1oJsS2qnu_nQBnjpt1tLAkXmeghkUJ3tzyB0KnvhXBHfAzTF8awiGuvhlfYqb1LEwjkMvCXc8wgHeq9ySEowN1INvh1KLnLsv1U2nrrI7eDnaKvLI3yqEJ4LK7wWkQ4HT9INkfWAdZE3ZHP2kTR7JrH0PfA1jiA-cDg_hak58ZdbjyzaXFJMGISY2QkrlKeeQOEDuZ-cwYX9BBOWMxebJOwe_i1UjIOnwD5LCwzXEVi6dpIF-HAetoR0TibYvHeHGISjE"
              @click="openLightbox(projectCard, 0)"
              />
          </div>
        </div>
        <!-- Project 4: Medium Bento -->
        <div
          class="md:col-span-8 group bg-primary text-white border border-outline-variant overflow-hidden flex flex-col md:flex-row reveal"
          style="transition-delay: 300ms"
        >
          <div class="p-8 md:p-12 flex-1 flex flex-col justify-center">
            <span
              class="inline-block px-3 py-1 bg-white/10 text-white font-label-mono text-[10px] uppercase mb-4 w-fit"
              >In Development</span
            >
            <h3 class="text-3xl font-headline-md mb-4">
              寵物店 LINE 資訊與預約管理平台
            </h3>
            <p class="text-white/70 mb-8 max-w-sm">
              整合房型展示、價位資訊、FAQ、公告與預約需求管理，提供流暢的預約體驗。
            </p>
            <div class="flex gap-4">
              <span class="font-label-mono text-sm opacity-50"
                >預計開發完成: 2024 Q4</span
              >
            </div>
          </div>
          <div
            class="md:w-1/3 h-64 md:h-auto bg-white/5 flex items-center justify-center p-8"
          >
            <span class="material-symbols-outlined text-8xl opacity-10"
              >pets</span
            >
          </div>
        </div>
      </div>


      <!-- 燈箱modal -->
      <div v-if="isLightbox" 
      class="fixed inset-0 z-101 flex cursor-pointer items-center justify-center bg-black/90 transition-all duration-300"
      @click="closeLightbox"
      >
        <!-- 關閉按鈕 -->
        <button
          class="absolute top-4 right-4 text-white transition-colors hover:text-gray-300"
          @click="closeLightbox"
        >
          <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <!-- 圖片容器 -->
        <img
          :src="currentImage"
          :alt="currentCard?.title"
          class="max-h-[90vh] max-w-[90vw] object-contain"
          @click.stop
        />

        <!-- 導航按鈕 -->
        <button
          class="absolute left-4 text-white transition-colors hover:text-gray-300"
          @click.stop="prevImage"
        >
          <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          class="absolute right-4 text-white transition-colors hover:text-gray-300"
          @click.stop="nextImage"
        >
          <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const isLightbox = ref(false)
const currentImage = ref('')
const currentCard = ref(null)

const projects = ref([
  {
    id: 1,
    title: '遊戲社群揪團平台',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBzK1Qs83elE9wkldJQPCqtcGDeJTYm4wf6dHrHHVPHZDj_btdovnBXVsXB8O3wGE2kcSKz4BOzIj3Ph0_B60XAS0ncC4jzrfSm-Ay_1Dtm1wzLgFBQpu8UHYXrplK5vpVR9rnaQNPU16uhZbKySM8XQPTJB1g_qFapWDUlP6kOr9pBVAeX_G_tIERFJ9Kid9IV58Ro4UcjpxGJDQKHH5amD5rj9cV36cPHpDTJCS6xRsf2XrsPheO97eeX8ZidUft39QmVa-FTHZI',
      // 加入其他圖片 URL
    ]
  },
])
const openLightbox = (card, imageIndex = 0) => {
  isLightbox.value = true
  currentCard.value = card
  currentImageIndex.value = imageIndex
  currentImage.value = card.images[imageIndex]
}

const closeLightbox = () => {
  isLightbox.value = false
}

const nextImage = () => {
  if (!currentCard.value) return
  currentImageIndex.value = (currentImageIndex.value + 1) % currentCard.value.images.length
  currentImage.value = currentCard.value.images[currentImageIndex.value]
}

const prevImage = () => {
  if (!currentCard.value) return
  currentImageIndex.value =
    (currentImageIndex.value - 1 + currentCard.value.images.length) % currentCard.value.images.length
  currentImage.value = currentCard.value.images[currentImageIndex.value]
}
</script>
