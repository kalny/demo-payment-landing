import { defineStore } from "pinia"
import { ref } from "vue"
import { useAuthStore } from "./auth"
import { useUserStore } from "./user"

export const useAppStore = defineStore('app', () => {
  const ready = ref(false)

  async function bootstrap() {
    const auth = useAuthStore()
    const user = useUserStore()

    auth.restore()

    if (!auth.isAuthenticated) {
      ready.value = true
      return
    }

    try {
      await user.load()
    } catch {
      await auth.logout()
    }

    ready.value = true
  }

  return {
    ready,
    bootstrap,
  }
})