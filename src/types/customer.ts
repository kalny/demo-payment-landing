import type { Subscription } from "./subscription"

export interface Customer {
  id: number
  email: string
  name: string
  subscriptions: Subscription[]
}