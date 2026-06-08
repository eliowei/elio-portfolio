<template>
  <div
    class="w-full max-w-md overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-950 shadow-lg terminal-card"
  >
    <div
      class="flex items-center gap-2 border-b border-neutral-800 px-4 py-3"
    >
      <span class="h-3 w-3 rounded-full bg-red-500" />
      <span class="h-3 w-3 rounded-full bg-yellow-500" />
      <span class="h-3 w-3 rounded-full bg-green-500" />
    </div>

    <div
      class="text-sm text-neutral-300 p-5 space-y-2"
    >
    <div>
      <template
        v-for="(line, index) in displayLines"
        :key="index"
      >
        <p :class="line.startsWith('$') ? 'text-green-400' : ''">
          {{ line }}<br>
        </p>
      </template>

      <span
        class="inline-block w-2 h-4 bg-green-400"
        ref="cursor"
      />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'

const cursor = ref()
const displayLines = ref<string[]>([])
const played = useState('terminalPlayed', () => false)

onMounted(() => {

  const bootLines = [
    '$ booting...',
    '$ loading profile...',
    '$ loading projects...',
    '$ success'
  ]

  const finalLines = [
    '$ whoami',
    'Elio Wei',
    '',
    'Frontend Engineer',
    '',
    'Current Focus:',
    '- Vue 3',
    '- Nuxt 3',
    '- TypeScript',
    '- LINE Bot',
    '',
    'Currently Building:',
    '- Personal Website',
    '- Pet Platform'
  ]


  if (played.value) {
    displayLines.value = finalLines
  } else {
    played.value = true

    const tl = gsap.timeline()

    bootLines.forEach((line) => {
      tl.call(() => {
        displayLines.value.push(line)
      })

      tl.to({}, {
        duration: 0.8
      })
    })

    tl.call(() => {
      displayLines.value = finalLines
    })
  }

  gsap.to(cursor.value, {
    opacity: 0,
    duration: 0.5,
    repeat: -1,
    yoyo: true
  })
})

</script>