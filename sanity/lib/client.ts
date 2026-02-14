import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

let clientInstance;

try {
  const isConfigValid = projectId && dataset && projectId !== 'missing_env_var' && projectId !== 'replace_me' && projectId !== '12345678';

  if (isConfigValid) {
    clientInstance = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true, // Always use CDN for better performance and reliability
      perspective: 'published', // Only show published documents
      stega: {
        enabled: false,
      },
      // Explicitly set no authentication for public access
      token: undefined,
      withCredentials: false,
    })
  } else {
    throw new Error("Invalid config")
  }
} catch (e) {
  console.warn("Initializing Sanity client failed or config invalid, using mock.", e);
  clientInstance = {
    fetch: async () => {
      console.warn('Sanity client not configured. Returning empty data.');
      return [];
    }
  }
}

export const client = clientInstance;

