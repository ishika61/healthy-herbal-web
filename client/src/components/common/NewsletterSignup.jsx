import { useState } from 'react'
import Icon from './Icon'

function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) return setMessage('Enter a valid email address.')
    setMessage('Thank you. You are on the Healthy Herbal list!')
    setEmail('')
  }

  return (
    <section className="hh-card relative overflow-hidden px-6 py-10 sm:px-10">
      <span aria-hidden="true" className="hh-glow hh-glow-gold absolute right-0 top-0 size-64 opacity-40" />
      <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="hh-eyebrow text-gold-400">Stay in the loop</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white-100">A gentler inbox, from us to you.</h2>
          <p className="mt-2 text-sm leading-6 text-mist-500">New launches, herbal inspiration, and thoughtful wellness notes.</p>
        </div>
        <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="newsletter-email">Email address</label>
          <input
            id="newsletter-email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Your email address"
            className="hh-input min-w-0 flex-1"
          />
          <button type="submit" className="hh-btn hh-btn-gold">
            Subscribe
            <Icon name="arrowRight" className="size-4" />
          </button>
        </form>
      </div>
      {message && <p className="relative mt-4 text-sm font-semibold text-emerald-300" role="status">{message}</p>}
    </section>
  )
}

export default NewsletterSignup
