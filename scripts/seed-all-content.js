/**
 * COMPREHENSIVE Seed Script - ALL Website Content
 * This populates ALL existing content from the website into Sanity
 */

import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'qyxjb4t2',
  dataset: 'production',
  token: 'sknSe6Q3bFSjJbADkj8Qfpo2II6iTgCqbXKGujzKrJ0JydkE9SNAdUFzAPXkvSwtaxz42g133YYf8st8g1uaCtWD20ujBkWI2dWaxyEHFmrqBpgmyEtHsZCkkfuIepqM6V1ScmvG3H38kp7Q0avXCY6VQAVJ79qw2DoMRVq7RqRTo8ImI0ZW',
  apiVersion: '2024-01-01',
  useCdn: false,
})

// ============ NAVBAR SETTINGS ============
const navbarData = {
  _type: 'navbarSettings',
  _id: 'navbar-main',
  isActive: true,
  logo: { text: 'Karvensen', imagePath: '/logo karven.png' },
  serviceDropdown: [
    { _key: 's1', title: 'AI Software Development', href: '/services/ai-software-development', description: 'Custom AI and ML solutions', icon: 'Cpu', order: 1 },
    { _key: 's2', title: 'Drone Technology', href: '/services/drone-survey-and-mapping', description: 'Agricultural drone systems', icon: 'Plane', order: 2 },
    { _key: 's3', title: 'LMS Solutions', href: '/services/learning-management-systems', description: 'Modern learning platforms', icon: 'BookOpen', order: 3 },
    { _key: 's4', title: 'Cloud Services', href: '/services/cloud-services', description: 'Scalable infrastructure', icon: 'Cloud', order: 4 },
    { _key: 's5', title: 'Data & GIS', href: '/services/data-gis-digital-solutions', description: 'Geospatial solutions', icon: 'Map', order: 5 }
  ],
  trainingDropdown: [
    { _key: 't1', title: 'Farmer Programs', href: '/training#farmers', description: 'Drone awareness for agriculture', icon: 'Plane', order: 1 },
    { _key: 't2', title: 'School Workshops', href: '/training#schools', description: 'Technical education', icon: 'GraduationCap', order: 2 },
    { _key: 't3', title: 'Professional Training', href: '/training#professional', description: 'Skill development', icon: 'BookOpen', order: 3 }
  ]
}

// ============ ALL SERVICE PAGES ============

