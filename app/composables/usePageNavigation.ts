export const usePageNavigation = () => {
  const route = useRoute()
  const router = useRouter()
  const { enter, leave } = usePageTransition()
  const loading = useLoadingIndicator()
  const isNavigating = useState('isNavigating', () => false)
  const transitionTitle = useState('transitionTitle', () => '')

  const navigate = async (to: string, title?: string) => {
    if (isNavigating.value || to === route.fullPath) return
    if (to.startsWith('/#') && route.path === '/') {
      await router.push(to)
      return
    }

    isNavigating.value = true
    transitionTitle.value = title || 'ELIO WEI'
    loading.start()
    try {
      await enter()
      await router.push(to)
      await nextTick()
    } finally {
      // Always release the navigation lock, including cancelled or failed routes.
      try {
        await leave()
      } finally {
        loading.finish()
        isNavigating.value = false
      }
    }
  }

  return { navigate }
}
