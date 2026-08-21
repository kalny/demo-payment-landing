import type { Currency } from "./currency"

export type PaymentStatus = 'authorized' 
  | 'authorized_flagged' 
  | 'canceled' 
  | 'captured' 
  | 'error'
  | 'action_required'
  | 'pending_no_action_required'
  | 'created'
  | 'unknown'
  | 'dropped'

export interface Payment {
  id: number
  status: PaymentStatus
  amount: number
  currency: Currency
  payment_method_id: string
  card_last4: string | null
  captured_at: string | null
}