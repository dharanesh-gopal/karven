/**
 * Populate the Careers Page Settings document with frontend data
 * Run with: node scripts/populate-careers-page-settings.js
 */

import { createClient } from '@sanity/client'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-17',
})

const careersPageData = {
  _type: 'careersPageSettings',
  
  // 1. Hero Section
  heroSection: {
    badge: 'Join The Revolution',
    title: 'Life at KarVenSen',
    companyNameHighlight: 'KarVenSen',
    subtitle: 'We are building the autonomous infrastructure of tomorrow. Shape the flight path of your career with us.',
    ctaText: 'View Openings',
    ctaLink: '#openings',
    stats: [
      { value: '50+', label: 'Engineers' },
      { value: '12', label: 'Countries' },
      { value: '98%', label: 'Retention Rate' }
    ]
  },

  // 2. Values Section
  valuesSection: {
    title: 'Where Technology Meets',
    titleHighlight: 'Real-World Impact',
    description: 'At KarVenSen, we build the digital infrastructure for the aviation industry. Join a team dedicated to precision, safety, and scalable engineering.',
  },

  // 5. Company Values
  companyValuesSection: {
    values: [
      {
        title: 'Global Exposure',
        description: 'Work on aviation projects that impact airspace regulations in the US, Europe, and India.',
        icon: 'Globe',
        isActive: true
      },
      {
        title: 'Continuous Growth',
        description: 'We prioritize internal promotions. Our \'Future Leaders\' program prepares engineers for management.',
        icon: 'TrendingUp',
        isActive: true
      },
      {
        title: 'Stability & Innovation',
        description: 'Backed by industry giants, we offer the stability of an enterprise with the agility of a lab.',
        icon: 'ShieldCheck',
        isActive: true
      }
    ]
  },

  // 6. Benefits Section
  benefitsSection: {
    title: 'Engineering Benefits',
    subtitle: 'More than just a job',
    benefits: [
      // Engineering Ecosystem
      { 
        category: 'Engineering Ecosystem',
        title: 'Cloud Sandbox', 
        description: 'Uncapped AWS/Azure credits for personal R&D.', 
        icon: 'Globe',
        isActive: true
      },
      { 
        category: 'Engineering Ecosystem',
        title: 'AI Tool Stack', 
        description: 'Enterprise access to Copilot, ChatGPT-4, and Midjourney.', 
        icon: 'Sparkles',
        isActive: true
      },
      { 
        category: 'Engineering Ecosystem',
        title: 'Top-Tier Hardware', 
        description: 'M3 Pro MacBooks or Linux Workstations with GPU support.', 
        icon: 'Monitor',
        isActive: true
      },
      { 
        category: 'Engineering Ecosystem',
        title: 'Drone Lab Access', 
        description: 'Direct access to flight testing facility and simulation env.', 
        icon: 'Cpu',
        isActive: true
      },
      // Compensation & IP
      { 
        category: 'Compensation & IP',
        title: 'Aggressive Equity', 
        description: 'High-upside ESOPs. Own a piece of the platform.', 
        icon: 'TrendingUp',
        isActive: true
      },
      { 
        category: 'Compensation & IP',
        title: 'Patent Bonuses', 
        description: '$3,000 award for every utility patent filed and granted.', 
        icon: 'Lightbulb',
        isActive: true
      },
      { 
        category: 'Compensation & IP',
        title: 'Performance Grants', 
        description: 'Annual stock refreshers based on code quality.', 
        icon: 'Award',
        isActive: true
      },
      // Global Lifestyle
      { 
        category: 'Global Lifestyle',
        title: 'Remote-First', 
        description: 'Work from our Hyderabad hub, US office, or home.', 
        icon: 'MapPin',
        isActive: true
      },
      { 
        category: 'Global Lifestyle',
        title: 'Premium Healthcare', 
        description: 'Tier-1 medical coverage for you and family.', 
        icon: 'Heart',
        isActive: true
      },
      { 
        category: 'Global Lifestyle',
        title: 'Sabbatical Program', 
        description: '4 weeks paid leave to recharge after 4 years.', 
        icon: 'Coffee',
        isActive: true
      },
    ],
    policyModal: {
      modalTitle: 'Employee Policy Guide',
      edition: '2026 Edition • Global',
      closeButtonText: 'Close Guide',
      sections: [
        {
          icon: 'Clock',
          title: 'Work Philosophy',
          content: [
            { label: 'Core Hours', value: '11:00 AM - 3:00 PM (Local Time).' },
            { label: 'Hybrid Policy', value: 'Remote-First. Offices available for collaboration.' }
          ]
        },
        {
          icon: 'Wallet',
          title: 'Compensation & IP',
          content: [
            { label: 'Base Salary', value: 'Reviewed bi-annually.' },
            { label: 'ESOPs', value: 'Vested over 4 years.' },
            { label: 'Patent Bonus', value: '$3,000 upon grant.' }
          ]
        },
        {
          icon: 'Laptop',
          title: 'Equipment',
          content: [
            { label: '$1,000 Setup Stipend', value: 'for home office.' }
          ]
        },
        {
          icon: 'Baby',
          title: 'Parental & Family',
          content: [
            { label: 'Primary Caregiver', value: '26 Weeks Fully Paid.' },
            { label: 'Secondary Caregiver', value: '4 Weeks Fully Paid.' }
          ]
        }
      ]
    }
  },

  // 7. Culture Section
  cultureSection: {
    title: 'Inside KarVenSen',
    subtitle: 'A glimpse into our culture',
    cultureImages: [
      { 
        url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop', 
        category: 'Teamwork', 
        title: 'Global Summits',
        isActive: true
      },
      { 
        url: 'https://news.northeastern.edu/wp-content/uploads/2021/03/032221_MM_drone_001.jpg', 
        category: 'Innovation', 
        title: 'Prototyping Lab',
        isActive: true
      },
      { 
        url: 'https://msftstories.thesourcemediaassets.com/sites/45/2019/07/Teamshacking@Microsoft2019hackathon_-960x630.jpg', 
        category: 'Learning', 
        title: 'Hackathons',
        isActive: true
      },
      { 
        url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop', 
        category: 'Office', 
        title: 'Open Workspace',
        isActive: true
      },
    ]
  },

  // 8. Hiring Process Section
  hiringProcessSection: {
    title: 'Our Hiring Process',
    subtitle: 'A transparent path from application to offer.',
    hiringSteps: [
      { 
        icon: 'FileText', 
        title: 'Application', 
        description: 'Reviewing your profile.',
        isActive: true
      },
      { 
        icon: 'UserCheck', 
        title: 'HR Screening', 
        description: 'Aligning on goals & culture.',
        isActive: true
      },
      { 
        icon: 'Terminal', 
        title: 'Technical Round', 
        description: 'Assessing core skills.',
        isActive: true
      },
      { 
        icon: 'CheckCircle', 
        title: 'Final Offer', 
        description: 'Welcome to the team.',
        isActive: true
      },
    ]
  },

  // 9. Testimonials Section
  testimonialsSection: {
    title: 'What Our Team Says',
    subtitle: 'Real stories from KarVenSen engineers',
    testimonials: [
      {
        name: 'Aisha Verma',
        role: 'Senior AI Engineer',
        imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop',
        quote: 'The scale of data we work with at KarVenSen is unmatched. I\'m building models that actually fly.',
        rating: 5,
        isActive: true
      },
      {
        name: 'Rahul Mehta',
        role: 'Product Designer',
        imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop',
        quote: 'Design here isn\'t an afterthought. We have a seat at the table from day one of product planning.',
        rating: 5,
        isActive: true
      },
      {
        name: 'Sarah Jenkin',
        role: 'VP of Engineering',
        imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop',
        quote: 'We don\'t micromanage. We hire smart people and get out of their way. That\'s our secret sauce.',
        rating: 5,
        isActive: true
      }
    ]
  },

  // 4. Job Openings Section
  jobOpeningsSection: {
    badge: 'OPEN ROLES',
    title: 'Build the Future of Aviation',
    description: 'We\'re hiring mission-driven engineers. Check out our latest openings below.',
  },

  // 10. Talent Network CTA
  talentNetworkCTA: {
    title: 'Don\'t see a role?',
    description: 'Join our talent network and we\'ll notify you when a position matching your profile opens up.',
    ctaText: 'Join Talent Network',
    modalTitle: 'Join Talent Network',
    modalSubtitle: 'Leave your details and we will contact you for future roles.',
    submitButtonText: 'Join Network',
    submittingText: 'Sending...',
    successTitle: 'Application Received',
    successSubtitle: 'Welcome to the fleet. Check your inbox.',
    successConfirmation: 'You\'re on the list!',
    successDescription: 'We\'ve sent a confirmation email to your inbox.',
    errorMessage: 'Something went wrong. Please try again.',
    closeButtonText: 'Close Window'
  },

  // SEO Settings
  seoSettings: {
    metaTitle: 'Careers at KarVenSen - Join the Aviation Tech Revolution',
    metaDescription: 'Build the future of autonomous aviation. Explore engineering, design, and leadership roles at KarVenSen.',
    keywords: ['aviation careers', 'drone technology jobs', 'aerospace engineering', 'tech careers India', 'remote engineering jobs']
  },

  isActive: true
}

async function populateCareersPage() {
  try {
    console.log('🚀 Populating Careers Page Settings...\n')

    // Check if document exists
    const existing = await client.fetch('*[_type == "careersPageSettings"][0]')
    
    if (existing) {
      console.log('✅ Found existing document:', existing._id)
      console.log('📝 Updating with frontend data...\n')
      
      const updated = await client
        .patch(existing._id)
        .set(careersPageData)
        .commit()
      
      console.log('✅ Successfully updated Careers Page Settings!')
      console.log('   Document ID:', updated._id)
    } else {
      console.log('📝 Creating new Careers Page Settings document...\n')
      
      const created = await client.create(careersPageData)
      
      console.log('✅ Successfully created Careers Page Settings!')
      console.log('   Document ID:', created._id)
    }

    console.log('\n🎉 Done! Refresh Sanity Studio to see the changes.')
    console.log('   Go to: Careers Page → 0. Careers Page - All Sections\n')

  } catch (error) {
    console.error('❌ Error:', error.message)
    process.exit(1)
  }
}

populateCareersPage()
