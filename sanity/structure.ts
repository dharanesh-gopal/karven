import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content Management')
    .items([
      // ============================================
      // 📄 PAGES (Organized by Website Pages)
      // ============================================
      
      // Homepage
      S.listItem()
        .title('🏠 Homepage')
        .child(
          S.list()
            .title('Homepage - All Sections')
            .items([
              S.listItem()
                .title('1. Hero Section (Top of Page)')
                .child(S.documentTypeList('heroSection').title('Hero Section')),
              S.listItem()
                .title('2. Features Section')
                .child(S.documentTypeList('feature').title('Features')),
              S.listItem()
                .title('3. Stats Section')
                .child(S.documentTypeList('stats').title('Stats')),
              S.listItem()
                .title('4. How We Work Section')
                .child(S.document().schemaType('howWeWorkSection').documentId('howWeWorkSection')),
              S.listItem()
                .title('5. Process Steps')
                .child(S.documentTypeList('processStep').title('Process Steps')),
              S.listItem()
                .title('6. Testimonials Section')
                .child(S.documentTypeList('testimonial').title('Testimonials')),
              S.listItem()
                .title('7. Gallery Section')
                .child(S.documentTypeList('gallerySection').title('Gallery Section')),
              S.listItem()
                .title('8. CTA Section (Call to Action)')
                .child(S.documentTypeList('ctaSection').title('CTA Section')),
            ])
        ),
      
      S.divider(),
      
      // About Page
      S.listItem()
        .title('ℹ️ About Page')
        .child(
          S.list()
            .title('About Page - All Sections')
            .items([
              S.listItem()
                .title('1. About Hero (Top Banner)')
                .child(S.document().schemaType('aboutHero').documentId('aboutHero')),
              S.listItem()
                .title('2. About Tagline')
                .child(S.document().schemaType('aboutTagline').documentId('aboutTagline')),
              S.listItem()
                .title('3. About Purpose')
                .child(S.document().schemaType('aboutPurpose').documentId('aboutPurpose')),
              S.listItem()
                .title('4. Impact Stats')
                .child(S.documentTypeList('impactStat').title('Impact Stats')),
              S.listItem()
                .title('5. Core Values')
                .child(S.documentTypeList('coreValue').title('Core Values')),
              S.listItem()
                .title('6. Journey Milestones (Timeline)')
                .child(S.documentTypeList('journeyMilestone').title('Journey Milestones')),
              S.listItem()
                .title('7. Industry Cards')
                .child(S.documentTypeList('industryCard').title('Industry Cards')),
              S.listItem()
                .title('8. Team Members')
                .child(S.documentTypeList('teamMember').title('Team Members')),
              S.listItem()
                .title('9. Gallery Images')
                .child(S.documentTypeList('aboutGallery').title('Gallery')),
              S.listItem()
                .title('10. Awards & Recognition')
                .child(S.documentTypeList('award').title('Awards')),
              S.listItem()
                .title('11. Partners & Clients')
                .child(S.documentTypeList('partner').title('Partners')),
              S.listItem()
                .title('12. Group Companies')
                .child(S.documentTypeList('groupCompany').title('Group Companies')),
            ])
        ),
      
      S.divider(),
      
      // Services Page
      S.listItem()
        .title('💼 Services Page')
        .child(
          S.list()
            .title('Services - All Content')
            .items([
              S.listItem()
                .title('1. All Services (Main List)')
                .child(S.documentTypeList('service').title('Services')),
              S.listItem()
                .title('2. Service Detail Pages')
                .child(S.documentTypeList('serviceDetailPage').title('Service Detail Pages')),
              S.listItem()
                .title('3. Service Items (Individual Items)')
                .child(S.documentTypeList('serviceItem').title('Service Items')),
            ])
        ),
      
      S.divider(),
      
      // Training Page
      S.listItem()
        .title('🎓 Training Page')
        .child(
          S.list()
            .title('Training - All Content')
            .items([
              S.listItem()
                .title('1. Training Hero Section')
                .child(S.document().schemaType('trainingHero').documentId('trainingHero')),
              S.listItem()
                .title('2. Training Programs (All Courses)')
                .child(S.documentTypeList('training').title('Training Programs')),
              S.listItem()
                .title('3. Training Courses')
                .child(S.documentTypeList('trainingCourse').title('Training Courses')),
              S.listItem()
                .title('4. Upcoming Training Programs')
                .child(S.documentTypeList('trainingProgram').title('Upcoming Programs')),
              S.listItem()
                .title('5. Training Stats')
                .child(S.documentTypeList('trainingStat').title('Training Stats')),
              S.listItem()
                .title('6. Training FAQs')
                .child(S.documentTypeList('trainingFaq').title('Training FAQs')),
            ])
        ),
      
      S.divider(),
      
      // Blog Page
      S.listItem()
        .title('📝 Blog Page')
        .child(
          S.list()
            .title('Blog - All Content')
            .items([
              S.listItem()
                .title('1. All Blog Posts')
                .child(S.documentTypeList('blog').title('Blog Posts')),
              S.listItem()
                .title('2. Blog Authors')
                .child(S.documentTypeList('author').title('Authors')),
              S.listItem()
                .title('3. Blog Categories')
                .child(S.documentTypeList('category').title('Categories')),
            ])
        ),
      
      S.divider(),
      
      // Careers Page
      S.listItem()
        .title('💼 Careers Page')
        .child(
          S.list()
            .title('Careers - All Content')
            .items([
              S.listItem()
                .title('1. Career Hero (Top Banner)')
                .child(S.document().schemaType('careerHero').documentId('careerHero')),
              S.listItem()
                .title('2. Job Openings (Active Jobs)')
                .child(S.documentTypeList('jobOpening').title('Job Openings')),
              S.listItem()
                .title('3. Company Values')
                .child(S.documentTypeList('careerValue').title('Career Values')),
              S.listItem()
                .title('4. Employee Benefits')
                .child(S.documentTypeList('careerBenefit').title('Career Benefits')),
              S.listItem()
                .title('5. Culture Images (Office Photos)')
                .child(S.documentTypeList('cultureImage').title('Culture Images')),
              S.listItem()
                .title('6. Hiring Process Steps')
                .child(S.documentTypeList('hiringStep').title('Hiring Steps')),
              S.listItem()
                .title('7. Employee Testimonials')
                .child(S.documentTypeList('careerTestimonial').title('Career Testimonials')),
            ])
        ),
      
      S.divider(),
      
      // Contact Page
      S.listItem()
        .title('📞 Contact Page')
        .child(
          S.list()
            .title('Contact - All Content')
            .items([
              S.listItem()
                .title('1. Contact Hero (Top Banner)')
                .child(S.document().schemaType('contactHero').documentId('contactHero')),
              S.listItem()
                .title('2. Office Locations (Addresses)')
                .child(S.documentTypeList('officeLocation').title('Office Locations')),
              S.listItem()
                .title('3. Social Media Links')
                .child(S.document().schemaType('socialMediaSection').documentId('socialMediaSection')),
            ])
        ),
      
      S.divider(),
      
      // Projects
      S.listItem()
        .title('📂 Projects Portfolio')
        .child(S.documentTypeList('project').title('All Projects')),
      
      S.divider(),
      
      // Legal Pages
      S.listItem()
        .title('📄 Legal Pages')
        .child(
          S.list()
            .title('Legal Content')
            .items([
              S.listItem()
                .title('Privacy Policy, Terms, etc.')
                .child(S.documentTypeList('legalPage').title('Legal Pages')),
            ])
        ),
      
      S.divider(),
      S.divider(),
      
      // ============================================
      // ⚙️ SITE-WIDE SETTINGS (Affects All Pages)
      // ============================================
      
      S.listItem()
        .title('⚙️ Global Settings')
        .child(
          S.list()
            .title('Site-Wide Settings')
            .items([
              S.listItem()
                .title('Site Configuration (SEO, Meta)')
                .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
              S.listItem()
                .title('Navigation Bar (Menu)')
                .child(S.documentTypeList('navbarSettings').title('Navbar Settings')),
              S.listItem()
                .title('Footer (Bottom of All Pages)')
                .child(S.document().schemaType('footerSettings').documentId('footerSettings')),
              S.listItem()
                .title('Contact Information (Global)')
                .child(S.document().schemaType('contactInfo').documentId('contactInfo')),
              S.listItem()
                .title('Notifications (Alerts)')
                .child(S.documentTypeList('notification').title('Notifications')),
            ])
        ),
    ])

