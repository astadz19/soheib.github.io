import { useTranslation } from 'react-i18next'
import type { Project } from '../data/projects.d.ts'
import { frProjectCopy } from '../locales/fr-projects'

export function useTranslatedProject(project: Project): Project {
  const { i18n } = useTranslation()
  const lng = i18n.resolvedLanguage ?? i18n.language
  if (!lng.startsWith('fr')) return project

  const tr = frProjectCopy[project.slug]
  if (!tr) return project

  return {
    ...project,
    subtitle: tr.subtitle,
    description: tr.description,
    whatIBuilt: tr.whatIBuilt,
    tags: tr.tags,
    technologies: tr.technologies,
  }
}
