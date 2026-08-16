import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

import { api } from '@/api/client'
import { authApi } from '@/api/auth'
import { tokenStorage } from '@/services/tokenStorage'
import { useUserStore } from './user'
import { useAppStore } from './app'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(null)

  const isAuthenticated = computed(() => token.value !== null)

  function setToken(value: string | null) {
    token.value = value

    if (value) {
      api.defaults.headers.common.Authorization = `Bearer ${value}`
      tokenStorage.set(value)
    } else {
      delete api.defaults.headers.common.Authorization
      tokenStorage.clear()
    }
  }

  async function login(idToken: string) {
    const response = await authApi.login(idToken)

    setToken(response.data.token)

    if (tokenStorage.get()) {
      await useAppStore().bootstrap()
    }
  }

  async function logout() {
    try {
      await authApi.logout()
    } finally {
      useUserStore().clear()

      setToken(null)
    }
  }

  async function restore() {
    const saved = tokenStorage.get()

    if (!saved) {
      return
    }

    setToken(saved)
  }

  return {
    token,
    isAuthenticated,
    login,
    logout,
    restore,
  }
})