import gsap from 'gsap'
import type { Ref } from 'vue'
export const useTerminal = () => {
  const playBootAnimation = (
    displayLines: Ref<string[]>,
    finalLines: string[]
  ) => {
    const bootLines = [
      '$ booting...',
      '$ loading profile...',
      '$ loading projects...',
      '$ success'
    ]

    const tl = gsap.timeline()

    bootLines.forEach((line) => {
      tl.call(() => {
        displayLines.value.push(line)
      })

      tl.to({}, {
        duration: 0.8
      })
    })

    tl.call(() => {
      displayLines.value = finalLines
    })

    return tl
  }

  const blinkCursor = (cursor: HTMLElement) => {
    return gsap.to(cursor, {
      opacity: 0,
      duration: 0.5,
      repeat: -1,
      yoyo: true
    })
  }

  return {
    playBootAnimation,
    blinkCursor
  }
}