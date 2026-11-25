<template>
  <SketchbookFrame>
    <main id="main" class="sheet privacy-page">
      <p class="note-index"><span>Privacy</span></p>
      <h1>隱私權說明</h1>
      <p class="privacy-lead">
        這份說明列出本網站會蒐集哪些資料、用在哪裡，以及你可以怎麼控制。內容力求簡單，沒有看不懂的條文。
      </p>

      <section aria-labelledby="privacy-contact">
        <h2 id="privacy-contact">一、你主動提供的資料（合作洽詢表單）</h2>
        <p>
          你送出洽詢表單時，會提供姓名、電子郵件、專案類型、訊息內容，以及選填的預算區間。這些資料只用來回覆你的洽詢與討論合作，不會用於其他行銷或販售給第三方。
        </p>
        <p>表單內容透過郵件服務（EmailJS）寄給網站經營者，因此會經過該服務傳送。</p>
      </section>

      <section aria-labelledby="privacy-analytics">
        <h2 id="privacy-analytics">二、分析 Cookie（需要你同意）</h2>
        <p>
          你同意之後，網站才會載入 Google Tag Manager，用來統計頁面瀏覽、瀏覽裝置與流量來源，作為改善內容的參考。你不同意時，這些工具完全不會載入，網站其餘功能不受影響。
        </p>
        <p>
          你的選擇會記在你自己的瀏覽器裡（localStorage），網站不會因此追蹤你到其他網站。
        </p>
        <p>
          <button type="button" class="ink-button ink-outline" @click="changeChoice">重新選擇 Cookie 偏好</button>
        </p>
        <p v-if="changed" class="privacy-done" role="status">已清除你的選擇，重新整理頁面後會再次詢問。</p>
      </section>

      <section aria-labelledby="privacy-rights">
        <h2 id="privacy-rights">三、你的權利</h2>
        <p>
          你可以透過<NuxtLink to="/contact">合作洽詢表單</NuxtLink>，要求查詢、更正或刪除你曾經提供給我的資料。我會在確認是你本人之後處理。
        </p>
      </section>

      <section aria-labelledby="privacy-update">
        <h2 id="privacy-update">四、更新</h2>
        <p>若蒐集資料的方式有改變，我會更新這個頁面。最後更新：2026 年 11 月 25 日。</p>
      </section>
    </main>
  </SketchbookFrame>
</template>

<script setup>
definePageMeta({ layout: false })

const config = useRuntimeConfig()
const { resetConsent } = useConsent()
const changed = ref(false)

function changeChoice() {
  resetConsent()
  changed.value = true
}

useSeoMeta({
  title: '隱私權說明 | Elio Wei',
  description: '說明本網站蒐集哪些資料、用在哪裡，以及你可以如何控制分析 Cookie 與洽詢資料。',
  ogTitle: '隱私權說明 | Elio Wei',
  ogUrl: `${config.public.siteUrl}/privacy`,
  ogType: 'website',
  ogImage: `${config.public.siteUrl}/images/og-image-v2.jpg`
})

useHead({
  link: [{ rel: 'canonical', href: `${config.public.siteUrl}/privacy` }]
})
</script>
