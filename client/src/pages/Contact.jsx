import { useState } from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import ErrorState from '../components/common/ErrorState'
import NewsletterSignup from '../components/common/NewsletterSignup'
import PageHero from '../components/common/PageHero'
import ImagePlaceholder from '../components/common/ImagePlaceholder'
import Icon from '../components/common/Icon'
import Reveal from '../components/common/Reveal'
import { useToast } from '../hooks/useToast'
import { contactService } from '../services/contactService'
import { getApiErrorMessage } from '../utils/getApiErrorMessage'

const initialForm = { name: '', email: '', message: '' }

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const { showToast } = useToast()

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
    setSubmitted(false)
    setSubmitError('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Please enter a valid email address.'
    if (form.message.trim().length < 10) nextErrors.message = 'Please share a message of at least 10 characters.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return
    setIsSubmitting(true)
    setSubmitError('')
    try {
      await contactService.submit(form)
      setSubmitted(true)
      setForm(initialForm)
      showToast('Your message has been received')
    } catch (requestError) {
      const message = getApiErrorMessage(requestError, 'Your message could not be sent. Please try again.')
      setSubmitError(message)
      showToast(message, 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />
      <PageHero eyebrow="Contact us" title="Let's talk wellness" description="Have a question about a product or your herbal ritual? We are here to help." />

      <section className="hh-container grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal as="form" onSubmit={handleSubmit} noValidate className="hh-card p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-white-100">Send us a message</h2>
          <p className="mt-2 text-sm leading-6 text-mist-500">We will get back to you as soon as we can.</p>
          <div className="mt-6 space-y-5">
            <label className="block text-sm font-bold text-mist-300">
              Name
              <input className="hh-field mt-2" name="name" value={form.name} onChange={updateField} disabled={isSubmitting} />
              {errors.name && <span className="mt-1 block text-xs font-medium text-rose-300">{errors.name}</span>}
            </label>
            <label className="block text-sm font-bold text-mist-300">
              Email
              <input className="hh-field mt-2" name="email" type="email" value={form.email} onChange={updateField} disabled={isSubmitting} />
              {errors.email && <span className="mt-1 block text-xs font-medium text-rose-300">{errors.email}</span>}
            </label>
            <label className="block text-sm font-bold text-mist-300">
              Message
              <textarea className="hh-field mt-2 resize-none" name="message" rows="5" value={form.message} onChange={updateField} disabled={isSubmitting} />
              {errors.message && <span className="mt-1 block text-xs font-medium text-rose-300">{errors.message}</span>}
            </label>
          </div>
          <button type="submit" disabled={isSubmitting} className="hh-btn hh-btn-primary mt-7 disabled:cursor-not-allowed disabled:opacity-60">
            {isSubmitting ? 'Sending...' : 'Send message'}
            {!isSubmitting && <Icon name="arrowRight" className="size-4" />}
          </button>
          {submitError && <div className="mt-4"><ErrorState title="Message not sent" message={submitError} /></div>}
          {submitted && (
            <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-emerald-300" role="status">
              <Icon name="check" className="size-4" />
              Thanks for reaching out. Your message has been received.
            </p>
          )}
        </Reveal>

        <div className="space-y-5">
          <Reveal delay={90} className="hh-card relative overflow-hidden p-7">
            <span aria-hidden="true" className="hh-glow pointer-events-none absolute -right-10 -top-10 size-56 opacity-40" />
            <p className="hh-eyebrow relative text-gold-400">Contact details</p>
            <div className="relative mt-6 space-y-5 text-sm leading-6 text-mist-400">
              <p>
                <span className="font-bold text-gold-300">Address</span><br />
                Healthy Herbal, Wellness House<br />
                Bengaluru, Karnataka 560001
              </p>
              <p>
                <span className="font-bold text-gold-300">Email</span><br />
                <a className="hh-link-underline text-white-100" href="mailto:hello@healthyherbal.in">hello@healthyherbal.in</a>
              </p>
              <p>
                <span className="font-bold text-gold-300">Phone</span><br />
                <a className="hh-link-underline text-white-100" href="tel:+919876543210">+91 98765 43210</a>
              </p>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <ImagePlaceholder variant="map" src="/contact-map.png" alt="Map showing Healthy Herbal Wellness House in Bengaluru" aspect="min-h-64" />
          </Reveal>

          <Reveal delay={190} className="hh-card p-6">
            <p className="font-bold text-white-100">Follow Healthy Herbal</p>
            <div className="mt-4 flex flex-wrap gap-5 text-sm font-bold text-emerald-300">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hh-link-underline">Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hh-link-underline">Facebook</a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hh-link-underline">YouTube</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="hh-container pb-20 sm:pb-24">
        <NewsletterSignup />
      </section>
    </>
  )
}

export default Contact
