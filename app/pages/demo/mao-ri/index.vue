<template>
  <div ref="root" class="home">
    <section class="hero mr-tear-top mr-tear-bottom" data-mr="hero">
      <picture>
        <source media="(max-width: 760px)" :srcset="maoriImg('m-hero')">
        <img :src="maoriImg('hero')" alt="巷弄裡的寵物美容小店，黃金獵犬睡在門口" fetchpriority="high">
      </picture>
      <div class="hero-copy">
        <h1><span data-mr="line">給毛孩</span><span data-mr="line">一段舒服又安心</span><span data-mr="line">的美容時光</span></h1>
        <svg viewBox="0 0 250 14" aria-hidden="true"><path d="M3 10C60 3 150 2 246 6" pathLength="1" data-mr="draw" /></svg>
        <p>從清潔修剪到細節照護<br>我們用耐心與溫柔<br>照顧每一位來作客的毛孩</p>
        <NuxtLink :to="`${maoriBase}/booking`" class="mr-btn is-light">預約美容 →</NuxtLink>
      </div>
    </section>

    <NuxtLink :to="`${maoriBase}/news`" class="pin mr-wrap">
      <span class="mr-note"><span class="tag">小告示</span><b>{{ maoriNews[0]?.title }}</b><small>{{ maoriNews[0]?.date }}</small><span class="go">看公告 →</span></span>
    </NuxtLink>

    <p class="from mr-wrap"><span>一對一預約制</span><span>狗狗洗澡 <b>$500</b> 起</span><span>貓咪 <b>$800</b> 起</span><NuxtLink :to="`${maoriBase}/price`" class="mr-more">看價目</NuxtLink></p>

    <section class="about mr-wrap">
      <img :src="maoriImg('house')" alt="水彩手繪的毛日小店" class="house" width="760" height="568" data-mr="mask" loading="lazy">
      <div>
        <h2>關於 毛日</h2>
        <p>一間藏在巷弄裡的寵物美容小店<br>希望讓每一隻毛孩都能在放鬆的氛圍中<br>完成專屬的清潔與造型</p>
        <NuxtLink :to="`${maoriBase}/about`" class="mr-more">認識我們 →</NuxtLink>
      </div>
      <MaoriPhoto name="groomer-wide" alt="美容師小羽正在幫貴賓犬梳毛" :tilt="4" tape caption="小羽和今天的客人" />
    </section>

    <section class="services mr-wrap">
      <header>
        <h2>美容服務</h2>
        <p>依毛孩的需求 從基礎清潔到造型修剪</p>
      </header>
      <ul>
        <li v-for="service in maoriServices" :key="service.id">
          <NuxtLink :to="`${maoriBase}/services#${service.id}`">
            <span class="blob" :style="{ '--tint': service.tint }"><MaoriDoodle :name="service.doodle" /></span>
            <h3>{{ service.name }}</h3>
            <span>{{ service.short }}</span>
          </NuxtLink>
        </li>
        <li class="extra" aria-hidden="true"><MaoriDoodle name="dog" /></li>
      </ul>
      <NuxtLink :to="`${maoriBase}/services`" class="mr-more">看完整服務內容 →</NuxtLink>
    </section>

    <section class="compare mr-band mr-tear-top mr-tear-bottom">
      <div class="mr-wrap">
        <header>
          <h2>美容前後對照</h2>
          <p>不只是洗乾淨<br>更讓毛孩找回舒適與自信的樣子<br><small>左右拖曳照片比較 示意照片</small></p>
        </header>
        <figure v-for="(pet, index) in maoriCompares.slice(0, 2)" :key="pet.image" :class="`pet-${index}`" data-mr="photo">
          <MaoriCompare :image="pet.image" :name="pet.name" />
          <figcaption><b>{{ pet.name }}</b>　{{ pet.breed }}　{{ pet.service }}<span class="mr-lines">{{ pet.note }}</span></figcaption>
        </figure>
        <NuxtLink :to="`${maoriBase}/daily`" class="mr-more">翻看美容日常 →</NuxtLink>
      </div>
    </section>

    <section class="care mr-wrap">
      <MaoriPhoto name="bath" alt="洗澡時笑得開心的柴犬" :tilt="-4" tape />
      <div>
        <h2>我們的堅持</h2>
        <dl>
          <dt>一次只照顧一位</dt><dd>每位美容師手上只有一隻<br>不用趕下一組</dd>
          <dt>依毛況調整做法</dt><dd>打結和膚況不同<br>工具和順序就不一樣</dd>
          <dt>牠的情緒優先</dt><dd>緊張就停下來<br>不關籠 全程手吹</dd>
        </dl>
      </div>
      <MaoriDoodle name="sleep" class="nap" />
    </section>

    <section class="flow mr-wrap">
      <div class="mr-note">
        <h2>預約流程</h2>
        <ol>
          <li>填寫毛孩資料</li>
          <li>選擇服務與時段</li>
          <li>留下聯絡方式</li>
          <li>等我們回覆確認</li>
        </ol>
        <NuxtLink :to="`${maoriBase}/booking`" class="mr-more">開始填寫 →</NuxtLink>
      </div>
      <img :src="maoriImg('il-pair')" alt="" data-mr="mask" loading="lazy">
    </section>

    <section class="cta mr-tear-top">
      <img :src="maoriImg('cta')" alt="瞇著眼讓人摸下巴的貓" loading="lazy">
      <div>
        <h2 class="mr-hand">現在<br>就為毛孩預約一個時段吧</h2>
        <NuxtLink :to="`${maoriBase}/booking`" class="mr-btn is-light">立即預約 →</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { maoriBase, maoriCompares, maoriImg, maoriNews, maoriServices } from '~/data/maori'

