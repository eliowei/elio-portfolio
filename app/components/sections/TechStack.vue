<template>
<!-- Tech Stack -->
<section class="py-32 px-6 md:px-16 max-w-7xl mx-auto" id="stack">
  <div class="text-center mb-16 reveal">
  <h2 class="font-headline-md text-primary text-4xl mb-4">技術棧</h2>
  <div class="w-12 h-1 bg-primary mx-auto"></div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
    <template v-for="(item, index) in skills" :key="index">
      <div>
        <h4 class="font-label-mono text-secondary uppercase mb-6 border-b border-outline-variant pb-2">{{ item.type }}</h4>
        <ul class="space-y-4">
          <li v-for="(stack, stackIndex) in item.stack" :key="stackIndex" class="flex justify-between items-center group">
            <span class="font-body-md group-hover:pl-2 transition-all">{{ stack.name }}</span>
            <span class="text-[10px] font-label-mono text-secondary opacity-0 group-hover:opacity-100 transition-opacity">{{ stack.degree }}</span>
          </li>
        </ul>
      </div>
    </template>
  </div>
</section>
</template>

<script setup>
const skills = [
  {
    type: '前端開發',
    stack: [
      {
        name: 'Vue',
        degree: '熟練'
      },
      {
        name: 'Nuxt',
        degree: '基礎'
      },
      {
        name: 'Vuetify',
        degree: '熟練'
      },
      {
        name: 'PrimeVue',
        degree: '熟練'
      },
      {
        name: 'Tailwind CSS',
        degree: '熟練'
      },
      {
        name: 'Bootstrap',
        degree: '熟練'
      }
    ]
  },
  {
    type: '後端開發',
    stack: [
      {
        name: 'Node.js',
        degree: '進階'
      },
      {
        name: 'Express / H3',
        degree: '進階'
      },
      {
        name: 'MongoDB',
        degree: '熟練'
      },
    ]
  },
  {
    type: '基礎/工具',
    stack: [
      {
        name: 'Git / GitHub',
        degree: '熟練'
      },
      {
        name: 'Figma',
        degree: '設計'
      },
      {
        name: 'GitPage / Cloudflare / Render',
        degree: '部署'
      },
    ]
  }
]

</script>