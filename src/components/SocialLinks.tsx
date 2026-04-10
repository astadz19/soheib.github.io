import React from 'react'

type SocialLink = {
  href: string
  label: string
  icon: React.ReactNode
}

export default function SocialLinks({ links }: { links: SocialLink[] }) {
  return (
    <div className="socialRow" aria-label="Social links">
      {links.map((l) => (
        <a
          key={l.label}
          className="socialIcon"
          href={l.href}
          target="_blank"
          rel="noreferrer"
          aria-label={l.label}
          title={l.label}
        >
          {l.icon}
        </a>
      ))}
    </div>
  )
}

