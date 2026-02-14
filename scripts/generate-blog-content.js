import fs from 'fs'

// Helper function to create Portable Text block content
function createContent(title, excerpt, category, branch) {
  return [
    // Introduction
    {
      _type: 'block',
      _key: `intro-${Math.random().toString(36).substr(2, 9)}`,
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: `In today's rapidly evolving technological landscape, ${branch || category} has emerged as a critical area of innovation and development. This comprehensive guide explores the key concepts, practical applications, and future trends that are shaping this dynamic field.`,
        },
      ],
    },
    // Section 1
    {
      _type: 'block',
      _key: `h2-1-${Math.random().toString(36).substr(2, 9)}`,
      style: 'h2',
      children: [{ _type: 'span', text: 'Understanding the Fundamentals' }],
    },
    {
      _type: 'block',
      _key: `p1-${Math.random().toString(36).substr(2, 9)}`,
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: `${excerpt} At the core of this technology lies a combination of advanced algorithms, sophisticated hardware, and innovative software solutions that work in harmony to deliver exceptional results.`,
        },
      ],
    },
    {
      _type: 'block',
      _key: `p2-${Math.random().toString(36).substr(2, 9)}`,
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Organizations across industries are recognizing the transformative potential of these technologies. From small startups to large enterprises, businesses are investing heavily in research, development, and implementation to gain competitive advantages.',
        },
      ],
    },
    // Section 2
    {
      _type: 'block',
      _key: `h2-2-${Math.random().toString(36).substr(2, 9)}`,
      style: 'h2',
      children: [{ _type: 'span', text: 'Key Benefits and Applications' }],
    },
    {
      _type: 'block',
      _key: `p3-${Math.random().toString(36).substr(2, 9)}`,
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'The practical applications of this technology span multiple domains and use cases:',
        },
      ],
    },
    {
      _type: 'block',
      _key: `list1-${Math.random().toString(36).substr(2, 9)}`,
      listItem: 'bullet',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Enhanced operational efficiency through automation and intelligent decision-making',
        },
      ],
    },
    {
      _type: 'block',
      _key: `list2-${Math.random().toString(36).substr(2, 9)}`,
      listItem: 'bullet',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Cost reduction by optimizing resource allocation and minimizing waste',
        },
      ],
    },
    {
      _type: 'block',
      _key: `list3-${Math.random().toString(36).substr(2, 9)}`,
      listItem: 'bullet',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Improved accuracy and precision in complex tasks and processes',
        },
      ],
    },
    {
      _type: 'block',
      _key: `list4-${Math.random().toString(36).substr(2, 9)}`,
      listItem: 'bullet',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Scalability to handle growing demands and expanding operations',
        },
      ],
    },
    {
      _type: 'block',
      _key: `list5-${Math.random().toString(36).substr(2, 9)}`,
      listItem: 'bullet',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Real-time insights and analytics for better strategic planning',
        },
      ],
    },
    // Section 3
    {
      _type: 'block',
      _key: `h2-3-${Math.random().toString(36).substr(2, 9)}`,
      style: 'h2',
      children: [{ _type: 'span', text: 'Implementation Best Practices' }],
    },
    {
      _type: 'block',
      _key: `h3-1-${Math.random().toString(36).substr(2, 9)}`,
      style: 'h3',
      children: [{ _type: 'span', text: '1. Strategic Planning and Assessment' }],
    },
    {
      _type: 'block',
      _key: `p4-${Math.random().toString(36).substr(2, 9)}`,
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Before embarking on implementation, conduct a thorough assessment of your organizational needs, existing infrastructure, and desired outcomes. This foundational step ensures alignment between technology capabilities and business objectives.',
        },
      ],
    },
    {
      _type: 'block',
      _key: `h3-2-${Math.random().toString(36).substr(2, 9)}`,
      style: 'h3',
      children: [{ _type: 'span', text: '2. Choosing the Right Technology Stack' }],
    },
    {
      _type: 'block',
      _key: `p5-${Math.random().toString(36).substr(2, 9)}`,
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Selecting appropriate tools, platforms, and frameworks is crucial for long-term success. Consider factors such as scalability, compatibility, vendor support, and community adoption when making technology decisions.',
        },
      ],
    },
    {
      _type: 'block',
      _key: `h3-3-${Math.random().toString(36).substr(2, 9)}`,
      style: 'h3',
      children: [{ _type: 'span', text: '3. Team Training and Development' }],
    },
    {
      _type: 'block',
      _key: `p6-${Math.random().toString(36).substr(2, 9)}`,
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Invest in comprehensive training programs for your team. Technology is only as effective as the people who use it. Building internal expertise ensures sustainable implementation and ongoing optimization.',
        },
      ],
    },
    // Quote
    {
      _type: 'block',
      _key: `quote-${Math.random().toString(36).substr(2, 9)}`,
      style: 'blockquote',
      children: [
        {
          _type: 'span',
          text: `"Success in ${category} requires not just adopting the latest tools, but fundamentally rethinking how we approach problems and create value."`,
        },
      ],
    },
    // Section 4
    {
      _type: 'block',
      _key: `h2-4-${Math.random().toString(36).substr(2, 9)}`,
      style: 'h2',
      children: [{ _type: 'span', text: 'Challenges and Solutions' }],
    },
    {
      _type: 'block',
      _key: `p7-${Math.random().toString(36).substr(2, 9)}`,
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'While the benefits are significant, implementation comes with its own set of challenges:',
        },
      ],
    },
    {
      _type: 'block',
      _key: `p8-${Math.random().toString(36).substr(2, 9)}`,
      style: 'normal',
      children: [
        {
          _type: 'span',
          marks: ['strong'],
          text: 'Integration Complexity: ',
        },
        {
          _type: 'span',
          text: 'Legacy systems often require careful integration planning. Modern APIs and middleware solutions can bridge the gap between old and new infrastructure.',
        },
      ],
    },
    {
      _type: 'block',
      _key: `p9-${Math.random().toString(36).substr(2, 9)}`,
      style: 'normal',
      children: [
        {
          _type: 'span',
          marks: ['strong'],
          text: 'Data Quality and Governance: ',
        },
        {
          _type: 'span',
          text: 'Ensure robust data management practices, including validation, cleaning, and security protocols to maintain data integrity throughout the system.',
        },
      ],
    },
    {
      _type: 'block',
      _key: `p10-${Math.random().toString(36).substr(2, 9)}`,
      style: 'normal',
      children: [
        {
          _type: 'span',
          marks: ['strong'],
          text: 'Change Management: ',
        },
        {
          _type: 'span',
          text: 'Organizational resistance to change can derail even the best technical implementations. Focus on clear communication, stakeholder engagement, and demonstrating quick wins.',
        },
      ],
    },
    // Section 5
    {
      _type: 'block',
      _key: `h2-5-${Math.random().toString(36).substr(2, 9)}`,
      style: 'h2',
      children: [{ _type: 'span', text: 'Future Trends and Innovations' }],
    },
    {
      _type: 'block',
      _key: `p11-${Math.random().toString(36).substr(2, 9)}`,
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'The landscape continues to evolve at an unprecedented pace. Emerging trends that will shape the future include:',
        },
      ],
    },
    {
      _type: 'block',
      _key: `list6-${Math.random().toString(36).substr(2, 9)}`,
      listItem: 'number',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Advanced automation capabilities that reduce manual intervention to near-zero levels',
        },
      ],
    },
    {
      _type: 'block',
      _key: `list7-${Math.random().toString(36).substr(2, 9)}`,
      listItem: 'number',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Enhanced integration with complementary technologies for holistic solutions',
        },
      ],
    },
    {
      _type: 'block',
      _key: `list8-${Math.random().toString(36).substr(2, 9)}`,
      listItem: 'number',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Improved accessibility and democratization of advanced capabilities',
        },
      ],
    },
    {
      _type: 'block',
      _key: `list9-${Math.random().toString(36).substr(2, 9)}`,
      listItem: 'number',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Sustainability-focused innovations that prioritize environmental impact',
        },
      ],
    },
    {
      _type: 'block',
      _key: `list10-${Math.random().toString(36).substr(2, 9)}`,
      listItem: 'number',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Regulatory frameworks evolving to address new ethical and privacy concerns',
        },
      ],
    },
    // Conclusion
    {
      _type: 'block',
      _key: `h2-6-${Math.random().toString(36).substr(2, 9)}`,
      style: 'h2',
      children: [{ _type: 'span', text: 'Conclusion' }],
    },
    {
      _type: 'block',
      _key: `p12-${Math.random().toString(36).substr(2, 9)}`,
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: `${title.split(':')[0]} represents a significant opportunity for organizations willing to embrace change and invest in the future. By understanding the fundamentals, implementing best practices, and staying ahead of emerging trends, businesses can unlock tremendous value and maintain competitive advantages in their respective markets.`,
        },
      ],
    },
    {
      _type: 'block',
      _key: `p13-${Math.random().toString(36).substr(2, 9)}`,
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'At Karvensen, we specialize in helping organizations navigate these complex technological landscapes. Our team of experts brings deep domain knowledge, proven implementation experience, and a commitment to delivering measurable results. Whether you\'re just beginning your journey or looking to optimize existing systems, we\'re here to help you succeed.',
        },
      ],
    },
  ]
}

