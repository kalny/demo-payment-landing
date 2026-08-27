import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

window.Pusher = Pusher

let echo: Echo<any> | null = null

export function getEcho(token: string) {
  if (echo) {
    return echo
  }

  echo = new Echo({
    broadcaster: 'reverb',

    key: import.meta.env.VITE_REVERB_APP_KEY,

    wsHost: import.meta.env.VITE_REVERB_HOST,
    wsPort: Number(import.meta.env.VITE_REVERB_PORT),

    forceTLS: false,

    enabledTransports: ['ws'],

    authEndpoint: import.meta.env.VITE_BROADCASTING_AUTH_URL,

    auth: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  })

  return echo
}