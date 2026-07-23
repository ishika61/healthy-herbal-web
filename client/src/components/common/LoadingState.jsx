function LoadingState({ label = 'Loading...' }) {
  return (
    <div className="flex min-h-48 items-center justify-center" role="status">
      <p className="hh-glass flex items-center gap-2.5 rounded-full px-5 py-3 text-sm font-semibold text-emerald-300">
        <span className="size-2 animate-pulse rounded-full bg-emerald-400" />
        {label}
      </p>
    </div>
  )
}

export default LoadingState
