import { useEffect } from 'react'

const siteName = 'Healthy Herbal'
const siteUrl = import.meta.env.VITE_SITE_URL || 'http://localhost:5173'

function setMeta(selector, attribute, value) {
  let tag = document.head.querySelector(selector)
  if (!tag) { tag = document.createElement('meta'); tag.setAttribute(attribute.name, attribute.value); document.head.appendChild(tag) }
  tag.setAttribute('content', value)
}

function Seo({ title, description = 'Thoughtfully selected herbal wellness for everyday rituals.' }) {
  useEffect(() => {
    document.title = title ? `${title} | ${siteName}` : siteName
    setMeta('meta[name="description"]', { name: 'name', value: 'description' }, description)
    setMeta('meta[property="og:title"]', { name: 'property', value: 'og:title' }, title || siteName)
    setMeta('meta[property="og:description"]', { name: 'property', value: 'og:description' }, description)
    setMeta('meta[property="og:type"]', { name: 'property', value: 'og:type' }, 'website')
    setMeta('meta[property="og:image"]', { name: 'property', value: 'og:image' }, `${siteUrl}/og-image.jpg`)
  }, [description, title])

  return null
}

export default Seo
