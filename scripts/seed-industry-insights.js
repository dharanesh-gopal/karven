/**
 * This script seeds the Industry Insights section only.
 * Run with: node scripts/seed-industry-insights.js
 */

import { createClient } from '@sanity/client'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

// Manually set project details to match local setup if env vars are missing
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'qyxjb4t2'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_TOKEN

const client = createClient({
    projectId,
    dataset,
    useCdn: false,
    token,
    apiVersion: '2023-01-01',
})

async function seedIndustryInsights() {
    console.log('🚀 Starting Industry Insights seeding...')
    console.log(`Using Project ID: ${projectId}, Dataset: ${dataset}`)

    if (!token) {
        console.error('❌ SANITY_API_TOKEN is missing in .env.local')
        return
    }

    try {
        // 1. Create Section Settings Document
        const sectionSettings = {
            _id: 'industryInsightsSection',
            _type: 'industryInsightsSection',
            badge: 'Transforming Industries',
            isActive: true,
        }

        console.log('Creating section settings...')
        await client.createOrReplace(sectionSettings)

        // 2. Create Industry Insight Items (Tabs)
        const items = [
            {
                _id: 'insight-training',
                _type: 'industryInsightItem',
                tabTitle: 'Drone Training',
                title: 'Empower Your Future with Advanced Drone Education',
                description: "Unlock the full potential of aerial technology with Karvensen's specialized training programs. Our curriculum covers DGCA-certified operations, custom drone assembly, and advanced data processing for GIS and mapping. Whether you're entering the industry or scaling your team's expertise, we provide the technical foundation to lead in the sky.",
                icon: 'layout',
                order: 1,
                isActive: true,
            },
            {
                _id: 'insight-services',
                _type: 'industryInsightItem',
                tabTitle: 'Drone Services',
                icon: 'users',
                title: 'Intelligent Drone Services Optimized for Performance',
                description: "Transform your operations with high-precision aerial intelligence. Our end-to-end drone services provide actionable insights for agriculture, infrastructure inspection, and defense monitoring. By combining expert pilot deployment with automated AI analysis, we deliver the data you need to drive efficiency and innovation in every mission.",
                icon: 'users',
                order: 2,
                isActive: true,
            }
        ]

        console.log('Creating industry insight items...')
        for (const item of items) {
            await client.createOrReplace(item)
        }

        console.log('✅ Industry Insights seeded successfully!')
    } catch (error) {
        console.error('❌ Seeding failed:', error)
    }
}

seedIndustryInsights()
