<template>
  <section class="py-32 bg-surface" id="contact">
    <div class="max-w-7xl px-6 md:px-16 mx-auto">

      <!-- card -->
      <div class="relative overflow-hidden bg-zinc-950 text-white border border-outline-variant p-12 md:p-20 contact-content">

        <div class="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">

          <!-- left -->
          <div class="max-w-xl">

            <h2 class="font-headline-md text-5xl mb-6">
              Let's Build Something Meaningful.
            </h2>

            <p class="text-lg mb-8">
              目前提供企業形象網站、活動網站、Landing Page 建置，以及 LINE Bot 解決方案。
            </p>

          </div>

          <!-- right CTA -->
          <div>

            <a class="cta-button group" href="/contact" @click.prevent="handleContact">
              <span class="group-hover:scale-110 transition-transform duration-300 group-hover:text-black">
                 合作洽詢
              </span>
            </a>
          </div>

        </div>

        <!-- decoration (dark-safe) -->
        <div
          class="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2
                 w-96 h-96 rounded-full
                 border border-on-primary/10
                 pointer-events-none contact-circle"
        ></div>

      </div>

    </div>
  </section>
</template>

<script setup>

const { reveal } = useReveal()
const { navigate } = usePageNavigation()

const handleContact = async () => {
  await navigate('/contact', '合作洽詢')
}

onMounted(() => {
  reveal({ selector: '.contact-content', trigger: '#contact', y: 40, start: 'top 60%' })
  reveal({ selector: '.contact-circle', trigger: '#contact', y: 0, scale: 0.8, duration: 1, start: 'top 80%'})
})
</script>