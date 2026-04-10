import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { setupRevealObserver } from '../utils/reveal'

export function useRevealOnRoute() {
  const location = useLocation()

  useEffect(() => {
    // Wait for the new route to paint before observing.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setupRevealObserver()
      })
    })
  }, [location.pathname])
}

