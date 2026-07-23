function ErrorState({ title = 'Something went wrong', message = 'Please try again shortly.', action }) {
  return (
    <div className="rounded-2xl border border-rose-500/25 bg-rose-500/10 p-6 text-rose-100" role="alert">
      <h2 className="font-bold text-rose-50">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-rose-200/80">{message}</p>
      {action}
    </div>
  )
}

export default ErrorState
