/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      }
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*).(jpg|jpeg|png|webp|svg|gif|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Expires',
            value: 'Sun, 15 Feb 2027 18:00:00 GMT', // Roughly 1 year from now
          },
        ],
      },
    ]
  },
}

export default nextConfig
