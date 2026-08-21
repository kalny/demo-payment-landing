import type { Currency } from "./currency"
import type { Price } from "./price"
import type { Transaction } from "./transaction"

export type SubscriptionStatus = 'active' 
  | 'canceled' 
  | 'past_due' 
  | 'paused' 
  | 'trialing'

export interface Subscription {
  id: number
  status: SubscriptionStatus
  price: Price
  quantity: number
  currency: Currency
  current_period_start: string
  current_period_end: string
  transactions: Transaction[]
}