/**
 * COMPLETE WEBSITE SEED - ALL SCHEMAS POPULATED
 * This seeds EVERY schema with actual website content
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

console.log('🚀 Starting COMPLETE website seed...\n')

// ============ SITE SETTINGS ============
const siteSettings = {
  _type: 'siteSettings',
  _id: 'siteSettings',
  siteName: 'Karvensen',
  siteUrl: 'https://karvensen.com',
  description: 'AI-Driven Drone & Software Solutions',
  keywords: ['AI', 'Drones', 'Agriculture', 'Software Development', 'Cloud Services', 'LMS', 'India']
}

// ============ CONTACT INFO ============
const contactInfo = {
  _type: 'contactInfo',
  _id: 'contactInfo',
  phone: '+91 123 456 7890',
  email: 'info@karvensen.com',
  address: '123 Innovation Drive, Tech Park, Hyderabad, Telangana 500001',
  supportEmail: 'support@karvensen.com',
  salesEmail: 'sales@karvensen.com'
}

// ============ NOTIFICATION ============
const notification = {
  _type: 'notification',
  _id: 'notification',
  message: '🎉 New: Advanced AI Training Programs Now Available - Enroll Today!',
  isActive: true,
  link: '/training',
  type: 'announcement'
}

// ============ HERO SECTION ============
const heroSection = {
  _type: 'heroSection',
  _id: 'heroSection',
  title: 'From Fertile Fields to Secure Borders.',
  subtitle: 'We deploy advanced AI and drone technology to revolutionize precision agriculture and fortify national defense.',
  buttonText: 'Explore',
  buttonLink: '/services',
  videoUrl: '/Drone_Cinematic_Video.mp4',
  isActive: true
}

// ============ GALLERY SECTION ============
const gallerySection = {
  _type: 'gallerySection',
  _id: 'gallerySection',
  title: 'Built in India.',
  subtitle: 'Powered by Innovation.',
  autoplayInterval: 3000,
  isActive: true
}

// ============ HOW WE WORK SECTION ============
const howWeWorkSection = {
  _type: 'howWeWorkSection',
  _id: 'howWeWorkSection',
  sectionTitle: 'How We Work',
  mainHeading: 'Intelligent Integration: From Insight to Impact',
  description: 'We follow a rigorous, data-driven methodology to ensure that every drone deployment is backed by powerful AI intelligence.',
  // image: Upload through Sanity Studio UI
  isActive: true
}

// ============ PROCESS STEPS ============
const processSteps = [
  {
    _type: 'processStep',
    _id: 'process-1',
    stepNumber: 1,
    title: 'Strategic Consultation',
    description: 'We partner with you to identify specific operational challenges.',
    icon: 'Users',
    order: 1
  },
  {
    _type: 'processStep',
    _id: 'process-2',
    stepNumber: 2,
    title: 'AI-Driven System Design',
    description: 'Developing custom solutions with proprietary AI models.',
    icon: 'Cpu',
    order: 2
  },
  {
    _type: 'processStep',
    _id: 'process-3',
    stepNumber: 3,
    title: 'Precision Deployment',
    description: 'Execution led by DGCA-certified pilots.',
    icon: 'Plane',
    order: 3
  },
  {
    _type: 'processStep',
    _id: 'process-4',
    stepNumber: 4,
    title: 'Advanced Analytics & Reporting',
    description: 'Processing raw data into actionable business results.',
    icon: 'BarChart',
    order: 4
  }
]

// ============ CTA SECTION ============
const ctaSection = {
  _type: 'ctaSection',
  _id: 'ctaSection',
  title: 'Ready to Innovate with Karvensen?',
  description: 'Let\'s discuss how our AI-driven solutions and drone technology can transform your operations. Join the future of intelligent automation.',
  buttonText: 'Schedule a Consultation',
  buttonLink: '/contact',
  backgroundVideo: '/drone%20video%202.mp4',
  isActive: true
}

// ============ STATISTICS ============
const stats = [
  {
    _type: 'stats',
    _id: 'stat-clients',
    icon: 'Users',
    value: '150+',
    label: 'Clients Worldwide',
    category: 'company',
    order: 1
  },
  {
    _type: 'stats',
    _id: 'stat-projects',
    icon: 'CheckCircle2',
    value: '500+',
    label: 'Projects Completed',
    category: 'company',
    order: 2
  },
  {
    _type: 'stats',
    _id: 'stat-awards',
    icon: 'Award',
    value: '25+',
    label: 'Industry Awards',
    category: 'company',
    order: 3
  },
  {
    _type: 'stats',
    _id: 'stat-satisfaction',
    icon: 'TrendingUp',
    value: '98%',
    label: 'Client Satisfaction',
    category: 'company',
    order: 4
  },
  {
    _type: 'stats',
    _id: 'stat-acres',
    icon: 'Map',
    value: '50,000+',
    label: 'Acres Scanned & Analyzed',
    category: 'drone',
    order: 5
  },
  {
    _type: 'stats',
    _id: 'stat-data',
    icon: 'Database',
    value: '5TB+',
    label: 'Aerial Data Processed',
    category: 'drone',
    order: 6
  },
  {
    _type: 'stats',
    _id: 'stat-accuracy',
    icon: 'Target',
    value: '98%',
    label: 'Accuracy in Defect Detection',
    category: 'ai',
    order: 7
  },
  {
    _type: 'stats',
    _id: 'stat-models',
    icon: 'Cpu',
    value: '500+',
    label: 'AI Models Deployed',
    category: 'ai',
    order: 8
  }
]

// ============ FEATURES ============
const features = [
  {
    _type: 'feature',
    _id: 'feature-innovation',
    icon: 'Target',
    title: 'Innovation First',
    description: 'Cutting-edge technology driving business transformation',
    category: 'company',
    order: 1
  },
  {
    _type: 'feature',
    _id: 'feature-india',
    icon: 'MapPin',
    title: 'Made in India',
    description: 'Proudly developing solutions for India and the world',
    category: 'company',
    order: 2
  },
  {
    _type: 'feature',
    _id: 'feature-client',
    icon: 'Users',
    title: 'Client Focused',
    description: 'Delivering results that exceed expectations',
    category: 'company',
    order: 3
  }
]

// ============ TESTIMONIALS SECTION ============
const testimonialsSection = {
  _type: 'testimonialsSection',
  _id: 'testimonialsSection',
  title: 'Trusted by Organizations Nationwide',
  subtitle: 'What our clients say about us',
  isActive: true
}

// ============ TESTIMONIALS ============
const testimonials = [
  {
    _type: 'testimonial',
    _id: 'testimonial-rajesh',
    name: 'Rajesh Kumar',
    role: 'Agricultural Enterprise Owner',
    company: 'Maharashtra',
    content: 'Karvensen\'s drone technology revolutionized our farm operations. Real-time crop monitoring and precise spraying increased our yield by 35%. The team\'s support has been outstanding.',
    rating: 5,
    featured: true,
    order: 1
  },
  {
    _type: 'testimonial',
    _id: 'testimonial-priya',
    name: 'Dr. Priya Sharma',
    role: 'Dean of Education Technology',
    company: 'University of Technology',
    content: 'Their LMS platform transformed our online education delivery. The AI-powered features and intuitive design made virtual learning engaging and effective for thousands of students.',
    rating: 5,
    featured: true,
    order: 2
  },
  {
    _type: 'testimonial',
    _id: 'testimonial-venkat',
    name: 'Prof. Venkat Rao',
    role: 'Engineering College Principal',
    company: 'Engineering College',
    content: 'The drone awareness workshop at our college was exceptional. Students gained hands-on experience and practical knowledge that will shape their careers in emerging technologies.',
    rating: 5,
    featured: true,
    order: 3
  },
  {
    _type: 'testimonial',
    _id: 'testimonial-amit',
    name: 'Amit Patel',
    role: 'CTO',
    company: 'Tech Solutions Pvt Ltd',
    content: 'The AI-powered analytics solution provided invaluable insights into our business operations. We\'ve seen a 40% improvement in decision-making speed and accuracy.',
    rating: 5,
    featured: false,
    order: 4
  },
  {
    _type: 'testimonial',
    _id: 'testimonial-sarah',
    name: 'Sarah Menon',
    role: 'Operations Manager',
    company: 'Infrastructure Corp',
    content: 'Their industrial drone inspection services saved us significant time and costs. The detailed 3D mapping and thermal imaging capabilities are game-changing.',
    rating: 5,
    featured: false,
    order: 5
  }
]

// ============ NAVBAR SETTINGS ============
const navbarSettings = {
  _type: 'navbarSettings',
  _id: 'navbar-main',
  isActive: true,
  logo: { text: 'Karvensen' /* image: Upload through Sanity Studio */ },
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

