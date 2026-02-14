"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { useSanityData } from "@/hooks/useSanityData"
import { PortableText } from '@portabletext/react'

export default function TermsPage() {
  const router = useRouter()

  // Fetch terms of service from Sanity
  const { data: termsData } = useSanityData<any>(
    `*[_type == "legalPage" && pageType == "terms" && isActive == true][0]{
      hero,
      introduction,
      lastUpdated,
      sections[]{
        _key,
        title,
        content,
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
          <h1 className="text-4xl md:text-5xl font-bold">{termsData?.hero?.title || 'Terms and Conditions'}</h1>
          <p className="text-gray-300 mt-4">Last updated: {formatDate(termsData?.lastUpdated)}</p>
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
          {termsData?.introduction && (
            <section className="mb-8">
              <p className="text-gray-700 leading-relaxed text-base">
                {termsData.introduction}
              </p>
            </section>
          )}

          {/* Sections from Sanity or fallback */}
          {termsData?.sections ? (
            termsData.sections
              .sort((a: any, b: any) => (a.order || 0) - (b.order || 0))
              .map((section: any, index: number) => (
                <section key={section._key || index} className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {index + 1}. {section.title}
                  </h2>
                  {section.content && section.content.length > 0 && (
                    <div className="text-gray-600 leading-relaxed prose">
                      <PortableText value={section.content} />
                    </div>
                  )}
                </section>
              ))
          ) : (
            <section className="mb-8">
              <p className="text-gray-700 leading-relaxed text-base">
                Welcome to KarVenSen. These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.
              </p>
            </section>
          )}

          {/* Contact Section - Always Shown */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{termsData?.contactInfo?.title || 'Contact Information'}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {termsData?.contactInfo?.subtitle || 'For questions about these Terms and Conditions, please contact us at:'}
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700"><strong>Email:</strong> {termsData?.contactInfo?.email || 'legal@karvensen.com'}</p>
              <p className="text-gray-700"><strong>Phone:</strong> {termsData?.contactInfo?.phone || '+91 80 1234 5678'}</p>
              <p className="text-gray-700"><strong>Address:</strong> {termsData?.contactInfo?.address || 'Tech Innovation Park, Indiranagar, Bangalore, Karnataka 560038'}</p>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  )
}
