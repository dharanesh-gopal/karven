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
      description: 'Color for text display (if no logo)',
      options: {
        list: [
          { title: 'Blue', value: 'blue-600' },
          { title: 'Light Blue', value: 'blue-500' },
          { title: 'Dark Blue', value: 'blue-700' },
          { title: 'Navy Blue', value: 'blue-900' },
          { title: 'Red', value: 'red-600' },
          { title: 'Dark Red', value: 'red-700' },
          { title: 'Orange', value: 'orange-600' },
          { title: 'Yellow', value: 'yellow-500' },
          { title: 'Green', value: 'green-600' },
          { title: 'Purple', value: 'purple-700' },
          { title: 'Pink', value: 'pink-600' },
          { title: 'Gray', value: 'gray-800' },
          { title: 'Dark Gray', value: 'gray-900' },
          { title: 'Black', value: 'black' },
        ],
        layout: 'dropdown',
      },
      initialValue: 'blue-600',
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
