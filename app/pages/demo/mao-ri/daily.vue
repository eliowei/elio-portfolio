<template>
  <div ref="root">
    <MaoriHead title="美容日常">
      <template #lead>記錄每一位來到毛日的毛孩<br>那些放鬆又有點好笑的時刻<br><small>照片與紀錄皆為示意</small></template>
      <MaoriDoodle name="sleep" class="art" />
    </MaoriHead>

    <section class="album mr-wrap" aria-labelledby="mr-album">
      <div class="bar">
        <h2 id="mr-album">生活相簿</h2>
        <div role="group" aria-label="依種類篩選">
          <button v-for="kind in kinds" :key="kind" type="button" :aria-pressed="kind === filter" @click="choose(kind)">{{ kind }}</button>
        </div>
        <div class="arrows">
          <button type="button" aria-label="往前翻" @click="scroll(-1)">←</button>
          <button type="button" aria-label="往後翻" @click="scroll(1)">→</button>
        </div>
      </div>
      <p class="sr-only" role="status">目前顯示 {{ shown.length }} 筆紀錄</p>
      <ul ref="strip" class="strip">
        <li v-for="(pet, index) in shown" :key="pet.id">
          <button type="button" :aria-label="`放大看${pet.name}的紀錄`" @click="openAt(index)">
            <img :src="maoriImg(`daily-${pet.id}`)" :alt="`${pet.breed}${pet.name}`" loading="lazy">
            <span class="mr-hand">{{ pet.name }}<small>{{ pet.date }}</small></span>
          </button>
          <p>{{ pet.breed }}　{{ pet.service }}<span class="mr-lines">{{ pet.note }}</span></p>
        </li>
      </ul>
    </section>

    <section class="mr-band mr-tear-top mr-tear-bottom">
      <div class="pairs mr-wrap">
        <header>
          <h2>美容前後對照</h2>
          <p>左右拖曳照片或用鍵盤方向鍵比較<br><small>示意照片</small></p>
        </header>
        <figure v-for="pet in maoriCompares" :key="pet.image" data-mr="photo">
          <MaoriCompare :image="pet.image" :name="pet.name" />
          <figcaption><b>{{ pet.name }}</b>　{{ pet.breed }}　{{ pet.service }}<span class="mr-lines">{{ pet.note }}</span></figcaption>
        </figure>
      </div>
    </section>

    <!-- Native dialog: focus trapping, Escape and focus return come with it. -->
    <dialog ref="dialog" class="zoom" aria-label="美容紀錄放大檢視" @click.self="dialog?.close()" @keydown.left.prevent="step(-1)" @keydown.right.prevent="step(1)">
      <figure v-if="current">
        <img :src="maoriImg(`daily-${current.id}`)" :alt="`${current.breed}${current.name}`">
        <figcaption aria-live="polite">
          <h3>{{ current.name }}</h3>
          <p>{{ current.breed }}　{{ current.service }}　{{ current.date }}</p>
          <p class="mr-lines">{{ current.note }}</p>
        </figcaption>
        <div>
          <button type="button" aria-label="上一筆" @click="step(-1)">←</button>
          <span>{{ openIndex + 1 }} / {{ shown.length }}</span>
          <button type="button" aria-label="下一筆" @click="step(1)">→</button>
          <button type="button" class="close" autofocus @click="dialog?.close()">關閉</button>
        </div>
      </figure>
    </dialog>
  </div>
</template>

<script setup lang="ts">
import { maoriCompares, maoriDaily, maoriImg, type MaoriKind } from '~/data/maori'

definePageMeta({ layout: 'maori', pageTransition: { name: 'mr-page', mode: 'out-in' } })
useSeoMeta({ title: '美容日常｜毛日概念提案', description: '毛孩美容紀錄相簿與美容前後對照。' })

const kinds = ['全部', '狗狗', '貓咪'] as const
const filter = ref<'全部' | MaoriKind>('全部')
const shown = computed(() => maoriDaily.filter(pet => filter.value === '全部' || pet.kind === filter.value))

