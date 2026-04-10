import { defineConfig } from 'vite'

/**
 * GitHub Pages: set `VITE_BASE_PATH` to your repo name with slashes, e.g. `/portfolio/`.
 * For a user site repo (`username.github.io`), use `/` (default).
 */
function normalizeBase(raw: string | undefined): string {
  const s = raw?.trim()
  if (!s || s === '/') return '/'
  const inner = s.replace(/^\/+|\/+$/g, '')
  return inner ? `/${inner}/` : '/'
}

export default defineConfig({
  base: normalizeBase(process.env.VITE_BASE_PATH),
})