const servicePages = [
  {
    _type: 'serviceDetailPage',
    _id: 'service-drone-survey',
    slug: { _type: 'slug', current: 'drone-survey-and-mapping' },
    title: 'Drone Survey and Mapping',
    isActive: true,
    hero: {
      badge: 'Professional Surveying',
      title: 'Drone Survey and Mapping Services',
      subtitle: 'High-precision aerial surveys with centimeter-level accuracy'
    },
    overview: {
      title: 'Advanced Aerial Surveying',
      description: 'Professional drone surveying services leveraging cutting-edge UAV technology for construction, agriculture, mining, and land management.'
    },
    solutions: [
      { _key: '1', id: 'base-map', icon: 'Map', title: 'Base Map Creation', description: 'Detailed base maps with essential infrastructure elements', features: ['High-res imagery', 'Georeferencing', 'Multi-layer integration'], order: 1 },
      { _key: '2', id: 'asset', icon: 'Camera', title: 'Asset Mapping', description: 'Comprehensive asset inventory and analysis', features: ['3D modeling', 'Condition assessment', 'Change detection'], order: 2 },
      { _key: '3', id: 'land', icon: 'Ruler', title: 'Land Surveying', description: 'Centimeter-level accuracy surveys', features: ['Topographic surveys', 'Boundary demarcation', 'Volume calculations'], order: 3 }
    ],
    cta: { title: 'Ready to Start Your Survey?', description: 'Contact us for consultation', buttonText: 'Get Started', buttonLink: '/contact' }
  },
  
  {
    _type: 'serviceDetailPage',
    _id: 'service-cloud',
    slug: { _type: 'slug', current: 'cloud-services' },
    title: 'Cloud Services',
    isActive: true,
    hero: {
      badge: 'Scalable Infrastructure',
      title: 'Cloud Infrastructure & DevOps',
      subtitle: 'Build, deploy, and scale with AWS, Azure, and Google Cloud'
    },
    overview: {
      title: 'Enterprise Cloud Solutions',
      description: 'End-to-end cloud services from migration to management, driving efficiency and innovation.'
    },
    solutions: [
      { _key: '1', icon: 'Cloud', title: 'Cloud Migration', description: 'Seamless cloud migration strategies', features: ['Assessment & planning', 'Zero-downtime migration', 'Cost optimization'], order: 1 },
      { _key: '2', icon: 'Server', title: 'IaaS Solutions', description: 'Scalable on-demand infrastructure', features: ['Auto-scaling', 'Load balancing', 'Storage solutions'], order: 2 },
      { _key: '3', icon: 'GitBranch', title: 'DevOps & CI/CD', description: 'Automated deployment pipelines', features: ['Kubernetes orchestration', 'Infrastructure as Code', 'Monitoring'], order: 3 }
    ],
    cta: { title: 'Move to the Cloud', description: 'Transform your infrastructure', buttonText: 'Contact Us', buttonLink: '/contact' }
  },

  {
    _type: 'serviceDetailPage',
    _id: 'service-ai',
    slug: { _type: 'slug', current: 'ai-software-development' },
    title: 'AI Software Development',
    isActive: true,
    hero: {
      badge: 'Intelligent Solutions',
      title: 'AI & Machine Learning Services',
      subtitle: 'Custom AI solutions powered by cutting-edge technology'
    },
    overview: {
      title: 'Transform with AI',
      description: 'Build intelligent applications with machine learning, NLP, computer vision, and predictive analytics.'
    },
    solutions: [
      { _key: '1', icon: 'Brain', title: 'Machine Learning', description: 'Custom ML models for your business', features: ['Predictive analytics', 'Data classification', 'Recommendation systems'], order: 1 },
      { _key: '2', icon: 'MessageSquare', title: 'Natural Language Processing', description: 'Advanced text analysis and chatbots', features: ['Sentiment analysis', 'Text generation', 'Language translation'], order: 2 },
      { _key: '3', icon: 'Eye', title: 'Computer Vision', description: 'Image and video analysis', features: ['Object detection', 'Facial recognition', 'Quality inspection'], order: 3 }
    ],
    cta: { title: 'Build AI Solutions', description: 'Let\'s create intelligent systems', buttonText: 'Start Project', buttonLink: '/contact' }
  },

  {
    _type: 'serviceDetailPage',
    _id: 'service-lms',
    slug: { _type: 'slug', current: 'learning-management-systems' },
    title: 'Learning Management Systems',
    isActive: true,
    hero: {
      badge: 'Educational Technology',
      title: 'LMS Solutions',
      subtitle: 'Comprehensive learning platforms for institutions and enterprises'
    },
    overview: {
      title: 'Transform Learning',
      description: 'Modern LMS platforms with interactive content, assessments, and analytics for effective learning experiences.'
    },
    solutions: [
      { _key: '1', icon: 'BookOpen', title: 'Course Management', description: 'Complete course lifecycle management', features: ['Content authoring', 'Video integration', 'SCORM compliance'], order: 1 },
      { _key: '2', icon: 'Users', title: 'Student Portal', description: 'Engaging learner experience', features: ['Progress tracking', 'Discussion forums', 'Mobile access'], order: 2 },
      { _key: '3', icon: 'BarChart', title: 'Analytics & Reports', description: 'Comprehensive learning analytics', features: ['Performance metrics', 'Completion rates', 'Custom reports'], order: 3 }
    ],
    cta: { title: 'Launch Your LMS', description: 'Empower your learners', buttonText: 'Get Demo', buttonLink: '/contact' }
  },

  {
    _type: 'serviceDetailPage',
    _id: 'service-precision-spray',
    slug: { _type: 'slug', current: 'precision-spraying' },
    title: 'Precision Spraying',
    isActive: true,
    hero: {
      badge: 'Agricultural Innovation',
      title: 'Precision Drone Spraying',
      subtitle: 'Smart agricultural solutions for modern farming'
    },
    overview: {
      title: 'Revolutionize Farming',
      description: 'Automated precision spraying with drones for efficient crop protection and fertilization.'
    },
    solutions: [
      { _key: '1', icon: 'Droplet', title: 'Targeted Spraying', description: 'Precise chemical application', features: ['Variable rate application', 'GPS-guided spraying', 'Reduced chemical waste'], order: 1 },
      { _key: '2', icon: 'Leaf', title: 'Crop Monitoring', description: 'Real-time crop health assessment', features: ['NDVI imaging', 'Disease detection', 'Growth analysis'], order: 2 }
    ],
    cta: { title: 'Modernize Your Farm', description: 'Increase yield with precision', buttonText: 'Learn More', buttonLink: '/contact' }
  },

  {
    _type: 'serviceDetailPage',
    _id: 'service-drone-delivery',
    slug: { _type: 'slug', current: 'drone-delivery' },
    title: 'Drone Delivery',
    isActive: true,
    hero: {
      badge: 'Last-Mile Innovation',
      title: 'Drone Delivery Solutions',
      subtitle: 'Fast, efficient autonomous delivery systems'
    },
    overview: {
      title: 'Future of Delivery',
      description: 'Autonomous drone delivery systems for medical supplies, e-commerce, and emergency services.'
    },
    solutions: [
      { _key: '1', icon: 'Package', title: 'Medical Delivery', description: 'Critical supplies on demand', features: ['Temperature control', 'Real-time tracking', 'Emergency response'], order: 1 },
      { _key: '2', icon: 'ShoppingBag', title: 'E-commerce', description: 'Fast last-mile delivery', features: ['Automated routing', 'Package security', 'Delivery confirmation'], order: 2 }
    ],
    cta: { title: 'Transform Delivery', description: 'Join the aerial revolution', buttonText: 'Contact Us', buttonLink: '/contact' }
  },

  {
    _type: 'serviceDetailPage',
    _id: 'service-drone-box',
    slug: { _type: 'slug', current: 'drone-in-a-box' },
    title: 'Drone-in-a-Box',
    isActive: true,
    hero: {
      badge: 'Automated Operations',
      title: 'Autonomous Drone Systems',
      subtitle: 'Fully automated drone deployment and operations'
    },
    overview: {
      title: 'Automation Redefined',
      description: 'Self-deploying drone systems for security, inspection, and monitoring applications.'
    },
    solutions: [
      { _key: '1', icon: 'Shield', title: 'Security Patrol', description: 'Automated perimeter monitoring', features: ['24/7 operations', 'Threat detection', 'Autonomous charging'], order: 1 },
      { _key: '2', icon: 'Search', title: 'Infrastructure Inspection', description: 'Regular asset monitoring', features: ['Scheduled flights', 'Anomaly detection', 'Maintenance alerts'], order: 2 }
    ],
    cta: { title: 'Automate Operations', description: 'Deploy autonomous solutions', buttonText: 'Explore', buttonLink: '/contact' }
  },

  {
    _type: 'serviceDetailPage',
    _id: 'service-surveillance',
    slug: { _type: 'slug', current: 'drone-surveillance-and-videography' },
    title: 'Drone Surveillance & Videography',
    isActive: true,
    hero: {
      badge: 'Aerial Intelligence',
      title: 'Surveillance & Videography',
      subtitle: 'Professional aerial imaging and security monitoring'
    },
    overview: {
      title: 'Eyes in the Sky',
      description: 'High-quality aerial surveillance, cinematography, and security monitoring services.'
    },
    solutions: [
      { _key: '1', icon: 'Video', title: 'Aerial Videography', description: 'Cinematic drone footage', features: ['4K/8K recording', 'Gimbal stabilization', 'Professional editing'], order: 1 },
      { _key: '2', icon: 'Eye', title: 'Security Monitoring', description: 'Real-time surveillance', features: ['Live streaming', 'Thermal imaging', 'Night vision'], order: 2 }
    ],
    cta: { title: 'Capture from Above', description: 'Professional aerial services', buttonText: 'Get Quote', buttonLink: '/contact' }
  },

  {
    _type: 'serviceDetailPage',
    _id: 'service-data-gis',
    slug: { _type: 'slug', current: 'data-gis-digital-solutions' },
    title: 'Data, GIS & Digital Solutions',
    isActive: true,
    hero: {
      badge: 'Geospatial Intelligence',
      title: 'GIS & Data Solutions',
      subtitle: 'Advanced geospatial analysis and data management'
    },
    overview: {
      title: 'Spatial Intelligence',
      description: 'Comprehensive GIS services, spatial analysis, and digital mapping solutions.'
    },
    solutions: [
      { _key: '1', icon: 'MapPin', title: 'GIS Analysis', description: 'Advanced spatial analytics', features: ['Terrain modeling', 'Spatial queries', 'Data visualization'], order: 1 },
      { _key: '2', icon: 'Database', title: 'Data Management', description: 'Geospatial databases', features: ['PostGIS', 'Data integration', 'API development'], order: 2 }
    ],
    cta: { title: 'Harness Geospatial Data', description: 'Transform data into insights', buttonText: 'Start Now', buttonLink: '/contact' }
  },

  {
    _type: 'serviceDetailPage',
    _id: 'service-hardware',
    slug: { _type: 'slug', current: 'hardware-software-firmware' },
    title: 'Hardware, Software & Firmware',
    isActive: true,
    hero: {
      badge: 'Full-Stack Development',
      title: 'Complete System Development',
      subtitle: 'End-to-end hardware and software integration'
    },
    overview: {
      title: 'Integrated Solutions',
      description: 'Custom hardware design, firmware development, and software integration for IoT and embedded systems.'
    },
    solutions: [
      { _key: '1', icon: 'Cpu', title: 'Embedded Systems', description: 'Custom hardware solutions', features: ['PCB design', 'Microcontroller programming', 'Sensor integration'], order: 1 },
      { _key: '2', icon: 'Code', title: 'Firmware Development', description: 'Reliable embedded software', features: ['Real-time OS', 'Device drivers', 'OTA updates'], order: 2 }
    ],
    cta: { title: 'Build Custom Systems', description: 'Hardware + Software integration', buttonText: 'Discuss Project', buttonLink: '/contact' }
  },

  {
    _type: 'serviceDetailPage',
    _id: 'service-educational',
    slug: { _type: 'slug', current: 'educational-programs' },
    title: 'Educational Programs',
    isActive: true,
    hero: {
      badge: 'Knowledge Transfer',
      title: 'Technology Education Programs',
      subtitle: 'Workshops and training for schools, colleges, and professionals'
    },
    overview: {
      title: 'Empowering Through Education',
      description: 'Hands-on workshops on drone technology, AI, programming, and emerging technologies.'
    },
    solutions: [
      { _key: '1', icon: 'GraduationCap', title: 'School Programs', description: 'STEM education for students', features: ['Drone workshops', 'Coding classes', 'Robotics training'], order: 1 },
      { _key: '2', icon: 'Briefcase', title: 'Corporate Training', description: 'Professional skill development', features: ['Technology bootcamps', 'Certification programs', 'Custom curricula'], order: 2 }
    ],
    cta: { title: 'Start Learning', description: 'Upskill your team or students', buttonText: 'Enroll Now', buttonLink: '/training' }
  },

  {
    _type: 'serviceDetailPage',
    _id: 'service-advanced-edu',
    slug: { _type: 'slug', current: 'advanced-educational-programs' },
    title: 'Advanced Educational Programs',
    isActive: true,
    hero: {
      badge: 'Professional Development',
      title: 'Advanced Technology Training',
      subtitle: 'Specialized programs for industry professionals'
    },
    overview: {
      title: 'Expert-Level Training',
      description: 'Advanced courses in AI, cloud computing, drone operations, and emerging technologies for professionals.'
    },
    solutions: [
      { _key: '1', icon: 'Award', title: 'Certification Programs', description: 'Industry-recognized certifications', features: ['DGCA pilot training', 'Cloud certifications', 'AI specialization'], order: 1 },
      { _key: '2', icon: 'Users', title: 'Corporate Workshops', description: 'Customized enterprise training', features: ['On-site training', 'Project-based learning', 'Mentorship programs'], order: 2 }
    ],
    cta: { title: 'Advance Your Skills', description: 'Professional certification programs', buttonText: 'View Programs', buttonLink: '/training' }
  }
]

