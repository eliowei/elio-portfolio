<template>
<section class="py-16 md:py-24" id="contact">
<div class="max-w-5xl mx-auto px-6">
<div class="bg-washiDarker rounded-3xl p-8 sm:p-12 md:p-14 border border-paperBorder shadow-washi-lg relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
<div class="space-y-3 max-w-xl text-left">
<div class="inline-flex items-center gap-2">

<span class="text-xs font-mono text-sumiMuted">WELCOME INQUIRIES</span>
</div>
<h2 class="text-2xl sm:text-3xl md:text-4xl font-serif font-black text-sumi tracking-tight">
            準備讓品牌有自己的網站？
          </h2>
<p class="text-sm sm:text-base text-sumiMuted leading-relaxed">
            告訴我你的服務、網站用途與預計時間。即使預算和內容還沒確定，也可以先從需求討論開始。
          </p>
</div>
<div class="shrink-0 w-full md:w-auto">
<NuxtLink class="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-vermilionDark hover:brightness-90 text-white font-serif font-bold text-base shadow-washi-md hover:shadow-washi-lg transition-all active:scale-[0.98]" :to="{ path: '/contact', query: service ? { service } : {} }" @click="trackContactClick('home')">
<span>{{ service === 'landing' ? '討論一頁式網站' : service === 'corporate' ? '討論品牌網站' : '討論網站需求' }}</span>
<svg aria-hidden="true" class="w-4 h-4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" viewBox="0 0 24 24">
<line x1="7" x2="17" y1="17" y2="7"></line>
<polyline points="7 7 17 7 17 17"></polyline>
</svg>
</NuxtLink>

</div>
</div>
</div>
</section>
</template>
<script setup>
defineProps({ service: { type: String, default: '' } })
const { trackContactClick } = useAnalytics()
</script>
