import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Page motion for the Mao Ri demo. Mark an element with data-mr and it plays once when scrolled to:
//   photo: settles into place with a small turn   mask: watercolor wipes in   draw: SVG path with pathLength="1" is drawn
// Everything is a gsap.from(), so content stays visible without JavaScript or with reduced motion.
export function useMaoriMotion(root: Ref<HTMLElement | null>) {
  let media: gsap.MatchMedia | undefined
  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)
    media = gsap.matchMedia()
    media.add({ move: '(prefers-reduced-motion: no-preference)', wide: '(min-width: 761px)' }, (context) => {
      const { move, wide } = context.conditions as { move: boolean, wide: boolean }
      const page = root.value
      if (!move || !page) return
      const once = (el: Element) => ({ trigger: el, start: 'top 94%', once: true })
      page.querySelectorAll('[data-mr="photo"]').forEach((el, index) => {
        gsap.from(el, { opacity: 0, y: 12, rotation: index % 2 ? '+=5' : '-=5', duration: .45, ease: 'power3.out', clearProps: 'opacity,transform', scrollTrigger: once(el) })
      })
      page.querySelectorAll('[data-mr="mask"]').forEach((el) => {
        gsap.from(el, { clipPath: 'circle(0% at 50% 60%)', duration: .9, ease: 'power2.out', clearProps: 'clipPath', scrollTrigger: once(el) })
      })
      page.querySelectorAll('[data-mr="draw"]').forEach((el) => {
        // fromTo keeps one full-length dash: animating towards the default "none" breaks the line into dots.
        // The gap and the extra offset hide the round line cap before drawing starts.
        // autoRound off: the values are fractions of the path, and whole-pixel rounding makes the line jump.
        gsap.fromTo(el, { strokeDasharray: '1 2', strokeDashoffset: 1.1 }, { strokeDasharray: '1 2', strokeDashoffset: 0, autoRound: false, duration: .8, delay: .3, ease: 'power1.inOut', clearProps: 'strokeDasharray,strokeDashoffset', scrollTrigger: once(el) })
      })
      const hero = page.querySelector('[data-mr="hero"]')
      if (!hero) return
      gsap.from(hero.querySelector('img'), { scale: 1.08, duration: 2.2, ease: 'power2.out' })
      gsap.from(hero.querySelectorAll('[data-mr="line"]'), { clipPath: 'inset(0 100% 0 0)', duration: .7, stagger: .3, ease: 'none', clearProps: 'clipPath' })
      if (wide) gsap.to(hero.querySelector('picture'), { yPercent: 12, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } })
    })
  })
  onBeforeUnmount(() => media?.revert())
}
