import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Sanity Studio | KarVenSen',
  description: 'Content Management Studio',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
