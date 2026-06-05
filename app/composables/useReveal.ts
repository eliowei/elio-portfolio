import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export const useReveal = () => {
  const fadeUp = (
    selector: string,
    trigger: string,
    stagger = 0.15
  ) => {
    gsap.from(selector, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger,
      ease: 'power2.out',
      scrollTrigger: {
        trigger,
        start: 'top 75%',
      },
    })
  }

  const revealChallenge = (itemSelector = '.challenge-item') => {
    gsap.utils.toArray(itemSelector).forEach((item: any) => {
      const title =
        item.querySelector('.challenge-title')

      const problem =
        item.querySelector('.problem-card')

      const solution =
        item.querySelector('.solution-card')
      
      if (title) {
        gsap.from(title, {
          y: 20,
          opacity: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: item,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        })
      }
      
      if (problem) {
        gsap.from(problem, {
          x: -60,
          opacity: 0,
          duration: 0.8,
          delay: 0.1,
          scrollTrigger: {
            trigger: item,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        })
      }

      if (solution) {
        gsap.from(solution, {
          x: 60,
          opacity: 0,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: item,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        })
      }
    })


  }

  return {
    fadeUp,
    revealChallenge
  }
}
