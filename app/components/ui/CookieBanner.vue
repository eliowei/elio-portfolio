<template>
  <div id="cookie-consent" class="fixed bottom-8 right-8 max-w-100 bg-surface/90 backdrop-blur-md border border-outline-variant z-50 p-6 rounded-xl shadow-2xl transition-all duration-700 mx-4 md:mx-0">
    <div class="flex flex-col gap-6">
      <p>
        <span class="mr-2">🍪</span>
        <span class="font-bold text-on-surface">Cookie 使用說明</span> 
      </p>
      <p class="text-base text-secondary">
        本網站使用分析 Cookie 了解網站使用情況，並持續改善內容與體驗。
      </p>
      <div class="flex gap-4 items-center justify-end w-full">
        <button class="font-label-mono text-caption uppercase tracking-widest text-secondary hover:text-primary hover:underline transition-all cursor-pointer" @click="reject">
          [ 拒絕 ]
        </button>
        <button class="font-label-mono text-caption uppercase tracking-widest text-on-primary bg-primary px-6 py-2 hover:opacity-90 transition-all cursor-pointer" @click="accept">
          [ 接受 ]
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cookie-enter-active,
.cookie-leave-active {
  transition: all .3s;
}

.cookie-enter-from,
.cookie-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>

<script setup lang="ts">

const emit = defineEmits<{ accept: [], reject: []}>()

const accept = () => emit('accept')

const reject = () => emit('reject')

</script>