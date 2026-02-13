import { Metadata } from 'next'
import { urlFor } from '@/sanity/lib/image'

interface SEOData {
  metaTitle?: string
  metaDescription?: string
  keywords?: string[]
  ogTitle?: string
  ogDescription?: string
  ogImage?: any
  canonicalUrl?: string
  noIndex?: boolean
  noFollow?: boolean
}

interface GenerateMetadataParams {
  seo?: SEOData
  fallbackTitle?: string
  fallbackDescription?: string
  path?: string
}

/**
 * Generate Next.js metadata from Sanity SEO data
 * @param params - SEO data and fallback values
 * @returns Metadata object for Next.js
 */
export function generateSEOMetadata({
  seo,
  fallbackTitle = 'KarVenSen | AI-Driven Drone & Software Solutions',
  fallbackDescription = 'KarVenSen is an AI-first IT software services company specializing in Artificial Intelligence, Drone-based solutions, LMS, ERP, Cloud services, and technical awareness programs.',
  path,
}: GenerateMetadataParams): Metadata {
  const title = seo?.metaTitle || fallbackTitle
  const description = seo?.metaDescription || fallbackDescription
  const ogTitle = seo?.ogTitle || title
  const ogDescription = seo?.ogDescription || description

  // Generate OG image URL from Sanity
  const ogImageUrl = seo?.ogImage
    ? urlFor(seo.ogImage).width(1200).height(630).url()
    : undefined

  // Build robots directive
  const robots = {
    index: !seo?.noIndex,
    follow: !seo?.noFollow,
    googleBot: {
      index: !seo?.noIndex,
      follow: !seo?.noFollow,
    },
  }

  // Build canonical URL
  const canonical = seo?.canonicalUrl || (path ? `https://karvensen.com${path}` : undefined)

  const metadata: Metadata = {
    title,
    description,
    keywords: seo?.keywords,
    alternates: canonical ? { canonical } : undefined,
    robots,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: canonical,
      siteName: 'KarVenSen',
      images: ogImageUrl
        ? [
            {
              url: ogImageUrl,
              width: 1200,
              height: 630,
              alt: seo?.ogImage?.alt || title,
            },
          ]
        : undefined,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      images: ogImageUrl ? [ogImageUrl] : undefined,
    },
  }

  return metadata
}

/**
 * Generate JSON-LD structured data for a service page
 */
export function generateServiceStructuredData({
  name,
  description,
  url,
  provider = 'KarVenSen',
  areaServed = 'Worldwide',
}: {
  name: string
  description: string
  url: string
  provider?: string
  areaServed?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider,
      url: 'https://karvensen.com',
    },
    areaServed: {
      '@type': 'Place',
      name: areaServed,
    },
    url,
  }
}

/**
 * Generate JSON-LD structured data for organization
 */
export function generateOrganizationStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'KarVenSen',
    alternateName: 'KarVenSen Technologies',
    url: 'https://karvensen.com',
    logo: 'https://karvensen.com/karvensen favicon logo.jpeg',
    description:
      'KarVenSen is an AI-first IT software services company specializing in Artificial Intelligence, Drone-based solutions, LMS, ERP, Cloud services, and technical awareness programs.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@karvensen.com',
    },
    sameAs: [
      'https://www.linkedin.com/company/karvensen',
      // Add other social media URLs
    ],
  }
}

/**
 * Generate JSON-LD breadcrumb structured data
 */
export function generateBreadcrumbStructuredData(breadcrumbs: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  }
}