// ============ ABOUT PAGE - TAGLINE ============
const aboutTagline = {
  _type: 'aboutTagline',
  _id: 'aboutTagline',
  mainText: 'Trusted by Industry Leaders',
  description: 'Our clientele includes government agencies, defense forces, and leading enterprises that rely on our drone solutions and software services for innovation, efficiency, and mission-critical success.',
  isActive: true
}

// ============ ABOUT PAGE - HERO ============
const aboutHero = {
  _type: 'aboutHero',
  _id: 'aboutHero',
  mainTitle: 'Bringing AI & Technology Closer to You!',
  subtitle: 'Unlocking the Skies, Transforming Industries',
  buttonText: 'Discover our story',
  buttonLink: '#purpose',
  isActive: true
}

// ============ IMPACT STATISTICS ============
const impactStats = [
  {
    _type: 'impactStat',
    _id: 'impact-pilots',
    value: 53,
    label: 'DGCA Pilots Trained',
    suffix: '+',
    icon: 'Users',
    order: 1,
    isActive: true
  },
  {
    _type: 'impactStat',
    _id: 'impact-surveys',
    value: 1,
    label: 'UAV Surveys',
    suffix: '+',
    icon: 'Cpu',
    order: 2,
    isActive: true
  },
  {
    _type: 'impactStat',
    _id: 'impact-countries',
    value: 9,
    label: 'Countries',
    suffix: '+',
    icon: 'Target',
    order: 3,
    isActive: true
  },
  {
    _type: 'impactStat',
    _id: 'impact-partners',
    value: 60,
    label: 'Partners',
    suffix: '+',
    icon: 'Award',
    order: 4,
    isActive: true
  }
]

// ============ ABOUT PURPOSE (VISION/MISSION) ============
const aboutPurpose = {
  _type: 'aboutPurpose',
  _id: 'aboutPurpose',
  purposeTitle: 'PURPOSE',
  purposeDescription: 'Building an Efficient & Sustainable World With Drone Technology, AI-Powered Software Solutions, and Cloud Services.',
  visionTitle: 'VISION',
  visionDescription: 'We Aspire To Be The Most Trusted Global Technology & Services Company, delivering innovative drone solutions, enterprise software, and AI-driven platforms.',
  missionTitle: 'MISSION',
  missionDescription: 'Continuously Thriving To Up-Skill And Empower The World Through Drones, AI Software, LMS Platforms, ERP Systems, and Cloud Technologies.',
  isActive: true
}

// ============ CORE VALUES ============
const coreValues = [
  {
    _type: 'coreValue',
    _id: 'value-innovation',
    icon: 'Lightbulb',
    title: 'Innovation First',
    description: 'Pioneering AI and drone solutions that solve real-world challenges for farmers, businesses, and educational institutions.',
    order: 1,
    isActive: true
  },
  {
    _type: 'coreValue',
    _id: 'value-quality',
    icon: 'Shield',
    title: 'Quality & Reliability',
    description: 'Enterprise-grade solutions with rigorous testing. Make in India quality with global standards.',
    order: 2,
    isActive: true
  },
  {
    _type: 'coreValue',
    _id: 'value-community',
    icon: 'Users',
    title: 'Community Impact',
    description: 'Committed to empowering farmers and educating youth about emerging technologies through hands-on programs.',
    order: 3,
    isActive: true
  },
  {
    _type: 'coreValue',
    _id: 'value-excellence',
    icon: 'Award',
    title: 'Excellence',
    description: 'Delivering exceptional results in every project - from AI software to drone deployments and training workshops.',
    order: 4,
    isActive: true
  }
]

// ============ JOURNEY MILESTONES ============
const journeyMilestones = [
  {
    _type: 'journeyMilestone',
    _id: 'milestone-2023-founded',
    year: '2023',
    event: 'Karvensen founded by Karthika Venkatesan with a vision for AI-driven innovation',
    order: 1,
    isActive: true
  },
  {
    _type: 'journeyMilestone',
    _id: 'milestone-2023-drone',
    year: '2023',
    event: 'Launched agricultural drone technology program with Make in India initiative',
    order: 2,
    isActive: true
  },
  {
    _type: 'journeyMilestone',
    _id: 'milestone-2023-edu',
    year: '2023',
    event: 'Began educational workshops in schools and colleges across India',
    order: 3,
    isActive: true
  },
  {
    _type: 'journeyMilestone',
    _id: 'milestone-2024-lms',
    year: '2024',
    event: 'Expanded to LMS and ERP solutions for enterprise clients',
    order: 4,
    isActive: true
  },
  {
    _type: 'journeyMilestone',
    _id: 'milestone-2024-deploy',
    year: '2024',
    event: 'Deployed 500+ drones for agricultural monitoring',
    order: 5,
    isActive: true
  },
  {
    _type: 'journeyMilestone',
    _id: 'milestone-2025',
    year: '2025',
    event: 'Reached 100+ workshops conducted and 50+ enterprise clients',
    order: 6,
    isActive: true
  }
]

