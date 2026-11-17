<template>
  <section id="hero" class="brand-hero relative isolate overflow-hidden bg-surface border-b border-outline-variant">
    <svg class="brand-mural" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false"><path d="M760 900V390a250 250 0 0 1 500 0v510M800 900V390a210 210 0 0 1 420 0v510M840 900V390a170 170 0 0 1 340 0v510M880 900V390a130 130 0 0 1 260 0v510"/><path d="M0 740h1440M0 780h1440M1010 0v900M680 0v900"/><circle cx="1010" cy="390" r="320" stroke-dasharray="2 10"/></svg>
    <div class="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-20 md:py-28 grid lg:grid-cols-2 gap-14 items-center">
      <div>
        <p v-entrance="0" class="text-sm tracking-widest text-secondary mb-6">ELIO WEI · 品牌網站建置</p>
        <h1 v-entrance="0.1" class="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight text-primary">讓客戶看懂你的品牌<br>找到合作的理由</h1>
        <p v-entrance="0.2" class="mt-8 text-lg text-secondary leading-relaxed">為小型品牌與專業服務者建置品牌形象網站、服務介紹頁與 Landing Page。整理網站資訊、實作介面並完成上線，讓品牌有一個清楚、可信的線上入口。</p>
        <div v-entrance="0.3" class="mt-8 flex flex-wrap gap-4">
          <UButton to="/contact" label="討論網站需求" size="lg" class="font-bold" />
          <UButton to="#projects" label="查看網站與整合案例" size="lg" color="neutral" variant="outline" />
        </div>
        <p v-entrance="0.4" class="mt-6 text-sm text-secondary">品牌網站為核心服務 · LINE OA 與內容管理可另行評估整合</p>
      </div>
      <figure v-entrance="0.2" class="border border-outline-variant bg-surface-container p-3 md:p-5 shadow-xl">
        <div class="flex justify-between border-b border-outline-variant pb-3 mb-3 text-xs text-secondary"><span>WEBSITE / SELECTED WORK</span><span>01</span></div>
        <NuxtImg src="/images/projects/personal-website/cover.png" alt="Elio 個人品牌網站實作畫面" width="1200" height="900" sizes="100vw lg:50vw" class="w-full aspect-[4/3] object-cover object-top" fetchpriority="high" />
        <figcaption class="flex justify-between gap-4 pt-4 text-sm text-secondary"><span>個人品牌網站 · 自有專案</span><TransitionLink to="/projects/personal-portfolio" transition-title="個人品牌網站" class="underline text-primary">了解案例 →</TransitionLink></figcaption>
      </figure>
    </div>
  </section>
</template>

<script setup>
import TransitionLink from '~/components/ui/TransitionLink.vue'
</script>

<style scoped>
.brand-hero { background-image: radial-gradient(ellipse at 85% 15%, color-mix(in srgb, var(--color-primary) 4%, transparent), transparent 65%); }
.brand-hero::after { content: ''; position: absolute; inset: 0; pointer-events: none; opacity: .22; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Cpath fill='%23808080' opacity='.12' filter='url(%23n)' d='M0 0h160v160H0z'/%3E%3C/svg%3E"); }
.brand-mural { position: absolute; inset: 0; width: 100%; height: 100%; stroke: var(--color-primary); stroke-width: 1; opacity: .075; pointer-events: none; }
@media (max-width: 767px) { .brand-mural { width: 180%; left: -45%; opacity: .05; } }
@media (forced-colors: active) { .brand-mural, .brand-hero::after { display: none; } }
</style>
