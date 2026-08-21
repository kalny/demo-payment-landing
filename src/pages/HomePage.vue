<script setup lang="ts">
import { onMounted } from 'vue'
import { usePaddle } from '@/composables/usePaddle'
import { useUserStore } from '@/stores/user'
import { usePriceStore } from '@/stores/price'
import Price from '@/components/Price.vue'

const { initialize } = usePaddle()

const userStore = useUserStore()
const priceStore = usePriceStore()

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

    <Price v-for="price in priceStore.prices" 
      @checkout="checkout"
      :price="price" 
    />
  </div>
</template>