// ============ TEAM MEMBERS ============
const teamMembers = [
  {
    _type: 'teamMember',
    _id: 'team-karthika',
    name: 'Karthika Venkatesan',
    role: 'Founder & CEO',
    category: 'leadership',
    bio: 'Visionary leader driving AI and drone innovation',
    linkedinUrl: '#',
    order: 1,
    isActive: true
  },
  {
    _type: 'teamMember',
    _id: 'team-tech-lead',
    name: 'Rajesh Kumar',
    role: 'CTO',
    category: 'leadership',
    bio: 'Technology strategist with 15+ years in AI and drone systems',
    linkedinUrl: '#',
    order: 2,
    isActive: true
  },
  {
    _type: 'teamMember',
    _id: 'team-ops',
    name: 'Priya Sharma',
    role: 'Head of Operations',
    category: 'leadership',
    bio: 'Operational excellence and client success champion',
    linkedinUrl: '#',
    order: 3,
    isActive: true
  }
]

// ============ AWARDS ============
const awards = [
  {
    _type: 'award',
    _id: 'award-startup',
    title: 'Startup India Recognition',
    subtitle: 'Ministry of Commerce',
    badgeText: '2024',
    badgeColor: 'blue',
    order: 1,
    isActive: true
  },
  {
    _type: 'award',
    _id: 'award-innovation',
    title: 'Innovation Excellence',
    subtitle: 'Tech Innovation Awards',
    badgeText: '2024',
    badgeColor: 'purple',
    order: 2,
    isActive: true
  }
]

// ============ PARTNERS ============
const partners = [
  {
    _type: 'partner',
    _id: 'partner-dgca',
    name: 'DGCA',
    displayText: 'DGCA Certified',
    textColor: '#1e40af',
    order: 1,
    isActive: true
  },
  {
    _type: 'partner',
    _id: 'partner-aws',
    name: 'AWS',
    displayText: 'AWS Partner',
    textColor: '#FF9900',
    order: 2,
    isActive: true
  },
  {
    _type: 'partner',
    _id: 'partner-azure',
    name: 'Microsoft Azure',
    displayText: 'Azure Certified',
    textColor: '#0078D4',
    order: 3,
    isActive: true
  }
]

// ============ GROUP COMPANIES ============
const groupCompanies = [
  {
    _type: 'groupCompany',
    _id: 'group-drone-entry',
    name: 'Drone Entry',
    description: 'Specialized drone manufacturing and assembly services',
    websiteUrl: 'https://droneentry.com',
    order: 1,
    isActive: true
  },
  {
    _type: 'groupCompany',
    _id: 'group-pyi',
    name: 'PYI Technologies',
    description: 'Advanced technology solutions and R&D',
    websiteUrl: 'https://pyitech.com',
    order: 2,
    isActive: true
  }
]

// ============ INDUSTRIES WE SERVE ============
const industryCards = [
  {
    _type: 'industryCard',
    _id: 'industry-agriculture',
    title: 'Agriculture',
    order: 1,
    isActive: true
  },
  {
    _type: 'industryCard',
    _id: 'industry-education',
    title: 'Education',
    order: 2,
    isActive: true
  },
  {
    _type: 'industryCard',
    _id: 'industry-construction',
    title: 'Construction',
    order: 3,
    isActive: true
  },
  {
    _type: 'industryCard',
    _id: 'industry-defense',
    title: 'Defense & Security',
    order: 4,
    isActive: true
  },
  {
    _type: 'industryCard',
    _id: 'industry-mining',
    title: 'Mining',
    order: 5,
    isActive: true
  },
  {
    _type: 'industryCard',
    _id: 'industry-energy',
    title: 'Energy & Utilities',
    order: 6,
    isActive: true
  },
  {
    _type: 'industryCard',
    _id: 'industry-real-estate',
    title: 'Real Estate',
    order: 7,
    isActive: true
  },
  {
    _type: 'industryCard',
    _id: 'industry-manufacturing',
    title: 'Manufacturing',
    order: 8,
    isActive: true
  }
]

// ============ ABOUT PAGE GALLERY ============
const aboutGallery = {
  _type: 'aboutGallery',
  _id: 'aboutGallery',
  title: 'Our Journey in Pictures',
  autoplayInterval: 3000,
  isActive: true
}

// ============ TRAINING PROGRAMS (Detailed) ============
const trainingProgramsDetailed = [
  {
    _type: 'trainingProgram',
    _id: 'training-prog-farmers',
    title: 'Farmer Drone Awareness Program',
    slug: { _type: 'slug', current: 'farmer-drone-awareness' },
    icon: 'Tractor',
    description: 'Hands-on drone technology training designed specifically for farmers to improve agricultural productivity.',
    features: ['Crop Monitoring', 'Precision Spraying', 'Data Analysis', 'Practical Flight Training'],
    duration: '3 Days',
    format: 'On-site Workshop',
    certification: 'Completion Certificate',
    targetAudience: 'Farmers & Agricultural Professionals',
    order: 1,
    isActive: true
  },
  {
    _type: 'trainingProgram',
    _id: 'training-prog-schools',
    title: 'School Drone Technology Workshop',
    slug: { _type: 'slug', current: 'school-drone-workshop' },
    icon: 'GraduationCap',
    description: 'Interactive workshops introducing students to drone technology, AI, and robotics.',
    features: ['Drone Basics', 'Safety Protocols', 'Hands-on Flying', 'Career Opportunities'],
    duration: '1-2 Days',
    format: 'School Visit',
    certification: 'Participation Certificate',
    targetAudience: 'School Students (Grades 8-12)',
    order: 2,
    isActive: true
  },
  {
    _type: 'trainingProgram',
    _id: 'training-prog-professional',
    title: 'Professional Drone Certification',
    slug: { _type: 'slug', current: 'professional-drone-certification' },
    icon: 'Award',
    description: 'Comprehensive DGCA-approved drone pilot training for commercial operations.',
    features: ['DGCA Syllabus', 'Flight Training', 'Regulations', 'Commercial Operations'],
    duration: '15 Days',
    format: 'Intensive Training',
    certification: 'DGCA Remote Pilot Certificate',
    targetAudience: 'Aspiring Drone Pilots',
    order: 3,
    isActive: true
  }
]