// Read blog data
const blogDataPath = new URL('../lib/blog-data.ts', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1')
const blogDataContent = fs.readFileSync(blogDataPath, 'utf-8')

// Extract blog posts data (simplified parsing)
const blogPostsMatch = blogDataContent.match(/export const blogPosts: BlogPost\[\] = \[([\s\S]*)\]/)
if (!blogPostsMatch) {
  console.error('Could not find blogPosts array')
  process.exit(1)
}

// Parse the blog posts (simplified - using eval in a controlled context)
// In production, use a proper parser
const blogPosts = []
const postMatches = blogDataContent.matchAll(/\{[^}]*id:\s*"([^"]+)"[^}]*title:\s*"([^"]+)"[^}]*excerpt:\s*"([^"]+)"[^}]*category:\s*"([^"]+)"[^}]*branch:\s*"([^"]+)"[^}]*date:\s*"([^"]+)"[^}]*readTime:\s*"([^"]+)"[^}]*author:\s*"([^"]+)"[^}]*heroImage[^,}]*[,}]/gs)

for (const match of postMatches) {
  const fullMatch = match[0]
  const id = fullMatch.match(/id:\s*"([^"]+)"/)?.[1]
  const title = fullMatch.match(/title:\s*"([^"]+)"/)?.[1]
  const excerpt = fullMatch.match(/excerpt:\s*"([^"]+)"/)?.[1]
  const category = fullMatch.match(/category:\s*"([^"]+)"/)?.[1]
  const branch = fullMatch.match(/branch:\s*"([^"]+)"/)?.[1]
  const date = fullMatch.match(/date:\s*"([^"]+)"/)?.[1]
  const readTime = fullMatch.match(/readTime:\s*"([^"]+)"/)?.[1]
  const heroImage = fullMatch.match(/heroImage:\s*"([^"]+)"/)?.[1]
  const heroVideo = fullMatch.match(/heroVideo:\s*"([^"]+)"/)?.[1]

  if (id && title && excerpt && category && date) {
    blogPosts.push({ id, title, excerpt, category, branch, date, readTime, heroImage, heroVideo })
  }
}

