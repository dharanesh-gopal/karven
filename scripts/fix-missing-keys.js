// Fix missing _key properties in existing Sanity data
import { getCliClient } from 'sanity/cli'

const client = getCliClient()

async function fixMissingKeys() {
  console.log('🔧 Fixing missing _key properties...\n')

  try {
    // Fetch all service detail pages
    const services = await client.fetch(`*[_type == "serviceDetailPage"]{
      _id,
      _rev,
      title,
      solutions,
      keyFeatures,
      useCases,
      process,
      technologies
    }`)

    console.log(`Found ${services.length} services to check\n`)

    for (const service of services) {
      let needsUpdate = false
      const patches = []

      // Fix solutions array
      if (service.solutions && Array.isArray(service.solutions)) {
        const fixedSolutions = service.solutions.map((sol, idx) => {
          if (!sol._key) {
            needsUpdate = true
            return { ...sol, _key: sol.id || `solution-${idx}` }
          }
          return sol
        })
        
        if (needsUpdate) {
          await client
            .patch(service._id)
            .set({ solutions: fixedSolutions })
            .commit()
          console.log(`   ✓ Fixed solutions in: ${service.title}`)
        }
      }

      // Fix keyFeatures.features array
      if (service.keyFeatures?.features && Array.isArray(service.keyFeatures.features)) {
        const fixedFeatures = service.keyFeatures.features.map((feat, idx) => {
          if (!feat._key) {
            return { ...feat, _key: `feature-${idx}` }
          }
          return feat
        })
        
        await client
          .patch(service._id)
          .set({ 'keyFeatures.features': fixedFeatures })
          .commit()
        console.log(`   ✓ Fixed keyFeatures in: ${service.title}`)
      }

      // Fix useCases.cases array
      if (service.useCases?.cases && Array.isArray(service.useCases.cases)) {
        const fixedCases = service.useCases.cases.map((useCase, idx) => {
          if (!useCase._key) {
            return { ...useCase, _key: `case-${idx}` }
          }
          return useCase
        })
        
        await client
          .patch(service._id)
          .set({ 'useCases.cases': fixedCases })
          .commit()
        console.log(`   ✓ Fixed useCases in: ${service.title}`)
      }

      // Fix process.steps array
      if (service.process?.steps && Array.isArray(service.process.steps)) {
        const fixedSteps = service.process.steps.map((step, idx) => {
          if (!step._key) {
            return { ...step, _key: `step-${idx}` }
          }
          return step
        })
        
        await client
          .patch(service._id)
          .set({ 'process.steps': fixedSteps })
          .commit()
        console.log(`   ✓ Fixed process steps in: ${service.title}`)
      }

      // Fix technologies.items array
      if (service.technologies?.items && Array.isArray(service.technologies.items)) {
        const fixedItems = service.technologies.items.map((item, idx) => {
          if (!item._key) {
            return { ...item, _key: `tech-${idx}` }
          }
          return item
        })
        
        await client
          .patch(service._id)
          .set({ 'technologies.items': fixedItems })
          .commit()
        console.log(`   ✓ Fixed technologies in: ${service.title}`)
      }
    }

    console.log('\n✅ Fixed all missing _key properties!')
    console.log('🎯 Refresh Sanity Studio to see the changes')

  } catch (error) {
    console.error('❌ Error fixing keys:', error)
    process.exit(1)
  }
}

fixMissingKeys()
