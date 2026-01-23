import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Settings Group
      S.listItem()
        .title('⚙️ Site Settings')
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('Site Configuration')
                .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
              S.listItem()
                .title('Navbar Settings')
                .child(S.documentTypeList('navbarSettings').title('Navbar Settings')),
              S.listItem()
                .title('Footer Settings')
                .child(S.document().schemaType('footerSettings').documentId('footerSettings')),
              S.listItem()
                .title('Contact Information')
                .child(S.document().schemaType('contactInfo').documentId('contactInfo')),
              S.listItem()
                .title('Notifications')
                .child(S.documentTypeList('notification').title('Notifications')),
            ])
        ),
      
      S.divider(),
      
      // Content Types
      S.listItem()
        .title('📝 Blog Posts')
        .child(S.documentTypeList('blog').title('Blog Posts')),
      
      S.listItem()
        .title('🎓 Training')
        .child(S.documentTypeList('training').title('Training')),
      
      S.listItem()
        .title('💼 Services')
        .child(
          S.list()
            .title('Services')
            .items([
              S.listItem()
                .title('Service Overview')
                .child(S.documentTypeList('service').title('Services')),
              S.listItem()
                .title('Service Detail Pages')
                .child(S.documentTypeList('serviceDetailPage').title('Service Detail Pages')),
              S.listItem()
                .title('Service Items')
                .child(S.documentTypeList('serviceItem').title('Service Items')),
            ])
        ),
      
      S.listItem()
        .title('💬 Testimonials')
        .child(S.documentTypeList('testimonial').title('Testimonials')),
      
      S.listItem()
        .title('📂 Projects')
        .child(S.documentTypeList('project').title('Projects')),
      
      S.listItem()
        .title('💼 Careers')
        .child(
          S.list()
            .title('Careers')
            .items([
              S.listItem()
                .title('Job Openings')
                .child(S.documentTypeList('jobOpening').title('Job Openings')),
              S.listItem()
                .title('Career Hero')
                .child(S.document().schemaType('careerHero').documentId('careerHero')),
              S.listItem()
                .title('Career Values')
                .child(S.documentTypeList('careerValue').title('Career Values')),
              S.listItem()
                .title('Career Benefits')
                .child(S.documentTypeList('careerBenefit').title('Career Benefits')),
              S.listItem()
                .title('Culture Images')
                .child(S.documentTypeList('cultureImage').title('Culture Images')),
              S.listItem()
                .title('Hiring Steps')
                .child(S.documentTypeList('hiringStep').title('Hiring Steps')),
            ])
        ),
      
      S.divider(),
      
      // Page Sections
      S.listItem()
        .title('🏠 Homepage Sections')
        .child(
          S.list()
            .title('Homepage')
            .items([
              S.listItem()
                .title('Hero Section')
                .child(S.documentTypeList('heroSection').title('Hero Section')),
              S.listItem()
                .title('Features')
                .child(S.documentTypeList('feature').title('Features')),
              S.listItem()
                .title('Stats')
                .child(S.documentTypeList('stats').title('Stats')),
              S.listItem()
                .title('Process Steps')
                .child(S.documentTypeList('processStep').title('Process Steps')),
              S.listItem()
                .title('CTA Section')
                .child(S.documentTypeList('ctaSection').title('CTA Section')),
              S.listItem()
                .title('Gallery Section')
                .child(S.documentTypeList('gallerySection').title('Gallery Section')),
              S.listItem()
                .title('How We Work')
                .child(S.document().schemaType('howWeWorkSection').documentId('howWeWorkSection')),
            ])
        ),
      
      S.listItem()
        .title('ℹ️ About Page')
        .child(
          S.list()
            .title('About Page')
            .items([
              S.listItem()
                .title('About Hero')
                .child(S.document().schemaType('aboutHero').documentId('aboutHero')),
              S.listItem()
                .title('About Tagline')
                .child(S.document().schemaType('aboutTagline').documentId('aboutTagline')),
              S.listItem()
                .title('About Purpose')
                .child(S.document().schemaType('aboutPurpose').documentId('aboutPurpose')),
              S.listItem()
                .title('Impact Stats')
                .child(S.documentTypeList('impactStat').title('Impact Stats')),
              S.listItem()
                .title('Core Values')
                .child(S.documentTypeList('coreValue').title('Core Values')),
              S.listItem()
                .title('Journey Milestones')
                .child(S.documentTypeList('journeyMilestone').title('Journey Milestones')),
              S.listItem()
                .title('Industry Cards')
                .child(S.documentTypeList('industryCard').title('Industry Cards')),
              S.listItem()
                .title('Gallery')
                .child(S.documentTypeList('aboutGallery').title('Gallery')),
              S.listItem()
                .title('Team Members')
                .child(S.documentTypeList('teamMember').title('Team Members')),
              S.listItem()
                .title('Awards')
                .child(S.documentTypeList('award').title('Awards')),
              S.listItem()
                .title('Partners')
                .child(S.documentTypeList('partner').title('Partners')),
              S.listItem()
                .title('Group Companies')
                .child(S.documentTypeList('groupCompany').title('Group Companies')),
            ])
        ),
      
      S.listItem()
        .title('📞 Contact Page')
        .child(
          S.list()
            .title('Contact Page')
            .items([
              S.listItem()
                .title('Contact Hero')
                .child(S.document().schemaType('contactHero').documentId('contactHero')),
              S.listItem()
                .title('Office Locations')
                .child(S.documentTypeList('officeLocation').title('Office Locations')),
              S.listItem()
                .title('Social Media')
                .child(S.document().schemaType('socialMediaSection').documentId('socialMediaSection')),
            ])
        ),
      
      S.divider(),
      
      // Supporting Content
      S.listItem()
        .title('✍️ Authors')
        .child(S.documentTypeList('author').title('Authors')),
      
      S.listItem()
        .title('🏷️ Categories')
        .child(S.documentTypeList('category').title('Categories')),
      
      S.listItem()
        .title('📄 Legal Pages')
        .child(S.documentTypeList('legalPage').title('Legal Pages')),
    ])

