"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Mail, Phone, Clock, CheckCircle, Send } from "lucide-react"

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

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600">
              Whether you're interested in our services, training programs, or partnership opportunities, we'd love to
              hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="border border-gray-200 rounded-lg p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="mb-4 mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-700">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-6">
                    Your message has been received. We'll get back to you shortly.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} className="bg-gray-700 hover:bg-gray-800 text-white">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-gray-900">First Name</Label>
                      <Input id="firstName" placeholder="First Name" required className="!bg-white border-gray-900 text-gray-900 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-gray-900" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-gray-900">Last Name</Label>
                      <Input id="lastName" placeholder="Last Name" required className="!bg-white border-gray-900 text-gray-900 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-gray-900" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-900">Email</Label>
                    <Input id="email" type="email" placeholder="sample@gmail.com" required className="!bg-white border-gray-900 text-gray-900 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-gray-900" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-900">Phone (Optional)</Label>
                    <Input id="phone" type="tel" placeholder="+91 98765 43210" className="!bg-white border-gray-900 text-gray-900 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-gray-900" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inquiryType" className="text-gray-900">Inquiry Type</Label>
                    <Select defaultValue="general">
                      <SelectTrigger id="inquiryType" className="!bg-white border-gray-900 text-gray-900 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-gray-900">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        {inquiryTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-gray-900">Company (Optional)</Label>
                    <Input id="company" placeholder="Your Company Name" className="!bg-white border-gray-900 text-gray-900 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-gray-900" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-900">Message</Label>
                    <Textarea id="message" placeholder="Tell us about your project or inquiry..." rows={5} required className="!bg-white border-gray-900 text-gray-900 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-gray-900" />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-gray-900 text-white cursor-pointer border border-gray-900 rounded px-8 py-3 transition-all duration-200 hover:bg-green-400 hover:text-gray-900 hover:translate-x-[-0.25rem] hover:translate-y-[-0.25rem] hover:shadow-[0.25rem_0.25rem_0_0_rgb(17,24,39)] active:translate-x-0 active:translate-y-0 active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Contact Information</h2>
                <p className="text-gray-600">
                  Have questions about our AI solutions, drone services, or training programs? Our team is here to help
                  you find the right solution for your needs.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.title} className="group bg-white border border-gray-200 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:border-gray-400 hover:-translate-y-1 cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 transition-colors group-hover:bg-gray-700">
                        <info.icon className="h-6 w-6 text-gray-900 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                        {info.details.map((detail, index) => (
                          <p key={index} className="text-sm text-gray-600">
                            {detail}
                          </p>
                        ))}
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
