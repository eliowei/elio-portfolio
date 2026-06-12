<template>
  <section class="bg-surface" id="#hero">
    <div class="max-w-7xl mx-auto px-16 pt-24 md:pt-32 pb-16 border-b border-outline-variant">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div class="lg:col-span-8">
          <span ref="titleRef" class="text-[13px] text-secondary mb-4 block">聯繫</span>
          <h1 ref="subtitleRef" class="text-7xl max-[600px]:text-5xl mb-6 text-primary">合作洽詢</h1>
          <p ref="descRef" class="text-lg text-secondary max-w-2xl">告訴我您的想法與專案需求，我會盡快與您聯繫。</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const titleRef = ref()
const subtitleRef = ref()
const descRef = ref()

const { playLandingHero } = useHero()

onMounted(() => {
  playLandingHero({
    title: titleRef.value,
    subtitle: subtitleRef.value,
    desc: descRef.value,
  })
})

</script>