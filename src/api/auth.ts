import type { User } from '@/types/user'
import { api } from './client'
import type { ApiResponse } from '@/types/api'

export interface LoginRequest {
  id_token: string
}

export interface LoginResponse {
  token: string
  token_type: string
}

export const authApi = {
  login(idToken: string) {
    return api.post<LoginResponse>('/auth/google', {
      id_token: idToken,
    })
  },

  logout() {
    return api.post('/auth/logout')
  },

  me() {
    return api.get<ApiResponse<User>>('/profile')
  },
}