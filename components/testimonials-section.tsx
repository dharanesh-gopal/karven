"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"
import { useEffect, useRef } from "react"
import { useSanityData } from "@/hooks/useSanityData"
import { urlFor } from "@/sanity/lib/image"

interface Testimonial {
  _id: string
  name: string
  role: string
  company?: string
  content: string
  avatar?: string
  image?: {
    asset: {
      _ref: string
      _type: string
    }
  }
}

interface TestimonialsSectionData {
  title: string
  subtitle?: string
  showFeaturedOnly?: boolean
}

const fallbackTestimonials: Testimonial[] = [
  {
    _id: "1",
    name: "Rajesh Kumar",
    role: "Agricultural Enterprise Owner",
    company: "Maharashtra",
    content: "Karvensen's drone technology revolutionized our farm operations. Real-time crop monitoring and precise spraying increased our yield by 35%. The team's support has been outstanding.",
    avatar: "/indian-professional-man.png",
  },
  {
    _id: "2",
    name: "Dr. Priya Sharma",
    role: "Dean of Education Technology",
    content: "Their LMS platform transformed our online education delivery. The AI-powered features and intuitive design made virtual learning engaging and effective for thousands of students.",
    avatar: "/indian-woman-professional.png",
  },
  {
    _id: "3",
    name: "Prof. Venkat Rao",
    role: "Engineering College Principal",
    content: "The drone awareness workshop at our college was exceptional. Students gained hands-on experience and practical knowledge that will shape their careers in emerging technologies.",
    avatar: "/indian-professor-man.jpg",
  },
  {
    _id: "4",
    name: "Amit Patel",
    role: "CTO",
    company: "Tech Solutions Pvt Ltd",
    content: "The AI-powered analytics solution provided invaluable insights into our business operations. We've seen a 40% improvement in decision-making speed and accuracy.",
    avatar: "/indian-professional-man.png",
  },
  {
    _id: "5",
    name: "Sarah Menon",
    role: "Operations Manager",
    company: "Infrastructure Corp",
    content: "Their industrial drone inspection services saved us significant time and costs. The detailed 3D mapping and thermal imaging capabilities are game-changing.",
    avatar: "/indian-woman-professional.png",
  },
  {
    _id: "6",
    name: "Vikram Singh",
    role: "Event Management Director",
    content: "The crowd monitoring drone solution for our events has been remarkable. Real-time aerial intelligence helps us ensure safety and manage large gatherings efficiently.",
    avatar: "/indian-professor-man.jpg",
  },
  {
    _id: "7",
    name: "Anjali Reddy",
    role: "Urban Planning Consultant",
    content: "Working with Karvensen on our smart city project was a pleasure. Their geospatial expertise and innovative approach delivered results beyond our expectations.",
    avatar: "/indian-woman-professional.png",
  },
  {
    _id: "8",
    name: "Karthik Iyer",
    role: "Training Head",
    company: "Aviation Academy",
    content: "The drone training program equipped our team with essential skills. Professional instructors and hands-on practice made learning both effective and enjoyable.",
    avatar: "/indian-professional-man.png",
  },
]

export function TestimonialsSection() {
  const { data: sectionData } = useSanityData<TestimonialsSectionData>(
    `*[_type == "testimonialsSection" && isActive == true][0]{
      title,
      subtitle,
      showFeaturedOnly
    }`,
    {},
    { title: "Trusted by Organizations Nationwide" }
  )

  const { data: testimonialsData } = useSanityData<Testimonial[]>(
    sectionData?.showFeaturedOnly 
      ? `*[_type == "testimonial" && featured == true] | order(_createdAt desc) {
          _id,
          name,
          role,
          company,
          content,
          image {
            asset
          }
        }`
      : `*[_type == "testimonial"] | order(_createdAt desc) {
          _id,
          name,
          role,
          company,
          content,
          image {
            asset
          }
        }`,
    {},
    fallbackTestimonials
  )

  // Use fallback if data is empty or undefined
  const testimonials = (testimonialsData && testimonialsData.length > 0) ? testimonialsData : fallbackTestimonials
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer || !testimonials || testimonials.length === 0) return

    let animationId: number
    let scrollPosition = 0

    const scroll = () => {
      scrollPosition += 0.5
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollPosition
        
        // Reset to start when reaching the end
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0
        }
      }
      animationId = requestAnimationFrame(scroll)
    }

    // Start animation after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      animationId = requestAnimationFrame(scroll)
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [testimonials])

  return (
    <section className="py-16 bg-gray-50 border-b border-gray-200 min-h-[500px]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            {sectionData?.title || "Trusted by Organizations Nationwide"}
          </h2>
          {sectionData?.subtitle && (
            <p className="text-gray-600 text-lg">
              {sectionData.subtitle}
            </p>
          )}
        </div>

        <div className="overflow-hidden min-h-[300px] relative">
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {/* Duplicate testimonials for seamless loop */}
            {testimonials && testimonials.length > 0 ? (
              [...testimonials, ...testimonials].map((testimonial, index) => (
                <Card 
                  key={`${testimonial._id}-${index}`} 
                  className="relative flex-shrink-0 w-[380px] hover:shadow-lg transition-shadow bg-white border-gray-200"
                >
                  <CardContent className="pt-8">
                    <Quote className="absolute top-6 left-6 h-8 w-8 text-gray-200" />
                    <p className="mb-6 text-gray-600 relative z-10 pl-4 leading-relaxed text-sm">
                      {testimonial.content}
                    </p>
                    <div className="flex items-center gap-3 border-t border-gray-200 pt-4">
                      <Avatar className="h-10 w-10">
                      {testimonial.image?.asset ? (
                        <AvatarImage 
                          src={urlFor(testimonial.image.asset).width(80).height(80).url()} 
                          alt={testimonial.name} 
                        />
                      ) : testimonial.avatar ? (
                        <AvatarImage 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                        />
                      ) : null}
                      <AvatarFallback className="bg-blue-600 text-white">
                          {testimonial.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-sm text-gray-900">{testimonial.name}</p>
                        <p className="text-xs text-gray-600">
                          {testimonial.role}{testimonial.company ? `, ${testimonial.company}` : ''}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-gray-500 text-center w-full">No testimonials available</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
