"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

function AnimatedCounter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count >= end) return
    
    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = end / steps
    const stepDuration = duration / steps
    
    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment
        return next >= end ? end : next
      })
    }, stepDuration)
    
    return () => clearInterval(timer)
  }, [end, count])

  return (
    <>
      {Math.floor(count)}{suffix}
    </>
  )
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center border-b border-gray-200 bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="container relative z-10 mx-auto px-4 py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl xl:text-7xl animate-fade-up">
            Transforming Industries with{" "}
            <span className="text-gray-900">AI & Drone Technology</span>
          </h1>

          {/* Subtext */}
          <p className="mb-10 text-lg text-gray-600 sm:text-xl max-w-2xl mx-auto animate-fade-up">
            Pioneering intelligent solutions in AI software, agricultural drones, enterprise systems, and cloud infrastructure. 
            Built in India, powered by innovation.
          </p>

          {/* CTAs */}
          <div className="flex items-center justify-center animate-fade-up">
            <Link 
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white cursor-pointer border border-gray-900 rounded-md px-8 py-3 text-base font-medium transition-all duration-200 hover:bg-green-400 hover:text-gray-900 hover:translate-x-[-0.25rem] hover:translate-y-[-0.25rem] hover:shadow-[0.25rem_0.25rem_0_0_rgb(17,24,39)] active:translate-x-0 active:translate-y-0 active:shadow-none group"
            >
              Explore Services
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Key highlights */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground animate-fade-up">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span>AI-Powered Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span>Drone Technology for Farmers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span>Make in India Initiative</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4 max-w-4xl mx-auto animate-fade-up">
          <div className="text-center p-4 rounded-lg bg-card border">
            <div className="text-3xl font-bold text-white sm:text-4xl">
              <AnimatedCounter end={2023} />
            </div>
            <div className="mt-1 text-sm text-white">Founded</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-card border">
            <div className="text-3xl font-bold text-white sm:text-4xl">
              <AnimatedCounter end={150} suffix="+" />
            </div>
            <div className="mt-1 text-sm text-white">Drones Deployed</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-card border">
            <div className="text-3xl font-bold text-white sm:text-4xl">
              <AnimatedCounter end={100} suffix="+" />
            </div>
            <div className="mt-1 text-sm text-white">Workshops Conducted</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-card border">
            <div className="text-3xl font-bold text-white sm:text-4xl">
              <AnimatedCounter end={25} suffix="+" />
            </div>
            <div className="mt-1 text-sm text-white">Enterprise Clients</div>
          </div>
        </div>
      </div>
    </section>
  )
}
