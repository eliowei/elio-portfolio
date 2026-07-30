export interface ConsentState {
  analytics: boolean
}

const STORAGE_KEY = 'cookie-consent'

let isLoaded = false

export const useConsent = () => {
  const getConsent = (): ConsentState | null => {
    if (!import.meta.client) return null

    const value = localStorage.getItem(STORAGE_KEY)

    return value ? JSON.parse(value) : null
  }

  const loadGTM = () => {
    if (!import.meta.client || isLoaded) return

    if (document.getElementById('gtm-script')) {
      isLoaded = true
      return
    }

    const { public: { gtmId } } = useRuntimeConfig()

    window.dataLayer = window.dataLayer || []

    window.dataLayer.push({
      'gtm.start': Date.now(),
      event: 'gtm.js'
    })

    const script = document.createElement('script')

    script.id = 'gtm-script'
    script.async = true
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`

    document.head.appendChild(script)

    isLoaded = true
  }

  const accept = () => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        analytics: true
      })
    )

    loadGTM()
  }

  const reject = () => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        analytics: false
      })
    )
  }

  return { getConsent, accept, reject, loadGTM }
}