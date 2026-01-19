import type { Metadata } from "next"
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog | Karvensen",
  description:
    "Insights on AI, drone technology, enterprise solutions, and digital transformation. Expert perspectives from the Karvensen team.",
}

// Sample blog posts - Replace with CMS data later
const blogPosts = [
  {
    id: "ai-agriculture",
    title: "How AI is Revolutionizing Agriculture in India",
    excerpt:
      "Exploring the impact of artificial intelligence and drone technology on modern farming practices, crop monitoring, and yield optimization.",
    category: "AI & Agriculture",
    date: "2024-01-15",
    readTime: "5 min read",
    author: "Karvensen Team",
  },
  {
    id: "drone-adoption",
    title: "The Rise of Drone Technology in Precision Farming",
    excerpt:
      "Understanding how agricultural drones are transforming crop management, pest control, and irrigation planning for farmers across the country.",
    category: "Drone Technology",
    date: "2024-01-10",
    readTime: "6 min read",
    author: "Karvensen Team",
  },
  {
    id: "make-in-india",
    title: "Building Drones in India: Quality Meets Innovation",
    excerpt:
      "An inside look at our Make in India initiative - sourcing components responsibly and assembling high-quality drones locally.",
    category: "Innovation",
    date: "2024-01-05",
    readTime: "4 min read",
    author: "Karvensen Team",
  },
  {
    id: "enterprise-digital-transformation",
    title: "Digital Transformation: Why ERP and LMS Matter",
    excerpt:
      "How modern ERP and LMS solutions are helping Indian enterprises streamline operations, improve efficiency, and scale faster.",
    category: "Enterprise Solutions",
    date: "2023-12-28",
    readTime: "7 min read",
    author: "Karvensen Team",
  },
  {
    id: "cloud-security",
    title: "Cloud Security Best Practices for Growing Businesses",
    excerpt:
      "Essential security measures and best practices for businesses moving to the cloud, ensuring data protection and compliance.",
    category: "Cloud & Security",
    date: "2023-12-20",
    readTime: "5 min read",
    author: "Karvensen Team",
  },
  {
    id: "education-technology",
    title: "Empowering Youth Through Technology Education",
    excerpt:
      "Our experience conducting drone awareness workshops in schools and colleges, and why early tech education matters.",
    category: "Education",
    date: "2023-12-15",
    readTime: "4 min read",
    author: "Karvensen Team",
  },
]

const categories = ["All", "AI & Agriculture", "Drone Technology", "Enterprise Solutions", "Innovation", "Cloud & Security", "Education"]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium shadow-sm mb-6">
              <BookOpen className="h-4 w-4 text-gray-700" />
              <span className="text-gray-900">Insights & Updates</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
              The Karvensen <span className="text-gray-900">Blog</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Explore the latest insights on AI, drone technology, enterprise solutions, and digital transformation. 
              Expert perspectives from our team.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <span
                key={category}
                className="cursor-pointer px-3 py-1 rounded text-sm transition-colors bg-white border border-gray-300 text-gray-700 hover:bg-gray-700 hover:text-white"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {blogPosts.map((post) => (
              <div key={post.id} className="flex flex-col bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:border-gray-400 transition-all group">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block px-3 py-1 rounded bg-gray-200 text-gray-900 text-sm">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-gray-700 transition-colors text-gray-900 mb-4">
                    {post.title}
                  </h3>
                  <p className="mb-4 leading-relaxed flex-1 text-gray-600">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-600 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
