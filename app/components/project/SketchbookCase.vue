<template>
  <main id="main" ref="caseRoot" class="sketchbook-case">
    <div v-if="paperSweeping" class="paper-tear case-arrival-paper" aria-hidden="true" @animationend.self="paperSweeping = false"><span class="paper-tear-intact"></span><span class="paper-tear-bits"></span></div>
    <div class="sheet case-main-sheet">
      <section class="case-hero" :class="{ 'case-hero--arriving': workArrival }" aria-labelledby="case-title">
        <div>
          <NuxtLink to="/#projects" class="case-back" @click.capture="rememberReturnedWork">← 返回作品列表</NuxtLink>
          <p class="note-index">Project Note / <span>{{ String(project.order).padStart(2, '0') }}</span></p>
          <h1 id="case-title"><span>{{ project.title.trim() }}</span></h1>
          <p class="case-label">{{ project.caseStudy?.label ?? project.category }}</p>
          <p>{{ project.description }}</p>
          <ul class="case-tags" aria-label="專案標籤"><li v-for="tag in project.tags" :key="tag">{{ tag }}</li></ul>
          <div class="case-actions">
            <NuxtLink v-if="project.demo" :to="project.demo" external target="_blank" rel="noopener noreferrer" class="ink-button"><UIcon name="i-lucide-external-link" aria-hidden="true" /> {{ isConcept ? '前往展示網站' : '前往實際網站' }} ↗</NuxtLink>
            <NuxtLink v-else-if="pricing" to="#case-pricing" class="ink-button">查看導入方案 ↓</NuxtLink>
          </div>
        </div>
        <figure class="case-cover">
          <svg class="case-decoration case-leaf-corner" viewBox="0 0 86 94" aria-hidden="true">
          <path d="M7 89Q43 55 65 10M30 65Q10 62 7 43q20 3 23 22Zm10-12q4-22 31-26-7 19-31 26Zm8-13Q28 33 29 14q17 5 19 26Zm8-7Q55 14 73 4q1 21-17 29Z" />
          <path class="case-leaf-veins" d="m13 48 13 13m18-12 19-16M33 21l12 15m15-8L69 9" />
        </svg>
          <svg class="case-decoration case-leaf-cover" viewBox="0 0 62 64" aria-hidden="true">
            <path fill="none" d="M60 13C47 14 35 22 23 35L13 52M58 14Q45 9 32 12m18 6Q34 17 23 22m20 1q-2 11-3 18m-9-13Q18 35 9 39" />
            <path d="M53 14Q44 5 33 12q8 8 20 2Zm-13 8Q29 15 20 23q9 7 20-1Zm-9 9q-12-2-16 8 11 0 16-8Zm-10 8Q10 42 10 56q10-6 11-17Zm12-9q6 10-3 21-5-11 3-21Zm14-9q7 10-1 20-5-8 1-20Zm-35 17q-9-1-11 6 7 1 11-6Z" />
            <path class="case-leaf-veins" d="m39 12 9 2m-23 9 9-1m-16 14 8-4M12 51l6-8m12 3 2-11m15 2 1-12M3 43l6-4" />
          </svg>
          <svg class="case-cover-rays" viewBox="0 0 40 36" fill="none" aria-hidden="true"><path d="m7 16-2-9m11 8 6-11m0 18 12-5" /></svg>
          <div ref="heroPhoto" class="case-photo">
            <NuxtImg :src="project.cover" :alt="project.title.trim() + '的專案畫面'" sizes="100vw lg:640px" width="960" fetchpriority="high" />
          </div>
          <span class="case-cover-elio case-cover-elio--press" aria-hidden="true">
            <img src="/images/sketchbook/pose-tape-press.webp" width="340" height="379" alt="">
            <svg v-if="workArrival" class="case-tape-strokes" viewBox="0 0 36 28" fill="none">
              <path pathLength="1" d="m5 17 10 2" />
              <path pathLength="1" d="m12 5 7 7" />
            </svg>
          </span>
        </figure>
      </section>

      <section class="case-chapter case-overview" aria-labelledby="case-overview-title">
        <div>
          <p class="note-index"><span>01</span> Overview</p>
          <h2 id="case-overview-title">關於這個專案</h2>
          <h3>{{ project.overview.title }}</h3>
          <p>{{ project.overview.content }}</p>
        </div>
        <div class="case-overview-art">
          <div class="case-overview-landscape" aria-hidden="true">
            <svg class="case-overview-cloud" viewBox="0 0 80 36" fill="none" aria-hidden="true"><path d="M4 29q5-10 17-8 3-9 13-8 6-10 17-5 6 3 7 9 13-2 18 8-26 6-72 4Z" /></svg>
            <img class="case-ridge" src="/images/sketchbook/result-ridge.webp" alt="" width="360" height="65" loading="lazy">
          </div>
          <aside class="paper-note case-scope">
            <h3 class="tape-label">{{ project.type === 'product' ? '導入範圍' : isConcept ? '製作範圍' : '合作範圍' }}</h3>
            <ul class="case-checklist">
              <li v-for="item in scope" :key="item">
                <svg viewBox="0 0 23 23" class="case-result-check" fill="none" aria-hidden="true"><path d="m3 6 14-1 1 14-14 1Z" /><path d="m6 11 4 4 10-11" /></svg>{{ item }}
              </li>
            </ul>
          </aside>
          <img class="case-overview-desk" src="/images/sketchbook/case-overview-desk.webp" width="480" height="209" alt="" loading="lazy" decoding="async">
        </div>
      </section>

      <section v-if="project.showcase?.length" class="case-chapter case-spread" aria-labelledby="case-highlights-title">
        <div>
          <p class="note-index"><span>02</span> Highlights</p>
          <h2 id="case-highlights-title">{{ project.type === 'product' ? '專案亮點' : '網站設計亮點' }}</h2>
        </div>
        <div class="case-highlight-list">
          <article v-for="item in project.showcase" :key="item.title" class="paper-note">
            <svg v-if="['image', 'devices', 'map'].includes(item.icon)" class="case-highlight-art" viewBox="0 0 74 57" aria-hidden="true">
              <g v-if="item.icon === 'image'" transform="rotate(-7 37 29)">
                <path fill="#dfb981" d="M9 8 64 6l1 43-55 2Z" />
                <path fill="#d4e0e2" d="m14 13 44-2 2 32-45 2Z" />
                <path fill="#b5be91" d="m16 37 12-15 11 12 8-9 12 12v6l-44 2Z" />
                <circle cx="48" cy="19" r="4" fill="#f5cb75" />
              </g>
              <g v-else-if="item.icon === 'devices'">
                <rect x="6" y="8" width="47" height="34" rx="3" fill="#d9bc92" />
                <path fill="#fff0d5" d="M11 13h37v21H11Z" />
                <path d="M28 42v7m-9 1h23" />
                <rect x="46" y="24" width="18" height="29" rx="3" fill="#f0d8ad" />
                <path d="M50 29h10v17H50Zm4 20h2" />
              </g>
              <g v-else>
                <path fill="#f5e3bd" d="m6 21 19-8 21 8 18-8 5 34-21 7-21-8-21 8Zm19-8 2 33m19-25 2 33" />
                <path fill="#dc926b" d="M36 34C19 17 24 4 36 4s17 13 0 30Z" />
                <circle cx="36" cy="14" r="4" fill="#fff2d8" />
              </g>
            </svg>
            <span v-else class="case-highlight-art case-highlight-symbol" aria-hidden="true">
              <UIcon :name="item.icon || 'i-lucide-file-text'" />
            </span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </article>
        </div>
      </section>

      <section v-if="processSteps.length" class="case-chapter case-spread case-process" aria-labelledby="case-process-title">
        <div>
          <p class="note-index"><span>03</span> Process</p>
          <h2 id="case-process-title">{{ project.type === 'product' ? '規劃與導入過程' : '設計與開發過程' }}</h2>
        </div>
        <ol class="case-process-list">
          <li v-for="(step, index) in processSteps" :key="step.title" class="paper-note">
            <span class="case-step">0{{ index + 1 }}</span>
            <img
              v-if="step.illustration"
              :src="'/images/sketchbook/process/' + step.illustration + '.webp'"
              alt=""
              width="288"
              height="168"
              loading="lazy"
              decoding="async"
              class="case-process-art"
            >
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </li>
        </ol>
      </section>

      <section v-if="gallery.length" class="case-chapter case-spread case-result" aria-labelledby="case-result-title">
        <div>
          <p class="note-index"><span>04</span> Result</p>
          <h2 id="case-result-title">實際成果展示</h2>
          <p v-if="project.caseStudy?.result">{{ project.caseStudy.result }}</p>
        </div>
        <img class="case-decoration case-result-grass-start" src="/images/sketchbook/result-grass.webp" width="200" height="155" alt="" loading="lazy">
        <div class="case-result-display">
          <svg class="case-decoration case-result-rays" viewBox="0 0 38 38" fill="none" aria-hidden="true"><path d="M8 16 3 7m12 9 4-13m2 21 13-8" /></svg>
          <div class="case-device-scene" :class="{ 'case-device-scene--paired': resultPreviews.length > 1 }">
            <img class="case-decoration case-result-ridge" src="/images/sketchbook/result-ridge.webp" width="360" height="65" alt="" loading="lazy">
            <img class="case-decoration case-result-grass" src="/images/sketchbook/result-grass.webp" width="200" height="155" alt="" loading="lazy">
            <button v-for="preview in resultPreviews" :key="preview.image" type="button"
              class="case-device" :class="'case-device--' + preview.device"
              :aria-label="'放大 ' + preview.title" @click="openImage(preview.index)">
              <span class="case-device-bezel">
                <NuxtImg :src="preview.image" :alt="preview.title" :width="preview.device === 'phone' ? 400 : 960"
                  :sizes="preview.device === 'phone' ? '160px' : '90vw md:520px'" loading="lazy" />
              </span>
            </button>
          </div>
          <div class="paper-note case-screen-index">
            <h3 class="tape-label">主要頁面</h3>
            <ul class="case-checklist">
              <li v-for="(item, index) in gallery" :key="item.image">
                <button type="button" @click="openImage(index)">
                  <svg viewBox="0 0 23 23" class="case-result-check" fill="none" aria-hidden="true"><path d="m3 6 14-1 1 14-14 1Z" /><path d="m6 11 4 4 10-11" /></svg>{{ item.title }}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section v-if="pricing" id="case-pricing" class="case-chapter" aria-labelledby="case-pricing-title">
        <h2 id="case-pricing-title">{{ pricing.title }}</h2>
        <p>{{ pricing.description }}</p>
        <div class="case-pricing">
          <article v-for="plan in pricing.plans" :key="plan.name" class="paper-note">
            <h3>{{ plan.name }}</h3>
            <p>{{ plan.subtitle }}</p>
            <p class="case-price">{{ plan.price != null ? 'NT$ ' + numberFormat.format(plan.price) : plan.priceText }} <small v-if="plan.suffix">{{ plan.suffix }}</small></p>
            <ul class="case-checklist"><li v-for="feature in plan.features" :key="feature"><UIcon name="i-lucide-square-check-big" aria-hidden="true" />{{ feature }}</li></ul>
            <NuxtLink :to="contactLink(plan.button.link, plan.price != null ? 'line_oa_template' : 'line_oa_advanced')" class="ink-button">{{ plan.button.text }} ↗</NuxtLink>
          </article>
        </div>
      </section>

      <section v-if="project.product?.faq?.items.length" class="case-chapter" aria-labelledby="case-faq-title">
        <h2 id="case-faq-title">{{ project.product.faq.title || '常見問題' }}</h2>
        <dl class="case-faq-list">
          <div v-for="item in project.product.faq.items" :key="item.question"><dt>{{ item.question }}</dt><dd>{{ item.answer }}</dd></div>
        </dl>
      </section>

      <details v-if="project.type === 'product' && (project.problem?.items?.length || project.benefits?.length || project.industries?.length)" class="case-technical">
        <summary>查看適用情境與導入細節</summary>
        <div class="case-technical-grid">
          <article v-for="item in project.problem?.items" :key="item.title">
            <h3>{{ item.title }}</h3><p>{{ item.description }}</p>
          </article>
          <article v-if="project.benefits?.length">
            <h3>導入後可使用</h3><p>{{ project.benefits.join('、') }}</p>
          </article>
          <article v-for="industry in project.industries" :key="industry.title">
            <h3>{{ industry.title }}</h3><p>{{ industry.items.join('、') }}</p>
          </article>
        </div>
      </details>
    </div>

    <section class="case-invitation" aria-labelledby="case-invitation-title">
      <div class="sheet case-invitation-inner">
        <svg class="case-decoration case-leaf-invitation" viewBox="0 0 86 94" aria-hidden="true">
          <path d="M7 89Q43 55 65 10M30 65Q10 62 7 43q20 3 23 22Zm10-12q4-22 31-26-7 19-31 26Zm8-13Q28 33 29 14q17 5 19 26Zm8-7Q55 14 73 4q1 21-17 29Z" />
          <path class="case-leaf-veins" d="m13 48 13 13m18-12 19-16M33 21l12 15m15-8L69 9" />
        </svg>
        <NuxtImg src="/images/sketchbook/desk.webp" alt="" width="480" height="270" sizes="200px" loading="lazy" />
        <div>
          <h2 id="case-invitation-title">{{ offer?.title ?? '也想打造屬於你的網站嗎？' }}</h2>
          <p>{{ offer?.description ?? '告訴我你的想法、網站用途和預計時間，我們可以一起確認怎麼開始。' }}</p>
          <NuxtLink :to="contactLink(offer?.link ?? '/contact', project.type === 'product' ? 'line_oa_template' : '')" class="ink-button"><UIcon name="i-lucide-mail" aria-hidden="true" /> {{ offer?.button ?? '開始合作洽詢' }} ↗</NuxtLink>
        </div>
      </div>
    </section>
    <dialog ref="lightbox" class="case-lightbox" aria-label="案例圖片預覽" @keydown.left.prevent="stepImage(-1)" @keydown.right.prevent="stepImage(1)">
      <div v-if="currentImage">
        <button type="button" class="case-lightbox-close" aria-label="關閉圖片" autofocus @click="lightbox.close()">×</button>
        <NuxtImg v-for="(item, index) in gallery" v-show="index === imageIndex" :key="item.image" :src="item.image" :alt="item.title" loading="eager" />
        <div class="case-lightbox-caption">
          <button type="button" aria-label="上一張圖片" @click="stepImage(-1)">←</button>
          <p>{{ currentImage.title }} · {{ imageIndex + 1 }} / {{ gallery.length }}</p>
          <button type="button" aria-label="下一張圖片" @click="stepImage(1)">→</button>
        </div>
      </div>
    </dialog>
  </main>
