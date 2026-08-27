<script setup lang="ts">
import { formatDate } from '@/services/formatDate';
import { formatPrice } from '@/services/formatPrice';
import type { Subscription } from '@/types/subscription';
import Transaction from './Transaction.vue';

interface Props {
  subscription: Subscription
}

defineProps<Props>()
</script>

<template>
  <div class="border-1 border-gray-300 rounded-md p-4 flex flex-col gap-2">
    <h3 class="text-sm font-bold text-sky-600 uppercase">
      {{ subscription.price.name }}
      - {{ formatPrice(subscription.price.amount, subscription.price.currency) }}
      / {{ subscription.price.interval }}
    </h3>

    <div class="flex items-baseline gap-2">
      <span>{{ subscription.status }}</span>
      <span class="text-xs text-current/60">
        {{ formatDate(subscription.current_period_start) }} -
        {{ formatDate(subscription.current_period_end) }}
      </span>
    </div>

    <Transaction 
      v-for="transaction in subscription.transactions" 
      :tranaction="transaction" 
    />
  </div>
</template>