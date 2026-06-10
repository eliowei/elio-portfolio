export const usePageNavigation = () => {
  const route = useRoute()
  const { enter, leave } = usePageTransition()
  const loading = useLoadingIndicator()

  const isNavigating = useState(
    'isNavigating',
    () => false
  )

  const transitionTitle = useState(
    'transitionTitle',
    () => ''
  )

  const navigate = async (to: string, title?: string) => {
    if (isNavigating.value) return

    transitionTitle.value = title || 'ELIO WEI'

    isNavigating.value = true

    const isHashLink = to.startsWith('/#')

    if (isHashLink && route.path === '/') {
      isNavigating.value = false

      await navigateTo(to)
      return
    }
    loading.start()

    await enter()

    await new Promise(resolve =>
      setTimeout(resolve, 400)
    )

    await navigateTo(to)

    if (to.includes('#')) {
      await nextTick()

      loading.finish()
      await leave()

      isNavigating.value = false
    }
  }

  return {
    navigate
  }
}