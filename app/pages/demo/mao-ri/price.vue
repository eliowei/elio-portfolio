<template>
  <div ref="root">
    <MaoriHead title="美容價目">
      <template #lead>依體型 毛況與服務內容收費<br>實際費用會在動工前跟你確認<br><small>以下為示意價格</small></template>
      <img :src="maoriImg('il-sleep')" alt="" class="art" data-mr="mask">
    </MaoriHead>

    <div class="sheet mr-wrap">
      <section class="mr-note dog">
        <h2><MaoriDoodle name="dog" />狗狗美容</h2>
        <table>
          <thead><tr><th scope="col">體型</th><th scope="col">基礎沐浴</th><th scope="col">造型修剪</th></tr></thead>
          <tbody>
            <tr v-for="row in maoriDogPrices" :key="row.size">
              <th scope="row">{{ row.size }}<small>{{ row.weight }}</small></th>
              <td>{{ row.bath }}</td>
              <td>{{ row.trim }}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section class="mr-note cat">
        <h2><MaoriDoodle name="cat" />貓咪美容</h2>
        <table>
          <thead><tr><th scope="col">項目</th><th scope="col">價格</th></tr></thead>
          <tbody><tr v-for="[name, price] in maoriCatPrices" :key="name"><th scope="row">{{ name }}</th><td>{{ price }}</td></tr></tbody>
        </table>
      </section>

      <section>
        <h2><MaoriDoodle name="comb" />加購服務</h2>
        <ul><li v-for="[name, price] in maoriAddons" :key="name"><span>{{ name }}</span><b>{{ price }}</b></li></ul>
      </section>

      <section class="extra">
        <h2>加價條件</h2>
        <p>依實際狀況評估 同意後才進行</p>
        <ul><li v-for="[name, price] in maoriSurcharges" :key="name"><span>{{ name }}</span><b>{{ price }}</b></li></ul>
      </section>
    </div>

    <p class="next mr-wrap">不確定要選哪一項<NuxtLink :to="`${maoriBase}/booking`" class="mr-btn">預約時一起討論</NuxtLink></p>
  </div>
</template>

<script setup lang="ts">
import { maoriAddons, maoriBase, maoriCatPrices, maoriDogPrices, maoriImg, maoriSurcharges } from '~/data/maori'

definePageMeta({ layout: 'maori', pageTransition: { name: 'mr-page', mode: 'out-in' } })
useSeoMeta({ title: '美容價目｜毛日概念提案', description: '依犬貓體型整理的美容、加購與加價條件示意價目。' })
const root = ref<HTMLElement | null>(null)
useMaoriMotion(root)
</script>

<style scoped>
.art { width: min(360px, 100%); }
.sheet { display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr); gap: clamp(1.5rem, 4vw, 3rem); align-items: start; padding-top: 1rem; }
h2 { display: flex; align-items: center; gap: .5rem; margin-bottom: .6rem; }
h2 .mr-doodle { width: 68px; }
table { width: 100%; border-collapse: collapse; text-align: right; }
thead th { border-bottom: 2px solid var(--caramel); font-weight: 700; padding-block: .5rem; }
th:first-child { text-align: left; }
tbody th, td { padding-block: .8rem; border-bottom: 1px dashed var(--wood); font-weight: 400; }
td { white-space: nowrap; padding-left: .75rem; font-variant-numeric: tabular-nums; }
th small { display: block; font-size: .8rem; }
.cat { rotate: .8deg; }
ul li { display: flex; justify-content: space-between; gap: 1rem; padding-block: .6rem; border-bottom: 1px dashed var(--wood); }
li b { white-space: nowrap; font-weight: 500; }
.extra { padding: 1.5rem 1.75rem; background: var(--kraft); rotate: -.8deg; }
.next { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 1rem; padding-top: 0; }
@media (max-width: 860px) { .sheet { grid-template-columns: minmax(0, 1fr); } .mr-note, .extra { padding-inline: 1.1rem; } }
</style>
