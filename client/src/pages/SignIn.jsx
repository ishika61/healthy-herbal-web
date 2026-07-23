import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import ErrorState from '../components/common/ErrorState'
import Seo from '../components/common/Seo'
import Icon from '../components/common/Icon'
import Reveal from '../components/common/Reveal'
import { useAuth } from '../hooks/useAuth'
import { useToast } from '../hooks/useToast'

function SignIn() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const { signIn } = useAuth()
  const { showToast } = useToast()
  const navigate = useNavigate()
  const location = useLocation()

  const updateForm = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
    setError('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(form.email) || !form.password) return setError('Enter a valid email address and password.')
    const result = signIn(form)
    if (!result.success) return setError(result.message)
    showToast(`Welcome back, ${form.email.split('@')[0]}!`)
    navigate(location.state?.from?.pathname || '/', { replace: true })
  }

  return (
    <main className="relative flex min-h-[75vh] items-center overflow-hidden bg-black-950 py-16">
      <Seo title="Sign in" />
      <span aria-hidden="true" className="hh-glow hh-float pointer-events-none absolute -left-24 top-10 size-80 opacity-40" />
      <span aria-hidden="true" className="hh-glow hh-glow-gold hh-float-slow pointer-events-none absolute -right-24 bottom-10 size-72 opacity-30" />
      <Reveal className="hh-card relative mx-auto w-full max-w-md p-7 sm:p-9">
        <span className="flex size-11 items-center justify-center rounded-full bg-emerald-600/20 text-emerald-300">
          <Icon name="user" className="size-5" />
        </span>
        <p className="hh-eyebrow mt-6 text-gold-400">Welcome back</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white-100">Sign in to Healthy Herbal</h1>
        <form className="mt-7 space-y-5" onSubmit={handleSubmit} noValidate>
          <label className="block text-sm font-bold text-mist-300">
            Email
            <input name="email" type="email" value={form.email} onChange={updateForm} className="hh-field mt-2" autoComplete="email" />
          </label>
          <label className="block text-sm font-bold text-mist-300">
            Password
            <input name="password" type="password" value={form.password} onChange={updateForm} className="hh-field mt-2" autoComplete="current-password" />
          </label>
          <button type="submit" className="hh-btn hh-btn-primary w-full">
            Sign in
            <Icon name="arrowRight" className="size-4" />
          </button>
        </form>
        {error && <div className="mt-5"><ErrorState title="Unable to sign in" message={error} /></div>}
        <p className="mt-6 text-center text-sm text-mist-500">
          New to Healthy Herbal? <Link className="hh-link-underline font-bold text-emerald-300" to="/sign-up">Create an account</Link>
        </p>
      </Reveal>
    </main>
  )
}

export default SignIn
