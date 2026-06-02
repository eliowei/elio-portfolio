<template>
  <section class="mx-auto flex min-h-[80vh] max-w-7xl items-center px-8">
    <div class="grid w-full gap-12 lg:grid-cols-2">
      <div>
        <h1 class="text-6xl font-bold">
          Elio Wei
        </h1>

        <h2 class="mt-4 text-2xl text-neutral-600">
          前端工程師
        </h2>

        <p class="mt-6 text-lg text-neutral-500 my-6">
          持續打造自己的產品與 Side Projects 
        </p>

        <button class="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-sm">查看作品集</button>
        <button class="border border-gray-400 hover:bg-gray-100 text-black font-bold py-2 px-4 rounded-sm mx-2">與我聯絡</button>
      </div>
      <TerminalCard />
    </div>
  </section>
</template>