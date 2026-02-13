import { getCliClient } from 'sanity/cli'

const client = getCliClient()

async function populateTrainingPageData() {
  console.log('🚀 Starting to populate training page data...\n')

  try {
    // 1. On-Field Action Media
    console.log('📸 Populating On-Field Action Media...')
    const onFieldActionItems = [
      {
        _type: 'onFieldAction',
        title: 'Educational Workshops',
        mediaType: 'image',
        order: 1,
        isActive: true,
        // Note: We're not uploading the actual file here - that needs to be done manually in Sanity Studio
        // or you can reference the path: '/edu drone.png'
      },
      {
        _type: 'onFieldAction',
        title: 'Live Drone Demo',
        mediaType: 'video',
        order: 2,
        isActive: true,
        // Note: Video file path: '/drone video 2.mp4'
      },
    ]

    for (const item of onFieldActionItems) {
      await client.create(item)
      console.log(`  ✓ Created: ${item.title}`)
    }

    // 2. Training Courses (add missing courses C and D)
    console.log('\n📚 Populating Training Courses...')
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

    // 3. Trusted Partners
    console.log('\n🤝 Populating Trusted Partners...')
    const trustedPartners = [
      { name: 'TCS', order: 1 },
      { name: 'Infosys', order: 2 },
      { name: 'Wipro', order: 3 },
      { name: 'Cognizant', order: 4 },
      { name: 'Tech Mahindra', order: 5 },
      { name: 'HCL Technologies', order: 6 },
      { name: 'Microsoft', order: 7 },
      { name: 'Google', order: 8 },
      { name: 'Amazon', order: 9 },
      { name: 'IBM', order: 10 },
    ]

    for (const partner of trustedPartners) {
      await client.create({
        _type: 'trustedPartner',
        name: partner.name,
        order: partner.order,
        isActive: true,
      })
      console.log(`  ✓ Created: ${partner.name}`)
    }

    // 4. Why Learn Items - "Why Train With Us?" section
    console.log('\n💡 Populating Why Learn Items - Why Train With Us...')
    const whyTrainItems = [
      {
        _type: 'whyLearnItem',
        section: 'why-train',
        sectionTitle: 'Why Train With Us?',
        iconName: 'Award',
        iconColor: 'blue',
        title: 'DGCA Certification',
        description: 'Recognized industry certification',
        order: 1,
        isActive: true,
      },
      {
        _type: 'whyLearnItem',
        section: 'why-train',
        sectionTitle: 'Why Train With Us?',
        iconName: 'Users',
        iconColor: 'blue',
        title: 'Industry-Leading Instructors',
        description: 'Learn from the best professionals',
        order: 2,
        isActive: true,
      },
      {
        _type: 'whyLearnItem',
        section: 'why-train',
        sectionTitle: 'Why Train With Us?',
        iconName: 'CheckCircle',
        iconColor: 'blue',
        title: 'Comprehensive Support System',
        description: 'End-to-end guidance and assistance',
        order: 3,
        isActive: true,
      },
      {
        _type: 'whyLearnItem',
        section: 'why-train',
        sectionTitle: 'Why Train With Us?',
        iconName: 'Tractor',
        iconColor: 'blue',
        title: 'Focus on Entrepreneurship',
        description: 'Build your own business ventures',
        order: 4,
        isActive: true,
      },
    ]

    for (const item of whyTrainItems) {
      await client.create(item)
      console.log(`  ✓ Created: ${item.title}`)
    }

    // 5. Why Learn Items - "What Sets Us Apart?" section
    console.log('\n✨ Populating Why Learn Items - What Sets Us Apart...')
    const setsApartItems = [
      {
        _type: 'whyLearnItem',
        section: 'sets-apart',
        sectionTitle: 'What Sets Us Apart?',
        iconName: 'GraduationCap',
        iconColor: 'green',
        title: 'Expert Guidance',
        description: 'Personalized mentoring and support',
        order: 1,
        isActive: true,
      },
      {
        _type: 'whyLearnItem',
        section: 'sets-apart',
        sectionTitle: 'What Sets Us Apart?',
        iconName: 'CheckCircle',
        iconColor: 'green',
        title: 'Real-World Experience',
        description: 'Hands-on practical training',
        order: 2,
        isActive: true,
      },
      {
        _type: 'whyLearnItem',
        section: 'sets-apart',
        sectionTitle: 'What Sets Us Apart?',
        iconName: 'Award',
        iconColor: 'green',
        title: 'Industry Recognition',
        description: 'Certificates valued by employers',
        order: 3,
        isActive: true,
      },
      {
        _type: 'whyLearnItem',
        section: 'sets-apart',
        sectionTitle: 'What Sets Us Apart?',
        iconName: 'Users',
        iconColor: 'green',
        title: 'Career Support',
        description: 'Job placement assistance',
        order: 4,
        isActive: true,
      },
    ]

    for (const item of setsApartItems) {
      await client.create(item)
      console.log(`  ✓ Created: ${item.title}`)
    }

    // 6. Career Opportunities
    console.log('\n🎯 Populating Career Opportunities...')
    const careerOpportunities = [
      {
        _type: 'careerOpportunity',
        title: 'Tailored Job Placement Support',
        description: 'Connect with top agricultural and tech companies actively hiring certified drone pilots and AI specialists.',
        iconName: 'Users',
        iconColor: 'blue',
        order: 1,
        isActive: true,
      },
      {
        _type: 'careerOpportunity',
        title: 'Exclusive Drone Pilot Opportunities',
        description: 'Access to exclusive job openings in precision agriculture, infrastructure inspection, and aerial surveying.',
        iconName: 'Award',
        iconColor: 'blue',
        order: 2,
        isActive: true,
      },
      {
        _type: 'careerOpportunity',
        title: 'Expert Mentorship Programs',
        description: 'Ongoing guidance from industry experts to help you launch your career or start your own drone business.',
        iconName: 'GraduationCap',
        iconColor: 'blue',
        order: 3,
        isActive: true,
      },
    ]

    for (const opportunity of careerOpportunities) {
      await client.create(opportunity)
      console.log(`  ✓ Created: ${opportunity.title}`)
    }

    console.log('\n✅ All training page data populated successfully!')
    console.log('\n📝 Next Steps:')
    console.log('  1. Go to Sanity Studio (http://localhost:3000/studio)')
    console.log('  2. For On-Field Action Media:')
    console.log('     - Upload the image: /edu drone.png')
    console.log('     - Upload the video: /drone video 2.mp4')
    console.log('  3. For Training Courses:')
    console.log('     - Upload course images for each course')
    console.log('  4. For Why Learn Items:')
    console.log('     - Upload section images:')
    console.log('       • Why Train: /open field certificate image.png')
    console.log('       • Sets Apart: /staff teaches to std.png')
    console.log('  5. For Career Opportunities:')
    console.log('     - Upload section image: /train-3.jpeg')

  } catch (error) {
    console.error('❌ Error populating training page data:', error)
    throw error
  }
}

// Run the population
populateTrainingPageData()
  .then(() => {
    console.log('\n🎉 Script completed!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('\n💥 Script failed:', error)
    process.exit(1)
  })
