import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
});

// Contact Hero Data
const contactHeroData = {
  _type: 'contactHero',
  _id: 'contactHero',
  badge: 'Fly High. Aim Higher!',
  title: 'Get in Touch with Us',
  description: "We're here to answer your queries, offer personalized assistance, and guide you through every step of your technology journey. Reach out to Karvensen and let's build the future together.",
  isActive: true,
};

// Office Locations Data
const officeLocations = [
  {
    _type: 'officeLocation',
    _id: 'office-bangalore',
    name: 'Bangalore',
    role: 'Global Headquarters',
    address: 'Tech Innovation Park, Indiranagar,\nBangalore, Karnataka 560038',
    phone: '+91 80 1234 5678',
    email: 'info@karvensen.com',
    lat: 12.9716,
    lng: 77.5946,
    order: 1,
    isActive: true,
  },
  {
    _type: 'officeLocation',
    _id: 'office-hyderabad',
    name: 'Hyderabad',
    role: 'Research & Development',
    address: 'Cyber Towers, Hitech City,\nHyderabad, Telangana 500081',
    phone: '+91 40 2345 6789',
    email: 'research@karvensen.com',
    lat: 17.3850,
    lng: 78.4867,
    order: 2,
    isActive: true,
  },
  {
    _type: 'officeLocation',
    _id: 'office-pune',
    name: 'Pune',
    role: 'Training Excellence Center',
    address: 'IT Park, Hinjewadi,\nPune, Maharashtra 411057',
    phone: '+91 20 3456 7890',
    email: 'training@karvensen.com',
    lat: 18.5204,
    lng: 73.8567,
    order: 3,
    isActive: true,
  },
  {
    _type: 'officeLocation',
    _id: 'office-mumbai',
    name: 'Mumbai',
    role: 'Western Region Operations',
    address: 'Business Bay, Lower Parel,\nMumbai, Maharashtra 400013',
    phone: '+91 22 4567 8901',
    email: 'mumbai@karvensen.com',
    lat: 19.0760,
    lng: 72.8777,
    order: 4,
    isActive: true,
  },
  {
    _type: 'officeLocation',
    _id: 'office-delhi',
    name: 'Delhi NCR',
    role: 'North Region Sales',
    address: 'Cyber City, DLF Phase 2,\nGurugram, Delhi NCR 122002',
    phone: '+91 11 5678 9012',
    email: 'sales@karvensen.com',
    lat: 28.6139,
    lng: 77.2090,
    order: 5,
    isActive: true,
  },
  {
    _type: 'officeLocation',
    _id: 'office-chennai',
    name: 'Chennai',
    role: 'Customer Success Team',
    address: 'Tidel Park, Tharamani,\nChennai, Tamil Nadu 600113',
    phone: '+91 44 6789 0123',
    email: 'support@karvensen.com',
    lat: 13.0827,
    lng: 80.2707,
    order: 6,
    isActive: true,
  },
];

// Social Media Section Data (with working social links)
const socialMediaData = {
  _type: 'socialMediaSection',
  _id: 'socialMediaSection',
  badge: '20K+ Followers',
  title: 'Connect With Us',
  description: 'Join our growing Karvensen community on social media for the latest updates, insights, innovations, and success stories from the world of AI and drone technology.',
  socialLinks: [
    {
      _type: 'object',
      _key: 'linkedin',
      platform: 'linkedin',
      url: 'https://www.linkedin.com/company/karvensen',
    },
    {
      _type: 'object',
      _key: 'twitter',
      platform: 'twitter',
      url: 'https://twitter.com/karvensen',
    },
    {
      _type: 'object',
      _key: 'facebook',
      platform: 'facebook',
      url: 'https://www.facebook.com/karvensen',
    },
    {
      _type: 'object',
      _key: 'instagram',
      platform: 'instagram',
      url: 'https://www.instagram.com/karvensen',
    },
    {
      _type: 'object',
      _key: 'youtube',
      platform: 'youtube',
      url: 'https://www.youtube.com/@karvensen',
    },
    {
      _type: 'object',
      _key: 'github',
      platform: 'github',
      url: 'https://github.com/karvensen',
    },
  ],
  isActive: true,
};

