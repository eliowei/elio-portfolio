<template>
  <section class="mx-auto flex min-h-[80vh] max-w-7xl items-center px-8">
    <div class="grid w-full gap-12 lg:grid-cols-2">
      <div>
        <h1 class="text-6xl font-bold">
          Elio Wei
        </h1>

        <h2 class="mt-4 text-2xl text-neutral-600">
          Frontend Engineer<br>
          Building Digital Products.
        </h2>

        <p class="mt-6 text-lg text-neutral-500 my-6">
          專注於 Vue、Nuxt、Node.js與產品開發。
        </p>
        <UButton
          label="查看作品集"
          color="neutral"
          size="lg"
          to="#projects"
          aria-label="查看作品集按鈕"
          class="text-base font-bold mr-2"
        />
        <UButton
          label="與我聯絡"
          color="neutral"
          variant="outline"
          size="lg"
          to="#"
          aria-label="與我聯絡按鈕"
          class="text-base font-bold"
        />
      </div>
      <TerminalCard />
    </div>
  </section>
</template>