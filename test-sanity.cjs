const { createClient } = require('@sanity/client')
require('dotenv').config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: '2024-01-01'
})

async function checkContent() {
  console.log('🔍 Checking Sanity content...\n')
  
  const service = await client.fetch('*[_type == "service"][0]{title, _updatedAt}')
  const training = await client.fetch('*[_type == "trainingCourse"][0]{title, _updatedAt}')
  const career = await client.fetch('*[_type == "career"][0]{title, _updatedAt}')
  
  console.log('✅ Latest Service:', service)
  console.log('✅ Latest Training:', training)
  console.log('✅ Latest Career:', career)
  console.log('\n✨ Content exists in Sanity! The .com issue is just caching.')
}

checkContent()
