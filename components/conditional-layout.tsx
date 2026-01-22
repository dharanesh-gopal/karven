"use client"

import { usePathname } from "next/navigation"
import { Navbar } from "./navbar"
import { Footer } from "./footer"
import NotificationButton from "./notification-button"

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isStudio = pathname?.startsWith("/studio")

  if (isStudio) {
    return <>{children}</>
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-gray-950">{children}</main>
      <Footer />
      <NotificationButton />
    </>
  )
}
