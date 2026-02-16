import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://karvensen.com'
    const lastModified = new Date()

    const routes = [
        '',
        '/about',
        '/blog',
        '/careers',
        '/contact',
        '/privacy',
        '/services',
        '/terms',
        '/training',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified,
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    return routes
}
