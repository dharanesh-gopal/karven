import type React from "react"
import type { Metadata } from "next"
import { Outfit, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { ConditionalLayout } from "@/components/conditional-layout"
import { getSiteSettings } from "@/sanity/lib/queries"
import { urlFor } from "@/sanity/lib/image"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap"
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap"
})

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings()
  const siteUrl = "https://karven.vercel.app"

  // Get favicon URL from Sanity, fallback to local file
  const faviconUrl = settings?.favicon
    ? urlFor(settings.favicon).width(32).height(32).format('png').url()
    : '/karvensen favicon logo.jpeg'

  const title = settings?.siteName || "Karvensen | AI-First Drone Technology & Software Services"
  const description = settings?.siteDescription ||
    "Elevate your business with Karvensen's AI-powered agricultural drones and enterprise software. We deliver innovative solutions from India for global scale."

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: `%s | Karvensen`
    },
    description: description,
    keywords: settings?.seo?.keywords || ["AI Solutions", "Drone Technology India", "Software Development", "Agricultural Drones", "ERP Solutions", "LMS Platforms", "Machine Learning", "Karvensen"],
    authors: [{ name: "Karvensen Team" }],
    creator: "Karvensen",
    publisher: "Karvensen",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: title,
      description: description,
      url: siteUrl,
      siteName: "Karvensen",
      images: [
        {
          url: "/karvensen-logo.png",
          width: 1200,
          height: 630,
          alt: "Karvensen - AI & Drone Technology",
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: ["/karvensen-logo.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: faviconUrl,
      shortcut: faviconUrl,
      apple: faviconUrl,
    },
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Karvensen",
  "url": "https://karven.vercel.app",
  "logo": "https://karven.vercel.app/karvensen favicon logo.jpeg",
  "sameAs": [
    "https://www.linkedin.com/company/karvensen/",
    // Add other social links if known
  ],
  "description": "Karvensen is an AI-first IT software services company specializing in Artificial Intelligence, Drone-based solutions, and enterprise software.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${spaceGrotesk.variable} font-sans antialiased bg-white overflow-x-hidden`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <ConditionalLayout>{children}</ConditionalLayout>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
