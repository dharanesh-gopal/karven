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

/**
 * Fetch services page content
 */
export async function getServicesPageContent() {
  try {
    const query = `*[_type == "servicesPage"][0]{
      hero,
      droneSection{
        ...,
        "image": image.asset,
        learnMoreText,
        titleIcon,
        badge1Icon,
        badge2Icon
      },
      softwareSection{
        ...,
        "image": image.asset,
        learnMoreText,
        titleIcon,
        badge1Icon,
        badge2Icon
      },
      educationSection{
        ...,
        "image": image.asset,
        learnMoreText,
        titleIcon,
        badge1Icon,
        badge2Icon
      },
      ctaSection{
        ...,
        ctaIcon
      },
      seo
    }`
    
    const content = await client.fetch(query)
    return content
  } catch (error) {
    console.error('Error fetching services page content:', error)
    return null
  }
}