</template>

<script setup>
import { takeWorkCover } from '~/utils/work-page-transition'

const props = defineProps({ project: { type: Object, required: true } })
const returnWork = useState('return-work-slug', () => null)
function rememberReturnedWork(event) {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
  returnWork.value = props.project.slug
}

const gallery = computed(() => props.project.gallery ?? [])
const resultPreviews = computed(() => {
  const entries = gallery.value.map((item, index) => ({ ...item, index, device: item.device ?? 'laptop' }))
  const laptop = entries.find(item => item.device === 'laptop')
  const phone = entries.find(item => item.device === 'phone')
  return [laptop, phone].filter(Boolean)
})
// A demo hosted on this site is a self-initiated concept, not a client's live website.
const isConcept = computed(() => props.project.demo?.startsWith('/'))
const pricing = computed(() => props.project.product?.pricing)
const offer = computed(() => props.project.product?.cta)
const scope = computed(() => props.project.caseStudy?.scope ?? props.project.highlights ?? [])
const processSteps = computed(() => props.project.caseStudy?.process ?? props.project.implementation ?? [])
const numberFormat = new Intl.NumberFormat('zh-TW')

const heroPhoto = ref(null)
const workArrival = ref(false)
const paperSweeping = ref(false)
let coverAnimation

const caseRoot = ref(null)
let revealObserver
let pending = []
let onPageEnd = null

