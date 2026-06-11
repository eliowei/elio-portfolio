import gsap from "gsap";

interface RevealOptions {
  selector: string
  trigger: string

  y?: number
  x?: number
  scale?: number

  opacity?: number

  duration?: number
  stagger?: number

  start?: string
  ease?: string
  once?: boolean
}

export const useReveal = () => {
  
  const reveal = ({
    selector,
    trigger,

    x = 0,
    y = 0,
    scale,

    opacity = 0,

    duration = 0.8,
    stagger = 0,

    start = 'top 75%',
    once = true,
    ease = 'power2.out'
  }: RevealOptions) => {
    gsap.from(selector, {
      x,
      y,
      scale,

      opacity,

      duration,
      stagger,
      ease,
      
      scrollTrigger: {
        trigger,
        start,
        once
      }
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

  const revealSystemDesign = (
    itemSelector = '.challenge-item'
  ) => {
    gsap.utils.toArray(itemSelector).forEach((item: any) => {
      const title =
        item.querySelector('.challenge-title')

      const content =
        item.querySelector('.system-content')

      if (title) {
        gsap.from(title, {
          y: 20,
          opacity: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: item,
            start: 'top 70%',
            toggleActions: 'play none none none'
          }
        })
      }

      if (content) {
        gsap.from(content, {
          x: 40,
          opacity: 0,
          duration: 0.8,
          delay: 0.1,
          scrollTrigger: {
            trigger: item,
            start: 'top 70%',
            toggleActions: 'play none none none'
          }
        })
      }
    })
  }

  return {
    reveal,
    revealChallenge,
    revealSystemDesign
  }
}
