<template>
  <div class="mr">
    <a class="skip" href="#mr-main">跳到主要內容</a>
    <header class="top" :class="{ 'is-scrolled': scrolled > 8 }">
      <NuxtLink ref="logo" :to="maoriBase" class="logo" aria-label="毛日首頁">
        <svg viewBox="0 0 32 32" aria-hidden="true"><ellipse cx="7" cy="14" rx="3" ry="4" /><ellipse cx="13" cy="8" rx="3" ry="4" /><ellipse cx="20" cy="8" rx="3" ry="4" /><ellipse cx="26" cy="14" rx="3" ry="4" /><path d="M16 15c5 0 9 5 9 9 0 5-5 3-9 3s-9 2-9-3c0-4 4-9 9-9z" /></svg>
        <span>毛日</span>
      </NuxtLink>
      <button type="button" class="menu" :aria-expanded="open" aria-controls="mr-nav" :aria-label="open ? '關閉選單' : '開啟選單'" @click="open = !open">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path :d="open ? 'M6 6l12 12M18 6 6 18' : 'M4 7h16M4 12h16M4 17h16'" /></svg>
      </button>
      <nav id="mr-nav" :class="{ 'is-open': open }" aria-label="主選單" @keydown.esc="open = false">
        <NuxtLink v-for="link in maoriNav" :key="link.to" :to="link.to" class="mr-link" @click="open = false">{{ link.label }}</NuxtLink>
      </nav>
      <NuxtLink :to="`${maoriBase}/booking`" class="mr-btn top-cta">預約美容</NuxtLink>
    </header>

    <main id="mr-main" tabindex="-1">
      <slot />
    </main>

    <footer>
      <div>
        <p class="brand">毛日</p>
        <p>巷弄裡的寵物美容小店</p>
      </div>
      <p>{{ maoriShop.address }}<br>{{ maoriShop.hours }}<br>{{ maoriShop.closed }}<br>{{ maoriShop.phone }}</p>
      <nav aria-label="頁尾導覽">
        <NuxtLink v-for="link in maoriNav" :key="link.to" :to="link.to">{{ link.label }}</NuxtLink>
      </nav>
      <div class="social">
        <div>
          <button v-for="item in socials" :key="item.icon" type="button" :aria-label="item.label" :title="item.label" @click="notify(`${item.label} 示意帳號 尚未開放`)"><MaoriIcon :name="item.icon" /></button>
        </div>
        <small>示意帳號 未開放</small>
      </div>
      <p class="credits"><span>本網站為概念提案草稿　非真實店家</span><span>人物 價格 紀錄與照片皆為示意</span><NuxtLink to="/">Concept by Elio Wei</NuxtLink></p>
    </footer>

    <NuxtLink v-if="hasDock" :to="`${maoriBase}/booking`" class="mr-btn dock">預約美容 →</NuxtLink>

    <button type="button" class="to-top" :class="{ 'is-visible': scrolled > 600, 'above-dock': hasDock }" aria-label="回到頁面最上方" title="回到最上方" @click="toTop"><MaoriIcon name="up" /></button>

    <p class="toast" :class="{ 'is-visible': message }" role="status">{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
import { maoriBase, maoriNav, maoriShop } from '~/data/maori'

const route = useRoute()
const open = ref(false)
watch(() => route.path, () => { open.value = false })
const hasDock = computed(() => !route.path.endsWith('/booking'))

const socials = [
  { icon: 'instagram', label: 'Instagram' },
  { icon: 'facebook', label: 'Facebook' },
  { icon: 'line', label: 'LINE' }
] as const
const { message, notify } = useMaoriNotice()

const scrolled = ref(0)
const onScroll = () => { scrolled.value = window.scrollY }
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
const logo = ref<{ $el: HTMLElement } | null>(null)
function toTop() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: reduced ? 'instant' : 'smooth' })
  logo.value?.$el.focus({ preventScroll: true })
}

useHead({
  link: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Iansui&family=LXGW+WenKai+TC:wght@400;700&family=Noto+Sans+TC:wght@400;500;700&display=swap' }]
})
</script>

