/**
 * Seed Script to Populate Sanity with Existing Website Content
 * Run this to migrate hardcoded content into Sanity CMS
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN, // Need write token
  apiVersion: '2024-01-01',
  useCdn: false,
})

// Navbar Settings - Current website content
const navbarSettingsData = {
  _type: 'navbarSettings',
  _id: 'navbar-settings-main',
  isActive: true,
  logo: {
    text: 'Karvensen',
    imagePath: '/logo karven.png'
  },
  serviceDropdown: [
    {
      _key: 'service-1',
      title: 'AI Software Development',
      href: '/services#ai-software',
      description: 'Custom AI and machine learning solutions',
      icon: 'Cpu',
      order: 1
    },
    {
      _key: 'service-2',
      title: 'Drone Technology',
      href: '/services#drone-technology',
      description: 'Agricultural drone systems for farmers',
      icon: 'Plane',
      order: 2
    },
    {
      _key: 'service-3',
      title: 'LMS Solutions',
      href: '/services#lms',
      description: 'Modern learning management systems',
      icon: 'BookOpen',
      order: 3
    },
    {
      _key: 'service-4',
      title: 'ERP Systems',
      href: '/services#erp',
      description: 'Enterprise resource planning solutions',
      icon: 'Server',
      order: 4
    },
    {
      _key: 'service-5',
      title: 'Cloud Infrastructure',
      href: '/services#cloud',
      description: 'Scalable cloud and DevOps solutions',
      icon: 'Cloud',
      order: 5
    }
  ],
  trainingDropdown: [
    {
      _key: 'training-1',
      title: 'Farmer Programs',
      href: '/training#farmers',
      description: 'Drone awareness for agriculture',
      icon: 'Plane',
      order: 1
    },
    {
      _key: 'training-2',
      title: 'School Workshops',
      href: '/training#schools',
      description: 'Technical education for students',
      icon: 'GraduationCap',
      order: 2
    },
    {
      _key: 'training-3',
      title: 'Professional Training',
      href: '/training#professional',
      description: 'Skill development programs',
      icon: 'BookOpen',
      order: 3
    }
  ]
}

// Service Detail Page Example - Drone Survey
const droneSurveyPageData = {
  _type: 'serviceDetailPage',
  _id: 'service-drone-survey-mapping',
  slug: {
    _type: 'slug',
    current: 'drone-survey-and-mapping'
  },
  title: 'Drone Survey and Mapping',
  isActive: true,
  hero: {
    badge: 'Professional Surveying',
    title: 'Drone Survey and Mapping Services',
    subtitle: 'High-precision aerial surveys with centimeter-level accuracy for construction, agriculture, mining, and land management projects.'
  },
  overview: {
    title: 'Overview',
    description: 'Our drone survey and mapping services leverage advanced UAV technology and precision sensors to deliver accurate geospatial data. From topographic surveys to 3D mapping, we provide comprehensive solutions for diverse industries.'
  },
  solutions: [
    {
      _key: 'solution-1',
      id: 'base-map',
      icon: 'Map',
      title: 'Base Map Creation',
      description: 'Redefine your mapping foundation with our detailed base maps. Incorporating essential elements such as transport networks, administrative boundaries, settlements, land cover, and water bodies, our base maps serve as a robust foundation for diverse applications.',
      features: [
        'High-resolution aerial imagery',
        'Accurate georeferencing',
        'Multi-layer data integration',
        'Custom map styling',
        'Regular updates and maintenance'
      ],
      order: 1
    },
    {
      _key: 'solution-2',
      id: 'asset-mapping',
      icon: 'Camera',
      title: 'Asset Mapping and Analysis',
      description: 'Comprehensive asset inventory and condition assessment using advanced drone technology. Track, monitor, and analyze your assets with precision.',
      features: [
        'Detailed asset cataloging',
        'Condition assessment reports',
        '3D modeling and visualization',
        'Change detection analysis',
        'Automated reporting systems'
      ],
      order: 2
    },
    {
      _key: 'solution-3',
      id: 'land-surveying',
      icon: 'Ruler',
      title: 'Land Surveying / Cartography',
      description: 'Professional land surveying services with centimeter-level accuracy. Create detailed topographic maps and boundary surveys for your projects.',
      features: [
        'Topographic surveys',
        'Boundary demarcation',
        'Contour mapping',
        'Volume calculations',
        'CAD-ready deliverables'
      ],
      order: 3
    }
  ],
  keyFeatures: {
    title: 'Why Choose Our Surveying Services',
    subtitle: 'Complete surveying solutions powered by cutting-edge drone technology',
    features: [
      {
        _key: 'feature-1',
        icon: 'Zap',
        title: 'Fast Turnaround',
        description: 'Get survey results in days, not weeks. Our drone technology covers large areas quickly without compromising accuracy.'
      },
      {
        _key: 'feature-2',
        icon: 'Target',
        title: 'Centimeter Accuracy',
        description: 'RTK/PPK GPS integration ensures precision within 2-3cm for critical surveying applications.'
      },
      {
        _key: 'feature-3',
        icon: 'Shield',
        title: 'Safe Operations',
        description: 'No need for personnel to access dangerous or hard-to-reach areas. Drones handle it safely.'
      }
    ]
  },
  process: {
    title: 'Our Survey Process',
    subtitle: 'From planning to delivery, we ensure quality at every step',
    steps: [
      {
        _key: 'step-1',
        number: 1,
        title: 'Planning',
        description: 'Site assessment and flight planning',
        icon: 'ClipboardList'
      },
      {
        _key: 'step-2',
        number: 2,
        title: 'Data Capture',
        description: 'Aerial survey with precision GPS',
        icon: 'Plane'
      },
      {
        _key: 'step-3',
        number: 3,
        title: 'Processing',
        description: 'Photogrammetry and data analysis',
        icon: 'Cpu'
      },
      {
        _key: 'step-4',
        number: 4,
        title: 'Delivery',
        description: 'Maps, models, and reports',
        icon: 'Package'
      }
    ]
  },
  cta: {
    title: 'Ready to Start Your Survey Project?',
    description: 'Contact us today for a consultation and quote for your surveying needs',
    buttonText: 'Get Started',
    buttonLink: '/contact'
  },
  seo: {
    metaTitle: 'Drone Survey and Mapping Services | Karvensen',
    metaDescription: 'Professional drone surveying services with centimeter-level accuracy. Topographic surveys, 3D mapping, and asset mapping for construction, agriculture, and mining.',
    keywords: ['drone survey', 'aerial mapping', 'topographic survey', 'UAV mapping', 'photogrammetry']
  }
}

// Cloud Services Page Data
const cloudServicesPageData = {
  _type: 'serviceDetailPage',
  _id: 'service-cloud-services',
  slug: {
    _type: 'slug',
    current: 'cloud-services'
  },
  title: 'Cloud Services',
  isActive: true,
  hero: {
    badge: 'Scalable Infrastructure',
    title: 'Cloud Infrastructure & DevOps Services',
    subtitle: 'Build, deploy, and scale your applications with our comprehensive cloud solutions on AWS, Azure, and Google Cloud.'
  },
  overview: {
    title: 'Cloud Solutions for Modern Businesses',
    description: 'Transform your IT infrastructure with our cloud services. From migration to management, we provide end-to-end cloud solutions that drive efficiency and innovation.'
  },
  solutions: [
    {
      _key: 'solution-1',
      id: 'cloud-migration',
      icon: 'Cloud',
      title: 'Cloud Migration & Strategy',
      description: 'Seamless migration of your applications and data to the cloud with minimal downtime',
      features: [
        'Assessment and planning',
        'Migration execution',
        'Post-migration optimization',
        'Cost optimization strategies',
        'Multi-cloud architecture'
      ],
      order: 1
    },
    {
      _key: 'solution-2',
      id: 'iaas',
      icon: 'Server',
      title: 'Infrastructure as a Service (IaaS)',
      description: 'Scalable computing resources on-demand with flexible pricing models',
      features: [
        'Virtual machine management',
        'Auto-scaling infrastructure',
        'Load balancing',
        'Storage solutions',
        'Network configuration'
      ],
      order: 2
    },
    {
      _key: 'solution-3',
      id: 'devops',
      icon: 'GitBranch',
      title: 'DevOps & CI/CD',
      description: 'Automated deployment pipelines and infrastructure as code',
      features: [
        'CI/CD pipeline setup',
        'Container orchestration (Kubernetes)',
        'Infrastructure automation',
        'Monitoring and logging',
        'Security best practices'
      ],
      order: 3
    }
  ],
  keyFeatures: {
    title: 'Key Features',
    subtitle: 'Complete cloud solutions to power your digital transformation',
    features: [
      {
        _key: 'feature-1',
        icon: 'Zap',
        title: 'High Performance',
        description: 'Optimized infrastructure for maximum speed and reliability'
      },
      {
        _key: 'feature-2',
        icon: 'Lock',
        title: 'Enterprise Security',
        description: 'Bank-grade security with encryption and compliance certifications'
      },
      {
        _key: 'feature-3',
        icon: 'TrendingUp',
        title: 'Auto Scaling',
        description: 'Automatically scale resources based on demand'
      }
    ]
  },
  cta: {
    title: 'Ready to Move to the Cloud?',
    description: "Let's discuss how our cloud services can transform your business infrastructure",
    buttonText: 'Contact Us Today',
    buttonLink: '/contact'
  },
  seo: {
    metaTitle: 'Cloud Services - AWS, Azure, DevOps | Karvensen',
    metaDescription: 'Professional cloud infrastructure services including migration, DevOps, CI/CD, and cloud management on AWS, Azure, and Google Cloud.',
    keywords: ['cloud services', 'AWS', 'Azure', 'DevOps', 'CI/CD', 'cloud migration', 'IaaS']
  }
}

// Terms of Service Page Data
const termsPageData = {
  _type: 'legalPage',
  _id: 'legal-terms-of-service',
  pageType: 'terms',
  isActive: true,
  lastUpdated: '2026-01-23',
  hero: {
    title: 'Terms of Service',
    subtitle: 'Please read these terms carefully before using our services'
  },
  introduction: 'Welcome to Karvensen. By accessing and using our website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.',
  sections: [
    {
      _key: 'section-1',
      title: '1. Acceptance of Terms',
      content: [
        {
          _type: 'block',
          _key: 'block-1',
          children: [
            {
              _type: 'span',
              text: 'By accessing this website, you accept these Terms of Service in full. If you disagree with these terms, you must not use this website.'
            }
          ]
        }
      ],
      order: 1
    },
    {
      _key: 'section-2',
      title: '2. Services',
      content: [
        {
          _type: 'block',
          _key: 'block-2',
          children: [
            {
              _type: 'span',
              text: 'Karvensen provides AI software development, drone technology solutions, cloud services, and educational programs. We reserve the right to modify, suspend, or discontinue any service at any time without notice.'
            }
          ]
        }
      ],
      order: 2
    },
    {
      _key: 'section-3',
      title: '3. User Responsibilities',
      content: [
        {
          _type: 'block',
          _key: 'block-3',
          children: [
            {
              _type: 'span',
              text: 'You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.'
            }
          ]
        }
      ],
      order: 3
    }
  ],
  contactInfo: {
    email: 'legal@karvensen.com',
    phone: '+91 123 456 7890',
    address: '123 Innovation Drive, Tech Park, Bangalore, Karnataka 560001, India'
  }
}

// Privacy Policy Page Data
const privacyPageData = {
  _type: 'legalPage',
  _id: 'legal-privacy-policy',
  pageType: 'privacy',
  isActive: true,
  lastUpdated: '2026-01-23',
  hero: {
    title: 'Privacy Policy',
    subtitle: 'How we collect, use, and protect your information'
  },
  introduction: 'At Karvensen, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.',
  sections: [
    {
      _key: 'section-1',
      title: '1. Information We Collect',
      content: [
        {
          _type: 'block',
          _key: 'block-1',
          children: [
            {
              _type: 'span',
              text: 'We collect information that you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or engage with our services. This may include your name, email address, phone number, and company information.'
            }
          ]
        }
      ],
      order: 1
    },
    {
      _key: 'section-2',
      title: '2. How We Use Your Information',
      content: [
        {
          _type: 'block',
          _key: 'block-2',
          children: [
            {
              _type: 'span',
              text: 'We use the information we collect to provide, maintain, and improve our services, to communicate with you, to process your requests, and to send you marketing communications (with your consent).'
            }
          ]
        }
      ],
      order: 2
    },
    {
      _key: 'section-3',
      title: '3. Data Security',
      content: [
        {
          _type: 'block',
          _key: 'block-3',
          children: [
            {
              _type: 'span',
              text: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
            }
          ]
        }
      ],
      order: 3
    }
  ],
  contactInfo: {
    email: 'privacy@karvensen.com',
    phone: '+91 123 456 7890',
    address: '123 Innovation Drive, Tech Park, Bangalore, Karnataka 560001, India'
  }
}

async function seedContent() {
  console.log('🌱 Starting Sanity content seeding...\n')

  try {
    // Create Navbar Settings
    console.log('📍 Creating Navbar Settings...')
    await client.createOrReplace(navbarSettingsData)
    console.log('✅ Navbar Settings created\n')

    // Create Drone Survey Service Page
    console.log('🚁 Creating Drone Survey Service Page...')
    await client.createOrReplace(droneSurveyPageData)
    console.log('✅ Drone Survey page created\n')

    // Create Cloud Services Page
    console.log('☁️  Creating Cloud Services Page...')
    await client.createOrReplace(cloudServicesPageData)
    console.log('✅ Cloud Services page created\n')

    // Create Terms of Service
    console.log('📄 Creating Terms of Service...')
    await client.createOrReplace(termsPageData)
    console.log('✅ Terms of Service created\n')

    // Create Privacy Policy
    console.log('🔒 Creating Privacy Policy...')
    await client.createOrReplace(privacyPageData)
    console.log('✅ Privacy Policy created\n')

    console.log('✨ All content seeded successfully!')
    console.log('\n🎉 You can now view and edit this content in Sanity Studio')
    console.log('   Visit: http://localhost:3000/studio\n')

  } catch (error) {
    console.error('❌ Error seeding content:', error)
    process.exit(1)
  }
}

// Run the seed function
seedContent()
