import { defineType } from 'sanity'

export default defineType({
  name: 'trustedPartner',
  title: 'Trusted Partner',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Partner Name',
      type: 'string',
      description: 'Name of the partner organization',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Partner Logo',
      type: 'image',
      description: 'Partner company logo (optional - if not provided, name will be displayed)',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'websiteUrl',
      title: 'Website URL',
      type: 'url',
      description: 'Partner website URL (optional)',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Display order (lower numbers appear first)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Toggle to show/hide this partner',
      initialValue: true,
    },
  ],
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      name: 'name',
      order: 'order',
      isActive: 'isActive',
      logo: 'logo',
    },
    prepare({ name, order, isActive, logo }) {
      return {
        title: `${order}. ${name}`,
        subtitle: isActive ? 'Active' : 'Inactive',
        media: logo,
      }
    },
  },
})
