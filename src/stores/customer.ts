import { ref } from 'vue'
import { defineStore } from 'pinia'

import type { Customer } from '@/types/customer'
import { customerApi } from '@/api/customer'

export const useCustomerStore = defineStore('customer', () => {
    const customers = ref<Customer[]>([])

    async function load() {
        const response = await customerApi.fetch()

        customers.value = response.data.data
    }

    return {
        customers,
        load,
    }
})