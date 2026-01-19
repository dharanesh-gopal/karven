import { useState } from 'react'
import { MapPin, Mail, Phone, Clock, CheckCircle, Send } from 'lucide-react'

function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "demo", label: "Book a Demo" },
    { value: "partnership", label: "Partnership Opportunity" },
    { value: "training", label: "Training Programs" },
    { value: "careers", label: "Career Application" },
    { value: "support", label: "Technical Support" },
  ]

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: ["KarVenSen Technologies", "Hitech City, Hyderabad", "Telangana 500081, India"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["contact@karvensen.com", "sales@karvensen.com", "careers@karvensen.com"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 123 456 7890", "+91 987 654 3210"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 2:00 PM", "Sunday: Closed"],
    },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-indigo-500/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Let's Build Something <span className="text-indigo-500">Amazing Together</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Whether you're interested in our services, training programs, or partnership opportunities, we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="p-8 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
              <h3 className="text-2xl font-bold mb-2">Send Us a Message</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="mb-4 mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500/10">
                    <CheckCircle className="h-8 w-8 text-indigo-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Your message has been received. We'll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center justify-center h-10 px-6 rounded-lg bg-indigo-500 text-white font-medium"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium mb-1">First Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Last Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Company</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Inquiry Type</label>
                    <select className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500">
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full inline-flex items-center justify-center h-10 px-6 rounded-lg bg-indigo-500 text-white font-medium disabled:opacity-50"
                  >
                    {isLoading ? 'Sending...' : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <div className="grid gap-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                    <div className="flex items-start gap-4">
                      <info.icon className="h-6 w-6 text-indigo-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">{info.title}</h4>
                        <div className="space-y-1">
                          {info.details.map((detail) => (
                            <p key={detail} className="text-sm text-gray-600 dark:text-gray-400">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
