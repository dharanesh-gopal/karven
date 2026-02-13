import { defineType } from 'sanity'

export default defineType({
  name: 'enrollPage',
  title: 'Enroll Page',
  type: 'document',
  fields: [
    // Page Settings
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Main title for the enrollment form',
      initialValue: 'Enroll in Course',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle/Description',
      type: 'text',
      description: 'Additional description or instructions for enrollment',
      initialValue: 'Fill out the form below to enroll in this course',
    },
    {
      name: 'showCourseInfo',
      title: 'Show Course Info in Modal',
      type: 'boolean',
      description: 'Display course subtitle and fee at the top of enrollment form',
      initialValue: true,
    },
    {
      name: 'courseSubtitleLabel',
      title: 'Course Subtitle Label',
      type: 'string',
      description: 'Label to display before course subtitle (leave empty to hide)',
      initialValue: '',
    },
    {
      name: 'courseFeeLabel',
      title: 'Course Fee Label',
      type: 'string',
      description: 'Text to display before the fee amount',
      initialValue: 'Course Fee:',
    },

    // Form Field Labels
    {
      name: 'fullNameLabel',
      title: 'Full Name Field Label',
      type: 'string',
      initialValue: 'Full Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'fullNamePlaceholder',
      title: 'Full Name Placeholder',
      type: 'string',
      initialValue: 'Enter your full name',
    },
    {
      name: 'emailLabel',
      title: 'Email Field Label',
      type: 'string',
      initialValue: 'Email Address',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'emailPlaceholder',
      title: 'Email Placeholder',
      type: 'string',
      initialValue: 'your@email.com',
    },
    {
      name: 'phoneLabel',
      title: 'Phone Field Label',
      type: 'string',
      initialValue: 'Phone Number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'phonePlaceholder',
      title: 'Phone Placeholder',
      type: 'string',
      initialValue: '+91 1234567890',
    },
    {
      name: 'addressLabel',
      title: 'Address Field Label',
      type: 'string',
      initialValue: 'Address',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'addressPlaceholder',
      title: 'Address Placeholder',
      type: 'string',
      initialValue: 'Street address',
    },
    {
      name: 'cityLabel',
      title: 'City Field Label',
      type: 'string',
      initialValue: 'City',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'stateLabel',
      title: 'State Field Label', 
      type: 'string',
      initialValue: 'State',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'pincodeLabel',
      title: 'Pincode Field Label',
      type: 'string',
      initialValue: 'Pincode',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'educationLabel',
      title: 'Education Field Label',
      type: 'string',
      initialValue: 'Highest Education',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'educationOptions',
      title: 'Education Options',
      type: 'array',
      description: 'Available education level options',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Display Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'value',
              title: 'Value',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'value',
            },
          },
        },
      ],
      initialValue: [
        { label: '10th Pass', value: '10th' },
        { label: '12th Pass', value: '12th' },
        { label: 'Diploma', value: 'diploma' },
        { label: 'Graduate', value: 'graduate' },
        { label: 'Post Graduate', value: 'postgraduate' },
        { label: 'Other', value: 'other' },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'experienceLabel',
      title: 'Experience Field Label',
      type: 'string',
      initialValue: 'Prior Drone Experience',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'experienceOptions',
      title: 'Experience Options',
      type: 'array',
      description: 'Available drone experience level options',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Display Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'value',
              title: 'Value',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'value',
            },
          },
        },
      ],
      initialValue: [
        { label: 'No Experience', value: 'none' },
        { label: 'Beginner (0-6 months)', value: 'beginner' },
        { label: 'Intermediate (6-12 months)', value: 'intermediate' },
        { label: 'Advanced (1+ year)', value: 'advanced' },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'messageLabel',
      title: 'Additional Information Field Label',
      type: 'string',
      initialValue: 'Additional Information (Optional)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'messagePlaceholder',
      title: 'Additional Information Placeholder',
      type: 'string',
      initialValue: 'Any special requirements or questions?',
    },

    // Button Settings
    {
      name: 'submitButtonText',
      title: 'Submit Button Text',
      type: 'string',
      initialValue: 'Submit Enrollment',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'submitButtonLoadingText',
      title: 'Submit Button Loading Text',
      type: 'string',
      initialValue: 'Submitting...',
    },

    // Success Message
    {
      name: 'successTitle',
      title: 'Success Message Title',
      type: 'string',
      initialValue: 'Enrollment Submitted!',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'successMessage',
      title: 'Success Message Text',
      type: 'text',
      initialValue: 'Our team will contact you shortly with payment details and further instructions.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'successNote',
      title: 'Success Note',
      type: 'text',
      initialValue: '* Our team will contact you with payment details and further instructions',
      validation: (Rule) => Rule.required(),
    },

    // Form Settings
    {
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Toggle to enable/disable enrollment form',
      initialValue: true,
    },
    {
      name: 'allowMultipleSubmissions',
      title: 'Allow Multiple Submissions',
      type: 'boolean',
      description: 'Allow users to submit enrollment form multiple times',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'title',
      isActive: 'isActive',
    },
    prepare({ title, isActive }) {
      return {
        title: `Enrollment Form: ${title}`,
        subtitle: isActive ? 'Active' : 'Inactive',
      }
    },
  },
})