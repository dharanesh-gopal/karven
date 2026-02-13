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

/**
 * Fetch all active service detail pages
 */
export async function getAllServiceDetailPages() {
  try {
    const query = `*[_type == "serviceDetailPage" && isActive == true] | order(category asc, order asc, title asc){
      _id,
      title,
      slug,
      category,
      icon,
      order,
      hero{
        badge,
        title,
        subtitle
      },
      overview{
        title,
        description
      },
      seo
    }`
    
    const services = await client.fetch(query)
    return services
  } catch (error) {
    console.error('Error fetching service detail pages:', error)
    return []
  }
}

/**
 * Fetch service detail pages by category
 */
export async function getServiceDetailPagesByCategory(category: 'drone' | 'software' | 'education') {
  try {
    const query = `*[_type == "serviceDetailPage" && category == $category && isActive == true] | order(order asc, title asc){
      _id,
      title,
      slug,
      category,
      icon,
      order,
      overview{
        description
      }
    }`
    
    const services = await client.fetch(query, { category })
    return services
  } catch (error) {
    console.error(`Error fetching service detail pages for category ${category}:`, error)
    return []
  }
}
