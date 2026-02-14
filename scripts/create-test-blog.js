import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'qyxjb4t2',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

async function createTestBlog() {
  console.log('🚀 Creating test blog post and author...')
  
  try {
    // Step 1: Create author document
    console.log('\n📝 Creating author document...')
    const authorId = 'author-karvensen-team'
    
    await client.createOrReplace({
      _id: authorId,
      _type: 'author',
      name: 'Karvensen Team',
      slug: {
        _type: 'slug',
        current: 'karvensen-team'
      }
    })
    console.log('✅ Author created successfully')

    // Step 2: Create a test blog post
    console.log('\n📚 Creating test blog post...')
    
    await client.createOrReplace({
      _id: 'blog-test-post',
      _type: 'blog',
      title: 'Test Blog Post: AI in Modern Applications',
      slug: {
        _type: 'slug',
        current: 'test-ai-applications'
      },
      excerpt: 'A comprehensive look at how AI is transforming modern software applications and business processes.',
      category: 'Artificial Intelligence',  // String, not reference!
      branch: 'Machine Learning',
      publishedAt: '2026-02-10',
      readTime: '5 min read',
      author: {
        _type: 'reference',
        _ref: authorId  // Proper reference to author document
      },
      isActive: true,
      body: [
        {
          _type: 'block',
          _key: 'block1',
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: 'span1',
              text: 'This is a test blog post to verify the blog system is working correctly.',
              marks: []
            }
          ]
        }
      ]
    })
    
    console.log('✅ Test blog post created successfully')
    console.log('\n🎉 All done! You can now:')
    console.log('   1. View the blog at http://localhost:3000/blog')
    console.log('   2. Check Sanity Studio to edit the post')
    console.log('   3. Add more blog posts through the Studio or scripts')
    
  } catch (error) {
    console.error('❌ Error:', error)
    throw error
  }
}

createTestBlog()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('💥 Fatal error:', err)
    process.exit(1)
  })
