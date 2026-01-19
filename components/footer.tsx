import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone, Linkedin, Youtube, Facebook, Twitter, Instagram } from "lucide-react"

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "AI Solutions", href: "/services#ai" },
    { label: "Drone Technology", href: "/services#drone" },
    { label: "LMS & ERP", href: "/services#lms" },
    { label: "Cloud Services", href: "/services#cloud" },
  ],
  training: [
    { label: "Farmer Programs", href: "/training#farmers" },
    { label: "School Workshops", href: "/training#schools" },
    { label: "Skill Development", href: "/training#skills" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">K</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">Karvensen</span>
              </div>
            </Link>
            <p className="text-gray-600 max-w-sm mb-6 leading-relaxed">
              Founded in 2023, pioneering AI software development, agricultural drone technology, and enterprise solutions 
              across India. Make in India, powered by innovation.
            </p>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gray-900 flex-shrink-0" />
                <span>India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-900 flex-shrink-0" />
                <a href="mailto:contact@karvensen.com" className="hover:text-gray-900 transition-colors">
                  contact@karvensen.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gray-900 flex-shrink-0" />
                <a href="tel:+911234567890" className="hover:text-gray-900 transition-colors">
                  +91 123 456 7890
                </a>
              </div>
            </div>
            
            {/* Social Media Links - Simple colored icons */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="h-9 w-9 rounded-full bg-[#0077b5] flex items-center justify-center transition-colors hover:opacity-80" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4 text-white" />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-[#CD201F] flex items-center justify-center transition-colors hover:opacity-80" aria-label="YouTube">
                <Youtube className="h-4 w-4 text-white" />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-[#316FF6] flex items-center justify-center transition-colors hover:opacity-80" aria-label="Facebook">
                <Facebook className="h-4 w-4 text-white" />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-[#1DA1F2] flex items-center justify-center transition-colors hover:opacity-80" aria-label="Twitter">
                <Twitter className="h-4 w-4 text-white" />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FD1D1D] flex items-center justify-center transition-colors hover:opacity-80" aria-label="Instagram">
                <Instagram className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Training Links */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Training</h3>
            <ul className="space-y-3">
              {footerLinks.training.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} KarVenSen. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
