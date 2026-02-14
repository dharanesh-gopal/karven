import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'qyxjb4t2',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

async function deleteAllBlogPosts() {
  console.log('🗑️  Deleting all blog posts...')
  
  try {
    // Fetch all blog post IDs
    const blogPosts = await client.fetch('*[_type == "blog"]{_id}')
    
    if (blogPosts.length === 0) {
      console.log('✅ No blog posts found to delete.')
      return
    }

    console.log(`Found ${blogPosts.length} blog posts to delete...`)
    
    // Delete each blog post
    for (const post of blogPosts) {
      await client.delete(post._id)
      console.log(`✅ Deleted: ${post._id}`)
    }
    
    console.log(`\n🎉 Successfully deleted ${blogPosts.length} blog posts!`)
    console.log('\n📝 Next steps:')
    console.log('   1. Open Sanity Studio: http://localhost:3000/studio')
    console.log('   2. Create blog posts with correct structure')
    console.log('   3. Or run a proper import script')
    
  } catch (error) {
    console.error('❌ Error:', error)
    throw error
  }
}

deleteAllBlogPosts()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('💥 Fatal error:', err)
    process.exit(1)
  })
