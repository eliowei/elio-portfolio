<template>
  <div ref="root" class="lm">
    <p class="notice">虛構活動概念提案・表單不會傳送資料</p>

    <header class="top" @keydown.esc="menuOpen = false">
      <a href="#top" class="logo">巷口出攤<small lang="en">LANE MARKET</small></a>
      <button
        type="button" class="menu-button" :aria-expanded="menuOpen" :aria-label="menuOpen ? '關閉選單' : '開啟選單'"
        aria-controls="lm-nav" @click="menuOpen = !menuOpen"
      >
        <span /><span /><span />
      </button>
      <nav id="lm-nav" :class="{ open: menuOpen }" aria-label="主要導覽">
        <a v-for="link in links" :key="link.href" :href="link.href" @click="menuOpen = false">{{ link.label }}</a>
        <a href="#ticket" class="btn yellow" @click="menuOpen = false">免費索票 ↗</a>
      </nav>
    </header>

    <main id="top">
      <section class="hero grain" aria-labelledby="lm-title">
        <div class="hero-title">
          <h1 id="lm-title"><span class="line">巷口</span><span class="line">出攤</span></h1>
          <p class="latin" lang="en">LANE<br>MARKET</p>
          <p class="script">週末就出來走走</p>
          <div ref="heroActions" class="actions">
            <a href="#ticket" class="btn navy">免費索票 →</a>
            <a href="#faq" class="text-link" @click="openStallAnswer">我要擺攤</a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="photo-frame"><img :src="photo(16063769)" alt="週末市集的白色帳篷下擠滿逛攤的人" width="1400" height="933" fetchpriority="high"></div>
          <span class="tape" aria-hidden="true" />
          <p class="sticker">免費<br>入場</p>
          <div class="date-ticket">
            <p><b>03.13 — 03.14</b><br><b>11:00 – 19:00</b><br>南河倉庫廣場</p>
            <span class="barcode" aria-hidden="true" />
          </div>
        </div>
      </section>

      <div class="marquee grain" aria-hidden="true">
        <div><span v-for="n in 16" :key="n">{{ topics[(n - 1) % topics.length] }}<i>★</i></span></div>
      </div>

      <section id="info" class="info paper" aria-labelledby="lm-info">
        <div>
          <p class="kicker" lang="en">01 / WHAT’S ON</p>
          <h2 id="lm-info">兩天都在忙什麼</h2>
          <div class="tabs" role="group" aria-label="選擇日期">
            <button v-for="(day, index) in days" :key="day.label" type="button" :aria-pressed="dayIndex === index" @click="dayIndex = index">{{ day.label }}</button>
          </div>
          <div class="schedule-stack">
            <ol v-for="(day, index) in days" :key="day.label" class="schedule" :class="{ active: dayIndex === index }" :aria-label="day.label">
              <li v-for="slot in day.slots" :key="slot.time">
                <time>{{ slot.time }}</time>
                <div><h3>{{ slot.title }}</h3><p>{{ slot.text }}</p></div>
                <span>{{ slot.place }}</span>
              </li>
            </ol>
          </div>
          <dl class="visit">
            <div><dt>捷運</dt><dd>南河站 2 號出口步行 6 分鐘</dd></div>
            <div><dt>公車</dt><dd>倉庫廣場站下車</dd></div>
            <div><dt>入場</dt><dd>免費 寵物請牽繩</dd></div>
          </dl>
        </div>
        <div class="collage">
          <figure class="shot one"><img :src="photo(2159062)" alt="咖啡師拿著手沖壺注水" width="900" height="600" loading="lazy"></figure>
          <figure class="shot two"><img :src="photo(32757428)" alt="市集攤位上整箱的舊明信片和書" width="900" height="600" loading="lazy"></figure>
          <p class="scribble" lang="en">coffee,<br>handmade,<br>old goods,<br>&amp; more!</p>
        </div>
      </section>

      <section id="map" class="map-section grain" aria-labelledby="lm-map">
        <div class="map-head">
          <div>
            <p class="kicker" lang="en">02 / EXPLORE THE MARKET</p>
            <h2 id="lm-map">今天想逛哪一攤</h2>
          </div>
          <div class="chips" role="group" aria-label="依分類篩選攤位">
            <button v-for="item in filters" :key="item.key" type="button" :aria-pressed="filter === item.key" @click="applyFilter(item.key)">{{ item.label }}</button>
          </div>
        </div>
        <div class="map-body">
          <div class="floor">
            <template v-for="(stall, index) in stalls" :key="stall.id">
              <p v-if="index === 12" class="aisle">主要走道</p>
              <button
                type="button" class="stall" :class="[stall.id[0]!.toLowerCase(), { dim: filter !== 'all' && stall.cat !== filter }]"
                :aria-pressed="selected.id === stall.id" :aria-label="`${stall.id} ${stall.name} ${categoryName(stall.cat)}`" @click="selected = stall"
              >{{ stall.id }}</button>
            </template>
          </div>
          <article class="stall-card" aria-live="polite">
            <h3><b>{{ selected.id }}</b>{{ selected.name }}</h3>
            <p>{{ categoryName(selected.cat) }}・{{ selected.when }}<br>{{ selected.text }}</p>
            <div class="stall-photos">
              <img
                v-for="(id, cat) in categoryPhoto" :key="cat" :src="photo(id)" :class="{ active: selected.cat === cat }"
                :alt="selected.cat === cat ? `${categoryName(cat)}攤位示意照片` : ''" :aria-hidden="selected.cat !== cat"
                width="700" height="460" loading="lazy"
              >
            </div>
          </article>
        </div>
      </section>

      <section id="highlights" class="highlights paper" aria-labelledby="lm-highlights">
        <div>
          <p class="kicker" lang="en">03 / HIGHLIGHTS</p>
          <h2 id="lm-highlights">不只是市集</h2>
          <p>還有手作音樂交換<br>和很多意想不到的相遇</p>
        </div>
        <ul>
          <li v-for="item in highlights" :key="item.label">
            <figure><img :src="photo(item.id)" :alt="item.alt" width="800" height="600" loading="lazy"><figcaption>{{ item.label }}</figcaption></figure>
          </li>
        </ul>
      </section>

      <section class="closing grain">
        <div id="faq">
          <p class="kicker" lang="en">04 / FAQ</p>
          <h2>常見問題</h2>
          <details v-for="item in faqs" :key="item.q" ref="faqItems">
            <summary>{{ item.q }}</summary>
            <p>{{ item.a }}</p>
          </details>
        </div>
        <div id="ticket">
          <h2>免費索票</h2>
          <p>留下資訊取得入場電子票</p>
          <form ref="formEl" @submit.prevent="issueTicket">
            <label>姓名<input v-model="form.name" required autocomplete="name"></label>
            <label>Email<input v-model="form.email" type="email" required autocomplete="email"></label>
            <label>參加日期
              <select v-model="form.day" required>
                <option v-for="day in days" :key="day.label">{{ day.label }}</option>
              </select>
            </label>
            <button type="submit" class="btn navy">索取免費票 →</button>
          </form>
        </div>
      </section>
    </main>

    <footer class="grain">
      <p class="logo">巷口出攤<small lang="en">LANE MARKET</small></p>
      <p class="when"><span>03.13 — 03.14</span><span>11:00 – 19:00</span><span>南河倉庫廣場</span></p>
      <p class="credits"><span>虛構活動概念提案</span><span>示意照片取自 Pexels</span><NuxtLink to="/">Concept by Elio Wei</NuxtLink></p>
    </footer>

    <dialog ref="ticketDialog" class="ticket-dialog" aria-label="示意入場票券" @click.self="ticketDialog?.close()">
      <div class="stub">
        <div>
          <p class="stub-title">巷口出攤</p>
          <p>{{ form.name }}　{{ form.day }}<br>11:00 – 19:00　南河倉庫廣場</p>
          <p class="fine">示意票券 資料沒有傳送出去</p>
        </div>
        <div class="stub-end"><span class="barcode" aria-hidden="true" /><b>免費入場</b></div>
      </div>
      <button type="button" class="btn yellow" autofocus @click="ticketDialog?.close()">收下票券</button>
    </dialog>

    <button type="button" class="to-top" :class="{ 'is-visible': !heroVisible }" aria-label="回到頁面最上方" @click="toTop">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5m-6 6 6-6 6 6" /></svg>
    </button>
    <a href="#ticket" class="btn red sticky-cta" :class="{ 'is-hidden': heroVisible }" @click="stickyClick">免費索票 →</a>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'