<style>
/* Design tokens and shared pieces for the demo. Everything is under .mr so the portfolio is untouched. */
.mr {
  --cream: #f6efe3; --kraft: #ead5b8; --wood: #c69a6b; --caramel: #94643d; --coffee: #493628;
  --leaf: #a4ac91; --mist: #a7b5b9; --apricot: #d6ae92; --paper: #fffaf1;
  --mr-hand: 'Iansui', 'LXGW WenKai TC', cursive; --mr-title: 'LXGW WenKai TC', 'Iansui', serif; --mr-body: 'Noto Sans TC', 'Microsoft JhengHei', sans-serif;
  --mr-fast: 180ms;
  --pad: clamp(1.25rem, 6vw, 6rem);
  min-height: 100vh; overflow-x: clip; color-scheme: light; color: var(--coffee); font: 400 16px/1.85 var(--mr-body);
  /* Low-contrast paper grain. The header and torn edges reuse it, otherwise they show as flat bands. */
  --grain: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .45 0 0 0 0 .32 0 0 0 0 .2 0 0 0 .09 0'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E");
  background: var(--cream) var(--grain);
}
.mr ul, .mr ol { list-style: none; margin: 0; padding: 0; }
.mr a:focus-visible, .mr button:focus-visible, .mr summary:focus-visible, .mr input:not([type='range']):focus-visible, .mr select:focus-visible, .mr textarea:focus-visible { outline: 3px solid var(--coffee); outline-offset: 3px; }
.mr-wrap { max-width: 1280px; margin-inline: auto; padding: clamp(2.5rem, 6vw, 4.5rem) var(--pad); }
.mr h2 { font-family: var(--mr-title); font-size: clamp(1.7rem, 3.6vw, 2.4rem); font-weight: 700; letter-spacing: .06em; line-height: 1.4; }
.mr h3 { font-family: var(--mr-title); font-size: 1.4rem; font-weight: 700; line-height: 1.5; }
.mr-hand { font-family: var(--mr-hand); }
/* Copy carries no punctuation, so line breaks in the data separate the clauses. */
.mr-lines { display: block; white-space: pre-line; }
.mr-btn { display: inline-flex; align-items: center; justify-content: center; gap: .5rem; min-height: 48px; padding: 0 1.6rem; border: 1px solid var(--caramel); border-radius: 12px; background: var(--caramel); color: #fff; font-weight: 500; cursor: pointer; transition: translate var(--mr-fast); }
.mr-btn:hover { translate: 0 -2px; }
.mr-btn:active { translate: 0 1px; }
.mr-btn.is-light { border-color: var(--paper); background: var(--paper); color: var(--coffee); }
.mr-btn.is-line { background: transparent; color: var(--coffee); }
.mr-link { background: linear-gradient(var(--wood), var(--wood)) left bottom / 0 3px no-repeat; transition: background-size var(--mr-fast); }
.mr-link:hover, .mr-link:focus-visible, .mr-link.router-link-active { background-size: 100% 3px; }
.mr-more { display: inline-block; padding-block: .5rem; font-family: var(--mr-hand); font-size: 1.3rem; text-decoration: underline; text-decoration-color: var(--wood); text-decoration-thickness: 2px; text-underline-offset: .4em; }
.mr-note { padding: 1.5rem 1.75rem; background: var(--paper); box-shadow: 0 6px 16px #4936281c; }
.mr-band { background: var(--kraft); }
/* Torn paper edges in the page colour, laid over the top or bottom of a block. */
.mr-tear-top, .mr-tear-bottom { position: relative; }
.mr-tear-top::before, .mr-tear-bottom::after { content: ''; position: absolute; z-index: 1; left: 0; right: 0; height: 22px; background: var(--cream) var(--grain); pointer-events: none; }
.mr-tear-top::before { top: -1px; clip-path: polygon(0 0,100% 0,100% 45%,94% 85%,88% 40%,81% 70%,73% 30%,66% 65%,58% 35%,51% 80%,43% 45%,35% 75%,27% 30%,20% 90%,12% 55%,6% 80%,0 50%); }
.mr-tear-bottom::after { bottom: -1px; clip-path: polygon(0 100%,100% 100%,100% 40%,93% 70%,86% 20%,79% 60%,71% 30%,64% 75%,56% 35%,49% 15%,41% 65%,33% 30%,26% 70%,18% 25%,11% 60%,5% 20%,0 55%); }

.mr .skip { position: absolute; top: -100px; left: 1rem; z-index: 40; padding: .5rem 1rem; background: var(--paper); }
.mr .skip:focus { top: .5rem; }
.mr .top { position: sticky; top: 0; z-index: 20; display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: .7rem var(--pad); background: var(--cream) var(--grain); transition: box-shadow var(--mr-fast); }
.mr .top.is-scrolled { box-shadow: 0 6px 18px #49362824; }
.mr .logo { display: flex; align-items: center; gap: .6rem; min-height: 48px; font-family: var(--mr-hand); font-size: 2rem; letter-spacing: .08em; }
.mr .logo svg { width: 38px; height: 38px; fill: var(--caramel); }
.mr .top nav { display: flex; gap: clamp(1rem, 2vw, 2rem); letter-spacing: .06em; }
.mr .top nav a { padding-block: .5rem; }
.mr .menu { display: none; }
.mr #mr-main:focus { outline: none; }

.mr footer { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 1.5rem 3rem; padding: 3rem var(--pad); background: var(--coffee); color: #f4e8d4; font-size: .9rem; }
.mr footer .brand { font-family: var(--mr-hand); font-size: 2rem; }
.mr footer nav { display: grid; grid-template-columns: repeat(2, auto); gap: .25rem 2rem; align-content: start; }
.mr footer nav a { padding-block: .3rem; }
.mr footer a:focus-visible { outline-color: #f4e8d4; }
.mr .credits { display: flex; flex-wrap: wrap; gap: .25rem 1.5rem; width: 100%; padding-top: 1rem; border-top: 1px solid #f4e8d440; font-size: .8rem; }
.mr .credits a { text-decoration: underline; }
.mr .dock { display: none; }

.mr .social { display: grid; gap: .5rem; align-content: start; }
.mr .social > div { display: flex; gap: .75rem; }
.mr .social button { display: grid; place-items: center; width: 48px; height: 48px; border: 1px solid #f4e8d466; border-radius: 50%; cursor: pointer; transition: background-color var(--mr-fast), color var(--mr-fast), translate var(--mr-fast); }
.mr .social button:hover { background: #f4e8d4; color: var(--coffee); translate: 0 -2px; }
.mr .social button:focus-visible { outline-color: #f4e8d4; }
.mr .social svg { width: 26px; height: 26px; }

.mr .to-top { position: fixed; z-index: 16; right: 1rem; bottom: 1.25rem; display: grid; place-items: center; width: 50px; height: 50px; border: 1px solid #f4e8d499; border-radius: 50%; background: var(--coffee); color: #fff; box-shadow: 0 8px 18px #49362859; cursor: pointer; visibility: hidden; opacity: 0; translate: 0 12px; transition: opacity var(--mr-fast), translate var(--mr-fast), visibility var(--mr-fast); }
.mr .to-top.is-visible { visibility: visible; opacity: 1; translate: 0; }
.mr .to-top svg { width: 24px; height: 24px; }
.mr .toast { position: fixed; z-index: 30; left: 50%; bottom: 6rem; width: max-content; max-width: calc(100% - 2rem); padding: .6rem 1.2rem; border-radius: 12px; background: var(--coffee); color: #fff; box-shadow: 0 8px 20px #49362859; translate: -50% 0; visibility: hidden; opacity: 0; transition: opacity var(--mr-fast), visibility var(--mr-fast); }
.mr .toast.is-visible { visibility: visible; opacity: 1; }

@media (max-width: 1100px) {
  .mr .menu { display: grid; place-items: center; width: 48px; height: 48px; margin-left: auto; cursor: pointer; }
  .mr .menu svg { width: 26px; height: 26px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; }
  .mr .top nav { position: absolute; top: 100%; left: 0; right: 0; flex-direction: column; gap: 0; padding: .5rem var(--pad) 1.2rem; max-height: calc(100svh - 70px); overflow-y: auto; background: var(--cream) var(--grain); box-shadow: 0 14px 18px #49362826; visibility: hidden; opacity: 0; translate: 0 -8px; transition: opacity var(--mr-fast), translate var(--mr-fast), visibility var(--mr-fast); }
  .mr .top nav.is-open { visibility: visible; opacity: 1; translate: 0; }
  .mr .top nav a { align-self: flex-start; padding-block: .75rem; }
}
@media (max-width: 760px) {
  .mr .top-cta { display: none; }
  .mr .dock { position: fixed; z-index: 15; left: 1rem; right: 1rem; bottom: max(.75rem, env(safe-area-inset-bottom)); display: flex; box-shadow: 0 8px 20px #49362840; }
  .mr .to-top.above-dock { bottom: calc(max(.75rem, env(safe-area-inset-bottom)) + 62px); }
  .mr footer { padding-bottom: 9rem; }
}

/* A plain fade: a wipe drags a hard edge across the page. */
.mr-page-enter-active { transition: opacity 350ms ease; }
.mr-page-leave-active { transition: opacity 150ms ease; }
.mr-page-enter-from, .mr-page-leave-to { opacity: 0; }
@media (prefers-reduced-motion: reduce) {
  .mr *, .mr-page-enter-active, .mr-page-leave-active { transition: none !important; }
}
</style>
