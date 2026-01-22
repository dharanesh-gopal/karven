import { defineType } from 'sanity'

export default defineType({
  name: 'journeyMilestone',
  type: 'document',
  title: 'Journey Milestones',
  fields: [
    {
      name: 'year',
      type: 'string',
      title: 'Year',
      description: 'Year of the milestone',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'event',
      type: 'text',
      title: 'Event',
      description: 'Description of the milestone',
      rows: 2,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'order',
      type: 'number',
      title: 'Display Order',
      description: 'Order in timeline (lower numbers first)',
    },
    {
      name: 'isActive',
      type: 'boolean',
      title: 'Active',
      description: 'Show/hide this milestone',
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
