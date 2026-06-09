import gsap from 'gsap'

export const usePageTransition = () => {
  const overlay = useState<HTMLElement | null>('overlay')
  const title = useState<HTMLElement | null>('overlayTitleEl')

  const enter = () => {
    return new Promise<void>((resolve) => {
      if (!overlay.value) {
        resolve()
        return
      }

      const tl = gsap.timeline({
        onComplete: resolve
      })

      tl
        .set(overlay.value, {
          yPercent: 100
        })
        .to(overlay.value, {
          yPercent: 0.4,
          duration: 0.7,
          ease: 'expo.inOut'
        })
        .to(
          title.value,
          {
            opacity: 1,
            y: 0,
            duration: 0.3
          },
          '-=0.1'
        )

      // gsap.set(overlay.value, {
      //   xPercent: 300
      // })

      // gsap.to(overlay.value, {
      //   xPercent: 0,
      //   duration: 0.7,
      //   ease: 'expo.inOut',
      //   onComplete: () => {
      //     console.log('enter complete')
      //     resolve()
      //   }
      // })
    })
  }
  const leave = () => {
    return new Promise<void>((resolve) => {
      if (!overlay.value) {
        resolve()
        return
      }

      const tl = gsap.timeline({
        onComplete: resolve
      })

      tl
        .to(title.value, {
          opacity: 0,
          y: -20,
          duration: 0.2
        })
        .to(
          overlay.value,
          {
            yPercent: -100,
            duration: 0.5,
            ease: 'expo.inOut'
          },
          '-=0.1'
        )

      // gsap.to(overlay.value, {
      //   xPercent: 100,
      //   duration: 0.5,
      //   ease: 'expo.inOut',
      //   onComplete: () => {
      //     console.log('leave complete')
      //     resolve()
      //   }
      // })
    })
  }

  return {
    enter,
    leave
  }

}