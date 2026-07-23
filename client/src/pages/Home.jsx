import { Link } from 'react-router-dom'
import FaqList from '../components/home/FaqList'
import InfoCard from '../components/home/InfoCard'
import SectionHeading from '../components/home/SectionHeading'
import ProductCard from '../components/product/ProductCard'
import ErrorState from '../components/common/ErrorState'
import Seo from '../components/common/Seo'
import Reveal from '../components/common/Reveal'
import Icon from '../components/common/Icon'
import { ProductGridSkeleton } from '../components/product/ProductCardSkeleton'
import { benefits, categories, faqs, testimonials, whyChooseUs } from '../data/homeContent'
import { useProducts } from '../hooks/useProducts'

const trustMarks = [
  { icon: 'sprout', label: 'Rooted in ayurvedic tradition' },
  { icon: 'leaf', label: '100% herbal ingredients' },
  { icon: 'truck', label: 'Free shipping across India' },
  { icon: 'shield', label: 'Thoughtfully quality-checked' },
]

const categoryIcons = { 'Herbal Powders': 'sprout', 'Herbal Teas': 'droplet', 'Natural Care': 'sparkle' }

function Home() {
  const { products, loading, error } = useProducts({ sort: 'newest' })

  return (
    <>
      <Seo title="Herbal wellness for everyday rituals" />

      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden bg-black-950">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="hh-glow hh-float absolute -left-24 top-0 size-[28rem] opacity-70" />
          <div className="hh-glow hh-glow-gold hh-float-slow absolute right-[-8rem] top-1/4 size-[26rem] opacity-60" />
          <div className="hh-glow hh-float absolute bottom-[-6rem] left-1/3 size-96 opacity-40" style={{ animationDelay: '1.5s' }} />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="hh-container relative grid gap-14 py-20 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-32">
          <div className="hh-reveal is-visible">
            <p className="hh-eyebrow flex items-center gap-2 text-gold-400">
              <Icon name="leaf" className="size-4" />
              Rooted in wellness
            </p>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-white-100 sm:text-6xl lg:text-[4.2rem]">
              Naturally better,
              <br />
              <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-gold-400 bg-clip-text text-transparent">
                every single day.
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-mist-300">
              A considered collection of herbal essentials for the small rituals that make you feel your best —
              plant-led, honestly made, and easy to return to.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/products" className="hh-btn hh-btn-primary">
                Shop herbal essentials
                <Icon name="arrowRight" className="size-4" />
              </Link>
              <Link to="/about" className="hh-btn hh-btn-ghost">
                Our story
              </Link>
            </div>
          </div>

          <div className="relative hh-reveal is-visible" style={{ animationDelay: '150ms' }}>
            <span aria-hidden="true" className="hh-glow absolute inset-0 opacity-50" />
            <div className="relative grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="hh-float hh-card relative overflow-hidden p-7">
                <span className="flex size-11 items-center justify-center rounded-full bg-emerald-600/20 text-emerald-300">
                  <Icon name="sprout" className="size-6" />
                </span>
                <p className="mt-5 hh-eyebrow text-emerald-400">Everyday care</p>
                <p className="mt-2 text-2xl font-semibold text-white-100" style={{ fontFamily: 'var(--font-display)' }}>
                  Simple, plant-led rituals.
                </p>
              </div>

              <div className="hh-card p-7">
                <span className="flex size-11 items-center justify-center rounded-full bg-gold-400/15 text-gold-300">
                  <Icon name="heart" className="size-5" />
                </span>
                <p className="mt-5 hh-eyebrow text-gold-400">Made for you</p>
                <p className="mt-2 text-lg font-semibold leading-snug text-white-100">Wellness that feels easy to return to.</p>
              </div>

              <div className="hh-float-slow hh-card p-7">
                <span className="flex size-11 items-center justify-center rounded-full bg-emerald-600/20 text-emerald-300">
                  <Icon name="shield" className="size-5" />
                </span>
                <p className="mt-5 hh-eyebrow text-emerald-400">Mindful choice</p>
                <p className="mt-2 text-lg font-semibold leading-snug text-white-100">Nature, carefully considered.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust-mark marquee */}
        <div className="hh-glass relative border-x-0 border-b-0 py-4">
          <div className="flex overflow-hidden">
            <div className="hh-marquee-track flex shrink-0 items-center gap-12 pr-12">
              {[...trustMarks, ...trustMarks].map((mark, index) => (
                <span key={`${mark.label}-${index}`} className="flex shrink-0 items-center gap-2.5 whitespace-nowrap text-sm font-semibold text-mist-300">
                  <Icon name={mark.icon} className="size-4 text-gold-400" />
                  {mark.label}
                </span>
              ))}
            </div>
            <div className="hh-marquee-track flex shrink-0 items-center gap-12 pr-12" aria-hidden="true">
              {[...trustMarks, ...trustMarks].map((mark, index) => (
                <span key={`dup-${mark.label}-${index}`} className="flex shrink-0 items-center gap-2.5 whitespace-nowrap text-sm font-semibold text-mist-300">
                  <Icon name={mark.icon} className="size-4 text-gold-400" />
                  {mark.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- PREMIUM PRODUCTS ---------------- */}
      <section className="hh-container py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src="/premium-products.png"
              alt="Healthy Herbal premium product collection"
              className="w-full object-contain"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="hh-eyebrow flex items-center gap-2 text-emerald-400">
              <span className="h-px w-6 bg-gold-500" />
              Our Premium Products
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white-100 sm:text-4xl">
              Crafted with Nature. Trusted for Wellness.
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-mist-400">
              Discover premium herbal products made with carefully selected natural ingredients and a lasting commitment to quality in every daily wellness ritual.
            </p>
            <Link to="/products" className="hh-btn hh-btn-primary mt-8">
              Explore Products
              <Icon name="arrowRight" className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------- FEATURED ---------------- */}
      <section className="hh-container py-20 sm:py-24">
        <SectionHeading
          eyebrow="Featured essentials"
          title="Made for daily rituals"
          description="Start with our most-loved herbal staples."
          linkLabel="View all products"
        />
        {loading ? (
          <ProductGridSkeleton />
        ) : error ? (
          <div className="mt-10">
            <ErrorState title="Featured products are unavailable" message={error} />
          </div>
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 3).map((product, index) => (
              <Reveal key={product.id} delay={index * 90}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        )}
      </section>

      {/* ---------------- WHY CHOOSE US ---------------- */}
      <section className="relative border-y border-white/8 bg-charcoal-850">
        <div className="hh-container py-20 sm:py-24">
          <SectionHeading eyebrow="Why Healthy Herbal" title="Wellness, without the overwhelm" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {whyChooseUs.map((item, index) => (
              <Reveal key={item.title} delay={index * 90}>
                <InfoCard {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- THE HEALTHY HERBAL WAY ---------------- */}
      <section className="hh-container py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="hh-eyebrow flex items-center gap-2 text-emerald-400">
              <span className="h-px w-6 bg-gold-500" />
              The Healthy Herbal way
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white-100 sm:text-4xl">
              Small choices. Meaningful benefits.
            </h2>
            <p className="mt-5 leading-7 text-mist-500">
              Our essentials are designed to make mindful care a little more approachable, one routine at a time.
            </p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <InfoCard {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SHOP BY CATEGORY ---------------- */}
      <section className="relative border-y border-white/8 bg-charcoal-850">
        <div className="hh-container py-20 sm:py-24">
          <SectionHeading eyebrow="Shop by category" title="Find your ritual" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {categories.map((category, index) => (
              <Reveal key={category.name} delay={index * 90}>
                <Link
                  to="/products"
                  className="hh-card group relative block h-full overflow-hidden p-8"
                >
                  <span aria-hidden="true" className="hh-glow absolute -right-10 -top-10 size-40 opacity-0 transition-opacity duration-500 group-hover:opacity-70" />
                  <span className="relative flex size-14 items-center justify-center rounded-2xl bg-emerald-600/15 text-emerald-300 transition-colors duration-500 group-hover:bg-gold-400 group-hover:text-black-950">
                    <Icon name={categoryIcons[category.name] || 'leaf'} className="size-6" />
                  </span>
                  <h3 className="relative mt-9 text-2xl font-semibold text-white-100">
                    {category.name}
                  </h3>
                  <p className="relative mt-3 text-sm leading-6 text-mist-500">
                    {category.description}
                  </p>
                  <p className="relative mt-8 flex items-center gap-1.5 text-sm font-bold text-emerald-300 transition-colors duration-500 group-hover:text-gold-300">
                    Explore category
                    <Icon name="arrowRight" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- BEST SELLERS ---------------- */}
      <section className="hh-container py-20 sm:py-24">
        <SectionHeading
          eyebrow="Community favourites"
          title="Best selling products"
          description="Essentials our customers return to, again and again."
          linkLabel="Browse the collection"
        />
        {loading ? (
          <ProductGridSkeleton />
        ) : error ? (
          <div className="mt-10">
            <ErrorState title="Best sellers are unavailable" message={error} />
          </div>
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...products].reverse().slice(0, 3).map((product, index) => (
              <Reveal key={product.id} delay={index * 90}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        )}
      </section>

      {/* ---------------- TESTIMONIALS ---------------- */}
      <section className="relative overflow-hidden border-y border-white/8 bg-charcoal-850">
        <div aria-hidden="true" className="hh-glow pointer-events-none absolute -left-20 bottom-0 size-80 opacity-40" />
        <div className="hh-container relative py-20 sm:py-24">
          <SectionHeading eyebrow="From our community" title="Loved in everyday routines" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal key={item.name} delay={index * 90}>
                <blockquote className="hh-card relative h-full p-7">
                  <Icon name="quote" className="size-7 text-gold-400/70" />
                  <p className="mt-5 text-lg leading-8 text-mist-300">{item.quote}</p>
                  <footer className="mt-6 flex items-center gap-2 text-sm">
                    <cite className="not-italic font-bold text-gold-300">{item.name}</cite>
                    <span className="text-mist-500">— {item.location}</span>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="hh-container grid gap-10 py-20 sm:py-24 lg:grid-cols-2 lg:items-start">
        <SectionHeading
          eyebrow="Questions, answered"
          title="A little clarity goes a long way"
          description="Helpful details for your herbal wellness journey."
        />
        <Reveal delay={120}>
          <FaqList items={faqs} />
        </Reveal>
      </section>

      {/* ---------------- NEWSLETTER ---------------- */}
      <section className="relative overflow-hidden border-y border-white/8 bg-charcoal-850">
        <div aria-hidden="true" className="hh-glow hh-glow-gold pointer-events-none absolute right-0 top-0 size-72 opacity-40" />
        <div className="hh-container relative grid gap-8 py-16 md:grid-cols-[1fr_auto] md:items-center">
          <Reveal>
            <p className="hh-eyebrow text-gold-400">Stay in the loop</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white-100">
              A gentler inbox, from us to you.
            </h2>
            <p className="mt-3 text-mist-400">New launches, herbal inspiration, and thoughtful wellness notes.</p>
          </Reveal>
          <Reveal delay={100} className="flex w-full max-w-md flex-col gap-3 sm:flex-row" as="form" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Your email address"
              className="hh-input min-w-0 flex-1"
            />
            <button type="submit" className="hh-btn hh-btn-gold">
              Subscribe
            </button>
          </Reveal>
        </div>
      </section>

      {/* ---------------- CONTACT CTA ---------------- */}
      <section className="hh-container py-20 sm:py-24">
        <Reveal className="hh-card relative overflow-hidden px-7 py-14 text-center sm:px-12">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="hh-glow hh-float absolute -right-16 -top-16 size-72 opacity-60" />
            <div className="hh-glow hh-glow-gold hh-float-slow absolute -left-16 -bottom-16 size-64 opacity-40" />
          </div>
          <div className="relative">
            <p className="hh-eyebrow text-gold-400">We are here to help</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white-100 sm:text-4xl">
              Have a question about your herbal ritual?
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-7 text-mist-400">
              Our team is always happy to help you find a product that feels right for you.
            </p>
            <Link to="/contact" className="hh-btn hh-btn-primary mt-9">
              Contact Healthy Herbal
              <Icon name="arrowRight" className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}

export default Home
