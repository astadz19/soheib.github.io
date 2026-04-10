import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import type { Project } from '../data/projects.d.ts'
import { projects as projectsData } from '../data/projects.js'
import { useTranslatedProject } from '../hooks/useTranslatedProject'

function PortfolioSingleContent({ project }: { project: Project }) {
  const { t, i18n } = useTranslation()
  const p = useTranslatedProject(project)

  const defaultTags = useMemo(
    () => t('portfolioSingle.defaultTags', { returnObjects: true }) as string[],
    [t, i18n.language],
  )
  const defaultTechnologies = useMemo(
    () =>
      t('portfolioSingle.defaultTech', { returnObjects: true }) as { name: string; note: string }[],
    [t, i18n.language],
  )
  const defaultWhatIBuilt = t('portfolioSingle.defaultWhatIBuilt')
  const techFallback = t('portfolioSingle.techFallbackNote')

  const tags = p.tags ?? defaultTags
  const technologies = p.technologies ?? defaultTechnologies

  return (
    <>
      <SiteHeader />
      <main>
        <section className="section section--tight reveal">
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 18, flexWrap: 'wrap' }}>
              <div>
                <div className="chip">{p.subtitle}</div>
                <h1 className="heroTitle" style={{ marginTop: 14 }}>
                  {p.title}
                </h1>
                <p className="heroText" style={{ maxWidth: 720 }}>
                  {p.description ?? ''}
                </p>
                <div className="heroActions" style={{ marginTop: 18 }}>
                  {p.liveUrl ? (
                    <a href={p.liveUrl} className="btn btnPrimary" target="_blank" rel="noopener noreferrer">
                      {t('portfolioSingle.visitLive')} <span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
                  <Link to="/contact" className={p.liveUrl ? 'btn btnGhost' : 'btn btnPrimary'}>
                    {t('portfolioSingle.hireSimilar')} <span aria-hidden="true">→</span>
                  </Link>
                  <Link to="/portfolio" className="btn btnGhost">
                    {t('portfolioSingle.backPortfolio')} <span aria-hidden="true">↩</span>
                  </Link>
                </div>
              </div>

              <div style={{ width: '100%', maxWidth: 420 }}>
                <div className="heroSideCard" style={{ padding: 0, overflow: 'hidden' }}>
                  <img
                    src={p.thumbnailUrl}
                    alt={p.title}
                    style={{ width: '100%', height: 320, objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>

            <div className="divider" />

            <div className="twoCol">
              <div>
                <h2 className="sectionHeading" style={{ fontSize: 28, marginBottom: 10 }}>
                  {t('portfolioSingle.whatIBuilt')}
                </h2>
                <p className="textBlock">{p.whatIBuilt ?? defaultWhatIBuilt}</p>
                <div style={{ marginTop: 18, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  {tags.map((tag) => (
                    <div
                      key={tag}
                      className="chip"
                      style={{
                        background: 'rgba(240,242,244,0.06)',
                        borderColor: 'rgba(240,242,244,0.14)',
                        color: 'var(--text-strong)',
                      }}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="sectionHeading" style={{ fontSize: 28, marginBottom: 10 }}>
                  {t('portfolioSingle.technologies')}
                </h2>
                <div style={{ display: 'grid', gap: 12 }}>
                  {technologies.map((tech) => (
                    <div key={tech.name} className="faqItem">
                      <h4 style={{ marginBottom: 2 }}>{tech.name}</h4>
                      <p>{tech.note ?? techFallback}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

export default function PortfolioSingle() {
  const { t } = useTranslation()
  const { slug } = useParams()
  const projects = projectsData as Project[]
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <>
        <SiteHeader />
        <main className="container" style={{ padding: '60px 0' }}>
          <h1 className="heroTitle" style={{ fontSize: 40 }}>
            {t('portfolioSingle.notFoundTitle')}
          </h1>
          <p className="heroText">{t('portfolioSingle.notFoundSub')}</p>
          <Link to="/portfolio" className="btn btnPrimary">
            {t('portfolioSingle.backPortfolio')} <span aria-hidden="true">→</span>
          </Link>
        </main>
        <SiteFooter />
      </>
    )
  }

  return <PortfolioSingleContent project={project} />
}
