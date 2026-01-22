import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'howWeWorkSection',
  title: 'How We Work Section Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      initialValue: 'How We Work',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'string',
      initialValue: 'Intelligent Integration: From Insight to Impact',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      initialValue: 'We follow a rigorous, data-driven methodology to ensure that every drone deployment is backed by powerful AI intelligence.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Section Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Image displayed on the right side',
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
      media: 'image',
    },
    prepare({ title }) {
      return {
        title: title || 'How We Work Section',
        subtitle: 'Section Settings',
      }
    },
  },
})
