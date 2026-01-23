/**
 * Seed Script - Populate Sanity with existing website content
 * Run: npm run seed-sanity
 * 
 * Make sure you have SANITY_API_TOKEN in your .env.local file
 */

import { createClient } from '@sanity/client'

// Read from environment variables
const client = createClient({
  projectId: 'qyxjb4t2',
  dataset: 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

// All the data from previous file...
const navbarSettingsData = {
  _type: 'navbarSettings',
  _id: 'navbar-settings-main',
  isActive: true,
  logo: {
    text: 'Karvensen',
    imagePath: '/logo karven.png'
  },
  serviceDropdown: [
    { _key: 'service-1', title: 'AI Software Development', href: '/services#ai-software', description: 'Custom AI and machine learning solutions', icon: 'Cpu', order: 1 },
    { _key: 'service-2', title: 'Drone Technology', href: '/services#drone-technology', description: 'Agricultural drone systems for farmers', icon: 'Plane', order: 2 },
    { _key: 'service-3', title: 'LMS Solutions', href: '/services#lms', description: 'Modern learning management systems', icon: 'BookOpen', order: 3 },
    { _key: 'service-4', title: 'ERP Systems', href: '/services#erp', description: 'Enterprise resource planning solutions', icon: 'Server', order: 4 },
    { _key: 'service-5', title: 'Cloud Infrastructure', href: '/services#cloud', description: 'Scalable cloud and DevOps solutions', icon: 'Cloud', order: 5 }
  ],
  trainingDropdown: [
    { _key: 'training-1', title: 'Farmer Programs', href: '/training#farmers', description: 'Drone awareness for agriculture', icon: 'Plane', order: 1 },
    { _key: 'training-2', title: 'School Workshops', href: '/training#schools', description: 'Technical education for students', icon: 'GraduationCap', order: 2 },
    { _key: 'training-3', title: 'Professional Training', href: '/training#professional', description: 'Skill development programs', icon: 'BookOpen', order: 3 }
  ]
}

const droneSurveyPageData = {
  _type: 'serviceDetailPage',
  _id: 'service-drone-survey-mapping',
  slug: { _type: 'slug', current: 'drone-survey-and-mapping' },
  title: 'Drone Survey and Mapping',
  isActive: true,
  hero: {
    badge: 'Professional Surveying',
    title: 'Drone Survey and Mapping Services',
    subtitle: 'High-precision aerial surveys with centimeter-level accuracy for construction, agriculture, mining, and land management projects.'
  },
  overview: {
    title: 'Overview',
    description: 'Our drone survey and mapping services leverage advanced UAV technology and precision sensors to deliver accurate geospatial data.'
  },
  solutions: [
    {
      _key: 'sol-1',
      id: 'base-map',
      icon: 'Map',
      title: 'Base Map Creation',
      description: 'Detailed base maps with transport networks, boundaries, and land cover data.',
      features: ['High-resolution aerial imagery', 'Accurate georeferencing', 'Multi-layer data integration'],
      order: 1
    }
  ],
  cta: {
    title: 'Ready to Start Your Survey Project?',
    description: 'Contact us for a consultation',
    buttonText: 'Get Started',
    buttonLink: '/contact'
  }
}

const cloudServicesPageData = {
  _type: 'serviceDetailPage',
  _id: 'service-cloud-services',
  slug: { _type: 'slug', current: 'cloud-services' },
  title: 'Cloud Services',
  isActive: true,
  hero: {
    badge: 'Scalable Infrastructure',
    title: 'Cloud Infrastructure & DevOps Services',
    subtitle: 'Build, deploy, and scale your applications with our comprehensive cloud solutions.'
  },
  overview: {
    title: 'Cloud Solutions for Modern Businesses',
    description: 'Transform your IT infrastructure with our cloud services.'
  },
  cta: {
    title: 'Ready to Move to the Cloud?',
    buttonText: 'Contact Us Today',
    buttonLink: '/contact'
  }
}

async function seed() {
  console.log('🌱 Seeding Sanity content...\n')

  try {
    console.log('📍 Creating Navbar Settings...')
    await client.createOrReplace(navbarSettingsData)
    console.log('✅ Done\n')

    console.log('🚁 Creating Drone Survey Page...')
    await client.createOrReplace(droneSurveyPageData)
    console.log('✅ Done\n')

    console.log('☁️  Creating Cloud Services Page...')
    await client.createOrReplace(cloudServicesPageData)
    console.log('✅ Done\n')

    console.log('✨ Seeding complete! Visit http://localhost:3000/studio\n')
  } catch (error) {
    console.error('❌ Error:', error.message)
    process.exit(1)
  }
}

seed()
