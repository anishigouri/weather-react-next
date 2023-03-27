import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

api.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    token: process.env.NEXT_PUBLIC_CLIMATEMPO_KEY,
  }

  return config
})