definePageMeta({ layout: 'maori', pageTransition: { name: 'mr-page', mode: 'out-in' } })
// The hero is the largest image on the page: fetch the right crop before the page script runs.
useHead({
  link: [
    { rel: 'preload', as: 'image', href: maoriImg('hero'), media: '(min-width: 761px)', fetchpriority: 'high' },
    { rel: 'preload', as: 'image', href: maoriImg('m-hero'), media: '(max-width: 760px)', fetchpriority: 'high' }
  ]
})
useSeoMeta({
  title: '毛日寵物美容工作室｜概念提案',
  description: '毛日是巷弄裡一對一預約制的寵物美容小店，虛構品牌的多頁式網站概念提案。'
})
const root = ref<HTMLElement | null>(null)
useMaoriMotion(root)
</script>

<style scoped>
.hero { position: relative; height: clamp(560px, 58vw, 760px); overflow: hidden; color: var(--paper); }
.hero picture { position: absolute; inset: 0; }
.hero img { width: 100%; height: 100%; object-fit: cover; object-position: 62% 56%; }
.hero::before { z-index: 2; }
.hero-copy { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: flex-start; justify-content: center; gap: 1.1rem; height: 100%; max-width: 1280px; margin-inline: auto; padding-inline: var(--pad); }
/* The dark wash keeps the white copy readable over any part of the photo. */
.hero picture::after { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, #1c120ad1 0, #1c120a99 30%, #1c120a00 56%); }
h1 { display: grid; justify-items: start; font-family: var(--mr-hand); font-size: clamp(2.1rem, 4.6vw, 3.6rem); line-height: 1.6; letter-spacing: .06em; }
.hero-copy svg { width: 250px; height: 14px; margin: -1.4rem 0 0 4.5em; fill: none; stroke: #e8b77a; stroke-width: 3; stroke-linecap: round; }
.pin { display: flex; justify-content: center; padding-block: 1.8rem 0; }
.pin .mr-note { position: relative; display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: .3rem 1.2rem; padding-block: 1rem; rotate: -.8deg; transition: rotate var(--mr-fast); }
.pin:hover .mr-note { rotate: 0deg; }
.pin .mr-note::before { content: ''; position: absolute; top: -11px; left: 1.5rem; width: 72px; height: 22px; background: #d9bd92c4; rotate: -7deg; }
.tag { padding: 0 .7rem; background: var(--coffee); color: #fff; font-family: var(--mr-hand); }
.go { font-family: var(--mr-hand); text-decoration: underline; text-decoration-color: var(--wood); text-underline-offset: .35em; }
.from { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: .2rem 1.5rem; padding-block: 1.8rem 0; }
.from b { font-size: 1.25rem; }

.about { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1.05fr); gap: clamp(1.5rem, 4vw, 3.5rem); align-items: center; }
.house { width: 100%; }
.about p { margin-block: .8rem 1.2rem; }

.services header { display: flex; flex-wrap: wrap; align-items: baseline; gap: .5rem 1.5rem; margin-bottom: 1.5rem; }
.services ul { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)) minmax(0, .8fr); gap: 1rem; align-items: end; margin-bottom: 1rem; text-align: center; }
.services a { display: grid; justify-items: center; }
.blob { display: grid; place-items: center; width: min(150px, 100%); aspect-ratio: 15 / 13; border-radius: 48% 52% 55% 45% / 55% 48% 52% 45%; background: color-mix(in srgb, var(--tint) 38%, transparent); transition: rotate var(--mr-fast); }
li:nth-child(even) .blob { border-radius: 55% 45% 48% 52% / 46% 55% 45% 54%; }
.services a:hover .blob { rotate: -4deg; }
.extra { justify-self: center; }

.compare .mr-wrap { display: grid; grid-template-columns: minmax(0, .8fr) minmax(0, 1fr) minmax(0, 1fr); grid-template-rows: auto 1fr; gap: 1.5rem clamp(1.5rem, 4vw, 3.5rem); align-items: start; padding-block: 5rem; }
.compare header { grid-column: 1; grid-row: 1; }
.compare header p { margin-top: 1rem; }
.compare figure { grid-row: 1 / span 2; margin: 0; padding: 12px 12px 16px; background: var(--paper); box-shadow: 0 8px 22px #49362826; }
.compare .pet-0 { grid-column: 2; rotate: -1.5deg; }
.compare .pet-1 { grid-column: 3; rotate: 2deg; margin-top: 3rem; }
.compare figcaption { padding-top: .7rem; font-size: .9rem; }
.compare .mr-more { grid-column: 1; grid-row: 2; justify-self: start; }

.care { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr) auto; gap: clamp(1.5rem, 4vw, 3.5rem); align-items: center; }
.care dt { margin-top: 1.1rem; font-family: var(--mr-hand); font-size: 1.4rem; }
.nap { width: 150px; align-self: end; }

.flow { display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: center; gap: 2rem 5rem; }
.flow .mr-note { flex: 0 1 24rem; rotate: 1.5deg; background: #f1e4cb; }
.flow ol { margin-block: .8rem; counter-reset: step; }
.flow li { display: flex; align-items: center; gap: .9rem; padding-block: .6rem; border-bottom: 1px dashed var(--wood); counter-increment: step; }
.flow li::before { content: counter(step); display: grid; place-items: center; width: 28px; height: 28px; border-radius: 50%; background: var(--caramel); color: #fff; }
.flow img { width: min(340px, 100%); }

.cta { position: relative; min-height: 440px; display: flex; align-items: center; background: #2d1a0c; color: var(--paper); }
.cta > img { position: absolute; top: 0; right: 0; width: 72%; height: 100%; object-fit: cover; object-position: 50% 40%; }
.cta::after { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, #2d1a0c 0, #2d1a0c 28%, #2d1a0c00 52%); }
.cta > div { position: relative; z-index: 1; width: 100%; max-width: 1280px; margin-inline: auto; padding: 5rem var(--pad) 3rem; }
.cta h2.mr-hand { margin-bottom: 1.5rem; font-family: var(--mr-hand); font-size: clamp(1.45rem, 3.6vw, 2.4rem); font-weight: 400; line-height: 1.8; }

@media (max-width: 960px) {
  .about, .care { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .about > :last-child { grid-column: 1 / -1; width: min(460px, 100%); justify-self: center; }
  .care .nap { display: none; }
  .compare .mr-wrap { grid-template-columns: repeat(2, minmax(0, 1fr)); grid-template-rows: none; }
  .compare header { grid-column: 1 / -1; grid-row: auto; }
  .compare figure { grid-row: auto; }
  .compare .pet-0 { grid-column: 1; }
  .compare .pet-1 { grid-column: 2; }
  .compare .mr-more { grid-column: 1 / -1; grid-row: auto; }
}
@media (max-width: 760px) {
  .hero { height: max(620px, 150vw); max-height: 780px; }
  .hero img { object-position: 50% 30%; }
  .hero picture::after { background: linear-gradient(#1c120a00 38%, #1c120ab3 62%, #1c120ae6); }
  .hero-copy { justify-content: flex-end; padding-bottom: 3rem; gap: .7rem; }
  .hero-copy svg { margin-top: -1rem; }
  .about, .care, .compare .mr-wrap { grid-template-columns: minmax(0, 1fr); }
  .house { width: min(280px, 80%); justify-self: center; }
  .services ul { grid-template-columns: repeat(2, minmax(0, 1fr)); row-gap: 1.8rem; }
  .extra { display: none; }
  .compare .pet-0, .compare .pet-1 { grid-column: 1; }
  .compare .pet-1 { margin-top: 1rem; }
}
</style>
