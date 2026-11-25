<template>
  <UHeader
    v-model:open="open"
    :ui="{
      root: 'bg-washi/90 border-b border-paperBorder backdrop-blur-md',
      content: 'bg-washi'
    }"
  >
    <!-- TITLE -->
    <template #left>
      <NuxtLink to="/" class="group flex items-center gap-3 text-sumi" aria-label="Elio Wei 首頁" @click.prevent="handleLogoClick">
        <span aria-hidden="true" class="studio-serif grid size-9 place-items-center rounded-lg bg-vermilionDark text-lg font-bold text-white">E</span>
        <span>
          <span class="flex items-center gap-2"><span class="studio-serif text-lg font-bold">Elio Wei.</span></span>
          <span class="block text-[11px] text-sumiMuted">獨立網站設計與開發</span>
        </span>
      </NuxtLink>
    </template>

    <!-- RIGHT -->
    <template #right>
      <div class="flex items-center gap-4">

        <ThemeToggle />

        <template v-for="item in menus" :key="item.label">

          <!-- CTA -->
          <NuxtLink
            v-if="item.type === 'primary'"
            :to="item.to"
            class="hidden rounded-lg bg-vermilionDark px-4 py-2.5 text-sm font-semibold text-white hover:brightness-90 lg:inline-flex"
            @click.prevent="handleNavigate(item.to)"
          >{{ item.label }} ↗</NuxtLink>

          <NuxtLink
            v-else
            :to="item.to"
            @click.prevent="handleNavigate(item.to)"
            class="hidden cursor-pointer text-sm text-sumi hover:text-vermilion lg:inline-flex"
          >
            {{ item.label }}
          </NuxtLink>

        </template>

      </div>
    </template>

    <!-- MOBILE MENU -->
    <template #body>
      <UNavigationMenu
        :items="mobileMenus"
        orientation="vertical"
        class="-mx-2.5"
      />
    </template>

  </UHeader>
</template>

<script setup>
  const { navigate } = usePageNavigation()
  const route = useRoute()
  const open = ref(false)
  const { trackContactClick } = useAnalytics()

  const handleNavigate = async (to) => {
    open.value = false

    if (route.path === to) return

    if (to === '/contact') {
      trackContactClick('navbar')
      await navigate(to, '合作洽詢')
    } else {
      await navigate(to)
    }
  }

  const menus = [
    {
      label: '網站服務',
      to: '/#services',
      type: 'link'
    },
    {
      label: '案例作品',
      to: '/#projects',
      type: 'link'
    },
    {
      label: '合作流程',
      to: '/#process',
      type: 'link'
    },
    {
      label: '關於 Elio',
      to: '/#about',
      type: 'link'
    },
    {
      label: '常見問題',
      to: '/#faq',
      type: 'link'
    },
    {
      label: '合作洽詢',
      to: '/contact',
      type: 'primary'
    }
  ]

  const mobileMenus = menus.map(item => ({
    label: item.label,
    onSelect: () => handleNavigate(item.to)
  }))

  const handleLogoClick = async () => {
    if (route.path === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      return
    }

    await navigate('/')
  }

</script>