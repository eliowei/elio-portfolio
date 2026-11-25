<template>
  <section id="hero" class="bg-washi py-10 sm:py-14 lg:py-20" aria-labelledby="hero-title">
    <div class="mx-auto max-w-6xl px-6">
      <div class="grid border-y border-paperBorder lg:grid-cols-[1fr_0.85fr]">
        <div class="flex flex-col justify-center py-9 pr-0 sm:py-12 lg:pr-12">
          <p class="flex items-center gap-3 text-sm font-semibold text-vermilion">
            <span class="h-2 w-2 bg-vermilion" aria-hidden="true"></span>
            Elio Wei · 獨立網站設計與開發
          </p>
          <h1 id="hero-title" class="studio-serif mt-7 text-[clamp(2.5rem,5.5vw,5.15rem)] font-bold leading-[1.11] tracking-tight text-sumi">
            為小型品牌<br class="hidden sm:block">做有自己樣子的<span class="text-vermilion">網站</span>
          </h1>
          <p class="mt-6 max-w-sm text-base leading-loose text-sumiMuted">
            我是 Elio。從整理內容、設計頁面到開發上線，幫你把一項服務講清楚，或為品牌建立一個完整的官網。
          </p>
          <div class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
            <NuxtLink to="#services" class="inline-flex min-h-12 items-center gap-4 bg-vermilionDark px-5 font-semibold text-white hover:brightness-90">看看網站服務 <span aria-hidden="true">↓</span></NuxtLink>
            <NuxtLink to="/contact" class="inline-flex min-h-12 items-center gap-2 font-semibold text-sumi underline decoration-paperBorder underline-offset-4 hover:text-vermilion">討論網站需求 <span aria-hidden="true">↗</span></NuxtLink>
          </div>
        </div>

        <div class="border-t border-paperBorder py-4 lg:border-t-0 lg:border-l lg:py-0 lg:pl-5">
          <NuxtImg src="/images/editorial/paper-study.webp" alt="" width="1080" height="1350" sizes="100vw lg:480px" fetchpriority="high" class="aspect-[5/4] h-full max-h-[520px] w-full object-cover object-center sm:aspect-[8/5] lg:aspect-[4/5]" />
        </div>
      </div>
    </div>
  </section>
</template>
