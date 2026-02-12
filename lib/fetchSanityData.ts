import { client } from '@/sanity/lib/client'

/**
 * Server-side data fetching for Sanity
 * Use this in Server Components and API routes
 * 
 * @param query - GROQ query string
 * @param params - Query parameters
 * @param fallbackData - Optional fallback data if Sanity fails
 * @param options - Optional caching configuration
 * 
 * @example
 * const heroData = await fetchSanityData<HeroSection>(
 *   '*[_type == "heroSection"][0]'
 * )
 * 
 * @example With custom revalidation
 * const heroData = await fetchSanityData<HeroSection>(
 *   '*[_type == "heroSection"][0]',
 *   {},
 *   undefined,
 *   { tags: ['hero'], revalidate: 30 }
 * )
 */
export async function fetchSanityData<T>(
    query: string,
    params: Record<string, any> = {},
    fallbackData?: T,
    options?: {
        tags?: string[]
        revalidate?: number | false
    }
): Promise<T | null> {
    try {
        const result = await client.fetch<T>(
            query,
            params,
            {
                // Next.js cache options
                next: {
                    tags: options?.tags,
                    revalidate: options?.revalidate,
                },
            }
        )
        return result
    } catch (err) {
        console.error('Sanity fetch error:', err)
        return fallbackData || null
    }
}
