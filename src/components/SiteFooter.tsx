import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { profile } from '../data/profile'
import SocialLinks from '../data/socialLinks'
import { publicAsset } from '../utils/publicAsset'

const avatarUrl = publicAsset('images/soheib.png')

export default function SiteFooter() {
  const { t } = useTranslation()
  const displayTitle = t('profile.title')
  const displayLocation = t('profile.location')

  return (
    <footer className="siteFooter">
      <div className="container">
        <div className="footerTop">
          <div>
            <div className="footerAvatar">
              <img src={avatarUrl} alt={profile.fullName} />
              <div className="footerMeta">
                <strong>{profile.fullName}</strong>
                <span>
                  {displayTitle} · {displayLocation}
                </span>
              </div>
            </div>

            <SocialLinks />
          </div>

          <div className="footerLinks">
            <NavLink to="/">{t('nav.home')}</NavLink>
            <NavLink to="/about">{t('nav.about')}</NavLink>
            <NavLink to="/portfolio">{t('nav.portfolio')}</NavLink>
            <NavLink to="/contact">{t('nav.contact')}</NavLink>
            <a href={`mailto:${profile.email}`}>
              {t('footer.emailMe')} {profile.email}
            </a>
            <a href={`tel:${profile.phoneTel}`}>
              {t('footer.callMe')} {profile.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="footerBottom">
          <div>
            © {new Date().getFullYear()} {profile.fullName}
          </div>
          <div>{t('footer.builtWith')}</div>
        </div>
      </div>
    </footer>
  )
}
