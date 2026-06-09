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

    console.log('route.path', route.path)
    console.log('to', to)

    isNavigating.value = true

    const isHashLink = to.startsWith('/#')

    if (isHashLink && route.path === '/') {
      console.log('首頁 hash 不轉場')
      isNavigating.value = false

      await navigateTo(to)
      return
    }
    console.log('執行轉場')
    loading.start()

    await enter()

    await new Promise(resolve =>
      setTimeout(resolve, 400)
    )

    await navigateTo(to)
    console.log('after navigateTo')

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