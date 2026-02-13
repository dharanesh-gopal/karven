import { defineType } from 'sanity'

export default defineType({
  name: 'trainingCourse',
  title: 'Training Course (Full Details)',
  type: 'document',
  fields: [
    // Basic Information
    {
      name: 'title',
      title: 'Course Title',
      type: 'string',
      description: 'Full course title (e.g., "Course A | Small Class Drone Pilot Training")',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      description: 'URL-friendly identifier (e.g., "course-a"). Determines URL: /training/courses/[slug]',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Short tagline (e.g., "Introduction to Drone Flying")',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Course Banner Image',
      type: 'image',
      description: 'Main course image displayed on course page',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },

    // Course Details
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
      description: 'Course price (e.g., "₹25,000", "₹8,000 per student")',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'level',
      title: 'Difficulty Level',
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
      title: 'Maximum Students',
      type: 'string',
      description: 'Maximum class size (e.g., "15", "20-30")',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'certificationIcon',
      title: 'Certification Icon',
      type: 'string',
      description: 'Lucide icon name for certification (e.g., "Award", "Medal", "Trophy")',
      initialValue: 'Award',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'certification',
      title: 'Certification Text',
      type: 'string',
      description: 'Main certification text (e.g., "DGCA Remote Pilot Certificate")',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'certificationSubtext',
      title: 'Certification Subtext',
      type: 'text',
      description: 'Additional details about the certification',
      initialValue: 'Earn a certificate upon successful completion of the course',
      validation: (Rule) => Rule.required(),
    },

    // Course Description
    {
      name: 'descriptionTitle',
      title: 'Description Section Title',
      type: 'string',
      description: 'Heading for the description section',
      initialValue: 'Course Description',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Course Description',
      type: 'text',
      description: 'Detailed description explaining what the course covers',
      validation: (Rule) => Rule.required(),
    },

    // Course Highlights
    {
      name: 'highlightsTitle',
      title: 'Highlights Section Title',
      type: 'string',
      description: 'Heading for the highlights section',
      initialValue: 'Course Highlights',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'highlightsList',
      title: 'Highlights',
      type: 'array',
      description: 'Key features and benefits of the course',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(3),
    },

    // Course Curriculum
    {
      name: 'curriculumTitle',
      title: 'Curriculum Section Title',
      type: 'string',
      description: 'Heading for the curriculum section',
      initialValue: 'Course Curriculum',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'curriculumList',
      title: 'Curriculum Sections',
      type: 'array',
      description: 'Detailed syllabus broken down by session/day',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'session',
              title: 'Session/Day',
              type: 'string',
              description: 'Session number or day range (e.g., "Day 1-2", "Session 1")',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'title',
              title: 'Session Title',
              type: 'string',
              description: 'Title of this session (e.g., "Introduction to Drones")',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'topics',
              title: 'Topics Covered',
              type: 'array',
              description: 'List of topics covered in this session',
              of: [{ type: 'string' }],
              validation: (Rule) => Rule.required().min(1),
            },
          ],
          preview: {
            select: {
              session: 'session',
              title: 'title',
            },
            prepare({ session, title }) {
              return {
                title: `${session}: ${title}`,
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },

    // Prerequisites
    {
      name: 'prerequisitesTitle',
      title: 'Prerequisites Section Title',
      type: 'string',
      description: 'Heading for the prerequisites section',
      initialValue: 'Prerequisites',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'prerequisitesList',
      title: 'Prerequisites',
      type: 'array',
      description: 'Requirements and eligibility criteria',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(1),
    },

    // What's Included
    {
      name: 'includedTitle',
      title: 'What\'s Included Section Title',
      type: 'string',
      description: 'Heading for the what\'s included section',
      initialValue: 'What\'s Included',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'includedList',
      title: 'Included Items',
      type: 'array',
      description: 'What students receive with this course',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(1),
    },

    // CTA Settings
    {
      name: 'doubtsTitle',
      title: 'Doubts Section Title',
      type: 'string',
      description: 'Main heading for the doubts/contact section',
      initialValue: 'Still Have Any Doubts?',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'doubtsMessage',
      title: 'Doubts Section Message',
      type: 'text',
      description: 'Message encouraging students to reach out',
      initialValue: 'Feel free to reach out to us. We\'re here to help you make the right decision for your career.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'contactUsText',
      title: 'Contact Us Button Text',
      type: 'string',
      initialValue: 'Contact Us',
    },
    {
      name: 'contactUsLink',
      title: 'Contact Us Button Link',
      type: 'string',
      initialValue: '/contact?enquiry=training',
    },
    {
      name: 'enrollNowText',
      title: 'Enroll Now Button Text',
      type: 'string',
      initialValue: 'Enroll Now',
    },
    {
      name: 'enrollNowLink',
      title: 'Enroll Now Button Link',
      type: 'string',
      initialValue: '/contact?enquiry=enrollment',
    },

    // Display Settings
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which course appears (lower numbers first)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Toggle to show/hide this course on the website',
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
