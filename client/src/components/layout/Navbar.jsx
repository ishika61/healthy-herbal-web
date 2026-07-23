import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useCart } from '../../hooks/useCart'
import { useAuth } from '../../hooks/useAuth'
import Icon from '../common/Icon'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

function Navbar() {
  const { totalItems } = useCart()
  const { user } = useAuth()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  const navClass = ({ isActive }) =>
    `relative py-1 text-sm font-semibold tracking-wide transition-colors hh-link-underline ${
      isActive ? 'text-emerald-300' : 'text-mist-300 hover:text-white-100'
    }`

  return (
    <header
      className={`hh-glass sticky top-0 z-50 border-x-0 border-t-0 transition-all duration-300 ${
        isScrolled ? 'bg-black-950/85 shadow-[0_1px_0_0_rgba(255,255,255,0.08)]' : 'bg-black-950/55'
      }`}
    >
      <div className="hh-container flex min-h-18 items-center justify-between gap-6 py-3.5">
        <NavLink to="/" className="group flex shrink-0 items-center gap-2.5" aria-label="Healthy Herbal home">
          <span className="relative flex size-10 items-center justify-center rounded-full bg-emerald-600 text-white-100 transition-transform duration-500 group-hover:rotate-[18deg]">
            <span className="hh-glow absolute inset-0 -z-10 opacity-70" />
            <Icon name="leaf" className="size-5" />
          </span>
          <span className="text-xl font-semibold tracking-tight text-white-100" style={{ fontFamily: 'var(--font-display)' }}>
            Healthy <span className="text-gold-400">Herbal</span>
          </span>
        </NavLink>

        <nav aria-label="Main navigation" className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={navClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <NavLink
            to={user ? '/profile' : '/sign-in'}
            className="hidden size-10 items-center justify-center rounded-full border border-white/10 text-mist-300 transition-colors duration-300 hover:border-emerald-500/60 hover:bg-emerald-600/20 hover:text-white-100 sm:flex"
            aria-label={user ? 'Open user profile' : 'Sign in'}
            title={user ? user.name : 'Sign in'}
          >
            <Icon name="user" className="size-[18px]" />
          </NavLink>

          <NavLink
            to="/cart"
            className="group flex items-center gap-2 rounded-full border border-emerald-500/50 bg-emerald-600/10 px-4 py-2.5 text-sm font-bold text-white-100 transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-600/25"
          >
            <Icon name="cart" className="size-[18px]" />
            <span>Cart</span>
            <span
              aria-label={`${totalItems} items in cart`}
              className="flex size-5 items-center justify-center rounded-full bg-gold-400 text-[11px] font-extrabold text-black-950 transition-colors group-hover:bg-gold-300"
            >
              {totalItems}
            </span>
          </NavLink>

          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-full border border-white/10 text-white-100 md:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            <Icon name={isMobileMenuOpen ? 'close' : 'menu'} className="size-5" />
          </button>
        </div>
      </div>

      <div
        className={`grid md:hidden transition-[grid-template-rows] duration-300 ease-out ${
          isMobileMenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="flex flex-col gap-1 border-t border-white/10 bg-black-950/95 px-5 py-4"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-3 text-base font-semibold transition-colors ${
                    isActive ? 'bg-emerald-600/15 text-emerald-300' : 'text-mist-300 hover:bg-white/5 hover:text-white-100'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to={user ? '/profile' : '/sign-in'}
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-semibold text-mist-300 hover:bg-white/5 hover:text-white-100"
            >
              {user ? 'Profile' : 'Sign in'}
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
