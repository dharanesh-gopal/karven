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
import notification from './notification'
import gallerySection from './gallerySection'
import testimonialsSection from './testimonialsSection'
import howWeWorkSection from './howWeWorkSection'
import footerSettings from './footerSettings'
import aboutTagline from './aboutTagline'
import aboutHero from './aboutHero'
import impactStat from './impactStat'
import aboutPurpose from './aboutPurpose'
import coreValue from './coreValue'
import journeyMilestone from './journeyMilestone'
import industryCard from './industryCard'
import aboutGallery from './aboutGallery'
import teamMember from './teamMember'
import award from './award'
import partner from './partner'
import groupCompany from './groupCompany'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Site-wide
    siteSettings,
    contactInfo,
    notification,
    footerSettings,
    
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
    gallerySection,
    howWeWorkSection,
    testimonialsSection,
    feature,
    stats,
    processStep,
    ctaSection,
    
    // About Page
    aboutTagline,
    aboutHero,
    impactStat,
    aboutPurpose,
    coreValue,
    journeyMilestone,
    industryCard,
    aboutGallery,
    teamMember,
    award,
    partner,
    groupCompany,
  ],
}
