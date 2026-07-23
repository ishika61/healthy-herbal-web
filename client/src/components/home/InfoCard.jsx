function InfoCard({ icon, title, description, className = '' }) {
  return (
    <article className={`hh-card group p-7 ${className}`}>
      <div
        className="flex size-12 items-center justify-center rounded-2xl bg-emerald-600/15 text-lg font-bold text-emerald-300 transition-colors duration-300 group-hover:bg-gold-400 group-hover:text-black-950"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {icon}
      </div>
      <h3 className="mt-6 text-lg font-bold text-white-100">{title}</h3>
      <p className="mt-2.5 text-sm leading-6 text-mist-500">{description}</p>
    </article>
  )
}

export default InfoCard
