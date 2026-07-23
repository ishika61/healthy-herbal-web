import { useCallback, useMemo, useState } from 'react'
import { ToastContext } from './ToastState'

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])
  const dismissToast = useCallback((id) => setToasts((current) => current.filter((toast) => toast.id !== id)), [])
  const showToast = useCallback((message, type = 'success') => { const id = `${Date.now()}-${Math.random()}`; setToasts((current) => [...current, { id, message, type }]); window.setTimeout(() => dismissToast(id), 3500) }, [dismissToast])
  const value = useMemo(() => ({ showToast }), [showToast])
  return <ToastContext.Provider value={value}>{children}<div className="fixed right-5 top-5 z-50 space-y-3" aria-live="polite">{toasts.map((toast) => <div key={toast.id} className={`flex max-w-sm items-center gap-4 rounded-xl px-4 py-3 text-sm font-semibold shadow-lg ${toast.type === 'error' ? 'bg-rose-700 text-white' : 'bg-emerald-800 text-white'}`}><span>{toast.message}</span><button type="button" aria-label="Dismiss notification" onClick={() => dismissToast(toast.id)}>×</button></div>)}</div></ToastContext.Provider>
}
