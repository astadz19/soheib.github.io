import { useTranslation } from 'react-i18next'

function RichLine({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={i} style={{ color: 'var(--text-strong)', fontWeight: 800 }}>
              {part.slice(2, -2)}
            </strong>
          )
        }
        return <span key={i}>{part}</span>
      })}
    </>
  )
}

type Pillar = { title: string; text: string }

export default function WhyWordPress({ id }: { id?: string }) {
  const { t } = useTranslation()
  const body = t('whyWordpress.body', { returnObjects: true }) as string[]
  const pillars = t('whyWordpress.pillars', { returnObjects: true }) as Pillar[]
  const roles = t('whyWordpress.roles', { returnObjects: true }) as string[]

  return (
    <section className="section section--tight reveal" id={id}>
      <div className="container">
        <div className="chip">{t('whyWordpress.chip')}</div>
        <h2 className="sectionHeading" style={{ marginTop: 14 }}>
          {t('whyWordpress.title')}
        </h2>
        <p className="sectionSubheading" style={{ marginBottom: 22 }}>
          {t('whyWordpress.subheading')}
        </p>

        <div className="whyWordpressBody">
          {Array.isArray(body) &&
            body.map((para, i) => (
              <p key={i} className="textBlock whyWordpressPara">
                <RichLine text={para} />
              </p>
            ))}
        </div>

        <div className="whyWordpressPillars" role="list">
          {Array.isArray(pillars) &&
            pillars.map((p) => (
              <div key={p.title} className="whyWordpressPillar" role="listitem">
                <h3 className="whyWordpressPillarTitle">{p.title}</h3>
                <p className="whyWordpressPillarText">{p.text}</p>
              </div>
            ))}
        </div>

        <div className="whyWordpressRoles">
          <span className="whyWordpressRolesLabel">{t('whyWordpress.rolesLabel')}</span>
          <div className="whyWordpressRolesChips">
            {Array.isArray(roles) &&
              roles.map((r) => (
                <span key={r} className="whyWordpressRoleChip">
                  {r}
                </span>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
