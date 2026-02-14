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

// Privacy Policy Data
const privacyPolicyData = {
  _type: 'legalPage',
  _id: 'legal-privacy',
  pageType: 'privacy',
  isActive: true,
  lastUpdated: '2026-01-22',
  hero: {
    title: 'Privacy Policy',
    subtitle: 'At Karvensen, we are committed to protecting your privacy. This policy explains our data practices.',
  },
  introduction: 'KarVenSen ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services and website.',
  sections: [
    {
      _key: 'info-collect',
      title: 'Information We Collect',
      order: 1,
      content: [
        {
          _type: 'block',
          _key: 'intro1',
          children: [{ _type: 'span', text: 'We collect various types of information to provide and improve our services.' }],
          markDefs: [],
          style: 'normal',
        }
      ],
      subsections: [
        {
          _key: 'personal-info',
          title: 'Personal Information',
          content: [
            {
              _type: 'block',
              _key: 'p1',
              children: [{ _type: 'span', text: 'We may collect personal information that you voluntarily provide to us, including:' }],
              markDefs: [],
              style: 'normal',
            },
            {
              _type: 'block',
              _key: 'list1',
              children: [{ _type: 'span', text: 'Name, email address, phone number' }],
              level: 1,
              listItem: 'bullet',
              markDefs: [],
              style: 'normal',
            },
            {
              _type: 'block',
              _key: 'list2',
              children: [{ _type: 'span', text: 'Company name and job title' }],
              level: 1,
              listItem: 'bullet',
              markDefs: [],
              style: 'normal',
            },
            {
              _type: 'block',
              _key: 'list3',
              children: [{ _type: 'span', text: 'Billing and payment information' }],
              level: 1,
              listItem: 'bullet',
              markDefs: [],
              style: 'normal',
            },
            {
              _type: 'block',
              _key: 'list4',
              children: [{ _type: 'span', text: 'Location data (with your permission)' }],
              level: 1,
              listItem: 'bullet',
              markDefs: [],
              style: 'normal',
            },
            {
              _type: 'block',
              _key: 'list5',
              children: [{ _type: 'span', text: 'Communication preferences' }],
              level: 1,
              listItem: 'bullet',
              markDefs: [],
              style: 'normal',
            },
          ]
        },
        {
          _key: 'technical-info',
          title: 'Technical Information',
          content: [
            {
              _type: 'block',
              _key: 't1',
              children: [{ _type: 'span', text: 'We automatically collect certain information when you use our services:' }],
              markDefs: [],
              style: 'normal',
            },
            {
              _type: 'block',
              _key: 'tlist1',
              children: [{ _type: 'span', text: 'IP address and browser type' }],
              level: 1,
              listItem: 'bullet',
              markDefs: [],
              style: 'normal',
            },
            {
              _type: 'block',
              _key: 'tlist2',
              children: [{ _type: 'span', text: 'Device information and operating system' }],
              level: 1,
              listItem: 'bullet',
              markDefs: [],
              style: 'normal',
            },
            {
              _type: 'block',
              _key: 'tlist3',
              children: [{ _type: 'span', text: 'Usage data and analytics' }],
              level: 1,
              listItem: 'bullet',
              markDefs: [],
              style: 'normal',
            },
            {
              _type: 'block',
              _key: 'tlist4',
              children: [{ _type: 'span', text: 'Cookies and similar tracking technologies' }],
              level: 1,
              listItem: 'bullet',
              markDefs: [],
              style: 'normal',
            },
          ]
        },
        {
          _key: 'drone-data',
          title: 'Drone-Collected Data',
          content: [
            {
              _type: 'block',
              _key: 'd1',
              children: [{ _type: 'span', text: 'During drone operations, we may collect:' }],
              markDefs: [],
              style: 'normal',
            },
            {
              _type: 'block',
              _key: 'dlist1',
              children: [{ _type: 'span', text: 'Aerial imagery and video footage' }],
              level: 1,
              listItem: 'bullet',
              markDefs: [],
              style: 'normal',
            },
            {
              _type: 'block',
              _key: 'dlist2',
              children: [{ _type: 'span', text: 'Geospatial and GPS data' }],
              level: 1,
              listItem: 'bullet',
              markDefs: [],
              style: 'normal',
            },
            {
              _type: 'block',
              _key: 'dlist3',
              children: [{ _type: 'span', text: 'Agricultural field data and analytics' }],
              level: 1,
              listItem: 'bullet',
              markDefs: [],
              style: 'normal',
            },
            {
              _type: 'block',
              _key: 'dlist4',
              children: [{ _type: 'span', text: 'Survey and mapping information' }],
              level: 1,
              listItem: 'bullet',
              markDefs: [],
              style: 'normal',
            },
          ]
        },
      ]
    },
    {
      _key: 'how-we-use',
      title: 'How We Use Your Information',
      order: 2,
      content: [
        {
          _type: 'block',
          _key: 'use1',
          children: [{ _type: 'span', text: 'We use the collected information for:' }],
          markDefs: [],
          style: 'normal',
        },
        {
          _type: 'block',
          _key: 'use-list1',
          children: [{ _type: 'span', text: 'Providing and maintaining our services' }],
          level: 1,
          listItem: 'bullet',
          markDefs: [],
          style: 'normal',
        },
        {
          _type: 'block',
          _key: 'use-list2',
          children: [{ _type: 'span', text: 'Processing transactions and billing' }],
          level: 1,
          listItem: 'bullet',
          markDefs: [],
          style: 'normal',
        },
        {
          _type: 'block',
          _key: 'use-list3',
          children: [{ _type: 'span', text: 'Sending service updates and communications' }],
          level: 1,
          listItem: 'bullet',
          markDefs: [],
          style: 'normal',
        },
        {
          _type: 'block',
          _key: 'use-list4',
          children: [{ _type: 'span', text: 'Improving our products and services' }],
          level: 1,
          listItem: 'bullet',
          markDefs: [],
          style: 'normal',
        },
        {
          _type: 'block',
          _key: 'use-list5',
          children: [{ _type: 'span', text: 'Analyzing usage patterns and trends' }],
          level: 1,
          listItem: 'bullet',
          markDefs: [],
          style: 'normal',
        },
        {
          _type: 'block',
          _key: 'use-list6',
          children: [{ _type: 'span', text: 'Ensuring security and preventing fraud' }],
          level: 1,
          listItem: 'bullet',
          markDefs: [],
          style: 'normal',
        },
        {
          _type: 'block',
          _key: 'use-list7',
          children: [{ _type: 'span', text: 'Complying with legal obligations' }],
          level: 1,
          listItem: 'bullet',
          markDefs: [],
          style: 'normal',
        },
        {
          _type: 'block',
          _key: 'use-list8',
          children: [{ _type: 'span', text: 'Customizing your user experience' }],
          level: 1,
          listItem: 'bullet',
          markDefs: [],
          style: 'normal',
        },
      ],
    },
    {
      _key: 'data-security',
      title: 'Data Security',
      order: 3,
      content: [
        {
          _type: 'block',
          _key: 'security1',
          children: [{ _type: 'span', text: 'We implement industry-standard security measures to protect your information, including encryption, secure servers, and access controls. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.' }],
          markDefs: [],
          style: 'normal',
        }
      ],
    },
  ],
  contactInfo: {
    email: 'privacy@karvensen.com',
    phone: '+91 80 1234 5678',
    address: 'Tech Innovation Park, Indiranagar, Bangalore, Karnataka 560038',
  }
};

