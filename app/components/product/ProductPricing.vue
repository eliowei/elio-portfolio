<template>
  <section class="mb-section transition-all duration-700 opacity-100 translate-y-0" id="price">
  <div class="mb-16">
  <h2 class="text-4xl mb-2">{{price.title}}</h2>
  <p class="font-body-md text-secondary">{{price.description}}</p>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-gutter max-w-5xl mx-auto">

  <div class="p-12 border-2 text-primary border-primary bg-surface flex flex-col relative price-card">
    <div class="mb-12">
      <h3 class="font-headline-md text-3xl font-bold mb-2">{{ price.plans[0].name }}</h3>
      <p class="text-secondary text-sm">{{ price.plans[0].subtitle }}</p>
    </div>
      <div class="mb-12">
        <span class="font-label-mono text-caption align-top mr-1">NT$</span>
        <span class="font-display-lg-mobile text-5xl font-bold">{{ price.plans[0].price }}</span>
        <span class="text-caption text-secondary">{{ price.plans[0].suffix }}</span>
      </div>
      <ul v-if="price.plans[0].featured" class="space-y-6 mb-16 grow border-t border-outline-variant pt-12">
        <template v-for="(item, index) in price?.plans[0].features" :key="index">
          <li class="flex items-start gap-3">
            <span class="material-symbols-outlined text-primary">check_circle</span>
            <span class="text-sm font-body-md">{{ item }}</span>
          </li>
        </template>
      </ul>
        <UButton
          :label="price.plans[0].button.text"
          color="primary"
          size="lg"
          :aria-label="`${price.plans[0].button.text}按鈕`"
          class="flex justify-center items-center py-5 hover:scale-[1.02] transition-all cursor-pointer"
          @click="handleContact(price.plans[1].button.link)"
        />
  </div>
  <!-- Custom Plan -->
  <div class="p-12 border border-outline-variant bg-surface-container-low text-primary flex flex-col relative price-card">
    <div class="mb-12">
      <h3 class="font-headline-md text-3xl font-bold mb-2">{{ price.plans[1].name }}</h3>
      <p class="text-secondary text-sm">{{ price.plans[1].subtitle }}</p>
    </div>
    <div class="mb-12">
      <span class="font-display-lg-mobile text-4xl font-bold">{{ price.plans[1].priceText }}</span>
    </div>

  <ul v-if="price.plans[1].featured" class="space-y-6 mb-16 grow border-t border-outline-variant pt-12">
    <li v-for="(item, index) in price?.plans[1].features" :key="index" class="flex items-start gap-3">
    <span class="material-symbols-outlined text-primary">add</span>
    <span class="text-sm font-body-md">{{ item }}</span>
    </li>
  </ul>
  <UButton
    :label="price.plans[1].button.text"
    variant="outline"
    size="lg"
    :aria-label="`${price.plans[1].button.text}按鈕`"
    class="flex justify-center items-center py-5 hover:scale-[1.02] transition-all cursor-pointer"
    @click="handleContact(price.plans[1].button.link)"
  />
  </div>
  </div>
  <p class="py-2 text-center text-secondary text-sm">以上為標準導入方案，實際內容可依店家需求與加購功能彈性調整，歡迎預約諮詢，我將協助您規劃最適合的導入方案。</p>
  </section>
</template>

<script setup>
const { revealPrices } = usePrices()
const { navigate } = usePageNavigation()
const { trackContactClick } = useAnalytics()

const handleContact = async (link) => {
  trackContactClick('product_page')
  await navigate(link, '合作洽詢')
}

defineProps({
  price: Object
})

onMounted(() => {
  revealPrices()
})
</script>