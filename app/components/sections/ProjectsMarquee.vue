<template>
  <!-- Projects Marquee -->
<section class="py-12 border-y border-outline-variant overflow-hidden bg-white">
  <div class="flex flex-col gap-6">
    <!-- Row 1 -->
    <div class="flex whitespace-nowrap animate-marquee">
      <div class="flex gap-8 items-center px-4">
        <template v-for="(items, key) in row" :key="key">
          <span 
            :class="[
              'font-headline-md text-primary',
              key % 2 === 0 ? 'opacity-20' : ''
            ]"
          >{{ items }}</span>
          <span v-if="key <= row.length - 1" class="w-2 h-2 rounded-full bg-black dark:bg-white"></span>
        </template>
      </div>
      <!-- Duplicate for infinite effect -->
      <div class="flex gap-8 items-center px-4">
        <template v-for="(items, key) in row" :key="`dup-${key}`">
          <span 
            :class="[
              'font-headline-md text-primary',
              (key + row.length) % 2 === 0 ? 'opacity-20' : ''
            ]"
          >{{ items }}</span>
          <span v-if="key <= row.length - 1" class="w-2 h-2 rounded-full bg-black dark:bg-white"></span>
        </template>
      </div>
    </div>
    <!-- Row 2 -->
    <div class="flex whitespace-nowrap animate-marquee-reverse">
      <div class="flex gap-8 items-center px-4">
        <template v-for="(items, key) in row2" :key="key">
          <span 
            v-if="key % 2 === 1"
            class="text-outline"
          >{{ items }}</span>
          <span 
            v-else-if="key % 4 === 0"
            class="font-label-mono text-xl uppercase text-secondary"
          >{{ items }}</span>
          <span 
            v-else
            class="font-label-mono text-xl uppercase text-primary opacity-50"
          >{{ items }}</span>
        </template>
      </div>
      <!-- Duplicate for infinite effect -->
      <div class="flex gap-8 items-center px-4">
        <template v-for="(items, key) in row2" :key="key">
          <span 
            v-if="key % 2 === 1"
            class="text-outline"
          >{{ items }}</span>
          <span 
            v-else-if="key % 4 === 0"
            class="font-label-mono text-xl uppercase text-secondary"
          >{{ items }}</span>
          <span 
            v-else
            class="font-label-mono text-xl uppercase text-primary opacity-50"
          >{{ items }}</span>
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