import { useEffect, useMemo, useState } from 'react'
import { WishlistContext } from './WishlistState'
import { loadWishlist, saveWishlist } from '../services/wishlistStorage'

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState(loadWishlist)
  useEffect(() => { saveWishlist(wishlistItems) }, [wishlistItems])
  const toggleWishlist = (product) => setWishlistItems((current) => current.some((item) => item.id === product.id) ? current.filter((item) => item.id !== product.id) : [...current, product])
  const value = useMemo(() => ({ wishlistItems, toggleWishlist, isWishlisted: (id) => wishlistItems.some((item) => item.id === id) }), [wishlistItems])
  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
}