onMounted(() => {
  const from = takeWorkCover(props.project.slug)
  if (from) animateWorkArrival(from) // synchronous: no unpainted frame before the paper covers the page
  watchChapters()
})

// Chapters below the hero fade and rise in once their top is well inside the screen (30% up from the bottom on
// desktop, 15% on phones): the sections are tall, so triggering at the edge would play the animation unseen.
// Anything already on screen is left alone.
function watchChapters() {
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const inset = window.innerWidth >= 1024 ? 30 : 15
  const reveal = el => {
    el.classList.remove('is-awaiting-reveal')
    el.classList.add('is-revealing')
    revealObserver.unobserve(el)
  }
  revealObserver = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) reveal(entry.target)
  }, { rootMargin: `0px 0px -${inset}% 0px` })
  pending = []
  for (const chapter of caseRoot.value.querySelectorAll('.case-chapter, .case-invitation')) {
    if (chapter.getBoundingClientRect().top < window.innerHeight * (1 - inset / 100)) continue
    chapter.classList.add('is-awaiting-reveal')
    revealObserver.observe(chapter)
    pending.push(chapter)
  }
  // The last sections can never rise above the trigger line once the page has reached its end: show them then.
  onPageEnd = () => {
    if (window.innerHeight + window.scrollY < document.documentElement.scrollHeight - 4) return
    for (const el of pending) if (el.classList.contains('is-awaiting-reveal')) reveal(el)
  }
  window.addEventListener('scroll', onPageEnd, { passive: true })
}

