import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-balance">
          Ready to Transform Your Business with AI?
        </h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg mb-8">
          Let's discuss how our AI and drone solutions can drive innovation and efficiency in your organization.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
          >
            <Link href="/services">View Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
