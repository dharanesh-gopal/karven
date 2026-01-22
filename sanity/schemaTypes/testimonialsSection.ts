import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'testimonialsSection',
  title: 'Testimonials Section Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Trusted by Organizations Nationwide',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Section Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'showFeaturedOnly',
      title: 'Show Featured Testimonials Only',
      type: 'boolean',
      initialValue: false,
      description: 'If enabled, only testimonials marked as "Featured" will be displayed',
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
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Testimonials Section',
        subtitle: 'Section Settings',
      }
    },
  },
})
