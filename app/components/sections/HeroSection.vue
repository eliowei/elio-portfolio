<template>
  <section class="bg-surface">
    <div class="mx-auto flex min-h-[80vh] max-w-7xl items-center px-8">

      <div class="grid w-full gap-12 max-[1023px]:my-12 lg:grid-cols-2">

        <!-- LEFT -->
        <div>

          <h1 ref="titleRef" class="text-primary text-6xl font-bold">
            Elio Wei
          </h1>

          <h2 ref="subtitleRef" class="mt-4 text-2xl text-secondary">
            Frontend Engineer<br>
            Building Digital Products.
          </h2>

          <p ref="descRef" class="mt-6 text-lg text-secondary">
            專注於 Vue、Nuxt、Node.js與產品開發。
          </p>

          <!-- CTA -->
          <div ref="ctaRef" class="mt-6 flex gap-3">

            <UButton
              label="查看作品集"
              color="primary"
              size="lg"
              to="#projects"
              aria-label="查看作品集按鈕"
              class="font-bold"
            />

            <UButton
              label="與我聯絡"
              color="neutral"
              variant="outline"
              size="lg"
              to="#contact"
              aria-label="與我聯絡按鈕"
              class="font-bold"
            />

          </div>

        </div>

        <TerminalCard />

      </div>
    </div>
  </section>
</template>

<script setup>
const titleRef = ref()
const subtitleRef = ref()
const descRef = ref()
const ctaRef = ref()

const { playLandingHero } = useHero()

onMounted(() => {
  playLandingHero({
    title: titleRef.value,
    subtitle: subtitleRef.value,
    desc: descRef.value,
    cta: ctaRef.value
  })
})
</script>