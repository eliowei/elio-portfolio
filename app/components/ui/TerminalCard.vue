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
      class="text-sm text-neutral-300 p-5 space-y-2 min-h-95"
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

const cursor = ref()
const displayLines = ref<string[]>([])
const played = useState('terminalPlayed', () => false)

const { playBootAnimation, blinkCursor } = useTerminal()

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


onMounted(() => {
  const isMobile = window.matchMedia('(max-width: 1023px)').matches
  if (played.value) {
    displayLines.value = finalLines
  } else {
    played.value = true

    playBootAnimation(displayLines, finalLines)
  }
  if (cursor.value) {
    blinkCursor(cursor.value)
  }
})

</script>