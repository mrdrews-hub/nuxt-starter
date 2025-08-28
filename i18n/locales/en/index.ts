import auth from './auth.json'

export default defineI18nLocale(async (locale) => {
  return {
    auth,
  }
})
