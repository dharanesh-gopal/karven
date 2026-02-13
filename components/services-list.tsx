'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import {
  Camera,
  Video,
  Sprout,
  Package,
  Microchip,
  Box,
  BarChart3,
  Radio,
  Cpu,
  Cloud,
  BookOpen,
  GraduationCap,
  Plane,
  Server,
  Map,
  Ruler,
  Shield,
  Target,
  Zap,
} from 'lucide-react'

interface ServiceItemData {
  title: string
  slug: { current: string }
  category: string
  icon: string
  tagline?: string
  description: string
  features?: string[]
  applications?: string[]
}

interface ServicesListProps {
  services: ServiceItemData[]
  colorScheme: 'red' | 'blue' | 'purple'
  categorySlugMap?: Record<string, string>
}

// Helper function to get icon component from icon name
const getServiceIcon = (iconName: string) => {
  const icons: Record<string, any> = {
    Camera,
    Video,
    Sprout,
    Package,
    Microchip,
    Box,
    BarChart3,
    Radio,
    Cpu,
    Cloud,
    BookOpen,
    GraduationCap,
    Plane,
    Server,
    Map,
    Ruler,
    Shield,
    Target,
    Zap,
  }
  return icons[iconName] || Camera
}

export function ServicesList({ services, colorScheme, categorySlugMap }: ServicesListProps) {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const colors = {
    red: {
      gradient: 'hover:from-red-50',
      border: 'hover:border-red-200',
      bg: 'bg-red-600',
      hoverBg: 'group-hover:bg-red-600',
      text: 'text-red-600',
      hoverText: 'group-hover:text-red-600',
      shadow: 'shadow-red-600/50',
      hoverShadow: 'group-hover:shadow-red-600/30',
    },
    blue: {
      gradient: 'hover:from-blue-50',
      border: 'hover:border-blue-200',
      bg: 'bg-gradient-to-br from-blue-600 to-blue-700',
      hoverBg: 'group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-blue-700',
      text: 'text-blue-600',
      hoverText: 'group-hover:text-blue-600',
      shadow: 'shadow-blue-600/50',
      hoverShadow: 'group-hover:shadow-blue-600/30',
    },
    purple: {
      gradient: 'hover:from-purple-50',
      border: 'hover:border-purple-200',
      bg: 'bg-gradient-to-br from-purple-600 to-purple-700',
      hoverBg: 'group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-purple-700',
      text: 'text-purple-600',
      hoverText: 'group-hover:text-purple-600',
      shadow: 'shadow-purple-600/50',
      hoverShadow: 'group-hover:shadow-purple-600/30',
    },
  }

  const color = colors[colorScheme]

  return (
    <div className="space-y-4">
      {services.map((service) => {
        const ServiceIcon = getServiceIcon(service.icon)
        const serviceId = typeof service.slug === 'string' ? service.slug : service.slug?.current
        const serviceLink = categorySlugMap?.[serviceId || ''] || `/contact`

        return (
          <Link
            key={serviceId}
            href={serviceLink}
            className={`flex items-start gap-4 p-4 rounded-lg hover:bg-gradient-to-r ${color.gradient} hover:to-transparent transition-all duration-300 group cursor-pointer border border-transparent ${color.border} hover:shadow-md`}
            onMouseEnter={() => setSelectedService(serviceId || null)}
            onMouseLeave={() => setSelectedService(null)}
          >
            <div className="flex-shrink-0 mt-1">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3 ${
                  selectedService === serviceId
                    ? `${color.bg} text-white shadow-lg ${color.shadow}`
                    : `bg-gray-100 text-gray-600 ${color.hoverBg} group-hover:text-white group-hover:shadow-lg ${color.hoverShadow}`
                }`}
              >
                <ServiceIcon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>
            <div className="flex-1">
              <h3
                className={`text-lg font-semibold mb-1 transition-colors duration-300 flex items-center gap-2 ${
                  selectedService === serviceId ? color.text : `text-gray-900 ${color.hoverText}`
                }`}
              >
                {service.title}
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" />
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                {service.description}
              </p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
