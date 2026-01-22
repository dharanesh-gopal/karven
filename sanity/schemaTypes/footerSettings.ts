import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'footerSettings',
  title: 'Footer Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      initialValue: 'KarVenSen',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      initialValue: 'AI-Driven Drone & Software Solutions',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      initialValue: '+91 123 456 7890',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      initialValue: 'info@karvensen.com',
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        { name: 'twitter', type: 'url', title: 'Twitter URL' },
        { name: 'linkedin', type: 'url', title: 'LinkedIn URL' },
        { name: 'youtube', type: 'url', title: 'YouTube URL' },
        { name: 'facebook', type: 'url', title: 'Facebook URL' },
        { name: 'instagram', type: 'url', title: 'Instagram URL' },
      ],
    }),
    defineField({
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
      initialValue: 'KarVenSen. All rights reserved.',
    }),
    defineField({
      name: 'groupCompanies',
      title: 'Group Companies',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Company Name' },
            { name: 'url', type: 'url', title: 'Website URL' },
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer Settings',
      }
    },
  },
})
