import { getCliClient } from 'sanity/cli'

const client = getCliClient()

async function addEnquireFieldsToPrograms() {
  console.log('🔄 Adding enquire fields to existing upcoming programs...')

  try {
    // Fetch all existing upcomingProgram documents
    const programs = await client.fetch(`*[_type == "upcomingProgram"]`)

    console.log(`📊 Found ${programs.length} programs`)

    if (programs.length === 0) {
      console.log('✅ No programs to update')
      return
    }

    // Update each program with default enquire fields if they don't exist
    const transaction = client.transaction()
    
    programs.forEach(program => {
      const updates = {}
      
      if (!program.enquireButtonText) {
        updates.enquireButtonText = 'Enquire Now'
      }
      
      if (!program.enquireLink) {
        updates.enquireLink = '/contact?enquiry=training'
      }
      
      if (Object.keys(updates).length > 0) {
        transaction.patch(program._id, { set: updates })
        console.log(`   Updating: ${program.title}`)
      }
    })

    await transaction.commit()

    console.log('✅ Successfully updated all programs with enquire fields')
    console.log('')
    console.log('📝 Next steps:')
    console.log('1. Go to Sanity Studio')
    console.log('2. Navigate to Training Page > Upcoming Training Programs')
    console.log('3. Edit any program to customize the "Enquire Now" button text and link')

  } catch (error) {
    console.error('❌ Update failed:', error)
    throw error
  }
}

addEnquireFieldsToPrograms()
  .then(() => {
    process.exit(0)
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
