import {defineMigration, createOrReplace, unset} from 'sanity/migrate'

// Posts to DELETE (oldest posts per category - keep only 6 newest per category)
const POSTS_TO_DELETE = [
  // Artificial Intelligence - Delete these (keeping 6 newest)
  'blog-ai-agriculture',
  'blog-ai-based-lms',
  'blog-ai-model-training',
  'blog-ai-predictive-analytics',
  'blog-intelligent-automation',
  'blog-cloud-ai-services',
  'blog-nlp-communication',
  
  // Drone Technology - Delete these (keeping 6 newest)
  'blog-drone-survey',
  'blog-defense-drones',
  'blog-delivery-drones-logistics',
  'blog-drone-swarm-technology',
  'blog-drone-maintenance-repair',
  'blog-make-in-india-drones',
  'blog-uav-regulations-india',
  
  // Cloud Computing - Delete these (keeping 6 newest)
  'blog-cloud-migration',
  'blog-serverless-computing',
  'blog-cloud-for-startups',
  'blog-edge-cloud-computing',
  'blog-cloud-cost-optimization',
  'blog-cloud-native-development',
  'blog-multi-cloud-management',
  'blog-cloud-migration-guide',
  
  // LMS & EdTech - Delete these (keeping 6 newest)
  'blog-virtual-labs-education',
  'blog-corporate-training-systems',
  'blog-lms-analytics-insights',
  'blog-online-certification-platforms',
  'blog-lms-api-integration',
  'blog-skill-tracking-systems',
]

export default defineMigration({
  title: 'Delete excess blog posts - keep only 6 per category',
  documentTypes: ['blog'],

  migrate: {
    document(doc, context) {
      const docId = doc._id || ''
      
      // Check if this post should be deleted
      const shouldDelete = POSTS_TO_DELETE.some(id => docId.includes(id))
      
      if (shouldDelete) {
        // Return nothing to delete the document
        return undefined
      }
      
      // Keep the document as-is
      return doc
    },
  },
})
