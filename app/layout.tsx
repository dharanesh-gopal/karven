import type React from "react"
import type { Metadata } from "next"
import { Outfit, Space_Grotesk } from "next/font/google"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
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
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Karvensen | Enterprise AI & Drone Solutions",
  description:
    "Karvensen is a leading enterprise technology company specializing in AI software development, drone technology, LMS solutions, ERP systems, cloud infrastructure, and professional training programs.",
  keywords: [
    "AI",
    "Drone Technology",
    "Software Development",
    "LMS",
    "ERP",
    "Cloud Services",
    "Enterprise Solutions",
    "Machine Learning",
    "Digital Transformation",
  ],
  authors: [{ name: "Karvensen" }],
  creator: "Karvensen",
  publisher: "Karvensen",
  robots: "index, follow",
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
      <body className={`${inter.className} font-sans antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="min-h-screen bg-white dark:bg-gray-950">{children}</main>
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
