import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

interface HeroAnimationOptions {
  title: HTMLElement
  subtitle: HTMLElement
  desc: HTMLElement
  cta: HTMLElement
}

export const useHero = () => {
  const playLandingHero  = ({
    title,
    subtitle,
    desc,
    cta
  }: HeroAnimationOptions) => {
    const tl = gsap.timeline()

  tl.from(title, {
    y: 20,
    opacity: 0,
    duration: 0.6
  })
    .from(subtitle, {
      y: 15,
      opacity: 0,
      duration: 0.5
    }, '-=0.3')
    .from(desc, {
      y: 15,
      opacity: 0,
      duration: 0.5
    }, '-=0.3')
    .from(cta, {
      y: 10,
      opacity: 0,
      duration: 0.4
    }, '-=0.2')

    return tl
  }

  const playProjectHero = (heroEl: HTMLElement) => {
    const revealItems = heroEl.querySelectorAll('.hero-reveal')
    const image = heroEl.querySelector('.hero-image')


    gsap.from(revealItems, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      })

    if (image) {
      gsap.from(image, {
        y: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: image,
          start: 'top 80%',
          end: 'bottom 20%',
          markers: false,
        }
      })
    }
  }

  return {
    playLandingHero,
    playProjectHero
  }

}