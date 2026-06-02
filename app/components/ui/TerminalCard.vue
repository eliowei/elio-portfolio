<template>
  <div
    class="w-full max-w-md overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-950 shadow-lg"
  >
    <div
      class="flex items-center gap-2 border-b border-neutral-800 px-4 py-3"
    >
      <span class="h-3 w-3 rounded-full bg-red-500" />
      <span class="h-3 w-3 rounded-full bg-yellow-500" />
      <span class="h-3 w-3 rounded-full bg-green-500" />
    </div>

    <div
      class="font-mono text-sm text-neutral-300 p-5 space-y-2"
    >
      <p class="text-green-400">$ whoami</p>

      <p>Elio Wei</p>

      <p class="mt-4">Frontend Engineer</p>

      <div class="mt-4">
        <p class="text-neutral-500">Current Focus:</p>
        <ul class="mt-2 space-y-1">
          <li>- Vue 3</li>
          <li>- Nuxt 3</li>
          <li>- TypeScript</li>
          <li>- LINE Bot</li>
        </ul>
      </div>

      <div class="mt-4">
        <p class="text-neutral-500">Currently Building:</p>
        <ul class="mt-2 space-y-1">
          <li>- Personal Website</li>
          <li>- Pet Platform</li>
        </ul>
      </div>
    </div>
  </div>
</template>