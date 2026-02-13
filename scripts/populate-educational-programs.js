// Populate Educational Programs with complete content
import { getCliClient } from 'sanity/cli'

const client = getCliClient()

async function populateEducationalPrograms() {
  console.log('📝 Populating Educational Programs with complete content...\n')

  try {
    const completeData = {
      hero: {
        badge: 'Skill Development',
        title: 'Educational Programs & Training',
        subtitle: 'Hands-on workshops and certification programs in drone technology, AI, and emerging technologies for schools, colleges, and professionals.',
      },
      overview: {
        title: 'Empowering Through Education',
        description: 'We offer comprehensive training programs designed to build practical skills in drone operations, AI/ML, and modern technology. Our courses combine theoretical knowledge with hands-on experience, industry certifications, and real-world project exposure.',
      },
      solutions: [
        {
          _key: 'drone-training',
          icon: 'Plane',
          title: 'Drone Pilot Training',
          description: 'Complete drone pilot certification programs from beginner to advanced levels.',
          features: [
            'DGCA certification preparation',
            'Hands-on flight training',
            'Safety protocols and regulations',
            'Maintenance and troubleshooting',
            'Commercial operations training',
          ],
        },
        {
          _key: 'school-workshops',
          icon: 'GraduationCap',
          title: 'School & College Workshops',
          description: 'Interactive workshops introducing students to drone technology and AI.',
          features: [
            'Age-appropriate curriculum',
            'Practical demonstrations',
            'STEM education integration',
            'Career guidance sessions',
            'Competition preparation',
          ],
        },
        {
          _key: 'corporate-training',
          icon: 'Users',
          title: 'Corporate Training',
          description: 'Professional development programs for organizations.',
          features: [
            'Customized curriculum design',
            'Industry-specific training',
            'Certification programs',
            'Ongoing technical support',
            'Flexible scheduling options',
          ],
        },
        {
          _key: 'ai-ml-courses',
          icon: 'Cpu',
          title: 'AI/ML Training',
          description: 'Practical courses in Artificial Intelligence and Machine Learning.',
          features: [
            'Python programming fundamentals',
            'ML algorithms and techniques',
            'Deep learning frameworks',
            'Real-world project experience',
            'Industry expert mentorship',
          ],
        },
      ],
      keyFeatures: {
        title: 'Why Choose Our Training Programs',
        subtitle: 'Industry-leading education with practical experience',
        features: [
          {
            _key: 'certified-instructors',
            icon: 'GraduationCap',
            title: 'Certified Instructors',
            description: 'Learn from industry experts with years of practical experience and teaching excellence.',
          },
          {
            _key: 'hands-on-learning',
            icon: 'Users',
            title: 'Hands-On Learning',
            description: 'Get practical experience with real equipment and industry-standard tools.',
          },
          {
            _key: 'industry-certification',
            icon: 'CheckCircle2',
            title: 'Industry Certification',
            description: 'Earn recognized certifications that boost your career prospects and credibility.',
          },
          {
            _key: 'career-support',
            icon: 'Briefcase',
            title: 'Career Support',
            description: 'Access job placement assistance, resume building, and interview preparation.',
          },
        ],
      },
      useCases: {
        title: 'Who Benefits from Our Programs',
        cases: [
          {
            _key: 'students',
            title: 'Students & Graduates',
            description: 'Build in-demand skills and kickstart your career in technology with industry-recognized certifications.',
          },
          {
            _key: 'professionals',
            title: 'Working Professionals',
            description: 'Upskill and stay competitive with the latest technologies through flexible learning schedules.',
          },
          {
            _key: 'educators',
            title: 'Schools & Colleges',
            description: 'Enhance your curriculum with cutting-edge technology workshops and student engagement programs.',
          },
          {
            _key: 'businesses',
            title: 'Businesses',
            description: 'Train your workforce in emerging technologies to drive innovation and competitive advantage.',
          },
        ],
      },
      process: {
        title: 'Our Training Process',
        subtitle: 'Structured learning for maximum skill development',
        steps: [
          {
            _key: 'step-1',
            number: '01',
            title: 'Assessment',
            description: 'We evaluate your current skill level and learning objectives.',
            icon: 'ClipboardList',
          },
          {
            _key: 'step-2',
            number: '02',
            title: 'Customized Plan',
            description: 'Receive a tailored learning path designed for your goals.',
            icon: 'Target',
          },
          {
            _key: 'step-3',
            number: '03',
            title: 'Interactive Training',
            description: 'Engage in hands-on sessions with expert instructors.',
            icon: 'Users',
          },
          {
            _key: 'step-4',
            number: '04',
            title: 'Certification',
            description: 'Complete assessments and earn industry-recognized certificates.',
            icon: 'Award',
          },
        ],
      },
      technologies: {
        title: 'Technologies We Teach',
        items: [
          {
            _key: 'drones',
            name: 'Drone Technology',
            icon: 'Plane',
            description: 'UAV operation, regulations, and applications',
          },
          {
            _key: 'ai-ml',
            name: 'AI & Machine Learning',
            icon: 'Brain',
            description: 'Python, TensorFlow, PyTorch, and more',
          },
          {
            _key: 'iot',
            name: 'IoT Systems',
            icon: 'Cpu',
            description: 'Sensors, embedded systems, and connectivity',
          },
          {
            _key: 'data-science',
            name: 'Data Science',
            icon: 'BarChart3',
            description: 'Analytics, visualization, and insights',
          },
        ],
      },
      cta: {
        title: 'Start Your Learning Journey Today',
        description: 'Enroll in our training programs and gain in-demand tech skills with expert guidance.',
        buttonText: 'View All Courses',
        buttonLink: '/training',
      },
    }

    await client
      .patch('service-educational-programs')
      .set(completeData)
      .commit()

    console.log('✅ Successfully populated Educational Programs!')
    console.log('🎯 Refresh Sanity Studio to see all the content')

  } catch (error) {
    console.error('❌ Error:', error)
    process.exit(1)
  }
}

populateEducationalPrograms()
