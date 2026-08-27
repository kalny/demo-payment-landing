<script setup lang="ts">
import { formatDate } from '@/services/formatDate';
import { formatPrice } from '@/services/formatPrice';
import type { Transaction } from '@/types/transaction';

interface Props {
  tranaction: Transaction
}

defineProps<Props>()
</script>

<template>
  <div class="border-1 border-gray-300 rounded-sm p-2 flex flex-col md:flex-row gap-4">
    <div class="flex items-baseline gap-2">
      <span>{{ tranaction.status }}</span>
      <span class="text-xs text-current/60">
        {{ formatDate(tranaction.completed_at) }}
      </span>
    </div>
    <div class="flex flex-row md:flex-col gap-1">
      <span>total:</span>
      <span>{{ formatPrice(tranaction.total, tranaction.currency) }}</span>
    </div>
    <div class="flex flex-row md:flex-col gap-1">
      <span>subtotal:</span>
      <span>{{ formatPrice(tranaction.subtotal, tranaction.currency) }}</span>
    </div>
    <div class="flex flex-row md:flex-col gap-1">
      <span>tax:</span>
      <span>{{ formatPrice(tranaction.tax, tranaction.currency) }}</span>
    </div>
    <div class="flex flex-row md:flex-col gap-1">
      <span>fee:</span>
      <span>{{ formatPrice(tranaction.fee, tranaction.currency) }}</span>
    </div>
    <div class="flex flex-row md:flex-col gap-1">
      <span>earnings:</span>
      <span class="text-green-600">{{ formatPrice(tranaction.earnings, tranaction.currency) }}</span>
    </div>
  </div>
</template>