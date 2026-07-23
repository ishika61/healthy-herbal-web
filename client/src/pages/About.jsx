import { Link } from 'react-router-dom'
import Breadcrumb from '../components/common/Breadcrumb'
import InfoCard from '../components/home/InfoCard'
import NewsletterSignup from '../components/common/NewsletterSignup'
import PageHero from '../components/common/PageHero'
import ImagePlaceholder from '../components/common/ImagePlaceholder'
import Icon from '../components/common/Icon'
import Reveal from '../components/common/Reveal'
import { whyChooseUs } from '../data/homeContent'

const principles = [
  { icon: 'M', title: 'Our mission', description: 'To make mindful, plant-led wellness more approachable for everyday life.' },
  { icon: 'V', title: 'Our vision', description: 'A world where small, thoughtful rituals help people feel more connected to their wellbeing.' },
]
const certifications = [
  { name: 'FSSAI', detail: 'Food safety and quality compliance' },
  { name: 'ISO', detail: 'Quality-management standards' },
]

function About() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'About' }]} />
      <PageHero eyebrow="Our story" title="Wellness, thoughtfully grown" description="Healthy Herbal brings simple plant-led care to the everyday rituals that matter most." />

      <section className="hh-container grid gap-10 py-20 sm:py-24 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <ImagePlaceholder variant="herbal-ingredients" src="/herbal-ingredients.png" alt="Herbal ingredients" aspect="aspect-[5/4]" />
        </Reveal>
        <Reveal delay={100}>
          <p className="hh-eyebrow flex items-center gap-2 text-emerald-400">
            <span className="h-px w-6 bg-gold-500" />
            The Healthy Herbal story
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white-100 sm:text-4xl">Built around everyday wellbeing.</h2>
          <p className="mt-5 leading-8 text-mist-400">
            Healthy Herbal began with a simple idea: natural wellness should feel clear, comforting, and easy to bring into daily
            life. We curate herbal essentials for the moments when you want to slow down, care for yourself, and choose
            thoughtfully.
          </p>
          <p className="mt-4 leading-8 text-mist-400">
            Our collection focuses on familiar botanicals, transparent product information, and rituals that fit real routines.
          </p>
        </Reveal>
      </section>

      <section className="border-y border-white/8 bg-charcoal-850">
        <div className="hh-container py-20 sm:py-24">
          <div className="grid gap-6 md:grid-cols-2">
            {principles.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 90}>
                <InfoCard {...principle} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hh-container py-20 sm:py-24">
        <Reveal>
          <p className="hh-eyebrow flex items-center gap-2 text-emerald-400">
            <span className="h-px w-6 bg-gold-500" />
            Why choose us
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white-100 sm:text-4xl">Care that starts with good choices.</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {whyChooseUs.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <InfoCard {...item} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/8 bg-charcoal-850">
        <span aria-hidden="true" className="hh-glow hh-glow-gold pointer-events-none absolute right-0 top-0 size-72 opacity-30" />
        <div className="hh-container relative grid gap-10 py-20 sm:py-24 md:grid-cols-2">
          <Reveal>
            <p className="hh-eyebrow text-gold-400">Quality matters</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white-100">Committed to trusted standards.</h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((certification, index) => (
              <Reveal key={certification.name} delay={index * 90}>
                <div className="hh-card flex h-full flex-col gap-3 p-6">
                  <span className="flex size-11 items-center justify-center rounded-full bg-emerald-600/20 text-emerald-300">
                    <Icon name="shield" className="size-5" />
                  </span>
                  <p className="text-2xl font-bold text-gold-300" style={{ fontFamily: 'var(--font-display)' }}>{certification.name}</p>
                  <p className="text-sm leading-6 text-mist-500">{certification.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hh-container grid gap-10 py-20 sm:py-24 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <ImagePlaceholder variant="founder" aspect="aspect-square" className="max-h-96" />
        </Reveal>
        <Reveal delay={100}>
          <p className="hh-eyebrow flex items-center gap-2 text-emerald-400">
            <span className="h-px w-6 bg-gold-500" />
            Meet the founder
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white-100 sm:text-4xl">A personal commitment to simpler care.</h2>
          <p className="mt-5 leading-8 text-mist-400">
            Founder and team details will be introduced here as Healthy Herbal grows. This space is ready for the people and
            values behind the brand.
          </p>
        </Reveal>
      </section>

      <section className="hh-container flex flex-col gap-8 pb-20 sm:pb-24">
        <NewsletterSignup />
        <Reveal className="hh-card relative overflow-hidden px-7 py-14 text-center">
          <span aria-hidden="true" className="hh-glow hh-float pointer-events-none absolute -left-16 -top-16 size-64 opacity-50" />
          <div className="relative">
            <h2 className="text-3xl font-semibold tracking-tight text-white-100">Ready to find your ritual?</h2>
            <p className="mt-3 text-mist-400">Explore everyday herbal essentials, thoughtfully selected.</p>
            <Link to="/products" className="hh-btn hh-btn-primary mt-8">
              Shop products
              <Icon name="arrowRight" className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}

export default About
