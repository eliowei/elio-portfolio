<template>
<figure class="min-w-0">
  <div class="border-t border-paperBorder py-4">
    <fieldset class="flex flex-wrap items-center justify-between gap-2 border-b border-paperBorder pb-3">
      <legend class="sr-only">案例預覽裝置</legend>
      <span class="text-xs font-semibold text-sumiMuted">個人品牌網站</span>
      <div class="flex gap-1 rounded-lg bg-washiDarker p-1">
        <label v-for="device in devices" :key="device.id" class="cursor-pointer">
          <input v-model="preview" type="radio" name="preview-device" :value="device.id" class="peer sr-only">
          <span class="block rounded-md px-3 py-2 text-xs font-semibold text-sumi peer-checked:bg-vermilionDark peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2">{{ device.label }}</span>
        </label>
      </div>
    </fieldset>
    <div class="mt-4 grid min-h-60 place-items-center overflow-hidden rounded-xl border border-paperBorder bg-washiDarker p-3 sm:min-h-72">
      <NuxtImg v-if="preview === 'desktop'" src="/images/projects/personal-website/cover.png" width="1904" height="866" sizes="100vw lg:650px" alt="個人品牌網站桌機實作畫面" class="w-full rounded-md border border-paperBorder shadow-washi-md" />
      <div v-else class="w-44 rounded-[1.4rem] border-[5px] border-sumi bg-washiCard p-3 text-sumi shadow-washi-md">
        <div class="mx-auto mb-3 h-1 w-8 rounded-full bg-sumi" aria-hidden="true"></div>
        <p class="border-b border-paperBorder pb-2 text-xs font-bold">Elio Wei</p>
        <p class="mt-3 font-serif text-sm font-bold leading-snug">為小型品牌與<br>專業服務者做網站</p>
        <p class="mt-2 text-[10px] text-sumiMuted">網站規劃、設計與開發</p>
        <span class="mt-3 inline-block rounded bg-vermilionDark px-2 py-1 text-[10px] text-white">網站服務</span>
        <p class="mt-4 border-t border-paperBorder pt-2 text-[10px] font-semibold">網站與整合案例</p>
      </div>
    </div>
    <figcaption class="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-sumiMuted">
      <span aria-live="polite">{{ preview === 'desktop' ? '桌機實作畫面 · 自有專案' : '手機版面示意 · 自有專案' }}</span>
      <NuxtLink class="font-semibold text-vermilion hover:underline" to="/projects/personal-portfolio">查看完整案例 ↗</NuxtLink>
    </figcaption>
  </div>
</figure>
</template>
<script setup>
const devices = [{ id: 'desktop', label: '桌機' }, { id: 'mobile', label: '手機' }]
const preview = ref('desktop')
</script>
