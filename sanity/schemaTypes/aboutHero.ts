import { defineType } from 'sanity'

export default defineType({
  name: 'aboutHero',
  type: 'document',
  title: 'About Page Hero',
  fields: [
    {
      name: 'mainTitle',
      type: 'string',
      title: 'Main Title',
      description: 'Large hero title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
      description: 'Subtitle below the main title',
    },
    {
      name: 'buttonText',
      type: 'string',
      title: 'Button Text',
      description: 'Text for the CTA button',
    },
    {
      name: 'isActive',
      type: 'boolean',
      title: 'Active',
      description: 'Enable/disable this hero section',
      initialValue: true,
    },
  ],
})
