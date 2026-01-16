import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Cpu,
  Plane,
  BookOpen,
  Server,
  Cloud,
  Code,
  ArrowRight,
  CheckCircle,
  Brain,
  Eye,
  MessageSquare,
  BarChart3,
  Database,
  GitBranch,
  Layers,
  Monitor,
  Settings,
  Zap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Services | KarVenSen",
  description:
    "Explore our comprehensive AI, drone, LMS, ERP, and cloud services. Custom software solutions for enterprise needs.",
}

const services = [
  {
    id: "ai",
    icon: Cpu,
    title: "AI Software Development",
    description:
      "Custom artificial intelligence solutions that transform your business operations with intelligent automation and insights.",
    features: [
      { icon: Brain, text: "Machine Learning Models" },
      { icon: Eye, text: "Computer Vision Systems" },
      { icon: MessageSquare, text: "Natural Language Processing" },
      { icon: BarChart3, text: "Predictive Analytics" },
    ],
    benefits: [
      "Automate complex decision-making processes",
      "Extract actionable insights from data",
      "Reduce operational costs by up to 40%",
      "Improve accuracy and consistency",
    ],
  },
  {
    id: "drone",
    icon: Plane,
    title: "Drone-Based Analytics & Monitoring",
    description:
      "Advanced aerial intelligence solutions combining drone hardware with AI-powered analytics for comprehensive monitoring.",
    features: [
      { icon: Eye, text: "Aerial Surveillance" },
      { icon: BarChart3, text: "Crop Health Analytics" },
      { icon: Layers, text: "3D Mapping & Modeling" },
      { icon: Monitor, text: "Real-time Monitoring" },
    ],
    benefits: [
      "Cover large areas in minimal time",
      "Access hard-to-reach locations safely",
      "Get high-resolution data for analysis",
      "Reduce manual inspection costs",
    ],
  },
  {
    id: "lms",
    icon: BookOpen,
    title: "Learning Management Systems",
    description:
      "Modern, scalable LMS platforms that revolutionize how organizations deliver training and educational content.",
    features: [
      { icon: Monitor, text: "Interactive Courses" },
      { icon: BarChart3, text: "Progress Tracking" },
      { icon: Brain, text: "AI Recommendations" },
      { icon: Settings, text: "Custom Branding" },
    ],
    benefits: [
      "Engage learners with interactive content",
      "Track progress and measure outcomes",
      "Scale training across organizations",
      "Reduce training costs significantly",
    ],
  },
  {
    id: "erp",
    icon: Server,
    title: "Enterprise Resource Planning",
    description:
      "Comprehensive ERP solutions that streamline operations, improve efficiency, and provide real-time business visibility.",
    features: [
      { icon: Database, text: "Inventory Management" },
      { icon: BarChart3, text: "Financial Analytics" },
      { icon: Settings, text: "HR Management" },
      { icon: Layers, text: "Supply Chain" },
    ],
    benefits: [
      "Unify business processes in one platform",
      "Get real-time visibility across operations",
      "Improve decision-making with analytics",
      "Automate routine business tasks",
    ],
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud Solutions & DevOps",
    description:
      "Scalable cloud infrastructure and DevOps practices that accelerate development and ensure reliable operations.",
    features: [
      { icon: Cloud, text: "Cloud Migration" },
      { icon: GitBranch, text: "CI/CD Pipelines" },
      { icon: Monitor, text: "Infrastructure Monitoring" },
      { icon: Zap, text: "Auto-scaling" },
    ],
    benefits: [
      "Reduce infrastructure costs",
      "Improve deployment frequency",
      "Ensure high availability and reliability",
      "Scale resources on demand",
    ],
  },
  {
    id: "custom",
    icon: Code,
    title: "Custom Software Development",
    description:
      "Bespoke software solutions designed and developed to meet your unique business requirements and challenges.",
    features: [
      { icon: Code, text: "Web Applications" },
      { icon: Monitor, text: "Mobile Apps" },
      { icon: Settings, text: "API Development" },
      { icon: Database, text: "Database Design" },
    ],
    benefits: [
      "Get solutions tailored to your needs",
      "Own your intellectual property",
      "Integrate with existing systems",
      "Scale as your business grows",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Our Services
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Comprehensive <span className="text-primary">Technology Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              From AI development to drone analytics, we offer end-to-end technology services that drive digital
              transformation and business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <div
                  className={`grid gap-12 lg:grid-cols-2 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight mb-4">{service.title}</h2>
                    <p className="text-muted-foreground text-lg mb-6">{service.description}</p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature.text} className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted">
                            <feature.icon className="h-4 w-4 text-primary" />
                          </div>
                          <span className="text-sm font-medium">{feature.text}</span>
                        </div>
                      ))}
                    </div>

                    <Button asChild>
                      <Link href="/contact">
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  {/* Benefits Card */}
                  <Card className={`bg-card ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <CardHeader>
                      <CardTitle>Key Benefits</CardTitle>
                      <CardDescription>Why choose our {service.title.toLowerCase()}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Development Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We analyze your requirements, challenges, and goals to define the project scope.",
              },
              {
                step: "02",
                title: "Design",
                description: "Our team creates detailed technical specifications and solution architecture.",
              },
              {
                step: "03",
                title: "Development",
                description: "Agile development with regular iterations, testing, and client feedback.",
              },
              {
                step: "04",
                title: "Deployment",
                description: "Seamless deployment, training, and ongoing support for your solution.",
              },
            ].map((phase) => (
              <Card key={phase.step} className="text-center bg-card">
                <CardContent className="pt-8">
                  <div className="text-4xl font-bold text-primary/20 mb-4">{phase.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                  <p className="text-muted-foreground text-sm">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Ready to Get Started?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg mb-8">
            Let's discuss how our services can help transform your business operations
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <Link href="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