function animateWorkArrival(from) {
  const frame = heroPhoto.value
  if (!from || !frame?.animate || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  // The old page is already gone, so there is no card position to fly from.
  // Sequence: paper tears open (0-520ms) -> cover is lifted in the slit -> Elio presses it flat.
  window.scrollTo({ top: 0, behavior: 'instant' })
  workArrival.value = true
  paperSweeping.value = true
  coverAnimation = frame.animate([
    { transform: 'translateY(-16px) rotate(-1.6deg) scale(1.035)' },
    { transform: 'none' },
  ], { duration: 280, delay: 400, easing: 'cubic-bezier(.3,1.35,.5,1)', fill: 'backwards' })
}

onBeforeUnmount(() => {
  revealObserver?.disconnect()
  if (onPageEnd) window.removeEventListener('scroll', onPageEnd)
  coverAnimation?.cancel()
})

const lightbox = ref(null)
const imageIndex = ref(null)
const currentImage = computed(() => gallery.value[imageIndex.value])

// All gallery images stay in the dialog. The visible one changes only after the next is decoded,
// so the previous picture stays on screen instead of an empty frame.
let requestedImage = 0

function imageReady(index) {
  return lightbox.value?.querySelectorAll('img')[index]?.decode().catch(() => {})
}

async function openImage(index) {
  requestedImage = imageIndex.value = index
  await nextTick()
  await imageReady(index)
  if (requestedImage === index && !lightbox.value?.open) lightbox.value?.showModal()
}

async function stepImage(step) {
  const next = (requestedImage + step + gallery.value.length) % gallery.value.length
  requestedImage = next
  await imageReady(next)
  if (requestedImage === next) imageIndex.value = next
}

function contactLink(path, service) {
  return path === '/contact' && service ? { path, query: { service } } : path
}
</script>

<style src="~/assets/css/sketchbook-case.css"></style>
