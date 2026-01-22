"use client"

import { useState } from "react"
import { Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { blogPosts, blogCategories } from "@/lib/blog-data"

export default function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [postsToShow, setPostsToShow] = useState(6)

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const displayedPosts = filteredPosts.slice(0, postsToShow)

  return (
    <>
      {/* Premium Category Filter Pills */}
      <section className="py-12 bg-white border-b border-indigo-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {blogCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                    : "bg-white text-indigo-700 border-2 border-indigo-200 hover:border-indigo-600 hover:shadow-md"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Blog Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No blog posts found in this category.</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 max-w-7xl mx-auto">
              {displayedPosts.map((post, index) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-indigo-100"
                >
                  {/* Image Section with Category Badge Overlay */}
                  <div className="relative h-56 overflow-hidden bg-indigo-200">
                    {post.heroImage ? (
                      <Image
                        src={post.heroImage}
                        alt={post.title}
                        fill
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                        unoptimized
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-indigo-400">
                        <span className="text-sm">Image loading...</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/10" />
                    {/* Category Badge Overlay */}
                    <div className="absolute top-4 left-4 px-4 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-bold text-indigo-600 shadow-lg z-10">
                      {post.category}
                    </div>
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-indigo-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-indigo-700 leading-relaxed flex-1 line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    
                    {/* Footer with Date */}
                    <div className="flex items-center justify-between pt-4 border-t border-indigo-100">
                      <div className="flex items-center gap-2 text-sm text-indigo-600">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="text-indigo-900 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Read more →
                      </div>
                    </div>
                  </div>
                  </Link>
              ))}
            </div>
          )}
          
          {/* Learn More Button */}
          {postsToShow < filteredPosts.length && (
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setPostsToShow(postsToShow + 6)}
                className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Show More
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
