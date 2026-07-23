import { useNavigate } from 'react-router-dom'
import Seo from '../components/common/Seo'
import Icon from '../components/common/Icon'
import Reveal from '../components/common/Reveal'
import { useAuth } from '../hooks/useAuth'
import { useToast } from '../hooks/useToast'

function Profile() {
  const { user, logout } = useAuth()
  const { showToast } = useToast()
  const navigate = useNavigate()
  const handleLogout = () => {
    logout()
    showToast('You have been signed out')
    navigate('/', { replace: true })
  }

  return (
    <main className="hh-container py-16 sm:py-20">
      <Seo title="Your profile" />
      <Reveal className="hh-card relative mx-auto max-w-2xl overflow-hidden p-7 sm:p-10">
        <span aria-hidden="true" className="hh-glow pointer-events-none absolute -right-16 -top-16 size-56 opacity-40" />
        <p className="hh-eyebrow relative text-gold-400">Your account</p>
        <div className="relative mt-5 flex items-center gap-4">
          <div className="flex size-14 items-center justify-center rounded-full bg-gold-400 text-lg font-bold text-black-950">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-white-100">{user.name}</h1>
            <p className="mt-1 text-mist-500">{user.email}</p>
          </div>
        </div>
        <dl className="relative mt-8 grid gap-4 border-y border-white/8 py-6 text-sm sm:grid-cols-2">
          <div>
            <dt className="font-bold text-white-100">Account email</dt>
            <dd className="mt-1 text-mist-500">{user.email}</dd>
          </div>
          <div>
            <dt className="font-bold text-white-100">Member since</dt>
            <dd className="mt-1 text-mist-500">{new Date(user.createdAt).toLocaleDateString()}</dd>
          </div>
        </dl>
        <button
          type="button"
          onClick={handleLogout}
          className="relative mt-8 flex items-center gap-2 rounded-full border border-rose-500/50 px-6 py-3 text-sm font-bold text-rose-300 transition-colors hover:bg-rose-500/15"
        >
          <Icon name="close" className="size-4" />
          Log out
        </button>
      </Reveal>
    </main>
  )
}

export default Profile
