<template>
  <div ref="root" class="mo">
    <header class="top" @keydown.esc="menuOpen = false">
      <a href="#top" class="logo">晨間影像<small>MORNING ONLY</small></a>
      <button
        type="button" class="menu-button" :aria-expanded="menuOpen" :aria-label="menuOpen ? '關閉選單' : '開啟選單'"
        aria-controls="mo-nav" @click="menuOpen = !menuOpen"
      >
        <span /><span /><span />
      </button>
      <nav id="mo-nav" :class="{ open: menuOpen }" aria-label="主要導覽">
        <a v-for="link in links" :key="link.href" :href="link.href" @click="menuOpen = false">{{ link.label }}</a>
        <a href="#booking" class="btn" @click="menuOpen = false">詢問檔期 →</a>
      </nav>
    </header>

    <main id="top">
      <section class="hero" aria-labelledby="mo-title">
        <div class="hero-media">
          <div class="hero-depth">
            <img :src="photo(1415131)" alt="清晨逆光中，一對伴侶靠在一起看著遠方" width="2000" height="1333" fetchpriority="high">
          </div>
        </div>
        <div class="hero-light" aria-hidden="true" />
        <div class="hero-copy">
          <p class="concept">只拍早上｜虛構攝影品牌概念提案</p>
          <h1 id="mo-title">天剛亮的時候<br><span>人最不會裝</span></h1>
          <p>在你熟悉的地方<br>用晨光拍下伴侶家庭與個人的日常</p>
          <div ref="heroActions" class="actions">
            <a href="#booking" class="btn">詢問檔期 →</a>
            <a href="#works" class="text-link">瀏覽作品集</a>
          </div>
        </div>
        <svg class="wave" viewBox="0 0 1440 30" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 18C180 4 330 26 540 18S880 6 1080 16s260 8 360-4v18H0Z" />
        </svg>
      </section>

      <section class="wrap" aria-labelledby="mo-mornings">
        <div v-entrance class="section-head">
          <h2 id="mo-mornings">三個早晨 <i lang="en">Three Mornings</i></h2>
          <p>不同的關係 一樣的早晨<br>用晨光記錄那些自然又真實的片段</p>
        </div>
        <ul class="mornings">
          <li v-for="item in mornings" :key="item.type">
            <div class="photo"><img :src="photo(item.id)" :alt="item.alt" width="900" height="600" loading="lazy"></div>
            <h3><time>{{ item.time }}</time>{{ item.type }}<span>{{ item.kind }}</span></h3>
            <a href="#booking" class="text-link" @click="form.type = item.type">詢問這類拍攝 →</a>
          </li>
        </ul>
      </section>

      <section id="works" ref="worksSection" class="works" aria-labelledby="mo-works">
        <div v-entrance class="wrap works-head">
          <div class="section-head">
            <h2 id="mo-works" ref="worksTitle" tabindex="-1">{{ showAll ? '完整作品集' : '代表作' }} <i lang="en">Works</i></h2>
            <p>從清晨的光<br>到生活裡最真實的表情</p>
            <button type="button" class="btn outline" @click="toggleWorks">{{ showAll ? '返回代表作' : '查看完整作品集' }}</button>
          </div>
        </div>
        <div v-show="!showAll" ref="showcase" class="feature">
          <div
            class="stage" role="region" aria-roledescription="carousel" aria-label="代表作輪播"
            @pointerenter="hold($event, true)" @pointerleave="hold($event, false)"
            @focusin="holdForKeyboard" @focusout="held = false"
          >
            <div class="frame">
              <div ref="track" class="track" @scroll.passive="onSlide">
                <figure
                  v-for="(item, index) in featured" :key="item.id" class="slide" role="group"
                  :aria-label="`${index + 1} / ${featured.length}`" :inert="index !== current"
                >
                  <img :src="photo(item.id)" :alt="item.alt" :style="{ objectPosition: item.focus }" width="2000" height="1333" loading="lazy">
                  <figcaption>
                    <p><time>{{ item.time }}</time>　{{ item.type }}</p>
                    <h3>{{ item.line }}</h3>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div class="controls">
              <button type="button" class="btn" @click="toggleWorks">查看完整作品集</button>
              <div class="pager">
                <button type="button" aria-label="上一張" @click="go(current - 1)">‹</button>
                <button
                  v-for="(item, index) in featured" :key="item.id" type="button" class="dot"
                  :aria-label="`第 ${index + 1} 張：${item.type}`" :aria-current="index === current" @click="go(index)"
                />
                <button type="button" aria-label="下一張" @click="go(current + 1)">›</button>
                <button type="button" class="play" @click="playing = !playing">{{ playing ? '暫停' : '播放' }}</button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="showAll" class="wrap wall-wrap">
          <div class="wall">
            <button v-for="(work, index) in works" :key="work.id" type="button" :aria-label="`放大檢視：${work.alt}`" @click="openPhoto(index)">
              <img :src="photo(work.id)" :alt="work.alt" width="1000" height="667">
              <span class="sheen" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      <section id="plans" class="wrap plans" aria-labelledby="mo-plans">
        <div v-entrance>
          <h2 id="mo-plans">你想留多長的<wbr>早晨</h2>
          <p>從日出開始<br>選一段屬於你的生活時光</p>
          <p class="fine">價格為展示用的虛構內容</p>
        </div>
        <ul>
          <li v-for="(plan, index) in plans" :key="plan.name" v-entrance="index * .12" :class="{ recommended: plan.recommended }">
            <h3>{{ plan.name }} <small lang="en">{{ plan.en }}</small></h3>
            <p class="badge-row"><span v-if="plan.recommended" class="badge">建議方案</span></p>
            <p>{{ plan.hours }} 小時<br>精修 {{ plan.shots }} 張</p>
            <p class="price"><small>NT$</small><span class="amount">{{ plan.price }}</span></p>
            <a href="#booking" class="btn" :class="{ outline: !plan.recommended }" @click="form.plan = plan.name">詢問這個方案</a>
          </li>
        </ul>
      </section>

      <section id="about" class="about" aria-labelledby="mo-about">
        <div class="wrap">
          <div v-entrance class="about-photo"><img :src="photo(20527974)" alt="攝影師拿著相機站在晨光裡（示意照片）" width="800" height="1200" loading="lazy"></div>
          <div v-entrance=".15">
            <h2 id="mo-about">關於我</h2>
            <p>我只在早上拍照。晨光角度低、顏色柔，人也還沒進入一天的狀態。你照平常的步調走，需要時我再給一點方向。</p>
            <ol>
              <li v-for="(step, index) in steps" :key="step.title">
                <b>0{{ index + 1 }} {{ step.title }}</b>{{ step.text }}
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section class="wrap closing">
        <img :src="photo(8358607)" alt="" width="800" height="601" loading="lazy">
        <div id="faq" v-entrance>
          <h2>常見問題</h2>
          <details v-for="item in faqs" :key="item.q">
            <summary>{{ item.q }}</summary>
            <p>{{ item.a }}</p>
          </details>
        </div>
        <div id="booking">
          <h2>詢問檔期</h2>
          <form ref="formEl" @submit.prevent="submitForm" @input="sent = false">
            <label>姓名 *<input v-model="form.name" required autocomplete="name" placeholder="請輸入姓名"></label>
            <label>Email *<input v-model="form.email" type="email" required autocomplete="email" placeholder="name@example.com"></label>
            <label>拍攝類型 *
              <select v-model="form.type" required>
                <option v-for="item in mornings" :key="item.type">{{ item.type }}</option>
              </select>
            </label>
            <label>方案 *
              <select v-model="form.plan" required>
                <option v-for="plan in plans" :key="plan.name" :value="plan.name">{{ plan.name }}　{{ plan.hours }} 小時</option>
              </select>
            </label>
            <label>預計拍攝日期 *<input v-model="form.date" type="date" required></label>
            <button type="submit" class="btn">詢問檔期 →</button>
          </form>
          <p ref="statusEl" class="fine" role="status">{{ sent ? '展示頁面並未傳送資料' : '此表單僅供展示' }}</p>
        </div>
      </section>
    </main>

    <footer>
      <p class="logo">晨間影像<small>MORNING ONLY</small></p>
      <nav aria-label="頁尾導覽">
        <a v-for="link in links" :key="link.href" :href="link.href">{{ link.label }}</a>
      </nav>
      <p class="fine credits"><span>虛構品牌概念提案</span><span>示意照片取自 Pexels 非本品牌拍攝</span><NuxtLink to="/">Concept by Elio Wei</NuxtLink></p>
    </footer>

    <button type="button" class="to-top" :class="{ 'is-visible': pastHero && !(inView && !showAll) }" aria-label="回到頁面最上方" @click="toTop">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5m-6 6 6-6 6 6" /></svg>
    </button>

    <!-- Native dialog: focus trapping, Escape and focus return come with it. -->
    <dialog
      ref="lightbox" class="mo-lightbox" aria-label="作品放大檢視"
      @click.self="lightbox?.close()" @keydown.left.prevent="stepPhoto(-1)" @keydown.right.prevent="stepPhoto(1)"
      @touchstart.passive="swipeStart = $event.touches[0]?.clientX ?? 0" @touchend="swipeEnd"
    >
      <figure v-if="openWork">
        <img :src="photo(openWork.id)" :alt="openWork.alt">
        <figcaption>
          <button type="button" aria-label="上一張" @click="stepPhoto(-1)">‹</button>
          <p aria-live="polite">{{ openWork.alt }}　{{ openIndex + 1 }} / {{ works.length }}</p>
          <button type="button" aria-label="下一張" @click="stepPhoto(1)">›</button>
        </figcaption>
      </figure>
      <button type="button" class="close" autofocus @click="lightbox?.close()">關閉 ×</button>
    </dialog>

    <a href="#booking" class="btn sticky-cta" :class="{ 'is-hidden': ctaHidden }" @click="stickyClick">詢問檔期 →</a>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

