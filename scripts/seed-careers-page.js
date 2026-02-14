/**
 * Seed Script for Careers Page Content
 * Populates all career-related schemas with frontend data
 * 
 * Usage: node scripts/seed-careers-page.js
 */

import { createClient } from '@sanity/client'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
})

// ============================================
// 1. CAREER SECTION HEADERS (Singleton)
// ============================================
const careerSectionHeaders = {
  _type: 'careerSectionHeaders',
  _id: 'careerSectionHeaders',
  heroSection: {
    badge: 'Join The Revolution',
    title: 'Life at',
    companyNameHighlight: 'KarVenSen',
    typedSubtitle: 'We are building the autonomous infrastructure of tomorrow.',
    ctaText: 'View Openings',
  },
  valuesSection: {
    title: 'Where Technology Meets',
    titleHighlight: 'Real-World Impact',
    description: 'At KarVenSen, we build the digital infrastructure for the aviation industry. Join a team dedicated to precision, safety, and scalable engineering.',
  },
  hiringProcessSection: {
    title: 'Our Hiring Process',
    subtitle: 'A transparent path from application to offer.',
  },
  testimonialsSection: {
    title: 'Voices from the Team',
    subtitle: 'Hear from the people building the future.',
  },
  benefitsSection: {
    title: 'Invest in your',
    titleHighlight: 'Future Self.',
    description: "We don't just offer perks; we offer an ecosystem for you to master Cloud, AI, and Aviation tech.",
    policyLinkText: 'View Full Policy Guide',
  },
  jobOpeningsSection: {
    badge: 'Join the Fleet',
    title: 'Current Openings',
    description: "We are expanding across Engineering, Operations, and Product. Find the role where you can do your life's best work.",
  },
  talentNetworkCTA: {
    title: "Don't see your perfect role?",
    description: "We are always looking for exceptional talent. Send us your resume and we'll keep you on our radar for future missions.",
    buttonText: 'Join Talent Network',
  },
  isActive: true,
}

// ============================================
// 2. CAREER OPPORTUNITIES
// ============================================
const careerOpportunities = [
  {
    _type: 'careerOpportunity',
    title: 'Global Exposure',
    description: 'Work on aviation projects that impact airspace regulations in the US, Europe, and India.',
    iconName: 'Globe',
    iconColor: 'blue',
    order: 1,
    isActive: true,
  },
  {
    _type: 'careerOpportunity',
    title: 'Continuous Growth',
    description: "We prioritize internal promotions. Our 'Future Leaders' program prepares engineers for management.",
    iconName: 'TrendingUp',
    iconColor: 'green',
    order: 2,
    isActive: true,
  },
  {
    _type: 'careerOpportunity',
    title: 'Stability & Innovation',
    description: 'Backed by industry giants, we offer the stability of an enterprise with the agility of a lab.',
    iconName: 'ShieldCheck',
    iconColor: 'purple',
    order: 3,
    isActive: true,
  },
]

// ============================================
// 3. CAREER POLICY MODAL CONTENT (Singleton)
// ============================================
const careerPolicyContent = {
  _type: 'careerPolicyContent',
  _id: 'careerPolicyContent',
  modalTitle: 'Employee Policy Guide',
  edition: '2026 Edition • Global',
  sections: [
    {
      icon: 'Clock',
      title: 'Work Philosophy',
      content: [
        { label: 'Core Hours', value: '11:00 AM - 3:00 PM (Local Time).' },
        { label: 'Hybrid Policy', value: 'Remote-First. Offices available for collaboration.' },
      ],
    },
    {
      icon: 'Wallet',
      title: 'Compensation & IP',
      content: [
        { label: 'Base Salary', value: 'Reviewed bi-annually.' },
        { label: 'ESOPs', value: 'Vested over 4 years.' },
        { label: 'Patent Bonus', value: '$3,000 upon grant.' },
      ],
    },
    {
      icon: 'Laptop',
      title: 'Equipment',
      content: [
        { label: '$1,000 Setup Stipend', value: 'for home office.' },
      ],
    },
    {
      icon: 'Baby',
      title: 'Parental & Family',
      content: [
        { label: 'Primary Caregiver', value: '26 Weeks Fully Paid.' },
        { label: 'Secondary Caregiver', value: '4 Weeks Fully Paid.' },
      ],
    },
  ],
  closeButtonText: 'Close Guide',
  isActive: true,
}

