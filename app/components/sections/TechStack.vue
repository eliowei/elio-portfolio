<template>
  <section class="py-32 bg-surface border-b border-outline-variant" id="stack">

    <div class="max-w-7xl mx-auto px-6 md:px-16">

      <!-- title -->
      <div class="text-center mb-16">
        <h2 class="font-headline-md text-primary text-4xl mb-4">
          技術棧
        </h2>
        <div class="w-12 h-1 bg-primary mx-auto"></div>
      </div>

      <!-- grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">

        <template v-for="(item, index) in skills" :key="index">

          <div class="skill-group">

            <h4 class="font-label-mono text-secondary uppercase mb-6 border-b border-outline-variant pb-2">
              {{ item.type }}
            </h4>

            <ul class="space-y-4">

              <li
                v-for="(stack, i) in item.stack"
                :key="i"
                class="skill-item"
              >

                <span class="skill-name">
                  {{ stack.name }}
                </span>

                <span class="skill-degree">
                  {{ stack.degree }}
                </span>

              </li>

            </ul>

          </div>

        </template>

      </div>

    </div>

  </section>
</template>

<script setup>
const { reveal } = useReveal()

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
        name: 'GitPage / Cloudflare / Render / Vercel',
        degree: '部署'
      },
    ]
  }
]

onMounted(() => {
  reveal({ selector: '.skill-group', trigger: '#stack', y: 30, stagger: 0.2, start: 'top 50%', stagger: 0.15 })
})

</script>