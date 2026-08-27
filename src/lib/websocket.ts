import { useCustomerStore } from '@/stores/customer'
import { getEcho } from './echo'

import { useUserStore } from '@/stores/user'

class WebSocketService {
  connect(token: string) {
    const echo = getEcho(token)
    const userStore = useUserStore()
    

    echo.private(`user.${userStore.user!.id}`)
      .listen('.webhook.handled', this.onWebhookHandled)
  }

  private async onWebhookHandled(userId: number) {
    const customerStore = useCustomerStore()
    await customerStore.load()
  }
}

export const websocket = new WebSocketService()