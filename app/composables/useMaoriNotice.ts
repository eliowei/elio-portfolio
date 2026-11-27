// The demo has no real social accounts: their buttons show a short notice instead of linking anywhere.
// The layout renders the message; any page can raise it.
let timer: ReturnType<typeof setTimeout> | undefined

export function useMaoriNotice() {
  const message = useState('maoriNotice', () => '')
  function notify(text: string) {
    clearTimeout(timer)
    message.value = text
    timer = setTimeout(() => { message.value = '' }, 3000)
  }
  return { message, notify }
}
