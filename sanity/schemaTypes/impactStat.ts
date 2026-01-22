import { defineType } from 'sanity'

export default defineType({
  name: 'impactStat',
  type: 'document',
  title: 'Impact Statistics',
  fields: [
    {
      name: 'value',
      type: 'number',
      title: 'Value',
      description: 'The number to display',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'label',
      type: 'string',
      title: 'Label',
      description: 'Description of the statistic',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'suffix',
      type: 'string',
      title: 'Suffix',
      description: 'Suffix to add after number (e.g., +, K, M)',
      initialValue: '+',
    },
    {
      name: 'icon',
      type: 'string',
      title: 'Icon Name',
      description: 'Lucide icon name (e.g., Users, Cpu, Target, Award)',
    },
    {
      name: 'order',
      type: 'number',
      title: 'Display Order',
      description: 'Order in which this stat appears (lower numbers first)',
    },
    {
      name: 'isActive',
      type: 'boolean',
      title: 'Active',
      description: 'Show/hide this statistic',
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
