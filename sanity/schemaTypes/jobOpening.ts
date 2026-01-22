import { defineType } from 'sanity'

export default defineType({
  name: 'jobOpening',
  title: 'Job Openings (Complete Details)',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'Job ID',
      type: 'slug',
      description: 'Unique identifier for URL (e.g., eng-1, ops-2)',
      options: {
        source: 'title',
        maxLength: 50,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'department',
      title: 'Department',
      type: 'string',
      options: {
        list: [
          { title: 'Engineering', value: 'Engineering' },
          { title: 'Flight Operations', value: 'Flight Operations' },
          { title: 'Product', value: 'Product' },
          { title: 'Business', value: 'Business' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: [
          { title: 'Full-time', value: 'Full-time' },
          { title: 'Part-time', value: 'Part-time' },
          { title: 'Contract', value: 'Contract' },
          { title: 'On-site', value: 'On-site' },
          { title: 'Remote', value: 'Remote' },
          { title: 'Hybrid', value: 'Hybrid' },
        ],
      },
    },
    {
      name: 'experience',
      title: 'Experience Required',
      type: 'string',
      description: 'e.g., 5+ Years, 3-5 Years',
    },
    {
      name: 'postedAt',
      title: 'Posted Date',
      type: 'string',
      description: 'e.g., 2 days ago, Just now',
    },
    {
      name: 'description',
      title: 'Job Description',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'responsibilities',
      title: 'Key Responsibilities',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'requirements',
      title: 'Requirements',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
    {
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
      description: 'Set to false to hide job from listing',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'department',
      department: 'department',
      location: 'location',
      isActive: 'isActive',
    },
    prepare({ title, department, location, isActive }) {
      return {
        title,
        subtitle: `${department} • ${location} ${!isActive ? '(Inactive)' : ''}`,
      }
    },
  },
})
