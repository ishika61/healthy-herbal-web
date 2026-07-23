import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ErrorState from '../components/common/ErrorState'
import LoadingState from '../components/common/LoadingState'
import PageHero from '../components/common/PageHero'
import Seo from '../components/common/Seo'
import ProductCard from '../components/product/ProductCard'
import ProductGallery from '../components/product/ProductGallery'
import QuantitySelector from '../components/product/QuantitySelector'
import Icon from '../components/common/Icon'
import Reveal from '../components/common/Reveal'
import { useCart } from '../hooks/useCart'
import { useProduct } from '../hooks/useProduct'
import { useProducts } from '../hooks/useProducts'
import { useToast } from '../hooks/useToast'
import { addRecentProduct, getRecentProducts } from '../services/recentProductsStorage'

function DetailList({ title, items = [] }) {
  return (
    <section className="border-t border-white/8 pt-6">
      <h2 className="text-lg font-bold text-white-100">{title}</h2>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-mist-400">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="font-bold text-emerald-400">•</span>{item}
          </li>
        ))}
      </ul>
    </section>
  )
}

function ProductDetails() {
  const { productSlug } = useParams()
  const { product, loading, error } = useProduct(productSlug)
  const { products } = useProducts({ sort: 'newest' })
  const [quantity, setQuantity] = useState(1)
  const [isAdded, setIsAdded] = useState(false)
  const { addToCart } = useCart()
  const { showToast } = useToast()

  useEffect(() => {
    if (product) addRecentProduct(product)
  }, [product])

  if (loading) return <><PageHero title="Herbal essentials" /><LoadingState label="Loading product..." /></>
  if (error) {
    return (
      <>
        <PageHero title="Product unavailable" />
        <div className="hh-container py-12">
          <ErrorState
            title="We could not load this product"
            message={error}
            action={<Link className="mt-4 inline-block text-sm font-bold text-rose-300 underline" to="/products">Return to products</Link>}
          />
        </div>
      </>
    )
  }
  if (!product) return null

  const recentProducts = getRecentProducts().filter((item) => item.id !== product.id).slice(0, 3)
  const relatedProducts = products
    .filter((item) => item.id !== product.id && item.category === product.category)
    .concat(products.filter((item) => item.id !== product.id && item.category !== product.category))
    .slice(0, 3)
  const handleAddToCart = () => {
    addToCart(product, quantity)
    setIsAdded(true)
    showToast(`${product.name} added to cart`)
  }

  return (
    <>
      <Seo title={product.name} description={product.shortDescription} />
      <div className="border-b border-white/8 bg-charcoal-850">
        <div className="hh-container py-4 text-sm">
          <Link to="/products" className="hh-link-underline font-semibold text-emerald-300">Products</Link>
          <span className="mx-2 text-mist-700">/</span>
          <span className="text-mist-400">{product.name}</span>
        </div>
      </div>

      <section className="hh-container grid gap-10 py-12 sm:py-16 lg:grid-cols-2">
        <Reveal>
          <ProductGallery product={product} />
        </Reveal>
        <Reveal delay={100}>
          <p className="hh-eyebrow text-emerald-400">{product.category}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white-100 sm:text-5xl">{product.name}</h1>
          <p className="mt-5 text-2xl font-bold text-gold-300" style={{ fontFamily: 'var(--font-display)' }}>₹{product.price}</p>
          <p className="mt-6 leading-7 text-mist-400">{product.description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <QuantitySelector quantity={quantity} onChange={setQuantity} />
            <button type="button" onClick={handleAddToCart} className="hh-btn hh-btn-primary">
              {isAdded ? 'Add more to cart' : 'Add to cart'}
              <Icon name="cart" className="size-4" />
            </button>
          </div>
          {isAdded && (
            <p className="mt-3 flex items-center gap-2 text-sm font-medium text-emerald-300">
              <Icon name="check" className="size-4" />
              {quantity} {quantity === 1 ? 'item has' : 'items have'} been added to your cart.
            </p>
          )}
          <div className="mt-10 space-y-6">
            <DetailList title="Ingredients" items={product.ingredients} />
            <DetailList title="Benefits" items={product.benefits} />
            <section className="border-t border-white/8 pt-6">
              <h2 className="text-lg font-bold text-white-100">How to use</h2>
              <p className="mt-3 text-sm leading-6 text-mist-400">{product.howToUse}</p>
            </section>
            <DetailList title="Certifications" items={product.certifications} />
          </div>
        </Reveal>
      </section>

      <section className="border-y border-white/8 bg-charcoal-850">
        <div className="hh-container py-16 sm:py-20">
          <p className="hh-eyebrow text-emerald-400">Keep exploring</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white-100">Related products</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((item, index) => (
              <Reveal key={item.id} delay={index * 90}>
                <ProductCard product={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {recentProducts.length > 0 && (
        <section className="hh-container py-16 sm:py-20">
          <p className="hh-eyebrow text-emerald-400">Your browsing history</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white-100">Recently viewed</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recentProducts.map((item, index) => (
              <Reveal key={item.id} delay={index * 90}>
                <ProductCard product={item} />
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </>
  )
}

export default ProductDetails
