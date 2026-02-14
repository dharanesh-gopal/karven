import { createClient } from '@sanity/client'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

const POSTS_PER_CATEGORY = 6 // Keep only 6 posts per category

async function limitBlogsPerCategory() {
  try {
    console.log('🔍 Fetching all blog posts...\n')

    // Get all active blog posts with category
    const posts = await client.fetch(`*[_type == "blog" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
      _id,
      title,
      category,
      publishedAt,
      isActive
    }`)

    console.log(`📊 Found ${posts.length} blog posts\n`)

    // Group posts by category
    const postsByCategory = {}
    posts.forEach(post => {
      const cat = post.category || 'Uncategorized'
      if (!postsByCategory[cat]) {
        postsByCategory[cat] = []
      }
      postsByCategory[cat].push(post)
    })

    console.log('📋 Posts by category:')
    Object.keys(postsByCategory).forEach(cat => {
      console.log(`   ${cat}: ${postsByCategory[cat].length} posts`)
    })
    console.log('')

    let keptCount = 0
    let deactivatedCount = 0

    // Process each category
    for (const [category, categoryPosts] of Object.entries(postsByCategory)) {
      console.log(`\n${'='.repeat(70)}`)
      console.log(`📁 Category: ${category}`)
      console.log('='.repeat(70))

      // Sort by publishedAt (most recent first)
      const sortedPosts = categoryPosts.sort((a, b) => 
        new Date(b.publishedAt) - new Date(a.publishedAt)
      )

      // Keep first POSTS_PER_CATEGORY, deactivate the rest
      for (let i = 0; i < sortedPosts.length; i++) {
        const post = sortedPosts[i]
        
        if (i < POSTS_PER_CATEGORY) {
          // Keep this post active
          if (!post.isActive) {
            await client
              .patch(post._id)
              .set({ isActive: true })
              .commit()
            console.log(`✅ Activated (KEEP): "${post.title}"`)
          } else {
            console.log(`✓  Keeping active: "${post.title}"`)
          }
          keptCount++
        } else {
          // Deactivate excess posts
          if (post.isActive !== false) {
            await client
              .patch(post._id)
              .set({ isActive: false })
              .commit()
            console.log(`❌ Deactivated: "${post.title}"`)
            deactivatedCount++
          } else {
            console.log(`○  Already inactive: "${post.title}"`)
          }
        }
      }
    }

    console.log('\n' + '='.repeat(70))
    console.log('✨ SUMMARY')
    console.log('='.repeat(70))
    console.log(`Total posts processed: ${posts.length}`)
    console.log(`Active posts (kept): ${keptCount}`)
    console.log(`Deactivated posts: ${deactivatedCount}`)
    console.log(`Posts per category: ${POSTS_PER_CATEGORY}`)
    console.log('='.repeat(70))
    
    console.log('\n💡 The most recent posts in each category are kept active.')
    console.log('💡 Deactivated posts are hidden but not deleted (can be reactivated later).\n')

  } catch (error) {
    console.error('❌ Error:', error.message)
    process.exit(1)
  }
}

limitBlogsPerCategory()