definePageMeta({ layout: false })
useSeoMeta({
  title: '巷口出攤｜週末市集活動頁概念提案',
  description: '虛構週末市集「巷口出攤」的一頁式活動網站概念提案：時間表、攤位地圖與免費索票。'
})

// Photos from Pexels (https://www.pexels.com/photo/<id>/), free to use under the Pexels license.
const photo = (id: number) => `/images/demo/lane-market/pexels-photo-${id}.jpeg`

const links = [
  { href: '#info', label: '活動資訊' },
  { href: '#map', label: '攤位地圖' },
  { href: '#highlights', label: '精彩內容' },
  { href: '#faq', label: '常見問題' }
]
const topics = ['手作', '咖啡', '舊物', '植物']
const days = [
  { label: '週六 3/13', slots: [
    { time: '11:00', title: '開市與早鳥市集', text: '咖啡車和麵包攤搶先開', place: '主廣場' },
    { time: '14:00', title: '手作體驗桌', text: '陶土 印章 植栽', place: 'B 區' },
    { time: '17:30', title: '黃昏小舞台', text: '兩組在地樂團', place: '南側舞台' }
  ] },
  { label: '週日 3/14', slots: [
    { time: '11:00', title: '舊物交換', text: '帶一件換一件', place: 'C 區' },
    { time: '14:00', title: '攤主開講', text: '小品牌怎麼開始', place: '主廣場' },
    { time: '17:00', title: '收攤抽獎', text: '憑票券參加', place: '服務台' }
  ] }
]

