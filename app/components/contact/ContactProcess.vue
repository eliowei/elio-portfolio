<template>
  <section id="contact-process" class="inquiry-process" aria-labelledby="inquiry-process-title">
    <div class="sheet inquiry-process-inner">
      <h2 id="inquiry-process-title">從想法到上線</h2>
      <p>透過清楚的流程與溝通，把網站從想法做到正式上線。</p>
      <ol class="inquiry-process-list">
        <li v-for="(step, index) in steps" :key="step.title" class="paper-note inquiry-paper">
          <span class="note-index"><span>0{{ index + 1 }}</span></span>
          <UIcon :name="step.icon" aria-hidden="true" />
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </li>
      </ol>
      <svg class="contact-scenery inquiry-process-grass" viewBox="0 0 88 42" aria-hidden="true">
        <path d="M35 39C27 27 17 24 5 29c10 0 17 4 25 10m11-2c-2-11 2-23 10-31-1 12-5 25-8 33m7-1c5-8 15-14 29-14-9 3-17 9-23 15" />
      </svg>
      <img src="/images/sketchbook/inquiry-mountain-left.webp" alt="" width="380" height="87" loading="lazy" class="inquiry-mountain inquiry-mountain-left">
      <img src="/images/sketchbook/inquiry-mountain-right.webp" alt="" width="560" height="212" loading="lazy" class="inquiry-mountain">
    </div>
  </section>
</template>

<script setup>
const steps = [
  { title: '諮詢與需求確認', description: '了解品牌定位、專案目標、預算範圍與預期成果。', icon: 'i-lucide-messages-square' },
  { title: '規劃與報價', description: '提供功能規劃、技術建議、開發時程與報價方案。', icon: 'i-lucide-panels-top-left' },
  { title: '開發與交付', description: '完成開發、測試與上線，並提供後續維護建議。', icon: 'i-lucide-rocket' },
]
</script>
