"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source
            src="https://videos.pexels.com/video-files/6153054/6153054-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-background/80 dark:bg-background/85" />
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-background" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="container relative z-10 mx-auto px-4 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary animate-fade-up">
            <Sparkles className="h-4 w-4" />
            <span>AI-First Technology Solutions</span>
          </div>

          <div className="mb-8 flex justify-center animate-fade-up animation-delay-100">
            <Image
              src="/karvensen-hero-logo.png"
              alt="KarVenSen - Professional AI & Drone Services"
              width={500}
              height={350}
              className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto"
              priority
            />
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl animate-fade-up animation-delay-200 text-balance">
            AI-Driven Drone & Software Solutions for a <span className="text-primary">Smarter Future</span>
          </h1>

          {/* Subtext */}
          <p className="mb-10 text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto animate-fade-up animation-delay-400 text-pretty">
            Empowering enterprises with cutting-edge AI, intelligent drone systems, LMS, ERP, and cloud solutions.
            Transform your business with next-generation technology.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-600">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/services">
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
              <Link href="/contact">Book a Demo</Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4 animate-fade-up animation-delay-600">
          {[
            { value: "50+", label: "AI Projects Delivered" },
            { value: "100+", label: "Enterprise Clients" },
            { value: "10K+", label: "Training Participants" },
            { value: "99.9%", label: "System Uptime" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-primary sm:text-4xl">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
