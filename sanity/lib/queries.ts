import { client } from './client'

/**
 * Fetch site settings including logo and favicon
 */
export async function getSiteSettings() {
  try {
    const query = `*[_type == "siteSettings"][0]{
      siteName,
      siteDescription,
      logo,
      favicon,
      seo
    }`
    
    const settings = await client.fetch(query)
    return settings
  } catch (error) {
    console.error('Error fetching site settings:', error)
    return null
  }
}
