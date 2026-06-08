<template>
  <section class="bg-surface">
    <div class="mx-auto flex min-h-[80vh] max-w-7xl items-center px-8">

      <div class="grid w-full gap-12 max-[1023px]:my-12 lg:grid-cols-2">

        <!-- LEFT -->
        <div>

          <h1 class="text-primary text-6xl font-bold hero-title">
            Elio Wei
          </h1>

          <h2 class="mt-4 text-2xl text-secondary hero-subtitle">
            Frontend Engineer<br>
            Building Digital Products.
          </h2>

          <p class="mt-6 text-lg text-secondary hero-desc">
            專注於 Vue、Nuxt、Node.js與產品開發。
          </p>

          <!-- CTA -->
          <div class="mt-6 flex gap-3 hero-cta">

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
import gsap from 'gsap';

onMounted(() => {
  const tl = gsap.timeline()

  tl.from('.hero-title', {
    y: 20,
    opacity: 0,
    duration: 0.6
  })
    .from('.hero-subtitle', {
      y: 15,
      opacity: 0,
      duration: 0.5
    }, '-=0.3')
    .from('.hero-desc', {
      y: 15,
      opacity: 0,
      duration: 0.5
    }, '-=0.3')
    .from('.hero-cta', {
      y: 10,
      opacity: 0,
      duration: 0.4
    }, '-=0.2')
})
</script>