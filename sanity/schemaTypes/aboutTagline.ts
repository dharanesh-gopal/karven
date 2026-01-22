import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'aboutTagline',
  title: 'About Page - Tagline Banner',
  type: 'document',
  fields: [
    defineField({
      name: 'mainText',
      title: 'Main Text',
      type: 'string',
      initialValue: 'Trusted by Industry Leaders',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      initialValue: 'Our clientele includes government agencies, defense forces, and leading enterprises that rely on our drone solutions and software services for innovation, efficiency, and mission-critical success.',
      validation: (Rule) => Rule.required(),
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
      title: 'mainText',
    },
    prepare({ title }) {
      return {
        title: title || 'Tagline Banner',
        subtitle: 'About Page Section',
      }
    },
  },
})
