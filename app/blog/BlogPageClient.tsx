"use client"

import { useState } from "react"
import type { Metadata } from "next"
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useSanityData } from "@/hooks/useSanityData"
import { urlFor } from "@/sanity/lib/image"

// Category-based fallback images from public folder
const categoryFallbacks: Record<string, string> = {
  "Artificial Intelligence": "/enterprise-ai-dashboard.png",
  "Drone Technology": "/drone-flying-over-farm-field-at-sunset.jpg",
  "Cloud Computing": "/cloud-computing-infrastructure.png",
  "LMS & EdTech": "/training-drone.png",
}

const defaultBlogImage = "/blog-img1.jpg"

interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  category: string
  branch?: string
  publishedAt: string
  readTime: string
  authorName?: string
  heroImage?: any
}

interface BlogPageSettings {
  heroTitle: string
  heroSubtitle: string
  heroBadgeText?: string
  heroBackgroundVideoUrl?: string
  categories: string[]
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  // Fetch blog page settings
  const { data: pageSettings } = useSanityData<BlogPageSettings>(
    `*[_type == "blogPageSettings" && isActive == true][0]{
      heroTitle,
      heroSubtitle,
      heroBadgeText,
      "heroBackgroundVideoUrl": heroBackgroundVideo.asset->url,
      categories
    }`,
    {},
    {
      heroTitle: "The KarVenSen Blog",
      heroSubtitle: "Explore cutting-edge insights on Artificial Intelligence, Drone Technology, Cloud Computing, LMS platforms, and next-generation digital solutions.",
      heroBadgeText: "Insights & Updates",
      categories: ["All", "Artificial Intelligence", "Drone Technology", "Cloud Computing", "LMS & EdTech"]
    }
  )

  // Fetch all blog posts with defensive type conversion
  const { data: allPosts, loading } = useSanityData<BlogPost[]>(
    `*[_type == "blog" && defined(slug.current)] | order(publishedAt desc){
      _id,
      title,
      slug,
      excerpt,
      "category": coalesce(
        select(
          category._ref == "category-ai" => "Artificial Intelligence",
          category._ref == "category-drone" => "Drone Technology",
          category._ref == "category-cloud" => "Cloud Computing",
          category._ref == "category-lms" => "LMS & EdTech"
        ),
        category,
        "Uncategorized"
      ),
      branch,
      publishedAt,
      readTime,
      "authorName": coalesce(author->name, author, "Karvensen Team"),
      heroImage
    }`,
    {},
    []
  )

  // Filter posts by category
  const filteredPosts = activeCategory === "All" 
    ? allPosts 
    : allPosts?.filter(post => post.category === activeCategory)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Animated Background */}
      <section className="relative py-32 overflow-hidden bg-gray-900">
        {/* Video Background */}
        {pageSettings?.heroBackgroundVideoUrl && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-70 z-0"
          >
            <source src={pageSettings.heroBackgroundVideoUrl} type="video/mp4" />
          </video>
        )}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(17,24,39,0.5)] via-[rgba(31,41,55,0.4)] to-[rgba(0,0,0,0.5)] z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Premium Badge */}
            {pageSettings?.heroBadgeText && (
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white bg-opacity-90 backdrop-blur-md border border-gray-300 text-gray-900 rounded-full text-sm font-semibold mb-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <BookOpen className="h-4 w-4" />
                <span>{pageSettings.heroBadgeText}</span>
              </div>
            )}
            
            {/* Main Heading with Green & Black */}
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-white">{pageSettings?.heroTitle?.split(' ')[0] || 'The'} </span>
              <span className="text-white">{pageSettings?.heroTitle?.split(' ')[1] || 'KarVenSen'} </span>
              <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                {pageSettings?.heroTitle?.split(' ').slice(2).join(' ') || 'Blog'}
              </span>
            </h1>
            
            {/* Enhanced Description */}
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed max-w-3xl mx-auto">
              {pageSettings?.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="border-b border-gray-200 bg-white sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto gap-2 py-6 scrollbar-hide">
            {pageSettings?.categories?.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
              <p className="mt-4 text-gray-600">Loading blog posts...</p>
            </div>
          ) : filteredPosts && filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => {
                const fallbackImage = categoryFallbacks[post.category] || defaultBlogImage
                const imageSrc = post.heroImage?.asset 
                  ? urlFor(post.heroImage).width(600).height(400).url() 
                  : fallbackImage
                
                return (
                <Link
                  key={post._id}
                  href={"/blog/" + post.slug.current}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-emerald-400 to-teal-500">
                    <Image
                      src={imageSrc}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white bg-opacity-95 backdrop-blur-sm text-gray-900 px-4 py-[0.375rem] rounded-full text-xs font-bold shadow-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Branch Tag */}
                    {post.branch && (
                      <div className="mb-3">
                        <span className="inline-block bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">
                          {post.branch}
                        </span>
                      </div>
                    )}

                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-[0.875rem] w-[0.875rem]" />
                          <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-[0.875rem] w-[0.875rem]" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform text-emerald-600" />
                    </div>
                  </div>
                </Link>
              )})}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">No blog posts found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
