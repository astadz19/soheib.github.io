import { useTranslation } from 'react-i18next'

export type Testimonial = {
  name: string
  role: string
  quote: string
  photoUrl: string
  companyLogoUrl?: string
}

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { t } = useTranslation()
  return (
    <div className="testimonialCard">
      <div className="chip">{t('testimonialCard.chip')}</div>
      <div className="testimonialQuote">“{testimonial.quote}”</div>
      <div className="testimonialFooter">
        <img src={testimonial.photoUrl} alt={testimonial.name} />
        <div>
          <strong>{testimonial.name}</strong>
          <span>{testimonial.role}</span>
        </div>
      </div>
    </div>
  )
}