// ============ CULTURE GALLERY IMAGES ============
const cultureImages = [
  {
    _type: 'cultureImage',
    _id: 'culture-teamwork',
    title: 'Global Summits',
    category: 'Teamwork',
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    order: 1,
    isActive: true
  },
  {
    _type: 'cultureImage',
    _id: 'culture-innovation',
    title: 'Prototyping Lab',
    category: 'Innovation',
    url: 'https://news.northeastern.edu/wp-content/uploads/2021/03/032221_MM_drone_001.jpg',
    order: 2,
    isActive: true
  },
  {
    _type: 'cultureImage',
    _id: 'culture-hackathon',
    title: 'Hackathons',
    category: 'Learning',
    url: 'https://msftstories.thesourcemediaassets.com/sites/45/2019/07/Teamshacking@Microsoft2019hackathon_-960x630.jpg',
    order: 3,
    isActive: true
  },
  {
    _type: 'cultureImage',
    _id: 'culture-office',
    title: 'Open Workspace',
    category: 'Office',
    url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop',
    order: 4,
    isActive: true
  }
]

// ============ TRAINING HERO ============
const trainingHero = {
  _type: 'trainingHero',
  _id: 'trainingHero',
  title: 'Empowering Through Education',
  subtitle: 'From farmers to students to professionals - we offer hands-on training in drone technology, AI, and emerging tech.',
  primaryButtonText: 'View Programs',
  primaryButtonLink: '#programs',
  secondaryButtonText: 'Contact Us',
  secondaryButtonLink: '/contact',
  isActive: true
}

// ============ TRAINING STATS ============
const trainingStats = [
  {
    _type: 'trainingStat',
    _id: 'training-stat-workshops',
    value: '100+',
    label: 'Workshops Conducted',
    icon: 'GraduationCap',
    order: 1,
    isActive: true
  },
  {
    _type: 'trainingStat',
    _id: 'training-stat-students',
    value: '5000+',
    label: 'Students Trained',
    icon: 'Users',
    order: 2,
    isActive: true
  },
  {
    _type: 'trainingStat',
    _id: 'training-stat-certified',
    value: '200+',
    label: 'DGCA Certified Pilots',
    icon: 'Award',
    order: 3,
    isActive: true
  }
]

// ============ UPCOMING TRAINING PROGRAMS ============
const upcomingPrograms = [
  {
    _type: 'upcomingProgram',
    _id: 'upcoming-farmer-workshop',
    title: 'Farmer Drone Workshop',
    description: 'Hands-on training for farmers on using drones for precision agriculture and crop monitoring',
    location: 'Warangal, Telangana',
    date: 'Feb 15-17, 2026',
    spots: '30 spots available',
    duration: '3 Days',
    category: 'farmer',
    fee: '₹5,000',
    order: 1,
    isActive: true
  },
  {
    _type: 'upcomingProgram',
    _id: 'upcoming-ai-bootcamp',
    title: 'AI/ML Bootcamp',
    description: 'Comprehensive bootcamp covering AI fundamentals, machine learning, and practical applications',
    location: 'Online + Hyderabad',
    date: 'Mar 1 - Apr 30, 2026',
    spots: '50 spots available',
    duration: '8 Weeks',
    category: 'professional',
    fee: '₹15,000',
    order: 2,
    isActive: true
  },
  {
    _type: 'upcomingProgram',
    _id: 'upcoming-school-festival',
    title: 'School Tech Festival',
    description: 'Interactive workshops and demonstrations of AI and drone technology for students',
    location: 'Multiple Schools, AP',
    date: 'Feb 20-28, 2026',
    spots: 'Open registration',
    duration: '1-2 Days per school',
    category: 'school',
    order: 3,
    isActive: true
  }
]

// ============ TRAINING FAQs ============
const trainingFaqs = [
  {
    _type: 'trainingFaq',
    _id: 'faq-1',
    question: 'Do I need prior experience with drones?',
    answer: 'No prior experience required! Our programs are designed for beginners and cover everything from basics to advanced operations.',
    order: 1,
    isActive: true
  },
  {
    _type: 'trainingFaq',
    _id: 'faq-2',
    question: 'Are certifications provided?',
    answer: 'Yes, we provide DGCA-recognized certifications for pilot training programs and course completion certificates for all other programs.',
    order: 2,
    isActive: true
  },
  {
    _type: 'trainingFaq',
    _id: 'faq-3',
    question: 'Can schools book bulk workshops?',
    answer: 'Absolutely! We offer customized workshop packages for educational institutions. Contact us for group bookings and special pricing.',
    order: 3,
    isActive: true
  }
]

// ============ CAREER HERO ============
const careerHero = {
  _type: 'careerHero',
  _id: 'careerHero',
  title: 'Build the Future with Karvensen',
  subtitle: 'Join our mission to revolutionize industries with AI and drone technology',
  buttonText: 'View Open Positions',
  buttonLink: '#openings',
  isActive: true
}

// ============ CORPORATE VALUES ============
const careerValues = [
  {
    _type: 'careerValue',
    _id: 'career-value-exposure',
    title: 'Global Exposure',
    description: 'Work on aviation projects that impact airspace regulations in the US, Europe, and India.',
    icon: 'Globe',
    order: 1,
    isActive: true
  },
  {
    _type: 'careerValue',
    _id: 'career-value-growth',
    title: 'Continuous Growth',
    description: 'We prioritize internal promotions. Our "Future Leaders" program prepares engineers for management.',
    icon: 'TrendingUp',
    order: 2,
    isActive: true
  },
  {
    _type: 'careerValue',
    _id: 'career-value-stability',
    title: 'Stability & Innovation',
    description: 'Backed by industry giants, we offer the stability of an enterprise with the agility of a lab.',
    icon: 'ShieldCheck',
    order: 3,
    isActive: true
  }
]

// ============ HIRING PROCESS STEPS ============
const hiringSteps = [
  {
    _type: 'hiringStep',
    _id: 'hiring-1',
    icon: 'FileText',
    title: 'Application',
    description: 'Reviewing your profile.',
    stepNumber: 1,
    order: 1,
    isActive: true
  },
  {
    _type: 'hiringStep',
    _id: 'hiring-2',
    icon: 'UserCheck',
    title: 'HR Screening',
    description: 'Aligning on goals & culture.',
    stepNumber: 2,
    order: 2,
    isActive: true
  },
  {
    _type: 'hiringStep',
    _id: 'hiring-3',
    icon: 'Terminal',
    title: 'Technical Round',
    description: 'Assessing core skills.',
    stepNumber: 3,
    order: 3,
    isActive: true
  },
  {
    _type: 'hiringStep',
    _id: 'hiring-4',
    icon: 'CheckCircle',
    title: 'Final Offer',
    description: 'Welcome to the team.',
    stepNumber: 4,
    order: 4,
    isActive: true
  }
]