definePageMeta({ layout: false })
useSeoMeta({
  title: '晨間影像｜自然光攝影概念提案',
  description: '晨間影像是只拍早上的自然光生活寫真，虛構攝影品牌的一頁式網站概念提案。'
})

// Photos from Pexels (https://www.pexels.com/photo/<id>/), free to use under the Pexels license.
const photo = (id: number) => `/images/demo/pexels-photo-${id}.jpeg`

const links = [
  { href: '#works', label: '作品集' },
  { href: '#plans', label: '服務方案' },
  { href: '#about', label: '關於我' },
  { href: '#faq', label: '常見問題' }
]
const mornings = [
  { id: 9062139, time: '06:30', type: '兩個人', kind: '伴侶紀實', alt: '伴侶在窗邊一起喝咖啡' },
  { id: 5082055, time: '07:00', type: '一家人', kind: '家庭日常', alt: '一家人在明亮的廚房吃早餐' },
  { id: 1084556, time: '07:30', type: '一個人', kind: '生活肖像', alt: '女子坐在窗邊望向戶外' }
]
const featured = [
  { id: 7683850, time: '06:30', type: '兩個人', line: '一起等咖啡變涼的那幾分鐘', focus: '32% center', alt: '伴侶在廚房裡靠著彼此' },
  { id: 5692279, time: '07:00', type: '一家人', line: '早餐桌上誰也沒在看鏡頭', focus: '75% center', alt: '孩子和長輩圍著餐桌吃早餐' },
  { id: 36714310, time: '07:30', type: '一個人', line: '出門以前先在窗邊站一下', focus: '68% center', alt: '女子拿著杯子站在窗前' }
]
const works = [
  { id: 7683850, alt: '伴侶在廚房裡靠著彼此' },
  { id: 36714310, alt: '女子拿著杯子站在窗前' },
  { id: 5692279, alt: '孩子和長輩圍著餐桌吃早餐' },
  { id: 7592288, alt: '伴侶坐在床邊聊天喝咖啡' },
  { id: 4385267, alt: '女子在窗邊端著咖啡' },
  { id: 8054790, alt: '一家人在餐桌旁準備早餐' }
]
const plans = [
  { name: '輕晨', en: 'Light', hours: 1, shots: 20, price: '4,800', recommended: false },
  { name: '日常', en: 'Daily', hours: 2, shots: 40, price: '6,800', recommended: true },
  { name: '深晨', en: 'Deep', hours: 3, shots: 60, price: '8,800', recommended: false }
]
const steps = [
  { title: '詢問', text: '選日期與方案' },
  { title: '討論', text: '確認地點和生活習慣' },
  { title: '拍攝', text: '照你平常的步調' },
  { title: '交件', text: '線上相簿下載' }
]
const faqs = [
  { q: '下雨天怎麼辦？', a: '室內拍攝照常進行；戶外行程可以改期一次。' },
  { q: '多久可以拿到照片？', a: '拍攝後 14 天內提供線上相簿。' },
  { q: '不會拍照怎麼辦？', a: '不用擺姿勢。照平常的方式互動，需要時我會給簡單的提示。' },
  { q: '可以改日期嗎？', a: '拍攝 7 天前告知，可以免費改期一次。' }
]

