<template>
  <section class="py-12 border-y border-outline-variant overflow-hidden bg-white dark:bg-neutral-950">

    <div class="flex flex-col gap-6">

      <!-- ROW 1 -->
      <div class="flex whitespace-nowrap animate-marquee">

        <div class="flex gap-8 items-center px-4">

          <template v-for="(item, key) in row" :key="key">

            <span
              class="font-headline-md text-primary"
              :class="key % 2 === 0 ? 'opacity-30' : 'opacity-100'"
            >
              {{ item }}
            </span>

            <span
              v-if="key < row.length - 1"
              class="w-2 h-2 rounded-full bg-outline-variant"
            />

          </template>

        </div>

        <!-- duplicate -->
        <div class="flex gap-8 items-center px-4">
          <template v-for="(item, key) in row" :key="`dup-${key}`">

            <span
              class="font-headline-md text-primary"
              :class="key % 2 === 0 ? 'opacity-30' : 'opacity-100'"
            >
              {{ item }}
            </span>

            <span
              v-if="key < row.length - 1"
              class="w-2 h-2 rounded-full bg-outline-variant"
            />

          </template>
        </div>

      </div>

      <!-- ROW 2 -->
      <div class="flex whitespace-nowrap animate-marquee-reverse">

        <div class="flex gap-8 items-center px-4">

          <template v-for="(item, key) in row2" :key="key">

            <span
              v-if="key % 2 === 1"
              class="text-outline-variant"
            >
              {{ item }}
            </span>

            <span
              v-else-if="key % 4 === 0"
              class="font-label-mono text-xl uppercase text-secondary"
            >
              {{ item }}
            </span>

            <span
              v-else
              class="font-label-mono text-xl uppercase text-primary opacity-60"
            >
              {{ item }}
            </span>

          </template>

        </div>

        <!-- duplicate -->
        <div class="flex gap-8 items-center px-4">

          <template v-for="(item, key) in row2" :key="`dup2-${key}`">

            <span
              v-if="key % 2 === 1"
              class="text-outline-variant"
            >
              {{ item }}
            </span>

            <span
              v-else-if="key % 4 === 0"
              class="font-label-mono text-xl uppercase text-secondary"
            >
              {{ item }}
            </span>

            <span
              v-else
              class="font-label-mono text-xl uppercase text-primary opacity-60"
            >
              {{ item }}
            </span>

          </template>

        </div>

      </div>

    </div>

  </section>
</template>

<script setup>
const row = ['GAMING MEETUP PLATFORM', 'MARIO WEB GAME', 'PORTFOLIO WEBSITE', 'PET PLATFORM (COMING SOON)', 'LINE BOT']
const row2 = ['Vue', '/', 'Nuxt', '/', 'Node.js', '/', 'MongoDB', '/', 'WebSocket', '/', 'TypeScript', '/']
</script>