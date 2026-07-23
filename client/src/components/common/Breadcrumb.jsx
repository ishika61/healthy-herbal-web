import { Link } from 'react-router-dom'

function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-white/8 bg-charcoal-850">
      <ol className="hh-container flex flex-wrap items-center gap-2 py-4 text-sm">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {index > 0 && <span className="text-mist-700">/</span>}
            {item.to ? (
              <Link className="hh-link-underline font-semibold text-emerald-300" to={item.to}>{item.label}</Link>
            ) : (
              <span className="text-mist-400" aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumb
