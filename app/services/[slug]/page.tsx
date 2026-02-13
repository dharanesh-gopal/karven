import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import {
  Camera, Video, Sprout, Package, Microchip, Box,
  BarChart3, Radio, Cpu, Cloud, BookOpen, GraduationCap,
  Plane, Server, Map, Ruler, Shield, Target, Zap, Droplet,
  Brain, Code, Users, FileText, MessageSquare
} from 'lucide-react'

// Icon mapping
const iconMap: Record<string, any> = {
  Camera, Video, Sprout, Package, Microchip, Box,
  BarChart3, Radio, Cpu, Cloud, BookOpen, GraduationCap,
  Plane, Server, Map, Ruler, Shield, Target, Zap, Droplet,
  Brain, Code, Users, FileText, MessageSquare, CheckCircle2
}

const getIcon = (iconName: string) => iconMap[iconName] || Camera

// Generate static params for all service detail pages
export async function generateStaticParams() {
  const services = await client.fetch(
    `*[_type == "serviceDetailPage" && isActive == true]{ "slug": slug.current }`
  )
  
  return services.map((service: any) => ({
    slug: service.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = await client.fetch(
    `*[_type == "serviceDetailPage" && slug.current == $slug][0]{
      title,
      hero,
      seo
    }`,
    { slug }
  )

  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: service.seo?.metaTitle || service.title || 'Service',
    description: service.seo?.metaDescription || service.hero?.subtitle || '',
    keywords: service.seo?.keywords?.join(', ') || '',
  }
}

// Revalidate every 60 seconds
export const revalidate = 60

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  // Fetch service detail from Sanity
  const service = await client.fetch(
    `*[_type == "serviceDetailPage" && slug.current == $slug && isActive == true][0]{
      _id,
      title,
      slug,
      category,
      icon,
      hero{
        badge,
        title,
        subtitle,
        backgroundImage
      },
      overview{
        title,
        description
      },
      solutions[]{
        id,
        icon,
        title,
        description,
        features
      },
      keyFeatures{
        title,
        subtitle,
        features[]{
          icon,
          title,
          description
        }
      },
      useCases{
        title,
        cases[]{
          title,
          description,
          image
        }
      },
      process{
        title,
        subtitle,
        steps[]{
          number,
          title,
          description,
          icon
        }
      },
      technologies{
        title,
        items[]{
          name,
          icon,
          description
        }
      },
      cta{
        title,
        description,
        buttonText,
        buttonLink
      }
    }`,
    { slug }
  )

  if (!service) {
    notFound()
  }

  // Get color scheme based on category
  const colorSchemes = {
    drone: {
      primary: 'red',
      gradient: 'from-red-600 via-red-700 to-red-800',
      text: 'text-red-600',
      bg: 'bg-red-600',
      hover: 'hover:bg-red-700',
    },
    software: {
      primary: 'blue',
      gradient: 'from-blue-600 via-blue-700 to-blue-800',
      text: 'text-blue-600',
      bg: 'bg-blue-600',
      hover: 'hover:bg-blue-700',
    },
    education: {
      primary: 'purple',
      gradient: 'from-purple-600 via-purple-700 to-purple-800',
      text: 'text-purple-600',
      bg: 'bg-purple-600',
      hover: 'hover:bg-purple-700',
    },
  }

  const colors = colorSchemes[service.category as keyof typeof colorSchemes] || colorSchemes.drone
  const HeroIcon = getIcon(service.icon || 'Camera')

  const heroImage = service.hero?.backgroundImage
    ? urlFor(service.hero.backgroundImage).width(1920).height(600).url()
    : 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1920&h=600&fit=crop'

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className={`relative py-20 bg-gradient-to-br ${colors.gradient} text-white overflow-hidden`}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float-delayed" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/services" className={`inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors group`}>
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-6">
              {service.hero?.badge && (
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/30">
                  {service.hero.badge}
                </span>
              )}
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border-2 border-white/30">
                <HeroIcon className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {service.hero?.title || service.title}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {service.hero?.subtitle || service.overview?.description}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      {service.overview && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {service.overview.title && (
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {service.overview.title}
                </h2>
              )}
              <p className="text-gray-600 text-lg leading-relaxed">
                {service.overview.description}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Solutions Section */}
      {service.solutions && service.solutions.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Solutions
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.solutions.map((solution: any, index: number) => {
                const SolutionIcon = getIcon(solution.icon)
                return (
                  <div key={solution.id || index} className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
                    <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <SolutionIcon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {solution.description}
                    </p>
                    {solution.features && solution.features.length > 0 && (
                      <ul className="space-y-2">
                        {solution.features.map((feature: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle2 className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Key Features Section */}
      {service.keyFeatures && service.keyFeatures.features && service.keyFeatures.features.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {service.keyFeatures.title || 'Key Features'}
              </h2>
              {service.keyFeatures.subtitle && (
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  {service.keyFeatures.subtitle}
                </p>
              )}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.keyFeatures.features.map((feature: any, index: number) => {
                const FeatureIcon = getIcon(feature.icon)
                return (
                  <div key={index} className="flex gap-4 p-6 bg-white rounded-lg">
                    <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <FeatureIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {service.cta && (
        <section className={`py-20 bg-gradient-to-br ${colors.gradient} text-white`}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {service.cta.title || 'Ready to Get Started?'}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {service.cta.description || 'Contact us today to learn more about how we can help.'}
            </p>
            <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              <Link href={service.cta.buttonLink || '/contact'}>
                {service.cta.buttonText || 'Contact Us'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      )}
    </div>
  )
}
