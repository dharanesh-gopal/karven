import { defineType } from 'sanity'

export default defineType({
  name: 'officeLocation',
  title: 'Office Locations',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'City Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Office Role/Type',
      type: 'string',
      description: 'e.g., Global Headquarters, R&D Center',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'lat',
      title: 'Latitude',
      type: 'number',
      description: 'For map marker',
    },
    {
      name: 'lng',
      title: 'Longitude',
      type: 'number',
      description: 'For map marker',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
    {
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
    },
  },
})
