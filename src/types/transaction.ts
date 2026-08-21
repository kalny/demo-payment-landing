import type { Currency } from "./currency"
import type { Payment } from "./payment"

export type TransactionStatus = 'draft' 
  | 'ready' 
  | 'billed' 
  | 'paid' 
  | 'completed' 
  | 'canceled' 
  | 'past_due'

export interface Transaction {
  id: number
  status: TransactionStatus
  subtotal: number
  tax: number
  total: number
  fee: number
  earnings: number
  currency: Currency
  billed_at: string | null
  completed_at: string | null
  payments: Payment[]
}