import gsap from 'gsap'
import type { ObjectDirective } from 'vue'

export default defineNuxtPlugin(nuxtApp => {
  const cleanup = new WeakMap<HTMLElement, () => void>()
  const entrance: ObjectDirective<HTMLElement, number> = {
    getSSRProps: () => ({}),
    mounted(el, binding) {
      const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
      if (motion.matches || !('IntersectionObserver' in window)) return
      const tween = gsap.fromTo(el, { opacity: 0, y: 24 }, {
        opacity: 1, y: 0, duration: 0.85,
        delay: Number(binding.value) || 0,
        ease: 'power3.out', paused: true,
        clearProps: 'opacity,transform'
      })
      const observer = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          tween.play()
          observer.disconnect()
        }
      }, { threshold: 0, rootMargin: '0px 0px -32px 0px' })
      observer.observe(el)
      const show = () => {
        if (!motion.matches) return
        observer.disconnect()
        tween.progress(1)
      }
      motion.addEventListener('change', show)
      cleanup.set(el, () => {
        observer.disconnect()
        motion.removeEventListener('change', show)
        tween.revert()
      })
    },
    unmounted(el) {
      cleanup.get(el)?.()
      cleanup.delete(el)
    }
  }
  nuxtApp.vueApp.directive('entrance', entrance)
})