const form = reactive({ name: '', email: '', type: '兩個人', plan: '日常', date: '' })
const sent = ref(false)
const menuOpen = ref(false)

// The mobile CTA only steps aside for the hero's own button. At the form it stays and becomes the submit button.
const heroActions = ref<HTMLElement | null>(null)
const formEl = ref<HTMLFormElement | null>(null)
const statusEl = ref<HTMLElement | null>(null)
const ctaHidden = ref(true)
let observer: IntersectionObserver | undefined
onMounted(() => {
  if (!('IntersectionObserver' in window)) {
    ctaHidden.value = false
    return
  }
  observer = new IntersectionObserver(([entry]) => { ctaHidden.value = !!entry?.isIntersecting })
  if (heroActions.value) observer.observe(heroActions.value)
})
onBeforeUnmount(() => observer?.disconnect())
// While the form is already on screen the button submits it, so the browser points at the first missing field.
function stickyClick(event: MouseEvent) {
  const box = formEl.value?.getBoundingClientRect()
  if (!box || box.top > window.innerHeight * .6 || box.bottom < 0) return
  event.preventDefault()
  formEl.value?.requestSubmit()
}
// The confirmation sits under the form: bring it clear of the fixed button.
async function submitForm() {
  sent.value = true
  await nextTick()
  statusEl.value?.scrollIntoView({ block: 'center', behavior: 'smooth' })
}

// Representative works: a carousel that opens to full screen as it is scrolled into.
const worksSection = ref<HTMLElement | null>(null)
const worksTitle = ref<HTMLElement | null>(null)
const showcase = ref<HTMLElement | null>(null)
const showAll = ref(false)
const root = ref<HTMLElement | null>(null)
let motion: gsap.MatchMedia | undefined
onMounted(() => {
  motion = gsap.matchMedia()
  motion.add('(prefers-reduced-motion: no-preference)', () => {
    if (root.value) animatePage(root.value)
  })
  // Desktop pointers only: the photo and the light drift at different depths as the mouse moves.
  motion.add('(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)', () => {
    const hero = root.value?.querySelector<HTMLElement>('.hero')
    if (!hero) return
    const layers = [{ selector: '.hero-depth img', x: -26, y: -18 }, { selector: '.hero-light', x: 70, y: 44 }]
      .map(layer => {
        const target = hero.querySelector(layer.selector)
        const to = (axis: 'x' | 'y') => gsap.quickTo(target, axis, { duration: 1.1, ease: 'power3.out' })
        return { ...layer, moveX: to('x'), moveY: to('y') }
      })
    const move = (event: PointerEvent) => {
      const box = hero.getBoundingClientRect()
      const x = (event.clientX - box.left) / box.width - .5
      const y = (event.clientY - box.top) / box.height - .5
      for (const layer of layers) {
        layer.moveX(x * layer.x)
        layer.moveY(y * layer.y)
      }
    }
    hero.addEventListener('pointermove', move)
    return () => hero.removeEventListener('pointermove', move)
  })
  motion.add('(prefers-reduced-motion: no-preference)', () => {
    const feature = showcase.value
    if (!feature) return
    const part = (selector: string) => feature.querySelectorAll(selector)
    gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: { trigger: feature, start: 'top 55%', end: 'bottom bottom', scrub: true }
    })
      .fromTo(part('.frame'), { clipPath: 'inset(14% 16% round 14px)' }, { clipPath: 'inset(0% 0% round 0px)', duration: .6 }, 0)
      .fromTo(part('.track'), { scale: 1.18 }, { scale: 1, duration: .75 }, 0)
      .fromTo(part('figcaption, .controls'), { opacity: 0, y: 36 }, { opacity: 1, y: 0, duration: .2 }, .55)
      .to({}, { duration: .25 }, .75)
  })
})
onBeforeUnmount(() => motion?.revert())

