'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { useSanityData } from "@/hooks/useSanityData"
import { urlFor } from "@/sanity/lib/image"
import * as LucideIcons from "lucide-react"

interface ServiceDetailPageProps {
  slug: string
}

export default function ServiceDetailPageTemplate({ slug }: ServiceDetailPageProps) {
  const { data: serviceData, loading } = useSanityData<any>(
    `*[_type == "serviceDetailPage" && slug.current == $slug && isActive == true][0]{
      title,
      hero,
      overview,
      solutions[] | order(order asc),
      keyFeatures,
      useCases,
      process,
      technologies,
      cta,
      seo
    }`,
    { slug },
    null
  )

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading service details...</p>
        </div>
      </div>
    )
  }

  if (!serviceData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-6">The service you're looking for doesn't exist or is not yet published.</p>
          <Link href="/services">
            <Button>View All Services</Button>
          </Link>
        </div>
      </div>
    )
  }

  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName]
    return Icon || LucideIcons.Package
  }

  const hero = serviceData.hero || {}
  const overview = serviceData.overview || {}
  const solutions = serviceData.solutions || []
  const keyFeatures = serviceData.keyFeatures || {}
  const useCases = serviceData.useCases || {}
  const process = serviceData.process || {}
  const technologies = serviceData.technologies || {}
  const cta = serviceData.cta || {}

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        {hero.backgroundImage && (
          <div className="absolute inset-0 opacity-20">
            <Image
              src={urlFor(hero.backgroundImage).url()}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        )}
        
        <div className="container mx-auto px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {hero.badge && (
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                {hero.badge}
              </Badge>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {hero.title || serviceData.title}
            </h1>
            {hero.subtitle && (
              <p className="text-xl md:text-2xl text-blue-100">
                {hero.subtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      {overview.title && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {overview.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {overview.description}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Solutions Section */}
      {solutions.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution: any, index: number) => {
                const Icon = getIcon(solution.icon)
                return (
                  <Card key={solution.id || index} className="hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle>{solution.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{solution.description}</p>
                      {solution.features && solution.features.length > 0 && (
                        <ul className="space-y-2">
                          {solution.features.map((feature: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Key Features Section */}
      {keyFeatures.title && keyFeatures.features?.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {keyFeatures.title}
              </h2>
              {keyFeatures.subtitle && (
                <p className="text-lg text-gray-600">{keyFeatures.subtitle}</p>
              )}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyFeatures.features.map((feature: any, index: number) => {
                const Icon = getIcon(feature.icon)
                return (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <Icon className="h-10 w-10 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      {process.title && process.steps?.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {process.title}
              </h2>
              {process.subtitle && (
                <p className="text-lg text-gray-600">{process.subtitle}</p>
              )}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.steps.map((step: any, index: number) => {
                const Icon = getIcon(step.icon)
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {cta.title && (
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-8 md:px-12 lg:px-16 xl:px-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{cta.title}</h2>
            {cta.description && (
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                {cta.description}
              </p>
            )}
            {cta.buttonText && cta.buttonLink && (
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href={cta.buttonLink}>
                  {cta.buttonText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            )}
          </div>
        </section>
      )}
    </div>
  )
}
