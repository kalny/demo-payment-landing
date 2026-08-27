import i18n from "@/i18n"

export function formatDate(dateString: string | null): string {
  if (!dateString) {
    return ''
  }
  
  const date = new Date(dateString)
  
  if (isNaN(date.getTime())) return '—'

  return new Intl.DateTimeFormat(i18n.global.locale.value, {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}