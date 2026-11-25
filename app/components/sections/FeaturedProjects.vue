<template>
  <div class="work-deck" @pointerenter="hovered = $event.pointerType === 'mouse'" @pointerleave="hovered = false">
    <div id="project-carousel" ref="carousel" class="work-track" tabindex="0" role="region" aria-label="精選作品輪播" @scroll.passive="updateActive" @pointerdown="resetAfterInput" @wheel.passive="resetAfterInput" @focusin="focused = true" @focusout="focused = $event.currentTarget.contains($event.relatedTarget)" @keydown.left.self.prevent="move(-1)" @keydown.right.self.prevent="move(1)">
      <article v-for="({ item, copy }, slot) in slides" :key="copy + item.slug" class="work-card" :class="{ 'is-current': slot === scrollIndex }" :aria-hidden="copy ? 'true' : undefined">
        <NuxtLink :to="item.path" :external="item.slug === 'line-oa-platform'" class="block" :tabindex="copy ? -1 : undefined" @click="trackProjectView({ id: item.slug, title: item.card.title })">
          <NuxtImg :src="item.cover" :alt="item.card.title + '實作畫面'" width="640" sizes="68vw md:320px" loading="lazy" />
          <h3>{{ item.card.title }} ↗</h3>
        </NuxtLink>
      </article>
    </div>
    <div v-if="projects.length > 1" class="work-controls">
      <button type="button" aria-label="上一個作品" aria-controls="project-carousel" @click="move(-1)">←</button>
      <span class="tabular-nums" :aria-live="autoplayActive ? 'off' : 'polite'">{{ active + 1 }} / {{ projects.length }}</span>
      <button type="button" aria-label="下一個作品" aria-controls="project-carousel" @click="move(1)">→</button>
      <button type="button" aria-controls="project-carousel" class="px-2" @click="playing = !playing">{{ playing ? '暫停播放' : '自動播放' }}</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ projects: { type: Array, default: () => [] } })
const carousel = ref(null)
const active = ref(0)
const scrollIndex = ref(0)
const mobile = ref(false)
const mounted = ref(false)
const playing = ref(true)
const hovered = ref(false)
const focused = ref(false)
const visible = ref(false)
let requested = null
let timer
let settleTimer
let observer
let mobileQuery

const buffer = computed(() => mounted.value && !mobile.value && props.projects.length > 3 ? 3 : 0)
const slides = computed(() => {
  const items = props.projects.map((item, index) => ({ item, index, copy: '' }))
  if (!buffer.value) return items
  const before = items.slice(-buffer.value).map(item => ({ ...item, copy: 'before-' }))
  const after = items.slice(0, buffer.value).map(item => ({ ...item, copy: 'after-' }))
  return [...before, ...items, ...after]
})
const autoplayActive = computed(() =>
  playing.value && visible.value && !hovered.value && !focused.value && props.projects.length > 1
  && (mobile.value || buffer.value > 0)
)

function schedule() {
  clearTimeout(timer)
  if (autoplayActive.value && !document.hidden) timer = setTimeout(() => move(1), 8000)
}

function resetAfterInput() {
  requested = null
  schedule()
}

watch(autoplayActive, schedule)

async function updateMode() {
  mobile.value = mobileQuery.matches
  mounted.value = true
  requested = null
  clearTimeout(settleTimer)
  await nextTick()
  goTo(buffer.value + active.value, 'instant')
}

onMounted(() => {
  mobileQuery = window.matchMedia('(max-width: 680px)')
  mobileQuery.addEventListener('change', updateMode)
  updateMode()
  playing.value = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  observer = new IntersectionObserver(([entry]) => {
    visible.value = entry.isIntersecting && entry.intersectionRatio >= 0.35
  }, { threshold: 0.35 })
  observer.observe(carousel.value)
  document.addEventListener('visibilitychange', schedule)
})

onUnmounted(() => {
  mobileQuery?.removeEventListener('change', updateMode)
  observer?.disconnect()
  document.removeEventListener('visibilitychange', schedule)
  clearTimeout(timer)
  clearTimeout(settleTimer)
})

function slidePosition(track, slide) {
  return Math.min(slide.offsetLeft - track.firstElementChild.offsetLeft, track.scrollWidth - track.clientWidth)
}

function goTo(index, behavior = 'auto') {
  const track = carousel.value
  const slide = track?.children[index]
  if (!slide) return
  const left = slidePosition(track, slide)
  requested = index
  if (Math.abs(track.scrollLeft - left) < 2) updateActive()
  else track.scrollTo({ left, behavior })
}

function updateActive() {
  const track = carousel.value
  if (!track?.children.length) return
  const position = index => Math.abs(slidePosition(track, track.children[index]) - track.scrollLeft)
  const index = requested !== null && track.children[requested] && position(requested) < 2
    ? requested
    : Array.from(track.children).reduce((nearest, _, i) => position(i) < position(nearest) ? i : nearest, 0)
  scrollIndex.value = index
  active.value = slides.value[index]?.index ?? 0
  if (index === requested) requested = null
  clearTimeout(settleTimer)
  settleTimer = setTimeout(() => {
    const original = buffer.value + active.value
    if (buffer.value && scrollIndex.value !== original) goTo(original, 'instant')
  }, 150)
}

function move(step) {
  const total = props.projects.length
  if (total < 2 || (!mobile.value && !buffer.value)) return
  const next = buffer.value
    ? Math.max(buffer.value - 1, Math.min(buffer.value + total, (requested ?? scrollIndex.value) + step))
    : ((requested ?? active.value) + step + total) % total
  goTo(next)
  schedule()
}

const { trackProjectView } = useAnalytics()
</script>
