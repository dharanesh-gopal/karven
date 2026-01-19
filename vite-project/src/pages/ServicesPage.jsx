import { Cpu, Plane, BookOpen, Server, Cloud, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function ServicesPage() {
  const services = [
    {
      id: "ai-software",
      icon: Cpu,
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
    },
    {
      id: "drone-technology",
      icon: Plane,
      title: "Agricultural Drone Technology",
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
    },
    {
      id: "lms",
      icon: BookOpen,
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
    },
    {
      id: "erp",
      icon: Server,
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
    },
    {
      id: "cloud",
      icon: Cloud,
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
    },
    {
      id: "training",
      icon: GraduationCap,
      title: "Educational Programs",
      tagline: "Building Skills for the Future",
      description:
        "Hands-on workshops and awareness programs about drone technology, AI, and emerging technologies for schools, colleges, and professionals.",
      features: [
        "Drone Pilot Training",
        "AI & ML Workshops",
        "Cloud Computing Courses",
        "Technical Awareness Programs",
        "Certification Prep",
        "Industry Placement Support",
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 border-b bg-gradient-to-br from-indigo-500/5 via-white to-indigo-500/5 dark:from-indigo-500/10 dark:via-black dark:to-indigo-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Our <span className="text-indigo-500">Services</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to transform your business, empower your people, and drive innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.id} className="p-8 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:shadow-lg transition-all">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10">
                  <service.icon className="h-6 w-6 text-indigo-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-3">{service.tagline}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-indigo-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto text-lg mb-8">
            Let's discuss which services are right for your organization and how we can help you achieve your goals.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center h-10 px-6 rounded-lg bg-white text-indigo-500 font-medium">
            Get in Touch
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
