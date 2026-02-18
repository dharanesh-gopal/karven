import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { HowWeWorkSection } from "@/components/how-we-work-section"
import { ApplicationsSection } from "@/components/applications-section"
import { IndustryInsightsSection } from "@/components/industry-insights-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ApplicationsSection />
      <IndustryInsightsSection />
      <HowWeWorkSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
