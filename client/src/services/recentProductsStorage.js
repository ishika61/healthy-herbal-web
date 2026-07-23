import { products } from '../data/products'

const RECENT_PRODUCTS_KEY = 'healthy-herbal-recent-products'

export function getRecentProducts() {
  try {
    const stored = JSON.parse(localStorage.getItem(RECENT_PRODUCTS_KEY) || '[]')
    return Array.isArray(stored) ? stored.map((item) => products.find((product) => product.id === item.id) || item) : []
  } catch {
    return []
  }
}
export function addRecentProduct(product) { const recent = getRecentProducts().filter((item) => item.id !== product.id); localStorage.setItem(RECENT_PRODUCTS_KEY, JSON.stringify([product, ...recent].slice(0, 6))) }
