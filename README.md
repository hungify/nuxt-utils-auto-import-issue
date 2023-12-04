# Utils folder is not auto imported on production mode when using in worker file

## Guide

- [Utils](https://nuxt.com/docs/guide/directory-structure/utils)

## Step To Reproduce

Create a utils/upperCase.js file

```ts
export const upperCase = (str: string) => str.toUpperCase()
```

Create a assets/workers/index.ts file

```ts
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
```

Create a app.vue file

```vue
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
```

## Expected Behavior

This should work with the same behavior on development and production mode.

## Actual Behavior

On development mode, the utils/ directory is auto imported, so the upperCase function is available on the assets/index.ts file.

On production mode, we have this error:

```txt
Uncaught ReferenceError: upperCase is not defined
    at index-8e797b43.js:1:88
```

## Note

I call utils function in workers file
