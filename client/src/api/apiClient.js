import axios from 'axios'

const apiClient = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL ||
    'https://healthy-herbal.onrender.com/api',
})

export default apiClient
