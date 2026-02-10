"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useSanityData } from "@/hooks/useSanityData"
import { urlFor } from "@/sanity/lib/image"

interface StatData {
  _id: string
  label: string
  value: string
  order: number
}

interface GalleryImage {
  _key: string
  asset: {
    _ref: string
    _type: string
  }
  alt: string
}

interface GalleryData {
  title: string
  subtitle?: string
  images: GalleryImage[]
  autoplayInterval?: number
}

const fallbackData: GalleryData = {
  title: "Built in India.",
  subtitle: "Powered by Innovation.",
  images: [
    { _key: "1", asset: { _ref: "", _type: "reference" }, alt: "Educational drone" },
    { _key: "2", asset: { _ref: "", _type: "reference" }, alt: "Training program 1" },
    { _key: "3", asset: { _ref: "", _type: "reference" }, alt: "Training program 2" },
    { _key: "4", asset: { _ref: "", _type: "reference" }, alt: "Training program 3" },
  ],
  autoplayInterval: 3,
}

const fallbackImages = [
  { src: "/edu drone.png", alt: "Educational drone" },
  { src: "/train-1.jpeg", alt: "Training program 1" },
  { src: "/train-2.jpeg", alt: "Training program 2" },
  { src: "/train-3.jpeg", alt: "Training program 3" },
]

export function FeaturesSection() {
  const { data: galleryData, loading } = useSanityData<GalleryData>(
    `*[_type == "gallerySection" && isActive == true][0]{
      title,
      subtitle,
      images[] {
        _key,
        asset,
        alt
      },
      autoplayInterval
    }`,
    {},
    fallbackData
  )

  // Fetch stats from Sanity
  const { data: statsData } = useSanityData<StatData[]>(
    `*[_type == "stats" && isActive == true] | order(order asc) {
      _id,
      label,
      value,
      order
    }`
  )

  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Use Sanity images if available, otherwise use fallback
  const images = galleryData?.images && galleryData.images.length > 0 && galleryData.images[0].asset?._ref
    ? galleryData.images.map((img) => ({
        src: urlFor(img.asset).url(),
        alt: img.alt || "Gallery image"
      }))
    : fallbackImages

  const autoplayInterval = (galleryData?.autoplayInterval || 3) * 1000

  // Auto-play slideshow
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
      {/* Solid color background for bottom half only */}
      <div className="absolute top-1/2 left-0 right-0 bottom-0 bg-[#050d19] -z-0" />
      
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }} />
      
      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            {galleryData?.title || "Built in India."}
            <br />
            <span className="text-gray-600">{galleryData?.subtitle || "Powered by Innovation."}</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto mb-16">
          {/* Image Container */}
          <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100">
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-cover transition-opacity duration-500"
              priority
            />
          </div>

          {/* Navigation Buttons */}
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

          {/* Indicator Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Content in the dark background section */}
        <div className="max-w-5xl mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 md:divide-x divide-gray-700">
            {/* Drone Stats Column */}
            <div className="space-y-8 px-6">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                  {statsData?.[0]?.value || '50,000+'}
                </div>
                <div className="text-sm sm:text-base text-gray-300">
                  {statsData?.[0]?.label || 'Acres Scanned & Analyzed'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                  {statsData?.[1]?.value || '5TB+'}
                </div>
                <div className="text-sm sm:text-base text-gray-300">
                  {statsData?.[1]?.label || 'Aerial Data Processed'}
                </div>
              </div>
            </div>

            {/* AI Stats Column */}
            <div className="space-y-8 px-6">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                  {statsData?.[2]?.value || '98%'}
                </div>
                <div className="text-sm sm:text-base text-gray-300">
                  {statsData?.[2]?.label || 'Accuracy in Defect Detection'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                  {statsData?.[3]?.value || '500+'}
                </div>
                <div className="text-sm sm:text-base text-gray-300">
                  {statsData?.[3]?.label || 'AI Models Deployed'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
