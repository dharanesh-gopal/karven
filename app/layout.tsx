import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KarVenSen | AI-Driven Drone & Software Solutions",
  description:
    "KarVenSen is an AI-first IT software services company specializing in Artificial Intelligence, Drone-based solutions, LMS, ERP, Cloud services, and technical awareness programs.",
  keywords: ["AI", "Drone Technology", "Software Development", "LMS", "ERP", "Cloud Services", "Machine Learning"],
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased bg-white`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <Navbar />
          <main className="min-h-screen bg-white">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
