import { getCliClient } from 'sanity/cli'

const client = getCliClient()

async function deleteWhyLearnItems() {
  console.log('🗑️  Starting deletion of old Why Learn Items...')

  try {
    // Fetch all whyLearnItem documents
    const whyLearnItems = await client.fetch(`*[_type == "whyLearnItem"]`)

    console.log(`📊 Found ${whyLearnItems.length} whyLearnItem documents to delete`)

    if (whyLearnItems.length === 0) {
      console.log('✅ No items to delete')
      return
    }

    // Delete all whyLearnItem documents
    const transaction = client.transaction()
    
    whyLearnItems.forEach(item => {
      transaction.delete(item._id)
      console.log(`   Deleting: ${item.title} (${item.section})`)
    })

    await transaction.commit()

    console.log(`✅ Successfully deleted ${whyLearnItems.length} whyLearnItem documents`)
    console.log('')
    console.log('📝 Note: Your new "Why Train With Us?" and "What Sets Us Apart?" documents are preserved')

  } catch (error) {
    console.error('❌ Deletion failed:', error)
    throw error
  }
}

deleteWhyLearnItems()
  .then(() => {
    process.exit(0)
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