// ============ EMPLOYEE TESTIMONIALS ============
const careerTestimonials = [
  {
    _type: 'careerTestimonial',
    _id: 'career-test-aisha',
    name: 'Aisha Verma',
    role: 'Senior AI Engineer',
    quote: 'The scale of data we work with at KarVenSen is unmatched. I\'m building models that actually fly.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop',
    order: 1,
    isActive: true
  },
  {
    _type: 'careerTestimonial',
    _id: 'career-test-rahul',
    name: 'Rahul Mehta',
    role: 'Product Designer',
    quote: 'Design here isn\'t an afterthought. We have a seat at the table from day one of product planning.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop',
    order: 2,
    isActive: true
  },
  {
    _type: 'careerTestimonial',
    _id: 'career-test-sarah',
    name: 'Sarah Jenkin',
    role: 'VP of Engineering',
    quote: 'We don\'t micromanage. We hire smart people and get out of their way. That\'s our secret sauce.',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop',
    order: 3,
    isActive: true
  }
]

// ============ CAREER BENEFITS ============
const careerBenefits = [
  {
    _type: 'careerBenefit',
    _id: 'benefit-sandbox',
    title: 'Cloud Sandbox',
    description: 'Uncapped AWS/Azure credits for personal R&D.',
    icon: 'Globe',
    category: 'Engineering Ecosystem',
    order: 1,
    isActive: true
  },
  {
    _type: 'careerBenefit',
    _id: 'benefit-ai-tools',
    title: 'AI Tool Stack',
    description: 'Enterprise access to Copilot, ChatGPT-4, and Midjourney.',
    icon: 'Sparkles',
    category: 'Engineering Ecosystem',
    order: 2,
    isActive: true
  },
  {
    _type: 'careerBenefit',
    _id: 'benefit-hardware',
    title: 'Top-Tier Hardware',
    description: 'M3 Pro MacBooks or Linux Workstations with GPU support.',
    icon: 'Monitor',
    category: 'Engineering Ecosystem',
    order: 3,
    isActive: true
  },
  {
    _type: 'careerBenefit',
    _id: 'benefit-equity',
    title: 'Aggressive Equity',
    description: 'High-upside ESOPs. Own a piece of the platform.',
    icon: 'TrendingUp',
    category: 'Compensation & IP',
    order: 4,
    isActive: true
  },
  {
    _type: 'careerBenefit',
    _id: 'benefit-remote',
    title: 'Remote-First',
    description: 'Work from our Hyderabad hub, US office, or home.',
    icon: 'MapPin',
    category: 'Global Lifestyle',
    order: 5,
    isActive: true
  },
  {
    _type: 'careerBenefit',
    _id: 'benefit-healthcare',
    title: 'Premium Healthcare',
    description: 'Tier-1 medical coverage for you and family.',
    icon: 'Heart',
    category: 'Global Lifestyle',
    order: 6,
    isActive: true
  }
]

// ============ JOB OPENINGS ============
const jobOpenings = [
  {
    _type: 'jobOpening',
    _id: 'job-ai-engineer',
    title: 'Senior AI Engineer',
    department: 'Engineering',
    location: 'Hyderabad / Remote',
    type: 'Full-time',
    experienceLevel: 'Senior',
    description: 'Build cutting-edge AI models for drone intelligence and agricultural analytics.',
    requirements: ['5+ years Python/ML experience', 'TensorFlow/PyTorch expertise', 'Computer Vision knowledge'],
    responsibilities: ['Design ML pipelines', 'Deploy models to production', 'Collaborate with drone team'],
    order: 1,
    isActive: true
  },
  {
    _type: 'jobOpening',
    _id: 'job-full-stack',
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Hyderabad',
    type: 'Full-time',
    experienceLevel: 'Mid-level',
    description: 'Develop modern web applications using React, Node.js, and cloud services.',
    requirements: ['3+ years full stack development', 'React & Node.js expert', 'Cloud platform experience'],
    responsibilities: ['Build scalable web apps', 'API development', 'Database design'],
    order: 2,
    isActive: true
  }
]

// ============ CONTACT HERO ============
const contactHero = {
  _type: 'contactHero',
  _id: 'contactHero',
  title: 'Get in Touch',
  subtitle: 'Ready to transform your operations with AI and drone technology? Let\'s talk.',
  isActive: true
}

// ============ OFFICE LOCATIONS ============
const officeLocations = [
  {
    _type: 'officeLocation',
    _id: 'office-hyderabad',
    title: 'Headquarters',
    address: '123 Innovation Drive, Tech Park',
    city: 'Hyderabad',
    state: 'Telangana',
    country: 'India',
    postalCode: '500001',
    phone: '+91 123 456 7890',
    email: 'info@karvensen.com',
    mapLink: 'https://maps.google.com',
    isPrimary: true,
    order: 1,
    isActive: true
  }
]

// ============ SOCIAL MEDIA SECTION ============
const socialMediaSection = {
  _type: 'socialMediaSection',
  _id: 'socialMediaSection',
  title: 'Connect With Us',
  platforms: [
    { _key: 'linkedin', name: 'LinkedIn', url: '#', icon: 'Linkedin' },
    { _key: 'twitter', name: 'Twitter', url: '#', icon: 'Twitter' },
    { _key: 'facebook', name: 'Facebook', url: '#', icon: 'Facebook' },
    { _key: 'instagram', name: 'Instagram', url: '#', icon: 'Instagram' },
    { _key: 'youtube', name: 'YouTube', url: '#', icon: 'Youtube' }
  ],
  isActive: true
}

// ============ SERVICE DETAIL PAGES ============
const serviceDetailPages = [
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
const legalPages = [
  {
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
      address: '123 Innovation Drive, Tech Park, Hyderabad'
    }
  },
  {
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
      address: '123 Innovation Drive, Tech Park, Hyderabad'
    }
  }
]

// ============ FOOTER SETTINGS ============
const footerSettings = {
  _type: 'footerSettings',
  _id: 'footerSettings',
  companyName: 'KarVenSen',
  tagline: 'AI-Driven Drone & Software Solutions',
  phone: '+91 123 456 7890',
  email: 'info@karvensen.com',
  socialMedia: {
    twitter: 'https://twitter.com/karvensen',
    linkedin: 'https://linkedin.com/company/karvensen',
    youtube: 'https://youtube.com/@karvensen',
    facebook: 'https://facebook.com/karvensen',
    instagram: 'https://instagram.com/karvensen'
  },
  copyrightText: 'KarVenSen. All rights reserved.'
}

