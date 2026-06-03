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
        <template v-for="(item, index) in projects" :key="index">
          <div :class="`md:col-span-${item.col}`" class="group relative bg-white border border-outline-variant overflow-hidden flex flex-col">
            <div :class="[`${ item.aspect ? `aspect-${item.aspect}` : '' }`, `${item.order.img ? `${orderMap[item.order.img]}` : ''}`]" class="bg-surface-container overflow-hidden">
              <img
                :alt="item.title"
                class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 cursor-pointer"
                :src="item.images[0]"
                @click="openLightbox(item, 0)"
              />
            </div>
            <div :class="`${item.order.content ? `${orderMap[item.order.content]}`: ''}`" class="p-8 flex flex-col">
              <div :class="`${item.order.tag ? `${orderMap[item.order.tag]}` : ''}`" class="flex gap-2 mb-4">
                <span v-for="(tag, tagIndex) in item.tag" :key="tagIndex" class="px-3 py-1 border border-outline-variant font-label-mono text-[10px] uppercase">{{ tag }}</span>
              </div>
              <h3 :class="`${item.order.title ? `${orderMap[item.order.title]}` : ''}` " class="text-2xl font-headline-md mb-2">{{ item.title }}</h3>
              <p :class="`${item.order.description ? `${orderMap[item.order.description]}` : ''}` "class="text-on-surface-variant mb-6 max-w-lg">{{ item.description }}</p>
              <div :class="`${item.order.link ? `${orderMap[item.order.link]}` : ''}`" class="flex gap-4">
                <template v-for="(link, linkIndex) in item.link" :key="linkIndex">
                  <a 
                    class="font-label-mono text-primary flex items-center gap-1 hover:underline"
                    :href="link.uri"
                  >{{ link.name }}
                    <span class="material-symbols-outlined text-sm">{{ link.icon }}</span>
                  </a>
                </template>
              </div>
            </div>
          </div>
        </template>
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
const currentImageIndex = ref(0)
const currentImage = ref('')
const currentCard = ref(null)
const orderMap = {
  1: 'order-1',
  2: 'order-2',
  3: 'order-3',
  4: 'order-4',
  5: 'order-5',
  6: 'order-6',
}

