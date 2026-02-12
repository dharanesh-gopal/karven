import { defineType } from 'sanity'

export default defineType({
    name: 'aboutContactForm',
    type: 'document',
    title: 'About - Contact Form Settings',
    fields: [
        {
            name: 'headerText',
            type: 'text',
            title: 'Header Text',
            rows: 2,
            initialValue: 'Please fill out the form below and we will get back to you as soon as possible.',
        },
        {
            name: 'namePlaceholder',
            type: 'string',
            title: 'Name Field Placeholder',
            initialValue: '* Name',
        },
        {
            name: 'emailPlaceholder',
            type: 'string',
            title: 'Email Field Placeholder',
            initialValue: '* Email',
        },
        {
            name: 'messagePlaceholder',
            type: 'string',
            title: 'Message Field Placeholder',
            initialValue: '* Message',
        },
        {
            name: 'submitButtonText',
            type: 'string',
            title: 'Submit Button Text',
            initialValue: 'Send Message',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'floatingButtonText',
            type: 'string',
            title: 'Floating Button Text (Bottom Right)',
            initialValue: 'Send message',
        },
        {
            name: 'poweredByText',
            type: 'string',
            title: 'Powered By Text',
            initialValue: 'Powered by tawk.to',
        },
        {
            name: 'isActive',
            type: 'boolean',
            title: 'Active',
            initialValue: true,
        },
    ],
})
