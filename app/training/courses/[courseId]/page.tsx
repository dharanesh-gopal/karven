"use client"

import { use, useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle, Clock, Calendar, Users, Award, ArrowLeft, DollarSign, X, Medal, Trophy, BadgeCheck, ShieldCheck, Star } from "lucide-react"
import { notFound } from "next/navigation"
import { useSanityData } from "@/hooks/useSanityData"
import { urlFor } from "@/sanity/lib/image"

// Icon mapping for dynamic certification icons
const iconMap: Record<string, any> = {
  Award,
  Medal,
  Trophy,
  BadgeCheck,
  ShieldCheck,
  Star,
}

const coursesData = {
  "course-a": {
    id: "course-a",
    title: "Course A | Small Class Drone Pilot Training",
    subtitle: "Introduction to Drone Flying",
    image: "/train-1.jpeg",
    duration: "8 Days",
    price: "₹25,000",
    level: "Beginner",
    maxStudents: "15",
    certification: "Certificate of Completion",
    description: "A comprehensive program designed to offer a blend of theoretical education and hands-on practical experience in drone piloting. This course covers everything from basic drone operations to advanced flight techniques.",
    highlights: [
      "Hands-on training with latest drone models",
      "Theory classes on drone regulations and safety",
      "Flight simulation practice",
      "Real-world field training",
      "DGCA compliance guidelines",
      "Certificate of completion"
    ],
    curriculum: [
      {
        session: "Session 1-2",
        title: "Introduction to Drones",
        topics: [
          "Understanding drone technology and components",
          "Types of drones and their applications",
          "Safety protocols and regulations",
          "Pre-flight checklist and inspection"
        ]
      },
      {
        session: "Session 3-4",
        title: "Basic Flight Operations",
        topics: [
          "Drone controller basics",
          "Take-off and landing procedures",
          "Basic maneuvers and controls",
          "Flight modes and settings"
        ]
      },
      {
        session: "Session 5-6",
        title: "Advanced Flight Techniques",
        topics: [
          "Advanced maneuvering",
          "Obstacle avoidance",
          "Emergency procedures",
          "Weather considerations"
        ]
      },
      {
        session: "Session 7-8",
        title: "Practical Assessment",
        topics: [
          "Field practice sessions",
          "Flight test preparation",
          "Final practical examination",
          "Certificate distribution"
        ]
      }
    ],
    prerequisites: [
      "Age 18 years or above",
      "Basic understanding of technology",
      "No prior drone experience required"
    ],
    included: [
      "Course materials and study guides",
      "Access to training drones",
      "Safety equipment",
      "Certificate of completion",
      "Post-training support for 3 months"
    ]
  },
  "course-b": {
    id: "course-b",
    title: "Course B | Small and Medium Class Drone Training",
    subtitle: "Mastery in Drone Flying",
    image: "/train-2.jpeg",
    duration: "13 Days",
    price: "₹45,000",
    level: "Intermediate",
    maxStudents: "12",
    certification: "Professional Certification",
    description: "For those looking to master both small and medium drones, this course offers in-depth training in both theory and practice. Perfect for aspiring professional drone pilots.",
    highlights: [
      "Training on multiple drone categories",
      "Advanced flight techniques",
      "Commercial drone operations",
      "Aerial photography and videography",
      "DGCA certification preparation",
      "Professional certificate"
    ],
    curriculum: [
      {
        session: "Session 1-3",
        title: "Small Drone Operations",
        topics: [
          "Small drone technology overview",
          "Advanced flight controls",
          "Precision flying techniques",
          "Indoor and outdoor operations"
        ]
      },
      {
        session: "Session 4-6",
        title: "Medium Drone Operations",
        topics: [
          "Medium drone specifications",
          "Payload management",
          "Long-range flight operations",
          "Commercial applications"
        ]
      },
      {
        session: "Session 7-9",
        title: "Professional Applications",
        topics: [
          "Aerial photography basics",
          "Video production techniques",
          "Survey and mapping",
          "Commercial use cases"
        ]
      },
      {
        session: "Session 10-13",
        title: "Certification Preparation",
        topics: [
          "DGCA regulations deep dive",
          "Flight test preparation",
          "Written examination prep",
          "Final practical assessment"
        ]
      }
    ],
    prerequisites: [
      "Age 18 years or above",
      "Basic drone flying experience (or completion of Course A)",
      "Class 10th pass certificate"
    ],
    included: [
      "Comprehensive course materials",
      "Access to small and medium class drones",
      "DGCA exam preparation materials",
      "Safety equipment and insurance",
      "Professional certification",
      "6 months post-training support"
    ]
  },
  "course-c": {
    id: "course-c",
    title: "Course C | Educational Drone Workshop",
    subtitle: "STEM & Robotics for Students",
    image: "/edu drone.png",
    duration: "3-5 Days",
    price: "₹8,000",
    level: "Beginner",
    maxStudents: "30",
    certification: "Participation Certificate",
    description: "Designed for schools and colleges, this workshop introduces students to drone technology, coding, and practical applications. An exciting introduction to the world of drones and robotics.",
    highlights: [
      "Interactive hands-on sessions",
      "Drone assembly and basics",
      "Introduction to coding",
      "Team-based projects",
      "Safe learning environment",
      "Participation certificate"
    ],
    curriculum: [
      {
        session: "Day 1",
        title: "Introduction to Drones and Robotics",
        topics: [
          "What are drones and how do they work?",
          "History and evolution of drones",
          "Real-world applications",
          "Safety and responsible use"
        ]
      },
      {
        session: "Day 2",
        title: "Drone Components and Assembly",
        topics: [
          "Understanding drone parts",
          "Basic electronics concepts",
          "Hands-on assembly workshop",
          "Testing and troubleshooting"
        ]
      },
      {
        session: "Day 3",
        title: "Programming and Control",
        topics: [
          "Introduction to coding for drones",
          "Basic programming concepts",
          "Flight control practice",
          "Simple automation tasks"
        ]
      },
      {
        session: "Day 4-5",
        title: "Project and Demonstration",
        topics: [
          "Group project work",
          "Creative applications",
          "Final presentation",
          "Certificate distribution"
        ]
      }
    ],
    prerequisites: [
      "Students from Class 8 onwards",
      "Interest in technology and robotics",
      "No prior technical knowledge required"
    ],
    included: [
      "Educational drone kits",
      "Workshop materials",
      "Programming tools and software",
      "Project supplies",
      "Participation certificate",
      "Digital course materials"
    ]
  },
  "course-d": {
    id: "course-d",
    title: "Course D | Agricultural Drone Operations",
    subtitle: "Precision Agriculture Training",
    image: "/dron in agri land.png",
    duration: "7 Days",
    price: "₹35,000",
    level: "Intermediate",
    maxStudents: "15",
    certification: "Agricultural Drone Specialist Certificate",
    description: "Learn to use drones for precision agriculture, crop monitoring, and modern farming techniques. Perfect for farmers and agricultural professionals.",
    highlights: [
      "Agricultural drone operations",
      "Crop health monitoring",
      "Precision spraying techniques",
      "Data analysis for farming",
      "Government subsidy guidance",
      "Specialist certificate"
    ],
    curriculum: [
      {
        session: "Session 1-2",
        title: "Agriculture Technology Overview",
        topics: [
          "Modern precision agriculture",
          "Role of drones in farming",
          "Types of agricultural drones",
          "Government schemes and subsidies"
        ]
      },
      {
        session: "Session 3-4",
        title: "Drone Operations for Agriculture",
        topics: [
          "Agricultural drone setup",
          "Flight planning for farms",
          "Crop monitoring techniques",
          "Data collection methods"
        ]
      },
      {
        session: "Session 5-6",
        title: "Spraying and Applications",
        topics: [
          "Precision spraying operations",
          "Pesticide and fertilizer application",
          "Safety protocols",
          "Regulatory compliance"
        ]
      },
      {
        session: "Session 7",
        title: "Practical Field Training",
        topics: [
          "Real farm operations",
          "Data interpretation",
          "Final assessment",
          "Certificate distribution"
        ]
      }
    ],
    prerequisites: [
      "Age 18 years or above",
      "Basic farming knowledge helpful",
      "Basic drone flying experience preferred"
    ],
    included: [
      "Agricultural drone training",
      "Spraying equipment practice",
      "Data analysis software",
      "Field practice sessions",
      "Specialist certification",
      "Subsidy guidance documentation"
    ]
  }
}

