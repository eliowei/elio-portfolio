const storageKey = 'elio-work-cover'
const maximumAge = 6000

export function rememberWorkCover(event: MouseEvent, slug: string, cover: HTMLImageElement) {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const { left, top, width, height } = cover.getBoundingClientRect()
  if (!width || !height) return

  try {
    sessionStorage.setItem(storageKey, JSON.stringify({
      slug, left, top, width, height, viewportWidth: window.innerWidth, at: Date.now(),
    }))
  } catch {
    // The link still navigates when session storage is unavailable.
  }
  cover.animate?.([{ translate: '0 0' }, { translate: '0 -5px' }, { translate: '0 0' }], {
    duration: 210, easing: 'ease-out',
  })
}

export function takeWorkCover(slug: string) {
  try {
    const stored = sessionStorage.getItem(storageKey)
    if (!stored) return
    sessionStorage.removeItem(storageKey)
    const cover = JSON.parse(stored)
    if (cover.slug !== slug || Date.now() - cover.at > maximumAge) return
    if (Math.abs(window.innerWidth - cover.viewportWidth) > 24) return
    if (![cover.left, cover.top, cover.width, cover.height].every(Number.isFinite)) return
    return cover
  } catch {
    // An unavailable transition never affects navigation.
  }
}
