"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface FeaturesClientProps {
  title: string
  subtitle: string
  images: { src: string; alt: string }[]
  autoplayInterval: number
}

export function FeaturesClient({ title, subtitle, images, autoplayInterval }: FeaturesClientProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, autoplayInterval)

    return () => clearInterval(interval)
  }, [images.length, autoplayInterval])

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <section className="bg-white border-b border-gray-200 py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 right-0 bottom-0 bg-[#050d19] -z-0" />

      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }} />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            {title}
            <br />
            <span className="text-gray-600">{subtitle}</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100">
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-cover transition-opacity duration-500"
              priority
            />
          </div>

          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-gray-900" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'
                  }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
