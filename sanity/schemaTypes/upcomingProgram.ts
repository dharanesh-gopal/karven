import { defineType } from 'sanity'

export default defineType({
  name: 'upcomingProgram',
  type: 'document',
  title: 'Upcoming Training Programs',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Program Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Short description of the program',
      rows: 3,
    },
    {
      name: 'image',
      type: 'image',
      title: 'Program Image',
      description: 'Featured image for the program card',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      type: 'string',
      title: 'Date',
      description: 'Program dates (e.g., Feb 15-17, 2026)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'spots',
      type: 'string',
      title: 'Available Spots',
      description: 'Number of spots available or registration status',
      initialValue: 'Limited spots available',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Program Category',
      options: {
        list: [
          { title: 'Farmer Training', value: 'farmer' },
          { title: 'School Workshop', value: 'school' },
          { title: 'Professional Course', value: 'professional' },
          { title: 'Online Course', value: 'online' },
        ],
      },
    },
    {
      name: 'duration',
      type: 'string',
      title: 'Duration',
      description: 'Program duration (e.g., 3 Days, 8 Weeks)',
    },
    {
      name: 'fee',
      type: 'string',
      title: 'Fee',
      description: 'Program fee or "Free" (optional)',
    },
    {
      name: 'registrationLink',
      type: 'url',
      title: 'Registration Link',
      description: 'Link to registration form (optional)',
    },
    {
      name: 'enquireButtonText',
      type: 'string',
      title: 'Enquire Button Text',
      description: 'Text for the enquire button (e.g., "Enquire Now", "Register Now")',
      initialValue: 'Enquire Now',
    },
    {
      name: 'enquireLink',
      type: 'string',
      title: 'Enquire Link',
      description: 'Link for enquiry (e.g., /contact?enquiry=training or custom URL)',
      initialValue: '/contact?enquiry=training',
    },
    {
      name: 'order',
      type: 'number',
      title: 'Display Order',
      description: 'Order in which this program appears',
    },
    {
      name: 'isActive',
      type: 'boolean',
      title: 'Active',
      description: 'Show/hide this program',
      initialValue: true,
    },
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
