import { fetchSanityData } from "@/lib/fetchSanityData"
import { urlFor } from "@/sanity/lib/image"
import { TestimonialsClient } from "./testimonials-client"

interface Testimonial {
  _id: string
  name: string
  role: string
  company?: string
  content: string
  avatar?: string
  image?: {
    asset: {
      _ref: string
      _type: string
    }
  }
}

interface TestimonialsSectionData {
  title: string
  subtitle?: string
  showFeaturedOnly?: boolean
}

const fallbackTestimonials: Testimonial[] = [
  {
    _id: "1",
    name: "Rajesh Kumar",
    role: "Agricultural Enterprise Owner",
    company: "Maharashtra",
    content: "Karvensen's drone technology revolutionized our farm operations. Real-time crop monitoring and precise spraying increased our yield by 35%. The team's support has been outstanding.",
    avatar: "/indian-professional-man.png",
  },
  {
    _id: "2",
    name: "Dr. Priya Sharma",
    role: "Dean of Education Technology",
    content: "Their LMS platform transformed our online education delivery. The AI-powered features and intuitive design made virtual learning engaging and effective for thousands of students.",
    avatar: "/indian-woman-professional.png",
  },
  {
    _id: "3",
    name: "Prof. Venkat Rao",
    role: "Engineering College Principal",
    content: "The drone awareness workshop at our college was exceptional. Students gained hands-on experience and practical knowledge that will shape their careers in emerging technologies.",
    avatar: "/indian-professor-man.jpg",
  },
  {
    _id: "4",
    name: "Amit Patel",
    role: "CTO",
    company: "Tech Solutions Pvt Ltd",
    content: "The AI-powered analytics solution provided invaluable insights into our business operations. We've seen a 40% improvement in decision-making speed and accuracy.",
    avatar: "/indian-professional-man.png",
  },
  {
    _id: "5",
    name: "Sarah Menon",
    role: "Operations Manager",
    company: "Infrastructure Corp",
    content: "Their industrial drone inspection services saved us significant time and costs. The detailed 3D mapping and thermal imaging capabilities are game-changing.",
    avatar: "/indian-woman-professional.png",
  },
  {
    _id: "6",
    name: "Vikram Singh",
    role: "Event Management Director",
    content: "The crowd monitoring drone solution for our events has been remarkable. Real-time aerial intelligence helps us ensure safety and manage large gatherings efficiently.",
    avatar: "/indian-professor-man.jpg",
  },
  {
    _id: "7",
    name: "Anjali Reddy",
    role: "Urban Planning Consultant",
    content: "Working with Karvensen on our smart city project was a pleasure. Their geospatial expertise and innovative approach delivered results beyond our expectations.",
    avatar: "/indian-woman-professional.png",
  },
  {
    _id: "8",
    name: "Karthik Iyer",
    role: "Training Head",
    company: "Aviation Academy",
    content: "The drone training program equipped our team with essential skills. Professional instructors and hands-on practice made learning both effective and enjoyable.",
    avatar: "/indian-professional-man.png",
  },
]

export async function TestimonialsSection() {
  const sectionData = await fetchSanityData<TestimonialsSectionData>(
    `*[_type == "testimonialsSection" && isActive == true][0]{
      title,
      subtitle,
      showFeaturedOnly
    }`,
    {},
    { title: "Trusted by Organizations Nationwide" },
    { tags: ['testimonials-section'], revalidate: 300 }
  )

  const testimonialsData = await fetchSanityData<Testimonial[]>(
    sectionData?.showFeaturedOnly
      ? `*[_type == "testimonial" && featured == true] | order(_createdAt desc) {
          _id,
          name,
          role,
          company,
          content,
          image {
            asset
          }
        }`
      : `*[_type == "testimonial"] | order(_createdAt desc) {
          _id,
          name,
          role,
          company,
          content,
          image {
            asset
          }
        }`,
    {},
    fallbackTestimonials,
    { tags: ['testimonials'], revalidate: 300 }
  )

  const testimonials = (testimonialsData && testimonialsData.length > 0) ? testimonialsData : fallbackTestimonials
  
  // Process testimonials with image URLs
  const processedTestimonials = testimonials.map(t => ({
    _id: t._id,
    name: t.name,
    role: t.role,
    company: t.company,
    content: t.content,
    imageSrc: t.image?.asset 
      ? urlFor(t.image.asset).width(80).height(80).url()
      : t.avatar
  }))

  return (
    <TestimonialsClient 
      title={sectionData?.title || "Trusted by Organizations Nationwide"}
      subtitle={sectionData?.subtitle}
      testimonials={processedTestimonials}
    />
  )
}
