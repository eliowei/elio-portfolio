<template>
  <section id="projects" class="project-showcase bg-surface border-y border-outline-variant py-20 md:py-28 scroll-mt-24" aria-labelledby="projects-title">
    <div v-entrance class="max-w-7xl mx-auto px-6 md:px-16 flex flex-wrap justify-between items-end gap-8">
      <div><p class="text-sm text-secondary mb-3 tracking-widest">SELECTED WORK</p><h2 id="projects-title" class="text-3xl md:text-5xl text-primary">網站與整合案例</h2></div>
      <div class="max-w-sm"><p class="text-secondary leading-relaxed">從品牌網站到 LINE OA 整合，看看實際畫面與功能。個人專案皆標明性質。</p>
        <p class="mobile-hint mt-3 text-sm text-secondary">左右滑動查看案例 →</p>
      </div>
    </div>
    <div v-entrance="0.12" ref="viewport" class="project-window mt-6 md:mt-10" :class="{ 'is-dragging': dragging }" tabindex="0" role="region" aria-label="作品輪播 可左右滑動" @pointerenter="hovered = true" @pointerleave="hovered = false" @pointerdown="startDrag" @pointermove="moveDrag" @pointerup="endDrag" @pointercancel="endDrag" @lostpointercapture="dragging = false" @dragstart.prevent @click.capture="guardClick">
      <div class="project-track">
        <div class="project-group">
          <TransitionLink v-for="item in projects" :key="item.slug" :to="'/projects/' + item.slug" :transition-title="item.card.title" class="showcase-card" @click="trackProjectView({ id: item.slug, title: item.card.title })">
            <div class="showcase-image"><NuxtImg :src="item.cover" :alt="item.card.title + '實作畫面'" width="960" height="640" format="webp" quality="80" sizes="85vw md:480px" loading="lazy" class="w-full h-full object-cover object-top" /></div>
            <div class="showcase-caption"><p class="text-xs text-secondary mb-3">{{ projectKind(item) }}</p><div class="flex justify-between gap-4 items-start"><h3 class="text-xl md:text-2xl text-primary">{{ item.card.title }}</h3><span aria-hidden="true" class="text-primary">↗</span></div><p class="text-sm text-secondary mt-3 leading-relaxed">{{ item.card.description }}</p></div>
          </TransitionLink>
        </div>
        <div class="project-group project-duplicate" aria-hidden="true">
          <TransitionLink v-for="item in projects" :key="item.slug" :to="'/projects/' + item.slug" :transition-title="item.card.title" tabindex="-1" class="showcase-card" @click="trackProjectView({ id: item.slug, title: item.card.title })">
            <div class="showcase-image"><NuxtImg :src="item.cover" alt="" width="960" height="640" format="webp" quality="80" sizes="480px" loading="lazy" class="w-full h-full object-cover object-top" /></div>
            <div class="showcase-caption"><p class="text-xs text-secondary mb-3">{{ projectKind(item) }}</p><div class="flex justify-between gap-4 items-start"><p class="text-xl md:text-2xl text-primary">{{ item.card.title }}</p><span class="text-primary">↗</span></div><p class="text-sm text-secondary mt-3 leading-relaxed">{{ item.card.description }}</p></div>
          </TransitionLink>
        </div>
      </div>
    </div>
    <p class="desktop-hint max-w-7xl mx-auto px-6 md:px-16 text-xs text-secondary">左右拖曳或使用觸控板滑動查看案例　點擊圖片查看完整內容</p>
  </section>
</template>

<script setup>
import TransitionLink from '~/components/ui/TransitionLink.vue'
defineProps({ projects: { type: Array, default: () => [] } })
const viewport = ref(null)
const hovered = ref(false)
const dragging = ref(false)
let pointerStart = 0
let scrollStart = 0
let activePointer = null
let suppressClick = false
let frame = 0

