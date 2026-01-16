import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "KarVenSen's AI solutions transformed our agricultural operations. The drone analytics helped us increase crop yield by 40%.",
    author: "Rajesh Kumar",
    role: "Agricultural Enterprise Owner",
    avatar: "/indian-professional-man.png",
  },
  {
    quote:
      "Their LMS platform revolutionized how we deliver training. The intuitive interface and AI-powered recommendations are game-changers.",
    author: "Priya Sharma",
    role: "Director of Learning, Tech Corp",
    avatar: "/indian-woman-professional.png",
  },
  {
    quote:
      "The drone awareness program they conducted for our college was exceptional. Students gained practical knowledge that's invaluable.",
    author: "Dr. Venkat Rao",
    role: "Principal, Engineering College",
    avatar: "/indian-professor-man.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Trusted by Industry Leaders</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            See how organizations are transforming with our AI and drone solutions
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="relative bg-card">
              <CardContent className="pt-8">
                <Quote className="absolute top-6 left-6 h-8 w-8 text-primary/20" />
                <p className="mb-6 text-muted-foreground italic relative z-10 pl-4">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
