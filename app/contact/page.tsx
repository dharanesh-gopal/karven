"use client"

import type React from "react"
import { useState, useEffect, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Mail, Phone, MapPin, Send, Loader2, ArrowLeft, Linkedin, Youtube, Facebook, Twitter, Instagram, Github } from "lucide-react"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { useSanityData } from "@/hooks/useSanityData"

// Dynamically import LeafletMap to avoid SSR issues
const LeafletMap = dynamic(() => import("@/components/LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center bg-gray-100 rounded-2xl">
      <Loader2 className="animate-spin h-8 w-8 text-gray-400" />
    </div>
  ),
})

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

// Location data
const locations = [
  {
    name: "Bangalore",
    role: "Global Headquarters",
    address: "Tech Innovation Park, Indiranagar,\nBangalore, Karnataka 560038",
    phone: "+91 80 1234 5678",
    email: "info@karvensen.com",
    lat: 12.9716,
    lng: 77.5946,
  },
  {
    name: "Hyderabad",
    role: "Research & Development",
    address: "Cyber Towers, Hitech City,\nHyderabad, Telangana 500081",
    phone: "+91 40 2345 6789",
    email: "research@karvensen.com",
    lat: 17.3850,
    lng: 78.4867,
  },
  {
    name: "Pune",
    role: "Training Excellence Center",
    address: "IT Park, Hinjewadi,\nPune, Maharashtra 411057",
    phone: "+91 20 3456 7890",
    email: "training@karvensen.com",
    lat: 18.5204,
    lng: 73.8567,
  },
  {
    name: "Mumbai",
    role: "Western Region Operations",
    address: "Business Bay, Lower Parel,\nMumbai, Maharashtra 400013",
    phone: "+91 22 4567 8901",
    email: "mumbai@karvensen.com",
    lat: 19.0760,
    lng: 72.8777,
  },
  {
    name: "Delhi",
    role: "North Region Sales",
    address: "Cyber City, DLF Phase 2,\nGurugram, Delhi NCR 122002",
    phone: "+91 11 5678 9012",
    email: "sales@karvensen.com",
    lat: 28.6139,
    lng: 77.2090,
  },
  {
    name: "Chennai",
    role: "Customer Success Team",
    address: "Tidel Park, Tharamani,\nChennai, Tamil Nadu 600113",
    phone: "+91 44 6789 0123",
    email: "support@karvensen.com",
    lat: 13.0827,
    lng: 80.2707,
  },
]

