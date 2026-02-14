import { createClient } from '@sanity/client'

// Read project ID from sanity.cli.ts or environment
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'qyxjb4t2',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

// Blog posts data
const blogPosts = [
  // ARTIFICIAL INTELLIGENCE (10 posts)
  {
    id: "computer-vision-applications",
    title: "Computer Vision Applications: From Theory to Practice",
    excerpt: "Deep dive into real-world computer vision implementations including object detection, facial recognition, and quality control systems.",
    category: "Artificial Intelligence",
    branch: "Computer Vision",
    date: "2026-01-08",
    readTime: "8 min read",
    author: "Karvensen Team",
    heroImage: "/blog-img3.jpg",
  },
  {
    id: "generative-ai-future",
    title: "Generative AI: The Future of Content Creation",
    excerpt: "Understanding how generative models are reshaping creative industries, from text to images and beyond.",
    category: "Artificial Intelligence",
    branch: "Generative AI",
    date: "2026-01-05",
    readTime: "6 min read",
    author: "Karvensen Team",
    heroImage: "/blog-img4.jpg",
  },
  {
    id: "ai-model-training",
    title: "AI Model Training: Best Practices for Production Systems",
    excerpt: "Comprehensive guide to training, validating, and deploying machine learning models at scale with optimal performance.",
    category: "Artificial Intelligence",
    branch: "AI Model Training",
    date: "2025-12-28",
    readTime: "9 min read",
    author: "Karvensen Team",
    heroImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&h=600&fit=crop&auto=format",
  },
  {
    id: "intelligent-automation",
    title: "Intelligent Automation: AI-Powered Workflow Optimization",
    excerpt: "How businesses leverage AI to automate complex processes, reduce costs, and enhance operational efficiency.",
    category: "Artificial Intelligence",
    branch: "AI Automation",
    date: "2025-12-22",
    readTime: "7 min read",
    author: "Karvensen Team",
    heroImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&h=600&fit=crop&auto=format",
  },
  {
    id: "edge-ai-processing",
    title: "Edge AI: Processing Intelligence at the Source",
    excerpt: "Exploring edge computing combined with AI for real-time decision making in IoT devices and embedded systems.",
    category: "Artificial Intelligence",
    branch: "Edge AI",
    date: "2025-12-18",
    readTime: "6 min read",
    author: "Karvensen Team",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&h=600&fit=crop&auto=format",
  },
  {
    id: "ai-ethics-responsibility",
    title: "AI Ethics: Building Responsible AI Systems",
    excerpt: "Navigate the ethical considerations, bias mitigation, and transparency requirements in modern AI development.",
    category: "Artificial Intelligence",
    branch: "AI Ethics",
    date: "2025-12-12",
    readTime: "8 min read",
    author: "Karvensen Team",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&h=600&fit=crop&auto=format",
  },
  {
    id: "ai-iot-integration",
    title: "AI + IoT: The Smart Connected Future",
    excerpt: "How artificial intelligence enhances IoT ecosystems for predictive maintenance, smart homes, and industrial automation.",
    category: "Artificial Intelligence",
    branch: "AI + IoT",
    date: "2025-12-08",
    readTime: "7 min read",
    author: "Karvensen Team",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&h=600&fit=crop&auto=format",
  },
  {
    id: "ai-agriculture",
    title: "AI in Agriculture: Precision Farming Revolution",
    excerpt: "How artificial intelligence is transforming Indian agriculture through precision farming, crop monitoring, and yield prediction.",
    category: "Artificial Intelligence",
    branch: "AI in Agriculture",
    date: "2025-11-28",
    readTime: "10 min read",
    author: "Karvensen Team",
    heroImage: "/blog-img1.jpg",
  },
  {
    id: "ai-defense",
    title: "AI in Defense & National Security",
    excerpt: "Exploring AI applications in surveillance, threat detection, and autonomous defense systems for enhanced national security.",
    category: "Artificial Intelligence",
    branch: "AI in Defense",
    date: "2025-11-15",
    readTime: "9 min read",
    author: "Karvensen Team",
    heroImage: "/blog-img2.jpg",
  },
  {
    id: "nlp-deep-dive",
    title: "Natural Language Processing: From Basics to Advanced Applications",
    excerpt: "Understanding NLP fundamentals, transformers, and real-world applications in chatbots, translation, and sentiment analysis.",
    category: "Artificial Intelligence",
    branch: "Natural Language Processing",
    date: "2025-11-01",
    readTime: "11 min read",
    author: "Karvensen Team",
    heroImage: "https://images.unsplash.com/photo-1676573409897-34419cf6c3a8?w=900&h=600&fit=crop&auto=format",
  },

  // DRONE TECHNOLOGY (10 posts)
  {
    id: "drone-agriculture-applications",
    title: "Drone Technology in Precision Agriculture",
    excerpt: "How drones revolutionize farming with crop monitoring, pesticide spraying, and precision agriculture techniques.",
    category: "Drone Technology",
    branch: "Agricultural Drones",
    date: "2026-01-10",
    readTime: "8 min read",
    author: "Karvensen Team",
    heroImage: "/blog-drone1.jpg",
  },
  {
    id: "surveillance-drones",
    title: "Surveillance Drones: Enhancing Security & Monitoring",
    excerpt: "Advanced drone surveillance systems for border security, disaster response, and critical infrastructure protection.",
    category: "Drone Technology",
    branch: "Surveillance Drones",
    date: "2026-01-02",
    readTime: "7 min read",
    author: "Karvensen Team",
    heroImage: "/blog-drone2.jpg",
  },
  {
    id: "drone-regulations-india",
    title: "Drone Regulations in India: 2026 Compliance Guide",
    excerpt: "Complete guide to drone regulations, licensing requirements, and compliance standards in India.",
    category: "Drone Technology",
    branch: "Regulations & Compliance",
    date: "2025-12-20",
    readTime: "6 min read",
    author: "Karvensen Team",
    heroImage: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=900&h=600&fit=crop&auto=format",
  },
  {
    id: "drone-delivery-systems",
    title: "Autonomous Drone Delivery: The Future of Logistics",
    excerpt: "Exploring autonomous drone delivery systems and their impact on last-mile logistics and e-commerce.",
    category: "Drone Technology",
    branch: "Drone Delivery",
    date: "2025-12-10",
    readTime: "7 min read",
    author: "Karvensen Team",
    heroImage: "https://images.unsplash.com/photo-1508614999368-9260051292e5?w=900&h=600&fit=crop&auto=format",
  },
  {
    id: "fpv-racing-drones",
    title: "FPV Racing Drones: Technology & Techniques",
    excerpt: "Deep dive into FPV drone racing technology, equipment, and professional racing techniques.",
    category: "Drone Technology",
    branch: "FPV Racing",
    date: "2025-11-25",
    readTime: "6 min read",
    author: "Karvensen Team",
    heroImage: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=900&h=600&fit=crop&auto=format",
  },
  {
    id: "drone-mapping-surveying",
    title: "Drone Mapping & Surveying: Precision Geospatial Data",
    excerpt: "How drones revolutionize land surveying, 3D mapping, and geospatial data collection.",
    category: "Drone Technology",
    branch: "Mapping & Surveying",
    date: "2025-11-10",
    readTime: "8 min read",
    author: "Karvensen Team",
    heroImage: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=900&h=600&fit=crop&auto=format",
  },
  {
    id: "thermal-imaging-drones",
    title: "Thermal Imaging Drones: Applications Beyond Vision",
    excerpt: "Thermal drone applications in search and rescue, infrastructure inspection, and agricultural monitoring.",
    category: "Drone Technology",
    branch: "Thermal Imaging",
    date: "2025-10-28",
    readTime: "7 min read",
    author: "Karvensen Team",
    heroImage: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=900&h=600&fit=crop&auto=format",
  },
  {
    id: "drone-battery-technology",
    title: "Advanced Drone Battery Technology & Flight Time Optimization",
    excerpt: "Latest developments in drone battery technology, power management, and flight time optimization techniques.",
    category: "Drone Technology",
    branch: "Battery Technology",
    date: "2025-10-15",
    readTime: "6 min read",
    author: "Karvensen Team",
    heroImage: "https://images.unsplash.com/photo-1625331332783-054ca8e66d5f?w=900&h=600&fit=crop&auto=format",
  },
  {
    id: "swarm-robotics",
    title: "Drone Swarm Technology: Coordinated Autonomous Systems",
    excerpt: "Understanding drone swarm algorithms, coordination protocols, and applications in defense and agriculture.",
    category: "Drone Technology",
    branch: "Swarm Robotics",
    date: "2025-10-01",
    readTime: "9 min read",
    author: "Karvensen Team",
    heroImage: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=900&h=600&fit=crop&auto=format",
  },
  {
    id: "drone-maintenance-guide",
    title: "Drone Maintenance: Best Practices for Long-Term Performance",
    excerpt: "Comprehensive guide to drone maintenance, troubleshooting, and preventive care for optimal performance.",
    category: "Drone Technology",
    branch: "Maintenance & Care",
    date: "2025-09-20",
    readTime: "7 min read",
    author: "Karvensen Team",
    heroImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&h=600&fit=crop&auto=format",
  },

  // CLOUD COMPUTING (10 posts)
  {
    id: "cloud-migration-strategies",
    title: "Cloud Migration Strategies: Moving to the Cloud with Confidence",
    excerpt: "Step-by-step guide to successful cloud migration including planning, execution, and optimization strategies.",
    category: "Cloud Computing",
    branch: "Cloud Migration",
    date: "2026-01-12",
    readTime: "9 min read",
    author: "Karvensen Team",
    heroImage: "/blog-cloud1.jpg",
  },
  {
    id: "serverless-architecture",
    title: "Serverless Architecture: Building Scalable Cloud Applications",
    excerpt: "Understanding serverless computing, Function-as-a-Service (FaaS), and building event-driven applications.",
    category: "Cloud Computing",
    branch: "Serverless Computing",
    date: "2026-01-06",
    readTime: "8 min read",
    author: "Karvensen Team",
    heroImage: "/blog-cloud2.jpg",
  },
  {
    id: "multi-cloud-strategy",
    title: "Multi-Cloud Strategy: Leveraging Multiple Cloud Providers",
    excerpt: "Benefits and challenges of multi-cloud architecture and how to implement effective multi-cloud strategies.",
    category: "Cloud Computing",
    branch: "Multi-Cloud",
    date: "2025-12-25",
    readTime: "7 min read",
    author: "Karvensen Team",
    heroImage: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=900&h=600&fit=crop&auto=format",
  },
  {
    id: "cloud-security-best-practices",
    title: "Cloud Security: Best Practices for Data Protection",
    excerpt: "Essential cloud security practices, encryption methods, and compliance standards for protecting cloud data.",
    category: "Cloud Computing",
    branch: "Cloud Security",
    date: "2025-12-15",
    readTime: "10 min read",
    author: "Karvensen Team",
    heroImage: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=900&h=600&fit=crop&auto=format",
  },
  {
    id: "kubernetes-orchestration",
    title: "Kubernetes: Container Orchestration at Scale",
    excerpt: "Master Kubernetes fundamentals, deployment strategies, and best practices for container orchestration.",
    category: "Cloud Computing",
    branch: "Container Orchestration",
    date: "2025-12-05",
    readTime: "11 min read",
    author: "Karvensen Team",
    heroImage: "https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?w=900&h=600&fit=crop&auto=format",
  },
  {
    id: "cloud-cost-optimization",
    title: "Cloud Cost Optimization: Strategies to Reduce Cloud Spending",
    excerpt: "Practical strategies for optimizing cloud costs, monitoring usage, and implementing FinOps practices.",
    category: "Cloud Computing",
    branch: "Cost Optimization",
    date: "2025-11-20",
    readTime: "8 min read",
    author: "Karvensen Team",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop&auto=format",
  },
  {
    id: "cloud-native-development",
    title: "Cloud-Native Development: Building for the Cloud",
    excerpt: "Principles and practices of cloud-native development including microservices, containers, and CI/CD.",
    category: "Cloud Computing",
    branch: "Cloud-Native",
    date: "2025-11-05",
    readTime: "9 min read",
    author: "Karvensen Team",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&h=600&fit=crop&auto=format",
  },
  {
    id: "disaster-recovery-cloud",
    title: "Disaster Recovery in the Cloud: Ensuring Business Continuity",
    excerpt: "Implementing robust disaster recovery strategies and backup solutions in cloud environments.",
    category: "Cloud Computing",
    branch: "Disaster Recovery",
    date: "2025-10-18",
    readTime: "7 min read",
    author: "Karvensen Team",
    heroImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=900&h=600&fit=crop&auto=format",
  },
  {
    id: "edge-computing-evolution",
    title: "Edge Computing: The Evolution of Cloud Infrastructure",
    excerpt: "How edge computing complements cloud infrastructure for low-latency and distributed applications.",
    category: "Cloud Computing",
    branch: "Edge Computing",
    date: "2025-10-05",
    readTime: "8 min read",
    author: "Karvensen Team",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&h=600&fit=crop&auto=format",
  },
  {
    id: "cloud-databases-comparison",
    title: "Cloud Databases: Choosing the Right Database for Your Application",
    excerpt: "Comprehensive comparison of cloud database solutions including SQL, NoSQL, and NewSQL options.",
    category: "Cloud Computing",
    branch: "Cloud Databases",
    date: "2025-09-22",
    readTime: "10 min read",
    author: "Karvensen Team",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&h=600&fit=crop&auto=format",
  },

  // LMS & EDTECH (10 posts)
  {
    id: "future-of-lms",
    title: "The Future of Learning Management Systems",
    excerpt: "Exploring next-generation LMS features including AI-powered personalization, adaptive learning, and analytics.",
    category: "LMS & EdTech",
    branch: "LMS Platforms",
    date: "2026-01-15",
    readTime: "8 min read",
    author: "Karvensen Team",
    heroImage: "/blog-lms1.jpg",
  },
  {
    id: "ai-powered-learning",
    title: "AI-Powered Personalized Learning Experiences",
    excerpt: "How artificial intelligence is transforming education through personalized learning paths and adaptive content.",
    category: "LMS & EdTech",
    branch: "AI in Education",
    date: "2026-01-09",
    readTime: "7 min read",
    author: "Karvensen Team",
    heroImage: "/blog-lms2.jpg",
  },
  {
    id: "gamification-in-education",
    title: "Gamification in Education: Boosting Engagement & Retention",
    excerpt: "Implementing gamification strategies in educational platforms to increase student engagement and knowledge retention.",
    category: "LMS & EdTech",
    branch: "Gamification",
    date: "2025-12-30",
    readTime: "7 min read",
    author: "Karvensen Team",
    heroImage: "https://images.unsplash.com/photo-1598520106830-8c45c2035460?w=900&h=600&fit=crop&auto=format",
  },
  {
    id: "virtual-classrooms-guide",
    title: "Building Effective Virtual Classrooms: A Complete Guide",
    excerpt: "Best practices for creating engaging virtual classroom experiences with interactive tools and collaboration features.",
    category: "LMS & EdTech",
    branch: "Virtual Classrooms",
    date: "2025-12-18",
    readTime: "9 min read",
    author: "Karvensen Team",
    heroImage: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=900&h=600&fit=crop&auto=format",
  },
  {
    id: "learning-analytics",
    title: "Learning Analytics: Data-Driven Insights for Better Education",
    excerpt: "Leveraging learning analytics to track student progress, identify learning gaps, and improve outcomes.",
    category: "LMS & EdTech",
    branch: "Learning Analytics",
    date: "2025-12-08",
    readTime: "8 min read",
    author: "Karvensen Team",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop&auto=format",
  },
  {
    id: "mobile-learning-revolution",
    title: "Mobile Learning: Education in Your Pocket",
    excerpt: "The rise of mobile learning platforms and designing effective mobile-first educational experiences.",
    category: "LMS & EdTech",
    branch: "Mobile Learning",
    date: "2025-11-28",
    readTime: "6 min read",
    author: "Karvensen Team",
    heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&h=600&fit=crop&auto=format",
  },
  {
    id: "microlearning-strategies",
    title: "Microlearning: Bite-Sized Content for Maximum Impact",
    excerpt: "Designing effective microlearning modules for corporate training and skill development.",
    category: "LMS & EdTech",
    branch: "Microlearning",
    date: "2025-11-15",
    readTime: "7 min read",
    author: "Karvensen Team",
    heroImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&h=600&fit=crop&auto=format",
  },
  {
    id: "ar-vr-in-education",
    title: "AR & VR in Education: Immersive Learning Experiences",
    excerpt: "Exploring augmented and virtual reality applications in education for hands-on training and simulations.",
    category: "LMS & EdTech",
    branch: "AR/VR Learning",
    date: "2025-11-01",
    readTime: "9 min read",
    author: "Karvensen Team",
    heroImage: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=900&h=600&fit=crop&auto=format",
  },
  {
    id: "social-learning-platforms",
    title: "Social Learning: Collaborative Education in the Digital Age",
    excerpt: "Building social learning features that foster collaboration, peer learning, and knowledge sharing.",
    category: "LMS & EdTech",
    branch: "Social Learning",
    date: "2025-10-20",
    readTime: "7 min read",
    author: "Karvensen Team",
    heroImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&h=600&fit=crop&auto=format",
  },
  {
    id: "assessment-automation",
    title: "Automated Assessment & Feedback Systems",
    excerpt: "Implementing AI-powered automated assessments, grading systems, and personalized feedback mechanisms.",
    category: "LMS & EdTech",
    branch: "Assessment Tools",
    date: "2025-10-05",
    readTime: "8 min read",
    author: "Karvensen Team",
    heroImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&h=600&fit=crop&auto=format",
  },
]

