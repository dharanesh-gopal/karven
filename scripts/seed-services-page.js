import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Initialize Sanity client
const client = createClient({
  projectId: 'qyxjb4t2',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-17',
  token: process.env.SANITY_API_TOKEN,
});

// Services Page data to seed
const servicesPageData = {
  _type: 'servicesPage',
  _id: 'servicesPage',
  
  // Hero Section
  hero: {
    title: 'Our Services',
    subtitle: 'Diversified expertise across critical industries.',
  },
  
  // Drone Services Section
  droneSection: {
    sectionTitle: 'Drone Technology Services',
    imageAlt: 'Professional drone operator conducting aerial survey at sunset',
    imageTitle: 'Premier Consultancy for Drone Projects',
    imageLink: '/contact?enquiry=drone-services',
    badge1Label: 'Premium',
    badge1Text: 'Drone Tech',
    badge2Label: 'Certified',
    badge2Text: 'Excellence',
  },
  
  // AI & Software Services Section
  softwareSection: {
    sectionTitle: 'AI & Software Services',
    imageAlt: 'AI and Software Development workspace with modern technology',
    imageTitle: 'Cutting-Edge AI & Software Solutions',
    imageLink: '/contact?enquiry=software-services',
    badge1Label: 'Advanced',
    badge1Text: 'AI Solutions',
    badge2Label: 'Proven',
    badge2Text: 'Results',
  },
  
  // Educational Programs Section
  educationSection: {
    sectionTitle: 'Educational Programs',
    imageAlt: 'Students learning drone technology and programming',
    imageTitle: 'Empowering Through Education & Training',
    imageLink: '/contact?enquiry=training',
    badge1Label: 'Expert',
    badge1Text: 'Training',
    badge2Label: 'Certified',
    badge2Text: 'Programs',
  },
  
  // CTA Section
  ctaSection: {
    title: 'Ready to Transform Your Business?',
    description: "Let's discuss how our drone technology and AI solutions can help you achieve your goals and stay ahead of the competition.",
    buttonText: 'Schedule a Consultation',
    buttonLink: '/contact?enquiry=services',
    trustIndicators: [
      { text: '1500+ Pilots Trained' },
      { text: '40+ UAV Surveys' },
      { text: 'Industry Leading' },
    ],
  },
  
  // SEO
  seo: {
    metaTitle: 'Our Services - Drone Technology & AI Solutions | KarVenSen',
    metaDescription: 'Explore our comprehensive range of drone technology services, AI software development, and educational programs. Industry-leading solutions for modern businesses.',
  },
};

async function seedServicesPage() {
  try {
    console.log('🌱 Starting Services Page seeding...');

    // Check if services page already exists
    const existingPage = await client.fetch(`*[_type == "servicesPage"][0]`);
    
    if (existingPage) {
      console.log('📝 Updating existing Services Page...');
      const result = await client
        .patch(existingPage._id)
        .set(servicesPageData)
        .commit();
      console.log('✅ Services Page updated successfully:', result._id);
    } else {
      console.log('📝 Creating new Services Page document...');
      const result = await client.create(servicesPageData);
      console.log('✅ Services Page created successfully:', result._id);
    }

    console.log('\n📋 Services Page Content Summary:');
    console.log('   Hero Title:', servicesPageData.hero.title);
    console.log('   Drone Section:', servicesPageData.droneSection.sectionTitle);
    console.log('   Software Section:', servicesPageData.softwareSection.sectionTitle);
    console.log('   Education Section:', servicesPageData.educationSection.sectionTitle);
    console.log('   CTA Title:', servicesPageData.ctaSection.title);
    
    console.log('\n💡 Note: Upload section images through Sanity Studio for:');
    console.log('   - Drone Services Section Image');
    console.log('   - AI & Software Services Section Image'); 
    console.log('   - Educational Programs Section Image');
    
    console.log('\n🎉 Services Page seeding completed!');
  } catch (error) {
    console.error('❌ Error seeding Services Page:', error);
    process.exit(1);
  }
}

// Main execution function
async function main() {
  await seedServicesPage();
}

// Run the seeding process
main();