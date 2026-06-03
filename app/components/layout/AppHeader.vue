<template>
    <UHeader>
      <template #title>
        <span class="text-lg font-bold tracking-tight">ELIO WEI</span>
      </template>

      <template #right>
        <div class="flex items-center gap-1">
          <UColorModeButton class="cursor-pointer"/>

          <template v-for="(item, index) in menus" :key="index">
            <UButton
              :label="item.label"
              color="neutral"
              :variant="item.variant || 'ghost'"
              size="lg"
              :to="item.to"
              :aria-label="`${item.label}按鈕`"
              :class="['text-base', item.UButtonClass]"
            />
          </template>
        </div>
      </template>

      <template #body>
        <UNavigationMenu :items="menus" orientation="vertical" class="-mx-2.5" />
      </template>
    </UHeader>
</template>

<script setup>
const menus = [
  {
    label: '作品集',
    to: '#projects'
  },
  {
    label: '關於我',
    to: '#about'
  },
  {
    label: '技術棧',
    to: '#stack'
  },
  {
    label: '經歷',
    to: '#experience'
  },
  {
    label: '聯絡我',
    to: '#contact'
  },
  {
    label: '合作洽詢',
    variant: 'solid',
    to: '#',
    UButtonClass: 'font-bold'
  }
]

</script>

<style scoped>

</style>