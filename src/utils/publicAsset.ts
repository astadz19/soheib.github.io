/** Public folder URLs (respects Vite `base`, e.g. GitHub Pages project site). */
export function publicAsset(path: string): string {
  const p = path.startsWith('/') ? path.slice(1) : path
  return `${import.meta.env.BASE_URL}${p}`
}
