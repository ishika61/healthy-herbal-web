import { useEffect, useState } from 'react'
import { productService } from '../services/productService'
import { getApiErrorMessage } from '../utils/getApiErrorMessage'

export function useProduct(slug) {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isCurrent = true
    const loadProduct = async () => {
      setLoading(true)
      setError('')
      try {
        const response = await productService.getBySlug(slug)
        if (isCurrent) setProduct(response.data)
      } catch (requestError) {
        if (isCurrent) { setProduct(null); setError(getApiErrorMessage(requestError, 'Unable to load this product right now.')) }
      } finally {
        if (isCurrent) setLoading(false)
      }
    }
    loadProduct()
    return () => { isCurrent = false }
  }, [slug])

  return { product, loading, error }
}