// ============ LEGAL PAGES ============

const termsPage = {
  _type: 'legalPage',
  _id: 'legal-terms',
  pageType: 'terms',
  isActive: true,
  lastUpdated: '2026-01-23',
  hero: {
    title: 'Terms of Service',
    subtitle: 'Please read these terms carefully before using our services'
  },
  introduction: 'Welcome to Karvensen. By accessing our website and services, you agree to these Terms of Service.',
  sections: [
    {
      _key: 's1',
      title: '1. Acceptance of Terms',
      content: [{ _type: 'block', _key: 'b1', children: [{ _type: 'span', text: 'By using this website, you accept these terms in full.' }] }],
      order: 1
    },
    {
      _key: 's2',
      title: '2. Services',
      content: [{ _type: 'block', _key: 'b2', children: [{ _type: 'span', text: 'Karvensen provides AI development, drone technology, cloud services, and training programs. We reserve the right to modify services at any time.' }] }],
      order: 2
    },
    {
      _key: 's3',
      title: '3. User Responsibilities',
      content: [{ _type: 'block', _key: 'b3', children: [{ _type: 'span', text: 'You are responsible for maintaining account confidentiality and all activities under your account.' }] }],
      order: 3
    }
  ],
  contactInfo: {
    email: 'legal@karvensen.com',
    phone: '+91 123 456 7890',
    address: '123 Innovation Drive, Tech Park, Bangalore, Karnataka 560001'
  }
}