type Category = 'coffee' | 'craft' | 'vintage' | 'plant'
const filters: { key: Category | 'all', label: string }[] = [
  { key: 'all', label: '全部' },
  { key: 'coffee', label: '咖啡輕食' },
  { key: 'craft', label: '手作' },
  { key: 'vintage', label: '舊物' },
  { key: 'plant', label: '植物' }
]
const categoryName = (key: Category) => filters.find(item => item.key === key)!.label
const categoryPhoto: Record<Category, number> = { coffee: 2159062, craft: 18486386, vintage: 32757428, plant: 5709225 }
const stall = (id: string, cat: Category, name: string, text: string, when = '週六週日都在') => ({ id, cat, name, text, when })
// Order follows the floor plan: two rows of six, the aisle, then the last row.
const stalls = [
  stall('A1', 'coffee', '巷尾麵包', '天然酵母麵包與季節果醬'),
  stall('A2', 'coffee', '慢慢手沖', '自家烘焙豆與冷萃'),
  stall('B1', 'craft', '土日陶作', '手捏杯盤 現場可試做'),
  stall('B2', 'craft', '刻章小舖', '橡皮章客製與體驗', '週六限定'),
  stall('C1', 'vintage', '舊書一箱', '二手書與老明信片'),
  stall('C2', 'vintage', '阿嬤的抽屜', '老器皿和生活雜貨'),
  stall('A3', 'coffee', '米香點心', '手作米餅與茶凍'),
  stall('A4', 'coffee', '青草茶亭', '無糖草本茶'),
  stall('B3', 'craft', '線上線下', '手織提袋與杯墊'),
  stall('B4', 'craft', '木頭有事', '小木器與修補教學', '週日限定'),
  stall('C3', 'vintage', '黑膠轉角', '二手唱片試聽'),
  stall('C4', 'vintage', '衣櫥再生', '古著與改製衣物'),
  stall('B5', 'craft', '紙的練習', '手工裝訂筆記本'),
  stall('B6', 'craft', '蠟燭午後', '大豆蠟燭調香'),
  stall('C5', 'plant', '陽台花房', '耐陰盆栽與換盆服務'),
  stall('C6', 'plant', '多肉收藏', '多肉植物與手作盆器'),
  stall('A5', 'plant', '香草角落', '料理香草小苗'),
  stall('A6', 'coffee', '收攤鹹食', '飯糰與熱湯')
]
const highlights = [
  { id: 18486386, label: '手作體驗', alt: '雙手在轉盤上拉坯' },
  { id: 19138690, label: '小舞台演出', alt: '歌手在戶外彈吉他演唱' },
  { id: 31826316, label: '二手與舊物', alt: '衣架上掛滿古著外套' }
]
const faqs = [
  { q: '需要門票嗎？', a: '免費入場。索票是為了掌握人數，現場出示電子票即可。' },
  { q: '可以帶寵物嗎？', a: '可以，請全程牽繩並自行清理。' },
  { q: '有停車位嗎？', a: '場地沒有停車場，建議搭乘大眾運輸。' },
  { q: '遇雨會取消嗎？', a: '照常舉行；若氣象署發布停班停課，活動取消。' },
  { q: '怎麼申請擺攤？', a: '這是展示頁面，沒有開放報名。正式活動會在這裡放報名方式。' }
]

const root = ref<HTMLElement | null>(null)
const menuOpen = ref(false)
const dayIndex = ref(0)
const filter = ref<Category | 'all'>('all')
const selected = ref(stalls[1]!)
function applyFilter(key: Category | 'all') {
  filter.value = key
  if (key !== 'all' && selected.value.cat !== key) selected.value = stalls.find(item => item.cat === key)!
}