function startDrag(event) {
  if (event.pointerType !== 'mouse' || event.button !== 0) return
  pointerStart = event.clientX
  scrollStart = viewport.value.scrollLeft
  activePointer = event.pointerId
  suppressClick = false
}
function moveDrag(event) {
  if (activePointer !== event.pointerId) return
  const delta = event.clientX - pointerStart
  if (!dragging.value && Math.abs(delta) < 6) return
  if (!dragging.value) viewport.value.setPointerCapture(event.pointerId)
  dragging.value = true
  suppressClick = true
  viewport.value.scrollLeft = scrollStart - delta
  event.preventDefault()
}
function endDrag() {
  activePointer = null
  dragging.value = false
}
function guardClick(event) {
  if (!suppressClick) return
  event.preventDefault()
  event.stopPropagation()
  suppressClick = false
}

onMounted(() => {
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
  const desktop = window.matchMedia('(min-width: 768px)')
  let previous = 0
  const tick = time => {
    const elapsed = previous ? Math.min(time - previous, 50) : 0
    previous = time
    const el = viewport.value
    if (el && desktop.matches && !motion.matches && !hovered.value && !dragging.value && !el.contains(document.activeElement)) {
      const loopWidth = el.querySelector('.project-group')?.getBoundingClientRect().width ?? 0
      if (loopWidth > 0) {
        el.scrollLeft += elapsed * 0.045
        if (el.scrollLeft >= loopWidth) el.scrollLeft -= loopWidth
      }
    }
    frame = requestAnimationFrame(tick)
  }
  frame = requestAnimationFrame(tick)
})
onBeforeUnmount(() => cancelAnimationFrame(frame))
const { trackProjectView } = useAnalytics()
const projectKind = item => item.slug === 'personal-portfolio' ? '自有品牌網站' : item.type === 'product' ? 'LINE OA 整合方案' : '個人開發專案'
</script>

<style scoped>
.project-showcase { overflow: hidden; }
.project-window { overflow-x: auto; padding: 2rem 0 3rem; cursor: grab; scrollbar-width: none; -ms-overflow-style: none; overscroll-behavior-x: contain; }
.project-window::-webkit-scrollbar { display: none; }
.project-window.is-dragging { cursor: grabbing; user-select: none; }
.is-dragging .showcase-card { pointer-events: none; }
.project-track { display: flex; width: max-content; }
.project-group { display: flex; gap: 2.5rem; padding-right: 2.5rem; align-items: stretch; }
.showcase-card { display: block; flex: 0 0 440px; width: 440px; border: 1px solid var(--color-outline-variant); background: var(--color-surface-container); transform: perspective(1200px) rotateY(-12deg) rotateX(3deg); box-shadow: 14px 20px 30px rgb(0 0 0 / .12); transition: transform 350ms ease, box-shadow 350ms ease; text-decoration: none; }
.showcase-card:hover, .showcase-card:focus-visible { transform: perspective(1200px) rotateY(0deg) rotateX(0deg) translateY(-10px); box-shadow: 10px 24px 35px rgb(0 0 0 / .18); }
.showcase-card:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 6px; }
.showcase-image { height: 290px; overflow: hidden; border-bottom: 1px solid var(--color-outline-variant); }
.showcase-caption { padding: 1.5rem; }
.mobile-hint { display: none; }
@media (max-width: 767px) {
  .project-window { overflow-x: auto; padding: 1.5rem 1.5rem 2.5rem; scroll-snap-type: x mandatory; scroll-padding-inline: 1.5rem; }
  .project-track { animation: none; }
  .project-group { gap: 1.25rem; padding-right: 0; }
  .showcase-card { flex-basis: 82vw; width: 82vw; transform: perspective(1000px) rotateY(-5deg); scroll-snap-align: start; }
  .showcase-image { height: auto; aspect-ratio: 3 / 2; }
  .project-duplicate, .desktop-hint { display: none; }
  .mobile-hint { display: block; }
}
@media (prefers-reduced-motion: reduce) {
  .project-window { overflow-x: auto; padding-inline: 1.5rem; }
  .project-track { animation: none; }
  .project-duplicate, .desktop-hint { display: none; }
  .mobile-hint { display: block; }
  .showcase-card, .showcase-card:hover, .showcase-card:focus-visible { transform: none; transition: none; }
}
</style>
