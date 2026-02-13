import { defineType } from 'sanity'

export default defineType({
  name: 'trainingHero',
  title: 'Training Hero Section',
  type: 'document',
  fields: [
    {
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      description: 'Small badge text above the title',
      initialValue: 'Training Programs',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Main headline (supports HTML for gradient text)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Toggle to show/hide this section',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'title',
      isActive: 'isActive',
    },
    prepare({ title, isActive }) {
      return {
        title: 'Training Hero Section',
        subtitle: isActive ? 'Active' : 'Inactive',
      }
    },
  },
})
