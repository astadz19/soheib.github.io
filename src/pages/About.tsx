import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import AboutFeaturedProjectLink from '../components/AboutFeaturedProjectLink'
import { profile } from '../data/profile'
import WhyWordPress from '../components/WhyWordPress'
import { aboutTools } from '../data/aboutPage'
import { projects as projectsData } from '../data/projects.js'
import type { Project } from '../data/projects.d.ts'
import { publicAsset } from '../utils/publicAsset'

const avatarUrl = publicAsset('images/soheib.png')

type ExpCard = { id: string; badge: string; title: string; meta: string; blurb: string }

export default function About() {
  const { t, i18n } = useTranslation()
  const projects = projectsData as Project[]

  const storyParagraphs = useMemo(
    () => t('about.storyParagraphs', { returnObjects: true }) as string[],
    [t, i18n.language],
  )
  const experience = useMemo(
    () => t('about.experience', { returnObjects: true }) as ExpCard[],
    [t, i18n.language],
  )

  return (
    <>
      <SiteHeader />

      <main>
        <section className="section section--tight reveal">
          <div className="container">
            <div className="twoCol" style={{ alignItems: 'center' }}>
              <div>
                <div className="chip">{t('about.chip')}</div>
                <h1 className="heroTitle" style={{ marginTop: 14 }}>
                  {t('about.heroTitle', { name: profile.fullName })}
                </h1>
                <p className="heroText" style={{ maxWidth: 640 }}>
                  {t('profile.bio')}
                </p>

                <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap', marginTop: 22 }}>
                  <div className="heroSideCard" style={{ padding: 16, maxWidth: 250 }}>
                    <div style={{ fontSize: 32, fontWeight: 900, color: 'var(--text-strong)' }}>
                      {profile.yearsExperience}+
                    </div>
                    <div style={{ color: 'var(--muted)', fontWeight: 700 }}>{t('about.yearsLabel')}</div>
                  </div>
                  <div className="heroSideCard" style={{ padding: 16, maxWidth: 250 }}>
                    <div style={{ fontSize: 32, fontWeight: 900, color: 'var(--text-strong)' }}>{profile.age}</div>
                    <div style={{ color: 'var(--muted)', fontWeight: 700 }}>
                      {t('about.basedIn', { location: t('profile.location') })}
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: 22 }}>
                  <Link to="/contact" className="btn btnPrimary">
                    {t('about.getInTouch')} <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div className="heroSideCard" style={{ padding: 0, overflow: 'hidden', maxWidth: 420 }}>
                  <img
                    src={avatarUrl}
                    alt={profile.fullName}
                    style={{ width: '100%', height: 420, objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <WhyWordPress />

        <section className="section section--tight reveal">
          <div className="container">
            <h2 className="sectionHeading">{t('about.storyTitle')}</h2>
            <p className="sectionSubheading">{t('about.storySub')}</p>

            <div className="aboutStoryBlock">
              {Array.isArray(storyParagraphs) &&
                storyParagraphs.map((para, i) => (
                  <p key={i} className="textBlock aboutStoryPara">
                    {para}
                  </p>
                ))}
            </div>
          </div>
        </section>

        <section className="section section--tight reveal">
          <div className="container">
            <h2 className="sectionHeading">{t('about.expTitle')}</h2>
            <p className="sectionSubheading">{t('about.expSub')}</p>

            <div className="cardGrid" style={{ gridTemplateColumns: '1fr', gap: 14 }}>
              {Array.isArray(experience) &&
                experience.map((exp) => (
                  <div key={exp.id} className="projectCard">
                    <div className="projectCardTop">
                      <div
                        className="projectThumb"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 900,
                          fontSize: 20,
                          color: 'var(--accent)',
                          background: 'rgba(7, 95, 228, 0.12)',
                        }}
                        aria-hidden
                      >
                        {exp.badge}
                      </div>
                      <div>
                        <h3 className="projectTitle" style={{ fontSize: 20 }}>
                          {exp.title}
                        </h3>
                        <div className="projectSubtitle">{exp.meta}</div>
                      </div>
                    </div>
                    <div style={{ marginTop: 12, color: 'var(--muted)', fontWeight: 600, fontSize: 14 }}>
                      {exp.blurb}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        <section className="section section--tight reveal">
          <div className="container">
            <h2 className="sectionHeading">{t('about.toolsTitle')}</h2>
            <p className="sectionSubheading">{t('about.toolsSub')}</p>

            <div className="iconsGrid5">
              {aboutTools.map((tool) => (
                <a
                  key={tool.title}
                  href={tool.href}
                  target="_blank"
                  rel="noreferrer"
                  className="testimonialCard aboutToolCard"
                >
                  <div className="projectThumb" style={{ width: 58, height: 58, background: 'rgba(255,255,255,0.96)' }}>
                    <img src={tool.iconUrl} alt="" />
                  </div>
                  <div style={{ marginTop: 12, color: 'var(--text-strong)', fontWeight: 900 }}>{tool.title}</div>
                  <div style={{ marginTop: 8, color: 'var(--muted)', fontWeight: 600, fontSize: 14 }}>
                    {t(`about.toolDescriptions.${tool.id}`)}
                  </div>
                  <div style={{ marginTop: 14, color: 'var(--accent)', fontWeight: 800 }}>
                    {t('about.officialSite')} <span aria-hidden="true">↗</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--tight reveal">
          <div className="container">
            <h2 className="sectionHeading">{t('about.featuredTitle')}</h2>
            <p className="sectionSubheading">{t('about.featuredSub')}</p>

            <div className="clientsGrid">
              {projects.map((p) => (
                <AboutFeaturedProjectLink key={p.slug} project={p} />
              ))}
            </div>

            <div style={{ marginTop: 22 }}>
              <Link to="/portfolio" className="btn btnPrimary">
                {t('about.browsePortfolio')} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
