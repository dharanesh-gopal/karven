import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactPageSettings',
  title: 'Contact Page Settings',
  type: 'document',
  fields: [
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
      name: 'formFields',
      title: 'Contact Form Fields',
      type: 'object',
      description: 'Configure all form fields including labels, placeholders, and options',
      fields: [
        {
          name: 'fullName',
          title: 'Full Name Field',
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string', initialValue: 'Full Name' },
            { name: 'placeholder', title: 'Placeholder', type: 'string', initialValue: 'Your Full Name' },
            { name: 'required', title: 'Required', type: 'boolean', initialValue: true },
          ],
        },
        {
          name: 'phone',
          title: 'Phone Number Field',
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string', initialValue: 'Phone Number' },
            { name: 'placeholder', title: 'Placeholder', type: 'string', initialValue: '+91 98765 43210' },
            { name: 'required', title: 'Required', type: 'boolean', initialValue: true },
          ],
        },
        {
          name: 'email',
          title: 'Email Field',
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string', initialValue: 'Email' },
            { name: 'placeholder', title: 'Placeholder', type: 'string', initialValue: 'your.email@company.com' },
            { name: 'required', title: 'Required', type: 'boolean', initialValue: true },
          ],
        },
        {
          name: 'enquiryType',
          title: 'Enquiry Type Field',
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string', initialValue: 'Enquiry About' },
            { name: 'placeholder', title: 'Placeholder', type: 'string', initialValue: 'Select enquiry type' },
            { name: 'required', title: 'Required', type: 'boolean', initialValue: true },
            {
              name: 'options',
              title: 'Dropdown Options',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'label', title: 'Display Label', type: 'string' },
                    { name: 'value', title: 'Value', type: 'string' },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'country',
          title: 'Country Field',
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string', initialValue: 'Country' },
            { name: 'placeholder', title: 'Placeholder', type: 'string', initialValue: 'Select Country' },
            { name: 'required', title: 'Required', type: 'boolean', initialValue: true },
            {
              name: 'options',
              title: 'Country Options',
              type: 'array',
              of: [{ type: 'string' }],
              description: 'List of countries to show in dropdown',
            },
          ],
        },
        {
          name: 'city',
          title: 'City Field',
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string', initialValue: 'City' },
            { name: 'placeholder', title: 'Placeholder', type: 'string', initialValue: 'Your City' },
            { name: 'required', title: 'Required', type: 'boolean', initialValue: true },
          ],
        },
        {
          name: 'message',
          title: 'Message Field',
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string', initialValue: 'Message' },
            { name: 'placeholder', title: 'Placeholder', type: 'string', initialValue: 'Tell us about your inquiry...' },
            { name: 'required', title: 'Required', type: 'boolean', initialValue: true },
            { name: 'rows', title: 'Number of Rows', type: 'number', initialValue: 4 },
          ],
        },
      ],
    }),
    defineField({
      name: 'submitButton',
      title: 'Submit Button',
      type: 'object',
      fields: [
        { name: 'text', title: 'Button Text', type: 'string', initialValue: 'Send Message' },
        { name: 'loadingText', title: 'Loading Text', type: 'string', initialValue: 'Sending...' },
      ],
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
      formTitle: 'formTitle',
      isActive: 'isActive',
    },
    prepare({formTitle, isActive}) {
      return {
        title: 'Contact Page Settings',
        subtitle: formTitle || 'Form configuration',
      }
    },
  },
})
