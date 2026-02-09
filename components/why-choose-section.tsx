"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Target, Zap, Shield, Users, Lightbulb, Award, LucideIcon } from "lucide-react"
import { useSanityData } from "@/hooks/useSanityData"

interface WhyChooseSectionData {
  sectionTitle: string
  description: string
  highlights: string[]
}

interface CoreValueData {
  _id: string
  title: string
  description: string
  icon: string
  order: number
}

const fallbackSectionData: WhyChooseSectionData = {
  sectionTitle: "Why Choose Karvensen?",
  description: "We're not just another IT company. Karvensen combines cutting-edge AI technology with a deep understanding of real-world challenges - from helping farmers optimize crops with drones to building enterprise systems that scale.",
  highlights: [
    "AI-first approach to problem solving",
    "Specialized in agricultural drone solutions",
    "Proven track record in enterprise systems",
    "Comprehensive training and support programs",
    "Cloud-native architecture expertise",
    "Commitment to indigenous manufacturing",
  ],
}

const fallbackValues: CoreValueData[] = [
  {
    _id: "1",
    icon: "Target",
    title: "Founded on Innovation",
    description: "Established in 2023 by Karthika Venkatesan with a vision to revolutionize industries through AI and drone technology.",
    order: 1,
  },
  {
    _id: "2",
    icon: "Zap",
    title: "Make in India",
    description: "Proudly assembling drones in India with carefully sourced components, supporting local manufacturing and innovation.",
    order: 2,
  },
  {
    _id: "3",
    icon: "Shield",
    title: "Enterprise-Grade Quality",
    description: "Delivering reliable, scalable solutions backed by rigorous testing and industry-leading security standards.",
    order: 3,
  },
  {
    _id: "4",
    icon: "Users",
    title: "Community Impact",
    description: "Empowering farmers with drone technology and educating youth through workshops in schools and colleges nationwide.",
    order: 4,
  },
]

// Icon mapping for dynamic icons from Sanity
const iconMap: Record<string, LucideIcon> = {
  Target,
  Zap,
  Shield,
  Users,
  Lightbulb,
  Award,
  CheckCircle2,
}

export function WhyChooseSection() {
  // Fetch section settings
  const { data: sectionData } = useSanityData<WhyChooseSectionData>(
    `*[_type == "whyChooseSection" && isActive == true][0]{
      sectionTitle,
      description,
      highlights
    }`,
    {},
    fallbackSectionData
  )

  // Fetch core values
  const { data: valuesData } = useSanityData<CoreValueData[]>(
    '*[_type == "coreValue" && isActive == true] | order(order asc)',
    {},
    fallbackValues
  )

  const section = sectionData || fallbackSectionData
  const values = valuesData || fallbackValues

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 border-b border-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              {section.sectionTitle}
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {section.description}
            </p>
            
            <div className="space-y-3 mb-8">
              {section.highlights?.map((highlight) => (
                <div key={highlight} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value) => {
              const IconComponent = iconMap[value.icon] || Target
              return (
                <Card key={value._id} className="border-2 border-gray-700 hover:border-green-400 transition-all bg-gray-800 hover:bg-gray-750 hover:-translate-y-1">
                  <CardContent className="pt-6">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-400">
                      <IconComponent className="h-5 w-5 text-gray-900" />
                    </div>
                    <h3 className="font-semibold mb-2 text-lg text-white">{value.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
