import { defineType } from 'sanity'

export default defineType({
  name: 'award',
  type: 'document',
  title: 'Awards & Recognition',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Award Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
      description: 'Organization or additional context',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Award Image',
      description: 'Background image for the award card',
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
      name: 'badgeText',
      type: 'string',
      title: 'Badge Text',
      description: 'Text shown in the badge (e.g., ASIA RECORD, PMA, AI, etc.)',
    },
    {
      name: 'badgeColor',
      type: 'string',
      title: 'Badge Color',
      description: 'Color for the badge background',
      options: {
        list: [
          { title: 'Red', value: 'red' },
          { title: 'Yellow', value: 'yellow' },
          { title: 'Blue', value: 'blue' },
          { title: 'Purple', value: 'purple' },
          { title: 'White', value: 'white' },
        ],
      },
    },
    {
      name: 'order',
      type: 'number',
      title: 'Display Order',
      description: 'Order in carousel',
    },
    {
      name: 'isActive',
      type: 'boolean',
      title: 'Active',
      description: 'Show/hide this award',
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
