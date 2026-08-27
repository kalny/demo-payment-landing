<script setup lang="ts">
import type { Customer } from '@/types/customer';
import Subscription from './Subscription.vue';

interface Props {
  customer: Customer
}

defineProps<Props>()
</script>

<template>
  <div class="border-1 border-gray-300 rounded-md p-4 flex flex-col gap-4">
    <h3 class="text-md font-bold text-sky-600 uppercase">
      {{ customer.email }}
    </h3>

    <Subscription 
      v-for="subscription in customer.subscriptions"
      :subscription="subscription"
    />
  </div>
</template>