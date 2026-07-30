export default defineNuxtPlugin(() => {
  const { public: { gtmId } } = useRuntimeConfig()

  if (!import.meta.client) return

  window.dataLayer = window.dataLayer || []

  window.dataLayer.push({
    'gtm.start': Date.now(),
    event: 'gtm.js'
  })

  const script = document.createElement('script')

  script.async = true
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`

  document.head.appendChild(script)
})