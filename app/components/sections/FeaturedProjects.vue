<template>
  <section class="py-32 bg-surface px-6 md:px-16 border-y border-outline-variant" id="projects">

    <div class="max-w-7xl mx-auto">

      <!-- header -->
      <div class="flex justify-between items-end mb-16 reveal">
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

        <template v-for="item in project" :key="item.id">

          <!-- CARD -->
          <div :class="[colMap[item.col]]" class="group project-card">

            <!-- IMAGE -->
            <div
              :class="[
                aspectMap[item.aspect],
                orderMap[item.order.img]
              ]"
              class="bg-surface-container overflow-hidden"
            >
             <NuxtLink :to="`/project/${item.slug}`">
               <img
                 :src="item.images[0]"
                 :alt="item.title"
                 class="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 cursor-pointer"
               />
             </NuxtLink>
            </div>

            <!-- CONTENT -->
            <div
              :class="orderMap[item.order.content]"
              class="p-8 flex flex-col"
            >

              <!-- TAG -->
              <div class="flex gap-2 mb-4">
                <span
                  v-for="(tag, i) in item.tag"
                  :key="i"
                  class="px-3 py-1 text-primary border border-outline-variant font-label-mono text-[10px] uppercase"
                >
                  {{ tag }}
                </span>
              </div>

              <!-- TITLE -->
              <h3 class="text-2xl font-headline-md mb-2 text-primary">
                {{ item.title }}
              </h3>

              <!-- DESC -->
              <p class="text-secondary mb-6 max-w-lg">
                {{ item.description }}
              </p>

              <!-- LINKS -->
              <div class="flex gap-4">

                <a
                  v-for="(link, i) in item.link"
                  :key="i"
                  class="font-label-mono text-primary flex items-center gap-1 hover:underline"
                  :href="link.uri"
                >
                  {{ link.name }}
                  <span class="material-symbols-outlined text-sm">
                    {{ link.icon }}
                  </span>
                </a>

              </div>

            </div>
          </div>

        </template>

      </div>

      <!-- LIGHTBOX unchanged -->
      <div v-if="isLightbox" class="fixed inset-0 z-101 flex items-center justify-center bg-black/90">

        <button class="absolute top-4 right-4 text-white" @click="closeLightbox">✕</button>

        <img
          :src="currentImage"
          class="max-h-[90vh] max-w-[90vw] object-contain"
        />

        <button class="absolute left-4 text-white" @click="prevImage">‹</button>
        <button class="absolute right-4 text-white" @click="nextImage">›</button>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { queryCollection } from '@nuxt/content/server';
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

const { data: projects } = await useAsyncData(() =>
  queryCollection('projects').all()
)

const project = ref([
  {
    id: 1,
    slug: 'game-together',
    title: '遊戲社群揪團平台',
    col: '8',
    order: {
      content: 2,
      img: 1
    },
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
