<script setup lang="ts">
import GoogleLoginButton from '@/components/GoogleLoginButton.vue'
import { useAuthStore } from '@/stores/auth'
import { useUserStore } from '@/stores/user'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const auth = useAuthStore()
const user = useUserStore()

const loading = ref(false)

async function login(idToken: string) {
  loading.value = true

  try {
    await auth.login(idToken)

    await user.load()

    router.replace('/')
  } catch (e) {
    await auth.logout()

    console.error(e)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <GoogleLoginButton
    :loading="loading"
    @success="login"
  />
</template>