async function migrateBlogPosts() {
  console.log('Starting blog posts migration...')
  
  try {
    // First, create or get the default author
    let authorId
    const existingAuthors = await client.fetch('*[_type == "author" && name == "Karvensen Team"][0]')
    
    if (existingAuthors) {
      authorId = existingAuthors._id
      console.log('Found existing author:', authorId)
    } else {
      const author = await client.create({
        _type: 'author',
        name: 'Karvensen Team',
        slug: { _type: 'slug', current: 'karvensen-team' },
        bio: 'The Karvensen Team comprises experts in AI, Drone Technology, Cloud Computing, and EdTech, dedicated to sharing knowledge and insights.',
      })
      authorId = author._id
      console.log('Created new author:', authorId)
    }

    // Migrate each blog post
    for (const post of blogPosts) {
      try {
        // Check if post already exists
        const existing = await client.fetch(`*[_type == "blog" && slug.current == $slug][0]`, {
          slug: post.id
        })

        if (existing) {
          console.log(`Skipping existing post: ${post.title}`)
          continue
        }

        // Create the blog post
        const blogPost = {
          _type: 'blog',
          title: post.title,
          slug: {
            _type: 'slug',
            current: post.id,
          },
          excerpt: post.excerpt,
          category: post.category,
          branch: post.branch,
          publishedAt: new Date(post.date).toISOString(),
          readTime: post.readTime,
          author: {
            _type: 'reference',
            _ref: authorId,
          },
          heroImage: post.heroImage?.startsWith('http') ? null : post.heroImage,
          body: [
            {
              _type: 'block',
              _key: 'intro',
              style: 'normal',
              children: [
                {
                  _type: 'span',
                  text: post.excerpt,
                },
              ],
            },
            {
              _type: 'block',
              _key: 'content1',
              style: 'h2',
              children: [
                {
                  _type: 'span',
                  text: 'Introduction',
                },
              ],
            },
            {
              _type: 'block',
              _key: 'content2',
              style: 'normal',
              children: [
                {
                  _type: 'span',
                  text: `This article explores ${post.title.toLowerCase()}. We'll cover key concepts, practical applications, and best practices in ${post.branch || post.category}.`,
                },
              ],
            },
          ],
        }

        const result = await client.create(blogPost)
        console.log(`✓ Created blog post: ${post.title} (ID: ${result._id})`)
      } catch (err) {
        console.error(`✗ Error creating post "${post.title}":`, err)
      }
    }

    console.log('\n✓ Blog migration completed!')
  } catch (error) {
    console.error('Migration failed:', error)
    throw error
  }
}

async function createBlogPageSettings() {
  console.log('Creating blog page settings...')
  
  try {
    const existing = await client.fetch('*[_type == "blogPageSettings" && isActive == true][0]')
    
    if (existing) {
      console.log('Blog page settings already exist')
      return
    }

    const settings = await client.create({
      _type: 'blogPageSettings',
      heroTitle: 'The KarVenSen Blog',
      heroSubtitle: 'Explore cutting-edge insights on Artificial Intelligence, Drone Technology, Cloud Computing, LMS platforms, and next-generation digital solutions.',
      heroBadgeText: 'Insights & Updates',
      heroVideoUrl: '/ai-background.mp4',
      categories: [
        'All',
        'Artificial Intelligence',
        'Drone Technology',
        'Cloud Computing',
        'LMS & EdTech',
      ],
      isActive: true,
    })

    console.log('✓ Created blog page settings:', settings._id)
  } catch (error) {
    console.error('Error creating blog page settings:', error)
    throw error
  }
}

// Run migration
async function main() {
  console.log('=== Blog Data Migration ===\n')
  
  await createBlogPageSettings()
  await migrateBlogPosts()
  
  console.log('\n=== Migration Complete ===')
}

main().catch(console.error)