// Native scroll snapping handles swiping; the arrows only move the same scroll position.
const strip = ref<HTMLElement | null>(null)
const behavior = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
function scroll(direction: number) {
  const el = strip.value
  el?.scrollBy({ left: direction * el.clientWidth * .8, behavior: behavior() })
}
function choose(kind: typeof filter.value) {
  filter.value = kind
  strip.value?.scrollTo({ left: 0, behavior: 'instant' })
}

const dialog = ref<HTMLDialogElement | null>(null)
const openIndex = ref(0)
const current = computed(() => shown.value[openIndex.value])
function openAt(index: number) {
  openIndex.value = index
  dialog.value?.showModal()
}
function step(direction: number) {
  openIndex.value = (openIndex.value + direction + shown.value.length) % shown.value.length
}

const root = ref<HTMLElement | null>(null)
useMaoriMotion(root)
</script>

<style scoped>
.art { width: 180px; }
.album { padding-top: 1.5rem; }
.bar { display: flex; flex-wrap: wrap; align-items: center; gap: 1rem 2rem; margin-bottom: 1.5rem; }
.bar > div { display: flex; gap: .5rem; }
.arrows { margin-left: auto; }
.bar button, .zoom button { min-width: 48px; min-height: 44px; padding-inline: 1rem; border: 1px solid var(--caramel); border-radius: 12px; cursor: pointer; }
.bar button[aria-pressed='true'] { background: var(--caramel); color: #fff; }
/* No scrollbar: the arrows, swiping and keyboard focus move the strip. */
.strip { display: flex; gap: 1.5rem; overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none; padding: .75rem .5rem 1.5rem; }
.strip::-webkit-scrollbar { display: none; }
.strip li { flex: 0 0 min(300px, 78%); scroll-snap-align: start; }
.strip li:nth-child(even) { padding-top: 2rem; }
.strip button { display: block; width: 100%; padding: 10px 10px 12px; background: #fffdf8; box-shadow: 0 6px 16px #49362824; cursor: zoom-in; rotate: -1.5deg; transition: rotate var(--mr-fast); }
.strip li:nth-child(even) button { rotate: 2deg; }
.strip li button:hover { rotate: 0deg; }
.strip img { width: 100%; aspect-ratio: 4 / 5; object-fit: cover; }
.strip span { display: flex; justify-content: space-between; align-items: baseline; padding-top: .5rem; font-size: 1.5rem; }
.strip small { font-size: .85rem; }
.strip p { margin-top: .8rem; font-size: .9rem; }

.pairs { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 2.5rem clamp(1.5rem, 4vw, 3.5rem); max-width: 960px; padding-block: 5rem; }
.pairs header { grid-column: 1 / -1; }
.pairs figure { margin: 0; padding: 12px 12px 16px; background: var(--paper); box-shadow: 0 8px 22px #49362826; }
.pairs figure:nth-of-type(odd) { rotate: -1deg; }
.pairs figure:nth-of-type(even) { rotate: 1.2deg; }
.pairs figcaption { padding-top: .7rem; font-size: .9rem; }

.zoom { width: min(560px, calc(100% - 2rem)); max-height: calc(100svh - 2rem); margin: auto; padding: 1rem; border: 0; background: var(--paper); color: var(--coffee); overflow: auto; }
.zoom::backdrop { background: #1c120ad9; }
.zoom figure { margin: 0; }
.zoom img { width: 100%; max-height: 58svh; object-fit: contain; }
.zoom figcaption { padding-block: .8rem; }
.zoom div { display: flex; align-items: center; gap: .75rem; }
.zoom .close { margin-left: auto; }
:global(html:has(.zoom[open])) { overflow: hidden; }

@media (max-width: 760px) { .pairs { grid-template-columns: minmax(0, 1fr); } .art { display: none; } .arrows { margin-left: 0; } }
</style>
