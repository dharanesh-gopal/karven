import { MapPin, Briefcase, Users, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function CareersPage() {
  const jobs = [
    {
      id: 1,
      title: "AI/ML Engineer",
      department: "Engineering",
      location: "Hyderabad",
      type: "Full-time",
      description: "Build cutting-edge AI and machine learning solutions for enterprise clients.",
    },
    {
      id: 2,
      title: "Drone Systems Engineer",
      department: "Engineering",
      location: "Hyderabad",
      type: "Full-time",
      description: "Design and optimize agricultural drone systems for precision farming.",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      department: "Development",
      location: "Hyderabad",
      type: "Full-time",
      description: "Develop web and mobile applications for our LMS and enterprise platforms.",
    },
    {
      id: 4,
      title: "Business Development Manager",
      department: "Sales",
      location: "Pan-India",
      type: "Full-time",
      description: "Expand our reach across India and build strategic partnerships.",
    },
    {
      id: 5,
      title: "Technical Support Engineer",
      department: "Support",
      location: "Hyderabad",
      type: "Full-time",
      description: "Provide technical support and training to our clients.",
    },
    {
      id: 6,
      title: "Content & Marketing Specialist",
      department: "Marketing",
      location: "Hyderabad",
      type: "Full-time",
      description: "Create engaging content and drive our digital marketing initiatives.",
    },
  ]

  const values = [
    {
      title: "Innovation",
      description: "We encourage creative thinking and push the boundaries of what's possible.",
    },
    {
      title: "Growth",
      description: "Continuous learning and career development opportunities for every team member.",
    },
    {
      title: "Collaboration",
      description: "Work with talented individuals from diverse backgrounds and experiences.",
    },
    {
      title: "Impact",
      description: "Make a real difference in agriculture, education, and business through technology.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 border-b bg-gradient-to-br from-indigo-500/5 via-white to-indigo-500/5 dark:from-indigo-500/10 dark:via-black dark:to-indigo-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Join Our <span className="text-indigo-500">Team</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Be part of a mission to transform agriculture, education, and business through cutting-edge AI and drone technology.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 border-b">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Why Join Karvensen?</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Work on meaningful projects, grow your skills, and make an impact on India's future.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
                <h3 className="text-lg font-semibold mb-2 text-indigo-600 dark:text-indigo-400">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Open Positions</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We're hiring talented individuals to join our growing team.
            </p>
          </div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {job.department}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                      <span className="inline-flex items-center rounded-full bg-indigo-500/10 px-2.5 py-0.5 text-xs font-medium text-indigo-600 dark:text-indigo-400">
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{job.description}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:gap-3 transition-all"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-4">Don't see a position that fits?</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-indigo-500 text-white font-medium hover:bg-indigo-600"
            >
              Send Us Your Resume
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Our Culture</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              At Karvensen, we believe in creating an inclusive environment where innovation thrives, collaboration is valued, 
              and every team member has the opportunity to grow and make an impact.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div>
                <Users className="h-8 w-8 text-indigo-500 mx-auto mb-2" />
                <p className="font-semibold">50+ Team Members</p>
              </div>
              <div>
                <div className="h-8 w-8 text-indigo-500 mx-auto mb-2 flex items-center justify-center text-xl">🌍</div>
                <p className="font-semibold">Pan-India Operations</p>
              </div>
              <div>
                <Briefcase className="h-8 w-8 text-indigo-500 mx-auto mb-2" />
                <p className="font-semibold">Multiple Departments</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CareersPage
