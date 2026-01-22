import { defineType } from 'sanity'

export default defineType({
  name: 'industryCard',
  type: 'document',
  title: 'Industries We Serve',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Industry Title',
      description: 'Name of the industry',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Industry Image',
      description: 'Background image for the industry card',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    },
    {
      name: 'order',
      type: 'number',
      title: 'Display Order',
      description: 'Order in grid (lower numbers first)',
    },
    {
      name: 'isActive',
      type: 'boolean',
      title: 'Active',
      description: 'Show/hide this industry',
      initialValue: true,
    },
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
