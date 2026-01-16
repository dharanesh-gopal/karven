import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Briefcase, ArrowRight, Users, Zap, Heart, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Careers | KarVenSen",
  description:
    "Join KarVenSen and work on cutting-edge AI and drone technology. Explore open positions in AI engineering, software development, and more.",
}

const benefits = [
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Clear career paths and continuous learning opportunities in emerging technologies.",
  },
  {
    icon: Zap,
    title: "Cutting-Edge Tech",
    description: "Work with the latest in AI, machine learning, and drone technology.",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs for you and your family.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with passionate professionals in a supportive team environment.",
  },
]

const jobs = [
  {
    id: "ai-engineer",
    title: "AI/ML Engineer",
    department: "AI Research",
    location: "Hyderabad",
    type: "Full-time",
    experience: "3-5 years",
    description:
      "Design and implement machine learning models for computer vision, NLP, and predictive analytics applications.",
    requirements: [
      "Strong Python programming skills",
      "Experience with TensorFlow or PyTorch",
      "Knowledge of computer vision algorithms",
      "M.Tech/PhD in CS or related field preferred",
    ],
  },
  {
    id: "drone-engineer",
    title: "Drone Systems Engineer",
    department: "Drone Technology",
    location: "Hyderabad",
    type: "Full-time",
    experience: "2-4 years",
    description:
      "Develop drone control systems, flight planning software, and integration with AI analytics platforms.",
    requirements: [
      "Experience with drone flight controllers",
      "Knowledge of GIS and mapping systems",
      "Understanding of aviation regulations",
      "DGCA drone pilot certification is a plus",
    ],
  },
  {
    id: "fullstack-developer",
    title: "Full Stack Developer",
    department: "Product Engineering",
    location: "Hyderabad / Remote",
    type: "Full-time",
    experience: "2-4 years",
    description: "Build scalable web applications for our LMS, ERP, and enterprise products using modern tech stack.",
    requirements: [
      "Proficiency in React and Node.js",
      "Experience with cloud services (AWS/GCP)",
      "Knowledge of database design",
      "Understanding of CI/CD practices",
    ],
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Hyderabad",
    type: "Full-time",
    experience: "3-5 years",
    description: "Design and maintain cloud infrastructure, implement CI/CD pipelines, and ensure system reliability.",
    requirements: [
      "Experience with AWS or GCP",
      "Proficiency in Docker and Kubernetes",
      "Knowledge of Infrastructure as Code",
      "Strong scripting skills",
    ],
  },
  {
    id: "training-coordinator",
    title: "Training Program Coordinator",
    department: "Training & Outreach",
    location: "Hyderabad / Field",
    type: "Full-time",
    experience: "2-3 years",
    description: "Plan, coordinate, and execute drone awareness and technical training programs across India.",
    requirements: [
      "Experience in training program management",
      "Excellent communication skills",
      "Willingness to travel frequently",
      "Knowledge of drone technology is a plus",
    ],
  },
  {
    id: "sales-executive",
    title: "Enterprise Sales Executive",
    department: "Business Development",
    location: "Hyderabad / Delhi",
    type: "Full-time",
    experience: "3-5 years",
    description: "Drive enterprise sales for AI and software solutions, manage client relationships, and close deals.",
    requirements: [
      "B2B sales experience in IT services",
      "Strong negotiation and presentation skills",
      "Understanding of AI and enterprise software",
      "Track record of meeting sales targets",
    ],
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Join Our Team
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Build the Future with <span className="text-primary">KarVenSen</span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Join a team of innovators working on cutting-edge AI and drone technology. We're always looking for
              passionate individuals to help us transform industries.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">Why Work With Us</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="text-center bg-card">
                <CardContent className="pt-8">
                  <div className="mb-4 mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Open Positions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Explore current opportunities to join our team</p>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {jobs.map((job) => (
              <Card key={job.id} className="bg-card hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <Badge variant="secondary">{job.experience}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{job.description}</CardDescription>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Requirements:</h4>
                    <ul className="grid sm:grid-cols-2 gap-1 text-sm text-muted-foreground">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild>
                    <Link href={`/contact?position=${job.id}`}>
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Don't See a Perfect Match?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg mb-8">
            We're always interested in hearing from talented individuals. Send us your resume and we'll keep you in mind
            for future opportunities.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">
              Send Your Resume
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