export default function CoursePage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = use(params)
  const [showEnrollForm, setShowEnrollForm] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    education: '',
    experience: '',
    message: ''
  })

  // Fetch course data from CMS
  const { data: courses, isLoading: sanityLoading } = useSanityData<any[]>(
    `*[_type == "trainingCourse" && slug.current == $slug && isActive == true]{
      title,
      subtitle,
      descriptionTitle,
      description,
      "image": image.asset,
      duration,
      price,
      level,
      maxStudents,
      certificationIcon,
      certification,
      certificationSubtext,
      highlightsTitle,
      "highlights": highlightsList,
      curriculumTitle,
      "curriculum": curriculumList,
      prerequisitesTitle,
      "prerequisites": prerequisitesList,
      includedTitle,
      "included": includedList,
      doubtsTitle,
      doubtsMessage,
      contactUsText,
      contactUsLink,
      enrollNowText,
      enrollNowLink
    }`,
    { slug: courseId },
    null
  )

  // Fetch enrollment page data from CMS
  const { data: enrollPageData } = useSanityData<any[]>(
    `*[_type == "enrollPage" && isActive == true][0]{
      title,
      subtitle,
      fullNameLabel,
      fullNamePlaceholder,
      emailLabel,
      emailPlaceholder,
      phoneLabel,
      phonePlaceholder,
      addressLabel,
      addressPlaceholder,
      cityLabel,
      stateLabel,
      pincodeLabel,
      educationLabel,
      educationOptions,
      experienceLabel,
      experienceOptions,
      messageLabel,
      messagePlaceholder,
      submitButtonText,
      submitButtonLoadingText,
      successTitle,
      successMessage,
      successNote
    }`,
    {},
    null
  )

  // Get course data - prioritize Sanity data, then fallback to hardcoded
  const course = (courses && courses.length > 0) 
    ? courses[0]
    : coursesData[courseId as keyof typeof coursesData]

  // Get enrollment page data with fallbacks
  const enrollData = enrollPageData || {
    title: 'Enroll in Course',
    subtitle: 'Fill out the form below to enroll in this course',
    fullNameLabel: 'Full Name',
    fullNamePlaceholder: 'Enter your full name',
    emailLabel: 'Email Address',
    emailPlaceholder: 'your@email.com',
    phoneLabel: 'Phone Number',
    phonePlaceholder: '+91 1234567890',
    addressLabel: 'Address',
    addressPlaceholder: 'Street address',
    cityLabel: 'City',
    stateLabel: 'State',
    pincodeLabel: 'Pincode',
    educationLabel: 'Highest Education',
    educationOptions: [
      { label: '10th Pass', value: '10th' },
      { label: '12th Pass', value: '12th' },
      { label: 'Diploma', value: 'diploma' },
      { label: 'Graduate', value: 'graduate' },
      { label: 'Post Graduate', value: 'postgraduate' },
      { label: 'Other', value: 'other' },
    ],
    experienceLabel: 'Prior Drone Experience',
    experienceOptions: [
      { label: 'No Experience', value: 'none' },
      { label: 'Beginner (0-6 months)', value: 'beginner' },
      { label: 'Intermediate (6-12 months)', value: 'intermediate' },
      { label: 'Advanced (1+ year)', value: 'advanced' },
    ],
    messageLabel: 'Additional Information (Optional)',
    messagePlaceholder: 'Any special requirements or questions?',
    submitButtonText: 'Submit Enrollment',
    sucessTitle: 'Enrollment Submitted!',
    successMessage: 'Our team will contact you shortly with payment details and further instructions.',
    successNote: '* Our team will contact you with payment details and further instructions',
  }

  // Get the certification icon component
  const CertificationIcon = course ? (iconMap[course.certificationIcon] || Award) : Award

  useEffect(() => {
    // Close enrollment form when courseId changes
    setShowEnrollForm(false)
    setIsLoading(false)
  }, [courseId])

  // Show loading state while checking for course
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading course details...</p>
        </div>
      </div>
    )
  }

  if (!course) {
    notFound()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // For development: Just show success message
    // Later you can integrate payment gateway here (Razorpay, Stripe, etc.)
    console.log('Enrollment Data:', formData)
    console.log('Course:', course.title)
    console.log('Price:', course.price)
    
    setFormSubmitted(true)
    
    // Reset after 3 seconds
    setTimeout(() => {
      setShowEnrollForm(false)
      setFormSubmitted(false)
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        education: '',
        experience: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <Link 
            href="/training"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Training
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {course.title}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-6">
              {course.subtitle}
            </p>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>Max {course.maxStudents} Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>{course.level}</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                <span className="text-xl font-bold">{course.price}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Course Image */}
              <div className="relative h-96 rounded-xl overflow-hidden">
                {course.image && typeof course.image === 'object' ? (
                  <Image
                    src={urlFor(course.image).url()}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <img
                    src={course.image || "/train-1.jpeg"}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{course.descriptionTitle || 'Course Description'}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* What You'll Learn */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{course.highlightsTitle || "What You'll Learn"}</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {course.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Curriculum */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{course.curriculumTitle || 'Course Curriculum'}</h2>
                <div className="space-y-4">
                  {course.curriculum.map((section, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {section.session}: {section.title}
                      </h3>
                      <ul className="space-y-2">
                        {section.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start gap-2 text-gray-600">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prerequisites */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{course.prerequisitesTitle || 'Prerequisites'}</h2>
                <ul className="space-y-2">
                  {course.prerequisites.map((prerequisite, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span>{prerequisite}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Enrollment Card */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                  <div className="text-center mb-6">
                    <p className="text-gray-600 mb-2">Course Fee</p>
                    <p className="text-4xl font-bold text-gray-900">{course.price}</p>
                  </div>
                  
                  <button
                    onClick={() => setShowEnrollForm(true)}
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                  >
                    {course.enrollNowText || 'Enroll Now'}
                  </button>
                </div>

                {/* What's Included */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">{course.includedTitle || "What's Included"}</h3>
                  <ul className="space-y-3">
                    {course.included.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Certification */}
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <div className="flex items-start gap-3 mb-3">
                    <CertificationIcon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Certification</h3>
                      <p className="text-sm text-gray-700">{course.certification}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">
                    {course.certificationSubtext || 'Earn a certificate upon successful completion of the course'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {course.doubtsTitle || 'Still Have Any Doubts?'}
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {course.doubtsMessage || "Feel free to reach out to us. We're here to help you make the right decision for your career."}
          </p>
          <Link
            href={course.contactUsLink || '/contact?enquiry=training'}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            {course.contactUsText || 'Contact Us'}
          </Link>
        </div>
      </section>

      {/* Enrollment Form Modal */}
      {showEnrollForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            {formSubmitted ? (
              // Success Message
              <div className="p-8 text-center">
                <button
                  onClick={() => setShowEnrollForm(false)}
                  className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{enrollData.successTitle}</h3>
                <p className="text-gray-600 mb-4">
                  {enrollData.successMessage}
                </p>
                <p className="text-sm text-gray-500">
                  {enrollData.successNote}
                </p>
              </div>
            ) : (
              // Enrollment Form
              <div className="p-8">
                {/* Header with close button */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{enrollData.title}</h3>
                    <p className="text-sm text-gray-600 mb-1">{course.title}</p>
                    <p className="text-gray-600">Course Fee: <span className="font-bold text-gray-900">{course.price}</span></p>
                  </div>
                  <button
                    onClick={() => setShowEnrollForm(false)}
                    className="text-gray-600 hover:text-gray-900 transition-colors ml-4 flex-shrink-0"
                    aria-label="Close"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      {enrollData.fullNameLabel} *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 placeholder:text-gray-400"
                      placeholder={enrollData.fullNamePlaceholder}
                    />
                  </div>

                  {/* Email and Phone */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        {enrollData.emailLabel} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 placeholder:text-gray-400"
                        placeholder={enrollData.emailPlaceholder}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        {enrollData.phoneLabel} *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 placeholder:text-gray-400"
                        placeholder={enrollData.phonePlaceholder}
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      {enrollData.addressLabel} *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 placeholder:text-gray-400"
                      placeholder={enrollData.addressPlaceholder}
                    />
                  </div>

                  {/* City, State, Pincode */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        {enrollData.cityLabel} *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 placeholder:text-gray-400"
                        placeholder="City"
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                        {enrollData.stateLabel} *
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        required
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 placeholder:text-gray-400"
                        placeholder="State"
                      />
                    </div>
                    <div>
                      <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">
                        {enrollData.pincodeLabel} *
                      </label>
                      <input
                        type="text"
                        id="pincode"
                        name="pincode"
                        required
                        value={formData.pincode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 placeholder:text-gray-400"
                        placeholder="123456"
                      />
                    </div>
                  </div>

                  {/* Education */}
                  <div>
                    <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
                      {enrollData.educationLabel} *
                    </label>
                    <select
                      id="education"
                      name="education"
                      required
                      value={formData.education}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 bg-white"
                    >
                      <option value="" className="text-gray-400">Select education level</option>
                      {enrollData.educationOptions?.map((option: any, idx: number) => (
                        <option key={idx} value={option.value} className="text-gray-900">
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Experience */}
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                      {enrollData.experienceLabel}
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 bg-white"
                    >
                      <option value="" className="text-gray-400">Select experience level</option>
                      {enrollData.experienceOptions?.map((option: any, idx: number) => (
                        <option key={idx} value={option.value} className="text-gray-900">
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      {enrollData.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 placeholder:text-gray-400"
                      placeholder={enrollData.messagePlaceholder}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
                    >
                      {enrollData.submitButtonText}
                    </button>
                    <p className="text-xs text-gray-500 mt-3 text-center">
                      * Our team will contact you with payment details and further instructions
                    </p>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
