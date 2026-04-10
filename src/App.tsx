import { Navigate, Route, Routes } from 'react-router-dom'
import { useDocumentI18n } from './hooks/useDocumentI18n'
import { useRevealOnRoute } from './hooks/useRevealOnRoute'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import PortfolioSingle from './pages/PortfolioSingle'
import Contact from './pages/Contact'

export default function App() {
  useDocumentI18n()
  useRevealOnRoute()

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfolio/:slug" element={<PortfolioSingle />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

