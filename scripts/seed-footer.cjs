const { createClient } = require('@sanity/client')
require('dotenv').config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
})

const footerSettings = {
  _type: 'footerSettings',
  _id: 'footerSettings',
  companyName: 'KarVenSen',
  tagline: 'AI-Driven Drone & Software Solutions',
  phone: '+91 9655451302',
  email: 'hr@karvensen.com',
  socialMedia: {
    twitter: 'https://twitter.com/karvensen',
    linkedin: 'https://linkedin.com/company/karvensen',
    youtube: 'https://youtube.com/@karvensen',
    facebook: 'https://facebook.com/karvensen',
    instagram: 'https://instagram.com/karvensen'
  },
  copyrightText: 'KarVenSen. All rights reserved.',
  groupCompanies: [
    {
      _key: 'gc-1',
      name: 'KarvenTech Solutions',
      url: 'https://karventech.com'
    },
    {
      _key: 'gc-2',
      name: 'Murgdur',
      url: 'https://murgdur.com'
    },
    {
      _key: 'gc-3',
      name: 'Veldursen',
      url: 'https://veldursen.com'
    }
  ],
  menuSections: {
    services: [
      { _key: 's1', label: 'AI Software Development', href: '/services/ai-software-development' },
      { _key: 's2', label: 'Drone Services', href: '/services' },
      { _key: 's3', label: 'Cloud Services', href: '/services/cloud-services' },
      { _key: 's4', label: 'Educational Programs', href: '/services/educational-programs' },
      { _key: 's5', label: 'Data & GIS Solutions', href: '/services/data-gis-digital-solutions' },
      { _key: 's6', label: 'Learning Management Systems', href: '/services/learning-management-systems' }
    ],
    training: [
      { _key: 't1', label: 'Training Programs', href: '/training' },
      { _key: 't2', label: 'View All Courses', href: '/training/courses' }
    ],
    resources: [
      { _key: 'r1', label: 'Blog', href: '/blog' },
      { _key: 'r2', label: 'Contact Us', href: '/contact' }
    ],
    company: [
      { _key: 'c1', label: 'About Us', href: '/about' },
      { _key: 'c2', label: 'Careers', href: '/careers' }
    ]
  },
  legalLinks: {
    contactUsText: 'Contact Us',
    contactUsUrl: '/contact',
    termsText: 'Terms of Service',
    termsUrl: '/terms',
    privacyText: 'Privacy Policy',
    privacyUrl: '/privacy'
  }
}

async function seedFooterSettings() {
  try {
    console.log('🚀 Starting Footer Settings population...\n')

    console.log('📝 Creating/Updating Footer Settings...')
    await client.createOrReplace(footerSettings)
    console.log('✅ Footer Settings created successfully!')

    console.log('\n✨ Footer Settings populated successfully!')
    console.log('\n📊 Summary:')
    console.log('   - Company: KarVenSen')
    console.log('   - Phone: +91 9655451302')
    console.log('   - Email: hr@karvensen.com')
    console.log('   - Social Media: 5 platforms configured')
    console.log('   - Group Companies: 3 companies added')
    console.log('   - Legal Links: All configured')

    console.log('\n🎯 Next Steps:')
    console.log('   1. Go to Sanity Studio → Global Settings → Footer')
    console.log('   2. Review and customize the footer content')
    console.log('   3. Update social media URLs with actual links')
    console.log('   4. Add or remove group companies as needed')

  } catch (error) {
    console.error('❌ Error seeding footer settings:', error)
    process.exit(1)
  }
}

seedFooterSettings()
