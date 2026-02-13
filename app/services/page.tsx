import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import {
  Cpu,
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
  Radio,
  Cloud,
  BookOpen,
  Plane,
  Server,
  Map,
  Ruler,
  Shield,
  Target,
  Zap,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { DroneIcon } from "@/components/icons/drone-icon"
import { fetchSanityData } from "@/lib/fetchSanityData"
import { getServicesPageContent, getServiceDetailPagesByCategory } from "@/sanity/lib/queries"
import { urlFor } from "@/sanity/lib/image"
import { ServicesList } from "@/components/services-list"
import { generateSEOMetadata, generateServiceStructuredData, generateBreadcrumbStructuredData } from "@/lib/seo-utils"

// Generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
  try {
    const pageContent = await getServicesPageContent()
    
    return generateSEOMetadata({
      seo: pageContent?.seo,
      fallbackTitle: "Our Services | KarVenSen - AI & Drone Solutions",
      fallbackDescription: "Explore KarVenSen's comprehensive services in drone technology, AI software development, cloud services, and advanced educational programs. Transform your business with cutting-edge solutions.",
      path: "/services",
    })
  } catch (error) {
    console.error("Error generating metadata:", error)
    return {
      title: "Our Services | KarVenSen - AI & Drone Solutions",
      description: "Explore KarVenSen's comprehensive services in drone technology, AI software development, cloud services, and advanced educational programs.",
    }
  }
}

// Helper function to get icon component from icon name
function getSectionIcon(iconName: string | undefined, fallback: string = "Camera") {
  const icons: Record<string, React.ComponentType<{ className?: string }>> = {
    Drone: DroneIcon,
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
    Map,
    Ruler,
    Shield,
    Target,
    Zap,
    CheckCircle2,
  }
  return icons[iconName || fallback] || Camera
}

interface ServiceItemData {
  title: string
  slug: { current: string }
  category: string
  icon: string
  description?: string
  overview?: {
    description: string
  }
}

// Revalidate every 60 seconds
export const revalidate = 60

// Default fallback data
const defaultPageContent = {
  hero: {
    title: "Our Services",
    subtitle: "Diversified expertise across critical industries.",
  },
  droneSection: {
    sectionTitle: "Drone Technology Services",
    imageAlt: "Drone operator at sunset",
    imageTitle: "Premier Consultancy for Drone Projects",
    imageLink: "/contact?enquiry=drone-services",
    badge1Label: "Premium",
    badge1Text: "Drone Tech",
    badge2Label: "Certified",
    badge2Text: "Excellence",
  },
  softwareSection: {
    sectionTitle: "AI & Software Services",
    imageAlt: "AI and Software Development",
    imageTitle: "Cutting-Edge AI & Software Solutions",
    imageLink: "/contact",
    badge1Label: "Advanced",
    badge1Text: "AI Solutions",
    badge2Label: "Proven",
    badge2Text: "Results",
  },
  educationSection: {
    sectionTitle: "Educational Programs",
    imageAlt: "Educational Programs and Training",
    imageTitle: "Empowering Through Education & Training",
    imageLink: "/contact",
    badge1Label: "Expert",
    badge1Text: "Training",
    badge2Label: "Certified",
    badge2Text: "Programs",
  },
  ctaSection: {
    title: "Ready to Transform Your Business?",
    description: "Let's discuss how our drone technology and AI solutions can help you achieve your goals and stay ahead of the competition.",
    buttonText: "Schedule a Consultation",
    buttonLink: "/contact?enquiry=services",
    trustIndicators: [
      { text: "1500+ Pilots Trained" },
      { text: "40+ UAV Surveys" },
      { text: "Industry Leading" },
    ],
  },
}

