/** About page: story, experience, tools (icons via Devicons / Simple Icons) */

const di = (icon: string, file = 'original') =>
  `https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/${icon}/${icon}-${file}.svg`

const diMaster = (icon: string, file = 'original') =>
  `https://raw.githubusercontent.com/devicons/devicon/master/icons/${icon}/${icon}-${file}.svg`

export const aboutStoryParagraphs = [
  'I have been around computers since I was a kid—well before elementary school. I fell in love with the PC world early, and that curiosity quickly turned into building things on the web and picking up other digital skills along the way.',
  'Later I completed two and a half years of study at a government institute, which gave me a structured foundation. After that I started my career as a freelance web developer, taking projects from layout and content through to performance, SEO, and handoff—often as the person wearing every hat on the project.',
  'I also spent six months with a digital agency in Algiers, in the Alger Centre area. There I worked on real client sites in a team setting, with tighter timelines and more process—experience that still shapes how I communicate, estimate work, and deliver under pressure.',
  'Today I combine that freelance breadth with what I learned in-house: fast execution, honest pricing, and sites clients can be proud to show—and maintain.',
] as const

export const aboutExperience = [
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
] as const

export const aboutTools = [
  {
    id: 'vscode' as const,
    title: 'VS Code',
    iconUrl: di('vscode'),
    href: 'https://code.visualstudio.com/',
    desc: 'Primary editor for HTML, CSS, JavaScript, PHP, and project structure.',
  },
  {
    id: 'cursor' as const,
    title: 'Cursor',
    iconUrl: 'https://cdn.simpleicons.org/cursor',
    href: 'https://cursor.com/',
    desc: 'AI-assisted coding when I want faster iteration and refactors.',
  },
  {
    id: 'photoshop' as const,
    title: 'Photoshop',
    iconUrl: di('photoshop', 'plain'),
    href: 'https://www.adobe.com/products/photoshop.html',
    desc: 'Photo retouching, web graphics, and asset prep for client sites.',
  },
  {
    id: 'premierepro' as const,
    title: 'Premiere Pro',
    iconUrl: di('premierepro', 'plain'),
    href: 'https://www.adobe.com/products/premiere.html',
    desc: 'Short promos and social cuts when a project needs motion, not just stills.',
  },
  {
    id: 'figma' as const,
    title: 'Figma',
    iconUrl: di('figma'),
    href: 'https://www.figma.com/',
    desc: 'Layouts, UI exploration, and sharing clear visuals with clients.',
  },
  {
    id: 'canva' as const,
    title: 'Canva',
    iconUrl: di('canva'),
    href: 'https://www.canva.com/',
    desc: 'Quick social templates and simple graphics when speed matters.',
  },
  {
    id: 'codepen' as const,
    title: 'CodePen',
    iconUrl: diMaster('codepen'),
    href: 'https://codepen.io/',
    desc: 'Sometimes for small UI experiments and front-end snippets.',
  },
] as const
