import { Link } from 'react-router-dom'
import CartItem from '../components/cart/CartItem'
import PageHero from '../components/common/PageHero'
import Icon from '../components/common/Icon'
import Reveal from '../components/common/Reveal'
import { useCart } from '../hooks/useCart'

function Cart() {
  const { cartItems, totalItems, totalPrice, updateQuantity, removeFromCart } = useCart()

  if (!cartItems.length) {
    return (
      <>
        <PageHero title="Your cart" description="Your selected herbal essentials will appear here." />
        <section className="hh-container py-20 text-center sm:py-24">
          <Reveal className="hh-frame mx-auto flex max-w-md flex-col items-center gap-4 px-8 py-14">
            <span className="relative flex size-12 items-center justify-center rounded-full border border-white/12 bg-white/5 text-emerald-300">
              <Icon name="cart" className="size-5" />
            </span>
            <p className="relative text-lg font-bold text-white-100">Your cart is currently empty.</p>
            <p className="relative leading-7 text-mist-500">Discover herbal essentials for your daily rituals.</p>
            <Link to="/products" className="hh-btn hh-btn-primary relative mt-2">
              Continue shopping
              <Icon name="arrowRight" className="size-4" />
            </Link>
          </Reveal>
        </section>
      </>
    )
  }

  return (
    <>
      <PageHero title="Your cart" description={`${totalItems} ${totalItems === 1 ? 'item' : 'items'} selected for your wellness ritual.`} />
      <section className="hh-container grid gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_21rem]">
        <Reveal>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} onQuantityChange={updateQuantity} onRemove={removeFromCart} />
          ))}
          <Link to="/products" className="hh-link-underline mt-8 inline-flex items-center gap-1.5 text-sm font-bold text-emerald-300">
            <Icon name="arrowRight" className="size-3.5 rotate-180" />
            Continue shopping
          </Link>
        </Reveal>

        <Reveal delay={100} as="aside" className="hh-card h-fit p-6 lg:sticky lg:top-24">
          <h2 className="text-xl font-bold text-white-100">Order summary</h2>
          <div className="mt-6 space-y-3 border-b border-white/8 pb-5 text-sm">
            <div className="flex justify-between text-mist-400">
              <span>Total items</span><span>{totalItems}</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-white-100">
              <span>Total price</span><span className="text-gold-300">₹{totalPrice}</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => window.alert('Checkout will be available in a future phase.')}
            className="hh-btn hh-btn-primary mt-6 w-full"
          >
            Proceed to checkout
            <Icon name="arrowRight" className="size-4" />
          </button>
          <p className="mt-4 text-center text-xs leading-5 text-mist-700">Checkout, payment, and delivery will be added in a later phase.</p>
        </Reveal>
      </section>
    </>
  )
}

export default Cart
