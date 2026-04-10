type RevealOptions = {
  selector?: string
  rootMargin?: string
  threshold?: number
}

export function setupRevealObserver(options: RevealOptions = {}) {
  const selector = options.selector ?? '.reveal'
  const rootMargin = options.rootMargin ?? '0px 0px -10% 0px'
  const threshold = options.threshold ?? 0.12

  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

  const els = Array.from(document.querySelectorAll<HTMLElement>(selector))
  if (!els.length) return

  const observer = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue
        const el = e.target as HTMLElement
        el.classList.add('is-visible')
        observer.unobserve(el)
      }
    },
    { root: null, rootMargin, threshold },
  )

  for (const el of els) observer.observe(el)
}

