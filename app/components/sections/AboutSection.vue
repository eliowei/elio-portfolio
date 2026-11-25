<template>
  <section id="services" class="border-y border-paperBorder bg-washiCard/75 py-16 md:py-24" aria-labelledby="service-title">
    <div class="mx-auto max-w-6xl px-6">
      <h2 id="service-title" class="font-serif text-3xl font-bold text-sumi sm:text-4xl">你想做哪一種網站？</h2>
      <p class="mt-4 max-w-xl leading-relaxed text-sumiMuted">先看網站要完成的事，再決定做一頁介紹或多頁官網。</p>

      <fieldset class="mt-7 flex flex-wrap gap-2">
        <legend class="sr-only">選擇網站類型</legend>
        <label v-for="option in services" :key="option.id" class="cursor-pointer">
          <input v-model="selected" type="radio" name="home-service" :value="option.id" class="peer sr-only">
          <span class="grid min-h-11 place-items-center rounded-lg border border-paperBorder px-4 text-sm font-semibold text-sumi peer-checked:border-vermilionDark peer-checked:bg-vermilionDark peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2">{{ option.title }}</span>
        </label>
      </fieldset>

      <div class="mt-5 grid gap-6 rounded-2xl border border-paperBorder bg-washi p-5 sm:p-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <h3 class="font-serif text-2xl font-bold text-sumi">{{ current.goal }}</h3>
          <p class="mt-3 leading-relaxed text-sumiMuted">{{ current.description }}</p>
          <NuxtLink :to="{ path: '/contact', query: { service: current.id } }" class="mt-6 inline-flex min-h-11 items-center rounded-lg bg-vermilionDark px-4 py-2 text-sm font-semibold text-white hover:brightness-90">{{ current.cta }} ↗</NuxtLink>
        </div>
        <div class="border-t border-paperBorder pt-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
          <h4 class="text-sm font-semibold text-sumi">{{ current.structure }}</h4>
          <ol class="mt-3 flex flex-wrap gap-2 text-xs text-sumi">
            <li v-for="(page, index) in current.pages" :key="page" class="flex items-center gap-2">
              <span v-if="index && selected === 'landing'" aria-hidden="true">→</span>
              <span class="rounded border border-paperBorder bg-washiCard px-2 py-1.5">{{ page }}</span>
            </li>
          </ol>
          <ul class="mt-5 list-disc space-y-2 pl-5 text-sm leading-relaxed text-sumiMuted">
            <li v-for="item in current.deliverables" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>

      <aside class="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-paperBorder py-5">
        <div>
          <h3 class="font-semibold text-sumi">LINE 官方帳號整合</h3>
          <p class="mt-1 text-sm leading-relaxed text-sumiMuted">需要更新公告、價目表或常見問題？可以另外討論內容管理與 LINE 串接。</p>
        </div>
        <NuxtLink to="/projects/line-oa-platform" class="inline-flex min-h-11 items-center text-sm font-semibold text-vermilion underline underline-offset-4">查看整合方案 ↗</NuxtLink>
      </aside>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    id: 'landing',
    title: '一頁式網站',
    goal: '把一項服務講清楚',
    description: '適合工作坊招生、新產品上市或單一服務。訪客能在同一頁看完重點，再報名、預訂或提問。',
    structure: '在同一頁依序閱讀',
    pages: ['主題介紹', '服務內容', '常見問題', '報名或詢問'],
    deliverables: ['規劃單頁內容順序與手機版介面', '依需求連接報名表、預訂頁或 LINE'],
    cta: '討論一頁式網站',
  },
  {
    id: 'corporate',
    title: '品牌形象網站',
    goal: '讓品牌和服務有固定的入口',
    description: '適合工作室、小型企業和專業服務者。把品牌介紹、服務、代表作品和聯絡方式整理在同一個網址。',
    structure: '從導覽進入各頁面',
    pages: ['首頁', '品牌與服務', '案例', '聯絡'],
    deliverables: ['規劃多頁導覽、內容與手機版介面', '完成基本搜尋設定、上線與交接'],
    cta: '討論品牌網站',
  },
]
const selected = defineModel({ type: String, default: 'landing' })
const current = computed(() => services.find(item => item.id === selected.value) ?? services[0])
</script>
