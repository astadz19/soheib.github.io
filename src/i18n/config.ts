import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import en from '../locales/en'
import fr from '../locales/fr'
import { profile } from '../data/profile'
import { faqs } from '../data/faqs.js'
import { testimonials } from '../data/testimonials.js'
import { whyWordpressContent } from '../data/whyWordpress'

const whyWordpressEn = {
  chip: en.whyWordpress.chip,
  rolesLabel: en.whyWordpress.rolesLabel,
  title: whyWordpressContent.title,
  subheading: whyWordpressContent.subheading,
  body: [...whyWordpressContent.body],
  pillars: whyWordpressContent.pillars.map((p) => ({ title: p.title, text: p.text })),
  roles: [...whyWordpressContent.roles],
}

const enTranslation = {
  ...en,
  whyWordpress: whyWordpressEn,
  profile: {
    title: profile.title,
    tagline: profile.tagline,
    bio: profile.bio,
    bioShort: profile.bioShort,
    location: profile.location,
  },
  faqs,
  testimonials,
  about: {
    ...en.about,
    storyParagraphs: [
      'I have been around computers since I was a kid—well before elementary school. I fell in love with the PC world early, and that curiosity quickly turned into building things on the web and picking up other digital skills along the way.',
      'Later I completed two and a half years of study at a government institute, which gave me a structured foundation. After that I started my career as a freelance web developer, taking projects from layout and content through to performance, SEO, and handoff—often as the person wearing every hat on the project.',
      'I also spent six months with a digital agency in Algiers, in the Alger Centre area. There I worked on real client sites in a team setting, with tighter timelines and more process—experience that still shapes how I communicate, estimate work, and deliver under pressure.',
      'Today I combine that freelance breadth with what I learned in-house: fast execution, honest pricing, and sites clients can be proud to show—and maintain.',
    ],
    experience: [
      {
        id: 'freelance',
        badge: 'F',
        title: 'Freelance web developer',
        meta: 'Ongoing · Independent / client work',
        blurb:
          'End-to-end websites for businesses—especially WordPress builds—covering design, development, media, SEO basics, and speed optimisation so launches stay on schedule.',
      },
      {
        id: 'agency',
        badge: 'A',
        title: 'Web developer · Digital agency',
        meta: '6 months · Algiers (Alger Centre)',
        blurb:
          'Agency-side delivery for client projects: collaboration, revisions, and shipping work that matched brand and marketing goals in a fast-paced environment.',
      },
    ],
    toolDescriptions: {
      vscode: 'Primary editor for HTML, CSS, JavaScript, PHP, and project structure.',
      cursor: 'AI-assisted coding when I want faster iteration and refactors.',
      photoshop: 'Photo retouching, web graphics, and asset prep for client sites.',
      premierepro: 'Short promos and social cuts when a project needs motion, not just stills.',
      figma: 'Layouts, UI exploration, and sharing clear visuals with clients.',
      canva: 'Quick social templates and simple graphics when speed matters.',
      codepen: 'Sometimes for small UI experiments and front-end snippets.',
    },
  },
}

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      fr: { translation: fr },
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr'],
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
  })

export default i18n
