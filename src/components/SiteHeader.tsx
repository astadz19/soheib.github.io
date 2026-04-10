import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { profile } from '../data/profile'
import LanguageSwitcher from './LanguageSwitcher'

export default function SiteHeader() {
  const { t } = useTranslation()
  const [open, setOpen] = React.useState(false)

  const navItems = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/portfolio', label: t('nav.portfolio') },
    { to: '/contact', label: t('nav.contact') },
  ]

  return (
    <header className="siteHeader">
      <div className="container siteHeaderInner">
        <div className="brand">
          <NavLink to="/" className="navLink" style={{ fontSize: 18, fontWeight: 700, opacity: 1 }}>
            {profile.fullName}
          </NavLink>
        </div>

        <nav className="navLinks" aria-label={t('nav.primaryAria')}>
          {navItems.slice(0, 3).map((item) => (
            <NavLink key={item.to} to={item.to} className="navLink">
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="headerActions">
          <LanguageSwitcher />
          <NavLink to="/contact" className="btn btnGhost">
            {t('header.getInTouch')}
          </NavLink>

          <button
            className="burger"
            type="button"
            aria-label={t('header.openMenu')}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span style={{ display: 'inline-block', width: 18, height: 2, background: 'currentColor' }} />
            <span
              style={{
                display: 'block',
                width: 18,
                height: 2,
                background: 'currentColor',
                marginTop: 5,
              }}
            />
            <span
              style={{
                display: 'block',
                width: 18,
                height: 2,
                background: 'currentColor',
                marginTop: 5,
              }}
            />
          </button>
        </div>
      </div>

      {open ? (
        <div className="container mobileNav" role="dialog" aria-label={t('header.mobileMenu')}>
          <div className="mobileNavLinks">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="navLink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
