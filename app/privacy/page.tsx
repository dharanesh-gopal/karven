"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { useSanityData } from "@/hooks/useSanityData"
import { PortableText } from '@portabletext/react'

export default function PrivacyPage() {
  const router = useRouter()

  // Fetch privacy policy from Sanity
  const { data: privacyData } = useSanityData<any>(
    `*[_type == "legalPage" && pageType == "privacy" && isActive == true][0]{
      hero,
      introduction,
      lastUpdated,
      sections[]{
        _key,
        title,
        content,
        subsections[]{
          _key,
          title,
          content
        },
        order
      },
      contactInfo
    }`,
    {},
    null
  )

  const formatDate = (dateString: string) => {
    if (!dateString) return 'January 22, 2026'
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-8 pb-16"
      >
        <div className="container mx-auto px-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Back
          </button>
          <h1 className="text-4xl md:text-5xl font-bold">{privacyData?.hero?.title || 'Privacy Policy'}</h1>
          <p className="text-gray-300 mt-4">Last updated: {formatDate(privacyData?.lastUpdated)}</p>
        </div>
      </motion.section>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="container mx-auto px-4 py-12 max-w-4xl"
      >
        <div className="space-y-8">
          {/* Introduction */}
          {privacyData?.introduction && (
            <section className="mb-8">
              <p className="text-gray-700 leading-relaxed text-base">
                {privacyData.introduction}
              </p>
            </section>
          )}

          {/* Sections from Sanity or fallback to default */}
          {privacyData?.sections ? (
            privacyData.sections
              .sort((a: any, b: any) => (a.order || 0) - (b.order || 0))
              .map((section: any, index: number) => (
                <section key={section._key || index} className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {index + 1}. {section.title}
                  </h2>
                  
                  {section.content && section.content.length > 0 && (
                    <div className="text-gray-700 leading-relaxed mb-4 prose">
                      <PortableText value={section.content} />
                    </div>
                  )}
                  
                  {section.subsections && section.subsections.map((sub: any, subIndex: number) => (
                    <div key={sub._key || subIndex} className="mt-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {index + 1}.{subIndex + 1} {sub.title}
                      </h3>
                      {sub.content && (
                        <div className="text-gray-600 leading-relaxed prose">
                          <PortableText value={sub.content} />
                        </div>
                      )}
                    </div>
                  ))}
                </section>
              ))
          ) : (
            /* Fallback content if Sanity data not available */
            <>
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed text-base">
                  KarVenSen ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services and website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                <p className="text-gray-600 leading-relaxed">
                  We collect information you provide directly, technical information automatically, and data collected during drone operations.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Security</h2>
                <p className="text-gray-600 leading-relaxed">
                  We implement industry-standard security measures to protect your information, including encryption, secure servers, and access controls.
                </p>
              </section>
            </>
          )}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{privacyData?.contactInfo?.title || 'Contact Us'}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {privacyData?.contactInfo?.subtitle || 'If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:'}
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700"><strong>Data Protection Officer</strong></p>
              <p className="text-gray-700"><strong>Email:</strong> {privacyData?.contactInfo?.email || 'privacy@karvensen.com'}</p>
              <p className="text-gray-700"><strong>Phone:</strong> {privacyData?.contactInfo?.phone || '+91 80 1234 5678'}</p>
              <p className="text-gray-700"><strong>Address:</strong> {privacyData?.contactInfo?.address || 'Tech Innovation Park, Indiranagar, Bangalore, Karnataka 560038'}</p>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  )
}
