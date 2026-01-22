import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'notification',
  title: 'Notification',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Feature', value: 'feature' },
          { title: 'Update', value: 'update' },
          { title: 'Add-on', value: 'addon' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isNew',
      title: 'Mark as New',
      type: 'boolean',
      initialValue: true,
      description: 'Show this notification as unread to users',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
      description: 'Only active notifications will be shown',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'message',
      type: 'type',
      isNew: 'isNew',
    },
    prepare({ title, subtitle, type, isNew }) {
      return {
        title,
        subtitle: `${type} ${isNew ? '🔴 New' : ''}`,
      }
    },
  },
  orderings: [
    {
      title: 'Published Date, New',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
})
