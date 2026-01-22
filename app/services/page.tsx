'use client'

import type { Metadata } from "next"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Cpu,
  Plane,
  BookOpen,
  Server,
  Cloud,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  Camera,
  Video,
  Sprout,
  Package,
  Microchip,
  Box,
  BarChart3,
  Radio
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { DroneIcon } from "@/components/icons/drone-icon"
import { useSanityData } from "@/hooks/useSanityData"

interface ServiceItemData {
  title: string
  slug: { current: string }
  category: string
  icon: string
  tagline?: string
  description: string
  features?: string[]
  applications?: string[]
}

// Helper function to get icon component from icon name
const getServiceIcon = (iconName: string) => {
  const icons: Record<string, any> = {
    Camera,
    Video,
    Sprout,
    Package,
    Microchip,
    Box,
    BarChart3,
    Radio,
    Cpu,
    Cloud,
    BookOpen,
    GraduationCap,
    Plane,
    Server,
  }
  return icons[iconName] || Camera
}

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  // Fetch services from Sanity CMS
  const { data: droneServicesData } = useSanityData<ServiceItemData[]>(
    `*[_type == "serviceItem" && category == "drone" && isActive == true] | order(order asc){
      title,
      slug,
      category,
      icon,
      description
    }`,
    {},
    []
  )

  const { data: softwareServicesData } = useSanityData<ServiceItemData[]>(
    `*[_type == "serviceItem" && category == "software" && isActive == true] | order(order asc){
      title,
      slug,
      category,
      icon,
      tagline,
      description,
      features,
      applications
    }`,
    {},
    []
  )

  const { data: educationServicesData } = useSanityData<ServiceItemData[]>(
    `*[_type == "serviceItem" && category == "education" && isActive == true] | order(order asc){
      title,
      slug,
      category,
      icon,
      tagline,
      description,
      features,
      applications
    }`,
    {},
    []
  )

  // Fallback data with exact current values
  const droneServices = (droneServicesData && droneServicesData.length > 0) ? droneServicesData : [
    {
      slug: { current: "survey-mapping" },
      icon: "Camera",
      title: "Drone Survey and Mapping",
      description: "High-precision aerial surveys and 3D mapping solutions for construction, mining, and land management.",
      category: "drone"
    },
    {
      slug: { current: "surveillance" },
      icon: "Video",
      title: "Drone Surveillance and Videography",
      description: "Professional aerial surveillance and cinematography services for security, events, and media production.",
      category: "drone"
    },
    {
      slug: { current: "precision-spraying" },
      icon: "Sprout",
      title: "Precision Spraying",
      description: "Advanced agricultural drone spraying systems for efficient crop protection and fertilization.",
      category: "drone"
    },
    {
      slug: { current: "delivery" },
      icon: "Package",
      title: "Drone Delivery",
      description: "Innovative drone delivery solutions for last-mile logistics and emergency medical supplies.",
      category: "drone"
    },
    {
      slug: { current: "hardware-software" },
      icon: "Microchip",
      title: "Hardware, Software & Firmware",
      description: "Custom drone hardware design, software development, and firmware optimization services.",
      category: "drone"
    },
    {
      slug: { current: "drone-in-box" },
      icon: "Box",
      title: "Drone-In-A-Box & Tethered Systems",
      description: "Automated drone deployment systems and tethered solutions for continuous monitoring.",
      category: "drone"
    },
    {
      slug: { current: "data-gis" },
      icon: "BarChart3",
      title: "Data, GIS & Digital Solutions",
      description: "Comprehensive data processing, GIS analysis, and digital twin solutions from drone imagery.",
      category: "drone"
    },
  ]

  const aiSoftwareServices = (softwareServicesData && softwareServicesData.length > 0) ? softwareServicesData : [
    {
      slug: { current: "ai-software" },
      icon: "Cpu",
      title: "AI Software Development",
      tagline: "Intelligent Solutions for Modern Challenges",
      description:
        "Custom AI and machine learning solutions tailored to your business needs. From predictive analytics to natural language processing, we build AI systems that drive real business value.",
      features: [
        "Custom Machine Learning Models",
        "Computer Vision & Image Processing",
        "Natural Language Processing (NLP)",
        "Predictive Analytics & Forecasting",
        "AI Integration & Deployment",
        "Model Training & Optimization",
      ],
      applications: ["Manufacturing Quality Control", "Customer Behavior Analysis", "Process Automation", "Risk Assessment"],
      category: "software"
    },
    {
      slug: { current: "cloud-services" },
      icon: "Cloud",
      title: "Cloud Services",
      tagline: "Scalable Infrastructure for Modern Business",
      description:
        "Comprehensive cloud computing solutions for businesses of all sizes. From cloud migration to infrastructure management, we provide secure, scalable, and cost-effective cloud services.",
      features: [
        "Cloud Migration & Strategy",
        "Infrastructure as a Service (IaaS)",
        "Platform as a Service (PaaS)",
        "Cloud Security & Compliance",
        "Disaster Recovery Solutions",
        "24/7 Monitoring & Support",
      ],
      applications: ["Enterprise Applications", "Data Storage & Backup", "Web Hosting", "DevOps & CI/CD"],
      category: "software"
    },
    {
      slug: { current: "lms" },
      icon: "BookOpen",
      title: "Learning Management Systems",
      tagline: "Modern Education Platforms",
      description:
        "Comprehensive LMS solutions for educational institutions and corporate training. Engage learners with interactive content, assessments, and progress tracking.",
      features: [
        "Course Management & Delivery",
        "Interactive Assessments",
        "Progress Tracking & Analytics",
        "Mobile-Responsive Design",
        "Integration with Existing Systems",
        "Certification Management",
      ],
      applications: ["Corporate Training", "Academic Courses", "Skill Development", "Compliance Training"],
      category: "software"
    },
  ]

  const educationalServices = (educationServicesData && educationServicesData.length > 0) ? educationServicesData : [
    {
      slug: { current: "training" },
      icon: "GraduationCap",
      title: "Educational Programs",
      tagline: "Awareness & Skill Development",
      description:
        "Hands-on workshops and awareness programs about drone technology, AI, and emerging technologies for schools, colleges, and professionals.",
      features: [
        "Drone Awareness Workshops",
        "Practical Drone Operation Training",
        "AI & Technology Seminars",
        "Career Guidance Programs",
        "Hands-on Project Sessions",
        "Certification Courses",
      ],
      applications: ["School Workshops", "College Programs", "Farmer Training", "Professional Development"],
      category: "education"
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Our Services Header */}
      <section className="relative py-20 bg-gradient-to-br from-teal-800 to-teal-900 text-white overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-teal-600/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-teal-500/30 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-teal-100 leading-relaxed animate-fade-up animation-delay-200">
              Diversified expertise across critical industries.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Section with Image and Services List */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              {/* Premium Decorative Elements Above Image */}
              <div className="absolute -top-50 left-0 right-0 flex items-center justify-center gap-6 z-10">
                {/* Floating Badge 1 */}
                <div className="relative animate-float">
                  <div className="absolute inset-0 bg-red-600/30 blur-2xl rounded-full" />
                  <div className="relative bg-white rounded-2xl shadow-2xl p-4 border-2 border-red-100 hover:border-red-300 transition-all duration-300 hover:scale-110">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center">
                        <DroneIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 font-medium">Premium</div>
                        <div className="text-sm font-bold text-gray-900">Drone Tech</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge 2 */}
                <div className="relative animate-float-delayed">
                  <div className="absolute inset-0 bg-blue-600/30 blur-2xl rounded-full" />
                  <div className="relative bg-white rounded-2xl shadow-2xl p-4 border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:scale-110">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 font-medium">Certified</div>
                        <div className="text-sm font-bold text-gray-900">Excellence</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="block relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
              >
                <Image
                  src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop"
                  alt="Drone operator at sunset"
                  width={800}
                  height={600}
                  className="w-full h-[500px] object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500" />
                
                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/20 transition-all duration-500" />
                
                <div className="absolute bottom-8 left-8 right-8 transform transition-all duration-500 group-hover:translate-y-[-10px]">
                  <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-3xl transition-all duration-500">
                    Premier Consultancy for Drone Projects
                  </h3>
                  <div className="inline-flex items-center gap-2 text-white group-hover:text-red-300 transition-colors">
                    <span className="font-semibold">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                  </div>
                </div>
                
                {/* Animated Border Effect */}
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-red-500 rounded-2xl transition-all duration-500" />
              </Link>
            </div>

            {/* Right Column - Services List */}
            <div>
              <div className="text-center mb-8 animate-fade-up">
                <div className="inline-flex items-center justify-center gap-4 mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-red-600/20 blur-xl rounded-full animate-pulse" />
                    <div className="relative w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-lg shadow-red-600/50 transform hover:scale-110 hover:rotate-6 transition-all duration-300">
                      <DroneIcon className="w-8 h-8 text-white animate-float" />
                    </div>
                  </div>
                </div>
                <h1 className="text-4xl font-bold text-gray-900">
                  Drone Technology Services
                </h1>
                <div className="mt-3 h-1 w-24 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full" />
              </div>
              <div className="space-y-4">
                {droneServices.map((service) => {
                  const ServiceIcon = getServiceIcon(service.icon)
                  const serviceId = typeof service.slug === 'string' ? service.slug : service.slug?.current
                  return (
                    <Link
                      key={serviceId}
                      href={
                        serviceId === 'survey-mapping' ? '/services/drone-survey-and-mapping' :
                        serviceId === 'surveillance' ? '/services/drone-surveillance-and-videography' :
                        serviceId === 'precision-spraying' ? '/services/precision-spraying' :
                        serviceId === 'delivery' ? '/services/drone-delivery' :
                        serviceId === 'hardware-software' ? '/services/hardware-software-firmware' :
                        serviceId === 'drone-in-box' ? '/services/drone-in-a-box' :
                        serviceId === 'data-gis' ? '/services/data-gis-digital-solutions' :
                        `#${serviceId}`
                      }
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-gradient-to-r hover:from-red-50 hover:to-transparent transition-all duration-300 group cursor-pointer border border-transparent hover:border-red-200 hover:shadow-md"
                      onMouseEnter={() => setSelectedService(serviceId || null)}
                      onMouseLeave={() => setSelectedService(null)}
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3 ${
                          selectedService === serviceId
                            ? 'bg-red-600 text-white shadow-lg shadow-red-600/50'
                            : 'bg-gray-100 text-gray-600 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-red-600/30'
                        }`}>
                          <ServiceIcon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                        </div>
                      </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-red-600 transition-colors duration-300 flex items-center gap-2">
                        {service.title}
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" />
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI & Software Services Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              {/* Premium Decorative Elements Above Image */}
              <div className="absolute -top-25 left-0 right-0 flex items-center justify-center gap-6 z-10">
                {/* Floating Badge 1 */}
                <div className="relative animate-float">
                  <div className="absolute inset-0 bg-blue-600/30 blur-2xl rounded-full" />
                  <div className="relative bg-white rounded-2xl shadow-2xl p-4 border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:scale-110">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                        <Cpu className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 font-medium">Advanced</div>
                        <div className="text-sm font-bold text-gray-900">AI Solutions</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge 2 */}
                <div className="relative animate-float-delayed">
                  <div className="absolute inset-0 bg-green-600/30 blur-2xl rounded-full" />
                  <div className="relative bg-white rounded-2xl shadow-2xl p-4 border-2 border-green-100 hover:border-green-300 transition-all duration-300 hover:scale-110">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 font-medium">Proven</div>
                        <div className="text-sm font-bold text-gray-900">Results</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="block relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
              >
                <Image
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop"
                  alt="AI and Software Development"
                  width={800}
                  height={600}
                  className="w-full h-[500px] object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500" />
                
                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-all duration-500" />
                
                <div className="absolute bottom-8 left-8 right-8 transform transition-all duration-500 group-hover:translate-y-[-10px]">
                  <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-3xl transition-all duration-500">
                    Cutting-Edge AI & Software Solutions
                  </h3>
                  <div className="inline-flex items-center gap-2 text-white group-hover:text-blue-300 transition-colors">
                    <span className="font-semibold">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                  </div>
                </div>
                
                {/* Animated Border Effect */}
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-blue-500 rounded-2xl transition-all duration-500" />
              </Link>
            </div>

            {/* Right Column - Services List */}
            <div>
              <div className="text-center mb-8 animate-fade-up">
                <div className="inline-flex items-center justify-center gap-4 mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-600/20 blur-xl rounded-full animate-pulse" />
                    <div className="relative w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/50 transform hover:scale-110 hover:rotate-6 transition-all duration-300">
                      <Cpu className="w-8 h-8 text-white animate-float" />
                    </div>
                  </div>
                </div>
                <h1 className="text-4xl font-bold text-gray-900">
                  AI & Software Services
                </h1>
                <div className="mt-3 h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full" />
              </div>
              <div className="space-y-4">
                {aiSoftwareServices.map((service) => {
                  const ServiceIcon = getServiceIcon(service.icon)
                  const serviceId = typeof service.slug === 'string' ? service.slug : service.slug?.current
                  return (
                    <Link
                      key={serviceId}
                      href={
                        serviceId === 'ai-software' ? '/services/ai-software-development' :
                        serviceId === 'cloud-services' ? '/services/cloud-services' :
                        serviceId === 'lms' ? '/services/learning-management-systems' :
                        '/contact'
                      }
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-all duration-300 group cursor-pointer border border-transparent hover:border-blue-200 hover:shadow-md"
                      onMouseEnter={() => setSelectedService(serviceId || null)}
                      onMouseLeave={() => setSelectedService(null)}
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3 ${
                          selectedService === serviceId
                            ? 'bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg shadow-blue-600/50'
                            : 'bg-gradient-to-br from-gray-100 to-gray-200'
                        }`}>
                          <ServiceIcon className={`w-6 h-6 transition-colors duration-300 ${
                            selectedService === serviceId ? 'text-white' : 'text-gray-600'
                          }`} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-bold mb-1 transition-colors duration-300 ${
                          selectedService === serviceId ? 'text-blue-600' : 'text-gray-900'
                        }`}>
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                        <div className="flex items-center gap-2 text-blue-600 font-medium text-sm group-hover:gap-3 transition-all duration-300">
                          <span>Explore Service</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Educational Programs Section */}
      <section className="relative py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              {/* Premium Decorative Elements Above Image */}
              <div className="absolute -top-25 left-0 right-0 flex items-center justify-center gap-6 z-10">
                {/* Floating Badge 1 */}
                <div className="relative animate-float">
                  <div className="absolute inset-0 bg-purple-600/30 blur-2xl rounded-full" />
                  <div className="relative bg-white rounded-2xl shadow-2xl p-4 border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 hover:scale-110">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 font-medium">Expert</div>
                        <div className="text-sm font-bold text-gray-900">Training</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge 2 */}
                <div className="relative animate-float-delayed">
                  <div className="absolute inset-0 bg-orange-600/30 blur-2xl rounded-full" />
                  <div className="relative bg-white rounded-2xl shadow-2xl p-4 border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:scale-110">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 font-medium">Certified</div>
                        <div className="text-sm font-bold text-gray-900">Programs</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="block relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
              >
                <Image
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop"
                  alt="Educational Programs and Training"
                  width={800}
                  height={600}
                  className="w-full h-[500px] object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500" />
                
                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/20 transition-all duration-500" />
                
                <div className="absolute bottom-8 left-8 right-8 transform transition-all duration-500 group-hover:translate-y-[-10px]">
                  <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-3xl transition-all duration-500">
                    Empowering Through Education & Training
                  </h3>
                  <div className="inline-flex items-center gap-2 text-white group-hover:text-purple-300 transition-colors">
                    <span className="font-semibold">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                  </div>
                </div>
                
                {/* Animated Border Effect */}
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-purple-500 rounded-2xl transition-all duration-500" />
              </Link>
            </div>

            {/* Right Column - Services List */}
            <div>
              <div className="text-center mb-8 animate-fade-up">
                <div className="inline-flex items-center justify-center gap-4 mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-600/20 blur-xl rounded-full animate-pulse" />
                    <div className="relative w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-600/50 transform hover:scale-110 hover:rotate-6 transition-all duration-300">
                      <GraduationCap className="w-8 h-8 text-white animate-float" />
                    </div>
                  </div>
                </div>
                <h1 className="text-4xl font-bold text-gray-900">
                  Educational Programs
                </h1>
                <div className="mt-3 h-1 w-24 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto rounded-full" />
              </div>
              <div className="space-y-4">
                {educationalServices.map((service) => {
                  const ServiceIcon = getServiceIcon(service.icon)
                  const serviceId = typeof service.slug === 'string' ? service.slug : service.slug?.current
                  return (
                    <Link
                      key={serviceId}
                      href={serviceId === 'training' ? '/services/educational-programs' : '/contact'}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-transparent transition-all duration-300 group cursor-pointer border border-transparent hover:border-purple-200 hover:shadow-md"
                      onMouseEnter={() => setSelectedService(serviceId || null)}
                      onMouseLeave={() => setSelectedService(null)}
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3 ${
                          selectedService === serviceId
                            ? 'bg-gradient-to-br from-purple-600 to-purple-700 shadow-lg shadow-purple-600/50'
                            : 'bg-gradient-to-br from-gray-100 to-gray-200'
                        }`}>
                          <ServiceIcon className={`w-6 h-6 transition-colors duration-300 ${
                            selectedService === serviceId ? 'text-white' : 'text-gray-600'
                          }`} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-bold mb-1 transition-colors duration-300 ${
                          selectedService === serviceId ? 'text-purple-600' : 'text-gray-900'
                        }`}>
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                        <div className="flex items-center gap-2 text-purple-600 font-medium text-sm group-hover:gap-3 transition-all duration-300">
                          <span>Explore Service</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-red-600 via-red-700 to-red-800 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Floating Orbs */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-red-500/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-red-400/30 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-300/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Icon */}
          <div className="inline-flex items-center justify-center mb-6 animate-fade-up">
            <div className="relative">
              <div className="absolute inset-0 bg-white/30 blur-2xl rounded-full animate-pulse" />
              <div className="relative w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center border-2 border-white/30 shadow-2xl">
                <DroneIcon className="w-10 h-10 text-white animate-float" />
              </div>
            </div>
          </div>
          
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 animate-fade-up animation-delay-100">
            Ready to Transform Your Business?
          </h2>
          
          {/* Description */}
          <p className="text-red-100 max-w-2xl mx-auto text-lg md:text-xl mb-10 leading-relaxed animate-fade-up animation-delay-200">
            Let's discuss how our drone technology and AI solutions can help you achieve your goals and stay ahead of the competition.
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center animate-fade-up animation-delay-300">
            <Button asChild size="lg" className="group bg-white text-red-600 hover:bg-gray-100 shadow-2xl hover:shadow-white/50 hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-semibold">
              <Link href="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/90 animate-fade-up animation-delay-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-white" />
              <span className="text-sm font-medium">1500+ Pilots Trained</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-white" />
              <span className="text-sm font-medium">40+ UAV Surveys</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-white" />
              <span className="text-sm font-medium">Industry Leading</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
