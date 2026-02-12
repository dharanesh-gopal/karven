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
  
  // Get favicon URL from Sanity, fallback to local file
  const faviconUrl = settings?.favicon 
    ? urlFor(settings.favicon).width(32).height(32).format('png').url()
    : '/karvensen favicon logo.jpeg'

  return {
    title: settings?.siteName || "KarVenSen | AI-Driven Drone & Software Solutions",
    description: settings?.siteDescription || 
      "KarVenSen is an AI-first IT software services company specializing in Artificial Intelligence, Drone-based solutions, LMS, ERP, Cloud services, and technical awareness programs.",
    keywords: settings?.seo?.keywords || ["AI", "Drone Technology", "Software Development", "LMS", "ERP", "Cloud Services", "Machine Learning"],
    generator: 'v0.app',
    icons: {
      icon: faviconUrl,
      shortcut: faviconUrl,
      apple: faviconUrl,
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${spaceGrotesk.variable} font-sans antialiased bg-white overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <ConditionalLayout>{children}</ConditionalLayout>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
