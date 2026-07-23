import { Link } from 'react-router-dom'
import Seo from '../components/common/Seo'
import Icon from '../components/common/Icon'
import Reveal from '../components/common/Reveal'

function NotFound() {
  return (
    <>
      <Seo title="Page not found" />
      <section className="relative flex min-h-[65vh] items-center overflow-hidden bg-black-950">
        <span aria-hidden="true" className="hh-glow hh-float pointer-events-none absolute left-1/4 top-1/4 size-72 opacity-40" />
        <Reveal className="hh-container relative py-16">
          <p className="hh-eyebrow text-gold-400">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white-100">This page has wandered off.</h1>
          <p className="mt-5 max-w-xl leading-7 text-mist-400">The page you are looking for does not exist or may have moved.</p>
          <Link to="/" className="hh-btn hh-btn-primary mt-8">
            Return home
            <Icon name="arrowRight" className="size-4" />
          </Link>
        </Reveal>
      </section>
    </>
  )
}

export default NotFound
