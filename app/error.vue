<template>
  <SketchbookFrame>
    <main id="main" class="sheet notfound-page">
      <div class="notfound-copy">
        <p class="note-index"><span>{{ isNotFound ? 'Error 404' : 'Oops' }}</span></p>
        <h1 v-if="isNotFound">這一頁<span>不見了</span></h1>
        <h1 v-else>出了一點<span>小狀況</span></h1>
        <p v-if="isNotFound">網址可能打錯了，或是這個頁面已經搬家。先回到首頁，或從這裡繼續逛。</p>
        <p v-else>頁面暫時打不開，請稍後再試一次，或先回到首頁。</p>
        <div class="notfound-actions">
          <a href="/" class="ink-button" @click.prevent="go('/')">回到首頁</a>
          <a href="/#projects" class="ink-button ink-outline" @click.prevent="go('/#projects')">查看作品 ▷</a>
        </div>
        <p class="notfound-contact">有想聊的專案？<a href="/contact" @click.prevent="go('/contact')">直接來信洽詢</a></p>
      </div>

      <div class="notfound-art" aria-hidden="true">
        <span class="notfound-digits">{{ isNotFound ? '404' : '500' }}</span>
        <img class="notfound-elio" src="/images/sketchbook/pose-read-v2.webp" width="113" height="320" alt="">
        <p class="notfound-bubble">{{ isNotFound ? '咦？地圖上沒有這一頁⋯' : '等我一下，我來看看⋯' }}</p>
      </div>
    </main>
  </SketchbookFrame>
</template>

<script setup>
const props = defineProps({ error: { type: Object, default: () => ({}) } })

const isNotFound = computed(() => props.error?.statusCode === 404)
const go = to => clearError({ redirect: to })

useSeoMeta({
  title: computed(() => `${isNotFound.value ? '找不到頁面' : '發生錯誤'} | Elio Wei`),
  robots: 'noindex,nofollow'
})
</script>
