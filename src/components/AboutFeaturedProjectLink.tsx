import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useTranslatedProject } from '../hooks/useTranslatedProject'
import type { Project } from '../data/projects.d.ts'

export default function AboutFeaturedProjectLink({ project }: { project: Project }) {
  const { t } = useTranslation()
  const p = useTranslatedProject(project)

  return (
    <Link to={`/portfolio/${p.slug}`} className="projectCard" style={{ padding: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <div className="projectThumb" style={{ width: 48, height: 48 }}>
          <img src={p.logoUrl} alt="" style={{ objectFit: 'contain' }} />
        </div>
        <div style={{ fontWeight: 800, color: 'var(--text-strong)' }}>{p.title}</div>
      </div>
      <div style={{ marginTop: 10, color: 'var(--accent)', fontWeight: 700, fontSize: 14 }}>
        {t('about.viewProject')} <span aria-hidden="true">→</span>
      </div>
    </Link>
  )
}
