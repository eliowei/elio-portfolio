<template>
  <section class="py-32 bg-surface" id="contact">
    <div class="max-w-7xl px-6 md:px-16 mx-auto">

      <!-- card -->
      <div v-entrance class="relative overflow-hidden bg-zinc-950 text-white border border-outline-variant p-12 md:p-20 contact-content">

        <div class="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">

          <!-- left -->
          <div class="max-w-xl">

            <h2 class="font-headline-md text-5xl mb-6">
              準備讓品牌有自己的網站
            </h2>

            <p class="text-lg mb-8">
              告訴我你的服務、網站用途與預計時間。即使預算和內容還沒確定，也可以先從需求討論開始。
            </p>

          </div>

          <!-- right CTA -->
          <div>

            <a class="cta-button group" href="/contact" @click.prevent="handleContact">
              <span class="group-hover:scale-110 transition-transform duration-300 group-hover:text-black">
                 討論網站需求
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

const { navigate } = usePageNavigation()
const { trackContactClick } = useAnalytics()

const handleContact = async () => {
  trackContactClick('home')
  await navigate('/contact', '合作洽詢')
}

</script>