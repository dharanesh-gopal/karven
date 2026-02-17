import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })
import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'qyxjb4t2',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    token: process.env.SANITY_API_TOKEN,
    apiVersion: '2024-01-01',
    useCdn: false,
})

async function uploadImage(filePath) {
    try {
        // Handle paths that might be absolute or relative to public
        let fullPath = filePath
        if (!path.isAbsolute(filePath)) {
            fullPath = path.join(__dirname, '../public', filePath.replace(/^\//, ''))
        }

        if (!fs.existsSync(fullPath)) {
            console.warn(`⚠️ Warning: File not found at ${fullPath}`)
            return null
        }

        const asset = await client.assets.upload('image', fs.createReadStream(fullPath), {
            filename: path.basename(fullPath)
        })
        return asset._id
    } catch (error) {
        console.error(`❌ Error uploading image ${filePath}:`, error.message)
        return null
    }
}

async function seed() {
    console.log('🚀 Starting Applications Stats seed with CORRECT content...\n')

    // Data from the frontend fallbackItems
    const statsData = [
        {
            _type: 'applicationItem',
            stat: "50,000+",
            title: "Acres Scanned & Analyzed",
            description: "Executing large-scale aerial surveys with precision mapping technology to deliver high-resolution geospatial intelligence for agriculture and infrastructure.",
            image: "/dron in agri land.png",
            order: 1
        },
        {
            _type: 'applicationItem',
            stat: "5TB+",
            title: "Aerial Data Processed",
            description: "Transforming massive volumes of raw aerial imagery into actionable insights through our proprietary AI-driven data processing pipelines.",
            image: "/edu drone.png",
            order: 2
        },
        {
            _type: 'applicationItem',
            stat: "98%",
            title: "Accuracy in Defect Detection",
            description: "Achieving industry-leading precision in identifying structural anomalies and maintenance requirements using custom-trained vision models.",
            image: "/training-drone.png",
            order: 3
        },
        {
            _type: 'applicationItem',
            stat: "500+",
            title: "AI Models Deployed",
            description: "Scaling intelligence across diverse sectors with specialized neural networks optimized for real-time industrial monitoring and analysis.",
            image: "/drone-flying-over-farm-field-at-sunset.jpg",
            order: 4
        }
    ]

    // Clean up existing application items first
    console.log('🗑️  Cleaning up previous application items...')
    await client.delete({ query: '*[_type == "applicationItem"]' })

    // Update applicationsSection
    console.log('📝 Setting applicationsSection title...')
    await client.createOrReplace({
        _type: 'applicationsSection',
        _id: 'applicationsSection',
        title: 'Applications',
        isActive: true
    })

    // Create individual stats
    for (const item of statsData) {
        console.log(`📸 Uploading image for: ${item.title}...`)
        const assetId = await uploadImage(item.image)

        const doc = {
            _type: 'applicationItem',
            stat: item.stat,
            title: item.title,
            description: item.description,
            order: item.order,
            isActive: true,
        }

        if (assetId) {
            doc.image = {
                _type: 'image',
                asset: {
                    _type: 'reference',
                    _ref: assetId
                }
            }
        }

        console.log(`✨ Creating applicationItem: ${item.title}...`)
        await client.create(doc)
    }

    console.log('\n✅ Seed completed successfully with your actual content!')
}

seed().catch(err => {
    console.error('❌ Seed failed:', err)
    process.exit(1)
})
