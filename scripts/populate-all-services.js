// Populate ALL services with complete dummy content
import { getCliClient } from 'sanity/cli'

const client = getCliClient()

async function populateAllServices() {
  console.log('📝 Populating all services with complete content...\n')

  const updates = [
    {
      id: 'service-drone-survey-mapping',
      data: {
        keyFeatures: {
          title: 'Why Choose Our Drone Surveying',
          subtitle: 'Industry-leading accuracy and efficiency',
          features: [
            {
              _key: 'expert-collection',
              icon: 'Camera',
              title: 'Expert Data Collection',
              description: 'Our ground team uses cutting-edge equipment for crucial data collection phase.',
            },
            {
              _key: 'advanced-processing',
              icon: 'BarChart3',
              title: 'Advanced Processing',
              description: 'Streamlined processes ensure swift completion once we have your project data.',
            },
            {
              _key: 'accurate-results',
              icon: 'Target',
              title: 'Centimeter-Level Accuracy',
              description: 'Precision GPS and photogrammetry deliver survey-grade accuracy.',
            },
            {
              _key: 'cost-effective',
              icon: 'Zap',
              title: 'Cost-Effective',
              description: 'Reduce survey costs by up to 70% compared to traditional methods.',
            },
          ],
        },
      },
    },
    {
      id: 'service-precision-spraying',
      data: {
        keyFeatures: {
          title: 'Benefits of Drone Spraying',
          subtitle: 'Revolutionary agricultural technology',
          features: [
            {
              _key: 'water-savings',
              icon: 'Droplet',
              title: '80% Water Savings',
              description: 'Precise application reduces water usage dramatically.',
            },
            {
              _key: 'chemical-reduction',
              icon: 'Sprout',
              title: '30% Less Chemicals',
              description: 'Targeted spraying minimizes chemical waste and environmental impact.',
            },
            {
              _key: 'faster-coverage',
              icon: 'Zap',
              title: '10x Faster Coverage',
              description: 'Cover large areas quickly with autonomous drone fleets.',
            },
            {
              _key: 'better-yields',
              icon: 'TrendingUp',
              title: 'Improved Yields',
              description: 'Optimal application leads to healthier crops and better harvests.',
            },
          ],
        },
      },
    },
  ]

  try {
    for (const update of updates) {
      await client
        .patch(update.id)
        .set(update.data)
        .commit()
      
      console.log(`   ✓ Updated: ${update.id}`)
    }

    console.log('\n✅ All services populated with complete content!')
    console.log('🎯 Refresh Sanity Studio to see all changes')

  } catch (error) {
    console.error('❌ Error:', error)
    process.exit(1)
  }
}

populateAllServices()
