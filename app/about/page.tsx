"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Award, Users, Plane, Lightbulb, Shield, TrendingUp } from "lucide-react"
import Image from "next/image"

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Pioneering AI and drone solutions that solve real-world challenges for farmers, businesses, and educational institutions.",
  },
  {
    icon: Shield,
    title: "Quality & Reliability",
    description: "Enterprise-grade solutions with rigorous testing. Make in India quality with global standards.",
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "Committed to empowering farmers and educating youth about emerging technologies through hands-on programs.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Delivering exceptional results in every project - from AI software to drone deployments and training workshops.",
  },
]

const milestones = [
  { year: "2023", event: "Karvensen founded by Karthika Venkatesan with a vision for AI-driven innovation" },
  { year: "2023", event: "Launched agricultural drone technology program with Make in India initiative" },
  { year: "2023", event: "Began educational workshops in schools and colleges across India" },
  { year: "2024", event: "Expanded to LMS and ERP solutions for enterprise clients" },
  { year: "2024", event: "Deployed 500+ drones for agricultural monitoring" },
  { year: "2025", event: "Reached 100+ workshops conducted and 50+ enterprise clients" },
]

const impactStats = [
  { value: "150+", label: "Drones Deployed", icon: Plane },
  { value: "100+", label: "Workshops Conducted", icon: Users },
  { value: "25+", label: "Enterprise Clients", icon: Award },
  { value: "1000+", label: "People Trained", icon: Target },
]

