/**
 * Seed Training Courses to Sanity
 * 
 * This script populates the training courses in Sanity CMS.
 * Run with: npx sanity exec scripts/seed-training-courses-updated.js --with-user-token
 */

import { createClient } from '@sanity/client'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
})

const courses = [
  {
    _type: 'trainingCourse',
    title: 'Course A | Small Class Drone Pilot Training',
    slug: {
      _type: 'slug',
      current: 'course-a',
    },
    subtitle: 'Introduction to Drone Flying',
    description: 'A comprehensive program designed to offer a blend of theoretical education and hands-on practical experience in drone piloting. This course covers everything from basic drone operations to advanced flight techniques.',
    duration: '8 Days',
    price: '₹25,000',
    level: 'Beginner',
    maxStudents: '15',
    certificationIcon: 'Award',
    certification: 'DGCA Remote Pilot Certificate',
    certificationSubtext: 'Earn a certificate upon successful completion of the course',
    descriptionTitle: 'Course Description',
    highlightsTitle: 'Course Highlights',
    highlightsList: [
      'Hands-on training with latest drone models',
      'Theory classes on drone regulations and safety',
      'Flight simulation practice',
      'Real-world field training',
      'DGCA compliance guidelines',
      'Certificate of completion'
    ],
    curriculumTitle: 'Course Curriculum',
    curriculumList: [
      {
        session: 'Session 1-2',
        title: 'Introduction to Drones',
        topics: [
          'Understanding drone technology and components',
          'Types of drones and their applications',
          'Safety protocols and regulations',
          'Pre-flight checklist and inspection'
        ]
      },
      {
        session: 'Session 3-4',
        title: 'Basic Flight Operations',
        topics: [
          'Drone controller basics',
          'Take-off and landing procedures',
          'Basic maneuvers and controls',
          'Flight modes and settings'
        ]
      },
      {
        session: 'Session 5-6',
        title: 'Advanced Flight Techniques',
        topics: [
          'Advanced maneuvering',
          'Obstacle avoidance',
          'Emergency procedures',
          'Weather considerations'
        ]
      },
      {
        session: 'Session 7-8',
        title: 'Practical Assessment',
        topics: [
          'Field practice sessions',
          'Flight test preparation',
          'Final practical examination',
          'Certificate distribution'
        ]
      }
    ],
    prerequisitesTitle: 'Prerequisites',
    prerequisitesList: [
      'Age 18 years or above',
      'Basic understanding of technology',
      'No prior drone experience required'
    ],
    includedTitle: 'What\'s Included',
    includedList: [
      'Course materials and study guides',
      'Access to training drones',
      'Safety equipment',
      'Certificate of completion',
      'Post-training support for 3 months'
    ],
    doubtsTitle: 'Still Have Any Doubts?',
    doubtsMessage: 'Feel free to reach out to us. We\'re here to help you make the right decision for your career.',
    contactUsText: 'Contact Us',
    contactUsLink: '/contact?enquiry=training',
    enrollNowText: 'Enroll Now',
    enrollNowLink: '/contact?enquiry=enrollment',
    order: 1,
    isActive: true,
  },
  {
    _type: 'trainingCourse',
    title: 'Course B | Small and Medium Class Drone Training',
    slug: {
      _type: 'slug',
      current: 'course-b',
    },
    subtitle: 'Mastery in Drone Flying',
    description: 'For those looking to master both small and medium drones, this course offers in-depth training in both theory and practice. Perfect for aspiring professional drone pilots.',
    duration: '13 Days',
    price: '₹45,000',
    level: 'Intermediate',
    maxStudents: '12',
    certificationIcon: 'Medal',
    certification: 'Professional Drone Pilot Certificate',
    certificationSubtext: 'Earn a professional certificate recognized by industry',
    descriptionTitle: 'Course Description',
    highlightsTitle: 'Course Highlights',
    highlightsList: [
      'Training on multiple drone categories',
      'Advanced flight techniques',
      'Commercial drone operations',
      'Aerial photography and videography',
      'DGCA certification preparation',
      'Professional certificate'
    ],
    curriculumTitle: 'Course Curriculum',
    curriculumList: [
      {
        session: 'Session 1-3',
        title: 'Small Drone Operations',
        topics: [
          'Small drone technology overview',
          'Advanced flight controls',
          'Precision flying techniques',
          'Indoor and outdoor operations'
        ]
      },
      {
        session: 'Session 4-6',
        title: 'Medium Drone Operations',
        topics: [
          'Medium drone specifications',
          'Payload management',
          'Long-range flight operations',
          'Commercial applications'
        ]
      },
      {
        session: 'Session 7-9',
        title: 'Professional Applications',
        topics: [
          'Aerial photography basics',
          'Video production techniques',
          'Survey and mapping',
          'Commercial use cases'
        ]
      },
      {
        session: 'Session 10-13',
        title: 'Certification Preparation',
        topics: [
          'DGCA regulations deep dive',
          'Flight test preparation',
          'Written examination prep',
          'Final practical assessment'
        ]
      }
    ],
    prerequisitesTitle: 'Prerequisites',
    prerequisitesList: [
      'Age 18 years or above',
      'Basic drone flying experience (or completion of Course A)',
      'Class 10th pass certificate'
    ],
    includedTitle: 'What\'s Included',
    includedList: [
      'Comprehensive course materials',
      'Access to small and medium class drones',
      'DGCA exam preparation materials',
      'Safety equipment and insurance',
      'Professional certification',
      '6 months post-training support'
    ],
    doubtsTitle: 'Still Have Any Doubts?',
    doubtsMessage: 'Feel free to reach out to us. We\'re here to help you make the right decision for your career.',
    contactUsText: 'Contact Us',
    contactUsLink: '/contact?enquiry=training',
    enrollNowText: 'Enroll Now',
    enrollNowLink: '/contact?enquiry=enrollment',
    order: 2,
    isActive: true,
  },
  {
    _type: 'trainingCourse',
    title: 'Course C | Educational Drone Workshop',
    slug: {
      _type: 'slug',
      current: 'course-c',
    },
    subtitle: 'STEM & Robotics for Students',
    description: 'Designed for schools and colleges, this workshop introduces students to drone technology, coding, and practical applications. An exciting introduction to the world of drones and robotics.',
    duration: '3-5 Days',
    price: '₹8,000 per student',
    level: 'Beginner',
    maxStudents: '30',
    certificationIcon: 'Award',
    certification: 'Participation Certificate',
    certificationSubtext: 'All participants receive a completion certificate',
    descriptionTitle: 'Course Description',
    highlightsTitle: 'Course Highlights',
    highlightsList: [
      'Interactive hands-on sessions',
      'Drone assembly and basics',
      'Introduction to coding',
      'Team-based projects',
      'Safe learning environment',
      'Participation certificate'
    ],
    curriculumTitle: 'Course Curriculum',
    curriculumList: [
      {
        session: 'Day 1',
        title: 'Introduction to Drones and Robotics',
        topics: [
          'What are drones and how do they work?',
          'History and evolution of drones',
          'Real-world applications',
          'Safety and responsible use'
        ]
      },
      {
        session: 'Day 2',
        title: 'Drone Components and Assembly',
        topics: [
          'Understanding drone parts',
          'Basic electronics concepts',
          'Hands-on assembly workshop',
          'Testing and troubleshooting'
        ]
      },
      {
        session: 'Day 3',
        title: 'Programming and Control',
        topics: [
          'Introduction to coding for drones',
          'Basic programming concepts',
          'Flight control practice',
          'Simple automation tasks'
        ]
      },
      {
        session: 'Day 4-5',
        title: 'Project and Demonstration',
        topics: [
          'Group project work',
          'Creative applications',
          'Final presentation',
          'Certificate distribution'
        ]
      }
    ],
    prerequisitesTitle: 'Prerequisites',
    prerequisitesList: [
      'Students from Class 8 onwards',
      'Interest in technology and robotics',
      'No prior technical knowledge required'
    ],
    includedTitle: 'What\'s Included',
    includedList: [
      'Educational drone kits',
      'Workshop materials',
      'Programming tools and software',
      'Project supplies',
      'Participation certificate',
      'Digital course materials'
    ],
    doubtsTitle: 'Still Have Any Doubts?',
    doubtsMessage: 'Feel free to reach out to us. We\'re here to help you make the right decision for your career.',
    contactUsText: 'Contact Us',
    contactUsLink: '/contact?enquiry=training',
    enrollNowText: 'Enroll Now',
    enrollNowLink: '/contact?enquiry=enrollment',
    order: 3,
    isActive: true,
  },
  {
    _type: 'trainingCourse',
    title: 'Course D | Agricultural Drone Operations',
    slug: {
      _type: 'slug',
      current: 'course-d',
    },
    subtitle: 'Precision Agriculture Training',
    description: 'Learn to use drones for precision agriculture, crop monitoring, and modern farming techniques. Perfect for farmers and agricultural professionals.',
    duration: '7 Days',
    price: '₹35,000',
    level: 'Intermediate',
    maxStudents: '15',
    certificationIcon: 'Trophy',
    certification: 'Agricultural Drone Specialist Certificate',
    certificationSubtext: 'Specialized certification for agricultural drone operations',
    descriptionTitle: 'Course Description',
    highlightsTitle: 'Course Highlights',
    highlightsList: [
      'Agricultural drone operations',
      'Crop health monitoring',
      'Precision spraying techniques',
      'Data analysis for farming',
      'Government subsidy guidance',
      'Specialist certificate'
    ],
    curriculumTitle: 'Course Curriculum',
    curriculumList: [
      {
        session: 'Session 1-2',
        title: 'Agriculture Technology Overview',
        topics: [
          'Modern precision agriculture',
          'Role of drones in farming',
          'Types of agricultural drones',
          'Government schemes and subsidies'
        ]
      },
      {
        session: 'Session 3-4',
        title: 'Drone Operations for Agriculture',
        topics: [
          'Agricultural drone setup',
          'Flight planning for farms',
          'Crop monitoring techniques',
          'Data collection methods'
        ]
      },
      {
        session: 'Session 5-6',
        title: 'Spraying and Applications',
        topics: [
          'Precision spraying operations',
          'Pesticide and fertilizer application',
          'Safety protocols',
          'Regulatory compliance'
        ]
      },
      {
        session: 'Session 7',
        title: 'Practical Field Training',
        topics: [
          'Real farm operations',
          'Data interpretation',
          'Final assessment',
          'Certificate distribution'
        ]
      }
    ],
    prerequisitesTitle: 'Prerequisites',
    prerequisitesList: [
      'Age 18 years or above',
      'Basic farming knowledge helpful',
      'Basic drone flying experience preferred'
    ],
    includedTitle: 'What\'s Included',
    includedList: [
      'Agricultural drone training',
      'Spraying equipment practice',
      'Data analysis software',
      'Field practice sessions',
      'Specialist certification',
      'Subsidy guidance documentation'
    ],
    doubtsTitle: 'Still Have Any Doubts?',
    doubtsMessage: 'Feel free to reach out to us. We\'re here to help you make the right decision for your career.',
    contactUsText: 'Contact Us',
    contactUsLink: '/contact?enquiry=training',
    enrollNowText: 'Enroll Now',
    enrollNowLink: '/contact?enquiry=enrollment',
    order: 4,
    isActive: true,
  }
]

async function seedCourses() {
  console.log('🌱 Starting to seed training courses...')
  
  try {
    // Delete existing courses
    console.log('🗑️  Removing existing courses...')
    await client.delete({
      query: '*[_type == "trainingCourse"]',
    })
    
    // Create new courses
    console.log('📚 Creating courses...')
    for (const course of courses) {
      const result = await client.create(course)
      console.log(`✅ Created: ${course.title}`)
    }
    
    console.log('\n✨ Successfully seeded all training courses!')
    console.log(`📊 Total courses: ${courses.length}`)
    console.log('\n🎓 Courses created:')
    courses.forEach((course, index) => {
      console.log(`   ${index + 1}. ${course.title} (${course.slug.current})`)
    })
    
  } catch (error) {
    console.error('❌ Error seeding courses:', error)
    process.exit(1)
  }
}

seedCourses()
