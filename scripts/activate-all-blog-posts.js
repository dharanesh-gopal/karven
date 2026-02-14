import { createClient } from '@sanity/client'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

async function activateAllBlogPosts() {
  try {
    console.log('🔍 Fetching all blog posts...\n')

    // Get all blog posts
    const posts = await client.fetch(`*[_type == "blog"] {
      _id,
      title,
      isActive,
      featured
    }`)

    console.log(`📊 Found ${posts.length} blog posts\n`)

    let activatedCount = 0
    let alreadyActiveCount = 0

    // Update each post to ensure isActive is true
    for (const post of posts) {
      const currentStatus = post.isActive === true
      const isFeatured = post.featured === true

      if (!currentStatus) {
        // Activate the post
        await client
          .patch(post._id)
          .set({ 
            isActive: true,
          })
          .commit()

        console.log(`✅ Activated: "${post.title}"`)
        activatedCount++
      } else {
        console.log(`✓ Already active: "${post.title}"${isFeatured ? ' (Featured)' : ''}`)
        alreadyActiveCount++
      }
    }

    console.log('\n' + '='.repeat(60))
    console.log('📈 SUMMARY:')
    console.log('='.repeat(60))
    console.log(`Total posts: ${posts.length}`)
    console.log(`Newly activated: ${activatedCount}`)
    console.log(`Already active: ${alreadyActiveCount}`)
    console.log('='.repeat(60))
    console.log('\n✨ All blog posts are now active!\n')

    // Show featured status
    const featuredPosts = posts.filter(p => p.featured === true)
    if (featuredPosts.length > 0) {
      console.log(`⭐ Featured posts (${featuredPosts.length}):`)
      featuredPosts.forEach(p => console.log(`   - ${p.title}`))
    } else {
      console.log('💡 Tip: You can mark posts as "Featured" in the Settings tab to highlight them.')
    }

  } catch (error) {
    console.error('❌ Error:', error.message)
    process.exit(1)
  }
}

// Run the script
activateAllBlogPosts()
