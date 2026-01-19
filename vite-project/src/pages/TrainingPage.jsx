import { Tractor, GraduationCap, Award, Users, CheckCircle2, ArrowRight, Clock, MapPin, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'

function TrainingPage() {
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 border-b bg-gradient-to-br from-indigo-500/5 via-white to-indigo-500/5 dark:from-indigo-500/10 dark:via-black dark:to-indigo-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Training & <span className="text-indigo-500">Awareness Programs</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Building skills and awareness in drone technology, AI, and emerging technologies across India.
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          {programs.map((program, index) => (
            <div key={program.id} className={`mb-16 ${index !== 0 ? 'border-t pt-16' : ''}`}>
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10 mb-4">
                    <program.icon className="h-6 w-6 text-indigo-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{program.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-indigo-500" />
                      <div>
                        <p className="font-semibold text-sm">Duration</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{program.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-indigo-500" />
                      <div>
                        <p className="font-semibold text-sm">Format</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{program.format}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-indigo-500" />
                      <div>
                        <p className="font-semibold text-sm">Certification</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{program.certification}</p>
                      </div>
                    </div>
                  </div>

                  <Link to="/contact" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:gap-3 transition-all">
                    Enroll Now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div>
                  <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg">
                    <h4 className="font-semibold mb-4">Program Features</h4>
                    <div className="space-y-3 mb-8">
                      {program.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
                      <p className="font-semibold text-sm mb-2">Target Audience</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{program.audience}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-indigo-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Impact</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Making a real difference through education and awareness programs
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join a Program?</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg mb-8">
            Contact us to learn more about enrollment, schedules, and how we can customize programs for your organization.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center h-10 px-6 rounded-lg bg-indigo-500 text-white font-medium">
            Get in Touch
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default TrainingPage
