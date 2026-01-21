"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Mail, Phone, MapPin } from "lucide-react"

interface LocationCard {
  name: string
  role: string
  address: string
  phone: string
  email: string
  lat: number
  lng: number
}

const locations: LocationCard[] = [
  {
    name: "Bangalore",
    role: "Headquarters",
    address: "Innovation Park, Sector 1\nBangalore, Karnataka 560102, India",
    phone: "+91-080-1234-5678",
    email: "info@karvensen.com",
    lat: 12.9716,
    lng: 77.5946,
  },
  {
    name: "Hyderabad",
    role: "R&D Center",
    address: "Tech Hub, Hitech City\nHyderabad, Telangana 500081, India",
    phone: "+91-040-5678-9012",
    email: "info@karvensen.com",
    lat: 17.3850,
    lng: 78.4867,
  },
  {
    name: "Pune",
    role: "Training Hub",
    address: "Education Complex, Zone A\nPune, Maharashtra 411001, India",
    phone: "+91-020-2345-6789",
    email: "training@karvensen.com",
    lat: 18.5204,
    lng: 73.8567,
  },
  {
    name: "Mumbai",
    role: "Regional Office",
    address: "Business Tower, District 2\nMumbai, Maharashtra 400001, India",
    phone: "+91-022-4567-8901",
    email: "info@karvensen.com",
    lat: 19.0760,
    lng: 72.8777,
  },
  {
    name: "Delhi",
    role: "Sales Hub",
    address: "Commerce Center, Market Area\nDelhi, Delhi 110001, India",
    phone: "+91-011-7890-1234",
    email: "sales@karvensen.com",
    lat: 28.7041,
    lng: 77.1025,
  },
  {
    name: "Chennai",
    role: "Support Center",
    address: "Service Hub, Tech Park\nChennai, Tamil Nadu 600001, India",
    phone: "+91-044-3456-7890",
    email: "support@karvensen.com",
    lat: 13.0827,
    lng: 80.2707,
  },
]

export default function ContactPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    country: "",
    city: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState<LocationCard | null>(locations[0])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ fullName: "", phone: "", email: "", country: "", city: "", message: "" })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-white">

      <section className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-16 overflow-hidden">
        {/* Back Button */}
        <div className="container mx-auto px-4 relative z-10 mb-6">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300 text-white font-semibold text-sm"
            aria-label="Go back"
            title="Go back to previous page"
          >
            <span className="text-lg">&lt;</span>
            <span>Back</span>
          </button>
        </div>

        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 100%, 0 20%, 100% 0, 100% 100%)" }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-700 border border-gray-600 mb-8">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              <span className="text-sm font-medium">Fly High. Aim Higher!</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Get in Touch with Us
            </h1>

            {/* Red Underline Accent */}
            <div className="flex justify-center mb-8">
              <div className="h-1 w-24 bg-red-500 rounded-full"></div>
            </div>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              We're here to answer your queries, offer personalized assistance, and guide you through every step of your technology journey. Reach out to Karvensen and let's build the future together.
            </p>
          </div>
        </div>

        {/* Extra padding for curved bottom */}
        <div className="h-12"></div>
      </section>

      {/* Location Cards Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Location Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((location, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedLocation(location)}
                  className={`rounded-lg shadow-md transition-all duration-300 p-6 border cursor-pointer ${
                    selectedLocation?.name === location.name
                      ? "bg-red-50 border-red-300 shadow-lg scale-105"
                      : "bg-gray-50 border-gray-100 hover:shadow-lg"
                  }`}
                >
                  <div className="mb-5">
                    <h3 className="text-lg font-bold text-gray-900">{location.name}</h3>
                    <p className="text-sm text-red-500 font-semibold mt-1">{location.role}</p>
                  </div>

                  <div className="space-y-3">
                    {/* Address */}
                    <div className="flex gap-3">
                      <MapPin className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{location.address}</p>
                    </div>

                    {/* Phone */}
                    <div className="flex gap-3">
                      <Phone className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">{location.phone}</p>
                    </div>

                    {/* Email */}
                    <div className="flex gap-3">
                      <Mail className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">{location.email}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Take the First Step Towards Excellence!</h2>
            <p className="text-gray-600 text-lg mt-3">Send us a message and our team will respond within 24 hours.</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-md p-8 flex flex-col justify-between">
                <div>
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                        <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                      <p className="text-gray-600 mb-6">Thank you for reaching out. We'll get back to you shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Your Full Name"
                          required
                          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 98765 43210"
                          required
                          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@company.com"
                          required
                          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">
                            Country <span className="text-red-500">*</span>
                          </label>
                          <select
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                          >
                            <option value="">Select Country</option>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                            <option value="Canada">Canada</option>
                            <option value="Australia">Australia</option>
                            <option value="Germany">Germany</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">
                            City <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="Your City"
                            required
                            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your inquiry..."
                          rows={4}
                          required
                          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all resize-none"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-gray-900 text-white rounded-lg px-6 py-3 font-semibold transition-all duration-200 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isLoading ? "Sending..." : "Send Message"}
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Interactive Map with Location Markers */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-96 relative bg-gray-100 flex items-center justify-center">
                <div className="w-full h-full">
                  {/* Map Title and Note */}
                  <div className="absolute top-0 left-0 right-0 bg-white border-b border-gray-200 p-4 z-10">
                    <h3 className="font-semibold text-gray-900">Karvensen Locations</h3>
                    <p className="text-xs text-gray-600 mt-1">Click on a location card to highlight it on the map</p>
                  </div>

                  {/* Google Map Embed - Centered on selected location */}
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d${selectedLocation ? "50000" : "6307842.393878756"}!2d${selectedLocation?.lng || 77.64}!3d${selectedLocation?.lat || 20.593684}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s!2s${selectedLocation?.name}!5e0!3m2!1sen!2sin!4v1700000000000&markers=${locations.map((loc) => `${loc.lat},${loc.lng}(${loc.name})`).join("|")}`}
                    width="100%"
                    height="100%"
                    style={{ border: 0, display: "block", minHeight: "400px", marginTop: "60px" } as React.CSSProperties}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Karvensen Locations Across India"
                  />

                  {/* Location Info Overlay */}
                  {selectedLocation && (
                    <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs z-20">
                      <div className="flex gap-1 mb-2">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-red-100">
                          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                          <span className="text-xs font-semibold text-red-700">{selectedLocation.role}</span>
                        </span>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">{selectedLocation.name}</h4>
                      <div className="space-y-1 text-xs text-gray-600">
                        <div className="flex gap-2">
                          <MapPin className="h-3 w-3 text-red-500 flex-shrink-0 mt-0.5" />
                          <p>{selectedLocation.address.split("\n")[0]}</p>
                        </div>
                        <div className="flex gap-2">
                          <Phone className="h-3 w-3 text-red-500 flex-shrink-0 mt-0.5" />
                          <p>{selectedLocation.phone}</p>
                        </div>
                        <div className="flex gap-2">
                          <Mail className="h-3 w-3 text-red-500 flex-shrink-0 mt-0.5" />
                          <p>{selectedLocation.email}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 border border-gray-700 mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              <span className="text-sm font-medium">20K+ Followers</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Stay Connected, Stay Informed!</h2>

            {/* Subtext */}
            <p className="text-lg text-gray-400 mb-12">
              Join our growing Karvensen community for updates, insights, and innovations.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center gap-6 flex-wrap">
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Simplified */}
      <footer className="bg-gray-50 text-gray-600 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
          </div>
        </div>
      </footer>
    </div>
  )
}
