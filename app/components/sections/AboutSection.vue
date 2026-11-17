<template>
  <section id="services" class="py-20 md:py-28 bg-surface scroll-mt-24">
    <div class="max-w-7xl mx-auto px-6 md:px-16">
      <p v-entrance class="text-sm text-secondary mb-3">SERVICES</p>
      <h2 v-entrance="0.08" class="text-3xl md:text-5xl text-primary">從品牌介紹到下一次合作</h2>
      <p v-entrance="0.16" class="mt-6 max-w-2xl text-secondary leading-relaxed">適合需要建立第一個正式網站、重新整理服務資訊，或為新產品準備獨立介紹頁的品牌。先確認網站要完成的任務，再決定需要的頁面與功能。</p>
      <div class="grid md:grid-cols-2 gap-6 mt-12">
        <article v-for="(item, index) in services" v-entrance="index * 0.12" :key="item.title" class="about-card">
          <p class="text-sm text-secondary mb-4">{{ item.label }}</p>
          <h3 class="text-2xl text-primary">{{ item.title }}</h3>
          <p class="text-secondary mt-4 leading-relaxed">{{ item.description }}</p>
          <ul class="mt-6 space-y-2 text-secondary"><li v-for="point in item.points" :key="point">— {{ point }}</li></ul>
        </article>
      </div>
      <aside v-entrance class="mt-6 border border-outline-variant p-8 bg-surface-container-low">
        <p class="text-sm text-secondary mb-3">延伸整合 / LINE OA</p>
        <h3 class="text-2xl text-primary">讓網站之外的服務資訊也方便維護</h3>
        <p class="mt-4 text-secondary leading-relaxed">已有 LINE 官方帳號，且需要管理 FAQ、公告或價目表？可另外評估內容後台與 LINE OA 整合。預約、會員與第三方串接依需求確認，不包含在一般網站建置範圍內。</p>
        <TransitionLink to="/projects/line-oa-platform" transition-title="LINE OA 商家管理平台" class="inline-block mt-6 underline text-primary">了解 LINE OA 整合方案 →</TransitionLink>
      </aside>
    </div>
  </section>
</template>
<script setup>
import TransitionLink from '~/components/ui/TransitionLink.vue'
const services = [
  { label: '01 / BRAND WEBSITE', title: '品牌形象網站', description: '把品牌介紹、服務內容與聯絡方式整理成完整網站，讓第一次認識你的客戶有資訊可以參考。', points: ['網站資訊架構與頁面規劃', '響應式介面與前端開發', '基本 SEO 設定與上線交付'] },
  { label: '02 / LANDING PAGE', title: '服務與活動介紹頁', description: '圍繞一項服務、產品或活動，安排內容與行動入口，讓訪客知道重點，也知道下一步怎麼做。', points: ['單頁內容層級與介面實作', '諮詢、報名或外部連結入口', '依需求評估表單與事件追蹤'] }
]
</script>