function ContactPageContent() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    country: "",
    city: "",
    enquiryType: "",
    message: "",
  })

  // Fetch contact data from CMS
  const { data: cmsHero } = useSanityData<any>(
    `*[_type == "contactHero" && isActive == true][0]{
      badge,
      title,
      description
    }`,
    {},
    null
  )

  const { data: cmsLocations } = useSanityData<any[]>(
    `*[_type == "officeLocation" && isActive == true] | order(order asc){
      name,
      role,
      address,
      phone,
      email,
      lat,
      lng
    }`,
    {},
    []
  )

  const { data: cmsSocial } = useSanityData<any>(
    `*[_type == "socialMediaSection" && isActive == true][0]{
      badge,
      title,
      description,
      socialLinks
    }`,
    {},
    null
  )

  // Fetch contact page settings (includes form configuration)
  const { data: pageSettings } = useSanityData<any>(
    `*[_type == "contactPageSettings" && isActive == true][0]{
      formTitle,
      formSubtitle,
      formFields,
      submitButton,
      successMessage,
      errorMessage
    }`,
    {},
    null
  )

  // Use CMS data with fallback
  const heroData = cmsHero || {
    badge: "Fly High. Aim Higher!",
    title: "Get in Touch with Us",
    description: "We're here to answer your queries, offer personalized assistance, and guide you through every step of your technology journey. Reach out to Karvensen and let's build the future together."
  }

  const locationData = (cmsLocations && cmsLocations.length > 0) ? cmsLocations : locations

  const socialData = cmsSocial || {
    badge: "20K+ Followers",
    title: "Stay Connected, Stay Informed!",
    description: "Join our growing Karvensen community for updates, insights, and innovations."
  }

  // Form configuration with fallbacks
  const formConfig = pageSettings || {
    formTitle: "Take the First Step Towards Excellence!",
    formSubtitle: "Send us a message and our team will respond within 24 hours.",
    successMessage: "Thank you for reaching out. We have sent a confirmation to your email.",
    submitButton: { text: "Send Message", loadingText: "Sending..." }
  }

  const formFields = pageSettings?.formFields || {
    fullName: { label: 'Full Name', placeholder: 'Your Full Name', required: true },
    phone: { label: 'Phone Number', placeholder: '+91 98765 43210', required: true },
    email: { label: 'Email', placeholder: 'your.email@company.com', required: true },
    enquiryType: { 
      label: 'Enquiry About', 
      placeholder: 'Select enquiry type', 
      required: true,
      options: [
        { label: 'Services', value: 'services' },
        { label: 'Training Programs', value: 'training' },
        { label: 'Custom Training', value: 'custom-training' },
        { label: 'Drone Services', value: 'drone-services' },
        { label: 'Software Development', value: 'software-development' },
        { label: 'Careers', value: 'careers' },
        { label: 'Partnership', value: 'partnership' },
        { label: 'General Inquiry', value: 'general' },
      ]
    },
    country: { 
      label: 'Country', 
      placeholder: 'Select Country', 
      required: true,
      options: ['India', 'USA', 'UK', 'Canada', 'Australia', 'Germany', 'Other']
    },
    city: { label: 'City', placeholder: 'Your City', required: true },
    message: { label: 'Message', placeholder: 'Tell us about your inquiry...', required: true, rows: 4 },
  }

  // Auto-select enquiry type from URL parameter
  useEffect(() => {
    const enquiry = searchParams.get('enquiry')
    if (enquiry) {
      setFormData(prev => ({ ...prev, enquiryType: enquiry }))
    }
  }, [searchParams])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSubmitted(true)
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      country: "",
      city: "",
      enquiryType: "",
      message: "",
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
        className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white pt-8 pb-16 overflow-hidden"
      >
        {/* Back Button */}
        <div className="container mx-auto px-4 relative z-10 mb-8">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 font-medium text-sm hover:translate-x-1"
            aria-label="Go back"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back</span>
          </button>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-700 border border-gray-600 mb-8">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span className="text-sm font-medium">Fly High. Aim Higher!</span>
              </div>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Get in Touch with Us
            </motion.h1>

            <motion.div variants={fadeInUp} className="flex justify-center mb-8">
              <div className="h-1 w-24 bg-red-500 rounded-full"></div>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
            >
              We're here to answer your queries, offer personalized assistance, and guide you through every step of your
              technology journey. Reach out to Karvensen and let's build the future together.
            </motion.p>
          </div>
        </div>
        <div className="h-12"></div>
      </motion.section>

      {/* Location Cards Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locationData.map((location: any, index: number) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  onClick={() => {
                    // Open location in Google Maps
                    const encodedAddress = encodeURIComponent(location.address.replace(/\n/g, ", "))
                    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, "_blank")
                  }}
                  className="rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border cursor-pointer bg-gray-50 border-gray-100 hover:bg-white hover:-translate-y-1 group"
                >
                  <div className="mb-5">
                    <h3 className="text-lg font-bold text-gray-900 transition-colors">
                      {location.name}
                    </h3>
                    <p className="text-sm text-red-500 font-semibold mt-1">{location.role}</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <MapPin className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{location.address}</p>
                    </div>
                    <div className="flex gap-3 text-gray-700 transition-colors">
                      <Phone className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm">{location.phone}</p>
                    </div>
                    <div className="flex gap-3 text-gray-700 transition-colors">
                      <Mail className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm">{location.email}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <motion.section
        id="contact-map"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={fadeInUp}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-gray-900">{formConfig.formTitle}</h2>
            <p className="text-gray-600 text-lg mt-3">
              {formConfig.formSubtitle}
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-md p-8 flex flex-col justify-between">
                <div>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                        <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                      <p className="text-gray-600 mb-6">
                        {formConfig.successMessage}
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-red-500 font-semibold hover:underline"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          {formFields.fullName.label} {formFields.fullName.required && <span className="text-red-500">*</span>}
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder={formFields.fullName.placeholder}
                          required={formFields.fullName.required}
                          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          {formFields.phone.label} {formFields.phone.required && <span className="text-red-500">*</span>}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder={formFields.phone.placeholder}
                          required={formFields.phone.required}
                          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          {formFields.email.label} {formFields.email.required && <span className="text-red-500">*</span>}
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder={formFields.email.placeholder}
                          required={formFields.email.required}
                          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          {formFields.enquiryType.label} {formFields.enquiryType.required && <span className="text-red-500">*</span>}
                        </label>
                        <select
                          name="enquiryType"
                          value={formData.enquiryType}
                          onChange={handleInputChange}
                          required={formFields.enquiryType.required}
                          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                        >
                          <option value="">{formFields.enquiryType.placeholder}</option>
                          {formFields.enquiryType.options?.map((option: any) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">
                            {formFields.country.label} {formFields.country.required && <span className="text-red-500">*</span>}
                          </label>
                          <select
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            required={formFields.country.required}
                            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                          >
                            <option value="">{formFields.country.placeholder}</option>
                            {formFields.country.options?.map((country: string) => (
                              <option key={country} value={country}>
                                {country}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">
                            {formFields.city.label} {formFields.city.required && <span className="text-red-500">*</span>}
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder={formFields.city.placeholder}
                            required={formFields.city.required}
                            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          {formFields.message.label} {formFields.message.required && <span className="text-red-500">*</span>}
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder={formFields.message.placeholder}
                          rows={formFields.message.rows || 4}
                          required={formFields.message.required}
                          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all resize-none"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-gray-900 text-white rounded-lg px-6 py-3 font-semibold transition-all duration-200 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="animate-spin h-5 w-5" />
                            {formConfig.submitButton?.loadingText || 'Sending...'}
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5" />
                            {formConfig.submitButton?.text || 'Send Message'}
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Map Section */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[400px] border border-gray-200 relative">
                <LeafletMap locations={locations} />
Data
                {/* Map Overlay Instruction */}
                <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm text-gray-700 pointer-events-none">
                  Interact to explore locations
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Social Media Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
        className="py-20 bg-gray-900 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 border border-gray-700 mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">{socialData.badge}</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">{socialData.title}</h2>

            <p className="text-lg text-gray-400 mb-12">
              {socialData.description}
            </p>

            <div className="flex justify-center gap-6 flex-wrap">
              {socialData.socialLinks && socialData.socialLinks.length > 0 ? (
                socialData.socialLinks.map((link: any) => {
                  const getSocialIcon = (platform: string) => {
                    switch (platform.toLowerCase()) {
                      case 'linkedin':
                        return <Linkedin className="h-6 w-6" />
                      case 'twitter':
                        return <Twitter className="h-6 w-6" />
                      case 'facebook':
                        return <Facebook className="h-6 w-6" />
                      case 'instagram':
                        return <Instagram className="h-6 w-6" />
                      case 'youtube':
                        return <Youtube className="h-6 w-6" />
                      case 'github':
                        return <Github className="h-6 w-6" />
                      default:
                        return <Mail className="h-6 w-6" />
                    }
                  }

                  const getSocialColor = (platform: string) => {
                    switch (platform.toLowerCase()) {
                      case 'linkedin':
                        return 'hover:bg-[#0077b5] hover:border-[#0077b5]'
                      case 'twitter':
                        return 'hover:bg-[#1DA1F2] hover:border-[#1DA1F2]'
                      case 'facebook':
                        return 'hover:bg-[#316FF6] hover:border-[#316FF6]'
                      case 'instagram':
                        return 'hover:bg-[#E1306C] hover:border-[#E1306C]'
                      case 'youtube':
                        return 'hover:bg-[#CD201F] hover:border-[#CD201F]'
                      case 'github':
                        return 'hover:bg-[#333] hover:border-[#333]'
                      default:
                        return 'hover:bg-red-600 hover:border-red-600'
                    }
                  }

                  return (
                    <a
                      key={link._key || link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-14 h-14 rounded-full border-2 border-gray-700 bg-gray-800 text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${getSocialColor(link.platform)}`}
                      aria-label={link.platform}
                    >
                      {getSocialIcon(link.platform)}
                    </a>
                  )
                })
              ) : (
                <>
                  <a
                    href="https://www.linkedin.com/company/karvensen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-gray-700 bg-gray-800 text-white transition-all duration-300 transform hover:scale-110 hover:bg-[#0077b5] hover:border-[#0077b5] hover:shadow-lg"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href="https://twitter.com/karvensen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-gray-700 bg-gray-800 text-white transition-all duration-300 transform hover:scale-110 hover:bg-[#1DA1F2] hover:border-[#1DA1F2] hover:shadow-lg"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.facebook.com/karvensen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-gray-700 bg-gray-800 text-white transition-all duration-300 transform hover:scale-110 hover:bg-[#316FF6] hover:border-[#316FF6] hover:shadow-lg"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/karvensen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-gray-700 bg-gray-800 text-white transition-all duration-300 transform hover:scale-110 hover:bg-[#E1306C] hover:border-[#E1306C] hover:shadow-lg"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.youtube.com/@karvensen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-gray-700 bg-gray-800 text-white transition-all duration-300 transform hover:scale-110 hover:bg-[#CD201F] hover:border-[#CD201F] hover:shadow-lg"
                    aria-label="YouTube"
                  >
                    <Youtube className="h-6 w-6" />
                  </a>
                  <a
                    href="https://github.com/karvensen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-gray-700 bg-gray-800 text-white transition-all duration-300 transform hover:scale-110 hover:bg-[#333] hover:border-[#333] hover:shadow-lg"
                    aria-label="GitHub"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Loader2 className="animate-spin h-8 w-8 text-gray-400" />
      </div>
    }>
      <ContactPageContent />
    </Suspense>
  )
}
