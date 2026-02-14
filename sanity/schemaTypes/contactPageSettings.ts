import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactPageSettings',
  title: 'Contact Page Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'formTitle',
      title: 'Form Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'formSubtitle',
      title: 'Form Subtitle',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'successMessage',
      title: 'Success Message',
      type: 'text',
      rows: 2,
      initialValue: 'Thank you for contacting us! We will get back to you soon.',
    }),
    defineField({
      name: 'errorMessage',
      title: 'Error Message',
      type: 'text',
      rows: 2,
      initialValue: 'Something went wrong. Please try again later.',
    }),
    defineField({
      name: 'locations',
      title: 'Office Locations',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'officeLocation'}]}],
      description: 'Select office locations to display',
    }),
    defineField({
      name: 'showMap',
      title: 'Show Map',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seoObject',
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      isActive: 'isActive',
    },
    prepare({title, isActive}) {
      return {
        title: title || 'Contact Page Settings',
        subtitle: isActive ? 'Active' : 'Inactive',
      }
    },
  },
})
