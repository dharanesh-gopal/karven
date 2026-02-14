"use client"

import { ChevronDown } from "lucide-react"
import Link from "next/link"

interface HeroClientProps {
  title: string
  subtitle: string
  videoUrl: string
  buttonText: string
  buttonLink: string
}

export function HeroClient({ title, subtitle, videoUrl, buttonText, buttonLink }: HeroClientProps) {
  return (
    <section className="relative overflow-hidden h-screen flex flex-col items-center justify-center isolate">
      {/* Video Background - Contained within section */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none -z-10"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none -z-10" />

      {/* Main Headline - Center */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="text-center px-6 md:px-8 lg:px-12 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 font-medium">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Explore Section - Bottom Center */}
      <div className="relative z-10 pb-12">
        <Link href={buttonLink} className="block text-center group">
          <p className="text-white text-lg font-medium tracking-wider mb-4 group-hover:text-primary transition-colors">
            {buttonText}
          </p>
          <div className="animate-bounce group-hover:scale-110 transition-transform">
            <ChevronDown className="h-8 w-8 text-white mx-auto group-hover:text-primary transition-colors" />
          </div>
        </Link>
      </div>
    </section>
  )
}
