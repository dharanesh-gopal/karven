import { defineType } from 'sanity'

export default defineType({
  name: 'careerOpportunity',
  title: 'Career Opportunity',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the career opportunity',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description of the career opportunity',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'iconName',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide icon name (e.g., Users, Award, GraduationCap)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'iconColor',
      title: 'Icon Color',
      type: 'string',
      description: 'Icon and background color theme',
      options: {
        list: [
          { title: 'Blue', value: 'blue' },
          { title: 'Green', value: 'green' },
          { title: 'Red', value: 'red' },
          { title: 'Purple', value: 'purple' },
        ],
      },
      initialValue: 'blue',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Section Image',
      type: 'image',
      description: 'Image displayed alongside the career opportunities (shared for all items)',
      options: {
        hotspot: true,
      },
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
      description: 'Toggle to show/hide this opportunity',
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
      title: 'title',
      order: 'order',
      isActive: 'isActive',
      image: 'image',
    },
    prepare({ title, order, isActive, image }) {
      return {
        title: `${order}. ${title}`,
        subtitle: isActive ? 'Active' : 'Inactive',
        media: image,
      }
    },
  },
})
