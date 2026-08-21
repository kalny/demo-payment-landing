import type { Currency } from "./currency"

export type PriceInterval = 'day' 
  | 'week' 
  | 'month' 
  | 'year'

export interface Price {
  code: string
  name: string
  description: string
  amount: number
  currency: Currency
  interval: PriceInterval
  frequency: number
}