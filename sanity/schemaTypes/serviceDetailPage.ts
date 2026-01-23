import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'serviceDetailPage',
  title: 'Service Detail Pages',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        { name: 'badge', type: 'string', title: 'Badge Text' },
        { name: 'title', type: 'string', title: 'Main Title' },
        { name: 'subtitle', type: 'text', title: 'Subtitle' },
        { name: 'backgroundImage', type: 'image', title: 'Background Image' },
      ]
    }),
    defineField({
      name: 'overview',
      title: 'Overview Section',
      type: 'object',
      fields: [
        { name: 'title', type: 'string', title: 'Section Title' },
        { name: 'description', type: 'text', title: 'Description' },
      ]
    }),
    defineField({
      name: 'solutions',
      title: 'Solutions/Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'id', type: 'string', title: 'ID' },
            { name: 'icon', type: 'string', title: 'Icon Name (Lucide)' },
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'description', type: 'text', title: 'Description' },
            { 
              name: 'features', 
              type: 'array', 
              of: [{ type: 'string' }],
              title: 'Feature List'
            },
            { name: 'order', type: 'number', title: 'Display Order' }
          ]
        }
      ]
    }),
    defineField({
      name: 'keyFeatures',
      title: 'Key Features Section',
      type: 'object',
      fields: [
        { name: 'title', type: 'string', title: 'Section Title' },
        { name: 'subtitle', type: 'string', title: 'Subtitle' },
        {
          name: 'features',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'icon', type: 'string', title: 'Icon Name' },
                { name: 'title', type: 'string', title: 'Feature Title' },
                { name: 'description', type: 'text', title: 'Description' }
              ]
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'useCases',
      title: 'Use Cases Section',
      type: 'object',
      fields: [
        { name: 'title', type: 'string', title: 'Section Title' },
        {
          name: 'cases',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', type: 'string', title: 'Use Case Title' },
                { name: 'description', type: 'text', title: 'Description' },
                { name: 'image', type: 'image', title: 'Image' }
              ]
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'process',
      title: 'Process/Workflow Section',
      type: 'object',
      fields: [
        { name: 'title', type: 'string', title: 'Section Title' },
        { name: 'subtitle', type: 'string', title: 'Subtitle' },
        {
          name: 'steps',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'number', type: 'number', title: 'Step Number' },
                { name: 'title', type: 'string', title: 'Step Title' },
                { name: 'description', type: 'text', title: 'Description' },
                { name: 'icon', type: 'string', title: 'Icon Name' }
              ]
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies Section',
      type: 'object',
      fields: [
        { name: 'title', type: 'string', title: 'Section Title' },
        {
          name: 'items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'name', type: 'string', title: 'Technology Name' },
                { name: 'description', type: 'text', title: 'Description' }
              ]
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action',
      type: 'object',
      fields: [
        { name: 'title', type: 'string', title: 'CTA Title' },
        { name: 'description', type: 'text', title: 'Description' },
        { name: 'buttonText', type: 'string', title: 'Button Text' },
        { name: 'buttonLink', type: 'string', title: 'Button Link' }
      ]
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        { name: 'metaTitle', type: 'string', title: 'Meta Title' },
        { name: 'metaDescription', type: 'text', title: 'Meta Description' },
        { name: 'keywords', type: 'array', of: [{ type: 'string' }], title: 'Keywords' }
      ]
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
      active: 'isActive'
    },
    prepare({ title, slug, active }) {
      return {
        title: title,
        subtitle: `/${slug} ${active ? '✅' : '❌'}`,
      }
    }
  }
})
