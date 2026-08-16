import {
  initializePaddle,
  type Paddle,
} from '@paddle/paddle-js'
import { ref } from 'vue'

const paddle = ref<Paddle>()

let initializationPromise: Promise<Paddle | undefined> | undefined

export function usePaddle() {
  async function initialize() {
    if (paddle.value) {
      return paddle.value
    }

    if (!initializationPromise) {
      initializationPromise = initializePaddle({
        environment: 'sandbox',
        token: import.meta.env.VITE_PADDLE_CLIENT_TOKEN,
      })
    }

    paddle.value = await initializationPromise

    return paddle.value
  }

  return {
    paddle,
    initialize,
  }
}