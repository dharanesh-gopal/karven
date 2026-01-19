import { Calendar, User, ArrowRight, Search } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const articles = [
    {
      id: 1,
      title: "The Future of Precision Agriculture with Drone Technology",
      excerpt: "Explore how agricultural drones are revolutionizing farming practices and helping farmers maximize yields while minimizing environmental impact.",
      author: "Karthika Venkatesan",
      date: "January 15, 2025",
      category: "Agriculture",
      readTime: "5 min read",
      image: "🚁",
    },
    {
      id: 2,
      title: "AI in Enterprise: Practical Applications and ROI",
      excerpt: "Discover how leading enterprises are leveraging AI to streamline operations, improve decision-making, and drive business growth.",
      author: "Tech Team",
      date: "January 10, 2025",
      category: "AI",
      readTime: "7 min read",
      image: "🤖",
    },
    {
      id: 3,
      title: "Building a Successful Learning Management System",
      excerpt: "Best practices for implementing an LMS that engages learners, tracks progress, and delivers measurable educational outcomes.",
      author: "Education Experts",
      date: "January 5, 2025",
      category: "Education",
      readTime: "6 min read",
      image: "📚",
    },
    {
      id: 4,
      title: "Cloud Infrastructure Best Practices for Scalability",
      excerpt: "Learn how to design, deploy, and manage cloud infrastructure that scales with your business needs while maintaining security.",
      author: "Cloud Engineers",
      date: "December 28, 2024",
      category: "Cloud",
      readTime: "8 min read",
      image: "☁️",
    },
    {
      id: 5,
      title: "Make in India: Supporting Local Manufacturing Innovation",
      excerpt: "How Karvensen supports Indian manufacturing and contributes to the Make in India initiative through quality drone assembly.",
      author: "Karthika Venkatesan",
      date: "December 20, 2024",
      category: "Business",
      readTime: "5 min read",
      image: "🇮🇳",
    },
    {
      id: 6,
      title: "Empowering Farmers: Stories from Our Training Programs",
      excerpt: "Real stories from farmers who have transformed their operations using drone technology and data-driven insights.",
      author: "Community Team",
      date: "December 15, 2024",
      category: "Training",
      readTime: "4 min read",
      image: "👨‍🌾",
    },
  ]

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const categories = [...new Set(articles.map((a) => a.category))]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 border-b bg-gradient-to-br from-indigo-500/5 via-white to-indigo-500/5 dark:from-indigo-500/10 dark:via-black dark:to-indigo-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Our <span className="text-indigo-500">Blog</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Insights, stories, and updates on AI, drone technology, enterprise solutions, and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-3 max-w-6xl mx-auto">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Search */}
              <div className="mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              {/* Articles Grid */}
              <div className="space-y-8">
                {filteredArticles.length > 0 ? (
                  filteredArticles.map((article) => (
                    <article
                      key={article.id}
                      className="pb-8 border-b border-gray-200 dark:border-gray-800 last:border-b-0"
                    >
                      <div className="flex gap-4 mb-4">
                        <div className="text-4xl">{article.image}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="inline-flex items-center rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400">
                              {article.category}
                            </span>
                            <span className="text-xs text-gray-600 dark:text-gray-400">{article.readTime}</span>
                          </div>
                          <h2 className="text-2xl font-bold mb-3 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                            {article.title}
                          </h2>
                          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{article.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                              <div className="flex items-center gap-1">
                                <User className="h-4 w-4" />
                                {article.author}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {article.date}
                              </div>
                            </div>
                            <Link to="#" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:gap-3 transition-all">
                              Read More
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-600 dark:text-gray-400">No articles found matching your search.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Categories */}
              <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 mb-6">
                <h3 className="font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSearchTerm(category)}
                      className="block w-full text-left px-4 py-2 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Latest Articles */}
              <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                <h3 className="font-semibold mb-4">Recent Articles</h3>
                <div className="space-y-3">
                  {articles.slice(0, 3).map((article) => (
                    <Link
                      key={article.id}
                      to="#"
                      className="block text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {article.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPage
