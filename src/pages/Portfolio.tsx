import { useTranslation } from 'react-i18next'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import ProjectCard from '../components/ProjectCard'
import { projects as projectsData } from '../data/projects.js'
import { profile } from '../data/profile'
import { publicAsset } from '../utils/publicAsset'

export default function Portfolio() {
  const { t } = useTranslation()
  const projects = projectsData
  const heroBgUrl = publicAsset('images/soheib.png')

  return (
    <>
      <SiteHeader />
      <main>
        <section className="heroWrap heroWrap--portrait reveal">
          <div className="heroBg" style={{ backgroundImage: `url(${heroBgUrl})` }} />
          <div className="heroContent container">
            <div className="heroGrid" style={{ gridTemplateColumns: '1fr', textAlign: 'left' }}>
              <div>
                <div className="chip">{t('portfolioPage.chip')}</div>
                <h1 className="heroTitle" style={{ marginTop: 14 }}>
                  {t('portfolioPage.title')}
                </h1>
                <p className="heroText" style={{ maxWidth: 740 }}>
                  {t('portfolioPage.sub', {
                    name: profile.fullName,
                    title: t('profile.title'),
                    location: t('profile.location'),
                  })}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--tight reveal">
          <div className="container">
            <div className="cardGrid portfolioGrid">
              {projects.map((p: any) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
