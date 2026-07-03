<template>
  <UHeader
    v-model:open="open"
    :ui="{
      root: 'bg-surface/90 border-b border-outline-variant backdrop-blur-sm',
      content: 'bg-surface'
    }"
  >
    <!-- TITLE -->
    <template #left>
        <img alt="Logo" class="h-9 w-auto cursor-pointer dark:invert" src="/images/logo.png" @click.prevent="handleLogoClick"/>
    </template>

    <!-- RIGHT -->
    <template #right>
      <div class="flex items-center gap-4">

        <UColorModeButton class="cursor-pointer"/>

        <template v-for="item in menus" :key="item.label">

          <!-- CTA -->
          <UButton
            v-if="item.type === 'primary'"
            :label="item.label"
            color="primary"
            variant="solid"
            size="lg"
            @click="handleNavigate(item.to)"
            class="hidden lg:inline-flex font-bold cursor-pointer"
          />

          <!-- NAV LINK -->
          <!-- <NuxtLink
            v-else
            :to="item.to"
            @click.prevent="handleNavigate(item.to)"
            class="nav-link hidden lg:inline-flex"
          >
            {{ item.label }}
          </NuxtLink> -->

          <button
            v-else
            @click="handleNavigate(item.to)"
            class="nav-link hidden lg:inline-flex cursor-pointer"
          >
            {{ item.label }}
          </button>

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

  const handleNavigate = async (to) => {

  open.value = false
   
      if (to === '/contact') {
        await navigate(to, '合作洽詢')
      } else {
        await navigate(to)
      }
    }

  const menus = [
    {
      label: '作品集',
      to: '/#projects',
      type: 'link'
    },
    {
      label: '關於我',
      to: '/#about',
      type: 'link'
    },
    {
      label: '技術棧',
      to: '/#stack',
      type: 'link'
    },
    {
      label: '聯絡我',
      to: '/#contact',
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