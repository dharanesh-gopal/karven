import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Award, Users, Globe, Lightbulb, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | KarVenSen",
  description:
    "Learn about KarVenSen's mission, vision, and values. Discover how we're revolutionizing industries with AI and drone technology.",
}

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pushing boundaries with cutting-edge AI and drone technologies to solve complex challenges.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Building trust through transparent practices, ethical AI, and responsible technology deployment.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Partnering with clients and communities to create impactful, sustainable solutions together.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Delivering exceptional quality in every project, from AI models to training programs.",
  },
]

const milestones = [
  { year: "2019", event: "KarVenSen founded with a vision for AI-first solutions" },
  { year: "2020", event: "Launched first drone analytics platform for agriculture" },
  { year: "2021", event: "Expanded to LMS and ERP solutions" },
  { year: "2022", event: "Started drone awareness programs across India" },
  { year: "2023", event: "Reached 100+ enterprise clients milestone" },
  { year: "2024", event: "Launched advanced AI/ML training programs" },
]

const impactStats = [
  { value: "500+", label: "Farmers Trained", icon: Users },
  { value: "50+", label: "Schools Reached", icon: Globe },
  { value: "200+", label: "Drone Pilots Certified", icon: Award },
  { value: "30+", label: "Districts Covered", icon: Target },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Pioneering <span className="text-primary">AI & Drone</span> Innovation
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              KarVenSen is an AI-first IT software services company dedicated to transforming industries through
              intelligent technology. We bridge the gap between cutting-edge AI research and real-world applications.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="bg-card border-primary/20">
              <CardContent className="pt-8">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To democratize access to AI and drone technology by delivering innovative, scalable, and impactful
                  solutions that empower businesses, farmers, and educational institutions. We aim to bridge the
                  technology gap and drive digital transformation across sectors.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-primary/20">
              <CardContent className="pt-8">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading AI-first technology partner for enterprises and communities, known for creating
                  intelligent solutions that transform how people work, learn, and grow. We envision a future where AI
                  and drones enhance human potential across every industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at KarVenSen
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="text-center bg-card">
                <CardContent className="pt-8">
                  <div className="mb-4 mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Key milestones in our growth story</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center gap-6 mb-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <Card className="bg-card">
                      <CardContent className="py-4 px-6">
                        <span className="text-primary font-bold">{milestone.year}</span>
                        <p className="text-muted-foreground mt-1">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Impact</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Making a difference through technology and education
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mb-4 mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Industries We Serve</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our AI and drone solutions are transforming multiple sectors
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Agriculture",
                description:
                  "Precision farming with drone monitoring, crop analytics, and AI-powered yield optimization.",
              },
              {
                title: "Education",
                description: "Modern LMS platforms, technical workshops, and skill development programs for students.",
              },
              {
                title: "Enterprise",
                description: "Custom ERP solutions, process automation, and AI-driven business intelligence tools.",
              },
              {
                title: "Infrastructure",
                description: "Drone-based surveying, inspection services, and smart monitoring solutions.",
              },
              {
                title: "Healthcare",
                description: "AI diagnostic tools, telemedicine platforms, and healthcare management systems.",
              },
              {
                title: "Government",
                description: "Smart city solutions, public service automation, and citizen engagement platforms.",
              },
            ].map((industry) => (
              <Card key={industry.title} className="bg-card hover:border-primary/50 transition-colors">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">{industry.title}</h3>
                  <p className="text-muted-foreground text-sm">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
