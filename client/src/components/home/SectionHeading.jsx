import { Link } from 'react-router-dom'
import Icon from '../common/Icon'
import Reveal from '../common/Reveal'

function SectionHeading({ eyebrow, title, description, linkLabel }) {
  return (
    <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        {eyebrow && (
          <p className="hh-eyebrow flex items-center gap-2 text-emerald-400">
            <span className="h-px w-6 bg-gold-500" />
            {eyebrow}
          </p>
        )}
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white-100 sm:text-4xl">{title}</h2>
        {description && <p className="mt-3 max-w-xl leading-7 text-mist-500">{description}</p>}
      </div>
      {linkLabel && (
        <Link
          to="/products"
          className="hh-link-underline group flex shrink-0 items-center gap-1.5 text-sm font-bold text-emerald-300"
        >
          {linkLabel}
          <Icon name="arrowRight" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      )}
    </Reveal>
  )
}

export default SectionHeading
