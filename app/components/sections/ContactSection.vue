<template>
  <section class="py-32 bg-surface" id="contact">
    <div class="max-w-7xl px-6 md:px-16 mx-auto">

      <!-- card -->
      <div class="relative overflow-hidden bg-zinc-950 text-white border border-outline-variant p-12 md:p-20">

        <div class="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">

          <!-- left -->
          <div class="max-w-xl">

            <h2 class="font-headline-md text-5xl mb-6">
              Let's Build Something Meaningful.
            </h2>

            <p class="text-lg mb-8">
              目前開放接案、合作開發與技術交流。
            </p>

            <div class="flex flex-wrap justify-center md:justify-start gap-8">

              <a class="contact-link" href="mailto:contact@eliowei.com">EMAIL</a>
              <a class="contact-link" href="#">GITHUB</a>
              <a class="contact-link" href="#">LINKEDIN</a>
              <a class="contact-link" href="#">LINE</a>

            </div>

          </div>

          <!-- right CTA -->
          <div>
            <a class="cta-button group" href="mailto:contact@eliowei.com">
              <span class="group-hover:scale-110 transition-transform duration-300 group-hover:text-black">
                TALK
              </span>
            </a>
          </div>

        </div>

        <!-- decoration (dark-safe) -->
        <div
          class="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2
                 w-96 h-96 rounded-full
                 border border-on-primary/10
                 pointer-events-none"
        ></div>

      </div>

    </div>
  </section>
</template>