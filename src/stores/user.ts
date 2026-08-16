import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

import { authApi } from '@/api/auth'
import type { User } from '@/types/user'

export const useUserStore = defineStore('user', () => {
    const user = ref<User | null>(null)

    const isLoaded = computed(() => user.value !== null)

    async function load() {
        const response = await authApi.me()

        user.value = response.data.data
    }

    function clear() {
        user.value = null
    }

    return {
        user,
        isLoaded,
        load,
        clear,
    }
})