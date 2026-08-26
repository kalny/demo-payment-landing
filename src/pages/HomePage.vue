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
  <div class="p-4 flex flex-col gap-6">
    <h1 class="text-4xl font-bold text-sky-600">Paddle Payment Demo</h1>

    <div class="border-1 border-gray-300 rounded-xl p-6 flex flex-col gap-6">
      <h2 class="text-2xl font-bold text-sky-600">Pricing</h2>
      <div class="flex flex-col md:flex-row gap-4 w-full">
        <div class="w-full" v-for="price in priceStore.prices">
          <Price 
            @checkout="checkout"
            :price="price" 
          />
        </div>
      </div>
    </div>
    
  </div>
</template>