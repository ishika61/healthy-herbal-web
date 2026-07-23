import apiClient from '../api/apiClient'

export const productService = {
  getAll: async ({ signal, ...params } = {}) => {
    const response = await apiClient.get('/products', { params, signal })
    return { ...response.data, data: response.data.data.map((product) => ({ ...product, id: product._id })) }
  },
  getBySlug: async (slug) => {
    const response = await apiClient.get(`/products/${slug}`)
    return { ...response.data, data: { ...response.data.data, id: response.data.data._id } }
  },
}
