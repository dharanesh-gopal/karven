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
  enquireButtonText?: string
  enquireLink?: string
}

interface TrainingHeroData {
  badge: string
  title: string
  subtitle: string
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
  slug?: {
    current: string
  }
  detailsLink?: string
}

interface TrainingPageSettingsData {
  onFieldActionTitle: string
  coursesTitle: string
  trustedPartnersTitle: string
  trustedPartnersSubtitle: string
  whyLearnTitle: string
  careerOpportunitiesTitle: string
  upcomingProgramsTitle: string
  upcomingProgramsSubtitle: string
  faqTitle: string
  faqSubtitle: string
}

interface OnFieldActionData {
  title: string
  mediaType: 'image' | 'video'
  image?: any
  video?: any
  order: number
}

interface TrustedPartnerData {
  name: string
  logo?: any
  websiteUrl?: string
}

interface WhyLearnItemData {
  iconName: string
  iconColor: string
  title: string
  description: string
  order: number
}

interface WhyLearnSectionData {
  sectionTitle: string
  sectionImage?: any
  items: WhyLearnItemData[]
  isActive: boolean
}

interface CareerOpportunityData {
  title: string
  description: string
  iconName: string
  iconColor: string
  image?: any
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
      registrationLink,
      enquireButtonText,
      enquireLink
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
      enquireButtonText: "Enquire Now",
      enquireLink: "/contact?enquiry=training",
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
      enquireButtonText: "Enquire Now",
      enquireLink: "/contact?enquiry=training",
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
      enquireButtonText: "Enquire Now",
      enquireLink: "/contact?enquiry=training",
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
                href={event.enquireLink || '/contact?enquiry=training'}
                className="inline-flex items-center gap-2 text-red-600 font-medium text-sm hover:gap-3 transition-all duration-300"
              >
                <span>{event.enquireButtonText || 'Enquire Now'}</span>
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
      badge,
      title,
      subtitle
    }`,
    {},
    {
      badge: 'Training Programs',
      title: 'Drone Awareness & <span class="text-white">Technical Training</span>',
      subtitle: 'Empowering communities with knowledge and skills in AI and drone technology. From farmers to students to professionals, we have programs designed for everyone.',
    }
  )

  const { data: pageSettings } = useSanityData<TrainingPageSettingsData>(
    `*[_type == "trainingPageSettings" && isActive == true][0]{
      onFieldActionTitle,
      coursesTitle,
      trustedPartnersTitle,
      trustedPartnersSubtitle,
      whyLearnTitle,
      careerOpportunitiesTitle,
      upcomingProgramsTitle,
      upcomingProgramsSubtitle,
      faqTitle,
      faqSubtitle
    }`,
    {},
    {
      onFieldActionTitle: 'On-Field Action',
      coursesTitle: 'Our Training Courses',
      trustedPartnersTitle: 'Trusted by Leading Organizations',
      trustedPartnersSubtitle: 'Our training programs are recognized and trusted by top companies and institutions across India',
      whyLearnTitle: 'Why Learn with KarVenSen',
      careerOpportunitiesTitle: 'Career Opportunities After Training',
      upcomingProgramsTitle: 'Upcoming Programs',
      upcomingProgramsSubtitle: 'Register for our upcoming training sessions and workshops',
      faqTitle: 'Frequently Asked Questions',
      faqSubtitle: 'Common questions about our training programs',
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
      slug
    }`,
    {},
    []
  )

  // On-Field Action Media
  const { data: onFieldActionData } = useSanityData<OnFieldActionData[]>(
    `*[_type == "onFieldAction" && isActive == true] | order(order asc){
      title,
      mediaType,
      "image": image.asset,
      "video": video.asset->url,
      order
    }`,
    {},
    []
  )

  // Trusted Partners
  const { data: trustedPartnersData } = useSanityData<TrustedPartnerData[]>(
    `*[_type == "trustedPartner" && isActive == true] | order(order asc){
      name,
      "logo": logo.asset,
      websiteUrl
    }`,
    {},
    []
  )

  // Why Train With Us
  const { data: whyTrainData } = useSanityData<WhyLearnSectionData | null>(
    `*[_type == "whyTrainWithUs" && _id == "whyTrainWithUs"][0]{
      sectionTitle,
      "sectionImage": sectionImage.asset,
      isActive,
      items[]{
        iconName,
        iconColor,
        title,
        description,
        order
      }
    }`,
    {},
    null
  )

  // What Sets Us Apart
  const { data: setsApartData } = useSanityData<WhyLearnSectionData | null>(
    `*[_type == "whatSetsUsApart" && _id == "whatSetsUsApart"][0]{
      sectionTitle,
      "sectionImage": sectionImage.asset,
      isActive,
      items[]{
        iconName,
        iconColor,
        title,
        description,
        order
      }
    }`,
    {},
    null
  )

  // Career Opportunities
  const { data: careerOpportunitiesData } = useSanityData<CareerOpportunityData[]>(
    `*[_type == "careerOpportunity" && isActive == true] | order(order asc){
      title,
      description,
      iconName,
      iconColor,
      "image": image.asset
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
      slug: { current: "course-a" },
    },
    {
      title: "Course B | Small and Medium Class Drone Training",
      subtitle: "Mastery in Drone Flying",
      description: "For those looking to master both small and medium drones, this course offers in-depth training in both theory and practice.",
      image: null,
      duration: "13 days",
      slug: { current: "course-b" },
    },
    {
      title: "Course C | Educational Drone Workshop",
      subtitle: "STEM & Robotics for Students",
      description: "Designed for schools and colleges, this workshop introduces students to drone technology, coding, and practical applications.",
      image: null,
      duration: "3-5 Days",
      slug: { current: "course-c" },
    },
    {
      title: "Course D | Agricultural Drone Operations",
      subtitle: "Precision Agriculture Training",
      description: "Specialized training for farmers and agriculture professionals on using drones for crop monitoring, spraying, and field analysis.",
      image: null,
      duration: "6 Days",
      slug: { current: "course-d" },
    },
  ]

  // Use fallback courses if Sanity data is empty OR if courses don't have correct slugs
  // Only accept courses with slugs matching: course-a, course-b, course-c, course-d
  const validSlugs = ['course-a', 'course-b', 'course-c', 'course-d']
  const hasValidCourses = coursesData && 
    coursesData.length > 0 && 
    coursesData.every(c => c.slug?.current && validSlugs.includes(c.slug.current))
  
  const activeCourses = hasValidCourses ? coursesData : fallbackCourses

  // Debug: Check what courses are being used
  useEffect(() => {
    console.log('🎓 Training Courses:', {
      sanityData: coursesData,
      hasValidSlugs: hasValidCourses,
      usingSanity: hasValidCourses,
      usingFallback: !hasValidCourses,
      activeCourses: activeCourses,
      courseLinks: activeCourses.map(c => `/training/courses/${c.slug?.current}`)
    })
  }, [coursesData, activeCourses, hasValidCourses])

  // Fallback media items
  const fallbackMediaItems = [
    {
      mediaType: 'image' as const,
      image: null,
      video: null,
    },
    {
      mediaType: 'video' as const,
      image: null,
      video: '/drone video 2.mp4',
    },
  ]

  // Transform Sanity data to match the expected format
  const mediaItems = (onFieldActionData && onFieldActionData.length > 0) 
    ? onFieldActionData.map(item => ({
        mediaType: item.mediaType,
        image: item.image,
        video: item.video,
      }))
    : fallbackMediaItems

  // Fallback trusted partners
  const fallbackPartners = [
    { name: 'TCS' }, { name: 'Infosys' }, { name: 'Wipro' },
    { name: 'Cognizant' }, { name: 'Tech Mahindra' }, { name: 'HCL Technologies' },
    { name: 'Microsoft' }, { name: 'Google' }, { name: 'Amazon' }, { name: 'IBM' },
  ]

  const trustedPartners = (trustedPartnersData && trustedPartnersData.length > 0) 
    ? trustedPartnersData 
    : fallbackPartners

  // Fallback why learn items
  const fallbackWhyTrainItems = [
    { iconName: 'Award', iconColor: 'blue', title: 'DGCA Certification', description: 'Recognized industry certification' },
    { iconName: 'Users', iconColor: 'blue', title: 'Industry-Leading Instructors', description: 'Learn from the best professionals' },
    { iconName: 'CheckCircle', iconColor: 'blue', title: 'Comprehensive Support System', description: 'End-to-end guidance and assistance' },
    { iconName: 'Tractor', iconColor: 'blue', title: 'Focus on Entrepreneurship', description: 'Build your own business ventures' },
  ]

  const fallbackSetsApartItems = [
    { iconName: 'GraduationCap', iconColor: 'green', title: 'Expert Guidance', description: 'Personalized mentoring and support' },
    { iconName: 'CheckCircle', iconColor: 'green', title: 'Real-World Experience', description: 'Hands-on practical training' },
    { iconName: 'Award', iconColor: 'green', title: 'Industry Recognition', description: 'Certificates valued by employers' },
    { iconName: 'Users', iconColor: 'green', title: 'Career Support', description: 'Job placement assistance' },
  ]

  const whyTrainItems = (whyTrainData && whyTrainData.isActive && whyTrainData.items && whyTrainData.items.length > 0)
    ? whyTrainData.items.sort((a, b) => a.order - b.order)
    : fallbackWhyTrainItems

  const setsApartItems = (setsApartData && setsApartData.isActive && setsApartData.items && setsApartData.items.length > 0)
    ? setsApartData.items.sort((a, b) => a.order - b.order)
    : fallbackSetsApartItems

  const whyTrainImage = whyTrainData?.sectionImage
  const setsApartImage = setsApartData?.sectionImage

  // Fallback career opportunities
  const fallbackCareerOpportunities = [
    { iconName: 'Users', iconColor: 'blue', title: 'Tailored Job Placement Support', description: 'Connect with top agricultural and tech companies actively hiring certified drone pilots and AI specialists.' },
    { iconName: 'Award', iconColor: 'blue', title: 'Exclusive Drone Pilot Opportunities', description: 'Access to exclusive job openings in precision agriculture, infrastructure inspection, and aerial surveying.' },
    { iconName: 'GraduationCap', iconColor: 'blue', title: 'Expert Mentorship Programs', description: 'Ongoing guidance from industry experts to help you launch your career or start your own drone business.' },
  ]

  const careerOpportunities = (careerOpportunitiesData && careerOpportunitiesData.length > 0)
    ? careerOpportunitiesData
    : fallbackCareerOpportunities

  const careerImage = careerOpportunitiesData && careerOpportunitiesData.length > 0
    ? careerOpportunitiesData.find(item => item.image)?.image
    : null

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
        {/* Background Video */}
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/cenimatic montage.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative container mx-auto px-4 py-20 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-4 inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
              {heroData?.badge || 'Training Programs'}
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
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{pageSettings?.onFieldActionTitle || 'On-Field Action'}</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-white rounded-lg overflow-hidden shadow-xl">
              {/* Media Container */}
              <div className="relative aspect-video bg-gray-900">
                {mediaItems[currentSlide].mediaType === 'image' ? (
                  mediaItems[currentSlide].image ? (
                    <Image
                      src={urlFor(mediaItems[currentSlide].image).url()}
                      alt="Training field action"
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <img
                      src="/edu drone.png"
                      alt="Training field action"
                      className="w-full h-full object-cover"
                    />
                  )
                ) : (
                  <video
                    src={mediaItems[currentSlide].video || '/drone video 2.mp4'}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Navigation Arrows */}
                {mediaItems.length > 1 && (
                  <>
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
                  </>
                )}
              </div>

              {/* Pagination Dots */}
              {mediaItems.length > 1 && (
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
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{pageSettings?.coursesTitle || 'Our Training Courses'}</h2>
          
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
                    {course.slug?.current ? (
                      <Link 
                        href={`/training/courses/${course.slug.current}`}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
                      >
                        Learn More
                      </Link>
                    ) : course.detailsLink ? (
                      <Link 
                        href={course.detailsLink}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
                      >
                        Learn More
                      </Link>
                    ) : (
                      <button 
                        disabled
                        className="bg-gray-400 text-white px-6 py-2 rounded-full text-sm font-medium cursor-not-allowed"
                        title="Course link not configured"
                      >
                        Coming Soon
                      </button>
                    )}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{pageSettings?.trustedPartnersTitle || 'Trusted by Leading Organizations'}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{pageSettings?.trustedPartnersSubtitle || 'Our training programs are recognized and trusted by top companies and institutions across India'}</p>
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
            {trustedPartners.map((partner, index) => (
              <div
                key={`partner-1-${index}`}
                className="flex-shrink-0 w-48 h-24 bg-white rounded-xl border-2 border-gray-200 p-6 flex items-center justify-center hover:border-blue-400 hover:shadow-xl transition-all duration-300"
              >
                {partner.logo ? (
                  <Image
                    src={urlFor(partner.logo).url()}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                ) : (
                  <span className="text-gray-800 font-bold text-lg">{partner.name}</span>
                )}
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {trustedPartners.map((partner, index) => (
              <div
                key={`partner-2-${index}`}
                className="flex-shrink-0 w-48 h-24 bg-white rounded-xl border-2 border-gray-200 p-6 flex items-center justify-center hover:border-blue-400 hover:shadow-xl transition-all duration-300"
              >
                {partner.logo ? (
                  <Image
                    src={urlFor(partner.logo).url()}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                ) : (
                  <span className="text-gray-800 font-bold text-lg">{partner.name}</span>
                )}
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
              {pageSettings?.whyLearnTitle || 'Why Learn with KarVenSen'}
            </h2>
          </div>

          <div className="max-w-6xl mx-auto space-y-16">
            {/* First Row - Text Left, Image Right */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 pr-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {whyTrainItems[0]?.sectionTitle || 'Why Train With Us?'}
                </h3>
                
                {whyTrainItems.map((item, index) => {
                  const IconComponent = item.iconName === 'Award' ? Award :
                                       item.iconName === 'Users' ? Users :
                                       item.iconName === 'CheckCircle' ? CheckCircle :
                                       item.iconName === 'Tractor' ? Tractor :
                                       item.iconName === 'GraduationCap' ? GraduationCap : Award
                  
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 bg-${item.iconColor}-100 rounded-lg flex items-center justify-center`}>
                        <IconComponent className={`w-6 h-6 text-${item.iconColor}-600`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-lg mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              
              <div className="relative pl-6">
                {whyTrainImage ? (
                  <Image
                    src={urlFor(whyTrainImage).url()}
                    alt="Training with KarVenSen"
                    width={600}
                    height={500}
                    className="rounded-xl shadow-lg w-full h-auto max-h-[500px] object-cover"
                  />
                ) : (
                  <img
                    src="/open field certificate image.png"
                    alt="Training with KarVenSen"
                    className="rounded-xl shadow-lg w-full h-auto max-h-[500px] object-cover"
                  />
                )}
              </div>
            </div>

            {/* Second Row - Image Left, Text Right */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative pr-6">
                {setsApartImage ? (
                  <Image
                    src={urlFor(setsApartImage).url()}
                    alt="What sets us apart"
                    width={600}
                    height={500}
                    className="rounded-xl shadow-lg w-full h-auto max-h-[500px] object-cover"
                  />
                ) : (
                  <img
                    src="/staff teaches to std.png"
                    alt="What sets us apart"
                    className="rounded-xl shadow-lg w-full h-auto max-h-[500px] object-cover"
                  />
                )}
              </div>
              
              <div className="space-y-6 pl-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {setsApartItems[0]?.sectionTitle || 'What Sets Us Apart?'}
                </h3>
                
                {setsApartItems.map((item, index) => {
                  const IconComponent = item.iconName === 'Award' ? Award :
                                       item.iconName === 'Users' ? Users :
                                       item.iconName === 'CheckCircle' ? CheckCircle :
                                       item.iconName === 'Tractor' ? Tractor :
                                       item.iconName === 'GraduationCap' ? GraduationCap : Award
                  
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 bg-${item.iconColor}-100 rounded-lg flex items-center justify-center`}>
                        <IconComponent className={`w-6 h-6 text-${item.iconColor}-600`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-lg mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  )
                })}
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
              {pageSettings?.careerOpportunitiesTitle || 'Career Opportunities After Training'}
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Career Cards */}
            <div className="space-y-6">
              {careerOpportunities.map((opportunity, index) => {
                const IconComponent = opportunity.iconName === 'Award' ? Award :
                                     opportunity.iconName === 'Users' ? Users :
                                     opportunity.iconName === 'CheckCircle' ? CheckCircle :
                                     opportunity.iconName === 'Tractor' ? Tractor :
                                     opportunity.iconName === 'GraduationCap' ? GraduationCap : Users
                
                return (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4 hover:shadow-xl transition-shadow">
                    <div className={`flex-shrink-0 w-12 h-12 bg-${opportunity.iconColor}-100 rounded-lg flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 text-${opportunity.iconColor}-600`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{opportunity.title}</h3>
                      <p className="text-gray-600 text-sm">{opportunity.description}</p>
                    </div>
                  </div>
                )
              })}

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
              {careerImage ? (
                <Image
                  src={urlFor(careerImage).url()}
                  alt="Career opportunities in drone technology"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              ) : (
                <img
                  src="/train-3.jpeg"
                  alt="Career opportunities in drone technology"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">{pageSettings?.upcomingProgramsTitle || 'Upcoming Programs'}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {pageSettings?.upcomingProgramsSubtitle || 'Register for our upcoming training sessions and workshops'}
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
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">{pageSettings?.faqTitle || 'Frequently Asked Questions'}</h2>
              <p className="text-gray-600">{pageSettings?.faqSubtitle || 'Common questions about our training programs'}</p>
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
