import apiClient from '../api/apiClient'

export const contactService = {
  submit: async (payload) => {
    const response = await apiClient.post('/contact', payload)
    return response.data
  },
}
