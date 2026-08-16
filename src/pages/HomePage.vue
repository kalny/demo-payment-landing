<script setup lang="ts">
import { onMounted } from 'vue'
import { usePaddle } from '@/composables/usePaddle'
import { useUserStore } from '@/stores/user'

const starterPriceId = 'pri_01m00ph3d17xrrjg6175vfd4wg'
const proPriceId = 'pri_01m00phy489yqtb65wetdg7843'

const { initialize } = usePaddle()

const userStore = useUserStore()

onMounted(async () => {
  await initialize()
})

async function checkout(priceId: string) {
  const paddle = await initialize()

  if (!paddle) {
    return
  }

  if (!userStore.user) {
    return
  }

  paddle.Checkout.open({
    items: [
      {
        priceId,
        quantity: 1,
      },
    ],
    customer: {
      email: userStore.user.email,
    },
    customData: {
      user_id: userStore.user.id
    }
  })
}
</script>

<template>
  <div>
    <h1>Pricing</h1>

    <div>
      <h2>Starter</h2>
      <p>$9 / month</p>

      <button @click="checkout(starterPriceId)">
        Subscribe
      </button>
    </div>

    <div>
      <h2>Pro</h2>
      <p>$19 / month</p>

      <button @click="checkout(proPriceId)">
        Subscribe
      </button>
    </div>
  </div>
</template>