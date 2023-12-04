<script setup lang="ts">
import { sayHelloFromLib } from './lib'
import Runner from './utils/workers/index?worker'

const message = ref('Nuxt')

function sayHello(from: 'workers' | 'composable' | 'lib') {
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
  } else if (from === 'lib') {
    sayHelloFromLib(message.value)
  } else if (from === 'composable') {
    sayHelloFromComposable(message.value)
  }
}
</script>

<template>
  <div
    class="m-2 text-(xl red) font-(light mono) hover:(bg-gray-400 font-medium)"
  >
    Variant group transformer
  </div>
  <div class=":uno: mt-5 text-center sm:text-left">
    <div class=":uno: text-sm font-bold hover:text-red" />
  </div>

  <div>
    <text-red> red text </text-red>
    <flex> flexbox </flex>
    I'm feeling <i-line-md-emoji-grin /> today!
  </div>

  <article class="gray prose-true text-base prose-pink xl:text-xl">
    {{ 123 }}
    <p class="not-prose">Some text</p>
  </article>

  <div animate-bounce text-center text-5xl text-red>
    Attributify JSX transformer
  </div>
  <h1>Demo with auto imports</h1>
  <CustomInput v-model="message" />
  <button type="submit" @click="sayHello('composable')">
    Hello from composable
  </button>
  <button type="submit" @click="sayHello('lib')">Hello from lib</button>
  <button type="submit" @click="sayHello('workers')">Hello from workers</button>
</template>
./assets/workers
