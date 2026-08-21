import { api } from './client'
import type { ApiResponse } from '@/types/api'
import type { Price } from '@/types/price'

export const priceApi = {
  fetch() {
    return api.get<ApiResponse<Price[]>>('/prices')
  },
}