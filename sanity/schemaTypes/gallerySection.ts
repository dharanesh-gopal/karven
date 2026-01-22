import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'gallerySection',
  title: 'Gallery Section (Built in India)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Main Title',
      type: 'string',
      initialValue: 'Built in India.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      initialValue: 'Powered by Innovation.',
    }),
    defineField({
      name: 'images',
      title: 'Slideshow Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1).max(10),
    }),
    defineField({
      name: 'autoplayInterval',
      title: 'Autoplay Interval (seconds)',
      type: 'number',
      initialValue: 3,
      validation: (Rule) => Rule.required().min(1).max(10),
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
      subtitle: 'subtitle',
      media: 'images.0',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle || 'Gallery Section',
      }
    },
  },
})
