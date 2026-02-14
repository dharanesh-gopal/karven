"use client"

import { use } from "react"
import { Calendar, ArrowLeft, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import ScrollToTop from "@/components/scroll-to-top"
import { useSanityData } from "@/hooks/useSanityData"
import { urlFor } from "@/sanity/lib/image"
import { BlogContentRenderer } from "@/components/blog-content-renderer"

// Category-based fallback images from public folder
const categoryFallbacks: Record<string, string> = {
  "Artificial Intelligence": "/enterprise-ai-dashboard.png",
  "Drone Technology": "/drone-flying-over-farm-field-at-sunset.jpg",
  "Cloud Computing": "/cloud-computing-infrastructure.png",
  "LMS & EdTech": "/training-drone.png",
}

const defaultBlogImage = "/blog-img1.jpg"

type Props = {
  params: Promise<{ slug: string }>
}

export default function BlogDetailPage({ params }: Props) {
  const { slug } = use(params)

  // Fetch blog post from Sanity with defensive type conversion
  const { data: post, loading } = useSanityData<any>(
    `*[_type == "blog" && slug.current == $slug][0]{
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
      "authorImage": author->image,
      heroImage,
      body,
      ctaTitle,
      ctaSubtitle,
      ctaButton1Text,
      ctaButton1Link,
      ctaButton2Text,
      ctaButton2Link
    }`,
    { slug },
    null
  )

  // Fetch related posts (same category, excluding current post)
  const { data: relatedPosts } = useSanityData<any[]>(
    `*[_type == "blog" && slug.current != $slug][0...3] | order(publishedAt desc){
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
      publishedAt,
      heroImage
    }`,
    { slug },
    []
  )

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
          <p className="mt-4 text-gray-600">Loading article...</p>
        </div>
      </div>
    )
  }

  if (!post) {
    notFound()
  }

  console.log('Blog post data:', {
    hasBody: !!post.body,
    bodyLength: post.body?.length,
    bodyPreview: post.body?.slice(0, 2)
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Scroll to Top on Page Load */}
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="relative w-full bg-gray-900 min-h-[600px]">
        {post.heroVideo ? (
          <div className="absolute inset-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={post.heroVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-gray-900/40" />
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
            <Image
              src={post.heroImage?.asset ? urlFor(post.heroImage).url() : (categoryFallbacks[post.category] || defaultBlogImage)}
              alt={post.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-gray-900/40" />
          </div>
        )}

        {/* Content Overlay */}
        <div className="relative z-10 container mx-auto px-4 max-w-4xl py-16 flex flex-col justify-end min-h-[600px]">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-all duration-300 font-medium group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Blog</span>
          </Link>

          {/* Category & Branch Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-bold border border-white/30">
              {post.category}
            </span>
            {post.branch && (
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-semibold border border-white/20">
                {post.branch}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="text-sm font-medium">
                {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </span>
            </div>
            {post.authorName && (
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">By <span className="text-white font-semibold">{post.authorName}</span></span>
              </div>
            )}
            {post.readTime && (
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{post.readTime}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-2xl text-gray-700 leading-relaxed mb-12 font-light border-l-4 border-primary pl-6 italic">
              {post.excerpt}
            </p>
          )}

          {/* Main Content */}
          {post.body && post.body.length > 0 ? (
            <BlogContentRenderer content={post.body} />
          ) : (
            <p className="text-gray-600">No content available for this post.</p>
          )}

          {/* CTA Section */}
          <div className="relative overflow-hidden rounded-3xl my-16 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>
            
            <div className="relative z-10 p-12 md:p-16">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
                  {post.ctaTitle || `Interested in ${post.branch || post.category}?`}
                </h3>
                
                <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                  {post.ctaSubtitle || 'Learn how Karvensen can help you implement cutting-edge solutions for your business.'}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={post.ctaButton1Link || "/contact"}
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
                  >
                    <span>{post.ctaButton1Text || 'Contact Our Experts'}</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                  <Link
                    href={post.ctaButton2Link || "/services"}
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-bold hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <span>{post.ctaButton2Text || 'Explore Our Services'}</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts Section */}
      {relatedPosts && relatedPosts.length > 0 && (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white border-t-2 border-gray-100">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex items-center gap-3 mb-12">
              <div className="p-3 bg-gray-100 rounded-xl">
                <BookOpen className="h-6 w-6 text-gray-900" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Related Articles</h2>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost._id}
                  href={`/blog/${relatedPost.slug.current}`}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedPost.heroImage?.asset ? urlFor(relatedPost.heroImage).url() : (categoryFallbacks[relatedPost.category] || defaultBlogImage)}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 px-4 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-bold text-gray-900 shadow-lg z-10">
                      {relatedPost.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(relatedPost.publishedAt).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </span>
                      </div>
                      <div className="text-gray-900 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Read →
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
