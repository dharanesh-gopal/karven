/**
 * Seed Script - Populate Sanity with optimized SEO and Home Page content
 * Run: node scripts/seed-seo-homepage.js
 */

import { createClient } from '@sanity/client'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config({ path: '.env.local' })

if (!process.env.SANITY_API_TOKEN) {
    console.error('❌ Error: SANITY_API_TOKEN is missing in .env.local')
    process.exit(1)
}

const client = createClient({
    projectId: 'qyxjb4t2', // Using project id from existing seed script
    dataset: 'production',
    token: process.env.SANITY_API_TOKEN,
    apiVersion: '2024-01-01',
    useCdn: false,
})

const siteSettingsData = {
    _type: 'siteSettings',
    _id: 'siteSettings', // Standard ID for singleton
    siteName: 'Karvensen',
    siteDescription: 'Karvensen specializing in AI-first software services, Agricultural drone technology, and Enterprise solutions. Pioneering innovation from India for global scale.',
    seo: {
        _type: 'seoObject',
        metaTitle: 'Karvensen | AI-Driven Drone & Software Solutions in India',
        metaDescription: 'Karvensen specializing in AI-first software services, Agricultural drone technology, and Enterprise solutions. Pioneering innovation from India for global scale.',
        keywords: [
            'AI Solutions',
            'Drone Technology India',
            'Software Development',
            'Agricultural Drones',
            'ERP Solutions',
            'LMS Platforms',
            'Machine Learning',
            'Karvensen'
        ],
        ogTitle: 'Karvensen | AI & Drone Technology',
        ogDescription: 'Pioneering AI-first software services and Agricultural drone technology in India.',
        canonicalUrl: 'https://karven.vercel.app'
    }
}

const heroSectionData = {
    _type: 'heroSection',
    _id: 'homeHeroSection',
    title: 'AI-Driven Drone Technology for Precision Agriculture & Defense.',
    subtitle: 'Karvensen deploys advanced AI solutions and specialized drones to revolutionize precision agriculture and fortify national security.',
    buttonText: 'Explore Solutions',
    buttonLink: '/services',
    isActive: true,
    // We'll leave video/image for manual upload or use fallback in code
}

const statsData = [
    {
        _type: 'stats',
        _id: 'stat-1',
        label: 'Acres Scanned & Analyzed',
        value: '50,000+',
        order: 1,
        isActive: true
    },
    {
        _type: 'stats',
        _id: 'stat-2',
        label: 'Aerial Data Processed',
        value: '5TB+',
        order: 2,
        isActive: true
    },
    {
        _type: 'stats',
        _id: 'stat-3',
        label: 'Accuracy in Defect Detection',
        value: '98%',
        order: 3,
        isActive: true
    },
    {
        _type: 'stats',
        _id: 'stat-4',
        label: 'AI Models Deployed',
        value: '500+',
        order: 4,
        isActive: true
    }
]

const gallerySectionData = {
    _type: 'gallerySection',
    _id: 'homeGallerySection',
    title: 'Indigenous Drone Technology.',
    subtitle: 'Built in India. Powered by Innovation.',
    isActive: true,
    autoplayInterval: 3
}

const ctaSectionData = {
    _type: 'ctaSection',
    _id: 'homeCTASection',
    title: 'Ready to Innovate with Karvensen?',
    description: "Let's discuss how our AI-driven solutions and drone technology can transform your operations. Join the future of intelligent automation.",
    buttonText: 'Schedule a Consultation',
    buttonLink: '/contact',
    isActive: true
}

async function seed() {
    console.log('🌱 Seeding SEO and Home Page content...\n')

    try {
        console.log('📍 Seeding Site Settings & SEO...')
        await client.createOrReplace(siteSettingsData)
        console.log('✅ Done\n')

        console.log('📍 Seeding Hero Section...')
        await client.createOrReplace(heroSectionData)
        console.log('✅ Done\n')

        console.log('📍 Seeding Stats...')
        for (const stat of statsData) {
            await client.createOrReplace(stat)
        }
        console.log('✅ Done\n')

        console.log('📍 Seeding Gallery Section...')
        await client.createOrReplace(gallerySectionData)
        console.log('✅ Done\n')

        console.log('📍 Seeding CTA Section...')
        await client.createOrReplace(ctaSectionData)
        console.log('✅ Done\n')

        console.log('✨ Seeding complete! Check your Sanity Studio at /studio\n')
    } catch (error) {
        console.error('❌ Error Seeding:', error.message)
        process.exit(1)
    }
}

seed()
