import { useTranslation } from 'react-i18next'
import {
  skillsComfortable,
  skillsLearning,
  skillsCarouselOrder,
  type Skill,
} from '../data/skills'

function SkillLogo({ skill }: { skill: Skill }) {
  if (!skill.iconUrl) {
    return (
      <div className="skillCarouselFallback" aria-hidden="true">
        <span>W</span>
      </div>
    )
  }
  return <img src={skill.iconUrl} alt="" width={40} height={40} loading="lazy" decoding="async" />
}

function SkillCard({ skill }: { skill: Skill }) {
  const { t } = useTranslation()
  const isLearning = skill.level === 'learning'
  return (
    <div className={`skillCarouselCard${isLearning ? ' skillCarouselCard--learning' : ''}`}>
      <div className="skillCarouselIconWrap">
        <SkillLogo skill={skill} />
      </div>
      <div className="skillCarouselName">{skill.name}</div>
      <div className={`skillCarouselPill${isLearning ? ' skillCarouselPill--learning' : ''}`}>
        {isLearning ? t('skills.levelingUp') : t('skills.coreStack')}
      </div>
    </div>
  )
}

function itemsForMarquee(items: Skill[]): Skill[] {
  if (items.length >= 6) return items
  const out: Skill[] = []
  const repeats = Math.ceil(6 / items.length)
  for (let r = 0; r < repeats; r++) out.push(...items)
  return out
}

function MarqueeRow({ items, direction }: { items: Skill[]; direction: 'left' | 'right' }) {
  const base = itemsForMarquee(items)
  const loop = [...base, ...base]
  return (
    <div className={`skillsCarouselRow skillsCarouselRow--${direction}`} role="presentation">
      <div className="skillsCarouselTrack">
        {loop.map((skill, i) => (
          <SkillCard key={`${skill.id}-${i}`} skill={skill} />
        ))}
      </div>
    </div>
  )
}

export default function SkillsCarousel() {
  const { t } = useTranslation()

  return (
    <div className="skillsCarousel">
      <p className="skillsCarouselIntro">
        <strong>{t('skills.line1a')}</strong> {t('skills.line1b')}
        <span className="skillsCarouselIntroGap" />
        <strong>{t('skills.line2a')}</strong> {t('skills.line2b')}
      </p>

      <ul className="skillsCarouselSrOnly">
        {skillsCarouselOrder.map((skill) => (
          <li key={skill.id}>
            {skill.name}
            {skill.level === 'learning' ? ` ${t('skills.srLearning')}` : ''}
          </li>
        ))}
      </ul>

      <div className="skillsCarouselViewport" aria-hidden="true">
        <MarqueeRow items={skillsComfortable} direction="left" />
        <MarqueeRow items={skillsLearning} direction="right" />
      </div>

      <div className="skillsCarouselStatic">
        {skillsCarouselOrder.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  )
}
