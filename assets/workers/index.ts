/// <reference lib="webworker" />

self.addEventListener(
  'message',
  (
    evt: MessageEvent<{
      message: string
    }>,
  ) => {
    const { message } = evt.data
    const greeting = `Hello ${upperCase(message)} from assets!`

    postMessage({ greeting })
  },
)