console.log(`Found ${blogPosts.length} blog posts`)

// Helper to create slug from ID
function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

// Generate NDJSON
const ndjsonLines = []

// Blog Page Settings
ndjsonLines.push(
  JSON.stringify({
    _id: 'blogPageSettings',
    _type: 'blogPageSettings',
    heroTitle: 'The KarVenSen Blog',
    heroSubtitle:
      'Explore cutting-edge insights on Artificial Intelligence, Drone Technology, Cloud Computing, LMS platforms, and next-generation digital solutions.',
    heroBadgeText: 'Insights & Updates',
    heroVideoUrl: '/ai-background.mp4',
    categories: ['All', 'Artificial Intelligence', 'Drone Technology', 'Cloud Computing', 'LMS & EdTech'],
    isActive: true,
  })
)

// Author
ndjsonLines.push(
  JSON.stringify({
    _id: 'author-karvensen-team',
    _type: 'author',
    name: 'Karvensen Team',
    bio: 'Expert team of technology professionals specializing in AI, Drones, Cloud, and EdTech solutions.',
  })
)

// Categories
const categories = [
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    description: 'Articles about AI, machine learning, and intelligent systems',
  },
  { id: 'drone', title: 'Drone Technology', description: 'Insights on drone applications and aerial technology' },
  { id: 'cloud', title: 'Cloud Computing', description: 'Cloud infrastructure, migration, and best practices' },
  {
    id: 'lms',
    title: 'LMS & EdTech',
    description: 'Learning management systems and educational technology',
  },
]

categories.forEach((cat) => {
  ndjsonLines.push(
    JSON.stringify({
      _id: `category-${cat.id}`,
      _type: 'category',
      title: cat.title,
      description: cat.description,
    })
  )
})

// Blog Posts with Content
blogPosts.forEach((post) => {
  const slug = slugify(post.id)
  const categoryId =
    post.category === 'Artificial Intelligence'
      ? 'ai'
      : post.category === 'Drone Technology'
        ? 'drone'
        : post.category === 'Cloud Computing'
          ? 'cloud'
          : 'lms'

  const blogPost = {
    _id: `blog-${slug}`,
    _type: 'blog',
    title: post.title,
    slug: { _type: 'slug', current: slug },
    excerpt: post.excerpt,
    category: post.category,
    branch: post.branch,
    publishedAt: post.date,
    readTime: post.readTime,
    author: {
      _type: 'reference',
      _ref: 'author-karvensen-team',
    },
    // Generate content for the blog post
    body: createContent(post.title, post.excerpt, post.category, post.branch),
  }

  // Add hero image if it exists
  if (post.heroImage) {
    blogPost.heroImageUrl = post.heroImage
  }

  if (post.heroVideo) {
    blogPost.heroVideoUrl = post.heroVideo
  }

  ndjsonLines.push(JSON.stringify(blogPost))
})

// Write to file
const ndjson = ndjsonLines.join('\n')
const outputPath = 'scripts/blog-with-content.ndjson'
fs.writeFileSync(outputPath, ndjson, 'utf-8')

console.log(`\n✅ Successfully generated NDJSON file with ${ndjsonLines.length} documents`)
console.log(`   - 1 blog page settings`)
console.log(`   - 1 author`)
console.log(`   - ${categories.length} categories`)
console.log(`   - ${blogPosts.length} blog posts WITH CONTENT`)
console.log(`\n📁 Output: ${outputPath}`)
console.log(`\n🚀 To import into Sanity, run:`)
console.log(`   npx sanity dataset import ${outputPath} production --replace`)
console.log(`\n⚠️  Note: Using --replace will DELETE existing blog data and replace it with new data`)
console.log(`   Remove --replace flag if you want to keep existing data and add new items`)
