import { Quote } from 'lucide-react'

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Karvensen's drone technology revolutionized our farm operations. Real-time crop monitoring and precise spraying increased our yield by 35%. The team's support has been outstanding.",
      author: "Rajesh Kumar",
      role: "Agricultural Enterprise Owner, Maharashtra",
      avatar: "/placeholder.svg",
    },
    {
      quote: "Their LMS platform transformed our online education delivery. The AI-powered features and intuitive design made virtual learning engaging and effective for thousands of students.",
      author: "Dr. Priya Sharma",
      role: "Dean of Education Technology",
      avatar: "/placeholder.svg",
    },
    {
      quote: "The drone awareness workshop at our college was exceptional. Students gained hands-on experience and practical knowledge that will shape their careers in emerging technologies.",
      author: "Prof. Venkat Rao",
      role: "Engineering College Principal",
      avatar: "/placeholder.svg",
    },
  ]

  return (
    <section className="py-24 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Trusted by Organizations Nationwide</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Real results from real clients - see how Karvensen is making an impact across industries.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="relative p-8 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow">
              <Quote className="absolute top-6 left-6 h-8 w-8 text-indigo-500/20" />
              <p className="mb-6 text-gray-600 dark:text-gray-400 relative z-10 pl-4 leading-relaxed">{testimonial.quote}</p>
              <div className="flex items-center gap-3 border-t border-gray-200 dark:border-gray-800 pt-4">
                <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
                  {testimonial.author[0]}
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.author}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