// ============================================
// 4. TALENT NETWORK MODAL (Singleton)
// ============================================
const talentNetworkModal = {
  _type: 'talentNetworkModal',
  _id: 'talentNetworkModal',
  modalTitle: 'Join Talent Network',
  modalSubtitle: 'Leave your details and we will contact you for future roles.',
  successTitle: 'Application Received',
  successSubtitle: 'Welcome to the fleet. Check your inbox.',
  successConfirmation: "You're on the list!",
  successDescription: "We've sent a confirmation email to your inbox.",
  fields: [
    {
      name: 'firstName',
      label: 'First Name',
      placeholder: 'Jane',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      label: 'Last Name',
      placeholder: 'Doe',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      label: 'Email Address',
      placeholder: 'jane@example.com',
      type: 'email',
      required: true,
    },
  ],
  submitButtonText: 'Join Network',
  submittingText: 'Sending...',
  errorMessage: 'Something went wrong. Please try again.',
  closeButtonText: 'Close Window',
  isActive: true,
}

// ============================================
// 5. CAREER HERO (Singleton)
// ============================================
const careerHero = {
  _type: 'careerHero',
  _id: 'careerHero',
  title: 'Build the Future with Karvensen',
  subtitle: 'Join our mission to revolutionize industries with AI and drone technology.',
  ctaText: 'View Open Positions',
  ctaLink: '#openings',
  isActive: true,
}

// ============================================
// 6. CAREER VALUES (Company Values)
// ============================================
const careerValues = [
  {
    _type: 'careerValue',
    title: 'Global Exposure',
    description: 'Work on aviation projects that impact airspace regulations in the US, Europe, and India.',
    icon: 'Globe',
    order: 1,
    isActive: true,
  },
  {
    _type: 'careerValue',
    title: 'Continuous Growth',
    description: "We prioritize internal promotions. Our 'Future Leaders' program prepares engineers for management.",
    icon: 'TrendingUp',
    order: 2,
    isActive: true,
  },
  {
    _type: 'careerValue',
    title: 'Stability & Innovation',
    description: 'Backed by industry giants, we offer the stability of an enterprise with the agility of a lab.',
    icon: 'ShieldCheck',
    order: 3,
    isActive: true,
  },
]

// ============================================
// 7. HIRING STEPS
// ============================================
const hiringSteps = [
  {
    _type: 'hiringStep',
    title: 'Application',
    description: 'Reviewing your profile.',
    icon: 'FileText',
    order: 1,
    isActive: true,
  },
  {
    _type: 'hiringStep',
    title: 'HR Screening',
    description: 'Aligning on goals & culture.',
    icon: 'UserCheck',
    order: 2,
    isActive: true,
  },
  {
    _type: 'hiringStep',
    title: 'Technical Round',
    description: 'Assessing core skills.',
    icon: 'Terminal',
    order: 3,
    isActive: true,
  },
  {
    _type: 'hiringStep',
    title: 'Final Offer',
    description: 'Welcome to the team.',
    icon: 'CheckCircle',
    order: 4,
    isActive: true,
  },
]

