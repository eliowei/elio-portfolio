<template>
  <section id="process" class="py-20 md:py-28 border-y border-outline-variant scroll-mt-24">
    <div class="max-w-7xl mx-auto px-6 md:px-16">
      <p v-entrance class="text-sm text-secondary mb-3">HOW WE WORK</p>
      <h2 v-entrance="0.08" class="text-3xl md:text-5xl text-primary">先把範圍說清楚再開始製作</h2>
      <div class="grid md:grid-cols-3 gap-8 mt-12">
        <article v-for="(step, i) in steps" v-entrance="i * 0.12" :key="step.title" class="border-t border-outline-variant pt-6">
          <p class="text-sm text-secondary">0{{ i + 1 }}</p><h3 class="text-xl text-primary mt-4">{{ step.title }}</h3><p class="text-secondary mt-4 leading-relaxed">{{ step.body }}</p>
        </article>
      </div>
      <div v-entrance class="grid md:grid-cols-2 gap-10 mt-16 p-6 md:p-10 bg-surface-container border border-outline-variant">
        <div><h3 class="text-xl text-primary">開始前一起確認</h3><p class="mt-4 text-secondary leading-relaxed">頁面數量、功能、預算與時程會在報價時確認。也會確認文案、照片與品牌素材由誰提供，以及版面確認方式與修改範圍。</p></div>
        <div><h3 class="text-xl text-primary">交付時清楚交接</h3><p class="mt-4 text-secondary leading-relaxed">依約定完成手機與桌面版、基本搜尋與分享設定、功能檢查及部署。網域、主機、內容更新方式與後續支援範圍，會在合作前列明。</p></div>
      </div>
    </div>
  </section>
  <section id="about" class="py-20 md:py-28 scroll-mt-24">
    <div class="max-w-7xl mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-10">
      <div><p class="text-sm text-secondary mb-3">YOUR WEBSITE PARTNER</p><h2 class="text-3xl md:text-4xl text-primary">由我與你直接溝通<br>把需求落實到網站</h2></div>
      <div v-entrance="0.16" class="text-secondary leading-relaxed space-y-5"><p>我是 Elio，一名前端工程師，使用 Vue 與 Nuxt 建置網站，也開發過 LINE OA 內容管理平台。合作時會先釐清網站目的與內容，再確認實作與交付方式。</p><p>網站建置以頁面規劃與介面開發為核心。Logo、品牌識別、攝影、完整文案與進階系統功能，若有需求會先討論是否納入或另外安排。</p></div>
    </div>
  </section>
  <section class="py-20 md:py-28 bg-surface-container-low">
    <div class="max-w-4xl mx-auto px-6 md:px-16"><p class="text-sm text-secondary mb-3">BEFORE WE START</p><h2 class="text-3xl md:text-4xl text-primary mb-10">合作前你可能想知道</h2>
      <article v-for="(faq, index) in faqs" v-entrance="index * 0.06" :key="faq.q" class="faq-item" :class="{ 'is-open': activeFaq === index }">
        <h3><button :id="faqId + '-trigger-' + index" type="button" class="faq-trigger" :aria-expanded="activeFaq === index" :aria-controls="faqId + '-panel-' + index" @click="activeFaq = activeFaq === index ? null : index">
          <span class="faq-number" aria-hidden="true">0{{ index + 1 }}</span><span class="faq-question">{{ faq.q }}</span><span class="faq-symbol" aria-hidden="true" />
        </button></h3>
        <div :id="faqId + '-panel-' + index" class="faq-panel" role="region" :aria-labelledby="faqId + '-trigger-' + index" :aria-hidden="activeFaq !== index" :inert="activeFaq !== index">
          <div class="faq-clip"><p class="faq-answer">{{ faq.a }}</p></div>
        </div>
      </article>
    </div>
  </section>
