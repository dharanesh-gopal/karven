import { defineType } from 'sanity'

export default defineType({
  name: 'whyTrainWithUs',
  title: 'Why Train With Us?',
  type: 'document',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      description: 'Main title for this section',
      initialValue: 'Why Train With Us?',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'sectionImage',
      title: 'Section Image',
      type: 'image',
      description: 'Image for this section',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      description: 'Key features and benefits',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'iconName',
              title: 'Icon Name',
              type: 'string',
              description: 'Lucide icon name (e.g., Award, Users, CheckCircle, Tractor, GraduationCap)',
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
              name: 'title',
              title: 'Item Title',
              type: 'string',
              description: 'Title of this feature/benefit',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              description: 'Short description of this feature/benefit',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'order',
              title: 'Order',
              type: 'number',
              description: 'Display order within the section (lower numbers appear first)',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'title',
              order: 'order',
              iconName: 'iconName',
            },
            prepare({ title, order, iconName }) {
              return {
                title: `${order}. ${title}`,
                subtitle: `Icon: ${iconName}`,
              }
            },
          },
        },
      ],
    },
    {
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Toggle to show/hide this entire section',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'sectionTitle',
      isActive: 'isActive',
    },
    prepare({ title, isActive }) {
      return {
        title: title || 'Why Train With Us?',
        subtitle: isActive ? 'Active' : 'Inactive',
      }
    },
  },
})
