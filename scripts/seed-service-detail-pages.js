// Seed Service Detail Pages with Frontend Content
// This script populates Sanity with all service pages, properly categorized

import 'dotenv/config'
import { createClient } from '@sanity/client'
import { getCliClient } from 'sanity/cli'

// Get the client from CLI context (will use the authenticated user's token)
const client = getCliClient()

// Define all services with complete content
const services = [
  // ==================== DRONE SERVICES ====================
  {
    _id: 'service-drone-survey-mapping',
    _type: 'serviceDetailPage',
    title: 'Drone Survey and Mapping',
    slug: { _type: 'slug', current: 'drone-survey-and-mapping' },
    category: 'drone',
    icon: 'Map',
    order: 1,
    isActive: true,
    hero: {
      badge: 'Aerial Innovations',
      title: 'Drone Survey and Mapping',
      subtitle: 'Unlock the power of cutting-edge technology with precision drone surveying. We combine efficiency and innovation to meet diverse client needs with centimeter-level accuracy.',
    },
    overview: {
      title: 'Comprehensive Aerial Survey Solutions',
      description: 'Our drone survey and mapping services revolutionize traditional surveying methods. We provide high-precision aerial data collection, processing, and analysis for various industries including construction, agriculture, mining, and urban planning.',
    },
    solutions: [
      {
        _key: 'base-map',
        icon: 'Map',
        title: 'Base Map Creation',
        description: 'Detailed base maps incorporating transport networks, administrative boundaries, settlements, land cover, and water bodies.',
        features: [
          'High-resolution aerial imagery',
          'Accurate georeferencing',
          'Multi-layer data integration',
          'Custom map styling',
          'Regular updates and maintenance',
        ],
      },
      {
        _key: 'asset-mapping',
        icon: 'Camera',
        title: 'Asset Mapping and Analysis',
        description: 'Comprehensive asset inventory and condition assessment using advanced drone technology.',
        features: [
          'Detailed asset cataloging',
          'Condition assessment reports',
          '3D modeling and visualization',
          'Change detection analysis',
          'Automated reporting systems',
        ],
      },
      {
        _key: 'land-surveying',
        icon: 'Ruler',
        title: 'Land Surveying / Cartography',
        description: 'Professional land surveying services with centimeter-level accuracy for topographic maps and boundary surveys.',
        features: [
          'Topographic surveys',
          'Boundary demarcation',
          'Contour mapping',
          'Volume calculations',
          'CAD-ready deliverables',
        ],
      },
      {
        _key: 'stockpile',
        icon: 'Package',
        title: 'Stockpile Volumetric Measurements',
        description: 'Accurate volume calculations for stockpiles, excavations, and earthworks with inventory tracking.',
        features: [
          'Precise volume calculations',
          'Regular inventory tracking',
          'Cut and fill analysis',
          'Historical comparisons',
          'Automated reporting',
        ],
      },
    ],
    keyFeatures: {
      title: 'Why Choose Our Drone Surveying',
      subtitle: 'Industry-leading accuracy and efficiency',
      features: [
        {
          _key: '-feature',
          icon: '',
          title: '',
          description: '',
        },
        {
          _key: '-feature',
          icon: '',
          title: '',
          description: '',
        },
        {
          _key: '-feature',
          icon: '',
          title: '',
          description: '',
        },
      ],
    },
    cta: {
      title: 'Ready to Transform Your Surveying?',
      description: 'Get precise aerial data for your next project with our expert drone surveying services.',
      buttonText: 'Request a Quote',
      buttonLink: '/contact?service=drone-survey-mapping',
    },
  },

  {
    _id: 'service-precision-spraying',
    _type: 'serviceDetailPage',
    title: 'Precision Spraying',
    slug: { _type: 'slug', current: 'precision-spraying' },
    category: 'drone',
    icon: 'Sprout',
    order: 3,
    isActive: true,
    hero: {
      badge: 'Smart Agriculture',
      title: 'Precision Spraying',
      subtitle: 'Advanced drone spraying technology for efficient crop protection and fertilization. Save up to 80% water and 30% chemicals while improving crop yields.',
    },
    overview: {
      title: 'Revolutionary Agricultural Spraying',
      description: 'Our precision drone spraying services deliver targeted application of pesticides, fertilizers, and nutrients. Using advanced GPS and sensor technology, we ensure optimal coverage with minimal waste and environmental impact.',
    },
    solutions: [
      {
        _key: 'crop-spraying',
        icon: 'Sprout',
        title: 'Crop Protection Spraying',
        description: 'Precision pesticide and herbicide application for effective crop protection with minimal environmental impact.',
        features: [
          'Variable rate application',
          'Precise droplet size control',
          'Reduced chemical waste',
          'Minimal crop damage',
          'Weather-adaptive spraying',
        ],
      },
      {
        _key: 'fertilizer',
        icon: 'Droplet',
        title: 'Fertilizer Application',
        description: 'Efficient nutrient delivery with precision fertilizer spraying to optimize plant health and yield.',
        features: [
          'Customized nutrient mixes',
          'Targeted application zones',
          'Reduced fertilizer usage',
          'Improved nutrient uptake',
          'Soil health monitoring',
        ],
      },
      {
        _key: 'spot-treatment',
        icon: 'Target',
        title: 'Spot Treatment',
        description: 'Targeted treatment of specific problem areas with surgical precision.',
        features: [
          'GPS-guided precision',
          'Minimal chemical use',
          'Quick response capability',
          'Cost-effective treatment',
          'Reduced environmental impact',
        ],
      },
    ],
    keyFeatures: {
      title: 'Benefits of Drone Spraying',
      features: [
        {
          _key: '-feature',
          icon: '',
          title: '',
          description: '',
        },
        {
          _key: '-feature',
          icon: '',
          title: '',
          description: '',
        },
        {
          _key: '-feature',
          icon: '',
          title: '',
          description: '',
        },
      ],
    },
    cta: {
      title: 'Optimize Your Crop Protection',
      description: 'Switch to precision drone spraying and experience the benefits of modern agriculture.',
      buttonText: 'Get Started',
      buttonLink: '/contact?service=precision-spraying',
    },
  },

  {
    _id: 'service-drone-surveillance',
    _type: 'serviceDetailPage',
    title: 'Drone Surveillance & Videography',
    slug: { _type: 'slug', current: 'drone-surveillance-and-videography' },
    category: 'drone',
    icon: 'Video',
    order: 2,
    isActive: true,
    hero: {
      badge: 'Aerial Intelligence',
      title: 'Drone Surveillance & Videography',
      subtitle: 'Professional aerial surveillance, monitoring, and cinematography services for security, events, and media production.',
    },
    overview: {
      title: 'Advanced Aerial Surveillance Solutions',
      description: 'Our drone surveillance services provide real-time monitoring, security oversight, and professional videography. From event coverage to security monitoring, we deliver high-quality aerial intelligence.',
    },
    solutions: [
      {
        _key: 'security-surveillance',
        icon: 'Shield',
        title: 'Security Surveillance',
        description: 'Real-time monitoring for perimeter security, crowd management, and threat detection.',
        features: [
          'Live HD video streaming',
          'Thermal imaging capability',
          '24/7 monitoring options',
          'Automated alerts',
          'Secure data transmission',
        ],
      },
      {
        _key: 'event-coverage',
        icon: 'Video',
        title: 'Event Coverage',
        description: 'Professional aerial videography and photography for events, festivals, and productions.',
        features: [
          '4K video recording',
          'Cinematic shots',
          'Live streaming',
          'Multi-angle coverage',
          'Post-production editing',
        ],
      },
      {
        _key: 'inspection',
        icon: 'Camera',
        title: 'Infrastructure Inspection',
        description: 'Visual inspection of buildings, towers, bridges, and industrial facilities.',
        features: [
          'Detailed visual reports',
          'Thermal analysis',
          'Structural assessment',
          'Safety compliance',
          'Historical documentation',
        ],
      },
    ],
    cta: {
      title: 'Elevate Your Surveillance Capabilities',
      description: 'Discover how our drone surveillance services can enhance your security and monitoring needs.',
      buttonText: 'Contact Us',
      buttonLink: '/contact?service=drone-surveillance',
    },
  },

  {
    _id: 'service-drone-delivery',
    _type: 'serviceDetailPage',
    title: 'Drone Delivery',
    slug: { _type: 'slug', current: 'drone-delivery' },
    category: 'drone',
    icon: 'Package',
    order: 4,
    isActive: true,
    hero: {
      badge: 'Future of Logistics',
      title: 'Drone Delivery Solutions',
      subtitle: 'Innovative last-mile delivery solutions for medical supplies, emergency response, and logistics operations.',
    },
    overview: {
      title: 'Fast, Efficient Aerial Delivery',
      description: 'Our drone delivery services revolutionize logistics with rapid, cost-effective aerial transport. Perfect for medical supplies, emergency situations, and remote area deliveries.',
    },
    solutions: [
      {
        _key: 'medical',
        icon: 'Package',
        title: 'Medical Supply Delivery',
        description: 'Critical medical supplies, vaccines, and blood products delivered quickly to remote areas.',
        features: [
          'Temperature-controlled payload',
          'Emergency response capability',
          'GPS tracking',
          'Fast turnaround time',
          'Regulatory compliance',
        ],
      },
      {
        _key: 'emergency',
        icon: 'Zap',
        title: 'Emergency Response',
        description: 'Rapid deployment for disaster relief and emergency situations.',
        features: [
          'Quick deployment',
          'All-weather capability',
          'Disaster relief support',
          'Search and rescue aid',
          'Communication equipment delivery',
        ],
      },
    ],
    cta: {
      title: 'Transform Your Delivery Operations',
      description: 'Explore how drone delivery can enhance your logistics and emergency response capabilities.',
      buttonText: 'Learn More',
      buttonLink: '/contact?service=drone-delivery',
    },
  },

  {
    _id: 'service-hardware-firmware',
    _type: 'serviceDetailPage',
    title: 'Hardware, Software & Firmware',
    slug: { _type: 'slug', current: 'hardware-software-firmware' },
    category: 'drone',
    icon: 'Microchip',
    order: 5,
    isActive: true,
    hero: {
      badge: 'Custom Development',
      title: 'Hardware, Software & Firmware',
      subtitle: 'Custom drone hardware design, software development, and firmware optimization for specialized applications.',
    },
    overview: {
      title: 'End-to-End Drone Solutions',
      description: 'We design and develop custom drone systems from the ground up. Our expertise spans hardware engineering, software development, and firmware programming for specialized drone applications.',
    },
    solutions: [
      {
        _key: 'hardware',
        icon: 'Microchip',
        title: 'Hardware Development',
        description: 'Custom drone frames, flight controllers, and sensor integration.',
        features: [
          'Custom frame design',
          'Flight controller integration',
          'Sensor payload customization',
          'Power system optimization',
          'Durability testing',
        ],
      },
      {
        _key: 'software',
        icon: 'Code',
        title: 'Software Development',
        description: 'Ground control software, mission planning, and data processing applications.',
        features: [
          'Mission planning software',
          'Real-time telemetry',
          'Data processing pipelines',
          'Custom integrations',
          'User-friendly interfaces',
        ],
      },
      {
        _key: 'firmware',
        icon: 'Cpu',
        title: 'Firmware Development',
        description: 'Custom firmware for specialized flight behaviors and autopilot systems.',
        features: [
          'Flight algorithm optimization',
          'Sensor fusion',
          'Autonomous navigation',
          'Safety protocols',
          'Performance tuning',
        ],
      },
    ],
    cta: {
      title: 'Need Custom Drone Solutions?',
      description: 'Let us build the perfect drone system for your specific requirements.',
      buttonText: 'Discuss Your Project',
      buttonLink: '/contact?service=hardware-firmware',
    },
  },

  {
    _id: 'service-drone-in-box',
    _type: 'serviceDetailPage',
    title: 'Drone-in-a-Box',
    slug: { _type: 'slug', current: 'drone-in-a-box' },
    category: 'drone',
    icon: 'Box',
    order: 6,
    isActive: true,
    hero: {
      badge: 'Automated Systems',
      title: 'Drone-in-a-Box Solutions',
      subtitle: 'Fully automated drone deployment systems for continuous monitoring, security, and surveillance operations.',
    },
    overview: {
      title: 'Autonomous Drone Operations',
      description: 'Drone-in-a-Box systems provide automated, on-demand aerial surveillance without human intervention. Perfect for 24/7 monitoring of critical infrastructure, perimeter security, and industrial sites.',
    },
    solutions: [
      {
        _key: 'automated',
        icon: 'Box',
        title: 'Automated Deployment',
        description: 'Self-contained systems that launch, fly missions, and return autonomously.',
        features: [
          'Automatic takeoff and landing',
          'Pre-programmed missions',
          'Weather monitoring',
          'Automatic charging',
          'Remote operation',
        ],
      },
      {
        _key: 'monitoring',
        icon: 'Shield',
        title: 'Continuous Monitoring',
        description: '24/7 surveillance capability with scheduled or on-demand flights.',
        features: [
          'Scheduled patrols',
          'Incident response',
          'Live video streaming',
          'Automated alerts',
          'Data archiving',
        ],
      },
    ],
    cta: {
      title: 'Automate Your Aerial Surveillance',
      description: 'Discover how Drone-in-a-Box can provide continuous monitoring for your facility.',
      buttonText: 'Schedule Demo',
      buttonLink: '/contact?service=drone-in-box',
    },
  },

  {
    _id: 'service-data-gis',
    _type: 'serviceDetailPage',
    title: 'Data, GIS & Digital Solutions',
    slug: { _type: 'slug', current: 'data-gis-digital-solutions' },
    category: 'drone',
    icon: 'BarChart3',
    order: 7,
    isActive: true,
    hero: {
      badge: 'Data Intelligence',
      title: 'Data, GIS & Digital Solutions',
      subtitle: 'Comprehensive data processing, GIS analysis, and digital twin solutions from drone imagery and aerial data.',
    },
    overview: {
      title: 'Transform Raw Data into Insights',
      description: 'We convert drone-captured data into actionable intelligence through advanced GIS analysis, 3D modeling, and digital twin creation. Our solutions help you make informed decisions based on accurate spatial data.',
    },
    solutions: [
      {
        _key: 'gis-analysis',
        icon: 'Map',
        title: 'GIS Analysis',
        description: 'Advanced spatial analysis and geographic information system services.',
        features: [
          'Spatial data analysis',
          'Map creation',
          'Layer management',
          'Terrain analysis',
          'Change detection',
        ],
      },
      {
        _key: 'digital-twin',
        icon: 'Cpu',
        title: 'Digital Twin Creation',
        description: '3D digital replicas of physical assets for monitoring and simulation.',
        features: [
          '3D modeling',
          'Real-time updates',
          'Virtual simulations',
          'Asset management',
          'Predictive analytics',
        ],
      },
      {
        _key: 'data-processing',
        icon: 'BarChart3',
        title: 'Data Processing',
        description: 'Professional processing of aerial imagery and sensor data.',
        features: [
          'Orthomosaic generation',
          'Point cloud creation',
          'Volume calculations',
          'Contour mapping',
          'Custom deliverables',
        ],
      },
    ],
    cta: {
      title: 'Unlock the Value in Your Aerial Data',
      description: 'Let us process and analyze your drone data to extract maximum value.',
      buttonText: 'Get Started',
      buttonLink: '/contact?service=data-gis',
    },
  },

  // ==================== SOFTWARE SERVICES ====================
  {
    _id: 'service-ai-software',
    _type: 'serviceDetailPage',
    title: 'AI Software Development',
    slug: { _type: 'slug', current: 'ai-software-development' },
    category: 'software',
    icon: 'Cpu',
    order: 1,
    isActive: true,
    hero: {
      badge: 'Artificial Intelligence',
      title: 'AI Software Development',
      subtitle: 'Custom AI and machine learning solutions tailored to your business needs. From predictive analytics to natural language processing, we build AI systems that drive real business value.',
    },
    overview: {
      title: 'Intelligent Solutions for Modern Challenges',
      description: 'Our AI software development services leverage cutting-edge machine learning algorithms and deep learning techniques to solve complex business problems. We create custom AI solutions that integrate seamlessly with your existing systems.',
    },
    solutions: [
      {
        _key: 'machine-learning',
        icon: 'Brain',
        title: 'Machine Learning Models',
        description: 'Custom ML models for prediction, classification, and pattern recognition.',
        features: [
          'Predictive analytics',
          'Classification systems',
          'Anomaly detection',
          'Recommendation engines',
          'Model optimization',
        ],
      },
      {
        _key: 'computer-vision',
        icon: 'Camera',
        title: 'Computer Vision',
        description: 'Image and video analysis for object detection, recognition, and tracking.',
        features: [
          'Object detection',
          'Image classification',
          'Facial recognition',
          'Video analytics',
          'Quality inspection',
        ],
      },
      {
        _key: 'nlp',
        icon: 'MessageSquare',
        title: 'Natural Language Processing',
        description: 'Text analysis, chatbots, and language understanding systems.',
        features: [
          'Chatbot development',
          'Sentiment analysis',
          'Text classification',
          'Language translation',
          'Named entity recognition',
        ],
      },
      {
        _key: 'deep-learning',
        icon: 'Cpu',
        title: 'Deep Learning',
        description: 'Advanced neural networks for complex problem solving.',
        features: [
          'Neural network design',
          'Transfer learning',
          'Model training',
          'Deployment optimization',
          'Continuous learning',
        ],
      },
    ],
    cta: {
      title: 'Ready to Leverage AI?',
      description: 'Transform your business with intelligent automation and data-driven insights.',
      buttonText: 'Discuss Your AI Project',
      buttonLink: '/contact?service=ai-software',
    },
  },

  {
    _id: 'service-lms',
    _type: 'serviceDetailPage',
    title: 'Learning Management Systems',
    slug: { _type: 'slug', current: 'learning-management-systems' },
    category: 'software',
    icon: 'BookOpen',
    order: 2,
    isActive: true,
    hero: {
      badge: 'EdTech Solutions',
      title: 'Learning Management Systems',
      subtitle: 'Modern LMS platforms for educational institutions and corporate training programs. Engage learners with interactive content, assessments, and progress tracking.',
    },
    overview: {
      title: 'Complete E-Learning Solutions',
      description: 'We develop comprehensive Learning Management Systems that make online education engaging and effective. Our platforms support live classes, recorded content, assessments, and detailed analytics.',
    },
    solutions: [
      {
        _key: 'lms-platform',
        icon: 'BookOpen',
        title: 'Custom LMS Platform',
        description: 'Fully-featured learning management system tailored to your needs.',
        features: [
          'Course management',
          'Student enrollment',
          'Progress tracking',
          'Certificate generation',
          'Mobile responsive',
        ],
      },
      {
        _key: 'live-classes',
        icon: 'Video',
        title: 'Live Class Integration',
        description: 'Real-time video conferencing and interactive online classrooms.',
        features: [
          'HD video streaming',
          'Screen sharing',
          'Interactive whiteboard',
          'Breakout rooms',
          'Recording capability',
        ],
      },
      {
        _key: 'assessments',
        icon: 'CheckCircle2',
        title: 'Assessment Tools',
        description: 'Comprehensive testing and evaluation systems.',
        features: [
          'Quiz builder',
          'Automated grading',
          'Question banks',
          'Proctoring options',
          'Performance analytics',
        ],
      },
      {
        _key: 'content',
        icon: 'FileText',
        title: 'Content Management',
        description: 'Easy-to-use tools for creating and managing educational content.',
        features: [
          'Video hosting',
          'Document management',
          'SCORM support',
          'Content versioning',
          'Multi-format support',
        ],
      },
    ],
    cta: {
      title: 'Transform Your Training Programs',
      description: 'Build an engaging learning experience with our custom LMS solutions.',
      buttonText: 'Schedule a Demo',
      buttonLink: '/contact?service=lms',
    },
  },

  // ==================== EDUCATION SERVICES ====================
  {
    _id: 'service-educational-programs',
    _type: 'serviceDetailPage',
    title: 'Educational Programs',
    slug: { _type: 'slug', current: 'educational-programs' },
    category: 'education',
    icon: 'GraduationCap',
    order: 1,
    isActive: true,
    hero: {
      badge: 'Skill Development',
      title: 'Educational Programs & Training',
      subtitle: 'Hands-on workshops and certification programs about drone technology, AI, and emerging technologies for schools, colleges, and professionals.',
    },
    overview: {
      title: 'Empowering Through Education',
      description: 'We offer comprehensive training programs designed to build practical skills in drone operations, AI/ML, and modern technology. Our courses combine theoretical knowledge with hands-on experience.',
    },
    solutions: [
      {
        _key: 'drone-training',
        icon: 'Plane',
        title: 'Drone Pilot Training',
        description: 'Complete drone pilot certification programs from beginner to advanced levels.',
        features: [
          'DGCA certification prep',
          'Hands-on flight training',
          'Safety protocols',
          'Maintenance training',
          'Commercial operations',
        ],
      },
      {
        _key: 'school-workshops',
        icon: 'GraduationCap',
        title: 'School & College Workshops',
        description: 'Interactive workshops introducing students to drone technology and AI.',
        features: [
          'Age-appropriate content',
          'Practical demonstrations',
          'STEM education',
          'Career guidance',
          'Competition preparation',
        ],
      },
      {
        _key: 'corporate-training',
        icon: 'Users',
        title: 'Corporate Training',
        description: 'Professional development programs for organizations.',
        features: [
          'Customized curriculum',
          'Industry-specific training',
          'Certification programs',
          'Ongoing support',
          'Flexible scheduling',
        ],
      },
      {
        _key: 'ai-ml-courses',
        icon: 'Cpu',
        title: 'AI/ML Training',
        description: 'Practical courses in Artificial Intelligence and Machine Learning.',
        features: [
          'Python programming',
          'ML algorithms',
          'Deep learning',
          'Real-world projects',
          'Industry mentorship',
        ],
      },
    ],
    cta: {
      title: 'Start Your Learning Journey',
      description: 'Enroll in our training programs and gain in-demand tech skills.',
      buttonText: 'View Courses',
      buttonLink: '/training',
    },
  },
]

