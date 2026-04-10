import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useTranslatedProject } from '../hooks/useTranslatedProject'

export type Project = {
  slug: string
  title: string
  subtitle: string
  logoUrl: string
  thumbnailUrl: string
  description?: string
  liveUrl?: string
}

export default function ProjectCard({ project }: { project: Project }) {
  const { t } = useTranslation()
  const p = useTranslatedProject(project as any)

  return (
    <Link
      to={`/portfolio/${p.slug}`}
      className="projectCard"
      aria-label={t('projectCard.openProjectAria', { title: p.title })}
    >
      <div className="projectCardTop">
        <div className="projectThumb">
          <img src={p.logoUrl} alt={p.title} />
        </div>
        <div>
          <h3 className="projectTitle">{p.title}</h3>
          <p className="projectSubtitle">{p.subtitle}</p>
        </div>
      </div>

      <div className="projectCardBottom">
        <div className="chip">{t('projectCard.viewProject')}</div>
        <div className="arrow" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h12" />
            <path d="m13 5 7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
