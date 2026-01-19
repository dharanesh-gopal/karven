import { Target, Eye, Award, Users, Plane, Lightbulb, Shield, TrendingUp } from 'lucide-react'

function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Pioneering AI and drone solutions that solve real-world challenges for farmers, businesses, and educational institutions.",
    },
    {
      icon: Shield,
      title: "Quality & Reliability",
      description: "Enterprise-grade solutions with rigorous testing. Make in India quality with global standards.",
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Committed to empowering farmers and educating youth about emerging technologies through hands-on programs.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering exceptional results in every project - from AI software to drone deployments and training workshops.",
    },
  ]

  const milestones = [
    { year: "2023", event: "Karvensen founded by Karthika Venkatesan with a vision for AI-driven innovation" },
    { year: "2023", event: "Launched agricultural drone technology program with Make in India initiative" },
    { year: "2023", event: "Began educational workshops in schools and colleges across India" },
    { year: "2024", event: "Expanded to LMS and ERP solutions for enterprise clients" },
    { year: "2024", event: "Deployed 500+ drones for agricultural monitoring" },
    { year: "2025", event: "Reached 100+ workshops conducted and 50+ enterprise clients" },
  ]

  const impactStats = [
    { value: "500+", label: "Drones Deployed", icon: Plane },
    { value: "100+", label: "Workshops Conducted", icon: Users },
    { value: "50+", label: "Enterprise Clients", icon: Award },
    { value: "1000+", label: "People Trained", icon: Target },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 border-b bg-gradient-to-br from-indigo-500/5 via-white to-indigo-500/5 dark:from-indigo-500/10 dark:via-black dark:to-indigo-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 px-4 py-1.5 text-sm font-medium shadow-sm mb-6">
              <TrendingUp className="h-4 w-4 text-indigo-500" />
              <span>Innovating Since 2023</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              About <span className="text-indigo-500">Karvensen</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              Founded by <strong>Karthika Venkatesan</strong> in 2023, Karvensen is pioneering the future of AI software development, 
              agricultural drone technology, and enterprise solutions. We're on a mission to make cutting-edge technology 
              accessible and impactful across India.
            </p>
            <div className="inline-flex items-center gap-6 flex-wrap justify-center text-sm">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-indigo-500" />
                <span>Make in India</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-indigo-500" />
                <span>AI-First Approach</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-indigo-500" />
                <span>Community Focused</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 border-b">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            <div className="p-8 rounded-lg border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10">
                <Target className="h-6 w-6 text-indigo-500" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To empower businesses, farmers, and educational institutions with AI-driven technology and drone solutions. 
                We're committed to building in India, creating local opportunities, and making advanced technology 
                accessible to those who need it most.
              </p>
            </div>
            <div className="p-8 rounded-lg border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10">
                <Eye className="h-6 w-6 text-indigo-500" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To be India's leading technology partner, recognized for transforming agriculture through drones, 
                revolutionizing education with awareness programs, and delivering enterprise-grade AI solutions that 
                drive real business value and societal impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Core Values</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do at Karvensen
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="text-center p-8 rounded-lg bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800">
                <div className="mb-4 mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-indigo-500/10">
                  <value.icon className="h-7 w-7 text-indigo-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Journey</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Key milestones in our growth and expansion
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 mb-8">
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold">
                    {milestone.year.slice(-1)}
                  </div>
                  {index < milestones.length - 1 && <div className="w-0.5 h-16 bg-indigo-200 dark:bg-indigo-900 mt-4" />}
                </div>
                <div className="py-2">
                  <p className="font-semibold text-indigo-600 dark:text-indigo-400">{milestone.year}</p>
                  <p className="text-gray-700 dark:text-gray-300 mt-1">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-indigo-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Impact</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Measurable results in transforming agriculture, education, and business through technology
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-4 text-white/80" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