const faqItems = ref<HTMLDetailsElement[]>([])
function openStallAnswer() {
  const last = faqItems.value.at(-1)
  if (last) last.open = true
}

const form = reactive({ name: '', email: '', day: days[0]!.label })
const formEl = ref<HTMLFormElement | null>(null)
const ticketDialog = ref<HTMLDialogElement | null>(null)
const issueTicket = () => ticketDialog.value?.showModal()
// While the form is on screen the fixed button submits it, so the browser points at the first missing field.
function stickyClick(event: MouseEvent) {
  const box = formEl.value?.getBoundingClientRect()
  if (!box || box.top > window.innerHeight * .6 || box.bottom < 0) return
  event.preventDefault()
  formEl.value?.requestSubmit()
}

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
function toTop() {
  window.scrollTo({ top: 0, behavior: reducedMotion() ? 'instant' : 'smooth' })
  root.value?.querySelector<HTMLElement>('.top .logo')?.focus({ preventScroll: true })
}

// The fixed buttons stay out of the way while the hero's own button is on screen.
const heroActions = ref<HTMLElement | null>(null)
const heroVisible = ref(true)
let observer: IntersectionObserver | undefined
let motion: gsap.MatchMedia | undefined
onMounted(() => {
  if ('IntersectionObserver' in window && heroActions.value) {
    observer = new IntersectionObserver(([entry]) => {
      heroVisible.value = !!entry?.isIntersecting || (entry?.boundingClientRect.top ?? 0) > 0
    })
    observer.observe(heroActions.value)
  }
  motion = gsap.matchMedia()
  motion.add('(prefers-reduced-motion: no-preference)', () => {
    const all = (selector: string) => Array.from(root.value?.querySelectorAll<HTMLElement>(selector) ?? [])
    // Hero: the title is stamped down, then the photo is taped on and the sticker pops.
    gsap.timeline({ defaults: { ease: 'back.out(1.6)' } })
      .from(all('.hero .line'), { scale: 1.9, rotate: -9, opacity: 0, duration: .55, stagger: .2, ease: 'power4.in' })
      .from(all('.photo-frame'), { x: 90, rotate: 7, opacity: 0, duration: .7 }, .35)
      .from(all('.tape'), { scaleX: 0, duration: .3, ease: 'power2.out' }, .95)
      .from(all('.sticker'), { scale: 0, rotate: -120, duration: .7 }, 1)
      .from(all('.date-ticket'), { y: 60, rotate: 10, opacity: 0, duration: .6 }, 1.1)
      .from(all('.script, .latin, .actions'), { y: 20, opacity: 0, stagger: .12, duration: .5, ease: 'power2.out' }, .8)
    gsap.to(all('.photo-frame img'), { yPercent: 9, ease: 'none', scrollTrigger: { trigger: all('.hero')[0], start: 'top top', end: 'bottom top', scrub: true } })

    const onEnter = (trigger: HTMLElement | undefined) => ({ trigger, start: 'top 82%', once: true })
    for (const heading of all('main h2')) gsap.from(heading, { x: -60, opacity: 0, duration: .6, ease: 'power3.out', scrollTrigger: onEnter(heading) })
    all('.shot').forEach((shot, index) => gsap.from(shot, { y: -70, rotate: index ? 14 : -14, opacity: 0, duration: .8, delay: index * .2, ease: 'back.out(1.4)', scrollTrigger: onEnter(shot) }))
    gsap.from(all('.stall'), { scale: 0, duration: .45, ease: 'back.out(2)', stagger: { each: .04, from: 'start' }, clearProps: 'transform', scrollTrigger: onEnter(all('.floor')[0]) })
    gsap.from(all('.highlights li'), { y: 90, rotate: 9, opacity: 0, duration: .7, stagger: .16, ease: 'back.out(1.5)', clearProps: 'transform,opacity', scrollTrigger: onEnter(all('.highlights ul')[0]) })
  })
})
onBeforeUnmount(() => {
  observer?.disconnect()
  motion?.revert()
})
</script>