const defaultDroneServices = [
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

const defaultSoftwareServices = [
  {
    slug: { current: "ai-software" },
    icon: "Cpu",
    title: "AI Software Development",
    description:
      "Custom AI and machine learning solutions tailored to your business needs. From predictive analytics to natural language processing, we build AI systems that drive real business value.",
    category: "software"
  },
  {
    slug: { current: "cloud-services" },
    icon: "Cloud",
    title: "Cloud Services",
    description:
      "Comprehensive cloud computing solutions for businesses of all sizes. From cloud migration to infrastructure management, we provide secure, scalable, and cost-effective cloud services.",
    category: "software"
  },
  {
    slug: { current: "lms" },
    icon: "BookOpen",
    title: "Learning Management Systems",
    description:
      "Comprehensive LMS solutions for educational institutions and corporate training. Engage learners with interactive content, assessments, and progress tracking.",
    category: "software"
  },
]

const defaultEducationServices = [
  {
    slug: { current: "training" },
    icon: "GraduationCap",
    title: "Educational Programs",
    description:
      "Hands-on workshops and awareness programs about drone technology, AI, and emerging technologies for schools, colleges, and professionals.",
    category: "education"
  },
]

export default async function ServicesPage() {
  // Fetch page content from Sanity
  const pageContent = await getServicesPageContent()

  // Fetch service detail pages from Sanity by category
  const droneServicesFromDetailPages = await getServiceDetailPagesByCategory('drone')
  const softwareServicesFromDetailPages = await getServiceDetailPagesByCategory('software')
  const educationServicesFromDetailPages = await getServiceDetailPagesByCategory('education')

  // Fetch service items from Sanity (legacy support)
  const droneServicesData = await fetchSanityData<ServiceItemData[]>(
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

  const softwareServicesData = await fetchSanityData<ServiceItemData[]>(
    `*[_type == "serviceItem" && category == "software" && isActive == true] | order(order asc){
      title,
      slug,
      category,
      icon,
      description
    }`,
    {},
    []
  )

  const educationServicesData = await fetchSanityData<ServiceItemData[]>(
    `*[_type == "serviceItem" && category == "education" && isActive == true] | order(order asc){
      title,
      slug,
      category,
      icon,
      description
    }`,
    {},
    []
  )

  // Transform serviceDetailPage data to match ServiceItemData interface
  const transformDetailPageToServiceItem = (detailPage: any): ServiceItemData => ({
    title: detailPage.title,
    slug: detailPage.slug,
    category: detailPage.category,
    icon: detailPage.icon || 'Camera',
    description: detailPage.overview?.description || detailPage.hero?.subtitle || ''
  })

  // Merge service detail pages with service items (detail pages take priority)
  const droneDetailPagesList = droneServicesFromDetailPages?.map(transformDetailPageToServiceItem) || []
  const softwareDetailPagesList = softwareServicesFromDetailPages?.map(transformDetailPageToServiceItem) || []
  const educationDetailPagesList = educationServicesFromDetailPages?.map(transformDetailPageToServiceItem) || []

  // Use detail pages if available, otherwise fall back to service items, then defaults
  const content = pageContent || defaultPageContent
  const droneServices = droneDetailPagesList.length > 0 
    ? droneDetailPagesList 
    : (droneServicesData && droneServicesData.length > 0) 
      ? droneServicesData 
      : defaultDroneServices
  const aiSoftwareServices = softwareDetailPagesList.length > 0 
    ? softwareDetailPagesList 
    : (softwareServicesData && softwareServicesData.length > 0) 
      ? softwareServicesData 
      : defaultSoftwareServices
  const educationalServices = educationDetailPagesList.length > 0 
    ? educationDetailPagesList 
    : (educationServicesData && educationServicesData.length > 0) 
      ? educationServicesData 
      : defaultEducationServices

  // Generate slug map from service slugs
  const generateSlugMap = (services: ServiceItemData[]): Record<string, string> => {
    const map: Record<string, string> = {}
    services.forEach(service => {
      const slugStr = typeof service.slug === 'string' ? service.slug : service.slug?.current
      if (slugStr) {
        map[slugStr] = `/services/${slugStr}`
      }
    })
    return map
  }

  const droneSlugMap = generateSlugMap(droneServices)
  const softwareSlugMap = generateSlugMap(aiSoftwareServices)
  const educationSlugMap = generateSlugMap(educationalServices)

  // Get section icons from Sanity or use defaults
  const droneTitleIconName = content.droneSection?.titleIcon || "Drone"
  const DroneTitleIcon = getSectionIcon(droneTitleIconName, "Drone")
  const droneBadge1IconName = content.droneSection?.badge1Icon || "Drone"
  const DroneBadge1Icon = getSectionIcon(droneBadge1IconName, "Drone")
  const droneBadge2IconName = content.droneSection?.badge2Icon || "CheckCircle2"
  const DroneBadge2Icon = getSectionIcon(droneBadge2IconName, "CheckCircle2")
  
  const softwareTitleIconName = content.softwareSection?.titleIcon || "Cpu"
  const SoftwareTitleIcon = getSectionIcon(softwareTitleIconName, "Cpu")
  const softwareBadge1IconName = content.softwareSection?.badge1Icon || "Cpu"
  const SoftwareBadge1Icon = getSectionIcon(softwareBadge1IconName, "Cpu")
  const softwareBadge2IconName = content.softwareSection?.badge2Icon || "CheckCircle2"
  const SoftwareBadge2Icon = getSectionIcon(softwareBadge2IconName, "CheckCircle2")
  
  const educationTitleIconName = content.educationSection?.titleIcon || "GraduationCap"
  const EducationTitleIcon = getSectionIcon(educationTitleIconName, "GraduationCap")
  const educationBadge1IconName = content.educationSection?.badge1Icon || "GraduationCap"
  const EducationBadge1Icon = getSectionIcon(educationBadge1IconName, "GraduationCap")
  const educationBadge2IconName = content.educationSection?.badge2Icon || "CheckCircle2"
  const EducationBadge2Icon = getSectionIcon(educationBadge2IconName, "CheckCircle2")
  
  // CTA Section Icon
  const ctaIconName = content.ctaSection?.ctaIcon || "Drone"
  const CtaSectionIcon = getSectionIcon(ctaIconName, "Drone")
  
  const droneImage = content.droneSection?.image
    ? urlFor(content.droneSection.image).width(800).height(600).url()
    : 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop'

  const softwareImage = content.softwareSection?.image
    ? urlFor(content.softwareSection.image).width(800).height(600).url()
    : 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop'

  const educationImage = content.educationSection?.image
    ? urlFor(content.educationSection.image).width(800).height(600).url()
    : 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop'

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
              {content.hero?.title || "Our Services"}
            </h1>
            <p className="text-lg md:text-xl text-teal-100 leading-relaxed animate-fade-up animation-delay-200">
              {content.hero?.subtitle || "Diversified expertise across critical industries."}
            </p>
          </div>
        </div>
      </section>

      {/* Drone Services Section */}
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
                        <DroneBadge1Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 font-medium">
                          {content.droneSection?.badge1Label || "Premium"}
                        </div>
                        <div className="text-sm font-bold text-gray-900">
                          {content.droneSection?.badge1Text || "Drone Tech"}
                        </div>
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
                        <DroneBadge2Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 font-medium">
                          {content.droneSection?.badge2Label || "Certified"}
                        </div>
                        <div className="text-sm font-bold text-gray-900">
                          {content.droneSection?.badge2Text || "Excellence"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href={content.droneSection?.imageLink || "/contact?enquiry=drone-services"}
                className="block relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
              >
                <Image
                  src={droneImage}
                  alt={content.droneSection?.imageAlt || "Drone operator at sunset"}
                  width={800}
                  height={600}
                  className="w-full h-[500px] object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500" />

                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/20 transition-all duration-500" />

                <div className="absolute bottom-8 left-8 right-8 transform transition-all duration-500 group-hover:translate-y-[-10px]">
                  <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-3xl transition-all duration-500">
                    {content.droneSection?.imageTitle || "Premier Consultancy for Drone Projects"}
                  </h3>
                  <div className="inline-flex items-center gap-2 text-white group-hover:text-red-300 transition-colors">
                      <span className="font-semibold">{content.droneSection?.learnMoreText || "Learn More"}</span>
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
                      <DroneTitleIcon className="w-8 h-8 text-white animate-float" />
                    </div>
                  </div>
                </div>
                <h1 className="text-4xl font-bold text-gray-900">
                  {content.droneSection?.sectionTitle || "Drone Technology Services"}
                </h1>
                <div className="mt-3 h-1 w-24 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full" />
              </div>
              <ServicesList services={droneServices} colorScheme="red" categorySlugMap={droneSlugMap} />
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
                        <SoftwareBadge1Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 font-medium">
                          {content.softwareSection?.badge1Label || "Advanced"}
                        </div>
                        <div className="text-sm font-bold text-gray-900">
                          {content.softwareSection?.badge1Text || "AI Solutions"}
                        </div>
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
                        <SoftwareBadge2Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 font-medium">
                          {content.softwareSection?.badge2Label || "Proven"}
                        </div>
                        <div className="text-sm font-bold text-gray-900">
                          {content.softwareSection?.badge2Text || "Results"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href={content.softwareSection?.imageLink || "/contact"}
                className="block relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
              >
                <Image
                  src={softwareImage}
                  alt={content.softwareSection?.imageAlt || "AI and Software Development"}
                  width={800}
                  height={600}
                  className="w-full h-[500px] object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500" />

                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-all duration-500" />

                <div className="absolute bottom-8 left-8 right-8 transform transition-all duration-500 group-hover:translate-y-[-10px]">
                  <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-3xl transition-all duration-500">
                    {content.softwareSection?.imageTitle || "Cutting-Edge AI & Software Solutions"}
                  </h3>
                  <div className="inline-flex items-center gap-2 text-white group-hover:text-blue-300 transition-colors">
                      <span className="font-semibold">{content.softwareSection?.learnMoreText || "Learn More"}</span>
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
                      <SoftwareTitleIcon className="w-8 h-8 text-white animate-float" />
                    </div>
                  </div>
                </div>
                <h1 className="text-4xl font-bold text-gray-900">
                  {content.softwareSection?.sectionTitle || "AI & Software Services"}
                </h1>
                <div className="mt-3 h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full" />
              </div>
              <ServicesList services={aiSoftwareServices} colorScheme="blue" categorySlugMap={softwareSlugMap} />
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
                        <EducationBadge1Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 font-medium">
                          {content.educationSection?.badge1Label || "Expert"}
                        </div>
                        <div className="text-sm font-bold text-gray-900">
                          {content.educationSection?.badge1Text || "Training"}
                        </div>
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
                        <EducationBadge2Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 font-medium">
                          {content.educationSection?.badge2Label || "Certified"}
                        </div>
                        <div className="text-sm font-bold text-gray-900">
                          {content.educationSection?.badge2Text || "Programs"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href={content.educationSection?.imageLink || "/contact"}
                className="block relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
              >
                <Image
                  src={educationImage}
                  alt={content.educationSection?.imageAlt || "Educational Programs and Training"}
                  width={800}
                  height={600}
                  className="w-full h-[500px] object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500" />

                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/20 transition-all duration-500" />

                <div className="absolute bottom-8 left-8 right-8 transform transition-all duration-500 group-hover:translate-y-[-10px]">
                  <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-3xl transition-all duration-500">
                    {content.educationSection?.imageTitle || "Empowering Through Education & Training"}
                  </h3>
                  <div className="inline-flex items-center gap-2 text-white group-hover:text-purple-300 transition-colors">
                      <span className="font-semibold">{content.educationSection?.learnMoreText || "Learn More"}</span>
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
                      <EducationTitleIcon className="w-8 h-8 text-white animate-float" />
                    </div>
                  </div>
                </div>
                <h1 className="text-4xl font-bold text-gray-900">
                  {content.educationSection?.sectionTitle || "Educational Programs"}
                </h1>
                <div className="mt-3 h-1 w-24 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto rounded-full" />
              </div>
              <ServicesList services={educationalServices} colorScheme="purple" categorySlugMap={educationSlugMap} />
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
                <CtaSectionIcon className="w-10 h-10 text-white animate-float" />
              </div>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 animate-fade-up animation-delay-100">
            {content.ctaSection?.title || "Ready to Transform Your Business?"}
          </h2>

          {/* Description */}
          <p className="text-red-100 max-w-2xl mx-auto text-lg md:text-xl mb-10 leading-relaxed animate-fade-up animation-delay-200">
            {content.ctaSection?.description || "Let's discuss how our drone technology and AI solutions can help you achieve your goals and stay ahead of the competition."}
          </p>

          {/* CTA Button */}
          <div className="flex justify-center animate-fade-up animation-delay-300">
            <Button asChild size="lg" className="group bg-white text-red-600 hover:bg-gray-100 shadow-2xl hover:shadow-white/50 hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-semibold">
              <Link href={content.ctaSection?.buttonLink || "/contact?enquiry=services"}>
                {content.ctaSection?.buttonText || "Schedule a Consultation"}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          {content.ctaSection?.trustIndicators && content.ctaSection.trustIndicators.length > 0 && (
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/90 animate-fade-up animation-delay-400">
              {content.ctaSection.trustIndicators.map((indicator: { text: string }, index: number) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                  <span className="text-sm font-medium">{indicator.text}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbStructuredData([
              { name: 'Home', url: 'https://karvensen.com' },
              { name: 'Services', url: 'https://karvensen.com/services' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateServiceStructuredData({
              name: 'KarVenSen Professional Services',
              description: 'Comprehensive AI, Drone Technology, Software Development, Cloud Services, and Educational Programs',
              url: 'https://karvensen.com/services',
            })
          ),
        }}
      />
    </div>
  )
}