export default function AboutPage() {
  const [playAnimation, setPlayAnimation] = useState(false)

  useEffect(() => {
    // Trigger animation on page load
    const timer = setTimeout(() => {
      setPlayAnimation(true)
      // Reset after animation completes
      setTimeout(() => setPlayAnimation(false), 1000)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 border-b border-gray-200 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium shadow-sm mb-6">
              <TrendingUp className="h-4 w-4 text-gray-700 flex-shrink-0" />
              <span className="text-gray-900 whitespace-nowrap">Innovating Since 2023</span>
            </div>
            {/* Mobile: Simple text */}
            <h1 className="md:hidden text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
              About Karvensen
            </h1>
            {/* Desktop: Animated text */}
            <h1 className="hidden md:block text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
              <span className={`relative inline-block text-transparent group ${playAnimation ? 'animate-active' : ''}`}>
                <span className="absolute top-0 left-0 text-gray-900 transition-transform duration-500 group-hover:-translate-y-[18px] group-[.animate-active]:-translate-y-[18px]" style={{clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)'}}>About</span>
                <span className="absolute top-0 left-0 text-gray-900 transition-transform duration-500 group-hover:translate-y-[18px] group-[.animate-active]:translate-y-[18px]" style={{clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)'}}>About</span>
                <span className="absolute top-1/2 left-0 -translate-y-1/2 scale-y-0 w-full bg-yellow-400 text-gray-900 text-sm sm:text-base font-medium tracking-[0.3em] text-center px-2 transition-transform duration-500 group-hover:scale-y-100 group-[.animate-active]:scale-y-100">Karvensen</span>
                <span className="invisible">About</span>
              </span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Founded by <strong>Karthika Venkatesan</strong> in 2023, Karvensen is pioneering the future of AI software development, 
              agricultural drone technology, and enterprise solutions. We're on a mission to make cutting-edge technology 
              accessible and impactful across India.
            </p>
            <div className="inline-flex items-center gap-6 flex-wrap justify-center text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                <span>Innovation First</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                <span>AI-First Approach</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                <span>Community Focused</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            <div className="border border-gray-200 rounded-lg p-8 bg-white hover:shadow-lg hover:border-gray-400 transition-all">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                <Target className="h-6 w-6 text-gray-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses, farmers, and educational institutions with AI-driven technology and drone solutions. 
                We're committed to building in India, creating local opportunities, and making advanced technology 
                accessible to those who need it most.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-8 bg-white hover:shadow-lg hover:border-gray-400 transition-all">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                <Eye className="h-6 w-6 text-gray-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be India's leading technology partner, recognized for transforming agriculture through drones, 
                revolutionizing education with awareness programs, and delivering enterprise-grade AI solutions that 
                drive real business value and societal impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at KarVenSen
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="text-center bg-white border border-gray-200 rounded-lg p-6">
                <div className="mb-4 mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
                  <value.icon className="h-7 w-7 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Key milestones in our growth story</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 md:-translate-x-px" />

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center gap-6 mb-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <div className="bg-white border border-gray-200 rounded-lg py-4 px-6">
                      <span className="text-gray-900 font-bold">{milestone.year}</span>
                      <p className="text-gray-600 mt-1">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gray-700 rounded-full -translate-x-1/2 ring-4 ring-white" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gray-700 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-white">Our Impact</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Making a difference through technology and education
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mb-4 mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2 text-white">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">Industries We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our AI and drone solutions are transforming multiple sectors
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Agriculture Card */}
            <div className="group relative flex flex-col justify-end h-[300px] rounded-[1.5em] p-6 overflow-hidden shadow-lg">
              {/* Background Image */}
              <div className="absolute top-0 left-0 h-full w-full">
                <img 
                  src="/dron in agri land.png" 
                  alt="Agriculture" 
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  Agriculture
                </h3>
                
                {/* Description - visible on mobile, expands on hover on desktop */}
                <p className="text-sm leading-relaxed md:h-0 md:group-hover:h-[6em] md:overflow-hidden md:transition-all md:duration-500">
                  Precision farming with drone monitoring, crop analytics, and AI-powered yield optimization.
                </p>
              </div>
            </div>

            {/* Education Card */}
            <div className="group relative flex flex-col justify-end h-[300px] rounded-[1.5em] p-6 overflow-hidden shadow-lg">
              <div className="absolute top-0 left-0 h-full w-full">
                <img 
                  src="/edu drone.png" 
                  alt="Education" 
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
              </div>
              <div className="relative z-10 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  Education
                </h3>
                <p className="text-sm leading-relaxed md:h-0 md:group-hover:h-[6em] md:overflow-hidden md:transition-all md:duration-500">
                  Modern LMS platforms, technical workshops, and skill development programs for students.
                </p>
              </div>
            </div>

            {/* Enterprise Card */}
            <div className="group relative flex flex-col justify-end h-[300px] rounded-[1.5em] p-6 overflow-hidden shadow-lg">
              <div className="absolute top-0 left-0 h-full w-full">
                <img 
                  src="/erp drone.png" 
                  alt="Enterprise" 
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
              </div>
              <div className="relative z-10 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  Enterprise
                </h3>
                <p className="text-sm leading-relaxed md:h-0 md:group-hover:h-[6em] md:overflow-hidden md:transition-all md:duration-500">
                  Custom ERP solutions, process automation, and AI-driven business intelligence tools.
                </p>
              </div>
            </div>

            {/* Infrastructure Card */}
            <div className="group relative flex flex-col justify-end h-[300px] rounded-[1.5em] p-6 overflow-hidden shadow-lg">
              <div className="absolute top-0 left-0 h-full w-full">
                <img 
                  src="/infrastructure drone.png" 
                  alt="Infrastructure" 
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
              </div>
              <div className="relative z-10 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  Infrastructure
                </h3>
                <p className="text-sm leading-relaxed md:h-0 md:group-hover:h-[6em] md:overflow-hidden md:transition-all md:duration-500">
                  Drone-based surveying, inspection services, and smart monitoring solutions.
                </p>
              </div>
            </div>

            {/* Healthcare Card */}
            <div className="group relative flex flex-col justify-end h-[300px] rounded-[1.5em] p-6 overflow-hidden shadow-lg">
              <div className="absolute top-0 left-0 h-full w-full">
                <img 
                  src="/health care drone.png" 
                  alt="Healthcare" 
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
              </div>
              <div className="relative z-10 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  Healthcare
                </h3>
                <p className="text-sm leading-relaxed md:h-0 md:group-hover:h-[6em] md:overflow-hidden md:transition-all md:duration-500">
                  AI diagnostic tools, telemedicine platforms, and healthcare management systems.
                </p>
              </div>
            </div>

            {/* Government Card */}
            <div className="group relative flex flex-col justify-end h-[300px] rounded-[1.5em] p-6 overflow-hidden shadow-lg">
              <div className="absolute top-0 left-0 h-full w-full">
                <img 
                  src="/gov karvensen.png" 
                  alt="Government" 
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
              </div>
              <div className="relative z-10 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  Government
                </h3>
                <p className="text-sm leading-relaxed md:h-0 md:group-hover:h-[6em] md:overflow-hidden md:transition-all md:duration-500">
                  Smart city solutions, public service automation, and citizen engagement platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
