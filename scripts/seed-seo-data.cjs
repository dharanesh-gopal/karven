const { createClient } = require('@sanity/client');
require('dotenv').config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
});

// SEO data templates for different pages
const seoTemplates = {
  siteSettings: {
    _type: 'siteSettings',
    siteName: 'KarVenSen',
    siteDescription: 'Leading provider of drone services, AI software development, cloud solutions, and professional training programs.',
    seo: {
      metaTitle: 'KarVenSen | Drone Services, AI Development & Cloud Solutions',
      metaDescription: 'KarVenSen delivers cutting-edge drone technology, AI software development, cloud infrastructure, and professional training. Transform your business with innovative solutions.',
      keywords: [
        'drone services',
        'AI development',
        'cloud solutions',
        'drone training',
        'software development',
        'GIS mapping',
        'aerial survey',
        'KarVenSen'
      ],
      ogTitle: 'KarVenSen - Innovative Drone & AI Technology Solutions',
      ogDescription: 'Leading provider of drone services, AI development, and cloud infrastructure. Professional training and cutting-edge technology solutions.',
      noIndex: false,
      noFollow: false,
    }
  },

  homePageSettings: {
    _type: 'homePageSettings',
    seo: {
      metaTitle: 'KarVenSen | Drone Services, AI Development & Cloud Solutions',
      metaDescription: 'Transform your business with KarVenSen\'s expert drone technology, AI software development, cloud infrastructure, and professional training programs.',
      keywords: [
        'drone services',
        'AI development',
        'cloud solutions',
        'drone training',
        'aerial photography',
        'GIS mapping',
        'UAV services',
        'software development'
      ],
      ogTitle: 'KarVenSen - Your Partner in Innovation',
      ogDescription: 'Leading provider of drone services, AI solutions, and cloud technology. Expert training and professional services.',
      noIndex: false,
      noFollow: false,
    }
  },

  servicesPage: {
    _type: 'servicesPage',
    seo: {
      metaTitle: 'Our Services | Drone, AI & Cloud Solutions | KarVenSen',
      metaDescription: 'Explore KarVenSen\'s comprehensive services: drone operations, AI software development, cloud infrastructure, GIS mapping, and professional training programs.',
      keywords: [
        'drone services',
        'AI software development',
        'cloud solutions',
        'GIS mapping',
        'aerial survey',
        'UAV operations',
        'drone training',
        'custom software',
        'cloud infrastructure'
      ],
      ogTitle: 'Professional Drone & Technology Services | KarVenSen',
      ogDescription: 'Industry-leading drone operations, AI development, cloud solutions, and training programs. Transform your business with cutting-edge technology.',
      noIndex: false,
      noFollow: false,
    }
  },

  blogPageSettings: {
    _type: 'blogPageSettings',
    seo: {
      metaTitle: 'Blog | Drone Technology & AI Insights | KarVenSen',
      metaDescription: 'Stay updated with the latest insights on drone technology, AI development, cloud solutions, and industry trends from KarVenSen\'s experts.',
      keywords: [
        'drone blog',
        'AI insights',
        'technology trends',
        'UAV news',
        'cloud computing',
        'industry updates',
        'tech articles'
      ],
      ogTitle: 'KarVenSen Blog - Tech Insights & Industry Updates',
      ogDescription: 'Expert insights on drone technology, AI development, and cloud solutions. Stay ahead with our latest articles and industry trends.',
      noIndex: false,
      noFollow: false,
    }
  },

  careersPageSettings: {
    _type: 'careersPageSettings',
    seo: {
      metaTitle: 'Careers at KarVenSen | Join Our Innovation Team',
      metaDescription: 'Join KarVenSen\'s growing team of innovators. Explore exciting career opportunities in drone technology, AI development, cloud solutions, and more.',
      keywords: [
        'drone jobs',
        'AI careers',
        'tech careers',
        'software developer jobs',
        'cloud engineer jobs',
        'join our team',
        'tech company careers'
      ],
      ogTitle: 'Work With Us | Careers at KarVenSen',
      ogDescription: 'Be part of something innovative. Explore career opportunities in drone technology, AI, and cloud solutions at KarVenSen.',
      noIndex: false,
      noFollow: false,
    }
  },

  contactPageSettings: {
    _type: 'contactPageSettings',
    seo: {
      metaTitle: 'Contact Us | Get in Touch with KarVenSen',
      metaDescription: 'Contact KarVenSen for drone services, AI development, cloud solutions, or training programs. Let\'s discuss how we can help transform your business.',
      keywords: [
        'contact KarVenSen',
        'get quote',
        'drone services inquiry',
        'AI consultation',
        'cloud solutions contact'
      ],
      ogTitle: 'Contact KarVenSen | Let\'s Build Something Great',
      ogDescription: 'Ready to transform your business? Contact our team to discuss your drone, AI, or cloud technology needs.',
      noIndex: false,
      noFollow: false,
    }
  },

  aboutPage: {
    _type: 'aboutPage',
    seo: {
      metaTitle: 'About KarVenSen | Leaders in Drone & AI Technology',
      metaDescription: 'Learn about KarVenSen\'s journey in pioneering drone technology, AI development, and cloud solutions. Meet our team and discover our mission.',
      keywords: [
        'about KarVenSen',
        'drone company',
        'AI company',
        'tech innovation',
        'our story',
        'our team',
        'company mission'
      ],
      ogTitle: 'About KarVenSen | Innovation in Drone & AI Technology',
      ogDescription: 'Pioneering the future of drone technology, AI development, and cloud solutions. Learn about our journey and mission.',
      noIndex: false,
      noFollow: false,
    }
  },

  trainingPage: {
    _type: 'trainingPage',
    seo: {
      metaTitle: 'Drone Training Courses | Professional UAV Certification',
      metaDescription: 'Master drone piloting with KarVenSen\'s professional training courses. Expert-led instruction, hands-on experience, and industry-recognized certification.',
      keywords: [
        'drone training',
        'UAV courses',
        'drone certification',
        'pilot training',
        'drone license',
        'professional drone course',
        'aerial photography training'
      ],
      ogTitle: 'Professional Drone Training | KarVenSen Academy',
      ogDescription: 'Become a certified drone pilot with our comprehensive training programs. Expert instruction and hands-on experience.',
      noIndex: false,
      noFollow: false,
    }
  }
};

