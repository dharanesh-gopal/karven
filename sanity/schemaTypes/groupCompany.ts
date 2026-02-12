import { defineType } from 'sanity'

export default defineType({
  name: 'groupCompany',
  type: 'document',
  title: 'Group Companies',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Company Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      rows: 2,
    },
    {
      name: 'websiteUrl',
      type: 'url',
      title: 'Website URL',
    },
    {
      name: 'buttonText',
      type: 'string',
      title: 'Button Text',
      description: 'Text for the button (e.g., "Learn More" or "Visit Website")',
    },
    {
      name: 'buttonType',
      type: 'string',
      title: 'Button Type',
      description: 'Style of the button',
      options: {
        list: [
          { title: 'Link Style (Learn More)', value: 'link' },
          { title: 'Button Style (Visit Website)', value: 'button' },
        ],
      },
      initialValue: 'link',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Company Image',
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
      description: 'Order in group companies section',
    },
    {
      name: 'isActive',
      type: 'boolean',
      title: 'Active',
      description: 'Show/hide this company',
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
