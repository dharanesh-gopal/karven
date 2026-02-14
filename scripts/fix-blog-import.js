import { createClient } from '@sanity/client'

// Inline blog posts data to avoid import issues
const blogPosts = []  // We'll populate this inline

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'qyxjb4t2',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

async function fixBlogImport() {
  console.log('🚀 Starting blog import fix...')
  
  try {
    // Step 1: Create author document first
    console.log('\n📝 Creating author document...')
    const authorId = 'author-karvensen-team'
    
    try {
      await client.createOrReplace({
        _id: authorId,
        _type: 'author',
        name: 'Karvensen Team',
        bio: 'Expert team of engineers, designers, and innovators at Karvensen',
        slug: {
          _type: 'slug',
          current: 'karvensen-team'
        }
      })
      console.log('✅ Author created successfully')
    } catch (error) {
      console.error('❌ Error creating author:', error.message)
    }

    // Step 2: Import blog posts with correct structure
    console.log('\n📚 Importing blog posts...')
    let successCount = 0
    let errorCount = 0

    for (const post of blogPosts) {
      try {
        // Map category values correctly
        let categoryValue = post.category
        if (categoryValue === 'AI' || categoryValue === 'Artificial Intelligence') {
          categoryValue = 'Artificial Intelligence'
        } else if (categoryValue === 'Drone' || categoryValue === 'Drone Technology') {
          categoryValue = 'Drone Technology'
        } else if (categoryValue === 'Cloud' || categoryValue === 'Cloud Computing') {
          categoryValue = 'Cloud Computing'
        } else if (categoryValue === 'LMS' || categoryValue === 'LMS & EdTech') {
          categoryValue = 'LMS & EdTech'
        }

        const blogDoc = {
          _id: `blog-${post.id}`,
          _type: 'blog',
          title: post.title,
          slug: {
            _type: 'slug',
            current: post.id
          },
          excerpt: post.excerpt,
          category: categoryValue,  // String, not reference
          branch: post.branch || null,
          publishedAt: post.date,
          readTime: post.readTime,
          author: {
            _type: 'reference',
            _ref: authorId
          },
          isActive: true
        }

        // Note: Hero images need to be uploaded through Sanity Studio
        // The image URLs are in lib/blog-data.ts for reference

        await client.createOrReplace(blogDoc)
        successCount++
        console.log(`✅ Imported: ${post.title}`)
      } catch (error) {
        errorCount++
        console.error(`❌ Error importing ${post.title}:`, error.message)
      }
    }

    console.log(`\n🎉 Import complete!`)
    console.log(`   ✅ Success: ${successCount}`)
    console.log(`   ❌ Errors: ${errorCount}`)
    console.log('\n📸 Note: Hero images need to be uploaded manually through Sanity Studio.')
    console.log('   The heroImageUrl field has been populated for reference.')
    
  } catch (error) {
    console.error('❌ Fatal error:', error)
    throw error
  }
}

fixBlogImport()
  .then(() => {
    console.log('\n✨ All done!')
    process.exit(0)
  })
  .catch((err) => {
    console.error('\n💥 Script failed:', err)
    process.exit(1)
  })
