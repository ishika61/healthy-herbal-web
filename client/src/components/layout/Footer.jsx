import { Link } from 'react-router-dom'
import Icon from '../common/Icon'

const trustMarks = ['100% Herbal', 'Thoughtfully sourced', 'Made in India']

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-black-900 text-mist-300">
      <div aria-hidden="true" className="hh-glow pointer-events-none absolute -right-24 -top-24 size-96 opacity-40" />
      <div className="hh-container relative grid gap-12 py-16 md:grid-cols-[1.3fr_1fr]">
        <div>
          <Link to="/" className="inline-flex items-center gap-2.5">
            <span className="relative flex size-10 items-center justify-center rounded-full bg-gold-400 text-black-950">
              <Icon name="leaf" className="size-5" />
            </span>
            <span className="text-2xl font-semibold tracking-tight text-white-100" style={{ fontFamily: 'var(--font-display)' }}>
              Healthy Herbal
            </span>
          </Link>
          <p className="mt-5 max-w-sm leading-7 text-mist-500">
            Thoughtfully selected herbal wellness, for the small rituals that make everyday life feel a little better.
          </p>
          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
            {trustMarks.map((mark) => (
              <li key={mark} className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-400/90">
                <Icon name="sprout" className="size-3.5" strokeWidth={2} />
                {mark}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:justify-self-end">
          <p className="hh-eyebrow text-emerald-400">Explore</p>
          <div className="mt-5 flex flex-col gap-3 text-sm text-mist-300">
            <Link to="/products" className="hh-link-underline w-fit transition-colors hover:text-white-100">Products</Link>
            <Link to="/about" className="hh-link-underline w-fit transition-colors hover:text-white-100">Our story</Link>
            <Link to="/contact" className="hh-link-underline w-fit transition-colors hover:text-white-100">Contact</Link>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/8">
        <div className="hh-container flex flex-col items-center gap-2 py-5 text-xs text-mist-700 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Healthy Herbal. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Rooted in nature <Icon name="leaf" className="size-3.5 text-emerald-400" strokeWidth={2} />
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
