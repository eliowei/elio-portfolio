    <template>
      <UHeader class="bg-surface/90 border-b border-outline-variant backdrop-blur-sm">

        <!-- TITLE -->
        <template #left>
            <img alt="Logo" class="h-9 w-auto cursor-pointer" src="/images/logo.png" @click.prevent="handleNavigate('/#')"/>
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
                :to="item.to"
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

    const handleNavigate = async (to) => {
      await navigate(to)
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
        to: '#',
        type: 'primary'
      }
    ]

    const mobileMenus = menus.map(item => ({
      label: item.label,
      onSelect: () => handleNavigate(item.to)
    }))

    </script>