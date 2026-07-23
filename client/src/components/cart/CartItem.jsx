import QuantitySelector from '../product/QuantitySelector'
import Icon from '../common/Icon'

const categoryIconMap = { Wellness: 'sprout', 'Herbal Teas': 'droplet', 'Skin Care': 'sparkle', 'Weight Loss': 'leaf', Immunity: 'shield' }

function CartItem({ item, onQuantityChange, onRemove }) {
  return (
    <article className="grid gap-5 border-b border-white/8 py-6 sm:grid-cols-[7rem_1fr_auto] sm:items-center">
      <div className="hh-frame relative flex aspect-square items-center justify-center p-2">
        <span aria-hidden="true" className="hh-glow absolute left-1/2 top-1/2 size-2/3 -translate-x-1/2 -translate-y-1/2 opacity-40" />
        <Icon name={categoryIconMap[item.category] || 'leaf'} className="relative size-6 text-emerald-300" />
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">{item.category}</p>
        <h2 className="mt-1 text-lg font-bold text-white-100">{item.name}</h2>
        <p className="mt-2 font-bold text-gold-300">₹{item.price}</p>
        <div className="mt-4"><QuantitySelector quantity={item.quantity} onChange={(quantity) => onQuantityChange(item.id, quantity)} /></div>
      </div>
      <div className="flex items-end justify-between gap-5 sm:flex-col sm:items-end">
        <div className="text-right">
          <p className="text-xs text-mist-700">Subtotal</p>
          <p className="mt-1 font-bold text-white-100">₹{item.price * item.quantity}</p>
        </div>
        <button type="button" onClick={() => onRemove(item.id)} className="hh-link-underline text-sm font-bold text-rose-300">
          Remove
        </button>
      </div>
    </article>
  )
}

export default CartItem