function animatePage(page: HTMLElement) {
  const all = (selector: string) => Array.from(page.querySelectorAll<HTMLElement>(selector))
  const heroScroll = () => ({ trigger: all('.hero')[0], start: 'top top', end: 'bottom top', scrub: true })

  // Hero depth: the photo lags behind the page, the light rises faster, the copy leaves first.
  gsap.fromTo(all('.hero-depth img'), { scale: 1.2 }, { scale: 1.07, duration: 2.6, ease: 'power3.out' })
  gsap.to(all('.hero-depth'), { yPercent: 22, scale: 1.12, ease: 'none', scrollTrigger: heroScroll() })
  gsap.to(all('.hero-light'), { yPercent: -45, ease: 'none', scrollTrigger: heroScroll() })
  if (window.matchMedia('(min-width: 761px)').matches) {
    gsap.to(all('.hero-copy'), { y: -110, opacity: .15, ease: 'none', scrollTrigger: heroScroll() })
  }

  // Three mornings: each photo is uncovered from the bottom while it settles.
  all('.mornings li').forEach((item, index) => {
    gsap.timeline({ delay: index * .14, scrollTrigger: { trigger: item, start: 'top 85%', once: true } })
      .fromTo(item.querySelector('.photo'), { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.1, ease: 'power3.inOut' })
      .fromTo(item.querySelector('img'), { scale: 1.35 }, { scale: 1, duration: 1.5, ease: 'power3.out' }, 0)
      .fromTo(item.querySelectorAll('h3, a'), { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: .6, stagger: .1 }, .65)
  })

  // Prices count up once.
  for (const el of all('.amount')) {
    const total = Number(el.textContent?.replace(/,/g, ''))
    const count = { value: 0 }
    gsap.to(count, {
      value: total, duration: 1.4, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      onUpdate: () => { el.textContent = Math.round(count.value).toLocaleString('en-US') }
    })
  }

  // About: the portrait drifts inside its arch and the step lines draw in order.
  gsap.fromTo(all('.about-photo img'), { yPercent: -7, scale: 1.16 }, {
    yPercent: 7, scale: 1.16, ease: 'none',
    scrollTrigger: { trigger: all('.about')[0], start: 'top bottom', end: 'bottom top', scrub: true }
  })
  gsap.fromTo(all('.about li'), { '--draw': 0 }, {
    '--draw': 1, duration: .8, stagger: .22, ease: 'power2.out',
    scrollTrigger: { trigger: all('.about ol')[0], start: 'top 85%', once: true }
  })
}

// Native scroll snapping handles swiping; the buttons and the timer only move the same scroll position.
const track = ref<HTMLElement | null>(null)
const current = ref(0)
const playing = ref(false)
const held = ref(false)
let timer: ReturnType<typeof setTimeout> | undefined
const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

function go(index: number) {
  const el = track.value
  if (!el) return
  const next = (index + featured.length) % featured.length
  el.scrollTo({ left: next * el.clientWidth, behavior: reducedMotion() ? 'instant' : 'smooth' })
}
function onSlide() {
  const el = track.value
  if (el?.clientWidth) current.value = Math.round(el.scrollLeft / el.clientWidth)
}
// Hovering with a mouse or tabbing into the carousel pauses it.
function hold(event: PointerEvent, value: boolean) {
  if (event.pointerType === 'mouse') held.value = value
}
function holdForKeyboard(event: FocusEvent) {
  if ((event.target as HTMLElement).matches(':focus-visible')) held.value = true
}
// The timer only runs while the carousel is on screen, so visitors arrive at the first photo.
const inView = ref(false)
let carouselObserver: IntersectionObserver | undefined
watch([current, playing, held, inView], () => {
  clearTimeout(timer)
  if (playing.value && !held.value && inView.value) timer = setTimeout(() => go(current.value + 1), 5000)
})
onMounted(() => {
  playing.value = !reducedMotion()
  if (!showcase.value || !('IntersectionObserver' in window)) return
  carouselObserver = new IntersectionObserver(([entry]) => { inView.value = !!entry?.isIntersecting }, { threshold: .35 })
  carouselObserver.observe(showcase.value)
})
onBeforeUnmount(() => {
  clearTimeout(timer)
  carouselObserver?.disconnect()
})

// Full portfolio: click a photo to view it large.
const lightbox = ref<HTMLDialogElement | null>(null)
const openIndex = ref(0)
const openWork = computed(() => works[openIndex.value])
const swipeStart = ref(0)
function openPhoto(index: number) {
  openIndex.value = index
  lightbox.value?.showModal()
}
function stepPhoto(step: number) {
  openIndex.value = (openIndex.value + step + works.length) % works.length
}
function swipeEnd(event: TouchEvent) {
  const distance = (event.changedTouches[0]?.clientX ?? swipeStart.value) - swipeStart.value
  if (Math.abs(distance) > 50) stepPhoto(distance < 0 ? 1 : -1)
}

