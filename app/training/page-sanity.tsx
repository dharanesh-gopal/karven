import { fetchSanityData } from '@/lib/fetchSanityData'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

// Revalidate this page every 60 seconds
export const revalidate = 60

interface Training {
  _id: string
  title: string
  slug: { current: string }
  description: string
  features?: string[]
  duration?: string
  format?: string
  certification?: string
  audience?: string
  price?: number
}

export default async function TrainingPage() {
  const programs = await fetchSanityData<Training[]>(
    `*[_type == "training"] | order(_createdAt desc) {
      _id,
      title,
      slug,
      description,
      features,
      duration,
      format,
      certification,
      audience,
      price
    }`
  )

  if (!programs || programs.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">No Training Programs Available</h1>
          <p className="text-gray-600 mb-8">
            Training programs will appear here once added to Sanity Studio.
          </p>
          <Link
            href="/studio"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
          >
            Go to Studio
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Drone Awareness & Technical Training
            </h1>
            <p className="text-xl text-blue-100">
              Empowering communities with knowledge and skills in AI and drone technology
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            {programs.map((program) => (
              <Card key={program._id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="md:col-span-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {program.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {program.description}
                      </p>

                      {program.features && program.features.length > 0 && (
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">What You'll Learn:</h4>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {program.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {program.audience && (
                        <p className="text-sm text-gray-600">
                          <span className="font-semibold">Target Audience:</span> {program.audience}
                        </p>
                      )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-4">
                      {program.duration && (
                        <div className="flex items-center gap-2 text-gray-700">
                          <Clock className="h-5 w-5 text-blue-600" />
                          <div>
                            <p className="text-sm text-gray-500">Duration</p>
                            <p className="font-semibold">{program.duration}</p>
                          </div>
                        </div>
                      )}

                      {program.format && (
                        <div className="flex items-center gap-2 text-gray-700">
                          <Calendar className="h-5 w-5 text-blue-600" />
                          <div>
                            <p className="text-sm text-gray-500">Format</p>
                            <p className="font-semibold">{program.format}</p>
                          </div>
                        </div>
                      )}

                      {program.certification && (
                        <div className="pt-4 border-t">
                          <p className="text-sm text-gray-500 mb-1">Certification</p>
                          <p className="font-semibold text-gray-900">{program.certification}</p>
                        </div>
                      )}

                      <Link
                        href="/contact"
                        className="block w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-center transition-colors"
                      >
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of professionals and students who have transformed their careers with our training programs
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
