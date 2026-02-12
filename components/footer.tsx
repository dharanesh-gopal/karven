"use client"

import Link from "next/link"
import { Linkedin, Youtube, Facebook, Twitter, Instagram } from "lucide-react"
import { useSanityData } from "@/hooks/useSanityData"

interface FooterData {
  companyName: string
  tagline?: string
  phone?: string
  email?: string
  socialMedia?: {
    twitter?: string
    linkedin?: string
    youtube?: string
    facebook?: string
    instagram?: string
  }
  copyrightText?: string
  groupCompanies?: Array<{
    name: string
    url: string
  }>
  legalLinks?: {
    contactUsText?: string
    contactUsUrl?: string
    termsText?: string
    termsUrl?: string
    privacyText?: string
    privacyUrl?: string
  }
}

const fallbackFooterData: FooterData = {
  companyName: "KarVenSen",
  tagline: "AI-Driven Drone & Software Solutions",
  phone: "+91 123 456 7890",
  email: "info@karvensen.com",
  socialMedia: {
    twitter: "#",
    linkedin: "#",
    youtube: "#",
    facebook: "#",
    instagram: "#",
  },
  copyrightText: "KarVenSen. All rights reserved.",
  groupCompanies: [
    { name: "KarvenTech Solutions", url: "https://karventech.com" },
    { name: "VenSen Innovations", url: "https://vensentech.com" },
  ],
}

const footerLinks = {
  services: [
    { label: "AI Software Development", href: "/services/ai-software-development" },
    { label: "Drone Services", href: "/services" },
    { label: "Cloud Services", href: "/services/cloud-services" },
    { label: "Educational Programs", href: "/services/educational-programs" },
    { label: "Data & GIS Solutions", href: "/services/data-gis-digital-solutions" },
    { label: "Learning Management Systems", href: "/services/learning-management-systems" },
  ],
  training: [
    { label: "Training Programs", href: "/training" },
    { label: "View All Courses", href: "/training/courses" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
  ],
}

export function Footer() {
  const { data: footerData } = useSanityData<FooterData>(
    `*[_type == "footerSettings"][0]{
      companyName,
      tagline,
      phone,
      email,
      socialMedia,
      copyrightText,
      groupCompanies,
      legalLinks
    }`,
    {},
    fallbackFooterData
  )

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          {/* Left Column - Logo, Social, Contact */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">{footerData?.companyName || "KarVenSen"}</h2>
              <p className="text-gray-600 text-sm mt-2">{footerData?.tagline || "AI-Driven Drone & Software Solutions"}</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3 mb-6">
              <a href={footerData?.socialMedia?.twitter || "#"} className="text-gray-600 hover:text-[#1DA1F2] transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href={footerData?.socialMedia?.linkedin || "#"} className="text-gray-600 hover:text-[#0077b5] transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={footerData?.socialMedia?.youtube || "#"} className="text-gray-600 hover:text-[#CD201F] transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
              <a href={footerData?.socialMedia?.facebook || "#"} className="text-gray-600 hover:text-[#316FF6] transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={footerData?.socialMedia?.instagram || "#"} className="text-gray-600 hover:text-[#E1306C] transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-1">Phone</p>
                <a href={`tel:${footerData?.phone?.replace(/\s/g, '') || '+911234567890'}`} className="text-sm text-gray-600 hover:text-gray-900 block transition-colors">
                  {footerData?.phone || "+91 123 456 7890"}
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-1">Email</p>
                <a href={`mailto:${footerData?.email || 'info@karvensen.com'}`} className="text-sm text-gray-600 hover:text-gray-900 block transition-colors">
                  {footerData?.email || "info@karvensen.com"}
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 text-base">Services</h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Training */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 text-base">Training</h3>
            <ul className="space-y-2.5">
              {footerLinks.training.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 text-base">Resources</h3>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 text-base">Company</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
            {/* Copyright - spans 2 columns like logo */}
            <div className="lg:col-span-2">
              <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} {footerData?.copyrightText || "KarVenSen. All rights reserved."}
              </p>
            </div>

            {/* Group Companies and Legal Links - spanning 4 columns */}
            <div className="lg:col-span-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600">
              <span className="font-medium text-gray-900">Group Companies:</span>
              {footerData?.groupCompanies && footerData.groupCompanies.length > 0 ? (
                footerData.groupCompanies.map((company, index) => (
                  <Link key={index} href={company.url} className="hover:text-gray-900 transition-colors">
                    {company.name}
                  </Link>
                ))
              ) : (
                <>
                  <Link href="https://karventech.com" className="hover:text-gray-900 transition-colors">
                    KarvenTech Solutions
                  </Link>
                  <Link href="https://vensentech.com" className="hover:text-gray-900 transition-colors">
                    VenSen Innovations
                  </Link>
                </>
              )}
              <span className="text-gray-400">|</span>
              <Link href={footerData?.legalLinks?.contactUsUrl || "/contact"} className="hover:text-gray-900 transition-colors">
                {footerData?.legalLinks?.contactUsText || "Contact Us"}
              </Link>
              <Link href={footerData?.legalLinks?.termsUrl || "/terms"} className="hover:text-gray-900 transition-colors">
                {footerData?.legalLinks?.termsText || "Terms of Service"}
              </Link>
              <Link href={footerData?.legalLinks?.privacyUrl || "/privacy"} className="hover:text-gray-900 transition-colors">
                {footerData?.legalLinks?.privacyText || "Privacy Policy"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
