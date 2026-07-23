const WISHLIST_STORAGE_KEY = 'healthy-herbal-wishlist'

export function loadWishlist() { try { const stored = JSON.parse(localStorage.getItem(WISHLIST_STORAGE_KEY) || '[]'); return Array.isArray(stored) ? stored : [] } catch { return [] } }
export function saveWishlist(items) { localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(items)) }
