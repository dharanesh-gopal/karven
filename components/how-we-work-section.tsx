"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { useSanityData } from "@/hooks/useSanityData"

interface ProcessStep {
  _id: string
  title: string
  description: string
  stepNumber: number
  icon?: string
}

const fallbackSteps = [
  {
    _id: "1",
    stepNumber: 1,
    title: "Strategic Consultation",
    description: "We partner with you to identify specific operational challenges.",
  },
  {
    _id: "2",
    stepNumber: 2,
    title: "AI-Driven System Design",
    description: "Developing custom solutions with proprietary AI models.",
  },
  {
    _id: "3",
    stepNumber: 3,
    title: "Precision Deployment",
    description: "Execution led by DGCA-certified pilots.",
  },
  {
    _id: "4",
    stepNumber: 4,
    title: "Advanced Analytics & Reporting",
    description: "Processing raw data into actionable business results.",
  },
]

export function HowWeWorkSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const { data } = useSanityData<ProcessStep[]>(
    '*[_type == "processStep" && isActive == true] | order(stepNumber asc)',
    {},
    fallbackSteps
  )

  const processSteps = data || fallbackSteps

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Heading - Centered */}
        <div className="text-center mb-16">
          <h2 
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            How We Work
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <h3 
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight transition-all duration-1000 delay-200 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              Intelligent Integration: From Insight to Impact
            </h3>

            {/* Description */}
            <p 
              className={`text-lg text-gray-600 leading-relaxed transition-all duration-1000 delay-300 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              We follow a rigorous, data-driven methodology to ensure that every drone deployment is backed by powerful AI intelligence.
            </p>

            {/* Process Steps List */}
            <div className="space-y-6 pt-4">
              {processSteps.map((step, index) => (
                <div 
                  key={step._id} 
                  className={`flex gap-4 transition-all duration-1000 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  {/* Number */}
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-900 font-semibold text-sm">
                        {step.stepNumber || index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h4 className="text-gray-900 font-semibold text-lg mb-1">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div 
            className={`relative transition-all duration-1000 delay-500 ${
              isVisible 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative w-full aspect-square">
              <Image
                src="/K logo with services.png"
                alt="K logo with services"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
