import { joinURL } from 'ufo'
import type { ProviderGetImage } from '@nuxt/image'

export const getImage: ProviderGetImage = (src, { modifiers = {}, baseURL } = {}) => {
  if (!baseURL) {
    baseURL = useRuntimeConfig().public.baseURL // Asegura que tengas baseURL en runtimeConfig
  }

  // Construye la URL completa de la imagen
  const imageURL = joinURL(baseURL, '/img/', src)

  return { url: imageURL }
}