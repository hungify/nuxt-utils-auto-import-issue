<script setup lang="ts">
import Runner from './utils/workers/index?worker'

const message = ref('Nuxt')

function sayHello(from: 'workers' | 'composable') {
  if (from === 'workers') {
    const worker = new Runner()
    worker.postMessage({ message: message.value })
    worker.addEventListener(
      'message',
      (
        evt: MessageEvent<{
          greeting: string
        }>,
      ) => {
        const { greeting } = evt.data
        alert(greeting)
      },
    )
  } else {
    sayHelloFromComposable(message.value)
  }
}
</script>

<template>
  <h1>Demo with auto imports</h1>
  <CustomInput v-model="message" />
  <button type="submit" @click="sayHello('composable')">
    Hello from composable
  </button>
  <button type="submit" @click="sayHello('workers')">Hello from workers</button>
</template>
./assets/workers
