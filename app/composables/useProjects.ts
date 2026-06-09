import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useProjects = () => {
  const revealProjects = () => {
    gsap.from('.projects-header', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: '#projects',
        start: 'top 75%',
        once: true
      }
    })

    const cards = gsap.utils.toArray<HTMLElement>('.project-card')

    cards.forEach((card, index) => {
      gsap.from(card, {
        x: index % 2 === 0 ? -40 : 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          once: true
        }
      })
    })
  }

  return {
    revealProjects
  }
}