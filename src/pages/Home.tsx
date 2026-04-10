import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import ProjectCard from '../components/ProjectCard'
import TestimonialCard from '../components/TestimonialCard'
import SocialLinks from '../data/socialLinks'

import { projects as projectsData } from '../data/projects.js'
import { profile } from '../data/profile'
import SkillsCarousel from '../components/SkillsCarousel'
import WhyWordPress from '../components/WhyWordPress'
import { publicAsset } from '../utils/publicAsset'

type Testimonial = { name: string; role: string; quote: string; photoUrl: string }

export default function Home() {
  const { t, i18n } = useTranslation()
  const projects = projectsData

  const testimonials = useMemo(
    () => t('testimonials', { returnObjects: true }) as Testimonial[],
    [t, i18n.language],
  )

  const heroBgUrl = publicAsset('images/soheib.png')

  const snippets = useMemo(
    () => [
      {
        img: 'https://cdn.prod.website-files.com/622fbc5a718ac3417fcd3d75/623242067b0fd0b8a43d3f84_dashboard-widget-image-developer-webflow-ecommerce-template.png',
        titleKey: 'home.snippet1',
      },
      {
        img: 'https://cdn.prod.website-files.com/622fbc5a718ac3417fcd3d75/62324206c98f665a47b003e0_calendar-widget-image-developer-webflow-ecommerce-template.png',
        titleKey: 'home.snippet2',
      },
      {
        img: 'https://cdn.prod.website-files.com/622fbc5a718ac3417fcd3d75/62324206e360b18c87d83ceb_dashboard-ui-cards-image-developer-webflow-ecommerce-template.png',
        titleKey: 'home.snippet3',
      },
    ],
    [],
  )

  return (
    <>
      <SiteHeader />

      <main>
        <section className="heroWrap heroWrap--portrait reveal">
          <div className="heroBg" style={{ backgroundImage: `url(${heroBgUrl})` }} />
          <div className="heroContent container">
            <div className="heroGrid">
              <div>
                <div className="chip">{t('home.chipPortfolio')}</div>
                <h1 className="heroTitle">
                  {t('home.heroTitle', { name: profile.fullName, title: t('profile.title') })}
                </h1>
                <p className="heroText">{t('profile.tagline')}</p>

                <div className="heroActions">
                  <Link to="/portfolio" className="btn btnPrimary">
                    {t('home.browsePortfolio')}
                    <span aria-hidden="true">→</span>
                  </Link>
                  <Link to="/about" className="btn btnGhost">
                    {t('home.learnMore')}
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>

              <div className="heroSide" style={{ position: 'relative' }}>
                <div className="heroSideCard">
                  <div className="chip">{t('home.chipAbout')}</div>
                  <h2
                    style={{
                      margin: '16px 0 8px',
                      color: 'var(--text-strong)',
                      fontSize: 22,
                      fontWeight: 800,
                    }}
                  >
                    {t('home.aboutCardTitle')}
                  </h2>
                  <p className="heroText" style={{ margin: 0, maxWidth: 'unset' }}>
                    {t('profile.bioShort')}
                  </p>
                  <div style={{ marginTop: 18 }}>
                    <Link to="/about" className="btn btnGhost">
                      {t('home.learnMore')} <span aria-hidden="true">↗</span>
                    </Link>
                  </div>

                  <div style={{ marginTop: 22 }}>
                    <div
                      style={{
                        fontWeight: 800,
                        color: 'var(--text-strong)',
                        fontSize: 16,
                      }}
                    >
                      {t('home.followMe')}
                    </div>
                    <SocialLinks />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--tight reveal">
          <div className="container">
            <h2 className="sectionHeading">{t('home.workTitle')}</h2>
            <p className="sectionSubheading">{t('home.workSub')}</p>

            <div className="cardGrid portfolioGrid">
              {projects.map((p: { slug: string }) => (
                <ProjectCard key={p.slug} project={p as any} />
              ))}
            </div>
          </div>
        </section>

        <WhyWordPress id="why-wordpress" />

        <section className="section section--tight reveal">
          <div className="container">
            <h2 className="sectionHeading">{t('home.skillsTitle')}</h2>
            <p className="sectionSubheading">{t('home.skillsSub')}</p>
            <SkillsCarousel />
          </div>
        </section>

        <section className="section section--tight reveal">
          <div className="container">
            <h2 className="sectionHeading">{t('home.testimonialsTitle')}</h2>
            <p className="sectionSubheading">{t('home.testimonialsSub')}</p>

            <div className="cardGrid testimonialsGrid">
              {Array.isArray(testimonials) &&
                testimonials.map((item) => <TestimonialCard key={item.name} testimonial={item} />)}
            </div>
          </div>
        </section>

        <section className="section section--tight reveal">
          <div className="container">
            <div>
              <div className="chip">{t('home.snippetsChip')}</div>
              <h2 className="sectionHeading" style={{ marginTop: 16, marginBottom: 10 }}>
                {t('home.snippetsTitle')}
              </h2>
              <div className="cardGrid" style={{ gridTemplateColumns: '1fr', gap: 12 }}>
                {snippets.map((s) => (
                  <div key={s.titleKey} className="projectCard" style={{ padding: 14 }}>
                    <img
                      src={s.img}
                      alt={t(s.titleKey)}
                      style={{
                        borderRadius: 18,
                        width: '100%',
                        maxHeight: 180,
                        objectFit: 'cover',
                      }}
                    />
                    <div
                      style={{
                        marginTop: 10,
                        fontWeight: 800,
                        color: 'var(--neutral-800)',
                      }}
                    >
                      {t(s.titleKey)}
                    </div>
                    <div
                      style={{
                        marginTop: 4,
                        color: 'var(--muted)',
                        fontWeight: 600,
                        fontSize: 14,
                      }}
                    >
                      {t('home.viewProject')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="divider" />

            <div className="formCard">
              <div className="twoCol" style={{ alignItems: 'center' }}>
                <div>
                  <h2 className="sectionHeading" style={{ marginBottom: 8 }}>
                    {t('home.ctaTitle')}
                  </h2>
                  <div className="textBlock">{t('home.ctaSub')}</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Link to="/contact" className="btn btnPrimary">
                    {t('home.getInTouch')} <span aria-hidden="true">→</span>
                  </Link>
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
