import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'qyxjb4t2',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-17',
})

async function updateTrainingCourses() {
  console.log('🔍 Fetching all training courses...')
  
  const courses = await client.fetch(
    `*[_type == "trainingCourse"] {
      _id,
      title,
      descriptionTitle,
      highlightsTitle,
      curriculumTitle,
      prerequisitesTitle,
      includedTitle,
      certificationIcon,
      certificationSubtext,
      enrollNowLink,
      doubtsTitle,
      doubtsMessage
    }`
  )

  console.log(`✅ Found ${courses.length} courses to update\n`)

  for (const course of courses) {
    const updates = {}
    let hasUpdates = false

    // Add section titles if missing
    if (!course.descriptionTitle) {
      updates.descriptionTitle = 'Course Description'
      hasUpdates = true
    }
    if (!course.highlightsTitle) {
      updates.highlightsTitle = "What You'll Learn"
      hasUpdates = true
    }
    if (!course.curriculumTitle) {
      updates.curriculumTitle = 'Course Curriculum'
      hasUpdates = true
    }
    if (!course.prerequisitesTitle) {
      updates.prerequisitesTitle = 'Prerequisites'
      hasUpdates = true
    }
    if (!course.includedTitle) {
      updates.includedTitle = "What's Included"
      hasUpdates = true
    }

    // Add certification icon if missing
    if (!course.certificationIcon) {
      updates.certificationIcon = 'Award'
      hasUpdates = true
    }

    // Add certification subtext if missing
    if (!course.certificationSubtext) {
      updates.certificationSubtext = 'Earn a certificate upon successful completion of the course'
      hasUpdates = true
    }

    // Add enrollNowLink if missing
    if (!course.enrollNowLink) {
      updates.enrollNowLink = '/contact?enquiry=enrollment'
      hasUpdates = true
    }

    // Add doubts title if missing
    if (!course.doubtsTitle) {
      updates.doubtsTitle = 'Still Have Any Doubts?'
      hasUpdates = true
    }

    // Add doubts message if missing
    if (!course.doubtsMessage) {
      updates.doubtsMessage = "Feel free to reach out to us. We're here to help you make the right decision for your career."
      hasUpdates = true
    }

    if (hasUpdates) {
      console.log(`📝 Updating: ${course.title}`)
      console.log(`   Fields: ${Object.keys(updates).join(', ')}`)
      
      try {
        await client
          .patch(course._id)
          .set(updates)
          .commit()
        
        console.log(`   ✅ Updated successfully\n`)
      } catch (error) {
        console.error(`   ❌ Error updating: ${error.message}\n`)
      }
    } else {
      console.log(`⏭️  Skipping: ${course.title} (already has all fields)\n`)
    }
  }

  console.log('✨ Migration complete!')
}

updateTrainingCourses().catch(console.error)
