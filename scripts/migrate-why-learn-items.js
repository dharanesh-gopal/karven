import { getCliClient } from 'sanity/cli'

const client = getCliClient()

async function migrateWhyLearnItems() {
  console.log('🔄 Starting migration of Why Learn Items...')

  try {
    // Fetch all existing whyLearnItem documents
    const whyLearnItems = await client.fetch(`
      *[_type == "whyLearnItem" && isActive == true] | order(section asc, order asc)
    `)

    console.log(`📊 Found ${whyLearnItems.length} why learn items`)

    if (whyLearnItems.length === 0) {
      console.log('✅ No items to migrate')
      return
    }

    // Separate items by section
    const whyTrainItems = whyLearnItems.filter(item => item.section === 'why-train')
    const setsApartItems = whyLearnItems.filter(item => item.section === 'sets-apart')

    console.log(`📚 Why Train With Us items: ${whyTrainItems.length}`)
    console.log(`✨ What Sets Us Apart items: ${setsApartItems.length}`)

    // Create or update "Why Train With Us?" document
    if (whyTrainItems.length > 0) {
      const whyTrainDoc = {
        _id: 'whyTrainWithUs',
        _type: 'whyTrainWithUs',
        sectionTitle: whyTrainItems[0]?.sectionTitle || 'Why Train With Us?',
        sectionImage: whyTrainItems[0]?.sectionImage || null,
        isActive: true,
        items: whyTrainItems.map(item => ({
          _key: `item-${item.order}`,
          iconName: item.iconName,
          iconColor: item.iconColor || 'blue',
          title: item.title,
          description: item.description,
          order: item.order,
        })),
      }

      await client.createOrReplace(whyTrainDoc)
      console.log('✅ Created/Updated "Why Train With Us?" document')
    }

    // Create or update "What Sets Us Apart?" document
    if (setsApartItems.length > 0) {
      const setsApartDoc = {
        _id: 'whatSetsUsApart',
        _type: 'whatSetsUsApart',
        sectionTitle: setsApartItems[0]?.sectionTitle || 'What Sets Us Apart?',
        sectionImage: setsApartItems[0]?.sectionImage || null,
        isActive: true,
        items: setsApartItems.map(item => ({
          _key: `item-${item.order}`,
          iconName: item.iconName,
          iconColor: item.iconColor || 'blue',
          title: item.title,
          description: item.description,
          order: item.order,
        })),
      }

      await client.createOrReplace(setsApartDoc)
      console.log('✅ Created/Updated "What Sets Us Apart?" document')
    }

    console.log('🎉 Migration completed successfully!')
    console.log('')
    console.log('📝 Next steps:')
    console.log('1. Go to Sanity Studio')
    console.log('2. Navigate to Training Page > Why Learn Items')
    console.log('3. Click on "Why Train With Us?" or "What Sets Us Apart?"')
    console.log('4. You\'ll see the Section Title, Section Image, and Items array')
    console.log('5. Click "Add item" to add new items to each section')
    console.log('')
    console.log('⚠️  Old whyLearnItem documents are still preserved if you need them')

  } catch (error) {
    console.error('❌ Migration failed:', error)
    throw error
  }
}

migrateWhyLearnItems()
  .then(() => {
    process.exit(0)
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