// ============ SERVICES (Main Service Cards) ============
const services = [
  {
    _type: 'service',
    _id: 'service-ai-ml',
    title: 'AI & Machine Learning',
    slug: { _type: 'slug', current: 'ai-machine-learning' },
    icon: 'Cpu',
    excerpt: 'Custom AI solutions, ML models, and intelligent automation for your business',
    category: 'ai',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
    order: 1
  },
  {
    _type: 'service',
    _id: 'service-drone-tech',
    title: 'Drone Technology',
    slug: { _type: 'slug', current: 'drone-technology' },
    icon: 'Plane',
    excerpt: 'Professional drone services for surveying, agriculture, surveillance, and delivery',
    category: 'drone',
    features: ['Aerial Surveying', 'Precision Agriculture', 'Inspection Services', 'Autonomous Flight'],
    order: 2
  },
  {
    _type: 'service',
    _id: 'service-cloud-infra',
    title: 'Cloud Infrastructure',
    slug: { _type: 'slug', current: 'cloud-infrastructure' },
    icon: 'Cloud',
    excerpt: 'Scalable cloud solutions with AWS, Azure, and Google Cloud Platform',
    category: 'cloud',
    features: ['Cloud Migration', 'DevOps', 'Infrastructure as Code', 'Auto-scaling'],
    order: 3
  },
  {
    _type: 'service',
    _id: 'service-lms-edtech',
    title: 'LMS & EdTech',
    slug: { _type: 'slug', current: 'lms-edtech' },
    icon: 'BookOpen',
    excerpt: 'Modern learning management systems and educational technology platforms',
    category: 'education',
    features: ['Course Management', 'Student Analytics', 'Video Integration', 'Mobile Learning'],
    order: 4
  }
]

// ============ SERVICE ITEMS (for Services Page Grid) ============
const serviceItems = [
  {
    _type: 'serviceItem',
    _id: 'si-survey',
    title: 'Survey & Mapping',
    slug: { _type: 'slug', current: 'survey-mapping' },
    category: 'drone',
    icon: 'Map',
    description: 'High-precision aerial surveys with centimeter-level accuracy for construction, agriculture, and land management.',
    detailsLink: '/services/drone-survey-and-mapping',
    order: 1,
    isActive: true
  },
  {
    _type: 'serviceItem',
    _id: 'si-precision-spray',
    title: 'Precision Spraying',
    slug: { _type: 'slug', current: 'precision-spraying' },
    category: 'drone',
    icon: 'Droplet',
    description: 'Automated drone spraying for efficient crop protection and fertilization.',
    detailsLink: '/services/precision-spraying',
    order: 2,
    isActive: true
  },
  {
    _type: 'serviceItem',
    _id: 'si-ai-dev',
    title: 'AI Software Development',
    slug: { _type: 'slug', current: 'ai-software' },
    category: 'software',
    icon: 'Cpu',
    tagline: 'Intelligent Software Solutions',
    description: 'Custom AI and machine learning solutions for business automation and intelligence.',
    detailsLink: '/services/ai-software-development',
    order: 3,
    isActive: true
  },
  {
    _type: 'serviceItem',
    _id: 'si-cloud',
    title: 'Cloud Services',
    slug: { _type: 'slug', current: 'cloud-services' },
    category: 'software',
    icon: 'Cloud',
    tagline: 'Scalable Infrastructure',
    description: 'Enterprise cloud infrastructure with AWS, Azure, and GCP.',
    detailsLink: '/services/cloud-services',
    order: 4,
    isActive: true
  },
  {
    _type: 'serviceItem',
    _id: 'si-workshops',
    title: 'Educational Workshops',
    slug: { _type: 'slug', current: 'workshops' },
    category: 'education',
    icon: 'GraduationCap',
    description: 'Hands-on technology workshops for schools, colleges, and professionals.',
    detailsLink: '/services/educational-programs',
    order: 5,
    isActive: true
  }
]

// ============ BLOG AUTHORS ============
const authors = [
  {
    _type: 'author',
    _id: 'author-karthika',
    name: 'Karthika Venkatesan',
    slug: { _type: 'slug', current: 'karthika-venkatesan' },
    role: 'Founder & CEO',
    bio: [{ _type: 'block', _key: 'bio1', children: [{ _type: 'span', text: 'Founder and visionary leader driving innovation in AI and drone technology.' }] }]
  },
  {
    _type: 'author',
    _id: 'author-tech-team',
    name: 'Karvensen Tech Team',
    slug: { _type: 'slug', current: 'karvensen-tech-team' },
    role: 'Engineering Team',
    bio: [{ _type: 'block', _key: 'bio2', children: [{ _type: 'span', text: 'Our team of engineers and technologists sharing insights on AI, drones, and cloud computing.' }] }]
  }
]

// ============ BLOG CATEGORIES ============
const categories = [
  {
    _type: 'category',
    _id: 'cat-ai',
    title: 'Artificial Intelligence',
    slug: { _type: 'slug', current: 'artificial-intelligence' },
    description: 'AI, machine learning, and intelligent automation'
  },
  {
    _type: 'category',
    _id: 'cat-drone',
    title: 'Drone Technology',
    slug: { _type: 'slug', current: 'drone-technology' },
    description: 'UAV technology, aerial surveying, and agricultural drones'
  },
  {
    _type: 'category',
    _id: 'cat-cloud',
    title: 'Cloud Computing',
    slug: { _type: 'slug', current: 'cloud-computing' },
    description: 'Cloud infrastructure, DevOps, and scalable architectures'
  },
  {
    _type: 'category',
    _id: 'cat-edtech',
    title: 'LMS & EdTech',
    slug: { _type: 'slug', current: 'lms-edtech' },
    description: 'Educational technology and learning management systems'
  }
]