</template>
<script setup>
const activeFaq = ref(null)
const faqId = useId()
const steps = [
 { title: '了解需求與現有資料', body: '討論品牌、網站用途、參考網站、內容與預計上線時間，確認需求是否適合。' },
 { title: '確認規劃與報價', body: '對齊頁面、功能、素材分工、時程、費用與修改方式，再進入製作。' },
 { title: '製作、檢查與上線', body: '依確認的方向實作介面，檢查不同裝置與主要操作，完成部署與交接。' }
]
const faqs = [
 { q: '網站費用與製作時間怎麼估', a: '依頁面數量、功能、素材準備程度與整合需求評估。提供網站用途、參考網站與預計時間後，才能確認合適的範圍與報價。' },
 { q: '還沒有完整文案或照片可以先詢問嗎', a: '可以。先提供已有資料與想介紹的服務，一起確認缺少什麼。完整文案撰寫、攝影與品牌識別是否包含，需另外確認。' },
 { q: '上線後可以自己更新嗎', a: '可以依需求評估內容管理方式。需要自行修改的內容、後台功能與教學範圍，會在報價時確認，並非每個網站都預設包含管理後台。' },
 { q: '有包含 SEO 維護或 LINE OA 嗎', a: '網站提供基本搜尋與社群分享設定，搜尋排名不作保證。持續 SEO 經營、代管維護與 LINE OA 整合依需求另行確認範圍及費用。' }
]
</script>

<style scoped>
.faq-item { border-bottom: 1px solid var(--color-outline-variant); transition: background-color 250ms ease; }
.faq-item:hover, .faq-item.is-open { background: var(--color-surface); }
.faq-trigger { display: flex; align-items: center; gap: 1.25rem; width: 100%; padding: 1.6rem .75rem; color: var(--color-primary); text-align: left; cursor: pointer; }
.faq-trigger:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 3px; }
.faq-number { font-size: .7rem; color: var(--color-secondary); font-variant-numeric: tabular-nums; }
.faq-question { flex: 1; font-size: 1.125rem; font-weight: 500; line-height: 1.6; transition: transform 300ms cubic-bezier(.22,1,.36,1); }
.faq-trigger:hover .faq-question { transform: translateX(4px); }
.faq-symbol { position: relative; width: 28px; height: 28px; flex-shrink: 0; color: var(--color-secondary); transition: color 250ms ease; }
.faq-symbol::before, .faq-symbol::after { content: ''; position: absolute; left: 5px; top: 13px; width: 18px; height: 1px; background: currentColor; }
.faq-symbol::after { transform: rotate(90deg); transition: transform 400ms cubic-bezier(.22,1,.36,1), opacity 300ms ease; }
.faq-trigger:hover .faq-symbol, .is-open .faq-symbol { color: var(--color-primary); }
.is-open .faq-symbol::after { transform: rotate(0); opacity: 0; }
.faq-panel { display: grid; grid-template-rows: 0fr; opacity: 0; visibility: hidden; transition: grid-template-rows 420ms cubic-bezier(.22,1,.36,1), opacity 280ms ease, visibility 0s 420ms; }
.is-open .faq-panel { grid-template-rows: 1fr; opacity: 1; visibility: visible; transition-delay: 0s; }
.faq-clip { min-height: 0; overflow: hidden; }
.faq-answer { padding: 0 3.5rem 1.75rem 3rem; color: var(--color-secondary); line-height: 1.9; transform: translateY(-6px); transition: transform 420ms cubic-bezier(.22,1,.36,1); }
.is-open .faq-answer { transform: translateY(0); }
@media (max-width: 640px) { .faq-trigger { gap: .75rem; } .faq-question { font-size: 1rem; } .faq-answer { padding-left: 2.5rem; padding-right: .75rem; } }
@media (prefers-reduced-motion: reduce) { .faq-item, .faq-question, .faq-symbol, .faq-symbol::after, .faq-panel, .faq-answer { transition: none; } .faq-trigger:hover .faq-question, .faq-answer { transform: none; } }
</style>
