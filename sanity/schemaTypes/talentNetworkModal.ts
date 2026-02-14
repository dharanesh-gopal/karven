import { defineType } from 'sanity'

export default defineType({
  name: 'talentNetworkModal',
  title: 'Talent Network Modal Content',
  type: 'document',
  fields: [
    {
      name: 'modalTitle',
      title: 'Modal Title',
      type: 'string',
      initialValue: 'Join Talent Network',
    },
    {
      name: 'modalSubtitle',
      title: 'Modal Subtitle',
      type: 'text',
      rows: 2,
      initialValue: 'Leave your details and we will contact you for future roles.',
    },
    {
      name: 'successTitle',
      title: 'Success Message Title',
      type: 'string',
      initialValue: 'Application Received',
    },
    {
      name: 'successSubtitle',
      title: 'Success Message Subtitle',
      type: 'string',
      initialValue: 'Welcome to the fleet. Check your inbox.',
    },
    {
      name: 'successConfirmation',
      title: 'Success Confirmation Message',
      type: 'string',
      initialValue: 'You\'re on the list!',
    },
    {
      name: 'successDescription',
      title: 'Success Description',
      type: 'string',
      initialValue: 'We\'ve sent a confirmation email to your inbox.',
    },
    {
      name: 'fields',
      title: 'Form Fields',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Field Name',
              type: 'string',
            },
            {
              name: 'label',
              title: 'Field Label',
              type: 'string',
            },
            {
              name: 'placeholder',
              title: 'Placeholder',
              type: 'string',
            },
            {
              name: 'type',
              title: 'Input Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Text', value: 'text' },
                  { title: 'Email', value: 'email' },
                  { title: 'Tel', value: 'tel' },
                ],
              },
            },
            {
              name: 'required',
              title: 'Required',
              type: 'boolean',
              initialValue: true,
            },
          ],
        },
      ],
    },
    {
      name: 'submitButtonText',
      title: 'Submit Button Text',
      type: 'string',
      initialValue: 'Join Network',
    },
    {
      name: 'submittingText',
      title: 'Submitting Text',
      type: 'string',
      initialValue: 'Sending...',
    },
    {
      name: 'errorMessage',
      title: 'Error Message',
      type: 'string',
      initialValue: 'Something went wrong. Please try again.',
    },
    {
      name: 'closeButtonText',
      title: 'Close Button Text',
      type: 'string',
      initialValue: 'Close Window',
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
        title: 'Talent Network Modal Content',
        subtitle: 'Configure talent network modal content',
      }
    },
  },
})
