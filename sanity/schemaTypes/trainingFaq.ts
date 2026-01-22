import { defineType } from 'sanity'

export default defineType({
  name: 'trainingFaq',
  title: 'Training FAQ',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'text',
      validation: (Rule) => Rule.required(),
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
      description: 'Toggle to show/hide this FAQ',
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
      question: 'question',
      order: 'order',
      isActive: 'isActive',
    },
    prepare({ question, order, isActive }) {
      return {
        title: `${order}. ${question}`,
        subtitle: isActive ? 'Active' : 'Inactive',
      }
    },
  },
})