// Contact Page Settings
const contactPageSettingsData = {
  _type: 'contactPageSettings',
  _id: 'contactPageSettings',
  formTitle: 'Take the First Step Towards Excellence!',
  formSubtitle: 'Send us a message and our team will respond within 24 hours.',
  formFields: {
    fullName: {
      label: 'Full Name',
      placeholder: 'Your Full Name',
      required: true,
    },
    phone: {
      label: 'Phone Number',
      placeholder: '+91 98765 43210',
      required: true,
    },
    email: {
      label: 'Email',
      placeholder: 'your.email@company.com',
      required: true,
    },
    enquiryType: {
      label: 'Enquiry About',
      placeholder: 'Select enquiry type',
      required: true,
      options: [
        { _key: 'services', label: 'Services', value: 'services' },
        { _key: 'training', label: 'Training Programs', value: 'training' },
        { _key: 'custom-training', label: 'Custom Training', value: 'custom-training' },
        { _key: 'drone-services', label: 'Drone Services', value: 'drone-services' },
        { _key: 'software-development', label: 'Software Development', value: 'software-development' },
        { _key: 'careers', label: 'Careers', value: 'careers' },
        { _key: 'partnership', label: 'Partnership', value: 'partnership' },
        { _key: 'general', label: 'General Inquiry', value: 'general' },
      ],
    },
    country: {
      label: 'Country',
      placeholder: 'Select Country',
      required: true,
      options: ['India', 'USA', 'UK', 'Canada', 'Australia', 'Germany', 'Singapore', 'UAE', 'Other'],
    },
    city: {
      label: 'City',
      placeholder: 'Your City',
      required: true,
    },
    message: {
      label: 'Message',
      placeholder: 'Tell us about your inquiry...',
      required: true,
      rows: 4,
    },
  },
  submitButton: {
    text: 'Send Message',
    loadingText: 'Sending...',
  },
  successMessage: 'Thank you for reaching out! We have received your message and will get back to you within 24 hours.',
  errorMessage: 'We apologize, but something went wrong. Please try again or contact us directly via email or phone.',
  showMap: true,
  seo: {
    metaTitle: 'Contact Us - Get in Touch with Karvensen | Drone & AI Solutions',
    metaDescription: 'Reach out to Karvensen for AI-driven drone services, software development, and training programs. Connect with our offices across India for personalized assistance.',
    metaKeywords: 'contact karvensen, drone services contact, AI solutions contact, training programs inquiry, karvensen offices',
    ogTitle: 'Contact Karvensen - AI & Drone Technology Experts',
    ogDescription: 'Get in touch with Karvensen for innovative drone and AI solutions. Multiple offices across India ready to assist you.',
  },
  isActive: true,
};

async function seedContactPage() {
  try {
    console.log('🚀 Starting Contact Page Data Seeding...\n');

    // 1. Create Contact Hero
    console.log('📋 Creating Contact Hero Section...');
    const hero = await client.createOrReplace(contactHeroData);
    console.log('✅ Contact Hero created:', hero._id);

    // 2. Create Office Locations
    console.log('\n📍 Creating Office Locations...');
    for (const location of officeLocations) {
      const result = await client.createOrReplace(location);
      console.log(`✅ Office Location created: ${result.name} (${result._id})`);
    }

    // 3. Create Social Media Section
    console.log('\n🌐 Creating Social Media Section...');
    const social = await client.createOrReplace(socialMediaData);
    console.log('✅ Social Media Section created:', social._id);

    // 4. Create Contact Page Settings
    console.log('\n⚙️  Creating Contact Page Settings...');
    const settings = await client.createOrReplace(contactPageSettingsData);
    console.log('✅ Contact Page Settings created:', settings._id);

    console.log('\n🎉 Contact Page Data Seeding Complete!');
    console.log('\n📝 Summary:');
    console.log(`   ✓ Contact Hero Section: 1`);
    console.log(`   ✓ Office Locations: ${officeLocations.length}`);
    console.log(`   ✓ Social Media Section: 1 (with ${socialMediaData.socialLinks.length} social links)`);
    console.log(`   ✓ Contact Page Settings: 1 (with full form configuration)`);
    console.log('\n💡 Next Steps:');
    console.log('   1. Visit http://localhost:3000/studio to verify the data');
    console.log('   2. Navigate to Contact Page Settings to customize form fields');
    console.log('   3. Check the Contact page at http://localhost:3000/contact');
    console.log('   4. All form fields are now editable from Sanity!');
    console.log('   5. Customize social media URLs, phone numbers, and emails\n');

  } catch (error) {
    console.error('❌ Error seeding contact page data:', error);
    process.exit(1);
  }
}

// Main execution
async function main() {
  await seedContactPage();
}

main();
