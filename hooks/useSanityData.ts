'use client'

import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'

interface UseSanityDataResult<T> {
  data: T | null
  loading: boolean
  error: Error | null
}

/**
 * Custom hook to fetch data from Sanity
 * @param query - GROQ query string
 * @param params - Query parameters
 * @param fallbackData - Optional fallback data if Sanity fails
 * @returns Object with data, loading, and error states
 * 
 * @example
 * const { data, loading, error } = useSanityData<HeroSection>(
 *   '*[_type == "heroSection"][0]'
 * )
 */
export function useSanityData<T>(
  query: string,
  params: Record<string, any> = {},
  fallbackData?: T
): UseSanityDataResult<T> {
  const [data, setData] = useState<T | null>(fallbackData || null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const result = await client.fetch<T>(query, params)
        setData(result)
        setError(null)
      } catch (err) {
        console.error('Sanity fetch error:', err)
        setError(err instanceof Error ? err : new Error('Unknown error'))
        // Use fallback data if available
        if (fallbackData) {
          setData(fallbackData)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [query, JSON.stringify(params)])

  return { data, loading, error }
}