// ============================================
// 8. CAREER BENEFITS
// ============================================
const careerBenefits = [
  // Engineering Ecosystem
  {
    _type: 'careerBenefit',
    title: 'Cloud Sandbox',
    description: 'Uncapped AWS/Azure credits for personal R&D.',
    icon: 'Globe',
    category: 'Engineering Ecosystem',
    order: 1,
    isActive: true,
  },
  {
    _type: 'careerBenefit',
    title: 'AI Tool Stack',
    description: 'Enterprise access to Copilot, ChatGPT-4, and Midjourney.',
    icon: 'Sparkles',
    category: 'Engineering Ecosystem',
    order: 2,
    isActive: true,
  },
  {
    _type: 'careerBenefit',
    title: 'Top-Tier Hardware',
    description: 'M3 Pro MacBooks or Linux Workstations with GPU support.',
    icon: 'Monitor',
    category: 'Engineering Ecosystem',
    order: 3,
    isActive: true,
  },
  {
    _type: 'careerBenefit',
    title: 'Drone Lab Access',
    description: 'Direct access to flight testing facility and simulation env.',
    icon: 'Cpu',
    category: 'Engineering Ecosystem',
    order: 4,
    isActive: true,
  },
  // Compensation & IP
  {
    _type: 'careerBenefit',
    title: 'Aggressive Equity',
    description: 'High-upside ESOPs. Own a piece of the platform.',
    icon: 'TrendingUp',
    category: 'Compensation & IP',
    order: 5,
    isActive: true,
  },
  {
    _type: 'careerBenefit',
    title: 'Patent Bonuses',
    description: '$3,000 award for every utility patent filed and granted.',
    icon: 'Lightbulb',
    category: 'Compensation & IP',
    order: 6,
    isActive: true,
  },
  {
    _type: 'careerBenefit',
    title: 'Performance Grants',
    description: 'Annual stock refreshers based on code quality.',
    icon: 'Award',
    category: 'Compensation & IP',
    order: 7,
    isActive: true,
  },
  // Global Lifestyle
  {
    _type: 'careerBenefit',
    title: 'Remote-First',
    description: 'Work from our Hyderabad hub, US office, or home.',
    icon: 'MapPin',
    category: 'Global Lifestyle',
    order: 8,
    isActive: true,
  },
  {
    _type: 'careerBenefit',
    title: 'Premium Healthcare',
    description: 'Tier-1 medical coverage for you and family.',
    icon: 'Heart',
    category: 'Global Lifestyle',
    order: 9,
    isActive: true,
  },
  {
    _type: 'careerBenefit',
    title: 'Sabbatical Program',
    description: '4 weeks paid leave to recharge after 4 years.',
    icon: 'Coffee',
    category: 'Global Lifestyle',
    order: 10,
    isActive: true,
  },
]

// ============================================
// 9. CAREER TESTIMONIALS
// ============================================
const careerTestimonials = [
  {
    _type: 'careerTestimonial',
    name: 'Aisha Verma',
    role: 'Senior AI Engineer',
    quote: 'The scale of data we work with at KarVenSen is unmatched. I\'m building models that actually fly.',
    order: 1,
    isActive: true,
  },
  {
    _type: 'careerTestimonial',
    name: 'Rahul Mehta',
    role: 'Product Designer',
    quote: 'Design here isn\'t an afterthought. We have a seat at the table from day one of product planning.',
    order: 2,
    isActive: true,
  },
  {
    _type: 'careerTestimonial',
    name: 'Sarah Jenkin',
    role: 'VP of Engineering',
    quote: 'We don\'t micromanage. We hire smart people and get out of their way. That\'s our secret sauce.',
    order: 3,
    isActive: true,
  },
]

// ============================================
// 10. CULTURE IMAGES
// ============================================
const cultureImages = [
  {
    _type: 'cultureImage',
    title: 'Global Summits',
    category: 'Teamwork',
    order: 1,
    isActive: true,
  },
  {
    _type: 'cultureImage',
    title: 'Prototyping Lab',
    category: 'Innovation',
    order: 2,
    isActive: true,
  },
  {
    _type: 'cultureImage',
    title: 'Hackathons',
    category: 'Learning',
    order: 3,
    isActive: true,
  },
  {
    _type: 'cultureImage',
    title: 'Open Workspace',
    category: 'Office',
    order: 4,
    isActive: true,
  },
]

