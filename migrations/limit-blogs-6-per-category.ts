import {defineMigration, at, set} from 'sanity/migrate'

// Configuration: posts to keep per category
const POSTS_PER_CATEGORY = 6

// Manually define which posts to keep active (most recent 6 per category)
// Generated from your current blog data
const POSTS_TO_KEEP_ACTIVE = [
  // Artificial Intelligence (6 posts)
  'blog-ai-ethics-responsibility',
  'blog-generative-ai-future',
  'blog-ai-smart-cities',
  'blog-ai-iot-integration',
  'blog-computer-vision-applications',
  'blog-ai-agriculture',
  
  // Drone Technology (6 posts)  
  'blog-autonomous-drones',
  'blog-thermal-imaging-drones',
  'blog-ai-powered-drones',
  'blog-agricultural-spraying-drones',
  'blog-precision-farming-drones',
  'blog-drone-surveillance-mapping',
  
  // Cloud Computing (6 posts)
  'blog-cloud-migration-guide',
  'blog-devops-cicd-pipelines',
  'blog-kubernetes-container-orchestration',
  'blog-cloud-security-best-practices',
  'blog-cloud-architecture-design',
  'blog-hybrid-cloud-strategies',
  
  // LMS & EdTech (6 posts)
  'blog-mobile-learning-platforms',
  'blog-ar-vr-education',
  'blog-gamification-lms',
  'blog-personalized-learning-platforms',
  'blog-lms-for-institutions',
  'blog-collaborative-learning',
]

export default defineMigration({
  title: 'Keep only 6 posts per category',
  documentTypes: ['blog'],

  migrate: {
    document(doc, context) {
      const docId = context.documentId
      
      // Check if this post should be kept active
      const shouldBeActive = POSTS_TO_KEEP_ACTIVE.some(id => docId.includes(id))
      
      // Set isActive based on whether it's in the keep list
      return [
        at('isActive', set(shouldBeActive)),
      ]
    },
  },
})
