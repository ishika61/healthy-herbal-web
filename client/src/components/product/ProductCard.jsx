import { memo } from 'react'
import { Link } from 'react-router-dom'
import { useToast } from '../../hooks/useToast'
import { useWishlist } from '../../hooks/useWishlist'
import Icon from '../common/Icon'

// Presentational-only mapping from category name to a visual treatment.
// Falls back to a sensible default so any category still renders well.
const categoryVisuals = {
  Wellness: { icon: 'sprout' },
  'Herbal Teas': { icon: 'droplet' },
  'Skin Care': { icon: 'sparkle' },
  'Weight Loss': { icon: 'leaf' },
  Immunity: { icon: 'shield' },
}
const defaultVisual = { icon: 'leaf' }

function ProductCard({ product }) {
  const visual = product.gallery?.[0]
  const { isWishlisted, toggleWishlist } = useWishlist()
  const { showToast } = useToast()
  const wishlisted = isWishlisted(product.id)
  const handleWishlist = () => {
    toggleWishlist(product)
    showToast(wishlisted ? 'Removed from wishlist' : 'Added to wishlist')
  }
  const categoryVisual = categoryVisuals[product.category] || defaultVisual

  return (
    <article className="hh-card group relative overflow-hidden p-5">
      <button
        type="button"
        onClick={handleWishlist}
        className={`absolute right-8 top-8 z-10 flex size-9 items-center justify-center rounded-full backdrop-blur transition-colors ${
          wishlisted ? 'bg-gold-400 text-black-950' : 'bg-black-950/50 text-mist-300 hover:bg-emerald-600/60 hover:text-white-100'
        }`}
        aria-label={wishlisted ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
      >
        <Icon name="heart" filled={wishlisted} className="size-4" />
      </button>

      <Link
        to={`/products/${product.slug}`}
        className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-white/8 bg-charcoal-800 text-center"
      >
        {product.image ? (
          <img src={product.image} alt={product.name} className="size-full object-contain" />
        ) : (
          <>
            <span aria-hidden="true" className="hh-glow hh-pulse-glow absolute left-1/2 top-1/2 size-40 -translate-x-1/2 -translate-y-1/2" />
            <div aria-hidden="true" className="absolute inset-0 opacity-[0.06] hh-grain" />
            <div className="relative flex flex-col items-center gap-3">
              <span className="flex size-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-emerald-300 shadow-sm backdrop-blur transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110 group-hover:border-gold-400/40 group-hover:text-gold-300">
                <Icon name={categoryVisual.icon} className="size-6" />
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-mist-300">
                {visual?.label || 'Herbal essential'}
              </span>
            </div>
          </>
        )}
      </Link>

      <p className="mt-5 text-xs font-bold uppercase tracking-wider text-emerald-400">{product.category}</p>
      <h2 className="mt-1.5 text-lg font-bold text-white-100">{product.name}</h2>
      <p className="mt-2 text-sm leading-6 text-mist-500">{product.shortDescription}</p>

      <div className="mt-5 flex items-center justify-between border-t border-white/8 pt-4">
        <span className="text-lg font-bold text-gold-300" style={{ fontFamily: 'var(--font-display)' }}>
          ₹{product.price}
        </span>
        <Link
          className="hh-link-underline group/link flex items-center gap-1 text-sm font-bold text-emerald-300"
          to={`/products/${product.slug}`}
        >
          View product
          <Icon name="arrowRight" className="size-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}

export default memo(ProductCard)
