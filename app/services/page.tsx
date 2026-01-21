import type { Metadata } from "next"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import * as Icons from "lucide-react" // Import all icons
import { CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { client } from "@/sanity/lib/client"

export const metadata: Metadata = {
  title: "Services | Karvensen",
  description:
    "Explore Karvensen's comprehensive technology services - AI Software Development, Agricultural Drones, LMS, ERP, Cloud Solutions, and Educational Programs.",
}

// Fallback data
const mockServices = [
  {
    id: "ai-software",
    iconName: "Cpu",
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
  },
  {
    id: "drone-technology",
    icon: Plane,
    title: "Drone Technology",
    tagline: "Empowering Farmers with Smart Technology",
    description:
      "Advanced drone systems for agricultural monitoring and crop management. Make in India initiative with quality components from trusted sources, assembled locally.",
    features: [
      "Crop Health Monitoring",
      "Precision Spraying Systems",
      "Real-time Field Analytics",
      "Multi-Spectral Imaging",
      "Automated Flight Planning",
      "Data-Driven Insights",
    ],
    applications: ["Pest Detection", "Irrigation Planning", "Yield Estimation", "Field Mapping"],
  },
  {
    id: "lms",
    iconName: "BookOpen",
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
  },
  {
    id: "erp",
    iconName: "Server",
    title: "ERP Systems",
    tagline: "Streamline Your Operations",
    description:
      "Robust enterprise resource planning solutions that integrate all your business processes. Improve efficiency, reduce costs, and gain real-time visibility.",
    features: [
      "Financial Management",
      "Inventory & Supply Chain",
      "Human Resource Management",
      "Customer Relationship Management",
      "Business Intelligence & Reporting",
      "Workflow Automation",
    ],
    applications: ["Manufacturing", "Retail & Distribution", "Service Industries", "Healthcare"],
  },
  {
    id: "cloud",
    iconName: "Cloud",
    title: "Cloud Infrastructure",
    tagline: "Scalable & Secure Cloud Solutions",
    description:
      "Modern cloud infrastructure design, migration, and management. Build scalable, secure, and cost-effective cloud environments for your applications.",
    features: [
      "Cloud Architecture Design",
      "Migration & Modernization",
      "DevOps & CI/CD Pipelines",
      "Container Orchestration",
      "Cloud Security & Compliance",
      "Cost Optimization",
    ],
    applications: ["Cloud Migration", "Microservices", "Auto-Scaling Apps", "Disaster Recovery"],
  },
  {
    id: "training",
    iconName: "GraduationCap",
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
  },
]

async function getServices() {
  try {
    const query = `*[_type == "service"] | order(order asc) {
      "id": _id,
      title,
      "tagline": category, 
        // Note: 'category' in schema is an enum value (ai, drone, etc). 
        // For now, we'll map or use it directly. Ideally schema should have a display name.
      "description": excerpt,
      features,
      "iconName": icon
    }`
    const services = await client.fetch(query)

    if (!services || services.length === 0) {
      return mockServices
    }

    return services.map((service: any) => ({
      ...service,
      tagline: service.tagline || "Professional Service", // Fallback for tagline
      applications: [], // Schema doesn't support applications list yet
      features: service.features || []
    }))
  } catch (error) {
    console.warn("Failed to fetch services from Sanity, using mock data:", error)
    return mockServices
  }
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
              Our <span className="text-gray-900">Services</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Comprehensive technology solutions spanning AI development, drone systems, enterprise software, 
            <p className="text-lg text-muted-foreground leading-relaxed">
              Comprehensive technology solutions spanning AI development, drone systems, enterprise software, cloud infrastructure,
              and educational programs. Built for impact, designed for excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="scroll-mt-20">
                <div className="h-full flex flex-col overflow-hidden border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-lg transition-all">
                  <div className="p-6 lg:p-8 bg-gray-50 border-b border-gray-200">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gray-700">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="mb-3 inline-block px-3 py-1 bg-gray-200 text-gray-900 text-xs font-medium rounded-full">
                      {service.tagline}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                    <Button asChild size="sm" className="group bg-gray-700 hover:bg-gray-800 text-white">
                      <Link href="/contact">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
          <div className="space-y-24">
            {services.map((service, index) => {
              // Dynamic Icon Resolution
              const IconComponent = (Icons as any)[service.iconName] || Icons.Cpu

              return (
                <div key={service.id} id={service.id} className="scroll-mt-20">
                  <Card className="overflow-hidden border-2 hover:border-primary/50 transition-colors">
                    <div className="grid md:grid-cols-2">
                      <div className="p-8 md:p-12 bg-muted/30">
                        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                          <IconComponent className="h-7 w-7 text-primary" />
                        </div>
                        <Badge variant="secondary" className="mb-4">
                          {service.tagline}
                        </Badge>
                        <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                        <Button asChild className="group">
                          <Link href="/contact">
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>

                  <div className="p-6 lg:p-8 bg-white flex-1">
                    <div className="mb-6">
                      <h3 className="font-semibold text-base text-gray-900 mb-3">Key Features</h3>
                      <div className="space-y-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-gray-700 mt-0.5 flex-shrink-0" />
                            <span className="text-xs text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-base text-gray-900 mb-3">Use Cases</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.applications.map((app) => (
                          <span key={app} className="px-2 py-1 bg-gray-100 border border-gray-300 text-gray-700 text-xs rounded-md">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-700 relative overflow-hidden border-t border-gray-600">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-8">
            Let's discuss how our services can help you achieve your goals.
          </p>
          <Button asChild size="lg" className="group bg-white text-gray-900 hover:bg-gray-100">
            <Link href="/contact">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
