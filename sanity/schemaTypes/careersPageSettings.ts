import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'careersPageSettings',
  title: 'Careers Page Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'companyValues',
      title: 'Company Values',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'careerValue'}]}],
      description: 'Select company values to display',
    }),
    defineField({
      name: 'hiringSteps',
      title: 'Hiring Steps',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'hiringStep'}]}],
      description: 'Select hiring process steps',
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'careerBenefit'}]}],
      description: 'Select employee benefits to display',
    }),
    defineField({
      name: 'testimonials',
      title: 'Employee Testimonials',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'careerTestimonial'}]}],
      description: 'Select employee testimonials',
    }),
    defineField({
      name: 'cultureImages',
      title: 'Culture Images',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'cultureImage'}]}],
      description: 'Select culture images for gallery',
    }),
    defineField({
      name: 'jobOpenings',
      title: 'Job Openings',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'jobOpening'}]}],
      description: 'Select active job openings',
    }),
    defineField({
      name: 'showApplicationForm',
      title: 'Show Application Form',
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
        title: title || 'Careers Page Settings',
        subtitle: isActive ? 'Active' : 'Inactive',
      }
    },
  },
})