// ============ BLOG POSTS ============
const blogPosts = [
  {
    _type: 'blog',
    _id: 'blog-ai-agriculture',
    title: 'How AI is Transforming Agriculture in India',
    slug: { _type: 'slug', current: 'ai-transforming-agriculture-india' },
    excerpt: 'Discover how artificial intelligence and drone technology are revolutionizing farming practices across India, increasing yields and reducing costs.',
    category: 'Artificial Intelligence',
    branch: 'Computer Vision',
    author: { _type: 'reference', _ref: 'author-karthika' },
    publishedAt: '2024-01-15T10:00:00Z',
    readTime: '8 min read',
    featured: true,
    tags: ['AI', 'Agriculture', 'Drones', 'India'],
    body: [
      {
        _type: 'block',
        _key: 'intro',
        children: [{ _type: 'span', text: 'Artificial Intelligence is revolutionizing agriculture in India. With drone technology and ML models, farmers can now monitor crop health, optimize irrigation, and predict yields with unprecedented accuracy...' }]
      }
    ]
  },
  {
    _type: 'blog',
    _id: 'blog-drone-survey',
    title: 'The Future of Surveying: Drones vs Traditional Methods',
    slug: { _type: 'slug', current: 'future-surveying-drones-vs-traditional' },
    excerpt: 'Compare modern drone surveying with traditional methods and understand why aerial mapping is becoming the industry standard.',
    category: 'Drone Technology',
    author: { _type: 'reference', _ref: 'author-tech-team' },
    publishedAt: '2024-02-10T10:00:00Z',
    readTime: '6 min read',
    featured: true,
    tags: ['Drones', 'Surveying', 'Mapping', 'Technology'],
    body: [
      {
        _type: 'block',
        _key: 'intro2',
        children: [{ _type: 'span', text: 'Traditional land surveying methods are time-consuming and expensive. Drone technology offers centimeter-level accuracy in a fraction of the time...' }]
      }
    ]
  },
  {
    _type: 'blog',
    _id: 'blog-cloud-migration',
    title: 'Cloud Migration Strategies for Indian Enterprises',
    slug: { _type: 'slug', current: 'cloud-migration-strategies-indian-enterprises' },
    excerpt: 'A comprehensive guide to migrating your enterprise infrastructure to the cloud with minimal disruption and maximum efficiency.',
    category: 'Cloud Computing',
    author: { _type: 'reference', _ref: 'author-tech-team' },
    publishedAt: '2024-03-05T10:00:00Z',
    readTime: '10 min read',
    featured: false,
    tags: ['Cloud', 'AWS', 'Azure', 'Migration'],
    body: [
      {
        _type: 'block',
        _key: 'intro3',
        children: [{ _type: 'span', text: 'Migrating to the cloud can seem daunting, but with the right strategy, it becomes a smooth transition. This guide covers assessment, planning, execution, and optimization...' }]
      }
    ]
  }
]

// ============ TRAINING PROGRAMS ============
const trainingPrograms = [
  {
    _type: 'training',
    _id: 'training-dgca',
    title: 'DGCA Drone Pilot Certification',
    slug: { _type: 'slug', current: 'dgca-drone-pilot-certification' },
    type: 'certification',
    targetAudience: 'professionals',
    duration: '15 Days',
    level: 'Beginner to Advanced',
    excerpt: 'Complete DGCA-approved pilot training program for drone operations',
    isActive: true,
    order: 1
  },
  {
    _type: 'training',
    _id: 'training-school-workshop',
    title: 'School Drone Awareness Workshop',
    slug: { _type: 'slug', current: 'school-drone-workshop' },
    type: 'workshop',
    targetAudience: 'schools',
    duration: '1-2 Days',
    level: 'Beginner',
    excerpt: 'Hands-on drone technology introduction for students',
    isActive: true,
    order: 2
  },
  {
    _type: 'training',
    _id: 'training-farmer',
    title: 'Farmer Drone Training Program',
    slug: { _type: 'slug', current: 'farmer-drone-training' },
    type: 'hands-on',
    targetAudience: 'farmers',
    duration: '3 Days',
    level: 'Beginner',
    excerpt: 'Practical drone training for agricultural applications',
    isActive: true,
    order: 3
  }
]

// ============ TRAINING COURSES (Full Detail) ============
const trainingCourses = [
  {
    _type: 'trainingCourse',
    _id: 'course-small-class',
    title: 'Course A | Small Class Drone Pilot Training',
    slug: { _type: 'slug', current: 'small-class-drone-pilot' },
    subtitle: 'Introduction to Drone Flying',
    description: 'Comprehensive small class drone pilot training covering basics to advanced flight operations.',
    duration: '8 Days',
    detailsLink: '/training/courses/small-class',
    order: 1,
    isActive: true
  },
  {
    _type: 'trainingCourse',
    _id: 'course-medium-class',
    title: 'Course B | Medium Class Drone Pilot Training',
    slug: { _type: 'slug', current: 'medium-class-drone-pilot' },
    subtitle: 'Advanced Drone Operations',
    description: 'Professional medium class drone operations training for commercial pilots.',
    duration: '12 Days',
    detailsLink: '/training/courses/medium-class',
    order: 2,
    isActive: true
  }
]

// ============ PROJECTS & CASE STUDIES ============
const projects = [
  {
    _type: 'project',
    _id: 'project-agriculture',
    title: 'Smart Agriculture Implementation - Maharashtra',
    slug: { _type: 'slug', current: 'smart-agriculture-maharashtra' },
    client: 'Agricultural Cooperative',
    industry: 'agriculture',
    excerpt: 'Deployed 50+ drones for precision agriculture across 10,000 acres',
    featured: true,
    completionDate: '2024-06-01',
    order: 1
  },
  {
    _type: 'project',
    _id: 'project-university-lms',
    title: 'University LMS Platform',
    slug: { _type: 'slug', current: 'university-lms-platform' },
    client: 'University of Technology',
    industry: 'education',
    excerpt: 'Custom LMS platform serving 5,000+ students and 200+ faculty members',
    featured: true,
    completionDate: '2024-08-15',
    order: 2
  },
  {
    _type: 'project',
    _id: 'project-infrastructure',
    title: 'Infrastructure Inspection - Smart City',
    slug: { _type: 'slug', current: 'infrastructure-inspection-smart-city' },
    client: 'Municipal Corporation',
    industry: 'government',
    excerpt: 'Autonomous drone inspection system for urban infrastructure monitoring',
    featured: false,
    completionDate: '2024-09-20',
    order: 3
  }
]

// ============ SETTINGS (General CMS Settings) ============
const settings = {
  _type: 'settings',
  _id: 'settings',
  siteTitle: 'Karvensen',
  siteDescription: 'AI-Driven Drone & Software Solutions',
  maintenanceMode: false
}

