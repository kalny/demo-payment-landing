import { defineStore } from "pinia"
import { ref } from "vue"
import { useAuthStore } from "./auth"
import { useUserStore } from "./user"
import { useCustomerStore } from "./customer"
import { usePriceStore } from "./price"

export const useAppStore = defineStore('app', () => {
  const ready = ref(false)

  async function bootstrap() {
    const auth = useAuthStore()
    const user = useUserStore()
    const price = usePriceStore()
    const customer = useCustomerStore()

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

    await price.load()
    await customer.load()

    ready.value = true
  }

  return {
    ready,
    bootstrap,
  }
})