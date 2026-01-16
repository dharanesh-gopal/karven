import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, Plane, BookOpen, Server, Cloud, Code } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Cpu,
    title: "AI Solutions",
    description:
      "Custom machine learning models, computer vision, NLP, and intelligent automation systems tailored for enterprise needs.",
    href: "/services#ai",
  },
  {
    icon: Plane,
    title: "Drone Technology",
    description:
      "Advanced drone-based analytics, monitoring, and surveying solutions integrated with AI-powered intelligence.",
    href: "/services#drone",
  },
  {
    icon: BookOpen,
    title: "LMS & ERP Systems",
    description: "Modern learning management and enterprise resource planning platforms for seamless operations.",
    href: "/services#lms",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure, CI/CD pipelines, and DevOps practices for agile development.",
    href: "/services#cloud",
  },
  {
    icon: Code,
    title: "Custom Software",
    description: "Bespoke software development solutions designed to meet your unique business requirements.",
    href: "/services#custom",
  },
  {
    icon: Server,
    title: "Awareness Programs",
    description: "Technical workshops and training programs for farmers, schools, and professional development.",
    href: "/training",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Core Capabilities</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive technology solutions powered by artificial intelligence and cutting-edge innovation
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Link key={feature.title} href={feature.href}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 bg-card">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
