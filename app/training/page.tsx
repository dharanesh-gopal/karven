import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tractor, GraduationCap, Award, Users, CheckCircle, ArrowRight, Clock, MapPin, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Training & Awareness Programs | KarVenSen",
  description:
    "Explore our drone awareness programs for farmers, technical workshops for schools and colleges, and professional skill development certifications.",
}

const programs = [
  {
    id: "farmers",
    icon: Tractor,
    title: "Farmer Drone Awareness Programs",
    description:
      "Empowering farmers with knowledge of drone technology for precision agriculture, crop monitoring, and sustainable farming practices.",
    features: [
      "Introduction to agricultural drones",
      "Crop health monitoring basics",
      "Precision spraying techniques",
      "Data interpretation for farming decisions",
      "Government schemes and subsidies",
      "Hands-on drone operation experience",
    ],
    duration: "2-3 Days",
    format: "On-site / Field Training",
    certification: "Certificate of Completion",
    audience: "Farmers, Agricultural Officers, Farm Managers",
  },
  {
    id: "schools",
    icon: GraduationCap,
    title: "School & College Technical Workshops",
    description:
      "Inspiring the next generation with practical exposure to AI, drones, and emerging technologies through interactive workshops.",
    features: [
      "Introduction to AI and Machine Learning",
      "Drone basics and flight principles",
      "Hands-on coding exercises",
      "Project-based learning activities",
      "Career guidance in technology",
      "Interactive demonstrations",
    ],
    duration: "1-5 Days",
    format: "On-campus Workshops",
    certification: "Participation Certificate",
    audience: "Students (Class 8-12), College Students, Teachers",
  },
  {
    id: "skills",
    icon: Award,
    title: "Skill Development & Certification",
    description:
      "Professional certification programs to build expertise in drone piloting, AI development, and enterprise software systems.",
    features: [
      "DGCA drone pilot certification prep",
      "AI/ML fundamentals and applications",
      "Cloud computing and DevOps",
      "Enterprise software development",
      "Project management methodologies",
      "Industry placement assistance",
    ],
    duration: "4-12 Weeks",
    format: "Hybrid (Online + Practical)",
    certification: "Professional Certification",
    audience: "Working Professionals, Graduates, Career Changers",
  },
]

const stats = [
  { value: "500+", label: "Farmers Trained" },
  { value: "50+", label: "Schools Reached" },
  { value: "200+", label: "Certified Professionals" },
  { value: "30+", label: "Districts Covered" },
]

const faqs = [
  {
    question: "Who can enroll in the training programs?",
    answer:
      "Our programs are designed for various audiences - farmers for agriculture programs, students from class 8 onwards for school workshops, and graduates or working professionals for skill development courses. Each program has specific eligibility criteria mentioned in the details.",
  },
  {
    question: "Are the certifications recognized?",
    answer:
      "Yes, our certifications are industry-recognized. For drone pilot certification, we prepare candidates for DGCA (Directorate General of Civil Aviation) examinations. Our technical certifications are valued by employers in the IT industry.",
  },
  {
    question: "Do you conduct programs at our location?",
    answer:
      "We offer on-site training for farmer awareness programs and school workshops. For larger groups or organizations, we can customize programs and conduct them at your preferred location.",
  },
  {
    question: "What is the cost of the programs?",
    answer:
      "Program costs vary based on duration, content, and format. We also partner with government bodies and CSR initiatives to offer subsidized or free programs for certain communities. Contact us for detailed pricing.",
  },
  {
    question: "Is financial assistance available?",
    answer:
      "We work with various government schemes and NGOs to provide subsidized training for eligible participants. We also offer flexible payment options for our professional certification programs.",
  },
]

export default function TrainingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Training Programs
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Drone Awareness & <span className="text-primary">Technical Training</span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Empowering communities with knowledge and skills in AI and drone technology. From farmers to students to
              professionals, we have programs designed for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary sm:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {programs.map((program, index) => (
              <div key={program.id} id={program.id} className="scroll-mt-24">
                <Card className="overflow-hidden bg-card">
                  <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    {/* Program Image/Visual */}
                    <div
                      className={`relative bg-muted/50 p-8 flex items-center justify-center min-h-[300px] ${index % 2 === 1 ? "lg:order-2" : ""}`}
                    >
                      <div className="text-center">
                        <div className="mb-6 mx-auto inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
                          <program.icon className="h-10 w-10 text-primary" />
                        </div>
                        <div className="flex flex-wrap justify-center gap-4 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            {program.duration}
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            {program.format}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Program Details */}
                    <div className={`p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                      <CardHeader className="p-0 mb-6">
                        <CardTitle className="text-2xl">{program.title}</CardTitle>
                        <CardDescription className="text-base mt-2">{program.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-0">
                        {/* Features */}
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3">What You'll Learn</h4>
                          <ul className="grid sm:grid-cols-2 gap-2">
                            {program.features.map((feature) => (
                              <li key={feature} className="flex items-start gap-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-4 mb-6 text-sm">
                          <div className="flex items-center gap-2">
                            <Award className="h-4 w-4 text-primary" />
                            <span className="text-muted-foreground">{program.certification}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-primary" />
                            <span className="text-muted-foreground">{program.audience}</span>
                          </div>
                        </div>

                        <Button asChild>
                          <Link href="/contact">
                            Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Programs */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Upcoming Programs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Register for our upcoming training sessions and workshops
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Farmer Drone Workshop",
                location: "Warangal, Telangana",
                date: "Feb 15-17, 2026",
                spots: "30 spots available",
              },
              {
                title: "AI/ML Bootcamp",
                location: "Online + Hyderabad",
                date: "Mar 1 - Apr 30, 2026",
                spots: "50 spots available",
              },
              {
                title: "School Tech Festival",
                location: "Multiple Schools, AP",
                date: "Feb 20-28, 2026",
                spots: "Open registration",
              },
            ].map((event) => (
              <Card key={event.title} className="bg-card">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{event.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{event.location}</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {event.date}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {event.spots}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/contact">Request Custom Training</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Common questions about our training programs</p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Ready to Empower Your Community?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg mb-8">
            Partner with us to bring AI and drone awareness programs to your organization, school, or community
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <Link href="/about">About KarVenSen</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
