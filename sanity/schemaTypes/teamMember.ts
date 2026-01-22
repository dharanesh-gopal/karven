import { defineType } from 'sanity'

export default defineType({
  name: 'teamMember',
  type: 'document',
  title: 'Team Members',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      type: 'string',
      title: 'Role/Position',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      description: 'Leadership Team or Board of Directors',
      options: {
        list: [
          { title: 'Leadership Team', value: 'leadership' },
          { title: 'Board of Directors', value: 'board' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Profile Image',
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
      name: 'linkedinUrl',
      type: 'url',
      title: 'LinkedIn URL',
      description: 'LinkedIn profile link',
    },
    {
      name: 'bio',
      type: 'text',
      title: 'Bio',
      description: 'Short biography (optional)',
      rows: 3,
    },
    {
      name: 'order',
      type: 'number',
      title: 'Display Order',
      description: 'Order in team section',
    },
    {
      name: 'isActive',
      type: 'boolean',
      title: 'Active',
      description: 'Show/hide this team member',
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