// Back to top appears once the hero has scrolled away; it stays out of the way of the full-screen carousel.
const pastHero = ref(false)
let heroObserver: IntersectionObserver | undefined
onMounted(() => {
  const hero = root.value?.querySelector('.hero')
  if (!hero || !('IntersectionObserver' in window)) return
  heroObserver = new IntersectionObserver(([entry]) => { pastHero.value = !entry?.isIntersecting })
  heroObserver.observe(hero)
})
onBeforeUnmount(() => heroObserver?.disconnect())
function toTop() {
  window.scrollTo({ top: 0, behavior: reducedMotion() ? 'instant' : 'smooth' })
  root.value?.querySelector<HTMLElement>('.top .logo')?.focus({ preventScroll: true })
}

async function toggleWorks() {
  showAll.value = !showAll.value
  await nextTick()
  const top = (worksSection.value?.getBoundingClientRect().top ?? 0) + window.scrollY
  window.scrollTo({ top, behavior: 'instant' })
  worksTitle.value?.focus({ preventScroll: true })
  if (!showAll.value) {
    held.value = false
    go(current.value)
  }
  developWall()
  ScrollTrigger.refresh()
}

// Full portfolio entrance: each photo rises like a sunrise inside an arch, develops from an overexposed
// frame into its real colours, then catches one pass of light. Rows further down play when scrolled to.
let wallMotion: gsap.Context | undefined
function developWall() {
  wallMotion?.revert()
  wallMotion = undefined
  if (!showAll.value || reducedMotion()) return
  wallMotion = gsap.context(() => {
    root.value?.querySelectorAll('.wall button').forEach((tile, index) => {
      const image = tile.querySelector('img')
      gsap.timeline({ delay: (index % 3) * .18, scrollTrigger: { trigger: tile, start: 'top 88%', once: true } })
        .fromTo(tile,
          { clipPath: 'inset(100% 0% 0% 0% round 50% 50% 0% 0%)' },
          { clipPath: 'inset(0% 0% 0% 0% round 0% 0% 0% 0%)', duration: 1.25, ease: 'power4.inOut', clearProps: 'clipPath' })
        .fromTo(image,
          { scale: 1.4, filter: 'brightness(2.4) sepia(0.9) saturate(1.6) blur(10px)' },
          { scale: 1, filter: 'brightness(1) sepia(0) saturate(1) blur(0px)', duration: 1.9, ease: 'power2.out', clearProps: 'transform,filter' }, .1)
        // x: 0 drops the pixel offset GSAP reads from the CSS transform, which otherwise ends the sweep mid-photo.
        .fromTo(tile.querySelector('.sheen'), { x: 0, xPercent: -120 }, { x: 0, xPercent: 120, duration: 1.1, ease: 'power1.inOut' }, .85)
    })
  })
}
onBeforeUnmount(() => wallMotion?.revert())
</script>

