"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"
import { useSanityData } from "@/hooks/useSanityData"
import { urlFor } from "@/sanity/lib/image"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  // Fetch navbar settings from Sanity
  const { data: navbarData } = useSanityData<any>(
    `*[_type == "navbarSettings" && isActive == true][0]{
      logo{
        text,
        image{
          asset->{
            _id,
            url
          }
        }
      },
      menuItems[]{
        label,
        href
      }
    }`,
    {},
    null
  )

  // Hardcoded fallback menu items
  const fallbackMenuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Training', href: '/training' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' }
  ]

  const menuItems = navbarData?.menuItems || fallbackMenuItems

  // Get logo image URL from Sanity or use fallback
  const logoSrc = navbarData?.logo?.image?.asset
    ? urlFor(navbarData.logo.image).height(48).fit('max').url()
    : "/final logo (1).png"
  const logoText = navbarData?.logo?.text || "Karvensen"

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative h-12 w-auto flex items-center">
            <Image
              src={logoSrc}
              alt={`${logoText} Logo`}
              width={150}
              height={48}
              className="h-full w-auto object-contain max-h-12"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex bg-transparent">
          <NavigationMenuList className="bg-transparent [&>*]:bg-transparent">
            {menuItems.map((item: any) => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink asChild>
                  <Link
                    href={item.href}
                    className={`group inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:text-gray-900 focus:outline-none relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gray-900 hover:after:scale-x-100 after:transition-transform after:duration-300 !bg-transparent ${(item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href))
                      ? 'after:scale-x-100'
                      : 'after:scale-x-0'
                      }`}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          {/* Mobile Navigation */}
          {mounted && (
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-gray-900">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px] bg-white p-6">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Navigate to different sections of the website
                </SheetDescription>
                <nav className="flex flex-col gap-6 mt-12">
                  {menuItems.map((item: any) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors px-2 py-3"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  )
}
