<template>
  <ClientOnly>
    <div class="theme-control" :class="{ 'is-dark': isDark }" role="group" aria-label="網站色系">
      <span class="theme-indicator" aria-hidden="true" />
      <button type="button" class="theme-option" aria-label="淺色" title="淺色" :aria-pressed="!isDark" :disabled="switching" @click="toggle($event, 'light')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="12" r="3.5"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></svg>
      </button>
      <button type="button" class="theme-option" aria-label="深色" title="深色" :aria-pressed="isDark" :disabled="switching" @click="toggle($event, 'dark')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><path d="M20.5 14A8.5 8.5 0 0 1 10 3.5 8.5 8.5 0 1 0 20.5 14Z"/></svg>
      </button>
    </div>
    <template #fallback><span class="theme-control theme-placeholder" aria-hidden="true"><span>淺色</span><span>深色</span></span></template>
  </ClientOnly>
</template>
<script setup>
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
const switching = ref(false)
let transition
const animations = []

async function toggle(event, next) {
  if (switching.value || next === colorMode.value) return
  const apply = async () => {
    colorMode.preference = next
    await nextTick()
  }
  if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    await apply()
    return
  }
  const bounds = event.currentTarget.getBoundingClientRect()
  const x = bounds.left + bounds.width / 2
  const y = bounds.top + bounds.height / 2
  const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
  switching.value = true
  document.documentElement.classList.add('theme-reveal')
  try {
    transition = document.startViewTransition(apply)
    await transition.ready
    const duration = 1100
    // A feathered wavefront reveals the new theme without blurring page content.
    const feather = Math.min(100, radius * 0.12)
    const wave = Array.from({ length: 41 }, (_, i) => {
      const progress = i / 40
      const distance = -feather + (radius + feather * 2 + 54) * progress
      const stops = [
        ['#000', distance - 54], ['rgba(0,0,0,.88)', distance - 40],
        ['#000', distance - 26], ['rgba(0,0,0,.76)', distance - 10],
        ['transparent', distance + feather]
      ].map(([color, stop]) => color + ' ' + Math.max(0, stop) + 'px').join(', ')
      const mask = 'radial-gradient(circle at ' + x + 'px ' + y + 'px, ' + stops + ')'
      return { maskImage: mask, webkitMaskImage: mask }
    })
    const supportsMask = CSS.supports('mask-image', 'radial-gradient(black, transparent)')
    const reveal = document.documentElement.animate(
      supportsMask ? wave : { clipPath: ['circle(0px at ' + x + 'px ' + y + 'px)', 'circle(' + radius + 'px at ' + x + 'px ' + y + 'px)'] },
      { duration, easing: 'cubic-bezier(.16,.6,.3,1)', pseudoElement: '::view-transition-new(root)', fill: 'both' }
    )
    animations.push(reveal)
    await reveal.finished
    await transition.finished
  } catch {
    transition?.skipTransition()
    await apply()
  } finally {
    animations.splice(0).forEach(animation => animation.cancel())
    document.documentElement.classList.remove('theme-reveal')
    switching.value = false
    transition = undefined
  }
}
onBeforeUnmount(() => {
  transition?.skipTransition()
  animations.splice(0).forEach(animation => animation.cancel())
  document.documentElement.classList.remove('theme-reveal')
})
</script>
<style scoped>
.theme-control { position: relative; display: inline-flex; flex-shrink: 0; align-items: center; padding: 2px; border: 1px solid var(--color-outline-variant); border-radius: 6px; background: var(--color-surface-container-low); }
.theme-indicator { position: absolute; inset: 2px auto 2px 2px; width: calc((100% - 4px) / 2); border-radius: 4px; background: var(--color-primary); box-shadow: 0 1px 3px rgb(0 0 0 / .08); transition: transform 400ms cubic-bezier(.22,1,.36,1); pointer-events: none; }
.is-dark .theme-indicator { transform: translateX(100%); }
.theme-option { position: relative; display: inline-flex; justify-content: center; align-items: center; gap: 6px; width: 30px; min-height: 30px; padding: 6px; color: var(--color-secondary); font-size: 12px; letter-spacing: .04em; font-weight: 500; cursor: pointer; border-radius: 5px; }
.theme-option svg { width: 15px; height: 15px; flex-shrink: 0; }
.theme-option[aria-pressed='true'] { color: var(--color-surface); }
.theme-option:hover:not([aria-pressed='true']) { color: var(--color-primary); }
.theme-option:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 5px; }
.theme-option:disabled { cursor: wait; }
.theme-placeholder { gap: 24px; justify-content: center; width: 66px; height: 36px; color: var(--color-secondary); font-size: 12px; }
@media (pointer: coarse) { .theme-option { min-height: 40px; width: 36px; } .theme-placeholder { width: 78px; height: 46px; } }
@media (prefers-reduced-motion: reduce) { .theme-indicator { transition: none; } }
</style>
