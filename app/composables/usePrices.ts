import gsap from 'gsap'

export const usePrices = () => {
  const revealPrices = () => {
    const cards = gsap.utils.toArray<HTMLElement>('.price-card')

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
    revealPrices
  }
}