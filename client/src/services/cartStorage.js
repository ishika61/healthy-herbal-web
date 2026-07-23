const CART_STORAGE_KEY = 'healthy-herbal-cart'

export function loadCart() {
  try {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY)
    const parsedCart = savedCart ? JSON.parse(savedCart) : []
    return Array.isArray(parsedCart) ? parsedCart : []
  } catch {
    return []
  }
}

export function saveCart(items) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
}
