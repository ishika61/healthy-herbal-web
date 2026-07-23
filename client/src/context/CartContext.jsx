import { useEffect, useMemo, useState } from 'react'
import { loadCart, saveCart } from '../services/cartStorage'
import { CartContext } from './CartState'

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(loadCart)

  useEffect(() => {
    saveCart(cartItems)
  }, [cartItems])

  const addToCart = (product, quantity) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id)
      if (existingItem) return currentItems.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item)
      return [...currentItems, { ...product, quantity }]
    })
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return
    setCartItems((currentItems) => currentItems.map((item) => item.id === productId ? { ...item, quantity } : item))
  }

  const removeFromCart = (productId) => setCartItems((currentItems) => currentItems.filter((item) => item.id !== productId))

  const value = useMemo(() => ({
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    totalItems: cartItems.reduce((total, item) => total + item.quantity, 0),
    totalPrice: cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
  }), [cartItems])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
