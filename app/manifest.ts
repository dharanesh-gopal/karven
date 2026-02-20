import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Karvensen',
        short_name: 'Karvensen',
        description: 'Karvensen delivers AI-powered drones and enterprise software solutions.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0f172a',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: '/favicon.jpg',
                sizes: '512x512',
                type: 'image/jpeg',
            },
        ],
    }
}
