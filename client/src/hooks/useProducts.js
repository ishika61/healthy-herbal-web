import { useEffect, useState } from 'react'
import { productService } from '../services/productService'
import { getApiErrorMessage } from '../utils/getApiErrorMessage'

export function useProducts({ category, search, sort = 'newest', inStock } = {}) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()
    const loadProducts = async () => {
      setLoading(true)
      setError('')
      try {
        const response = await productService.getAll({ category: category === 'All' ? undefined : category, search: search || undefined, sort, inStock, signal: controller.signal })
        setProducts(response.data)
      } catch (requestError) {
        if (requestError.code !== 'ERR_CANCELED') { setProducts([]); setError(getApiErrorMessage(requestError, 'Unable to load products right now.')) }
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }
    loadProducts()
    return () => controller.abort()
  }, [category, inStock, search, sort])

  return { products, loading, error }
}
