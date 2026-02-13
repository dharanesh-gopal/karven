import { type SchemaTypeDefinition } from 'sanity'

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
import whyChooseSection from './whyChooseSection'
import journeyMilestone from './journeyMilestone'
import industryCard from './industryCard'
import aboutGallery from './aboutGallery'
import teamMember from './teamMember'
import award from './award'
import partner from './partner'
import groupCompany from './groupCompany'
import serviceItem from './serviceItem'
import servicesPage from './servicesPage'
import upcomingProgram from './upcomingProgram'
import trainingHero from './trainingHero'
import trainingProgram from './trainingProgram'
import trainingStat from './trainingStat'
import trainingFaq from './trainingFaq'
import trainingCourse from './trainingCourse'
import enrollPage from './enrollPage'
import trainingPageSettings from './trainingPageSettings'
import onFieldAction from './onFieldAction'
import trustedPartner from './trustedPartner'
import whyTrainWithUs from './whyTrainWithUs'
import whatSetsUsApart from './whatSetsUsApart'
import careerOpportunity from './careerOpportunity'
import careerHero from './careerHero'
import careerValue from './careerValue'
import hiringStep from './hiringStep'
import careerTestimonial from './careerTestimonial'
import cultureImage from './cultureImage'
import careerBenefit from './careerBenefit'
import jobOpening from './jobOpening'
import contactHero from './contactHero'
import officeLocation from './officeLocation'
import socialMediaSection from './socialMediaSection'
import navbarSettings from './navbarSettings'
import serviceDetailPage from './serviceDetailPage'
import legalPage from './legalPage'
import aboutWelcomeSection from './aboutWelcomeSection'
import aboutShapingFuture from './aboutShapingFuture'
import aboutCoreValuesSection from './aboutCoreValuesSection'
import aboutJourneySection from './aboutJourneySection'
import aboutIndustriesSection from './aboutIndustriesSection'
import aboutScrollingBanner from './aboutScrollingBanner'
import aboutVideoSection from './aboutVideoSection'
import aboutPartnersSection from './aboutPartnersSection'
import aboutAwardsSection from './aboutAwardsSection'
import aboutLeadershipSection from './aboutLeadershipSection'
import aboutBoardSection from './aboutBoardSection'
import aboutJoinUsSection from './aboutJoinUsSection'
import aboutGroupCompaniesSection from './aboutGroupCompaniesSection'
import leadershipMember from './leadershipMember'
import boardMember from './boardMember'
import aboutContactForm from './aboutContactForm'
import seoObject from './seoObject'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Reusable Objects
    seoObject,

    // Site-wide
    siteSettings,
    contactInfo,
    notification,
    footerSettings,
    aboutContactForm,

    // Content

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
    whyChooseSection,
    testimonialsSection,
    feature,
    stats,
    processStep,
    ctaSection,

    // About Page
    aboutTagline,
    aboutHero,
    aboutWelcomeSection,
    impactStat,
    aboutShapingFuture,
    aboutPurpose,
    aboutCoreValuesSection,
    coreValue,
    aboutJourneySection,
    journeyMilestone,
    aboutIndustriesSection,
    industryCard,
    aboutScrollingBanner,
    aboutVideoSection,
    aboutGallery,
    aboutPartnersSection,
    partner,
    aboutAwardsSection,
    award,
    aboutLeadershipSection,
    leadershipMember,
    aboutBoardSection,
    boardMember,
    teamMember,
    aboutJoinUsSection,
    aboutGroupCompaniesSection,
    groupCompany,


    // Services Page
    servicesPage,
    serviceItem,

    // Training Page
    trainingPageSettings,
    trainingHero,
    trainingProgram,
    trainingStat,
    trainingFaq,
    trainingCourse,
    enrollPage,
    upcomingProgram,
    onFieldAction,
    trustedPartner,
    whyTrainWithUs,
    whatSetsUsApart,
    careerOpportunity,

    // Careers Page
    careerHero,
    careerValue,
    hiringStep,
    careerTestimonial,
    cultureImage,
    careerBenefit,
    jobOpening,

    // Contact Page
    contactHero,
    officeLocation,
    socialMediaSection,

    // Navigation & Structure
    navbarSettings,

    // Service Detail Pages
    serviceDetailPage,

    // Legal Pages
    legalPage,
  ],
}
