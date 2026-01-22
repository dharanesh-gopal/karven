import { defineType } from 'sanity'

export default defineType({
  name: 'serviceItem',
  type: 'document',
  title: 'Service Items',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Service Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'URL-friendly identifier (e.g., survey-mapping, ai-software)',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      type: 'string',
      title: 'Service Category',
      options: {
        list: [
          { title: 'Drone Services', value: 'drone' },
          { title: 'AI & Software Services', value: 'software' },
          { title: 'Educational Services', value: 'education' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'icon',
      type: 'string',
      title: 'Icon Name',
      description: 'Lucide icon name (e.g., Camera, Video, Cpu, Cloud, GraduationCap)',
    },
    {
      name: 'tagline',
      type: 'string',
      title: 'Tagline',
      description: 'Short tagline (optional, mainly for software services)',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      rows: 3,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'features',
      type: 'array',
      title: 'Features',
      description: 'List of key features (for detailed services)',
      of: [{ type: 'string' }],
    },
    {
      name: 'applications',
      type: 'array',
      title: 'Applications',
      description: 'Use cases or applications (for detailed services)',
      of: [{ type: 'string' }],
    },
    {
      name: 'order',
      type: 'number',
      title: 'Display Order',
      description: 'Order within category (lower numbers first)',
    },
    {
      name: 'isActive',
      type: 'boolean',
      title: 'Active',
      description: 'Show/hide this service',
      initialValue: true,
    },
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Category',
      name: 'categoryAsc',
      by: [{ field: 'category', direction: 'asc' }],
    },
  ],
})
