import router from '@/router'
import { api } from './client'
import { useAuthStore } from '@/stores/auth'

export function registerApiInterceptors() {
  let loggingOut = false

  api.interceptors.response.use(
    response => response,
    async error => {
      if (error.response?.status === 401 && !loggingOut) {
        loggingOut = true

        const auth = useAuthStore()

        await auth.logout()

        await router.replace('/login')

        loggingOut = false
      }

      return Promise.reject(error)
    },
  )
}