import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

/** Sync <html lang> and document title with active locale */
export function useDocumentI18n() {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const set = () => {
      const lng = i18n.resolvedLanguage ?? i18n.language
      document.documentElement.lang = lng.startsWith('fr') ? 'fr' : 'en'
      document.title = t('meta.title')
    }
    set()
    i18n.on('languageChanged', set)
    return () => {
      i18n.off('languageChanged', set)
    }
  }, [i18n, t])
}
