import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, User } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog & Insights | KarVenSen",
  description:
    "Stay updated with the latest in AI, drone technology, cloud computing, and digital transformation. Expert insights from KarVenSen.",
}

const featuredPost = {
  slug: "ai-agriculture-revolution",
  title: "How AI and Drones Are Revolutionizing Indian Agriculture",
  excerpt:
    "Discover how the combination of artificial intelligence and drone technology is transforming farming practices across India, improving yields, and enabling sustainable agriculture.",
  image: "/drone-flying-over-farm-field-at-sunset.jpg",
  category: "Agriculture Tech",
  author: "Dr. Venkat Rao",
  date: "Jan 10, 2026",
  readTime: "8 min read",
}

const posts = [
  {
    slug: "enterprise-ai-adoption",
    title: "5 Steps to Successful Enterprise AI Adoption",
    excerpt:
      "A practical guide for businesses looking to integrate AI into their operations, from assessment to implementation.",
    image: "/enterprise-ai-dashboard.png",
    category: "AI",
    author: "Priya Sharma",
    date: "Jan 5, 2026",
    readTime: "6 min read",
  },
  {
    slug: "drone-regulations-india",
    title: "Understanding Drone Regulations in India: 2026 Update",
    excerpt:
      "A comprehensive overview of DGCA drone regulations and what they mean for commercial and recreational users.",
    image: "/drone-regulations-documents.jpg",
    category: "Drones",
    author: "Rajesh Kumar",
    date: "Dec 28, 2025",
    readTime: "5 min read",
  },
  {
    slug: "lms-future-education",
    title: "The Future of Education: AI-Powered Learning Management Systems",
    excerpt: "How artificial intelligence is personalizing education and transforming how students learn.",
    image: "/students-using-ai-learning-platform.jpg",
    category: "Education",
    author: "Meera Reddy",
    date: "Dec 20, 2025",
    readTime: "7 min read",
  },
  {
    slug: "cloud-migration-guide",
    title: "Cloud Migration: A Step-by-Step Guide for SMEs",
    excerpt: "Everything small and medium enterprises need to know about moving their infrastructure to the cloud.",
    image: "/cloud-computing-infrastructure.png",
    category: "Cloud",
    author: "Amit Patel",
    date: "Dec 15, 2025",
    readTime: "10 min read",
  },
  {
    slug: "precision-agriculture-drones",
    title: "Precision Agriculture: Maximizing Crop Yields with Drone Data",
    excerpt:
      "Learn how farmers are using drone-captured data to make informed decisions about irrigation and fertilization.",
    image: "/precision-agriculture-drone-mapping.jpg",
    category: "Agriculture Tech",
    author: "Dr. Venkat Rao",
    date: "Dec 10, 2025",
    readTime: "8 min read",
  },
  {
    slug: "erp-digital-transformation",
    title: "ERP Systems: The Backbone of Digital Transformation",
    excerpt: "Why modern ERP solutions are essential for businesses looking to streamline operations and scale.",
    image: "/erp-dashboard.png",
    category: "Enterprise",
    author: "Priya Sharma",
    date: "Dec 5, 2025",
    readTime: "6 min read",
  },
]

const categories = ["All", "AI", "Drones", "Cloud", "Agriculture Tech", "Education", "Enterprise"]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Blog & Insights
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Latest in <span className="text-primary">AI & Technology</span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Expert insights, industry trends, and practical guides on AI, drone technology, cloud computing, and
              digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button key={category} variant={category === "All" ? "default" : "outline"} size="sm">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden bg-card">
            <div className="grid lg:grid-cols-2">
              <div className="relative aspect-video lg:aspect-auto">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <Badge variant="secondary" className="w-fit mb-4">
                  {featuredPost.category}
                </Badge>
                <CardTitle className="text-2xl lg:text-3xl mb-4 text-balance">{featuredPost.title}</CardTitle>
                <CardDescription className="text-base mb-6">{featuredPost.excerpt}</CardDescription>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </div>
                  <span>{featuredPost.date}</span>
                </div>
                <Button asChild className="w-fit">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.slug} className="overflow-hidden bg-card hover:border-primary/50 transition-colors group">
                <div className="relative aspect-video">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-2 mb-4">{post.excerpt}</CardDescription>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-3">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest insights on AI, drones, and technology trends.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
