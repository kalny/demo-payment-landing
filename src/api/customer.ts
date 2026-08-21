import { api } from './client'
import type { ApiResponse } from '@/types/api'
import type { Customer } from '@/types/customer'

export const customerApi = {
  fetch() {
    return api.get<ApiResponse<Customer[]>>('/customers')
  },
}