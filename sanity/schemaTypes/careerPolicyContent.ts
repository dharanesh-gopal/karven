import { defineType } from 'sanity'

export default defineType({
  name: 'careerPolicyContent',
  title: 'Career Policy Modal Content',
  type: 'document',
  fields: [
    {
      name: 'modalTitle',
      title: 'Modal Title',
      type: 'string',
      initialValue: 'Employee Policy Guide',
    },
    {
      name: 'edition',
      title: 'Edition Text',
      type: 'string',
      initialValue: '2026 Edition • Global',
    },
    {
      name: 'sections',
      title: 'Policy Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Icon Name',
              type: 'string',
              description: 'Lucide icon name (e.g., Clock, Wallet, Laptop, Baby)',
            },
            {
              name: 'title',
              title: 'Section Title',
              type: 'string',
            },
            {
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'label',
                      title: 'Label',
                      type: 'string',
                    },
                    {
                      name: 'value',
                      title: 'Value',
                      type: 'text',
                      rows: 2,
                    },
                  ],
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'title',
            },
          },
        },
      ],
    },
    {
      name: 'closeButtonText',
      title: 'Close Button Text',
      type: 'string',
      initialValue: 'Close Guide',
    },
    {
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      initialValue: true,
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Career Policy Modal Content',
        subtitle: 'Configure employee policy guide content',
      }
    },
  },
})
