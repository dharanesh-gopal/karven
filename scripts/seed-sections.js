/**
 * Seed Script - Populate Sanity with How We Work and Why Choose Content
 * Run: node scripts/seed-sections.js
 */

import { createClient } from '@sanity/client'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

if (!process.env.SANITY_API_TOKEN) {
    process.exit(1)
}

const client = createClient({
    projectId: 'qyxjb4t2',
    dataset: 'production',
    token: process.env.SANITY_API_TOKEN,
    apiVersion: '2024-01-01',
    useCdn: false,
})

const howWeWorkSectionData = {
    _type: 'howWeWorkSection',
    _id: 'howWeWorkSectionMain',
    sectionTitle: 'How We Work',
    mainHeading: 'Intelligent Integration: From Insight to Impact',
    description: 'We follow a rigorous, data-driven methodology to ensure that every drone deployment is backed by powerful AI intelligence.',
    isActive: true
}

const processStepsData = [
    { _type: 'processStep', _id: 'step-1', stepNumber: 1, title: 'Strategic Consultation', description: 'We partner with you to identify specific operational challenges.', isActive: true },
    { _type: 'processStep', _id: 'step-2', stepNumber: 2, title: 'AI-Driven System Design', description: 'Developing custom solutions with proprietary AI models.', isActive: true },
    { _type: 'processStep', _id: 'step-3', stepNumber: 3, title: 'Precision Deployment', description: 'Execution led by DGCA-certified pilots.', isActive: true },
    { _type: 'processStep', _id: 'step-4', stepNumber: 4, title: 'Advanced Analytics & Reporting', description: 'Processing raw data into actionable business results.', isActive: true }
]

const whyChooseSectionData = {
    _type: 'whyChooseSection',
    _id: 'whyChooseSectionMain',
    sectionTitle: 'Why Choose Karvensen?',
    description: "We're not just another IT company. Karvensen combines cutting-edge AI technology with a deep understanding of real-world challenges.",
    highlights: [
        'AI-first approach to problem solving',
        'Specialized in agricultural drone solutions',
        'Proven track record in enterprise systems',
        'Comprehensive training and support programs',
        'Cloud-native architecture expertise',
        'Commitment to indigenous manufacturing'
    ],
    isActive: true
}

const coreValuesData = [
    { _type: 'coreValue', _id: 'value-1', title: 'Founded on Innovation', description: 'Established in 2023 with a vision to revolutionize industries through AI and drone technology.', icon: 'Target', order: 1, isActive: true },
    { _type: 'coreValue', _id: 'value-2', title: 'Make in India', description: 'Proudly assembling drones in India with carefully sourced components.', icon: 'Zap', order: 2, isActive: true },
    { _type: 'coreValue', _id: 'value-3', title: 'Enterprise-Grade Quality', description: 'Delivering reliable, scalable solutions backed by rigorous testing.', icon: 'Shield', order: 3, isActive: true },
    { _type: 'coreValue', _id: 'value-4', title: 'Community Impact', description: 'Empowering farmers and educating youth through workshops nationwide.', icon: 'Users', order: 4, isActive: true }
]

async function seed() {
    try {
        console.log('📍 Seeding How We Work...')
        await client.createOrReplace(howWeWorkSectionData)
        for (const step of processStepsData) await client.createOrReplace(step)

        console.log('📍 Seeding Why Choose...')
        await client.createOrReplace(whyChooseSectionData)
        for (const val of coreValuesData) await client.createOrReplace(val)

        console.log('✅ All Sections Seeded')
    } catch (e) {
        console.error(e.message)
    }
}

seed()
