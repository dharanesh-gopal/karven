import { getCliClient } from 'sanity/cli'

const client = getCliClient()

async function fixTrainingCourses() {
  console.log('🔄 Fixing training courses curriculum structure...\n')

  try {
    // Step 1: Delete existing training courses
    console.log('🗑️  Deleting existing training courses...')
    const result = await client.delete({
      query: '*[_type == "trainingCourse"]'
    })
    console.log(`  ✓ Deleted ${result.results?.length || 0} courses\n`)

    // Step 2: Re-create courses with correct structure
    console.log('📚 Creating courses with correct curriculum structure...')
    
    const trainingCourses = [
      {
        _type: 'trainingCourse',
        title: 'Course A | Small Class Drone Pilot Training',
        slug: { _type: 'slug', current: 'course-a' },
        subtitle: 'Introduction to Drone Flying',
        description: 'A comprehensive program designed to offer a blend of theoretical education and hands-on practical experience.',
        duration: '8 Days',
        price: '₹25,000',
        level: 'Beginner',
        maxStudents: '15',
        certification: 'DGCA Remote Pilot Certificate',
        highlightsList: [
          'DGCA-approved curriculum',
          'Hands-on flying practice',
          'Theory and practical training',
          'Small batch size for personalized attention',
          'Certificate of completion',
        ],
        curriculumList: [
          {
            _type: 'object',
            _key: 'curr1',
            session: 'Day 1-2',
            title: 'Introduction to Drones',
            topics: [
              'Basics of drone technology and components',
              'Types of drones and their applications',
              'Safety protocols and regulations',
              'Pre-flight checklist and inspection',
            ],
          },
          {
            _type: 'object',
            _key: 'curr2',
            session: 'Day 3-4',
            title: 'Flight Theory',
            topics: [
              'Aerodynamics fundamentals',
              'Weather considerations for flying',
              'Safety protocols and emergency procedures',
              'DGCA regulations and compliance',
            ],
          },
          {
            _type: 'object',
            _key: 'curr3',
            session: 'Day 5-6',
            title: 'Practical Flying',
            topics: [
              'Hands-on training with small class drones',
              'Basic maneuvers and controls',
              'Flight modes and settings',
              'Real-world practice sessions',
            ],
          },
          {
            _type: 'object',
            _key: 'curr4',
            session: 'Day 7-8',
            title: 'Certification Prep',
            topics: [
              'DGCA exam preparation',
              'Final practical assessment',
              'Theory test review',
              'Certificate distribution',
            ],
          },
        ],
        prerequisitesList: [
          'Minimum age: 18 years',
          'Basic understanding of physics',
          'No prior drone experience required',
        ],
        includedList: [
          'Study materials and manuals',
          'Drone usage during training',
          'DGCA exam fee',
          'Certificate upon completion',
          'Refreshments and lunch',
        ],
        doubtsMessage: 'Still Have Any Doubts? Feel free to reach out to us. We\'re here to help you make the right decision for your career.',
        contactUsText: 'Contact Us',
        contactUsLink: '/contact?enquiry=training',
        enrollNowText: 'Enroll Now',
        order: 1,
        isActive: true,
      },
      {
        _type: 'trainingCourse',
        title: 'Course B | Small and Medium Class Drone Training',
        slug: { _type: 'slug', current: 'course-b' },
        subtitle: 'Mastery in Drone Flying',
        description: 'For those looking to master both small and medium drones, this course offers in-depth training in both theory and practice.',
        duration: '13 days',
        price: '₹45,000',
        level: 'Intermediate',
        maxStudents: '12',
        certification: 'DGCA Remote Pilot Certificate (Small & Medium)',
        highlightsList: [
          'Comprehensive DGCA training for multiple drone classes',
          'Advanced flying techniques',
          'Commercial drone operations',
          'Emergency procedures',
          'Job placement support',
        ],
        curriculumList: [
          {
            _type: 'object',
            _key: 'curr1',
            session: 'Day 1-3',
            title: 'Small Class Review',
            topics: [
              'Quick revision of small class drone operations',
              'Basic flight maneuvers',
              'Safety protocols review',
              'Equipment familiarization',
            ],
          },
          {
            _type: 'object',
            _key: 'curr2',
            session: 'Day 4-7',
            title: 'Medium Class Theory',
            topics: [
              'Advanced aerodynamics',
              'DGCA regulations for medium class',
              'Commercial drone operations',
              'Weather and flight planning',
            ],
          },
          {
            _type: 'object',
            _key: 'curr3',
            session: 'Day 8-11',
            title: 'Practical Training',
            topics: [
              'Extensive hands-on practice with medium class drones',
              'Advanced flight techniques',
              'Emergency procedures',
              'Payload operations',
            ],
          },
          {
            _type: 'object',
            _key: 'curr4',
            session: 'Day 12-13',
            title: 'Certification',
            topics: [
              'DGCA exam preparation',
              'Final practical assessment',
              'Written examination',
              'Certificate issuance',
            ],
          },
        ],
        prerequisitesList: [
          'Minimum age: 18 years',
          'Small class certification (recommended)',
          'Basic technical knowledge',
        ],
        includedList: [
          'Comprehensive study materials',
          'Access to small and medium class drones',
          'DGCA exam fees for both classes',
          'Dual certification upon completion',
          'All meals during training',
        ],
        doubtsMessage: 'Still Have Any Doubts? Feel free to reach out to us. We\'re here to help you make the right decision for your career.',
        contactUsText: 'Contact Us',
        contactUsLink: '/contact?enquiry=training',
        enrollNowText: 'Enroll Now',
        order: 2,
        isActive: true,
      },
      {
        _type: 'trainingCourse',
        title: 'Course C | Educational Drone Workshop',
        slug: { _type: 'slug', current: 'course-c' },
        subtitle: 'STEM & Robotics for Students',
        description: 'Designed for schools and colleges, this workshop introduces students to drone technology, coding, and practical applications.',
        duration: '3-5 Days',
        price: '₹8,000 per student',
        level: 'Beginner',
        maxStudents: '20-30',
        certification: 'Certificate of Participation',
        highlightsList: [
          'Age-appropriate curriculum (Class 8+)',
          'Hands-on drone building',
          'Basic coding and programming',
          'Team-based projects',
          'Fun and interactive learning',
        ],
        curriculumList: [
          {
            _type: 'object',
            _key: 'curr1',
            session: 'Day 1',
            title: 'Introduction to Drones and Robotics',
            topics: [
              'What are drones and how do they work?',
              'History and evolution of drones',
              'Real-world applications in various industries',
              'Safety and responsible drone use',
            ],
          },
          {
            _type: 'object',
            _key: 'curr2',
            session: 'Day 2',
            title: 'Build & Code',
            topics: [
              'Understanding drone components',
              'Assemble simple educational drones',
              'Introduction to basic coding',
              'Programming drone movements',
            ],
          },
          {
            _type: 'object',
            _key: 'curr3',
            session: 'Day 3',
            title: 'Flying Practice',
            topics: [
              'Learn to fly drones safely',
              'Basic flight controls and maneuvers',
              'Safety protocols and guidelines',
              'Hands-on practice sessions',
            ],
          },
          {
            _type: 'object',
            _key: 'curr4',
            session: 'Day 4-5',
            title: 'Projects (Optional)',
            topics: [
              'Work on creative drone projects',
              'Team-based challenges',
              'Project presentations',
              'Certificate distribution',
            ],
          },
        ],
        prerequisitesList: [
          'Students from Class 8 onwards',
          'Interest in technology and robotics',
          'No prior experience needed',
        ],
        includedList: [
          'Educational drone kits',
          'Programming software access',
          'Printed study materials',
          'Certificate of participation',
          'School/college group discounts available',
        ],
        doubtsMessage: 'Still Have Any Doubts? Feel free to reach out to us. We\'re here to help you make the right decision for your career.',
        contactUsText: 'Contact Us',
        contactUsLink: '/contact?enquiry=training',
        enrollNowText: 'Enroll Now',
        order: 3,
        isActive: true,
      },
      {
        _type: 'trainingCourse',
        title: 'Course D | Agricultural Drone Operations',
        slug: { _type: 'slug', current: 'course-d' },
        subtitle: 'Precision Agriculture Training',
        description: 'Specialized training for farmers and agriculture professionals on using drones for crop monitoring, spraying, and field analysis.',
        duration: '6 Days',
        price: '₹18,000',
        level: 'Beginner',
        maxStudents: '15',
        certification: 'Agricultural Drone Operator Certificate',
        highlightsList: [
          'Farmer-friendly curriculum',
          'Crop monitoring techniques',
          'Pesticide spraying operations',
          'Soil and crop health analysis',
          'Government subsidy eligible',
        ],
        curriculumList: [
          {
            _type: 'object',
            _key: 'curr1',
            session: 'Day 1',
            title: 'Agriculture Drones Overview',
            topics: [
              'Types of agricultural drones',
              'Applications in modern farming',
              'Benefits of drone technology in agriculture',
              'Cost-benefit analysis',
            ],
          },
          {
            _type: 'object',
            _key: 'curr2',
            session: 'Day 2-3',
            title: 'Crop Monitoring',
            topics: [
              'Using drones for field surveys',
              'Crop health assessment techniques',
              'Multispectral imaging basics',
              'Data collection and interpretation',
            ],
          },
          {
            _type: 'object',
            _key: 'curr3',
            session: 'Day 4-5',
            title: 'Spraying Operations',
            topics: [
              'Pesticide and fertilizer spraying techniques',
              'Proper chemical handling',
              'Flight planning for spraying',
              'Safety and regulatory compliance',
            ],
          },
          {
            _type: 'object',
            _key: 'curr4',
            session: 'Day 6',
            title: 'Practical Application',
            topics: [
              'Field practice sessions',
              'Real farm operations',
              'Final assessment',
              'Certificate distribution',
            ],
          },
        ],
        prerequisitesList: [
          'Farmers or agriculture professionals',
          'Basic understanding of farming',
          'No technical background required',
        ],
        includedList: [
          'Farmer-friendly training materials',
          'Access to agricultural drones',
          'Safety equipment',
          'Certificate of completion',
          'Post-training support for equipment purchase',
        ],
        doubtsMessage: 'Still Have Any Doubts? Feel free to reach out to us. We\'re here to help you make the right decision for your career.',
        contactUsText: 'Contact Us',
        contactUsLink: '/contact?enquiry=training',
        enrollNowText: 'Enroll Now',
        order: 4,
        isActive: true,
      },
    ]

    for (const course of trainingCourses) {
      await client.create(course)
      console.log(`  ✓ Created: ${course.title}`)
    }

    console.log('\n✅ Training courses fixed successfully!')
    console.log('\n📝 The curriculum now has the correct structure:')
    console.log('   - session: (e.g., "Day 1-2")')
    console.log('   - title: (e.g., "Introduction to Drones")')
    console.log('   - topics: (array of topic strings)')

  } catch (error) {
    console.error('❌ Error fixing training courses:', error)
    throw error
  }
}

// Run the fix
fixTrainingCourses()
  .then(() => {
    console.log('\n🎉 Script completed!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('\n💥 Script failed:', error)
    process.exit(1)
  })
