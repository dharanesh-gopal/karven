import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, Plane, BookOpen, GraduationCap } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Cpu,
    title: "AI Software Development",
    description:
      "Custom AI solutions, machine learning models, and intelligent automation systems designed for enterprise-grade performance.",
    href: "/services",
  },
  {
    icon: Plane,
    title: "Agricultural Drone Systems",
    description:
      "Smart drone technology for farmers - crop monitoring, spraying, and analytics. Make in India initiative with quality components.",
    href: "/services",
  },
  {
    icon: BookOpen,
    title: "LMS Solutions",
    description: "Modern learning management systems for educational institutions and corporate training programs.",
    href: "/services",
  },
  {
    icon: GraduationCap,
    title: "Educational Programs",
    description: "Hands-on workshops and awareness programs about drone technology for schools, colleges, and professionals.",
    href: "/training",
  },
]

export function FeaturesSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">Comprehensive Technology Solutions</h2>
          <p className="text-gray-600 text-lg">
            From AI-powered software to drone technology and enterprise systems - we deliver end-to-end digital transformation.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Link key={feature.title} href={feature.href} className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-lg border-gray-200 hover:border-gray-400 hover:-translate-y-1 bg-white">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 transition-colors group-hover:bg-gray-700">
                    <feature.icon className="h-6 w-6 text-gray-900 group-hover:text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-gray-600">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
