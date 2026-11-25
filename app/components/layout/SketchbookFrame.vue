<template>
  <div id="page-top" class="sketchbook" tabindex="-1">
    <div class="paper-tear paper-tear--page" aria-hidden="true"><span class="paper-tear-intact"></span><span class="paper-tear-bits"></span></div>
    <a href="#main" class="sr-only focus:not-sr-only">跳到主要內容</a>
    <header class="sheet masthead" :class="{ 'is-floating': scrolled, 'is-tucked': hideHeader && !menuOpen }">
      <NuxtLink :to="homeLink('#page-top')" class="masthead-brand" aria-label="Elio Wei 首頁" @click="menuOpen = false">
        <img src="/images/sketchbook/elio-navbar-wordmark.svg" alt="" width="237" height="64" class="masthead-wordmark">
        <small>網站設計與前端開發</small>
      </NuxtLink>
      <nav class="masthead-links" aria-label="主要導覽">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to" :aria-current="link.label === activeLabel ? 'page' : undefined">{{ link.label }}</NuxtLink>
      </nav>
      <div class="mobile-menu" @keydown.esc="closeMenu">
        <button ref="menuButton" type="button" class="menu-toggle" :aria-expanded="menuOpen" :aria-controls="menuId" :aria-label="menuOpen ? '關閉導覽選單' : '開啟導覽選單'" @click="menuOpen = !menuOpen">
          <span class="menu-icon" aria-hidden="true"><span></span><span></span><span></span></span>
        </button>
        <Transition name="paper-menu">
          <nav v-show="menuOpen" :id="menuId" aria-label="手機導覽">
            <NuxtLink v-for="link in links" :key="link.to" :to="link.to" @click="menuOpen = false">{{ link.label }}</NuxtLink>
          </nav>
        </Transition>
      </div>
      <NuxtLink :to="route.path === '/contact' ? '#inquiry-form' : '/contact'" class="ink-button masthead-contact" @click="menuOpen = false"><UIcon name="i-lucide-mail" aria-hidden="true" /> 合作洽詢 ↗</NuxtLink>
    </header>

    <slot />

    <footer class="sheet note-footer">
      <div><NuxtLink to="/" aria-label="Elio Wei 首頁"><strong>Elio Wei<span>.</span></strong></NuxtLink><small>© 2026 Elio Wei. All rights reserved. <NuxtLink to="/privacy" class="note-privacy-link">隱私權說明</NuxtLink></small></div>
      <nav aria-label="頁尾導覽"><NuxtLink v-for="link in links" :key="link.to" :to="link.to">{{ link.label }}</NuxtLink></nav>
      <div class="note-social">
        <a href="https://www.instagram.com/z220168722/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><UIcon name="i-lucide-instagram" aria-hidden="true" /></a>
        <a href="https://www.threads.com/@z220168722" target="_blank" rel="noopener noreferrer" aria-label="Threads"><svg class="social-glyph" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19.4 7.7C18.4 3.9 15.9 2 12 2 6.4 2 3.5 5.5 3.5 12S6.4 22 12 22c5 0 8.5-2.7 8.5-6.5 0-3.5-3.1-5.5-7.5-5.5-3.4 0-5.1 1.5-5.1 3.5 0 1.7 1.3 2.9 3.3 2.9 2.8 0 4.1-1.8 4.1-5.2 0-3.1-1.4-4.8-3.9-4.8-1.5 0-2.7.6-3.5 1.7"/></svg></a>
        <NuxtLink to="/contact" aria-label="合作洽詢"><UIcon name="i-lucide-mail" aria-hidden="true" /></NuxtLink>
      </div>
    </footer>
    <a v-show="showBackToTop" href="#page-top" class="back-to-top" aria-label="回到頂部" title="回到頂部">
      <UIcon name="i-lucide-arrow-up" aria-hidden="true" />
    </a>
  </div>
</template>

<script setup>
const route = useRoute()
const menuId = useId()
const menuButton = ref(null)
const menuOpen = ref(false)
const scrolled = ref(false)
const hideHeader = ref(false)
const showBackToTop = ref(false)
let lastScroll = 0

const homeLink = hash => route.path === '/' ? hash : '/' + hash
const links = computed(() => [
  { label: '首頁', to: homeLink('#page-top') },
  { label: '服務', to: homeLink('#services') },
  { label: '作品', to: homeLink('#projects') },
  { label: '合作流程', to: route.path === '/contact' ? '#contact-process' : homeLink('#process') },
  { label: '關於', to: homeLink('#about') },
  { label: '常見問題', to: homeLink('#faq') },
])

const activeLabel = computed(() =>
  route.path === '/' ? '首頁'
    : route.path.startsWith('/projects') ? '作品'
      : route.path === '/contact' ? '合作流程'
        : null)

function closeMenu() {
  if (!menuOpen.value) return
  menuOpen.value = false
  menuButton.value?.focus()
}

function updateScrollControls() {
  const y = Math.max(0, window.scrollY)
  scrolled.value = y > 32
  showBackToTop.value = y > window.innerHeight * .65
  if (y <= 68) {
    hideHeader.value = false
    lastScroll = y
  } else if (Math.abs(y - lastScroll) >= 10) {
    hideHeader.value = y > lastScroll && !menuOpen.value
    lastScroll = y
  }
}

onMounted(() => {
  lastScroll = Math.max(0, window.scrollY)
  updateScrollControls()
  window.addEventListener('scroll', updateScrollControls, { passive: true })
  window.addEventListener('resize', updateScrollControls)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScrollControls)
  window.removeEventListener('resize', updateScrollControls)
})
</script>

<style src="~/assets/css/sketchbook.css"></style>
