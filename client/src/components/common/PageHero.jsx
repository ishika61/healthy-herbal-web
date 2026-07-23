import Icon from './Icon'

function PageHero({ eyebrow = 'Healthy Herbal', title, description }) {
  return (
    <section className="relative overflow-hidden border-b border-white/8 bg-black-950">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="hh-glow hh-float absolute -left-20 -top-20 size-80 opacity-50" />
        <div className="hh-glow hh-glow-gold hh-float-slow absolute right-[-6rem] bottom-[-6rem] size-72 opacity-30" />
      </div>
      <div className="hh-container relative py-16 sm:py-20">
        <p className="hh-eyebrow flex items-center gap-2 text-gold-400">
          <Icon name="leaf" className="size-4" />
          {eyebrow}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white-100 sm:text-5xl">{title}</h1>
        {description && <p className="mt-4 max-w-2xl leading-7 text-mist-400">{description}</p>}
      </div>
    </section>
  )
}

export default PageHero
