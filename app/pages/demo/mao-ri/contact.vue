<template>
  <div ref="root">
    <MaoriHead title="聯絡我們">
      <template #lead>歡迎來店參觀 諮詢或預約<br>走進巷子 看到米色布簾就到了</template>
      <MaoriPhoto name="hero" alt="毛日店面外觀與米色布簾" :tilt="2.5" tape ratio="3 / 2" class="front" />
    </MaoriHead>

    <div class="layout mr-wrap">
      <dl>
        <div><dt>店鋪地址</dt><dd>{{ maoriShop.address }}</dd></div>
        <div><dt>營業時間</dt><dd>{{ maoriShop.hours }}<br>{{ maoriShop.closed }}</dd></div>
        <div><dt>電話</dt><dd>{{ maoriShop.phone }} 示意</dd></div>
        <div><dt>交通與停車</dt><dd>捷運○○站步行約 5 分鐘<br>巷口附近有收費停車場 示意</dd></div>
        <div><dt>追蹤我們</dt><dd>Instagram　Facebook　LINE<br><small>示意帳號 未開放</small></dd></div>
      </dl>

      <figure>
        <div>
          <img :src="maoriImg('il-map')" alt="手繪街區示意地圖，標記毛日位置與停車場" data-mr="mask" loading="lazy">
        </div>
        <figcaption class="mr-hand">巷子裡的一間小店<br>期待見到你和毛孩</figcaption>
      </figure>
    </div>

    <p class="next mr-wrap"><NuxtLink :to="`${maoriBase}/booking`" class="mr-btn">預約美容 →</NuxtLink></p>
  </div>
</template>

<script setup lang="ts">
import { maoriBase, maoriImg, maoriShop } from '~/data/maori'

definePageMeta({ layout: 'maori', pageTransition: { name: 'mr-page', mode: 'out-in' } })
useSeoMeta({ title: '聯絡我們｜毛日概念提案', description: '毛日的地址、營業時間、交通停車與社群資訊（示意）。' })
const root = ref<HTMLElement | null>(null)
useMaoriMotion(root)
</script>

<style scoped>
.front { width: min(520px, 100%); }
.layout { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.35fr); gap: clamp(1.5rem, 5vw, 4rem); align-items: start; }
dl { margin: 0; border-top: 2px solid var(--wood); }
dl div { padding-block: 1rem; border-bottom: 1px dashed var(--wood); }
dt { font-family: var(--mr-title); font-size: 1.2rem; font-weight: 700; }
dd { margin: 0; }
figure { margin: 0; }
figure img { width: 100%; }
figcaption { margin: .5rem 0 0 auto; width: fit-content; font-size: 1.35rem; rotate: -2deg; }
.next { padding-top: 0; text-align: center; }
@media (max-width: 860px) { .layout { grid-template-columns: minmax(0, 1fr); } }
</style>
