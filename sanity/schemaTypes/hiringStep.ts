import { defineType } from 'sanity'

export default defineType({
  name: 'hiringStep',
  title: 'Hiring Process Steps',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    },
    {
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide icon name (e.g., FileText, UserCheck, Terminal, CheckCircle)',
    },
    {
      name: 'order',
      title: 'Step Number',
      type: 'number',
      validation: (Rule) => Rule.required(),
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
      title: 'title',
      subtitle: 'description',
      order: 'order',
    },
    prepare({ title, subtitle, order }) {
      return {
        title: `Step ${order}: ${title}`,
        subtitle,
      }
    },
  },
})
