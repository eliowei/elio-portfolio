<template>
  <SketchbookFrame class="sketchbook-home">
    <main id="main" ref="notebook" class="sheet notebook">
      <ClientOnly><SketchbookJourney /></ClientOnly>

      <section id="hero" class="note-hero" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="tape-label">你好，我是 Elio。</p>
          <h1 id="hero-title">為小型品牌打造<br>好看、好用的<span>網站</span>，<br>也能串接 LINE OA。</h1>
          <p>專注於網站設計與前端開發，<br>從需求討論、設計、開發到上線，<br>用清楚的流程，把想法變成落地的成果。</p>
          <div class="note-actions">
            <NuxtLink to="/contact" class="ink-button">開始討論專案 ↗</NuxtLink>
            <NuxtLink id="hero-work-link" to="#projects" class="ink-button ink-outline">查看作品 ▷</NuxtLink>
          </div>
        </div>
        <NuxtImg src="/images/sketchbook/desk.webp" alt="戴圓框眼鏡的 Elio 坐在桌前設計網站" id="hero-illustration" class="hero-art" width="1440" height="810" sizes="100vw lg:740px" fetchpriority="high" />
      </section>

      <section id="services" data-scroll-reveal class="note-services" aria-labelledby="services-title">
        <div class="services-intro">
          <p class="note-index"><span>01</span> Services</p>
          <h2 id="services-title">我能提供哪些服務？</h2>
          <p>從品牌網站到系統整合，依照你的需求，提供合適的網站解決方案。</p>
        </div>
        <svg class="scenery pencil-rays rays-services" viewBox="0 0 36 34" fill="none" aria-hidden="true">
          <path d="M6 13Q5 8 3 5m12 10L17 2m5 18q5-6 12-9" />
        </svg>
        <div class="service-notes">
          <NuxtLink v-for="service in services" :key="service.id" :data-service-card="service.id" :to="{ path: '/contact', query: { service: service.id } }" class="paper-note">
            <UIcon :name="service.icon" aria-hidden="true" />
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </NuxtLink>
        </div>
      </section>

      <svg class="scenery scenery-grass grass-services" viewBox="0 0 76 40" fill="none" aria-hidden="true">
  <path d="M29 34C24 24 14 20 5 24c8 1 15 5 19 10M34 34C31 23 33 10 40 4c-1 10-5 16-4 29M41 34c4-12 14-20 24-20-7 5-14 12-18 20M26 36l-9 1m28-1 14 2" />
</svg>

      <section id="projects" data-scroll-reveal class="note-works" aria-labelledby="works-title">
        <svg class="scenery pencil-rays rays-works" viewBox="0 0 36 34" fill="none" aria-hidden="true">
          <path d="M6 13Q5 8 3 5m12 10L17 2m5 18q5-6 12-9" />
        </svg>
        <div class="work-intro">
          <p class="note-index"><span>02</span> Works</p>
          <h2 id="works-title">精選作品</h2>
          <p>從內容規劃、介面設計到開發，<br>看看網站與整合專案的實作成果。</p>
          <NuxtLink to="#project-carousel" class="ink-button ink-outline">瀏覽作品 ↗</NuxtLink>
        </div>
        <FeaturedProjects :projects="projects" />
      </section>

      <svg class="scenery scenery-grass grass-works" viewBox="0 0 76 40" fill="none" aria-hidden="true">
  <path d="M29 34C24 24 14 20 5 24c8 1 15 5 19 10M34 34C31 23 33 10 40 4c-1 10-5 16-4 29M41 34c4-12 14-20 24-20-7 5-14 12-18 20M26 36l-9 1m28-1 14 2" />