// ============================================
// MAIN SEED FUNCTION
// ============================================
async function seedCareersPage() {
  console.log('🚀 Starting careers page seed...\n')

  try {
    // Check existing documents
    const existing = await client.fetch(`{
      "sectionHeaders": *[_type == "careerSectionHeaders"][0],
      "opportunities": *[_type == "careerOpportunity"],
      "policyContent": *[_type == "careerPolicyContent"][0],
      "talentModal": *[_type == "talentNetworkModal"][0],
      "hero": *[_type == "careerHero"][0],
      "values": *[_type == "careerValue"],
      "steps": *[_type == "hiringStep"],
      "benefits": *[_type == "careerBenefit"],
      "testimonials": *[_type == "careerTestimonial"],
      "cultureImages": *[_type == "cultureImage"],
      "pageSettings": *[_type == "careersPageSettings"][0]
    }`)

    console.log('📊 Current State:')
    console.log(`   - Section Headers: ${existing.sectionHeaders ? '✅ Exists' : '❌ Missing'}`)
    console.log(`   - Career Opportunities: ${existing.opportunities.length} items`)
    console.log(`   - Policy Content: ${existing.policyContent ? '✅ Exists' : '❌ Missing'}`)
    console.log(`   - Talent Modal: ${existing.talentModal ? '✅ Exists' : '❌ Missing'}`)
    console.log(`   - Career Hero: ${existing.hero ? '✅ Exists' : '❌ Missing'}`)
    console.log(`   - Career Values: ${existing.values.length} items`)
    console.log(`   - Hiring Steps: ${existing.steps.length} items`)
    console.log(`   - Benefits: ${existing.benefits.length} items`)
    console.log(`   - Testimonials: ${existing.testimonials.length} items`)
    console.log(`   - Culture Images: ${existing.cultureImages.length} items`)
    console.log(`   - Page Settings: ${existing.pageSettings ? '✅ Exists' : '❌ Missing'}\n`)

    // 1. Create/Update Career Section Headers
    console.log('📝 Creating/Updating Career Section Headers...')
    if (existing.sectionHeaders) {
      await client
        .patch(careerSectionHeaders._id)
        .set(careerSectionHeaders)
        .commit()
      console.log('   ✅ Updated Career Section Headers')
    } else {
      await client.create(careerSectionHeaders)
      console.log('   ✅ Created Career Section Headers')
    }

    // 2. Create Career Opportunities
    console.log('\n📝 Creating Career Opportunities...')
    if (existing.opportunities.length > 0) {
      console.log(`   ⚠️  ${existing.opportunities.length} opportunities already exist. Skipping...`)
    } else {
      for (const opportunity of careerOpportunities) {
        await client.create(opportunity)
        console.log(`   ✅ Created: ${opportunity.title}`)
      }
    }

    // 3. Create/Update Career Policy Content
    console.log('\n📝 Creating/Updating Career Policy Content...')
    if (existing.policyContent) {
      await client
        .patch(careerPolicyContent._id)
        .set(careerPolicyContent)
        .commit()
      console.log('   ✅ Updated Career Policy Content')
    } else {
      await client.create(careerPolicyContent)
      console.log('   ✅ Created Career Policy Content')
    }

    // 4. Create/Update Talent Network Modal
    console.log('\n📝 Creating/Updating Talent Network Modal...')
    if (existing.talentModal) {
      await client
        .patch(talentNetworkModal._id)
        .set(talentNetworkModal)
        .commit()
      console.log('   ✅ Updated Talent Network Modal')
    } else {
      await client.create(talentNetworkModal)
      console.log('   ✅ Created Talent Network Modal')
    }

    // 5. Create/Update Career Hero
    console.log('\n📝 Creating/Updating Career Hero...')
    if (existing.hero) {
      await client
        .patch(careerHero._id)
        .set(careerHero)
        .commit()
      console.log('   ✅ Updated Career Hero')
    } else {
      await client.create(careerHero)
      console.log('   ✅ Created Career Hero')
    }

    // 6. Create Career Values
    console.log('\n📝 Creating Career Values...')
    const createdValues = []
    if (existing.values.length > 0) {
      console.log(`   ⚠️  ${existing.values.length} values already exist. Using existing...`)
      createdValues.push(...existing.values)
    } else {
      for (const value of careerValues) {
        const result = await client.create(value)
        console.log(`   ✅ Created: ${value.title}`)
        createdValues.push(result)
      }
    }

    // 7. Create Hiring Steps
    console.log('\n📝 Creating Hiring Steps...')
    const createdSteps = []
    if (existing.steps.length > 0) {
      console.log(`   ⚠️  ${existing.steps.length} steps already exist. Using existing...`)
      createdSteps.push(...existing.steps)
    } else {
      for (const step of hiringSteps) {
        const result = await client.create(step)
        console.log(`   ✅ Created: ${step.title}`)
        createdSteps.push(result)
      }
    }

    // 8. Create Career Benefits
    console.log('\n📝 Creating Career Benefits...')
    const createdBenefits = []
    if (existing.benefits.length > 0) {
      console.log(`   ⚠️  ${existing.benefits.length} benefits already exist. Using existing...`)
      createdBenefits.push(...existing.benefits)
    } else {
      for (const benefit of careerBenefits) {
        const result = await client.create(benefit)
        console.log(`   ✅ Created: ${benefit.title} (${benefit.category})`)
        createdBenefits.push(result)
      }
    }

    // 9. Create Career Testimonials
    console.log('\n📝 Creating Career Testimonials...')
    const createdTestimonials = []
    if (existing.testimonials.length > 0) {
      console.log(`   ⚠️  ${existing.testimonials.length} testimonials already exist. Using existing...`)
      createdTestimonials.push(...existing.testimonials)
    } else {
      for (const testimonial of careerTestimonials) {
        const result = await client.create(testimonial)
        console.log(`   ✅ Created: ${testimonial.name}`)
        createdTestimonials.push(result)
      }
    }

    // 10. Create Culture Images
    console.log('\n📝 Creating Culture Images...')
    const createdCultureImages = []
    if (existing.cultureImages.length > 0) {
      console.log(`   ⚠️  ${existing.cultureImages.length} images already exist. Using existing...`)
      createdCultureImages.push(...existing.cultureImages)
    } else {
      for (const image of cultureImages) {
        const result = await client.create(image)
        console.log(`   ✅ Created: ${image.title}`)
        createdCultureImages.push(result)
      }
    }

    // 11. Create/Update Careers Page Settings
    console.log('\n📝 Creating/Updating Careers Page Settings...')
    const pageSettings = {
      _type: 'careersPageSettings',
      _id: 'careersPageSettings',
      title: 'Build Your Career with KarVenSen',
      companyValues: createdValues.map(v => ({ _type: 'reference', _ref: v._id })),
      hiringSteps: createdSteps.map(s => ({ _type: 'reference', _ref: s._id })),
      benefits: createdBenefits.map(b => ({ _type: 'reference', _ref: b._id })),
      testimonials: createdTestimonials.map(t => ({ _type: 'reference', _ref: t._id })),
      cultureImages: createdCultureImages.map(c => ({ _type: 'reference', _ref: c._id })),
      jobOpenings: [],
      showApplicationForm: true,
      isActive: true,
    }

    if (existing.pageSettings) {
      await client
        .patch(pageSettings._id)
        .set(pageSettings)
        .commit()
      console.log('   ✅ Updated Careers Page Settings')
    } else {
      await client.create(pageSettings)
      console.log('   ✅ Created Careers Page Settings')
    }

    console.log('\n🎉 Success! All careers page content has been seeded.')
    console.log('\n📌 Next steps:')
    console.log('   1. Go to Sanity Studio: http://localhost:3000/studio')
    console.log('   2. Navigate to 💼 Careers Page')
    console.log('   3. Upload images where needed:')
    console.log('      - Hero Section background image')
    console.log('      - Values Section decorative images')
    console.log('      - Testimonial profile images')
    console.log('      - Culture images')
    console.log('   4. Review and publish all changes\n')

  } catch (error) {
    console.error('\n❌ Error seeding careers page:', error.message)
    console.error('\nTroubleshooting:')
    console.error('   1. Make sure SANITY_API_TOKEN is set in .env.local')
    console.error('   2. Create a token at: https://sanity.io/manage')
    console.error('   3. Token needs "Editor" permissions')
    console.error('   4. Ensure all schemas are properly registered\n')
    process.exit(1)
  }
}

// Run the seed function
seedCareersPage()
