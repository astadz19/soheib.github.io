import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation()
  const resolved = i18n.resolvedLanguage ?? i18n.language
  const isFr = resolved.startsWith('fr')

  return (
    <div className="langSwitcher" role="group" aria-label={t('language.label')}>
      <button
        type="button"
        className={`langSwitcherBtn${!isFr ? ' langSwitcherBtn--active' : ''}`}
        onClick={() => void i18n.changeLanguage('en')}
        aria-pressed={!isFr}
        lang="en"
      >
        {t('language.en')}
      </button>
      <button
        type="button"
        className={`langSwitcherBtn${isFr ? ' langSwitcherBtn--active' : ''}`}
        onClick={() => void i18n.changeLanguage('fr')}
        aria-pressed={isFr}
        lang="fr"
      >
        {t('language.fr')}
      </button>
    </div>
  )
}
