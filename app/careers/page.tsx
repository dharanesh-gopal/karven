import type { Metadata } from "next"
import Link from "next/link"
import { MapPin, Clock, Briefcase, ArrowRight, Users, Zap, Heart, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Careers | KarVenSen",
  description:
    "Join KarVenSen and work on cutting-edge AI and drone technology. Explore open positions in AI engineering, software development, and more.",
}

const benefits = [
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Clear career paths and continuous learning opportunities in emerging technologies.",
  },
  {
    icon: Zap,
    title: "Cutting-Edge Tech",
    description: "Work with the latest in AI, machine learning, and drone technology.",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs for you and your family.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with passionate professionals in a supportive team environment.",
  },
]

const jobs = [
  {
    id: "ai-engineer",
    title: "AI/ML Engineer",
    department: "AI Research",
    location: "Hyderabad",
    type: "Full-time",
    experience: "3-5 years",
    description:
      "Design and implement machine learning models for computer vision, NLP, and predictive analytics applications.",
    requirements: [
      "Strong Python programming skills",
      "Experience with TensorFlow or PyTorch",
      "Knowledge of computer vision algorithms",
      "M.Tech/PhD in CS or related field preferred",
    ],
  },
  {
    id: "drone-engineer",
    title: "Drone Systems Engineer",
    department: "Drone Technology",
    location: "Hyderabad",
    type: "Full-time",
    experience: "2-4 years",
    description:
      "Develop drone control systems, flight planning software, and integration with AI analytics platforms.",
    requirements: [
      "Experience with drone flight controllers",
      "Knowledge of GIS and mapping systems",
      "Understanding of aviation regulations",
      "DGCA drone pilot certification is a plus",
    ],
  },
  {
    id: "fullstack-developer",
    title: "Full Stack Developer",
    department: "Product Engineering",
    location: "Hyderabad / Remote",
    type: "Full-time",
    experience: "2-4 years",
    description: "Build scalable web applications for our LMS, ERP, and enterprise products using modern tech stack.",
    requirements: [
      "Proficiency in React and Node.js",
      "Experience with cloud services (AWS/GCP)",
      "Knowledge of database design",
      "Understanding of CI/CD practices",
    ],
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Hyderabad",
    type: "Full-time",
    experience: "3-5 years",
    description: "Design and maintain cloud infrastructure, implement CI/CD pipelines, and ensure system reliability.",
    requirements: [
      "Experience with AWS or GCP",
      "Proficiency in Docker and Kubernetes",
      "Knowledge of Infrastructure as Code",
      "Strong scripting skills",
    ],
  },
  {
    id: "training-coordinator",
    title: "Training Program Coordinator",
    department: "Training & Outreach",
    location: "Hyderabad / Field",
    type: "Full-time",
    experience: "2-3 years",
    description: "Plan, coordinate, and execute drone awareness and technical training programs across India.",
    requirements: [
      "Experience in training program management",
      "Excellent communication skills",
      "Willingness to travel frequently",
      "Knowledge of drone technology is a plus",
    ],
  },
  {
    id: "sales-executive",
    title: "Enterprise Sales Executive",
    department: "Business Development",
    location: "Hyderabad / Delhi",
    type: "Full-time",
    experience: "3-5 years",
    description: "Drive enterprise sales for AI and software solutions, manage client relationships, and close deals.",
    requirements: [
      "B2B sales experience in IT services",
      "Strong negotiation and presentation skills",
      "Understanding of AI and enterprise software",
      "Track record of meeting sales targets",
    ],
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-400 text-gray-900 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Users className="h-4 w-4" />
              We're Hiring
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-gray-900">
              Build the Future with <span className="text-gray-900">KarVenSen</span>
            </h1>
            <p className="text-lg text-gray-600 text-pretty">
              Join a team of innovators working on cutting-edge AI and drone technology. We're always looking for
              passionate individuals to help us transform industries.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4 text-gray-900">Why Work With Us</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-gray-400 transition-all">
                <div className="mb-4 mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-700">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-gray-900">Open Positions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore current opportunities to join our team</p>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-400 hover:shadow-lg transition-all">
                <div className="mb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <span className="inline-block px-3 py-1 rounded bg-gray-200 text-gray-900 text-sm">{job.experience}</span>
                  </div>
                </div>
                <p className="mb-4 text-gray-600">{job.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2 text-gray-900">Requirements:</h4>
                  <ul className="grid sm:grid-cols-2 gap-1 text-sm text-gray-600">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-gray-700 mt-1">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href={`/contact?position=${job.id}`} className="inline-flex items-center px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition-colors">
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Don't See a Perfect Match?</h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg mb-8">
            We're always interested in hearing from talented individuals. Send us your resume and we'll keep you in mind
            for future opportunities.
          </p>
          <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-medium">
            Send Your Resume
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