// Terms of Service Data
const termsOfServiceData = {
  _type: 'legalPage',
  _id: 'legal-terms',
  pageType: 'terms',
  isActive: true,
  lastUpdated: '2026-01-22',
  hero: {
    title: 'Terms and Conditions',
    subtitle: 'Please read these terms carefully before using our services.',
  },
  introduction: 'Welcome to KarVenSen. These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.',
  sections: [
    {
      _key: 'services',
      title: 'Services',
      order: 1,
      content: [
        {
          _type: 'block',
          _key: 'serv1',
          children: [{ _type: 'span', text: 'KarVenSen provides AI-driven software solutions and drone-based services including but not limited to:' }],
          markDefs: [],
          style: 'normal',
        },
        {
          _type: 'block',
          _key: 'serv-list1',
          children: [{ _type: 'span', text: 'AI Software Development and Integration' }],
          level: 1,
          listItem: 'bullet',
          markDefs: [],
          style: 'normal',
        },
        {
          _type: 'block',
          _key: 'serv-list2',
          children: [{ _type: 'span', text: 'Drone Survey and Mapping Services' }],
          level: 1,
          listItem: 'bullet',
          markDefs: [],
          style: 'normal',
        },
        {
          _type: 'block',
          _key: 'serv-list3',
          children: [{ _type: 'span', text: 'Precision Agriculture Solutions' }],
          level: 1,
          listItem: 'bullet',
          markDefs: [],
          style: 'normal',
        },
        {
          _type: 'block',
          _key: 'serv-list4',
          children: [{ _type: 'span', text: 'Cloud Services and Data Management' }],
          level: 1,
          listItem: 'bullet',
          markDefs: [],
          style: 'normal',
        },
        {
          _type: 'block',
          _key: 'serv-list5',
          children: [{ _type: 'span', text: 'Educational and Training Programs' }],
          level: 1,
          listItem: 'bullet',
          markDefs: [],
          style: 'normal',
        },
        {
          _type: 'block',
          _key: 'serv-list6',
          children: [{ _type: 'span', text: 'Learning Management Systems' }],
          level: 1,
          listItem: 'bullet',
          markDefs: [],
          style: 'normal',
        },
      ],
    },
    {
      _key: 'user-resp',
      title: 'User Responsibilities',
      order: 2,
      content: [
        {
          _type: 'block',
          _key: 'resp1',
          children: [{ _type: 'span', text: 'When using our services, you agree to:' }],
          markDefs: [],
          style: 'normal',
        },
        {
          _type: 'block',
          _key: 'resp-list1',
          children: [{ _type: 'span', text: 'Provide accurate and complete information' }],
          level: 1,
          listItem: 'bullet',
          markDefs: [],
          style: 'normal',
        },
        {
          _type: 'block',
          _key: 'resp-list2',
          children: [{ _type: 'span', text: 'Maintain the confidentiality of your account credentials' }],
          level: 1,
          listItem: 'bullet',
          markDefs: [],
          style: 'normal',
        },
        {
          _type: 'block',
          _key: 'resp-list3',
          children: [{ _type: 'span', text: 'Use our services only for lawful purposes' }],
          level: 1,
          listItem: 'bullet',
          markDefs: [],
          style: 'normal',
        },
        {
          _type: 'block',
          _key: 'resp-list4',
          children: [{ _type: 'span', text: 'Comply with all applicable laws and regulations' }],
          level: 1,
          listItem: 'bullet',
          markDefs: [],
          style: 'normal',
        },
        {
          _type: 'block',
          _key: 'resp-list5',
          children: [{ _type: 'span', text: 'Not interfere with or disrupt our services' }],
          level: 1,
          listItem: 'bullet',
          markDefs: [],
          style: 'normal',
        },
        {
          _type: 'block',
          _key: 'resp-list6',
          children: [{ _type: 'span', text: 'Not attempt unauthorized access to our systems' }],
          level: 1,
          listItem: 'bullet',
          markDefs: [],
          style: 'normal',
        },
      ],
    },
    {
      _key: 'intellectual-property',
      title: 'Intellectual Property',
      order: 3,
      content: [
        {
          _type: 'block',
          _key: 'ip1',
          children: [{ _type: 'span', text: 'All content, software, code, designs, graphics, logos, and other materials on our website are the property of KarVenSen and are protected by intellectual property laws. You may not copy, modify, distribute, or reproduce any content without our prior written consent.' }],
          markDefs: [],
          style: 'normal',
        }
      ],
    },
    {
      _key: 'drone-ops',
      title: 'Drone Operations',
      order: 4,
      content: [
        {
          _type: 'block',
          _key: 'drone1',
          children: [{ _type: 'span', text: 'All drone operations conducted by KarVenSen are performed by DGCA-certified pilots and comply with:' }],
          markDefs: [],
          style: 'normal',
        },
        {
          _type: 'block',
          _key: 'drone-list1',
          children: [{ _type: 'span', text: 'Directorate General of Civil Aviation (DGCA) regulations' }],
          level: 1,
          listItem: 'bullet',
          markDefs: [],
          style: 'normal',
        },
        {
          _type: 'block',
          _key: 'drone-list2',
          children: [{ _type: 'span', text: 'Indian aviation laws and guidelines' }],
          level: 1,
          listItem: 'bullet',
          markDefs: [],
          style: 'normal',
        },
        {
          _type: 'block',
          _key: 'drone-list3',
          children: [{ _type: 'span', text: 'Local and state-specific drone operation rules' }],
          level: 1,
          listItem: 'bullet',
          markDefs: [],
          style: 'normal',
        },
        {
          _type: 'block',
          _key: 'drone-list4',
          children: [{ _type: 'span', text: 'Safety and privacy standards' }],
          level: 1,
          listItem: 'bullet',
          markDefs: [],
          style: 'normal',
        },
      ],
    },
    {
      _key: 'payment-terms',
      title: 'Payment Terms',
      order: 5,
      content: [
        {
          _type: 'block',
          _key: 'payment1',
          children: [{ _type: 'span', text: 'Payment terms will be specified in individual service agreements. Unless otherwise stated, payments are due within 30 days of invoice date. Late payments may incur additional charges as per the agreement.' }],
          markDefs: [],
          style: 'normal',
        }
      ],
    },
    {
      _key: 'liability',
      title: 'Limitation of Liability',
      order: 6,
      content: [
        {
          _type: 'block',
          _key: 'liability1',
          children: [{ _type: 'span', text: 'KarVenSen shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid by you for the specific service in question.' }],
          markDefs: [],
          style: 'normal',
        }
      ],
    },
    {
      _key: 'governing-law',
      title: 'Governing Law',
      order: 7,
      content: [
        {
          _type: 'block',
          _key: 'law1',
          children: [{ _type: 'span', text: 'These Terms and Conditions are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka.' }],
          markDefs: [],
          style: 'normal',
        }
      ],
    },
  ],
  contactInfo: {
    email: 'legal@karvensen.com',
    phone: '+91 80 1234 5678',
    address: 'Tech Innovation Park, Indiranagar, Bangalore, Karnataka 560038',
  }
};

