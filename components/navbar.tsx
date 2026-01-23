"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Menu, Cpu, Plane, BookOpen, Cloud, Server, GraduationCap } from "lucide-react"
import Image from "next/image"
import { useSanityData } from "@/hooks/useSanityData"
import { urlFor } from "@/sanity/lib/image"

// Fallback data
const fallbackServices = [
  {
    title: "AI Software Development",
    href: "/services#ai-software",
    description: "Custom AI and machine learning solutions",
    icon: "Cpu",
  },
  {
    title: "Drone Technology",
    href: "/services#drone-technology",
    description: "Agricultural drone systems for farmers",
    icon: "Plane",
  },
  {
    title: "LMS Solutions",
    href: "/services#lms",
    description: "Modern learning management systems",
    icon: "BookOpen"
  },
  {
    title: "ERP Systems",
    href: "/services#erp",
    description: "Enterprise resource planning solutions",
    icon: "Server"
  },
  {
    title: "Cloud Infrastructure",
    href: "/services#cloud",
    description: "Scalable cloud and DevOps solutions",
    icon: "Cloud"
  },
]

const fallbackTraining = [
  {
    title: "Farmer Programs",
    href: "/training#farmers",
    description: "Drone awareness for agriculture",
    icon: "Plane"
  },
  {
    title: "School Workshops",
    href: "/training#schools",
    description: "Technical education for students",
    icon: "GraduationCap",
  },
  {
    title: "Professional Training",
    href: "/training#professional",
    description: "Skill development programs",
    icon: "BookOpen",
  },
]

// Icon mapping
const iconMap: Record<string, any> = {
  Cpu,
  Plane,
  BookOpen,
  Cloud,
  Server,
  GraduationCap,
}

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
      serviceDropdown[] | order(order asc),
      trainingDropdown[] | order(order asc)
    }`,
    {},
    null
  )

  // Use Sanity data or fallback
  const services = navbarData?.serviceDropdown?.length > 0 
    ? navbarData.serviceDropdown.map((item: any) => ({
        ...item,
        icon: iconMap[item.icon] || Cpu
      }))
    : fallbackServices.map(item => ({ ...item, icon: iconMap[item.icon] }))

  const training = navbarData?.trainingDropdown?.length > 0
    ? navbarData.trainingDropdown.map((item: any) => ({
        ...item,
        icon: iconMap[item.icon] || BookOpen
      }))
    : fallbackTraining.map(item => ({ ...item, icon: iconMap[item.icon] }))

  // Get logo image URL from Sanity or use fallback
  const logoSrc = navbarData?.logo?.image?.asset
    ? urlFor(navbarData.logo.image).height(48).fit('max').url()
    : "/logo karven.png"
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
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/" className={`group inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:text-gray-900 focus:outline-none relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gray-900 hover:after:scale-x-100 after:transition-transform after:duration-300 !bg-transparent ${pathname === '/' ? 'after:scale-x-100' : 'after:scale-x-0'}`}>
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/about" className={`group inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:text-gray-900 focus:outline-none relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gray-900 hover:after:scale-x-100 after:transition-transform after:duration-300 !bg-transparent ${pathname === '/about' ? 'after:scale-x-100' : 'after:scale-x-0'}`}>
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/services" className={`group inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:text-gray-900 focus:outline-none relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gray-900 hover:after:scale-x-100 after:transition-transform after:duration-300 !bg-transparent ${pathname?.startsWith('/services') ? 'after:scale-x-100' : 'after:scale-x-0'}`}>
                  Services
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/training" className={`group inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:text-gray-900 focus:outline-none relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gray-900 hover:after:scale-x-100 after:transition-transform after:duration-300 !bg-transparent ${pathname?.startsWith('/training') ? 'after:scale-x-100' : 'after:scale-x-0'}`}>
                  Training
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/blog" className={`group inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:text-gray-900 focus:outline-none relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gray-900 hover:after:scale-x-100 after:transition-transform after:duration-300 !bg-transparent ${pathname?.startsWith('/blog') ? 'after:scale-x-100' : 'after:scale-x-0'}`}>
                  Blog
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/careers" className={`group inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:text-gray-900 focus:outline-none relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gray-900 hover:after:scale-x-100 after:transition-transform after:duration-300 !bg-transparent ${pathname?.startsWith('/careers') ? 'after:scale-x-100' : 'after:scale-x-0'}`}>
                  Careers
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/contact" className={`group inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:text-gray-900 focus:outline-none relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gray-900 hover:after:scale-x-100 after:transition-transform after:duration-300 !bg-transparent ${pathname === '/contact' ? 'after:scale-x-100' : 'after:scale-x-0'}`}>
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
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
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors px-2 py-1"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors px-2 py-1"
                >
                  About
                </Link>
                <Link
                  href="/services"
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors px-2 py-1"
                >
                  Services
                </Link>
                <Link
                  href="/training"
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors px-2 py-1"
                >
                  Training
                </Link>
                <Link
                  href="/blog"
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors px-2 py-1"
                >
                  Blog
                </Link>
                <Link
                  href="/careers"
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors px-2 py-1"
                >
                  Careers
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors px-2 py-1"
                >
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          )}
        </div>
      </div>
    </header>
  )
}