// ============ SEED FUNCTION ============
async function seedAll() {
  console.log('📦 Creating ALL documents...\n')
  
  try {
    // Site-wide settings
    console.log('⚙️  Site Settings...')
    await client.createOrReplace(siteSettings)
    await client.createOrReplace(contactInfo)
    await client.createOrReplace(notification)
    await client.createOrReplace(footerSettings)
    await client.createOrReplace(settings)
    console.log('✅ Done\n')

    // Homepage
    console.log('🏠 Homepage Sections...')
    await client.createOrReplace(heroSection)
    await client.createOrReplace(gallerySection)
    await client.createOrReplace(howWeWorkSection)
    await client.createOrReplace(testimonialsSection)
    await client.createOrReplace(ctaSection)
    console.log('✅ Done\n')

    // Process Steps
    console.log('📝 Process Steps...')
    for (const step of processSteps) {
      await client.createOrReplace(step)
    }
    console.log('✅ Done\n')

    // Stats & Features
    console.log('📊 Statistics & Features...')
    for (const stat of stats) {
      await client.createOrReplace(stat)
    }
    for (const feature of features) {
      await client.createOrReplace(feature)
    }
    console.log('✅ Done\n')

    // Testimonials
    console.log('💬 Testimonials...')
    for (const testimonial of testimonials) {
      await client.createOrReplace(testimonial)
    }
    console.log('✅ Done\n')

    // About Page
    console.log('ℹ️  About Page...')
    await client.createOrReplace(aboutTagline)
    await client.createOrReplace(aboutHero)
    await client.createOrReplace(aboutPurpose)
    await client.createOrReplace(aboutGallery)
    for (const stat of impactStats) {
      await client.createOrReplace(stat)
    }
    for (const value of coreValues) {
      await client.createOrReplace(value)
    }
    for (const milestone of journeyMilestones) {
      await client.createOrReplace(milestone)
    }
    for (const card of industryCards) {
      await client.createOrReplace(card)
    }
    for (const member of teamMembers) {
      await client.createOrReplace(member)
    }
    for (const award of awards) {
      await client.createOrReplace(award)
    }
    for (const partner of partners) {
      await client.createOrReplace(partner)
    }
    for (const company of groupCompanies) {
      await client.createOrReplace(company)
    }
    console.log('✅ Done\n')

    // Training Page
    console.log('🎓 Training Page...')
    await client.createOrReplace(trainingHero)
    for (const stat of trainingStats) {
      await client.createOrReplace(stat)
    }
    for (const program of upcomingPrograms) {
      await client.createOrReplace(program)
    }
    for (const faq of trainingFaqs) {
      await client.createOrReplace(faq)
    }
    for (const program of trainingProgramsDetailed) {
      await client.createOrReplace(program)
    }
    console.log('✅ Done\n')

    // Careers Page
    console.log('💼 Careers Page...')
    await client.createOrReplace(careerHero)
    for (const value of careerValues) {
      await client.createOrReplace(value)
    }
    for (const step of hiringSteps) {
      await client.createOrReplace(step)
    }
    for (const testimonial of careerTestimonials) {
      await client.createOrReplace(testimonial)
    }
    for (const benefit of careerBenefits) {
      await client.createOrReplace(benefit)
    }
    for (const job of jobOpenings) {
      await client.createOrReplace(job)
    }
    for (const image of cultureImages) {
      await client.createOrReplace(image)
    }
    console.log('✅ Done\n')

    // Contact Page
    console.log('📞 Contact Page...')
    await client.createOrReplace(contactHero)
    for (const location of officeLocations) {
      await client.createOrReplace(location)
    }
    await client.createOrReplace(socialMediaSection)
    console.log('✅ Done\n')

    // Navbar
    console.log('🧭 Navigation...')
    await client.createOrReplace(navbarSettings)
    console.log('✅ Done\n')

    // Service Pages
    console.log(`📄 Service Pages (${serviceDetailPages.length})...`)
    for (const page of serviceDetailPages) {
      console.log(`   → ${page.title}`)
      await client.createOrReplace(page)
    }
    console.log('✅ Done\n')

    // Legal Pages
    console.log('⚖️  Legal Pages...')
    for (const page of legalPages) {
      await client.createOrReplace(page)
    }
    console.log('✅ Done\n')

    // Main Services
    console.log('🔧 Main Services...')
    for (const service of services) {
      await client.createOrReplace(service)
    }
    console.log('✅ Done\n')

    // Service Items
    console.log('📋 Service Items...')
    for (const item of serviceItems) {
      await client.createOrReplace(item)
    }
    console.log('✅ Done\n')

    // Blog Content
    console.log('✍️  Blog Content...')
    for (const author of authors) {
      await client.createOrReplace(author)
    }
    for (const category of categories) {
      await client.createOrReplace(category)
    }
    for (const post of blogPosts) {
      await client.createOrReplace(post)
    }
    console.log('✅ Done\n')

    // Training Programs
    console.log('📚 Training Programs...')
    for (const program of trainingPrograms) {
      await client.createOrReplace(program)
    }
    for (const course of trainingCourses) {
      await client.createOrReplace(course)
    }
    console.log('✅ Done\n')

    // Projects
    console.log('🏗️  Projects...')
    for (const project of projects) {
      await client.createOrReplace(project)
    }
    console.log('✅ Done\n')

    console.log('✨🎉 COMPLETE! ALL CONTENT SEEDED! 🎉✨\n')
    console.log('📊 Summary:')
    console.log(`   - Site Settings: 5 items`)
    console.log(`   - Homepage: 5 sections + ${processSteps.length} steps`)
    console.log(`   - Statistics: ${stats.length}`)
    console.log(`   - Features: ${features.length}`)
    console.log(`   - Testimonials: ${testimonials.length}`)
    console.log(`   - About Page: ${impactStats.length + coreValues.length + journeyMilestones.length + industryCards.length + teamMembers.length + awards.length + partners.length + groupCompanies.length + 4} items`)
    console.log(`   - Training Page: ${trainingStats.length + upcomingPrograms.length + trainingFaqs.length + trainingProgramsDetailed.length + trainingPrograms.length + trainingCourses.length + 1} items`)
    console.log(`   - Careers Page: ${careerValues.length + hiringSteps.length + careerTestimonials.length + careerBenefits.length + cultureImages.length + jobOpenings.length + 1} items`)
    console.log(`   - Contact Page: ${officeLocations.length + 2} items`)
    console.log(`   - Main Services: ${services.length}`)
    console.log(`   - Service Items: ${serviceItems.length}`)
    console.log(`   - Service Detail Pages: ${serviceDetailPages.length}`)
    console.log(`   - Blog: ${authors.length} authors + ${categories.length} categories + ${blogPosts.length} posts`)
    console.log(`   - Projects: ${projects.length}`)
    console.log(`   - Legal Pages: ${legalPages.length}`)
    console.log(`   - Navigation: 1`)
    console.log(`\n🎉 Total: ~170+ documents across ALL 40+ content types!`)
    console.log(`\n🎉 Visit http://localhost:3000/studio to see EVERYTHING!`)

  } catch (error) {
    console.error('❌ Error:', error.message)
    process.exit(1)
  }
}

seedAll()

