const { createClient } = require('@sanity/client')
require('dotenv').config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
})

const aboutContactFormSettings = {
  _type: 'aboutContactForm',
  _id: 'aboutContactForm',
  headerText: 'Please fill out the form below and we will get back to you as soon as possible.',
  namePlaceholder: '* Name',
  emailPlaceholder: '* Email',
  messagePlaceholder: '* Message',
  submitButtonText: 'Send Message',
  floatingButtonText: 'Send message',
  poweredByText: 'Powered by tawk.to',
  isActive: true
}

async function seedAboutContactForm() {
  try {
    console.log('🚀 Starting About Contact Form Settings population...\n')

    console.log('📝 Creating/Updating About Contact Form Settings...')
    await client.createOrReplace(aboutContactFormSettings)
    console.log('✅ About Contact Form Settings created successfully!')

    console.log('\n✨ About Contact Form Settings populated successfully!')
    console.log('\n📊 Summary:')
    console.log('   - Header Text: Set')
    console.log('   - Floating Button: "Send message"')
    console.log('   - Submit Button: "Send Message"')
    console.log('   - Form Fields: Name, Email, Message placeholders configured')

    console.log('\n🎯 You can now edit:')
    console.log('   1. Go to Sanity Studio → About Page → Contact Form Settings')
    console.log('   2. Change the "Floating Button Text" (red button on bottom right)')
    console.log('   3. Customize form placeholders and submit button text')

  } catch (error) {
    console.error('❌ Error seeding about contact form settings:', error)
    process.exit(1)
  }
}

seedAboutContactForm()
