import fs from 'fs'
import { blogPosts } from '../lib/blog-data.ts'

// Helper to create slug from ID
function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

// Generate NDJSON
const ndjsonLines = []

// Blog Page Settings
ndjsonLines.push(JSON.stringify({
  _id: 'blogPageSettings',
  _type: 'blogPageSettings',
  heroTitle: 'The KarVenSen Blog',
  heroSubtitle: 'Explore cutting-edge insights on Artificial Intelligence, Drone Technology, Cloud Computing, LMS platforms, and next-generation digital solutions.',
  heroBadgeText: 'Insights & Updates',
  heroVideoUrl: '/ai-background.mp4',
  categories: ['All', 'Artificial Intelligence', 'Drone Technology', 'Cloud Computing', 'LMS & EdTech'],
  isActive: true,
}))

// Author
ndjsonLines.push(JSON.stringify({
  _id: 'author-karvensen-team',
  _type: 'author',
  name: 'Karvensen Team',
  bio: 'Expert team of technology professionals specializing in AI, Drones, Cloud, and EdTech solutions.',
}))

// Categories
const categories = [
  { id: 'ai', title: 'Artificial Intelligence', description: 'Articles about AI, machine learning, and intelligent systems' },
  { id: 'drone', title: 'Drone Technology', description: 'Insights on drone applications and aerial technology' },
  { id: 'cloud', title: 'Cloud Computing', description: 'Cloud infrastructure, migration, and best practices' },
  { id: 'lms', title: 'LMS & EdTech', description: 'Learning management systems and educational technology' },
]

categories.forEach(cat => {
  ndjsonLines.push(JSON.stringify({
    _id: `category-${cat.id}`,
    _type: 'category',
    title: cat.title,
    description: cat.description,
  }))
})

// Blog Posts
blogPosts.forEach(post => {
  const slug = slugify(post.id)
  const categoryId = post.category === 'Artificial Intelligence' ? 'ai' :
                     post.category === 'Drone Technology' ? 'drone' :
                     post.category === 'Cloud Computing' ? 'cloud' : 'lms'

  const blogPost = {
    _id: `blog-${slug}`,
    _type: 'blog',
    title: post.title,
    slug: { _type: 'slug', current: slug },
    excerpt: post.excerpt,
    publishedAt: post.date,
    readTime: post.readTime,
    category: {
      _type: 'reference',
      _ref: `category-${categoryId}`,
    },
    author: {
      _type: 'reference',
      _ref: 'author-karvensen-team',
    },
  }

  // Add hero image if it exists
  if (post.heroImage) {
    if (post.heroImage.startsWith('http')) {
      blogPost.heroImageUrl = post.heroImage
    } else {
      blogPost.heroImageUrl = post.heroImage
    }
  }

  if (post.heroVideo) {
    blogPost.heroVideoUrl = post.heroVideo
  }

  ndjsonLines.push(JSON.stringify(blogPost))
})

// Write to file
const ndjson = ndjsonLines.join('\n')
fs.writeFileSync('scripts/blog-complete-import.ndjson', ndjson, 'utf-8')

console.log(`✓ Generated NDJSON file with ${ndjsonLines.length} documents`)
console.log('  - 1 blog page settings')
console.log('  - 1 author')
console.log('  - 4 categories')
console.log(`  - ${blogPosts.length} blog posts`)
console.log('\nRun: npx sanity dataset import scripts/blog-complete-import.ndjson production')
