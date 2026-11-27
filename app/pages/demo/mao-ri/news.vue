<template>
  <div ref="root">
    <MaoriHead title="店內公告">
      <template #lead>公休日期 服務調整和來店提醒<br>都會寫在這裡<br><small>公告內容皆為示意</small></template>
      <MaoriDoodle name="dog" class="art" />
    </MaoriHead>

    <section class="news mr-wrap" aria-labelledby="mr-news">
      <div class="bar">
        <h2 id="mr-news">最新公告</h2>
        <div role="group" aria-label="依類別篩選">
          <button v-for="tag in tags" :key="tag" type="button" :aria-pressed="tag === filter" @click="filter = tag">{{ tag }}</button>
        </div>
      </div>
      <ul>
        <li v-for="item in shown" :key="item.id">
          <p class="meta"><time :datetime="item.date.replaceAll('.', '-')">{{ item.date }}</time><span>{{ item.tag }}</span></p>
          <div>
            <h3>{{ item.title }}</h3>
            <p class="mr-lines">{{ item.body }}</p>
          </div>
        </li>
      </ul>
    </section>

    <section class="board mr-band mr-tear-top mr-tear-bottom" aria-labelledby="mr-signs">
      <div class="mr-wrap">
        <h2 id="mr-signs">店內小告示</h2>
        <p>來店之前先看一下</p>
        <ul>
          <li v-for="sign in maoriSigns" :key="sign.title" data-mr="photo">
            <h3>{{ sign.title }}</h3>
            <p class="mr-lines">{{ sign.text }}</p>
          </li>
        </ul>
      </div>
    </section>

    <p class="next mr-wrap"><NuxtLink :to="`${maoriBase}/booking`" class="mr-btn">預約美容 →</NuxtLink></p>
  </div>
</template>

<script setup lang="ts">
import { maoriBase, maoriNews, maoriSigns } from '~/data/maori'

definePageMeta({ layout: 'maori', pageTransition: { name: 'mr-page', mode: 'out-in' } })
useSeoMeta({ title: '店內公告｜毛日概念提案', description: '毛日的公休時間、服務調整與店內小告示（示意）。' })

const tags = ['全部', ...new Set(maoriNews.map(item => item.tag))]
const filter = ref('全部')
const shown = computed(() => maoriNews.filter(item => filter.value === '全部' || item.tag === filter.value))

const root = ref<HTMLElement | null>(null)
useMaoriMotion(root)
</script>

<style scoped>
.art { width: 170px; }
.news { max-width: 960px; padding-top: 1.5rem; }
.bar { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem 2rem; margin-bottom: 1.2rem; }
.bar div { display: flex; flex-wrap: wrap; gap: .5rem; }
.bar button { min-width: 48px; min-height: 44px; padding-inline: 1rem; border: 1px solid var(--caramel); border-radius: 12px; cursor: pointer; }
.bar button[aria-pressed='true'] { background: var(--caramel); color: #fff; }
.news ul { border-top: 2px solid var(--wood); }
.news li { display: grid; grid-template-columns: 9rem 1fr; gap: .5rem 2rem; padding-block: 1.5rem; border-bottom: 1px dashed var(--wood); }
.meta { display: grid; gap: .4rem; align-content: start; justify-items: start; font-variant-numeric: tabular-nums; }
.meta span { padding: 0 .7rem; background: var(--kraft); font-family: var(--mr-hand); }

.board ul { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(15rem, 100%), 1fr)); gap: 2.2rem 2rem; align-items: start; margin-top: 2rem; }
.board li { position: relative; padding: 1.8rem 1.4rem 1.4rem; background: var(--paper); box-shadow: 0 6px 16px #49362824; text-align: center; rotate: -1.5deg; }
.board li:nth-child(even) { rotate: 1.6deg; padding-bottom: 2.4rem; }
/* A strip of tape holds each sign up. */
.board li::before { content: ''; position: absolute; top: -11px; left: calc(50% - 40px); width: 80px; height: 22px; background: #d9bd92cc; rotate: -4deg; }
.board h3 { margin-bottom: .4rem; font-family: var(--mr-hand); font-weight: 400; }
.next { text-align: center; }

@media (max-width: 760px) { .news li { grid-template-columns: minmax(0, 1fr); } .meta { display: flex; align-items: center; gap: .8rem; } .art { display: none; } }
</style>