const projects = ref([
  {
    id: 1,
    col: '8',
    order: {
      content: 2,
      img: 1
    },
    title: '遊戲社群揪團平台',
    aspect: 'video',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBzK1Qs83elE9wkldJQPCqtcGDeJTYm4wf6dHrHHVPHZDj_btdovnBXVsXB8O3wGE2kcSKz4BOzIj3Ph0_B60XAS0ncC4jzrfSm-Ay_1Dtm1wzLgFBQpu8UHYXrplK5vpVR9rnaQNPU16uhZbKySM8XQPTJB1g_qFapWDUlP6kOr9pBVAeX_G_tIERFJ9Kid9IV58Ro4UcjpxGJDQKHH5amD5rj9cV36cPHpDTJCS6xRsf2XrsPheO97eeX8ZidUft39QmVa-FTHZI',
      // 加入其他圖片 URL
    ],
    tag: ['Vue', 'WebSocket', 'Vuetify'],
    description: '為玩家打造的揪團平台。整合即時聊天。',
    link: [
      {
        name: 'DEMO',
        uri: 'https://eliowei.github.io/game-together/#/',
        icon: 'north_east' 
      },
      {
        name: 'GITHUB',
        uri: 'https://github.com/eliowei/game-together',
        icon: 'code'
      }
    ]
  },
  {
    id: 2,
    col: '4',
    order: {
      content: 2,
      img: 1
    },
    aspect: 'square',
    title: '經典瑪利歐網頁版',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBzK1Qs83elE9wkldJQPCqtcGDeJTYm4wf6dHrHHVPHZDj_btdovnBXVsXB8O3wGE2kcSKz4BOzIj3Ph0_B60XAS0ncC4jzrfSm-Ay_1Dtm1wzLgFBQpu8UHYXrplK5vpVR9rnaQNPU16uhZbKySM8XQPTJB1g_qFapWDUlP6kOr9pBVAeX_G_tIERFJ9Kid9IV58Ro4UcjpxGJDQKHH5amD5rj9cV36cPHpDTJCS6xRsf2XrsPheO97eeX8ZidUft39QmVa-FTHZI',
      // 加入其他圖片 URL
    ],
    tag: ['Canvas', 'JavaScript' ],
    description: '使用純 JavaScript 與 Canvas 技術重構經典橫向捲軸遊戲，實現流暢的 60fps 體驗。',
    link: [
      {
        name: 'DEMO',
        uri: 'https://eliowei.github.io/game-together/#/',
        icon: 'north_east' 
      },
      {
        name: 'GITHUB',
        uri: 'https://github.com/eliowei/game-together',
        icon: 'code'
      }
    ]
  },
  {
    id: 3,
    col: '4',
    order: {
      content: 1,
      img: 2,
      title: 1,
      description: 2,
      tag: 3,
      link: 4,
    },
    aspect: 'square',
    title: '個人作品集網站',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBzK1Qs83elE9wkldJQPCqtcGDeJTYm4wf6dHrHHVPHZDj_btdovnBXVsXB8O3wGE2kcSKz4BOzIj3Ph0_B60XAS0ncC4jzrfSm-Ay_1Dtm1wzLgFBQpu8UHYXrplK5vpVR9rnaQNPU16uhZbKySM8XQPTJB1g_qFapWDUlP6kOr9pBVAeX_G_tIERFJ9Kid9IV58Ro4UcjpxGJDQKHH5amD5rj9cV36cPHpDTJCS6xRsf2XrsPheO97eeX8ZidUft39QmVa-FTHZI',
      // 加入其他圖片 URL
    ],
    tag: ['Nuxt 3', 'Tailwind'],
    description: '使用 Nuxt 3 與 Tailwind CSS 打造的極簡風格網站。專注於排版美學與格線系統的呈現。',
    link: [
      {
        name: 'DEMO',
        uri: 'https://eliowei.github.io/game-together/#/',
        icon: 'north_east' 
      },
      {
        name: 'GITHUB',
        uri: 'https://github.com/eliowei/game-together',
        icon: 'code'
      }
    ]
  },
  {
    id: 4,
    col: '8',
    order: {
      content: 1,
      img: 2
    },
    aspect: 'video',
    title: '寵物店 LINE 資訊與預約管理平台',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBzK1Qs83elE9wkldJQPCqtcGDeJTYm4wf6dHrHHVPHZDj_btdovnBXVsXB8O3wGE2kcSKz4BOzIj3Ph0_B60XAS0ncC4jzrfSm-Ay_1Dtm1wzLgFBQpu8UHYXrplK5vpVR9rnaQNPU16uhZbKySM8XQPTJB1g_qFapWDUlP6kOr9pBVAeX_G_tIERFJ9Kid9IV58Ro4UcjpxGJDQKHH5amD5rj9cV36cPHpDTJCS6xRsf2XrsPheO97eeX8ZidUft39QmVa-FTHZI',
      // 加入其他圖片 URL
    ],
    tag: ['NODE.JS', 'LINE BOT'],
    description: '整合房型展示、價位資訊、FAQ、公告與預約需求管理，提供流暢的預約體驗。',
    link: [
      {
        name: 'DEMO',
        uri: 'https://eliowei.github.io/game-together/#/',
        icon: 'north_east' 
      },
      {
        name: 'GITHUB',
        uri: 'https://github.com/eliowei/game-together',
        icon: 'code'
      }
    ]
  },
])
const openLightbox = (card, imageIndex = 0) => {
  isLightbox.value = true
  currentCard.value = card
  currentImageIndex.value = imageIndex
  currentImage.value = card.images[imageIndex]
  console.log(currentImage.value)
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
