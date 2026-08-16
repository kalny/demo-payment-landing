<script setup lang="ts">
import { GoogleLogin } from 'vue3-google-login';

const emit = defineEmits<{
  success: [string]
}>()

function callback(response: any) {
  emit('success', response.credential)
}
</script>

<template>
  <GoogleLogin :callback="callback" />
</template>