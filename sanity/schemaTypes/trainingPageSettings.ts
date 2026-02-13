import { defineType } from 'sanity'

export default defineType({
  name: 'trainingPageSettings',
  title: 'Training Page Settings',
  type: 'document',
  fields: [
    {
      name: 'heroBackgroundVideo',
      title: 'Hero Background Video',
      type: 'file',
      description: 'Background video for hero section (mp4 format recommended)',
      options: {
        accept: 'video/*',
      },
    },
    {
      name: 'onFieldActionTitle',
      title: 'On-Field Action Section Title',
      type: 'string',
      initialValue: 'On-Field Action',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'coursesTitle',
      title: 'Courses Section Title',
      type: 'string',
      initialValue: 'Our Training Courses',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'trustedPartnersTitle',
      title: 'Trusted Partners Section Title',
      type: 'string',
      initialValue: 'Trusted by Leading Organizations',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'trustedPartnersSubtitle',
      title: 'Trusted Partners Section Subtitle',
      type: 'text',
      initialValue: 'Our training programs are recognized and trusted by top companies and institutions across India',
    },
    {
      name: 'whyLearnTitle',
      title: 'Why Learn Section Title',
      type: 'string',
      initialValue: 'Why Learn with KarVenSen',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'careerOpportunitiesTitle',
      title: 'Career Opportunities Section Title',
      type: 'string',
      initialValue: 'Career Opportunities After Training',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'careerOpportunitiesButtonText',
      title: 'Career Opportunities Button Text',
      type: 'string',
      initialValue: 'Join Today',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'careerOpportunitiesButtonLink',
      title: 'Career Opportunities Button Link',
      type: 'string',
      initialValue: '/contact?enquiry=training',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'upcomingProgramsTitle',
      title: 'Upcoming Programs Section Title',
      type: 'string',
      initialValue: 'Upcoming Programs',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'upcomingProgramsSubtitle',
      title: 'Upcoming Programs Section Subtitle',
      type: 'text',
      initialValue: 'Register for our upcoming training sessions and workshops',
    },
    {
      name: 'upcomingProgramsButtonText',
      title: 'Upcoming Programs Custom Training Button Text',
      type: 'string',
      initialValue: 'Request Custom Training',
    },
    {
      name: 'upcomingProgramsButtonLink',
      title: 'Upcoming Programs Custom Training Button Link',
      type: 'string',
      initialValue: '/contact?enquiry=custom-training',
    },
    {
      name: 'faqTitle',
      title: 'FAQ Section Title',
      type: 'string',
      initialValue: 'Frequently Asked Questions',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'faqSubtitle',
      title: 'FAQ Section Subtitle',
      type: 'text',
      initialValue: 'Common questions about our training programs',
    },
    {
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Toggle to activate these settings',
      initialValue: true,
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Training Page Settings',
        subtitle: 'General settings for training page sections',
      }
    },
  },
})
