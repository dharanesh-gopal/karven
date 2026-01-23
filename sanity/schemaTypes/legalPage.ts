import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'legalPage',
  title: 'Legal Pages (Terms & Privacy)',
  type: 'document',
  fields: [
    defineField({
      name: 'pageType',
      title: 'Page Type',
      type: 'string',
      options: {
        list: [
          { title: 'Terms of Service', value: 'terms' },
          { title: 'Privacy Policy', value: 'privacy' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'lastUpdated',
      title: 'Last Updated Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'subtitle', type: 'text', title: 'Subtitle/Description' },
      ]
    }),
    defineField({
      name: 'introduction',
      title: 'Introduction',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'sections',
      title: 'Content Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Section Title' },
            { 
              name: 'content', 
              type: 'array',
              of: [{ type: 'block' }],
              title: 'Content'
            },
            {
              name: 'subsections',
              type: 'array',
              title: 'Subsections',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'title', type: 'string', title: 'Subsection Title' },
                    { 
                      name: 'content', 
                      type: 'array',
                      of: [{ type: 'block' }],
                      title: 'Content'
                    },
                  ]
                }
              ]
            },
            { name: 'order', type: 'number', title: 'Display Order' }
          ]
        }
      ]
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      description: 'Contact details for legal inquiries',
      fields: [
        { name: 'email', type: 'string', title: 'Email' },
        { name: 'phone', type: 'string', title: 'Phone' },
        { name: 'address', type: 'text', title: 'Address' },
      ]
    }),
  ],
  preview: {
    select: {
      type: 'pageType',
      date: 'lastUpdated',
      active: 'isActive'
    },
    prepare({ type, date, active }) {
      return {
        title: type === 'terms' ? 'Terms of Service' : 'Privacy Policy',
        subtitle: `Updated: ${date} ${active ? '✅' : '❌'}`,
      }
    }
  }
})
