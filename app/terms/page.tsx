"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function TermsPage() {
  const router = useRouter()

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
          <h1 className="text-4xl md:text-5xl font-bold">Terms and Conditions</h1>
          <p className="text-gray-300 mt-4">Last updated: January 22, 2026</p>
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
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed text-base">
              Welcome to KarVenSen. These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              KarVenSen provides AI-driven software solutions and drone-based services including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>AI Software Development and Integration</li>
              <li>Drone Survey and Mapping Services</li>
              <li>Precision Agriculture Solutions</li>
              <li>Cloud Services and Data Management</li>
              <li>Educational and Training Programs</li>
              <li>Learning Management Systems</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              When using our services, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Use our services only for lawful purposes</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not interfere with or disrupt our services</li>
              <li>Not attempt unauthorized access to our systems</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed">
              All content, software, code, designs, graphics, logos, and other materials on our website are the property of KarVenSen and are protected by intellectual property laws. You may not copy, modify, distribute, or reproduce any content without our prior written consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Drone Operations</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              All drone operations conducted by KarVenSen are performed by DGCA-certified pilots and comply with:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Directorate General of Civil Aviation (DGCA) regulations</li>
              <li>Indian aviation laws and guidelines</li>
              <li>Local and state-specific drone operation rules</li>
              <li>Safety and privacy standards</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Payment Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              Payment terms will be specified in individual service agreements. Unless otherwise stated, payments are due within 30 days of invoice date. Late payments may incur additional charges as per the agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              KarVenSen shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid by you for the specific service in question.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Protection</h2>
            <p className="text-gray-600 leading-relaxed">
              We are committed to protecting your data. All data collected during our services is handled in accordance with our Privacy Policy and applicable data protection laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to terminate or suspend access to our services immediately, without prior notice, for any breach of these Terms and Conditions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Continued use of our services after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms and Conditions are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
            <p className="text-gray-600 leading-relaxed">
              For questions about these Terms and Conditions, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700"><strong>Email:</strong> legal@karvensen.com</p>
              <p className="text-gray-700"><strong>Phone:</strong> +91 80 1234 5678</p>
              <p className="text-gray-700"><strong>Address:</strong> Tech Innovation Park, Indiranagar, Bangalore, Karnataka 560038</p>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  )
}