async function seedServiceDetailPages() {
  console.log('🚀 Starting service detail pages seed...\n')

  try {
    // Step 1: Delete ALL existing service detail pages
    console.log('🗑️  Deleting existing service detail pages...')
    const existingServices = await client.fetch(
      `*[_type == "serviceDetailPage"]._id`
    )
    
    if (existingServices.length > 0) {
      for (const id of existingServices) {
        await client.delete(id)
      }
      console.log(`   ✓ Deleted ${existingServices.length} existing services\n`)
    } else {
      console.log('   No existing services to delete\n')
    }

    // Step 2: Delete ALL existing service items (old schema)
    console.log('🗑️  Deleting old service items...')
    const existingItems = await client.fetch(
      `*[_type == "serviceItem"]._id`
    )
    
    if (existingItems.length > 0) {
      for (const id of existingItems) {
        await client.delete(id)
      }
      console.log(`   ✓ Deleted ${existingItems.length} old service items\n`)
    }

    // Step 3: Create new service detail pages
    console.log('📝 Creating service detail pages...\n')
    
    for (const service of services) {
      await client.createOrReplace(service)
      console.log(`   ✓ ${service.title}`)
    }

    console.log('\n✅ Successfully created all service detail pages!')
    console.log(`\n📊 Summary:`)
    console.log(`   - Total Services: ${services.length}`)
    console.log(`   - Drone Services: ${services.filter(s => s.category === 'drone').length}`)
    console.log(`   - Software Services: ${services.filter(s => s.category === 'software').length}`)
    console.log(`   - Education Services: ${services.filter(s => s.category === 'education').length}`)
    
    console.log('\n🎯 Next Steps:')
    console.log('   1. Visit http://localhost:3000/services to see all services')
    console.log('   2. Click any service to view its detail page')
    console.log('   3. Edit services in Sanity Studio to customize content')
    console.log('   4. Run cleanup-old-service-pages.ps1 to remove old folders')

  } catch (error) {
    console.error('❌ Error seeding services:', error)
    process.exit(1)
  }
}

// Run the seed function
seedServiceDetailPages()