const privacyPage = {
  _type: 'legalPage',
  _id: 'legal-privacy',
  pageType: 'privacy',
  isActive: true,
  lastUpdated: '2026-01-23',
  hero: {
    title: 'Privacy Policy',
    subtitle: 'How we collect, use, and protect your information'
  },
  introduction: 'At Karvensen, we are committed to protecting your privacy. This policy explains our data practices.',
  sections: [
    {
      _key: 's1',
      title: '1. Information We Collect',
      content: [{ _type: 'block', _key: 'b1', children: [{ _type: 'span', text: 'We collect information you provide directly, such as name, email, phone, and company details when you contact us or use our services.' }] }],
      order: 1
    },
    {
      _key: 's2',
      title: '2. How We Use Your Information',
      content: [{ _type: 'block', _key: 'b2', children: [{ _type: 'span', text: 'We use collected information to provide services, communicate with you, process requests, and send marketing communications with your consent.' }] }],
      order: 2
    },
    {
      _key: 's3',
      title: '3. Data Security',
      content: [{ _type: 'block', _key: 'b3', children: [{ _type: 'span', text: 'We implement technical and organizational measures to protect your personal information against unauthorized access or disclosure.' }] }],
      order: 3
    }
  ],
  contactInfo: {
    email: 'privacy@karvensen.com',
    phone: '+91 123 456 7890',
    address: '123 Innovation Drive, Tech Park, Bangalore, Karnataka 560001'
  }
}

// ============ SEED FUNCTION ============

async function seedAll() {
  console.log('🌱 Comprehensive Seeding Started...\n')
  
  try {
    // Navbar
    console.log('📍 Navbar Settings...')
    await client.createOrReplace(navbarData)
    console.log('✅ Done\n')

    // All Service Pages
    console.log(`📄 Creating ${servicePages.length} Service Pages...`)
    for (const page of servicePages) {
      console.log(`   → ${page.title}`)
      await client.createOrReplace(page)
    }
    console.log('✅ All service pages created\n')

    // Legal Pages
    console.log('⚖️  Terms & Privacy...')
    await client.createOrReplace(termsPage)
    await client.createOrReplace(privacyPage)
    console.log('✅ Done\n')

    console.log('✨ Complete! All content seeded successfully!')
    console.log(`\n📊 Summary:`)
    console.log(`   - Navbar Settings: 1`)
    console.log(`   - Service Pages: ${servicePages.length}`)
    console.log(`   - Legal Pages: 2`)
    console.log(`\n🎉 Visit http://localhost:3000/studio to see everything!`)

  } catch (error) {
    console.error('❌ Error:', error.message)
    process.exit(1)
  }
}

seedAll()