<style scoped>
.mo {
  --cream: #f5f1ea; --ink: #2a2622; --soft: #5c554d; --brick: #9d4f2a; --line: #2a262226; --night: #2c2b2e;
  --serif: 'Noto Serif TC', 'PMingLiU', serif;
  background: var(--cream); color: var(--ink); font: 16px/1.8 var(--serif);
}
.mo ul, .mo ol { list-style: none; padding: 0; margin: 0; }
.mo h2 { font-size: clamp(1.75rem, 3.4vw, 2.4rem); font-weight: 600; letter-spacing: .06em; line-height: 1.35; }
.mo h2 i { font: italic 1.15rem Georgia, serif; color: var(--brick); letter-spacing: 0; margin-inline-start: .6rem; }
.mo section[id], .mo div[id] { scroll-margin-top: 1rem; }
.mo a:focus-visible, .mo button:focus-visible, .mo summary:focus-visible, .mo input:focus-visible, .mo select:focus-visible { outline: 3px solid #e59a62; outline-offset: 3px; }
.wrap { max-width: 1240px; margin-inline: auto; padding: clamp(3rem, 6vw, 5rem) clamp(1.15rem, 5vw, 3.5rem); }
.fine { font-size: .875rem; color: var(--soft); }
.btn { display: inline-flex; align-items: center; justify-content: center; min-height: 48px; padding: 0 1.6rem; border: 1px solid var(--brick); border-radius: 8px; background: var(--brick); color: #fff; letter-spacing: .08em; cursor: pointer; }
.btn.outline { background: transparent; color: var(--brick); }
.text-link { display: inline-block; padding-block: .6rem; text-decoration: underline; text-underline-offset: .35em; }

.top { position: absolute; inset: 0 0 auto; z-index: 5; display: flex; align-items: center; justify-content: space-between; padding: 1.1rem clamp(1.15rem, 5vw, 4.5rem); color: #fff; }
.logo { font-size: 1.45rem; letter-spacing: .12em; line-height: 1.3; }
.logo small { display: block; font-size: .7rem; letter-spacing: .2em; }
.top nav { display: flex; align-items: center; gap: 2rem; }
.top nav a:not(.btn) { padding-block: .7rem; }
.menu-button { display: none; }
.to-top { position: fixed; z-index: 15; right: 1.25rem; bottom: 1.5rem; display: grid; place-items: center; width: 48px; height: 48px; border: 1px solid #fff6; border-radius: 50%; background: var(--night); color: #fff; box-shadow: 0 6px 18px #0004; cursor: pointer; visibility: hidden; opacity: 0; translate: 0 14px; }
.to-top.is-visible { visibility: visible; opacity: 1; translate: 0; }
.to-top svg { width: 22px; height: 22px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }

/* Overlay stays at .66 or darker behind the copy, so white text keeps at least 4.5:1 even over a white photo. */
.hero { position: relative; min-height: max(620px, 78svh); display: flex; align-items: center; color: #fff; }
.hero::after { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, #12141cc2 0, #12141ca8 52%, #12141c14 78%), linear-gradient(#12141ca8 0, #12141ca8 96px, #12141c00 190px); }
.hero-media { position: absolute; inset: 0; overflow: hidden; }
.hero-depth { width: 100%; height: 100%; }
.hero-depth img { width: 100%; height: 100%; object-fit: cover; object-position: 62% 65%; scale: 1.02; }
/* Soft sun haze and out-of-focus specks: the nearest depth layer. It sits under the dark overlay. */
.hero-light { position: absolute; inset: -8%; pointer-events: none; mix-blend-mode: screen; background:
  radial-gradient(circle at 68% 46%, #ffc27a66, #ffc27a00 24%),
  radial-gradient(circle at 82% 70%, #ffd9a855 0 .7%, #ffd9a800 1.6%),
  radial-gradient(circle at 57% 78%, #ffe6c644 0 1.1%, #ffe6c600 2.4%),
  radial-gradient(circle at 91% 34%, #ffd29a3d 0 1.5%, #ffd29a00 3%),
  radial-gradient(circle at 74% 22%, #fff0d833 0 .5%, #fff0d800 1.4%); }
.hero-copy { position: relative; z-index: 1; width: 100%; max-width: 1240px; margin-inline: auto; padding: 7rem clamp(1.15rem, 5vw, 3.5rem) 5rem; }
.hero-copy > * { max-width: min(34rem, 100%); }
.concept { display: inline-block; font-size: .875rem; border: 1px solid #fff9; border-radius: 99px; padding: .1rem .9rem; }
.hero h1 { font-size: clamp(2.2rem, 5.4vw, 4.2rem); font-weight: 600; line-height: 1.4; letter-spacing: .08em; margin: 1.1rem 0; }
.hero h1 span { background: linear-gradient(#e59a62, #e59a62) bottom right / 62% 3px no-repeat; padding-bottom: .15em; }
.actions { display: flex; flex-wrap: wrap; align-items: center; gap: 1.6rem; margin-top: 1.8rem; }
.hero .btn { min-width: 11rem; }
.wave { position: absolute; z-index: 1; inset: auto 0 -1px; width: 100%; height: 30px; fill: var(--cream); }

.section-head { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem 3rem; margin-bottom: 2.2rem; }
.mornings { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.25rem; }
.mornings .photo { aspect-ratio: 4 / 3; overflow: hidden; }
.mornings img { width: 100%; height: 100%; object-fit: cover; }
.mornings h3 { display: flex; flex-wrap: wrap; align-items: baseline; gap: .3rem 1rem; margin-top: .8rem; font-weight: 600; font-size: 1.1rem; }
.mornings time { font-family: Georgia, serif; }
.mornings h3 span { font-weight: 400; color: var(--soft); }

.works { background: #ece5da; }
.works-head { padding-bottom: 0; }
.works-head .section-head { margin-bottom: 1.5rem; }
.wall-wrap { padding-top: 0; }
#mo-works:focus { outline: none; }
.feature { height: 180svh; }
.stage { position: sticky; top: 0; height: 100svh; overflow: hidden; }
.frame { position: absolute; inset: 0; overflow: hidden; }
.track { display: flex; height: 100%; overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none; }
.track::-webkit-scrollbar { display: none; }
.slide { position: relative; flex: 0 0 100%; margin: 0; scroll-snap-align: start; }
.slide img { width: 100%; height: 100%; object-fit: cover; }
.slide::after { content: ''; position: absolute; inset: 0; background: linear-gradient(#12141c00 38%, #12141cb3 68%, #12141ce6); }
.slide figcaption { position: absolute; z-index: 1; inset: auto 0 0; max-width: 1240px; margin-inline: auto; padding: 0 clamp(1.15rem, 5vw, 3.5rem) calc(clamp(2rem, 8svh, 5rem) + 76px); color: #fff; }
.slide h3 { font-size: clamp(1.6rem, 3.6vw, 2.9rem); font-weight: 600; line-height: 1.5; margin-top: .3rem; }
.slide time { font-family: Georgia, serif; }
.controls { position: absolute; z-index: 2; inset: auto 0 clamp(2rem, 8svh, 5rem); max-width: 1240px; margin-inline: auto; padding-inline: clamp(1.15rem, 5vw, 3.5rem); display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: .8rem 1.5rem; color: #fff; }
.pager { display: flex; align-items: center; gap: .25rem; }
.pager button { display: grid; place-items: center; min-width: 44px; min-height: 44px; font-size: 1.6rem; line-height: 1; cursor: pointer; }
.pager .dot::before { content: ''; width: 10px; height: 10px; border: 1px solid #fff; border-radius: 50%; }
.pager .dot[aria-current="true"]::before { background: #fff; }
.pager .play { font-size: .875rem; padding-inline: .6rem; text-decoration: underline; text-underline-offset: .3em; }

.wall { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); grid-auto-rows: clamp(190px, 24vw, 330px); gap: .75rem; }
.wall button { position: relative; grid-column: span 2; overflow: hidden; cursor: zoom-in; }
.sheen { position: absolute; inset: 0; pointer-events: none; mix-blend-mode: screen; transform: translateX(-120%); background: linear-gradient(105deg, #fff0 32%, #ffd9a0b3 48%, #fff7e8e6 52%, #fff0 68%); }
.wall img { width: 100%; height: 100%; object-fit: cover; }
.wall button:nth-child(1), .wall button:nth-child(4) { grid-column: span 4; }
.wall button:nth-child(4) { order: 1; }
.wall button:nth-child(5), .wall button:nth-child(6) { order: 2; grid-column: span 3; }

.mo-lightbox { width: 100%; max-width: 100%; height: 100%; max-height: 100%; margin: 0; padding: 4.5rem 1rem 1rem; border: 0; background: #12141cf2; color: #fff; }
.mo-lightbox[open] { display: grid; place-items: center; }
.mo-lightbox figure { display: grid; justify-items: center; gap: .8rem; margin: 0; max-width: 100%; }
.mo-lightbox img { max-width: 100%; max-height: calc(100svh - 11rem); object-fit: contain; }
.mo-lightbox figcaption { display: flex; align-items: center; gap: 1rem; text-align: center; }
.mo-lightbox button { min-width: 48px; min-height: 48px; font-size: 1.8rem; line-height: 1; cursor: pointer; }
.mo-lightbox .close { position: absolute; top: .8rem; right: 1rem; font-size: 1rem; padding-inline: .8rem; border: 1px solid #fff8; border-radius: 8px; }
:global(html:has(.mo-lightbox[open])) { overflow: hidden; }

.plans { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 2.4fr); gap: 2.5rem; }
.plans h2 { word-break: keep-all; }
.plans ul { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); }
.plans li { display: flex; flex-direction: column; align-items: flex-start; gap: .5rem; padding: 1.2rem 1.4rem; border-inline-start: 1px solid var(--line); }
.plans li.recommended { background: #fffaf3; }
.plans h3 { font-size: 1.5rem; font-weight: 600; }
.plans h3 small { font-size: .875rem; font-weight: 400; color: var(--soft); }
.badge-row { min-height: 1.8rem; }
.badge { background: var(--brick); color: #fff; border-radius: 5px; padding: .15rem .6rem; font-size: .875rem; }
.price { font: 2rem Georgia, serif; margin-block: .4rem .6rem; }
.price small { font-size: 1rem; }
.plans .btn { width: 100%; margin-top: auto; padding-inline: .5rem; }

.about { background: #ece5da; }
.about .wrap { display: grid; grid-template-columns: minmax(0, .7fr) minmax(0, 1.3fr); gap: clamp(2rem, 5vw, 4.5rem); align-items: center; }
.about-photo { aspect-ratio: 4 / 5; overflow: hidden; border-radius: 999px 999px 4px 4px; }
.about-photo img { width: 100%; height: 100%; object-fit: cover; }
.about p { margin-block: 1rem 2rem; max-width: 34em; }
.about ol { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1rem; }
.about li { position: relative; padding-top: .7rem; }
.about li::before { content: ''; position: absolute; inset: 0 0 auto; height: 1px; background: var(--ink); transform: scaleX(var(--draw, 1)); transform-origin: left; }
.about li b { display: block; }

.closing { display: grid; grid-template-columns: minmax(0, .85fr) minmax(0, 1fr) minmax(0, 1.2fr); gap: clamp(1.5rem, 3.5vw, 3rem); align-items: start; }
/* Fixed ratio: the photo must not stretch with the row when a FAQ answer opens. */
.closing > img { width: 100%; height: auto; aspect-ratio: 3 / 4; object-fit: cover; }
.closing h2 { font-size: 1.5rem; margin-bottom: 1rem; }
details { border-bottom: 1px solid var(--line); }
summary { display: flex; justify-content: space-between; gap: 1rem; padding-block: .85rem; cursor: pointer; list-style: none; }
summary::-webkit-details-marker { display: none; }
summary::after { content: '+'; font-size: 1.3rem; line-height: 1; }
details[open] summary::after { content: '−'; }
details p { padding-bottom: 1rem; color: var(--soft); }
form { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; margin-bottom: .6rem; }
label { display: grid; gap: .25rem; font-weight: 600; }
input, select { width: 100%; min-height: 48px; padding: .4rem .7rem; border: 1px solid #857b6f; border-radius: 6px; background: #fffdf9; color: var(--ink); font: 400 16px var(--serif); }
form .btn { align-self: end; }

footer { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1.2rem 2rem; padding: 1.8rem clamp(1.15rem, 5vw, 4.5rem); background: var(--night); color: #f1ece4; }
footer nav { display: flex; flex-wrap: wrap; gap: .5rem 2rem; }
footer nav a { padding-block: .6rem; }
footer .fine { width: 100%; color: #cfc8bd; }
footer .fine a { text-decoration: underline; }
.credits { display: flex; flex-wrap: wrap; gap: .25rem 1.5rem; }
.sticky-cta { display: none; }

.hero { overflow: hidden; }
@media (prefers-reduced-motion: no-preference) {
  .hero-copy > * { animation: mo-rise .9s cubic-bezier(.2, .7, .2, 1) both; }
  .hero-copy > :nth-child(2) { animation-delay: .15s; }
  .hero-copy > :nth-child(3) { animation-delay: .3s; }
  .hero-copy > :nth-child(4) { animation-delay: .45s; }
  .hero h1 span { animation: mo-underline .7s ease-out 1s both; }
  .mo-lightbox[open] img { animation: mo-rise .35s ease-out; }
  .mornings img, .wall img { transition: scale .8s cubic-bezier(.2, .7, .2, 1); }
  .mornings li:hover img { scale: 1.07; }
  .wall button:hover img { scale: 1.04; }
  .btn { transition: translate .25s, box-shadow .25s; }
  .btn:hover { translate: 0 -2px; box-shadow: 0 6px 16px #2a26222e; }
  .top nav a:not(.btn), footer nav a { background: linear-gradient(currentColor, currentColor) 0 calc(100% - .3rem) / 0 1px no-repeat; transition: background-size .3s; }
  .top nav a:not(.btn):hover, footer nav a:hover { background-size: 100% 1px; }
  details[open] p { animation: mo-rise .35s ease-out; }
}
@media (prefers-reduced-motion: no-preference) {
  .to-top { transition: opacity .3s, translate .3s, visibility .3s; }
  .btn.sticky-cta { transition: translate .35s cubic-bezier(.2, .7, .2, 1), opacity .3s, visibility .35s; }
  .menu-button span { transition: translate .3s, rotate .3s, scale .2s, opacity .2s; }
  @media (max-width: 760px) {
    .top nav { transition: clip-path .4s cubic-bezier(.2, .7, .2, 1), opacity .25s, translate .4s, visibility .4s; }
    #mo-nav a { opacity: 0; translate: 0 -8px; transition: opacity .2s, translate .2s; }
    #mo-nav.open a { opacity: 1; translate: 0; transition: opacity .3s, translate .35s; }
    #mo-nav.open a:nth-child(2) { transition-delay: .06s; }
    #mo-nav.open a:nth-child(3) { transition-delay: .12s; }
    #mo-nav.open a:nth-child(4) { transition-delay: .18s; }
    #mo-nav.open a:nth-child(5) { transition-delay: .24s; }
  }
}
@keyframes mo-rise { from { opacity: 0; transform: translateY(22px); } }
@keyframes mo-underline { from { background-size: 0 3px; } }
@media (prefers-reduced-motion: reduce) {
  .feature { height: auto; }
  .stage { position: relative; height: 80svh; }
}

@media (max-width: 1020px) {
  .plans { grid-template-columns: minmax(0, 1fr); }
  .closing { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .closing > img { display: none; }
}

@media (max-width: 760px) {
  .menu-button { display: block; position: relative; width: 48px; height: 48px; border: 1px solid #fffa; border-radius: 10px; cursor: pointer; }
  .menu-button span { position: absolute; left: 13px; width: 20px; height: 2px; border-radius: 2px; background: currentColor; }
  .menu-button span:nth-child(1) { top: 16px; }
  .menu-button span:nth-child(2) { top: 22px; }
  .menu-button span:nth-child(3) { top: 28px; }
  .menu-button[aria-expanded="true"] span:nth-child(1) { translate: 0 6px; rotate: 45deg; }
  .menu-button[aria-expanded="true"] span:nth-child(2) { opacity: 0; scale: .2 1; }
  .menu-button[aria-expanded="true"] span:nth-child(3) { translate: 0 -6px; rotate: -45deg; }
  /* Closed menu stays in the layout (visibility hidden) so it can animate both ways and cannot be focused. */
  .top nav { position: absolute; inset: 100% 1.15rem auto; flex-direction: column; align-items: stretch; gap: 0; padding: .6rem 1rem 1rem; border-radius: 10px; background: var(--night); visibility: hidden; opacity: 0; translate: 0 -10px; clip-path: inset(0 0 100% 0 round 10px); }
  .top nav.open { visibility: visible; opacity: 1; translate: 0; clip-path: inset(0 0 0 0 round 10px); }
  .to-top { right: 1rem; bottom: calc(5rem + env(safe-area-inset-bottom)); }
  /* Phones: photo on top and copy on a solid ground, so the couple stays visible. */
  .hero { flex-direction: column; min-height: 0; background: #1c1b20; }
  .hero-media { position: relative; width: 100%; height: 52svh; min-height: 340px; }
  .hero-depth img { object-position: 62% center; }
  .hero-light { inset: 0 0 auto; height: 52svh; min-height: 340px; }
  .hero::after { inset: 0 0 auto; height: 150px; background: linear-gradient(#12141ccc 0, #12141ca8 80px, #12141c00); }
  .hero-copy { padding-block: 1.6rem 3.5rem; }
  .badge-row { min-height: 0; }
  .badge-row:empty { display: none; }
  .mornings, .plans ul, .closing, .about .wrap { grid-template-columns: minmax(0, 1fr); }
  .mornings { gap: 2rem; }
  /* Leave room for the fixed booking button under the carousel controls. */
  .controls { bottom: calc(5.5rem + env(safe-area-inset-bottom)); }
  .slide figcaption { padding-bottom: calc(14rem + env(safe-area-inset-bottom)); }
  .wall { grid-template-columns: repeat(2, minmax(0, 1fr)); grid-auto-rows: 200px; }
  .wall button:nth-child(n) { order: 0; grid-column: span 1; }
  .wall button:nth-child(1), .wall button:nth-child(4) { grid-column: span 2; }
  .plans li { border-inline-start: 0; border-top: 1px solid var(--line); }
  .about-photo { max-width: 300px; }
  .about ol { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  form { grid-template-columns: minmax(0, 1fr); }
  /* On phones the fixed button submits the form, so the inline copy is hidden. */
  form .btn { display: none; }
  footer { padding-bottom: calc(6rem + env(safe-area-inset-bottom)); }
  .sticky-cta { display: flex; position: fixed; z-index: 20; inset: auto 1rem calc(.75rem + env(safe-area-inset-bottom)); box-shadow: 0 6px 20px #0005; }
  .sticky-cta.is-hidden { visibility: hidden; opacity: 0; translate: 0 140%; }
}
</style>