<style scoped>
.lm {
  --red: #d2381f; --yellow: #ffc928; --navy: #17245c; --paper: #f8efe0; --blue: #bcc8f7;
  --head: 'Noto Sans TC', 'Microsoft JhengHei', sans-serif; --hand: 'LXGW WenKai TC', 'DFKai-SB', cursive;
  background: var(--paper); color: var(--navy); font: 500 16px/1.7 var(--head); overflow-x: clip;
}
.lm ul, .lm ol { list-style: none; margin: 0; padding: 0; }
.lm h1, .lm h2, .lm h3 { font-weight: 900; line-height: 1.2; }
.lm h2 { font-size: clamp(2rem, 4.6vw, 3.4rem); }
.lm section[id], .lm div[id] { scroll-margin-top: 1rem; }
.lm a:focus-visible, .lm button:focus-visible, .lm summary:focus-visible, .lm input:focus-visible, .lm select:focus-visible { outline: 3px solid #fff; outline-offset: 2px; box-shadow: 0 0 0 6px var(--navy); }
/* Printed-paper grain, reusing the site's paper texture. */
.grain { background-image: url('/images/sketchbook/paper.webp'); background-size: 420px; background-blend-mode: multiply; }
.paper { background-color: var(--paper); }
.kicker { font-weight: 900; letter-spacing: .06em; color: var(--red); }
.btn { display: inline-flex; align-items: center; justify-content: center; gap: .4rem; min-height: 50px; padding: 0 1.5rem; font: 900 1rem var(--head); cursor: pointer; }
.btn.yellow { background: var(--yellow); color: var(--navy); rotate: -1.5deg; }
.btn.navy { background: var(--navy); color: #fff; }
.btn.red { background: var(--red); color: #fff; }
.text-link { display: inline-block; padding-block: .6rem; font-weight: 900; text-decoration: underline; text-underline-offset: .35em; }
.logo { font-size: 1.6rem; font-weight: 900; line-height: 1.1; }
.logo small { display: block; font-size: .7rem; letter-spacing: .24em; }

.notice { background: #14130f; color: #fff; text-align: center; font-size: .875rem; padding: .25rem 1rem; }
.top { position: relative; z-index: 10; display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: .9rem clamp(1rem, 4vw, 3.5rem); background: var(--red) url('/images/sketchbook/paper.webp'); background-size: 420px; background-blend-mode: multiply; color: #fff; }
.top nav { display: flex; align-items: center; gap: 2.2rem; font-weight: 700; }
.top nav a:not(.btn) { padding-block: .6rem; }
.menu-button { display: none; }

.hero { display: grid; grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr); gap: 2rem; align-items: center; padding: 1.5rem clamp(1rem, 4vw, 3.5rem) 4.5rem; background-color: var(--red); color: #fff; }
.hero-title { position: relative; z-index: 2; }
.hero h1 { font-size: clamp(4.5rem, min(15.5vw, 23svh), 13rem); line-height: .98; letter-spacing: -.04em; rotate: -5deg; margin-block: .5rem .4rem; }
.hero .line { display: block; width: max-content; color: #fdf3e0; filter: drop-shadow(5px 6px 0 #17245c55); }
.hero .line + .line { color: var(--yellow); margin-inline-start: .55em; filter: drop-shadow(7px 8px 0 var(--navy)); }
.latin { font: 900 clamp(1rem, 2.6svh, 1.35rem)/1.35 Georgia, serif; letter-spacing: .08em; }
.script { font: 400 clamp(1.8rem, 3.4vw, 2.8rem) var(--hand); rotate: -5deg; width: max-content; max-width: 100%; border-bottom: 3px solid #fff; margin-block: .4rem 1rem; }
.actions { display: flex; flex-wrap: wrap; align-items: center; gap: 1.5rem; }
.hero-visual { position: relative; min-width: 0; padding-block: 1rem 3rem; }
.photo-frame { overflow: hidden; aspect-ratio: 5 / 4; max-height: max(340px, calc(100svh - 210px)); width: 100%; border: 8px solid #fdf3e0; rotate: 2.5deg; clip-path: polygon(0 3%, 18% 0, 39% 2%, 62% 0, 83% 2%, 100% 0, 98% 34%, 100% 66%, 98% 100%, 74% 98%, 48% 100%, 22% 97%, 1% 100%, 2% 63%, 0 34%); }
.photo-frame img { width: 100%; height: 112%; margin-top: -6%; object-fit: cover; }
.tape { position: absolute; top: .2rem; left: -1.2rem; width: 150px; height: 38px; rotate: -32deg; background: #ecd9b0e6; }
.sticker { position: absolute; top: -.5rem; right: -.5rem; display: grid; place-content: center; width: clamp(96px, 12vw, 160px); aspect-ratio: 1; border-radius: 50%; background: var(--yellow); color: var(--navy); font: 900 clamp(1.3rem, 2.4vw, 2.1rem)/1.3 var(--head); text-align: center; rotate: 8deg; }
.date-ticket { position: absolute; right: 0; bottom: 0; display: flex; gap: 1rem; padding: .9rem 1.2rem; background: #fdf3e0; color: var(--navy); border: 3px solid var(--navy); rotate: -6deg; box-shadow: 6px 8px 0 #17245c55; }
.date-ticket b { font-size: 1.35rem; }
.barcode { display: block; width: 38px; align-self: stretch; min-height: 60px; background: repeating-linear-gradient(#111 0 3px, transparent 3px 6px, #111 6px 7px, transparent 7px 11px); }

.marquee { position: relative; z-index: 3; overflow: hidden; margin: -2rem -2% -1rem; padding-block: .8rem; background-color: var(--navy); color: var(--yellow); rotate: -1.4deg; font-size: 1.5rem; font-weight: 900; white-space: nowrap; }
.marquee div { display: flex; width: max-content; }
.marquee i { font-style: normal; margin-inline: 1.8rem; }

.info { display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(0, .9fr); gap: clamp(2rem, 5vw, 4rem); padding: clamp(4rem, 7vw, 6rem) clamp(1rem, 4vw, 3.5rem) 4rem; }
.tabs { display: flex; flex-wrap: wrap; gap: .6rem; margin-block: 1.2rem; }
.tabs button { min-height: 48px; padding: 0 1.8rem; border: 3px solid var(--navy); font-weight: 900; cursor: pointer; }
.tabs button[aria-pressed="true"] { background: var(--navy); color: #fff; }
.schedule li { display: grid; grid-template-columns: 6.5rem minmax(0, 1fr) auto; gap: 1rem; align-items: center; padding-block: 1rem; border-top: 2px solid var(--navy); }
.schedule time { font: 700 1.75rem Georgia, serif; }
.schedule h3 { font-size: 1.2rem; }
.schedule span { font-weight: 900; }
.visit { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; margin-top: 1.2rem; }
.visit div { border-top: 6px solid var(--red); padding-top: .5rem; }
.visit dt { font-weight: 900; }
.collage { position: relative; min-height: 460px; }
.shot { position: absolute; margin: 0; border: 8px solid #fffaf0; box-shadow: 0 10px 24px #17245c33; }
.shot img { display: block; width: 100%; aspect-ratio: 4 / 3; object-fit: cover; }
.shot::before { content: ''; position: absolute; top: -18px; left: 18%; width: 90px; height: 28px; rotate: -8deg; background: #ecd9b0d9; }
.shot.one { top: 0; right: 0; width: 82%; rotate: 3deg; }
.shot.two { bottom: 0; right: 2%; width: 66%; rotate: -4deg; }
.scribble { position: absolute; left: 0; bottom: 12%; font: 700 1.6rem/1.2 'Caveat', var(--hand); rotate: -12deg; }

.map-section { padding: 3.5rem clamp(1rem, 4vw, 3.5rem) 4rem; background-color: var(--navy); color: #fdf3e0; clip-path: polygon(0 1.6%, 14% 0, 33% 1.2%, 57% 0, 76% 1.4%, 100% 0, 100% 99%, 79% 100%, 52% 98.6%, 27% 100%, 0 98.8%); }
.map-section .kicker { color: var(--yellow); }
.map-head { display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 1rem 2rem; margin-bottom: 1.5rem; }
.chips { display: flex; flex-wrap: wrap; gap: .5rem; }
.chips button { min-height: 44px; padding: 0 1.1rem; border: 2px solid #fdf3e0; border-radius: 99px; font-weight: 700; cursor: pointer; }
.chips button[aria-pressed="true"] { background: var(--yellow); border-color: var(--yellow); color: var(--navy); }
.map-body { display: grid; grid-template-columns: minmax(0, 2.1fr) minmax(0, 1fr); gap: 1.5rem; align-items: stretch; }
.floor { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: clamp(.35rem, 1.1vw, .9rem); align-content: center; padding: clamp(.6rem, 1.8vw, 1.4rem); background: var(--paper); color: var(--navy); }
.aisle { grid-column: 1 / -1; text-align: center; font-weight: 900; letter-spacing: 1em; border-block: 2px dashed var(--navy); padding-block: .7rem; }
.stall { min-height: 58px; border: 2px solid var(--navy); font-weight: 900; cursor: pointer; }
.stall.a { background: var(--yellow); }
.stall.b { background: var(--red); color: #fff; }
.stall.c { background: var(--blue); }
.stall.dim { opacity: .22; }
.stall[aria-pressed="true"] { outline: 4px solid var(--navy); outline-offset: 3px; }
.stall-card { padding: 1.2rem; background: var(--paper); color: var(--navy); rotate: 1deg; }
.stall-card h3 { display: flex; gap: 1rem; font-size: 1.5rem; margin-bottom: .5rem; }
.stall-photos { display: grid; margin-top: 1rem; }
.stall-photos img { grid-area: 1 / 1; width: 100%; aspect-ratio: 3 / 2; object-fit: cover; opacity: 0; }
.stall-photos img.active { opacity: 1; }
.schedule-stack { display: grid; }
.schedule { grid-area: 1 / 1; opacity: 0; visibility: hidden; }
.schedule.active { opacity: 1; visibility: visible; }

.highlights { display: grid; grid-template-columns: minmax(0, .7fr) minmax(0, 2.3fr); gap: 2rem; align-items: center; padding: 4rem clamp(1rem, 4vw, 3.5rem); }
.highlights ul { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.4rem; }
.highlights figure { position: relative; margin: 0; }
.highlights img { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; clip-path: polygon(4% 8%, 38% 0, 70% 5%, 98% 0, 100% 52%, 94% 96%, 61% 100%, 29% 93%, 0 100%, 3% 51%); }
.highlights figcaption { position: absolute; left: -.3rem; bottom: .4rem; padding: .35rem 1rem; background: var(--yellow); font-weight: 900; rotate: -5deg; }

.closing { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: clamp(2rem, 6vw, 5rem); padding: 3.5rem clamp(1rem, 4vw, 3.5rem) 4rem; background-color: var(--yellow); }
.closing .kicker { color: #9c2512; }
details { border-bottom: 2px solid var(--navy); }
summary { display: flex; justify-content: space-between; gap: 1rem; padding-block: .85rem; font-weight: 900; cursor: pointer; list-style: none; }
summary::-webkit-details-marker { display: none; }
summary::after { content: '+'; font-size: 1.4rem; line-height: 1; }
details[open] summary::after { content: '−'; }
details p { padding-bottom: 1rem; }
form { display: grid; gap: .9rem; margin-top: 1.2rem; }
label { display: grid; gap: .25rem; font-weight: 900; }
input, select { width: 100%; min-height: 50px; padding: .4rem .8rem; border: 3px solid var(--navy); background: #fffaf0; color: var(--navy); font: 500 16px var(--head); }

footer { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem 2rem; padding: 1.6rem clamp(1rem, 4vw, 3.5rem); background-color: var(--navy); color: #fdf3e0; }
footer .when, .credits { display: flex; flex-wrap: wrap; gap: .25rem 1.6rem; }
.credits { width: 100%; font-size: .875rem; color: #c9d0f0; }
.credits a { text-decoration: underline; }

.ticket-dialog { margin: auto; width: min(92vw, 560px); padding: 0; border: 0; background: transparent; text-align: center; overflow: visible; }
.ticket-dialog::backdrop { background: #101638d9; }
.stub { display: grid; grid-template-columns: minmax(0, 1fr) auto; margin-bottom: 1.4rem; background: var(--paper); color: var(--navy); border: 4px solid var(--navy); text-align: start; }
.stub > div { padding: 1.2rem; }
.stub-title { font-size: 2rem; font-weight: 900; }
.stub .fine { font-size: .875rem; margin-top: .6rem; }
.stub-end { display: grid; justify-items: center; align-content: center; gap: .6rem; border-left: 4px dashed var(--navy); background: var(--yellow); }
.stub-end .barcode { width: 54px; height: 90px; }

.to-top { position: fixed; z-index: 15; right: 1.25rem; bottom: 1.5rem; display: grid; place-items: center; width: 50px; height: 50px; border: 3px solid var(--navy); border-radius: 50%; background: var(--yellow); color: var(--navy); cursor: pointer; visibility: hidden; opacity: 0; translate: 0 14px; }
.to-top.is-visible { visibility: visible; opacity: 1; translate: 0; }
.to-top svg { width: 22px; height: 22px; fill: none; stroke: currentColor; stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; }
.sticky-cta { display: none; }

@media (prefers-reduced-motion: no-preference) {
  .marquee div { animation: lm-marquee 26s linear infinite; }
  .marquee:hover div { animation-play-state: paused; }
  .sticker { animation: lm-wobble 3.2s ease-in-out 2s infinite; }
  .btn { transition: translate .2s, box-shadow .2s; }
  .btn:hover { translate: 0 -3px; box-shadow: 4px 6px 0 #17245c55; }
  .stall { transition: translate .18s, opacity .25s; }
  .stall:hover { translate: 0 -4px; }
  .highlights img, .shot img { transition: scale .5s; }
  .highlights li:hover img { scale: 1.06; }
  .schedule { transition: opacity .3s, visibility .3s; }
  .schedule li { translate: 28px 0; transition: translate .35s ease-out; }
  .schedule.active li { translate: 0; }
  .schedule.active li:nth-child(2) { transition-delay: .05s; }
  .schedule.active li:nth-child(3) { transition-delay: .1s; }
  .stall-photos img { transition: opacity .3s; }
  /* The ticket comes out of the machine. */
  .ticket-dialog[open] .stub { animation: lm-print .9s steps(14) both; }
  details[open] p { animation: lm-drop .3s ease-out; }
  .to-top, .btn.sticky-cta { transition: opacity .3s, translate .3s, visibility .3s; }
}
@keyframes lm-marquee { to { transform: translateX(-50%); } }
@keyframes lm-wobble { 0%, 100% { rotate: 8deg; } 50% { rotate: -6deg; scale: 1.05; } }
@keyframes lm-print { from { clip-path: inset(0 0 100% 0); translate: 0 -40px; } to { clip-path: inset(0); translate: 0; } }
@keyframes lm-drop { from { opacity: 0; translate: 0 -8px; } }

@media (max-width: 900px) {
  .hero, .info, .map-body, .highlights, .closing { grid-template-columns: minmax(0, 1fr); }
  .hero h1 { font-size: clamp(5rem, 26vw, 11rem); }
  .photo-frame { max-height: none; }
  .collage { min-height: 0; height: min(100vw, 520px); }
}
@media (max-width: 760px) {
  .menu-button { display: block; position: relative; width: 48px; height: 48px; border: 2px solid #fff; cursor: pointer; }
  .menu-button span { position: absolute; left: 12px; width: 20px; height: 3px; background: currentColor; }
  .menu-button span:nth-child(1) { top: 14px; }
  .menu-button span:nth-child(2) { top: 21px; }
  .menu-button span:nth-child(3) { top: 28px; }
  .menu-button[aria-expanded="true"] span:nth-child(1) { translate: 0 7px; rotate: 45deg; }
  .menu-button[aria-expanded="true"] span:nth-child(2) { opacity: 0; }
  .menu-button[aria-expanded="true"] span:nth-child(3) { translate: 0 -7px; rotate: -45deg; }
  .top nav { position: absolute; inset: 100% 0 auto; flex-direction: column; align-items: stretch; gap: 0; padding: .6rem 1rem 1.2rem; background: var(--navy); visibility: hidden; opacity: 0; translate: 0 -10px; clip-path: inset(0 0 100% 0); }
  .top nav.open { visibility: visible; opacity: 1; translate: 0; clip-path: inset(0); }
  .hero { padding-bottom: 4rem; }
  .highlights ul { grid-template-columns: minmax(0, 1fr); }
  .schedule li { grid-template-columns: 4.8rem minmax(0, 1fr); gap: .6rem; }
  .schedule time { font-size: 1.3rem; }
  .schedule span { grid-column: 2; }
  .visit { grid-template-columns: minmax(0, 1fr); }
  .aisle { letter-spacing: .5em; }
  .stall { min-height: 48px; }
  .stub { grid-template-columns: minmax(0, 1fr); }
  .stub-end { border-left: 0; border-top: 4px dashed var(--navy); }
  .stub-end .barcode { height: 50px; width: 90px; }
  /* On phones the fixed button submits the form, so the inline copy is hidden. */
  form .btn { display: none; }
  footer { padding-bottom: calc(6rem + env(safe-area-inset-bottom)); }
  .to-top { right: 1rem; bottom: calc(5rem + env(safe-area-inset-bottom)); }
  .sticky-cta { display: flex; position: fixed; z-index: 20; inset: auto 1rem calc(.75rem + env(safe-area-inset-bottom)); box-shadow: 0 6px 20px #0005; }
  .sticky-cta.is-hidden { visibility: hidden; opacity: 0; translate: 0 140%; }
}
@media (max-width: 760px) and (prefers-reduced-motion: no-preference) {
  .menu-button span { transition: translate .3s, rotate .3s, opacity .2s; }
  .top nav { transition: clip-path .4s cubic-bezier(.2, .7, .2, 1), opacity .25s, translate .4s, visibility .4s; }
  #lm-nav a { opacity: 0; translate: -24px 0; transition: opacity .2s, translate .2s; }
  #lm-nav.open a { opacity: 1; translate: 0; transition: opacity .3s, translate .35s; }
  #lm-nav.open a:nth-child(2) { transition-delay: .06s; }
  #lm-nav.open a:nth-child(3) { transition-delay: .12s; }
  #lm-nav.open a:nth-child(4) { transition-delay: .18s; }
  #lm-nav.open a:nth-child(5) { transition-delay: .24s; }
}
</style>
