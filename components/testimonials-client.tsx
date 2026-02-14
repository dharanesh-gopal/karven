"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"
import { useEffect, useRef } from "react"

interface Testimonial {
  _id: string
  name: string
  role: string
  company?: string
  content: string
  imageSrc?: string
}

interface TestimonialsClientProps {
  title: string
  subtitle?: string
  testimonials: Testimonial[]
}

export function TestimonialsClient({ title, subtitle, testimonials }: TestimonialsClientProps) {
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

        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0
        }
      }
      animationId = requestAnimationFrame(scroll)
    }

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
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-600 text-lg">
              {subtitle}
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
            {testimonials.length > 0 ? (
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
                        {testimonial.imageSrc && (
                          <AvatarImage
                            src={testimonial.imageSrc}
                            alt={testimonial.name}
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        )}
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
