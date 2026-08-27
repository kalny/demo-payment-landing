import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import uk from './locales/uk.json'
import ru from './locales/ru.json'

const pluralRules = {
  ru: (choice: number, choicesLength: number) => {
    if (choice === 0) return 0

    const teen = choice > 10 && choice < 20
    const endsWithOne = choice % 10 === 1

    if (!teen && endsWithOne) {
      return 0
    }

    if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
      return 1
    }

    return 2
  },

  uk: (choice: number) => {
    const teen = choice > 10 && choice < 20
    const mod10 = choice % 10

    if (!teen && mod10 === 1) return 0
    if (!teen && mod10 >= 2 && mod10 <= 4) return 1
    return 2
  }
}

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    uk,
    ru
  },
  pluralRules
})

export default i18n
