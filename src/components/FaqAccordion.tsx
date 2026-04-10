import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export type FaqItem = {
  question: string
  answer: string
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const { t } = useTranslation()
  const [open, setOpen] = useState<Set<number>>(new Set())

  function toggle(index: number) {
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  return (
    <div className="faqAccordion" role="region" aria-label={t('faqAccordion.ariaRegion')}>
      {items.map((f, i) => {
        const isOpen = open.has(i)
        const panelId = `faq-panel-${i}`
        const triggerId = `faq-trigger-${i}`
        return (
          <div key={triggerId} className="faqAccordionItem">
            <button
              type="button"
              id={triggerId}
              className="faqAccordionTrigger"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(i)}
            >
              <span className="faqAccordionQuestion">{f.question}</span>
              <span className="faqAccordionChevronWrap" aria-hidden="true">
                <svg className="faqAccordionChevron" width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="m6 9 6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className={`faqAccordionPanel${isOpen ? ' is-open' : ''}`}
            >
              <div className="faqAccordionPanelInner">
                <p className="faqAccordionAnswer">{f.answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
