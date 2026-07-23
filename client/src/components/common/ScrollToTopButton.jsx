import { useEffect, useState } from 'react'
import Icon from './Icon'

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 400)
    window.addEventListener('scroll', updateVisibility, { passive: true })
    updateVisibility()
    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])
  if (!isVisible) return null
  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="hh-glass fixed bottom-6 right-6 z-40 flex size-12 items-center justify-center rounded-full text-white-100 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/50 hover:bg-emerald-600/20"
      style={{ boxShadow: 'var(--shadow-lift)' }}
    >
      <Icon name="arrowUp" className="size-5" />
    </button>
  )
}

export default ScrollToTopButton
