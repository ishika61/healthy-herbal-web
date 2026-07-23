function QuantitySelector({ quantity, onChange }) {
  return (
    <div className="hh-glass inline-flex items-center rounded-full">
      <button
        type="button"
        className="px-4 py-2.5 text-lg text-emerald-300 transition-colors hover:text-emerald-200 disabled:text-mist-700"
        onClick={() => onChange(quantity - 1)}
        disabled={quantity === 1}
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="min-w-8 text-center text-sm font-bold text-white-100">{quantity}</span>
      <button
        type="button"
        className="px-4 py-2.5 text-lg text-emerald-300 transition-colors hover:text-emerald-200"
        onClick={() => onChange(quantity + 1)}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  )
}

export default QuantitySelector
