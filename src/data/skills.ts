/** Simple Icons CDN — SVG logos, brand colors */
const si = (slug: string) => `https://cdn.simpleicons.org/${slug}`

export type SkillLevel = 'comfortable' | 'learning'

export type Skill = {
  id: string
  name: string
  /** Remote SVG; `null` uses initials fallback in the UI (e.g. Webador). */
  iconUrl: string | null
  level: SkillLevel
}

/** Stacks you work with confidently */
export const skillsComfortable: Skill[] = [
  { id: 'html', name: 'HTML', iconUrl: si('html5'), level: 'comfortable' },
  { id: 'css', name: 'CSS', iconUrl: si('css'), level: 'comfortable' },
  { id: 'javascript', name: 'JavaScript', iconUrl: si('javascript'), level: 'comfortable' },
  { id: 'php', name: 'PHP', iconUrl: si('php'), level: 'comfortable' },
  { id: 'lua', name: 'Lua', iconUrl: si('lua'), level: 'comfortable' },
  { id: 'wordpress', name: 'WordPress', iconUrl: si('wordpress'), level: 'comfortable' },
  { id: 'wix', name: 'Wix', iconUrl: si('wix'), level: 'comfortable' },
  { id: 'webador', name: 'Webador', iconUrl: null, level: 'comfortable' },
]

/** Currently deepening */
export const skillsLearning: Skill[] = [
  { id: 'laravel', name: 'Laravel', iconUrl: si('laravel'), level: 'learning' },
  { id: 'react', name: 'React', iconUrl: si('react'), level: 'learning' },
]

export const skillsCarouselOrder: Skill[] = [...skillsComfortable, ...skillsLearning]
