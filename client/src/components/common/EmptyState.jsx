import { Link } from 'react-router-dom'
import Icon from './Icon'

function EmptyState({ title, description, actionLabel, actionTo = '/products' }) {
  return (
    <div className="hh-frame flex flex-col items-center gap-4 px-8 py-14 text-center">
      <span className="relative flex size-12 items-center justify-center rounded-full border border-white/12 bg-white/5 text-emerald-300">
        <Icon name="leaf" className="size-5" />
      </span>
      <h2 className="relative text-lg font-bold text-white-100">{title}</h2>
      <p className="relative mx-auto max-w-md leading-7 text-mist-500">{description}</p>
      {actionLabel && (
        <Link to={actionTo} className="hh-btn hh-btn-primary relative mt-2">
          {actionLabel}
        </Link>
      )}
    </div>
  )
}

export default EmptyState
