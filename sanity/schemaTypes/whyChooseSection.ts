import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'whyChooseSection',
  title: 'Why Choose Section',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Why Choose Karvensen?',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      initialValue: "We're not just another IT company. Karvensen combines cutting-edge AI technology with a deep understanding of real-world challenges - from helping farmers optimize crops with drones to building enterprise systems that scale.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Key highlights displayed as bullet points',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'sectionTitle',
    },
    prepare({ title }) {
      return {
        title: title || 'Why Choose Section',
      }
    },
  },
})
