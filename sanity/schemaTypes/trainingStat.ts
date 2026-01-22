import { defineType } from 'sanity'

export default defineType({
  name: 'trainingStat',
  title: 'Training Stat',
  type: 'document',
  fields: [
    {
      name: 'value',
      title: 'Value',
      type: 'string',
      description: 'Stat value (e.g., "500+", "50+")',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'Stat label (e.g., "Farmers Trained")',
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
      description: 'Toggle to show/hide this stat',
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
      value: 'value',
      label: 'label',
      order: 'order',
      isActive: 'isActive',
    },
    prepare({ value, label, order, isActive }) {
      return {
        title: `${order}. ${value} - ${label}`,
        subtitle: isActive ? 'Active' : 'Inactive',
      }
    },
  },
})
