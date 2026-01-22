import { defineType } from 'sanity'

export default defineType({
  name: 'trainingHero',
  title: 'Training Hero Section',
  type: 'document',
  fields: [
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
      name: 'primaryButtonText',
      title: 'Primary Button Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'primaryButtonLink',
      title: 'Primary Button Link',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'secondaryButtonText',
      title: 'Secondary Button Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'secondaryButtonLink',
      title: 'Secondary Button Link',
      type: 'string',
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
