import { ref } from 'vue'
import { defineStore } from 'pinia'

import type { Price } from '@/types/price'
import { priceApi } from '@/api/price'

export const usePriceStore = defineStore('price', () => {
    const prices = ref<Price[]>([])

    async function load() {
        const response = await priceApi.fetch()

        prices.value = response.data.data
    }

    return {
        prices,
        load,
    }
})