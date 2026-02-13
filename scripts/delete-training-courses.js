/**
 * Delete All Training Courses from Sanity
 * 
 * Run this to clear all courses and use fallback data.
 * Command: node scripts/delete-training-courses.js
 */

import { createClient } from '@sanity/client'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
})

async function deleteCourses() {
  console.log('🗑️  Deleting all training courses from Sanity...')
  
  try {
    const result = await client.delete({
      query: '*[_type == "trainingCourse"]',
    })
    
    console.log('✅ Successfully deleted all training courses!')
    console.log(`📊 Deleted ${result.results?.length || 0} courses`)
    console.log('\n💡 Your training page will now use fallback data with correct slugs.')
    console.log('   Visit /training to see the courses with working links.')
    
  } catch (error) {
    console.error('❌ Error deleting courses:', error.message)
    console.log('\n💡 Alternative: Delete manually from Sanity Studio:')
    console.log('   1. Go to http://localhost:3000/studio')
    console.log('   2. Find "Training Course (Full Details)"')
    console.log('   3. Delete all courses')
    process.exit(1)
  }
}

deleteCourses()
