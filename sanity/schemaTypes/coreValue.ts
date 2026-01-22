import { defineType } from 'sanity'

export default defineType({
  name: 'coreValue',
  type: 'document',
  title: 'Core Values',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      rows: 3,
    },
    {
      name: 'icon',
      type: 'string',
      title: 'Icon Name',
      description: 'Lucide icon name (e.g., Lightbulb, Shield, Users, Award)',
    },
    {
      name: 'order',
      type: 'number',
      title: 'Display Order',
      description: 'Order in which this value appears',
    },
    {
      name: 'isActive',
      type: 'boolean',
      title: 'Active',
      description: 'Show/hide this value',
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
