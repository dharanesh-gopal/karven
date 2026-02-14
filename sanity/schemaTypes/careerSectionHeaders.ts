import { defineType } from 'sanity'

export default defineType({
  name: 'careerSectionHeaders',
  title: 'Career Page Section Headers',
  type: 'document',
  fields: [
    {
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'badge',
          title: 'Badge Text',
          type: 'string',
          initialValue: 'Join The Revolution',
        },
        {
          name: 'title',
          title: 'Main Title',
          type: 'string',
          initialValue: 'Life at KarVenSen',
        },
        {
          name: 'companyNameHighlight',
          title: 'Company Name (for gradient)',
          type: 'string',
          initialValue: 'KarVenSen',
        },
        {
          name: 'typedSubtitle',
          title: 'Typed Subtitle',
          type: 'text',
          rows: 2,
          initialValue: 'We are building the autonomous infrastructure of tomorrow.',
        },
        {
          name: 'ctaText',
          title: 'CTA Button Text',
          type: 'string',
          initialValue: 'View Openings',
        },
        {
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'valuesSection',
      title: 'Values Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Where Technology Meets',
        },
        {
          name: 'titleHighlight',
          title: 'Title Highlight',
          type: 'string',
          initialValue: 'Real-World Impact',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
          initialValue: 'At KarVenSen, we build the digital infrastructure for the aviation industry. Join a team dedicated to precision, safety, and scalable engineering.',
        },
        {
          name: 'decorativeImage1',
          title: 'Decorative Image 1 (Large)',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'decorativeImage2',
          title: 'Decorative Image 2 (Small)',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'hiringProcessSection',
      title: 'Hiring Process Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Our Hiring Process',
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          initialValue: 'A transparent path from application to offer.',
        },
      ],
    },
    {
      name: 'testimonialsSection',
      title: 'Testimonials Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Voices from the Team',
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          initialValue: 'Hear from the people building the future.',
        },
      ],
    },
    {
      name: 'benefitsSection',
      title: 'Benefits Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Invest in your',
        },
        {
          name: 'titleHighlight',
          title: 'Title Highlight',
          type: 'string',
          initialValue: 'Future Self.',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 2,
          initialValue: 'We don\'t just offer perks; we offer an ecosystem for you to master Cloud, AI, and Aviation tech.',
        },
        {
          name: 'policyLinkText',
          title: 'Policy Link Text',
          type: 'string',
          initialValue: 'View Full Policy Guide',
        },
      ],
    },
    {
      name: 'jobOpeningsSection',
      title: 'Job Openings Section',
      type: 'object',
      fields: [
        {
          name: 'badge',
          title: 'Badge Text',
          type: 'string',
          initialValue: 'Join the Fleet',
        },
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Current Openings',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 2,
          initialValue: 'We are expanding across Engineering, Operations, and Product. Find the role where you can do your life\'s best work.',
        },
      ],
    },
    {
      name: 'talentNetworkCTA',
      title: 'Talent Network CTA',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'CTA Title',
          type: 'string',
          initialValue: 'Don\'t see your perfect role?',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 2,
          initialValue: 'We are always looking for exceptional talent. Send us your resume and we\'ll keep you on our radar for future missions.',
        },
        {
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          initialValue: 'Join Talent Network',
        },
      ],
    },
    {
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      initialValue: true,
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Career Page Section Headers',
        subtitle: 'Configure all section headers and titles',
      }
    },
  },
})
