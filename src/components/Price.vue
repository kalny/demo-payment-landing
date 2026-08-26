<script setup lang="ts">
import type { Price } from '@/types/price';


interface Props {
  price: Price
}

defineProps<Props>()

const emit = defineEmits<{
  checkout: [string]
}>()

function checkout(priceId: string) {
  emit('checkout', priceId)
}
</script>

<template>
  <div class="border-1 border-gray-300 rounded-md p-4 flex flex-col gap-2 items-center">
    <h3 class="text-xl font-bold text-sky-600 uppercase">
      {{ price.name }}
    </h3>

    <p><strong>${{ price.amount / 100 }}</strong> / {{ price.interval }}</p>

    <button 
      @click="checkout(price.id)"
      class="px-4 py-2 bg-sky-600 text-white rounded-sm hover:bg-sky-700 font-medium cursor-pointer w-full"
    >
      Subscribe
    </button>
  </div>
</template>