async function seedLegalPages() {
  try {
    console.log('⚖️  Starting Legal Pages Data Seeding...\n');

    // 1. Create Privacy Policy
    console.log('📋 Creating Privacy Policy...');
    const privacy = await client.createOrReplace(privacyPolicyData);
    console.log('✅ Privacy Policy created:', privacy._id);

    // 2. Create Terms of Service
    console.log('\n📋 Creating Terms of Service...');
    const terms = await client.createOrReplace(termsOfServiceData);
    console.log('✅ Terms of Service created:', terms._id);

    console.log('\n🎉 Legal Pages Data Seeding Complete!');
    console.log('\n📝 Summary:');
    console.log(`   ✓ Privacy Policy: 1 (with ${privacyPolicyData.sections.length} sections)`);
    console.log(`   ✓ Terms of Service: 1 (with ${termsOfServiceData.sections.length} sections)`);
    console.log('\n💡 Next Steps:');
    console.log('   1. Visit http://localhost:3000/studio to edit legal content');
    console.log('   2. Navigate to: ⚖️ Legal Pages → Privacy Policy or Terms of Service');
    console.log('   3. Check the pages at:');
    console.log('      - http://localhost:3000/privacy');
    console.log('      - http://localhost:3000/terms');
    console.log('   4. Update contact information and content as needed\n');

  } catch (error) {
    console.error('❌ Error seeding legal pages:', error);
    process.exit(1);
  }
}

// Main execution
async function main() {
  await seedLegalPages();
}

main();
