import apiClient from '../api/apiClient'
import { resolvePublicAssetUrl } from '../utils/resolvePublicAssetUrl'

function normalizeProductImages(product) {
  return {
    ...product,
    image: resolvePublicAssetUrl(product.image),
    gallery: product.gallery?.map((image) => ({ ...image, image: resolvePublicAssetUrl(image.image) })),
  }
}

export const productService = {
  getAll: async ({ signal, ...params } = {}) => {
    const response = await apiClient.get('/products', { params, signal })
    return { ...response.data, data: response.data.data.map((product) => ({ ...normalizeProductImages(product), id: product._id })) }
  },
  getBySlug: async (slug) => {
    const response = await apiClient.get(`/products/${slug}`)
    return { ...response.data, data: { ...normalizeProductImages(response.data.data), id: response.data.data._id } }
  },
}
