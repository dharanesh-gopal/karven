"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tractor, GraduationCap, Award, Users, CheckCircle, ArrowRight, Clock, MapPin, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { useSanityData } from "@/hooks/useSanityData"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"

interface UpcomingProgramData {
  title: string
  description?: string
  image?: any
  location: string
  date: string
  spots: string
  category?: string
  duration?: string
  fee?: string
  registrationLink?: string
}

interface TrainingHeroData {
  title: string
  subtitle: string
  primaryButtonText: string
  primaryButtonLink: string
  secondaryButtonText: string
  secondaryButtonLink: string
}

interface TrainingFaqData {
  question: string
  answer: string
}

interface TrainingCourseData {
  title: string
  subtitle: string
  description: string
  image: any
  duration: string
  detailsLink: string
}

// Upcoming Programs Grid Component
function UpcomingProgramsGrid() {
  const { data: upcomingPrograms } = useSanityData<UpcomingProgramData[]>(
    `*[_type == "upcomingProgram" && isActive == true] | order(order asc){
      title,
      description,
      "image": image.asset,
      location,
      date,
      spots,
      category,
      duration,
      fee,
      registrationLink
    }`,
    {},
    []
  )

  const fallbackPrograms: UpcomingProgramData[] = [
    {
      title: "Farmer Drone Workshop",
      location: "Warangal, Telangana",
      date: "Feb 15-17, 2026",
      spots: "30 spots available",
      description: "Hands-on training for farmers on using drones for precision agriculture and crop monitoring",
      duration: "3 Days",
      category: "farmer",
      image: null,
      fee: "₹5,000",
      registrationLink: undefined,
    },
    {
      title: "AI/ML Bootcamp",
      location: "Online + Hyderabad",
      date: "Mar 1 - Apr 30, 2026",
      spots: "50 spots available",
      description: "Comprehensive bootcamp covering AI fundamentals, machine learning, and practical applications",
      duration: "8 Weeks",
      category: "professional",
      image: null,
      fee: "₹15,000",
      registrationLink: undefined,
    },
    {
      title: "School Tech Festival",
      location: "Multiple Schools, AP",
      date: "Feb 20-28, 2026",
      spots: "Open registration",
      description: "Interactive workshops and demonstrations of AI and drone technology for students",
      duration: "1-2 Days per school",
      category: "school",
      image: null,
      fee: undefined,
      registrationLink: undefined,
    },
  ]

  const programs = (upcomingPrograms && upcomingPrograms.length > 0) ? upcomingPrograms : fallbackPrograms

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {programs.map((event) => (
        <div key={event.title} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group">
          {/* Image */}
          {event.image ? (
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={urlFor(event.image).url()}
                alt={event.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              {event.category && (
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold rounded-full">
                    {event.category === 'farmer' ? 'Farmer Training' :
                     event.category === 'school' ? 'School Workshop' :
                     event.category === 'professional' ? 'Professional Course' :
                     event.category === 'online' ? 'Online Course' : event.category}
                  </span>
                </div>
              )}
            </div>
          ) : (
            <div className="relative h-48 w-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
              <Calendar className="h-16 w-16 text-white/30" />
              {event.category && (
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold rounded-full">
                    {event.category === 'farmer' ? 'Farmer Training' :
                     event.category === 'school' ? 'School Workshop' :
                     event.category === 'professional' ? 'Professional Course' :
                     event.category === 'online' ? 'Online Course' : event.category}
                  </span>
                </div>
              )}
            </div>
          )}
          
          {/* Content */}
          <div className="p-6">
            <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-red-600 transition-colors">{event.title}</h3>
            
            {event.description && (
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{event.description}</p>
            )}
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span>{event.date}</span>
              </div>
              {event.duration && (
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span>{event.duration}</span>
                </div>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-red-50 text-red-700 text-xs font-medium rounded-full border border-red-200">
                {event.spots}
              </span>
              {event.fee && (
                <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full border border-green-200">
                  {event.fee}
                </span>
              )}
            </div>
            
            {event.registrationLink ? (
              <a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-red-600 font-medium text-sm hover:gap-3 transition-all duration-300"
              >
                <span>Register Now</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            ) : (
              <Link
                href="/contact?enquiry=training"
                className="inline-flex items-center gap-2 text-red-600 font-medium text-sm hover:gap-3 transition-all duration-300"
              >
                <span>Enquire Now</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function TrainingPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  // CMS Data Hooks
  const { data: heroData } = useSanityData<TrainingHeroData>(
    `*[_type == "trainingHero" && isActive == true][0]{
      title,
      subtitle,
      primaryButtonText,
      primaryButtonLink,
      secondaryButtonText,
      secondaryButtonLink
    }`,
    {},
    {
      title: 'Drone Awareness & <span class="text-white">Technical Training</span>',
      subtitle: 'Empowering communities with knowledge and skills in AI and drone technology. From farmers to students to professionals, we have programs designed for everyone.',
      primaryButtonText: 'Browse Programs',
      primaryButtonLink: '#programs',
      secondaryButtonText: 'Contact Us',
      secondaryButtonLink: '/contact',
    }
  )

  const { data: faqsData } = useSanityData<TrainingFaqData[]>(
    `*[_type == "trainingFaq" && isActive == true] | order(order asc){
      question,
      answer
    }`,
    {},
    []
  )

  const { data: coursesData } = useSanityData<TrainingCourseData[]>(
    `*[_type == "trainingCourse" && isActive == true] | order(order asc){
      title,
      subtitle,
      description,
      "image": image.asset,
      duration,
      detailsLink
    }`,
    {},
    []
  )
  
  // Fallback FAQs
  const fallbackFaqs: TrainingFaqData[] = [
    {
      question: "Who can enroll in the training programs?",
      answer: "Our programs are designed for various audiences - farmers for agriculture programs, students from class 8 onwards for school workshops, and graduates or working professionals for skill development courses. Each program has specific eligibility criteria mentioned in the details.",
    },
    {
      question: "Are the certifications recognized?",
      answer: "Yes, our certifications are industry-recognized. For drone pilot certification, we prepare candidates for DGCA (Directorate General of Civil Aviation) examinations. Our technical certifications are valued by employers in the IT industry.",
    },
    {
      question: "Do you conduct programs at our location?",
      answer: "We offer on-site training for farmer awareness programs and school workshops. For larger groups or organizations, we can customize programs and conduct them at your preferred location.",
    },
    {
      question: "What is the cost of the programs?",
      answer: "Program costs vary based on duration, content, and format. We also partner with government bodies and CSR initiatives to offer subsidized or free programs for certain communities. Contact us for detailed pricing.",
    },
    {
      question: "Is financial assistance available?",
      answer: "We work with various government schemes and NGOs to provide subsidized training for eligible participants. We also offer flexible payment options for our professional certification programs.",
    },
  ]

  const activeFaqs = (faqsData && faqsData.length > 0) ? faqsData : fallbackFaqs

  const fallbackCourses: TrainingCourseData[] = [
    {
      title: "Course A | Small Class Drone Pilot Training",
      subtitle: "Introduction to Drone Flying",
      description: "A comprehensive program designed to offer a blend of theoretical education and hands-on practical experience.",
      image: null,
      duration: "8 Days",
      detailsLink: "/training/courses/course-a",
    },
    {
      title: "Course B | Small and Medium Class Drone Training",
      subtitle: "Mastery in Drone Flying",
      description: "For those looking to master both small and medium drones, this course offers in-depth training in both theory and practice.",
      image: null,
      duration: "13 days",
      detailsLink: "/training/courses/course-b",
    },
    {
      title: "Course C | Educational Drone Workshop",
      subtitle: "STEM & Robotics for Students",
      description: "Designed for schools and colleges, this workshop introduces students to drone technology, coding, and practical applications.",
      image: null,
      duration: "3-5 Days",
      detailsLink: "/training/courses/course-c",
    },
    {
      title: "Course D | Agricultural Drone Operations",
      subtitle: "Precision Agriculture Training",
      description: "Specialized training for farmers and agriculture professionals on using drones for crop monitoring, spraying, and field analysis.",
      image: null,
      duration: "6 Days",
      detailsLink: "/training/courses/course-d",
    },
  ]

  const activeCourses = (coursesData && coursesData.length > 0) ? coursesData : fallbackCourses

  const mediaItems = [
    {
      type: 'image',
      src: '/edu drone.png',
      caption: 'Educational Workshops for Students'
    },
    {
      type: 'video',
      src: '/drone video 2.mp4',
      caption: 'Live Drone Demonstration'
    },
  ]

  // Ensure currentSlide is within bounds
  useEffect(() => {
    if (currentSlide >= mediaItems.length) {
      setCurrentSlide(0)
    }
  }, [currentSlide])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mediaItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mediaItems.length) % mediaItems.length)
  }
// Auto-scroll animation for partners
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0

    const scroll = () => {
      scrollPosition += 0.5
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollPosition
        
        // Reset to start when reaching halfway (because we duplicated the logos)
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0
        }
      }
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationId)
  }, [])

  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center border-b border-gray-200">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/training-drone.png')" }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative container mx-auto px-4 py-20 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-4 inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
              Training Programs
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6" dangerouslySetInnerHTML={{ __html: heroData?.title || 'Drone Awareness & <span class="text-white">Technical Training</span>' }} />
            <p className="text-lg text-white/90">
              {heroData?.subtitle || 'Empowering communities with knowledge and skills in AI and drone technology. From farmers to students to professionals, we have programs designed for everyone.'}
            </p>
          </div>
        </div>
      </section>

      {/* On-Field Action Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">On-Field Action</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-white rounded-lg overflow-hidden shadow-xl">
              {/* Media Container */}
              <div className="relative aspect-video bg-gray-900">
                {mediaItems[currentSlide].type === 'image' ? (
                  <img
                    src={mediaItems[currentSlide].src}
                    alt={mediaItems[currentSlide].caption}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    src={mediaItems[currentSlide].src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800/70 hover:bg-gray-800 text-white p-3 rounded-lg transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800/70 hover:bg-gray-800 text-white p-3 rounded-lg transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-2 py-4 bg-white">
                {mediaItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Training Courses</h2>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {activeCourses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  {course.image ? (
                    <Image
                      src={urlFor(course.image).url()}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  ) : (
                    <img
                      src={
                        index === 0 ? "/train-1.jpeg" :
                        index === 1 ? "/train-2.jpeg" :
                        index === 2 ? "/edu drone.png" :
                        "/dron in agri land.png"
                      }
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-lg font-medium text-gray-700 mb-3">{course.subtitle}</p>
                  <p className="text-gray-600 mb-4">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-700">
                      <span className="font-semibold">Duration:</span> {course.duration}
                    </p>
                    <Link 
                      href={course.detailsLink}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="py-20 bg-white border-t border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Leading Organizations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our training programs are recognized and trusted by top companies and institutions across India</p>
          </div>
        </div>
        
        {/* Full-width dark background container for logos */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-12 overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex gap-16 overflow-x-hidden"
            style={{ scrollBehavior: 'auto' }}
          >
            {/* First set of logos */}
            {[
              { name: 'TCS' },
              { name: 'Infosys' },
              { name: 'Wipro' },
              { name: 'Cognizant' },
              { name: 'Tech Mahindra' },
              { name: 'HCL Technologies' },
              { name: 'Microsoft' },
              { name: 'Google' },
              { name: 'Amazon' },
              { name: 'IBM' },
            ].map((partner, index) => (
              <div
                key={`partner-1-${index}`}
                className="flex-shrink-0 w-48 h-24 bg-white rounded-xl border-2 border-gray-200 p-6 flex items-center justify-center hover:border-blue-400 hover:shadow-xl transition-all duration-300"
              >
                <span className="text-gray-800 font-bold text-lg">{partner.name}</span>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {[
              { name: 'TCS' },
              { name: 'Infosys' },
              { name: 'Wipro' },
              { name: 'Cognizant' },
              { name: 'Tech Mahindra' },
              { name: 'HCL Technologies' },
              { name: 'Microsoft' },
              { name: 'Google' },
              { name: 'Amazon' },
              { name: 'IBM' },
            ].map((partner, index) => (
              <div
                key={`partner-2-${index}`}
                className="flex-shrink-0 w-48 h-24 bg-white rounded-xl border-2 border-gray-200 p-6 flex items-center justify-center hover:border-blue-400 hover:shadow-xl transition-all duration-300"
              >
                <span className="text-gray-800 font-bold text-lg">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Learn with KarVenSen Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Learn with KarVenSen
            </h2>
          </div>

          <div className="max-w-6xl mx-auto space-y-16">
            {/* First Row - Text Left, Image Right */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4 pr-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Train With Us?</h3>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Award className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">DGCA Certification</h4>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Industry-Leading Instructors</h4>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Comprehensive Support System</h4>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Tractor className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Focus on Entrepreneurship</h4>
                  </div>
                </div>
              </div>
              
              <div className="relative pl-6">
                <img
                  src="/train-2.jpeg"
                  alt="Training with KarVenSen"
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>

            {/* Second Row - Image Left, Text Right */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative pr-6">
                <img
                  src="/train-1.jpeg"
                  alt="What sets us apart"
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
              
              <div className="space-y-4 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What Sets Us Apart?</h3>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Expert Guidance</h4>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Real-World Experience</h4>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Award className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Industry Recognition</h4>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Career Support</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities After Training */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Career Opportunities After Training
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Career Cards */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4 hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Tailored Job Placement Support</h3>
                  <p className="text-gray-600 text-sm">
                    Connect with top agricultural and tech companies actively hiring certified drone pilots and AI specialists.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4 hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Exclusive Drone Pilot Opportunities</h3>
                  <p className="text-gray-600 text-sm">
                    Access to exclusive job openings in precision agriculture, infrastructure inspection, and aerial surveying.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4 hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Mentorship Programs</h3>
                  <p className="text-gray-600 text-sm">
                    Ongoing guidance from industry experts to help you launch your career or start your own drone business.
                  </p>
                </div>
              </div>

              <div className="text-center mt-8">
                <Link
                  href="/contact?enquiry=training"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-base font-medium transition-colors shadow-lg"
                >
                  Join Today
                </Link>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <img
                src="/train-3.jpeg"
                alt="Career opportunities in drone technology"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">Upcoming Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Register for our upcoming training sessions and workshops
            </p>
          </div>
          <UpcomingProgramsGrid />
          <div className="text-center mt-8">
            <Link href="/contact?enquiry=custom-training" className="inline-flex items-center px-6 py-3 bg-white text-gray-900 border border-gray-300 rounded hover:bg-gray-100 transition-colors font-medium">
              Request Custom Training
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">Common questions about our training programs</p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {activeFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-gray-900">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  )
}