</svg>

      <section id="process" data-scroll-reveal class="note-process" aria-labelledby="process-title">
        <div>
          <p class="note-index"><span>03</span> Process</p>
          <h2 id="process-title">合作流程：從想法到上線</h2>
          <p>先對齊需求與分工，再一步步把網站做出來。</p>
        </div>
        <ol class="process-notes">
          <li v-for="(step, index) in steps" :key="step.title" class="paper-note" :style="{ '--arrow-order': index }">
            <UIcon :name="step.icon" aria-hidden="true" />
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
            <svg v-if="index < steps.length - 1" class="process-arrow" viewBox="0 0 24 16" fill="none" aria-hidden="true">
              <path d="M2 8 Q10 7 20 8 M15 3l6 5-6 5" />
              <path class="process-arrow-ink" pathLength="1" d="M2 8 Q10 7 20 8 M15 3l6 5-6 5" />
            </svg>
          </li>
        </ol>
      </section>

      <section id="about" data-scroll-reveal class="note-about" aria-labelledby="about-title">
        <div>
          <p class="note-index"><span>04</span> About</p>
          <h2 id="about-title">關於我</h2>
          <p>我是一位從事網站設計與前端開發的工程師。喜歡把資訊整理成好讀的頁面，讓品牌有一個好用、耐看的網站。</p>
          <button type="button" class="ink-button ink-outline" :aria-expanded="aboutOpen" aria-controls="about-more" @click="aboutOpen = !aboutOpen">{{ aboutOpen ? '收起介紹 −' : '了解更多 ↗' }}</button>
          <p v-show="aboutOpen" id="about-more">我使用 Vue 與 Nuxt 建置網站，也開發過 LINE 官方帳號內容管理平台。合作時會由我直接和你討論內容、畫面與開發範圍。</p>
        </div>
        <svg class="scenery pencil-rays rays-about" viewBox="0 0 36 34" fill="none" aria-hidden="true">
          <path d="M6 13Q5 8 3 5m12 10L17 2m5 18q5-6 12-9" />
        </svg>
        <figure class="polaroid">
          <NuxtImg src="/images/sketchbook/portrait.webp" alt="Elio 的手繪品牌人物" width="286" height="392" loading="lazy" />
        </figure>
        <div class="paper-note about-note">
          <h3 class="tape-label">我的特點</h3>
          <ul>
            <li v-for="point in strengths" :key="point"><UIcon name="i-lucide-square-check-big" aria-hidden="true" />{{ point }}</li>
          </ul>
        </div>
        <svg class="scenery pencil-sprig" viewBox="0 0 74 96" aria-hidden="true">
          <path d="M8 90Q33 59 60 10m-23 39Q17 48 14 27q21 2 23 22Zm9-14Q47 15 65 7q0 20-19 28ZM29 63q15-17 36-13-11 18-36 13Zm-8 10Q5 69 5 53q16 5 16 20Z" />
          <path class="pencil-sprig-veins" d="m33 45-13-12m30-3 11-17M34 60l23-7M18 68l-9-11" />
        </svg>
      </section>

      <section id="faq" data-scroll-reveal class="notebook-faq" aria-labelledby="notebook-faq-title">
        <h2 id="notebook-faq-title">常見問題</h2>
        <dl>
          <div v-for="item in questions" :key="item.q">
            <dt>{{ item.q }}</dt>
            <dd>{{ item.a }}</dd>
          </div>
        </dl>
      </section>

      <section id="contact" data-scroll-reveal class="note-contact" aria-labelledby="contact-title">
        <figure id="journey-destination" class="arrival-art">
          <img src="/images/sketchbook/pose-pencil.webp" alt="" width="172" height="320" loading="lazy" decoding="async">
        </figure>
        <div>
          <p class="note-index"><span>05</span> Let’s Create</p>
          <h2 id="contact-title">一起開始你的網站計畫吧！</h2>
          <p>無論是品牌網站、活動頁面，或客製化功能，<br class="hidden sm:block">都歡迎和我聊聊，一起確認網站需要做到什麼。</p>
          <NuxtLink to="/contact" class="ink-button"><UIcon name="i-lucide-mail" aria-hidden="true" /> 合作洽詢 ↗</NuxtLink>
        </div>
        <svg class="scenery pencil-cloud" viewBox="0 0 78 32" fill="none" aria-hidden="true">
          <path d="M4 25q5-10 16-8 3-10 14-8 7-9 17-4 6 3 6 9 13-3 17 7-27 4-69 4" />
        </svg>
        <img src="/images/sketchbook/inquiry-mountain-right.webp" alt="" width="560" height="212" loading="lazy" decoding="async" class="scenery scenery-mountain">
      </section>
    </main>

  </SketchbookFrame>
</template>

<script setup>
defineProps({ projects: { type: Array, default: () => [] } })

const aboutOpen = ref(false)
const notebook = ref(null)
let revealObserver

onMounted(() => {
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  revealObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue
      entry.target.classList.remove('is-awaiting-reveal')
      entry.target.classList.add('is-revealing')
      revealObserver.unobserve(entry.target)
    }
  }, { rootMargin: '0px 0px -6% 0px' })

  for (const section of notebook.value.querySelectorAll('[data-scroll-reveal]')) {
    if (section.getBoundingClientRect().top < window.innerHeight * .94) continue
    section.classList.add('is-awaiting-reveal')
    revealObserver.observe(section)
  }
})

onBeforeUnmount(() => {
  revealObserver?.disconnect()
})
const services = [
  { id: 'corporate', title: '品牌／企業網站', description: '整理品牌、服務與聯絡入口', icon: 'i-lucide-panels-top-left' },
  { id: 'landing', title: '活動頁／Landing Page', description: '介紹活動、商品或服務', icon: 'i-lucide-layers' },
  { id: 'line_oa_template', title: 'LINE OA／LINE Bot', description: '內容管理與流程整合', icon: 'i-lucide-message-circle' },
  { id: 'other', title: '客製化功能開發', description: '依需求規劃功能與串接', icon: 'i-lucide-settings' },
]
const steps = [
  { title: '需求討論', description: '了解目標與需求', icon: 'i-lucide-messages-square' },
  { title: '規劃設計', description: '架構與視覺提案', icon: 'i-lucide-panels-top-left' },
  { title: '開發實作', description: '功能開發與整合', icon: 'i-lucide-code-xml' },
  { title: '測試上線', description: '測試與正式發布', icon: 'i-lucide-rocket' },
]
const strengths = ['設計與前端開發整合', '重視使用者體驗與細節', '直接溝通，彈性合作']
const questions = [
  { q: '網站費用與製作時間怎麼估？', a: '品牌網站依頁面數量、功能、素材與預計上線時間評估，確認範圍後再報價；LINE OA 商家管理平台已有公開方案，可參考該案例頁。' },
  { q: '沒有完整文案或照片可以先討論嗎？', a: '可以。先提供現有資料與想介紹的服務，合作前再確認要補哪些素材。' },
  { q: '上線後可以自己更新內容嗎？', a: '可以依更新頻率和內容規劃管理方式，後台與交接範圍會在報價時確認。' },
  { q: '網站包含 SEO 或 LINE 整合嗎？', a: '網站提供基本搜尋與社群分享設定，持續 SEO 經營和 LINE 整合可另外討論。' },
]
</script>

