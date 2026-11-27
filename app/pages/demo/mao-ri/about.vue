<template>
  <div ref="root">
    <section class="intro mr-tear-bottom">
      <img :src="maoriImg('groomer-wide')" alt="美容師小羽在木質店內幫貴賓犬梳毛" fetchpriority="high">
      <div>
        <h1>關於我們</h1>
        <p>一間把毛孩當家人<br>用溫柔和耐心陪伴牠們的<br>寵物美容小店</p>
      </div>
    </section>

    <section class="story mr-wrap">
      <img :src="maoriImg('house')" alt="水彩手繪的毛日小店" data-mr="mask" loading="lazy">
      <div>
        <h2>毛日的開始</h2>
        <p>剛學美容的時候<br>店裡一天要接很多組<br>很多毛孩從頭到尾都在發抖</p>
        <p>後來我在巷子裡租下這間老屋<br>一次只約一位<br>慢一點 牠們才有時間認識我<br>也認識吹風機</p>
      </div>
      <MaoriPhoto name="shop-2" alt="店裡的木長椅等候角落" :tilt="3" tape caption="等主人來接的角落" />
    </section>

    <section class="team mr-wrap" aria-labelledby="mr-team">
      <h2 id="mr-team">我們的美容師</h2>
      <ul>
        <li v-for="(person, index) in maoriGroomers" :key="person.name">
          <MaoriPhoto :name="person.photo" :alt="person.alt" :tilt="[-2.5, 1.5, -1][index]" ratio="4 / 5" :tape="index !== 1" />
          <h3>{{ person.name }}<small>{{ person.role }}</small></h3>
          <p class="focus">擅長 {{ person.focus }}</p>
          <blockquote class="mr-hand mr-lines">{{ person.words }}</blockquote>
        </li>
      </ul>
    </section>

    <section class="principles mr-wrap">
      <div class="mr-note promise">
        <h2>我們的照顧原則</h2>
        <ul>
          <li v-for="line in promises" :key="line">{{ line }}</li>
        </ul>
        <MaoriDoodle name="sleep" />
      </div>
    </section>

    <section class="space mr-wrap">
      <h2>環境與工具</h2>
      <div>
        <MaoriPhoto name="shop-1" alt="窗邊的美容檯與木層架" :tilt="-1.5" caption="靠窗的美容檯" />
        <MaoriPhoto name="tools-1" alt="木桌上的美容剪刀和梳子" :tilt="2.5" caption="每天消毒的工具" />
        <MaoriPhoto name="tools-2" alt="小羽扶著小狗的腳掌修毛" :tilt="-2" caption="腳底毛慢慢修" />
      </div>
      <p><NuxtLink :to="`${maoriBase}/services`" class="mr-more">看看我們能做什麼 →</NuxtLink></p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { maoriBase, maoriGroomers, maoriImg } from '~/data/maori'

definePageMeta({ layout: 'maori', pageTransition: { name: 'mr-page', mode: 'out-in' } })
useSeoMeta({ title: '關於我們｜毛日概念提案', description: '認識毛日的開店故事、美容師與照顧原則。' })

const promises = ['以毛孩的情緒為優先', '依毛況調整美容方式', '使用溫和安全的用品', '保持清潔舒適的環境']
const root = ref<HTMLElement | null>(null)
useMaoriMotion(root)
</script>

<style scoped>
.intro { position: relative; height: clamp(380px, 40vw, 520px); }
.intro img { width: 100%; height: 100%; object-fit: cover; object-position: 60% 35%; }
.intro::before { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, #f6efe3f2 0, #f6efe3cc 32%, #f6efe300 55%); }
.intro div { position: absolute; z-index: 1; inset: 0; display: flex; flex-direction: column; justify-content: center; max-width: 1280px; margin-inline: auto; padding-inline: var(--pad); }
h1 { font-family: var(--mr-hand); font-size: clamp(2.4rem, 6vw, 3.6rem); letter-spacing: .08em; line-height: 1.4; }
.intro p { margin-top: .8rem; font-size: 1.1rem; }

.story { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr) minmax(0, .8fr); gap: clamp(1.5rem, 4vw, 3.5rem); align-items: center; }
.story > img { width: 100%; }
.story p { margin-top: .9rem; }

.team > ul { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: clamp(1.5rem, 3.5vw, 3rem); align-items: start; margin-top: 2.2rem; }
/* The middle portrait sits lower so the row does not read as three equal cards. */
.team > ul > li:nth-child(2) { margin-top: 3rem; }
.team h3 { display: flex; flex-wrap: wrap; align-items: baseline; gap: .2rem .8rem; margin-top: 1.3rem; padding-bottom: .4rem; border-bottom: 2px solid var(--wood); }
.team h3 small { font-family: var(--mr-body); font-size: .85rem; font-weight: 400; }
.focus { margin-top: .6rem; font-size: .95rem; }
blockquote { margin: .6rem 0 0; font-size: 1.2rem; line-height: 1.9; }
.principles { display: flex; justify-content: center; }
.promise { width: min(34rem, 100%); rotate: 1deg; }
.promise ul { margin-top: .8rem; }
.promise li { padding-block: .55rem; border-bottom: 1px dashed var(--wood); }
.promise .mr-doodle { display: block; margin: .5rem 0 0 auto; width: 100px; }

.space > div { display: grid; grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr) minmax(0, 1fr); gap: 1.5rem; align-items: start; margin-block: 2rem 1.5rem; }
.space > div > :nth-child(2) { margin-top: 3rem; }

@media (max-width: 860px) {
  .story, .team > ul, .space > div { grid-template-columns: minmax(0, 1fr); }
  .team > ul > li { width: min(420px, 100%); justify-self: center; }
  .team > ul > li:nth-child(2) { margin-top: 0; }
  .intro { height: auto; }
  .intro img { height: 320px; }
  .intro::before { display: none; }
  .intro div { position: static; padding-block: 1.5rem 2rem; }
  .story > img { width: min(300px, 80%); justify-self: center; }
  .space > div > :nth-child(2) { margin-top: 0; }
}
</style>
