import { useMemo } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import FaqAccordion, { type FaqItem } from '../components/FaqAccordion'
import { profile } from '../data/profile'

export default function Contact() {
  const { t, i18n } = useTranslation()

  const whatsappHref = useMemo(() => {
    const prefill = encodeURIComponent(t('contact.whatsappPrefill'))
    return `${profile.whatsappUrl}?text=${prefill}`
  }, [t, i18n.language])

  const faqs = useMemo(() => t('faqs', { returnObjects: true }) as FaqItem[], [t, i18n.language])

  return (
    <>
      <SiteHeader />
      <main>
        <section className="section section--tight reveal">
          <div className="container">
            <div className="twoCol" style={{ alignItems: 'center' }}>
              <div>
                <div className="chip">{t('contact.chip')}</div>
                <h1 className="heroTitle" style={{ marginTop: 14 }}>
                  {t('contact.title')}
                </h1>
                <p className="heroText" style={{ maxWidth: 560 }}>
                  {t('contact.sub', { location: t('profile.location') })}
                </p>
                <div style={{ marginTop: 28 }}>
                  <a href={whatsappHref} className="btn btnWhatsApp" target="_blank" rel="noreferrer">
                    <WhatsAppGlyph />
                    {t('contact.openWhatsApp', { phone: profile.phoneDisplay })}
                  </a>
                </div>
                <p className="heroText" style={{ marginTop: 22, maxWidth: 520, fontSize: 16 }}>
                  <Trans
                    i18nKey="contact.fallback"
                    components={{
                      emailLink: (
                        <a
                          href={`mailto:${profile.email}`}
                          style={{ color: 'var(--accent)', fontWeight: 700 }}
                        />
                      ),
                      igLink: (
                        <a
                          href={profile.instagramUrl}
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: 'var(--accent)', fontWeight: 700 }}
                        />
                      ),
                    }}
                  />
                </p>
              </div>

              <div className="heroSideCard contactWhatsAppCard">
                <div className="chip">{t('contact.cardChip')}</div>
                <h2 className="contactWhatsAppCardTitle">{t('contact.whyTitle')}</h2>
                <ul className="contactWhatsAppList">
                  <li>{t('contact.why1')}</li>
                  <li>{t('contact.why2', { phone: profile.phoneDisplay })}</li>
                  <li>{t('contact.why3')}</li>
                </ul>
                <a href={whatsappHref} className="btn btnWhatsApp btnWhatsApp--block" target="_blank" rel="noreferrer">
                  <WhatsAppGlyph />
                  {t('contact.startChat')}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--tight reveal">
          <div className="container">
            <h2 className="sectionHeading" style={{ marginBottom: 10 }}>
              {t('contact.faqTitle')}
            </h2>
            <p className="sectionSubheading">{t('contact.faqSub')}</p>

            {Array.isArray(faqs) && <FaqAccordion items={faqs} />}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

function WhatsAppGlyph() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}
