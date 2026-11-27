<template>
  <div ref="root">
    <MaoriHead title="美容服務">
      <template #lead>依毛孩的需求提供清潔到造型的服務<br>讓牠們乾淨舒服 也更有自信</template>
      <img :src="maoriImg('il-pair')" alt="" class="art" data-mr="mask">
    </MaoriHead>

    <div class="list mr-wrap">
      <section v-for="(service, index) in maoriServices" :id="service.id" :key="service.id" :class="{ flip: index % 2 }">
        <MaoriPhoto :name="service.photo" :alt="service.alt" :tilt="index % 2 ? 2 : -2" ratio="3 / 2" :tape="index === 0" />
        <div>
          <h2><MaoriDoodle :name="service.doodle" />{{ service.name }}</h2>
          <p class="mr-lines">{{ service.text }}</p>
          <dl>
            <template v-for="(value, label) in service.facts" :key="label"><dt>{{ label }}</dt><dd>{{ value }}</dd></template>
          </dl>
          <NuxtLink :to="{ path: `${maoriBase}/booking`, query: { service: service.id } }" class="mr-more">預約{{ service.name }} →</NuxtLink>
        </div>
      </section>
    </div>

    <section class="flow mr-band mr-tear-top mr-tear-bottom">
      <div class="mr-wrap">
        <h2>美容流程</h2>
        <ol>
          <li v-for="(step, index) in maoriSteps" :key="step.title">
            <span aria-hidden="true">{{ index + 1 }}</span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.text }}</p>
          </li>
        </ol>
        <NuxtLink :to="`${maoriBase}/price`" class="mr-more">查看價目 →</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { maoriBase, maoriImg, maoriServices, maoriSteps } from '~/data/maori'

definePageMeta({ layout: 'maori', pageTransition: { name: 'mr-page', mode: 'out-in' } })
useSeoMeta({ title: '美容服務｜毛日概念提案', description: '基礎沐浴、造型修剪、細節照護與貓咪美容的內容、時間與做法。' })
const root = ref<HTMLElement | null>(null)
useMaoriMotion(root)
</script>

<style scoped>
.art { width: min(340px, 100%); }
.list { display: grid; gap: clamp(3rem, 7vw, 5.5rem); }
section[id] { scroll-margin-top: 6rem; }
.list section { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr); gap: clamp(1.5rem, 5vw, 4.5rem); align-items: center; }
.list .flip > :first-child { order: 2; }
h2 { display: flex; align-items: center; gap: .5rem; }
.list h2 .mr-doodle { width: 76px; }
.list p { margin-block: .4rem 1rem; }
dl { display: grid; grid-template-columns: 6.5em 1fr; border-top: 2px solid var(--wood); margin-bottom: .8rem; }
dt, dd { margin: 0; padding-block: .45rem; border-bottom: 1px dashed var(--wood); font-size: .95rem; }
dt { font-weight: 700; }

.flow .mr-wrap { padding-block: 5rem; }
.flow ol { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1.5rem; margin-block: 1.8rem 1rem; }
.flow li { position: relative; }
.flow li span { display: grid; place-items: center; width: 40px; height: 40px; margin-bottom: .6rem; border-radius: 50%; background: var(--coffee); color: #fff; }
/* Hand-drawn arrow between steps. */
.flow li:not(:last-child)::after { content: '→'; position: absolute; top: 0; right: 14%; font-family: var(--mr-hand); font-size: 1.8rem; }

@media (max-width: 760px) {
  .list section { grid-template-columns: minmax(0, 1fr); }
  .list .flip > :first-child { order: 0; }
  .flow ol { grid-template-columns: minmax(0, 1fr); }
  .flow li:not(:last-child)::after { display: none; }
}
</style>
