import { defineType } from 'sanity'

export default defineType({
  name: 'trainingCourse',
  title: 'Training Course (Full Details)',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Course title (e.g., "Course A | Small Class Drone Pilot Training")',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly identifier (e.g., "course-a", "course-b"). This determines the course URL: /training/courses/[slug]',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Course subtitle (e.g., "Introduction to Drone Flying")',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Course Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'Course duration (e.g., "8 Days", "3-5 Days")',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'Course price (e.g., "₹25,000")',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'level',
      title: 'Level',
      type: 'string',
      options: {
        list: [
          { title: 'Beginner', value: 'Beginner' },
          { title: 'Intermediate', value: 'Intermediate' },
          { title: 'Advanced', value: 'Advanced' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'maxStudents',
      title: 'Max Students',
      type: 'string',
      description: 'Maximum students (e.g., "15", "20-30")',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'certification',
      title: 'Certification',
      type: 'string',
      description: 'Certificate type (e.g., "Certificate of Completion", "Professional Certification")',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'highlights',
      title: 'Course Highlights',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'curriculum',
      title: 'Curriculum',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'session',
              title: 'Session',
              type: 'string',
              description: 'Session number/range (e.g., "Session 1-2", "Day 1")',
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'topics',
              title: 'Topics',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'prerequisites',
      title: 'Prerequisites',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'included',
      title: "What's Included",
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'detailsLink',
      title: 'Details Page Link (Deprecated)',
      type: 'string',
      description: '⚠️ DEPRECATED: This field is no longer used. The URL is automatically generated from the slug field above.',
      readOnly: true,
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Display order (lower numbers appear first)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Toggle to show/hide this course',
      initialValue: true,
    },
  ],
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image',
      order: 'order',
      isActive: 'isActive',
    },
    prepare({ title, subtitle, media, order, isActive }) {
      return {
        title: `${order}. ${title}`,
        subtitle: `${subtitle} ${isActive ? '(Active)' : '(Inactive)'}`,
        media,
      }
    },
  },
})
