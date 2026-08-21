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
  <h2>{{ price.name }}</h2>
  <p>${{ price.amount / 100 }} / {{ price.interval }}</p>

  <button @click="checkout(price.id)">
    Subscribe
  </button>
</template>