async function seedSEOData() {
  console.log('🔍 Starting SEO data seeding...\n');

  try {
    // Seed each page type
    for (const [pageType, data] of Object.entries(seoTemplates)) {
      try {
        console.log(`📝 Processing ${pageType}...`);
        
        // Check if document exists
        const existing = await client.fetch(`*[_type == "${data._type}"][0]`);
        
        if (existing) {
          // Update existing document
          const updated = await client
            .patch(existing._id)
            .set({ seo: data.seo })
            .commit();
          
          console.log(`✅ Updated SEO for ${pageType} (ID: ${existing._id})`);
        } else {
          // Create new document
          const created = await client.create(data);
          console.log(`✅ Created ${pageType} with SEO (ID: ${created._id})`);
        }
        
        console.log(`   Meta Title: ${data.seo.metaTitle}`);
        console.log(`   Keywords: ${data.seo.keywords.length} keywords added\n`);
        
      } catch (error) {
        console.error(`❌ Error processing ${pageType}:`, error.message);
      }
    }

    console.log('\n✨ SEO data seeding completed!');
    console.log('\n📋 Next Steps:');
    console.log('1. Visit your Sanity Studio: http://localhost:3000/studio');
    console.log('2. Navigate to each page settings document');
    console.log('3. Review and customize the SEO fields');
    console.log('4. Upload Open Graph images (1200x630px recommended)');
    console.log('5. Adjust keywords based on your specific services');

  } catch (error) {
    console.error('❌ Failed to seed SEO data:', error);
    process.exit(1);
  }
}

// Run the seeding
seedSEOData();
