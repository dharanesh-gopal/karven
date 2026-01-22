import { type SchemaTypeDefinition } from 'sanity'

import service from './service'
import blog from './blog'
import author from './author'
import category from './category'
import training from './training'
import testimonial from './testimonial'
import project from './project'
import settings from './settings'
import heroSection from './heroSection'
import feature from './feature'
import stats from './stats'
import processStep from './processStep'
import ctaSection from './ctaSection'
import contactInfo from './contactInfo'
import siteSettings from './siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Site-wide
    siteSettings,
    contactInfo,
    
    // Content
    service,
    blog,
    author,
    category,
    training,
    testimonial,
    project,
    settings,
    
    // Homepage
    heroSection,
    feature,
    stats,
    processStep,
    ctaSection,
  ],
}
