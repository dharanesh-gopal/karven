import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Play, Cpu, Plane, BookOpen, Server, Cloud, GraduationCap } from 'lucide-react'
import ParticlesBackground from '../components/ParticlesBackground'
import TestimonialsSection from '../components/TestimonialsSection'

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center border-b">
        <ParticlesBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-background to-indigo-500/5" />

        <div className="container relative z-10 mx-auto px-4 py-20 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 px-4 py-1.5 text-sm font-medium shadow-sm animate-fade-up">
              <Sparkles className="h-4 w-4 text-indigo-500" />
              <span>AI-Driven Innovation Since 2023</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl animate-fade-up animation-delay-100">
              Transforming Industries with{" "}
              <span className="text-indigo-500">AI & Drone Technology</span>
            </h1>

            <p className="mb-10 text-lg text-gray-600 dark:text-gray-400 sm:text-xl max-w-2xl mx-auto animate-fade-up animation-delay-200">
              Pioneering intelligent solutions in AI software, agricultural drones, enterprise systems, and cloud infrastructure. 
              Built in India, powered by innovation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-300">
              <Link to="/services" className="inline-flex items-center justify-center w-full sm:w-auto h-10 px-6 rounded-lg bg-indigo-500 text-white font-medium group">
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto h-10 px-6 rounded-lg border border-gray-300 dark:border-gray-700 font-medium group">
                <Play className="mr-2 h-4 w-4" />
                Schedule a Demo
              </Link>
            </div>

            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600 dark:text-gray-400 animate-fade-up animation-delay-400">
              {['AI-Powered Solutions', 'Drone Technology for Farmers', 'Make in India Initiative'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-indigo-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4 max-w-4xl mx-auto animate-fade-up animation-delay-500">
            {[
              { value: '2023', label: 'Founded' },
              { value: '500+', label: 'Drones Deployed' },
              { value: '100+', label: 'Workshops Conducted' },
              { value: '50+', label: 'Enterprise Clients' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <div className="text-3xl font-bold text-indigo-500 sm:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 border-b">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Comprehensive Technology Solutions</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              From AI-powered software to drone technology and enterprise systems - we deliver end-to-end digital transformation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Cpu, title: 'AI Software Development', desc: 'Custom AI solutions, machine learning models, and intelligent automation systems.' },
              { icon: Plane, title: 'Agricultural Drone Systems', desc: 'Smart drone technology for farmers - crop monitoring, spraying, and analytics.' },
              { icon: BookOpen, title: 'LMS Solutions', desc: 'Modern learning management systems for educational institutions.' },
              { icon: Server, title: 'ERP Systems', desc: 'Comprehensive enterprise resource planning platforms.' },
              { icon: Cloud, title: 'Cloud Infrastructure', desc: 'Scalable cloud solutions and DevOps implementation.' },
              { icon: GraduationCap, title: 'Educational Programs', desc: 'Hands-on workshops and awareness programs about drone technology.' },
            ].map((feature) => (
              <Link key={feature.title} to="/services" className="group">
                <div className="h-full p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10">
                    <feature.icon className="h-6 w-6 text-indigo-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 border-b bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Why Choose Karvensen?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                We're not just another IT company. Karvensen combines cutting-edge AI technology with a deep understanding 
                of real-world challenges.
              </p>
              
              <div className="space-y-3">
                {[
                  'AI-first approach to problem solving',
                  'Specialized in agricultural drone solutions',
                  'Proven track record in enterprise systems',
                  'Comprehensive training and support programs',
                  'Cloud-native architecture expertise',
                  'Commitment to indigenous manufacturing',
                ].map((highlight) => (
                  <div key={highlight} className="flex items-start gap-3">
                    <div className="h-5 w-5 text-indigo-500 mt-0.5 flex-shrink-0">✓</div>
                    <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: 'Founded on Innovation', desc: 'Established in 2023 with a vision to revolutionize through AI and drone technology.' },
                { title: 'Make in India', desc: 'Proudly assembling drones in India with carefully sourced components.' },
                { title: 'Enterprise-Grade Quality', desc: 'Delivering reliable, scalable solutions with industry-leading security standards.' },
                { title: 'Community Impact', desc: 'Empowering farmers with drone technology and educating youth nationwide.' },
              ].map((value) => (
                <div key={value.title} className="p-6 rounded-lg border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
                  <h3 className="font-semibold mb-2 text-lg">{value.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-indigo-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Ready to Innovate with Karvensen?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto text-lg mb-8">
            Let's discuss how our AI-driven solutions and drone technology can transform your operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto h-10 px-6 rounded-lg bg-white text-indigo-500 font-medium">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center w-full sm:w-auto h-10 px-6 rounded-lg border border-white/30 text-white font-medium">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />
    </>
  )
}

export default HomePage
