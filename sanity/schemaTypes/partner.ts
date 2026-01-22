import { defineType } from 'sanity'

export default defineType({
  name: 'partner',
  type: 'document',
  title: 'Partner Organizations',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Partner Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Partner Logo',
      description: 'Logo image (optional if using text)',
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
      name: 'displayText',
      type: 'string',
      title: 'Display Text',
      description: 'Text to display if no logo (e.g., company name)',
    },
    {
      name: 'textColor',
      type: 'string',
      title: 'Text Color',
      description: 'Color class for text display (e.g., blue-600, red-600)',
    },
    {
      name: 'order',
      type: 'number',
      title: 'Display Order',
      description: 'Order in partner grid',
    },
    {
      name: 'isActive',
      type: 'boolean',
      title: 'Active',
      description: 'Show/hide this partner',
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
